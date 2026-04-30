"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch, type FieldPath } from "react-hook-form";
import EmailForm from "@/features/auth/components/register/email-form";
import VerifyEmail from "@/features/auth/components/register/verify-email";
import UserInfo from "@/features/auth/components/register/user-info";
import PasswordForm from "@/features/auth/components/register/password-form";
import { sendEmailVerification } from "@/features/auth/lib/apis/send-email.api";
import { confirmEmailVerification } from "@/features/auth/lib/apis/confirm-email.api";
import { register } from "@/features/auth/lib/apis/register.api";
import { IRegisterFields } from "../../lib/types/auth";
import {
  confirmEmailVerificationBodySchema,
  registerBodySchema,
} from "../../lib/schemas/auth.schema";
import { IErrorResponse } from "@/shared/lib/types/api";

const fields: FieldPath<IRegisterFields>[][] = [
  ["email"],
  [],
  ["firstName", "lastName", "username", "phone"],
  ["password", "confirmPassword"],
];

function findFieldError(
  errors: IErrorResponse["errors"],
  fieldName: "username" | "phone",
) {
  return errors?.find((item) => item.path.toLowerCase().includes(fieldName));
}

export default function RegisterFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [focusEmail, setFocusEmail] = useState(false);

  const form = useForm<IRegisterFields>({
    resolver: zodResolver(registerBodySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onTouched",
  });

  const email =
    useWatch({
      control: form.control,
      name: "email",
    }) ?? "";

  useEffect(() => {
    if (step !== 0 || !focusEmail) return;

    document.getElementById("email")?.focus();
    setFocusEmail(false);
  }, [step, focusEmail]);

  async function goToNextFormStep() {
    setError(null);
    form.clearErrors(["username", "phone"]);

    if (step === 0 && !email.trim()) {
      form.setError("email", {
        type: "manual",
        message: "Your email is required",
      });
      return;
    }

    const isValid = await form.trigger(fields[step], { shouldFocus: true });

    if (!isValid) {
      return;
    }

    if (step === 0) {
      startTransition(async () => {
        const response = await sendEmailVerification({ email });

        if (response.status === false) {
          setError(response.message || "Failed to send verification email.");
          return;
        }

        setStep(1);
      });
      return;
    }

    setStep((currentStep) => Math.min(currentStep + 1, 3));
  }

  function handleOtpVerification() {
    setError(null);
    setOtpError(null);

    const validationResult = confirmEmailVerificationBodySchema.safeParse({
      email,
      code: otp,
    });

    if (!validationResult.success) {
      const codeError = validationResult.error.flatten().fieldErrors.code?.[0];
      const emailError =
        validationResult.error.flatten().fieldErrors.email?.[0];

      setOtpError(codeError || emailError || "Failed to verify code.");
      return;
    }

    startTransition(async () => {
      const response = await confirmEmailVerification(validationResult.data);

      if (response.status === false) {
        setError(response.message || "Failed to verify code.");
        return;
      }

      setOtpError(null);
      setStep(2);
    });
  }

  function handleOtpChange(value: string) {
    setError(null);
    setOtpError(null);
    setOtp(value);
  }

  function handleEditEmail() {
    setError(null);
    setOtpError(null);
    setFocusEmail(true);
    setStep(0);
  }

  function handleRegisterSubmit(data: IRegisterFields) {
    setError(null);
    form.clearErrors(["username", "phone"]);

    startTransition(async () => {
      try {
        const response = await register({
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.username,
          email: data.email,
          phone: data.phone || undefined,
          password: data.password,
          confirmPassword: data.confirmPassword,
        });

        if (response.status === false) {
          const usernameError = findFieldError(response.errors, "username");
          const phoneError = findFieldError(response.errors, "phone");
          const message = response.message || "Validation failed.";
          const hasUsernameOrPhoneConflict =
            Boolean(usernameError || phoneError) ||
            /username|phone/i.test(message);

          if (usernameError) {
            form.setError("username", {
              type: "server",
              message: usernameError.message,
            });
          }

          if (phoneError) {
            form.setError("phone", {
              type: "server",
              message: phoneError.message,
            });
          }

          if (hasUsernameOrPhoneConflict) {
            setStep(2);
          }

          setError(message);
          return;
        }

        router.push("/login");
      } catch (submissionError) {
        setError(
          submissionError instanceof Error
            ? submissionError.message
            : "Failed to create account.",
        );
      }
    });
  }

  return (
    <main className="flex items-center justify-center">
      {step === 0 && (
        <EmailForm
          form={form}
          error={error}
          isPending={isPending}
          onNext={goToNextFormStep}
        />
      )}

      {step === 1 && (
        <VerifyEmail
          email={email}
          otp={otp}
          error={error}
          otpError={otpError}
          isPending={isPending}
          onOtpChange={handleOtpChange}
          onEditEmail={handleEditEmail}
          onVerify={handleOtpVerification}
        />
      )}

      {step === 2 && (
        <UserInfo
          form={form}
          error={error}
          isPending={isPending}
          onNext={goToNextFormStep}
        />
      )}

      {step === 3 && (
        <PasswordForm
          form={form}
          error={error}
          isPending={isPending}
          onSubmit={form.handleSubmit(handleRegisterSubmit)}
        />
      )}
    </main>
  );
}
