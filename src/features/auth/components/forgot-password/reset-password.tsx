"use client";

import { Card, CardContent } from "@/shared/components/ui/card";
import AuthHeading from "../auth-heading";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthFooter from "../auth-footer";
import { IResetPasswordFields } from "../../lib/types/auth";
import { resetPasswordFormSchema } from "../../lib/schemas/auth.schema";
import { FormInput } from "../form-input";
import { FormButton } from "../form-button";

export default function ResetPassword() {
  const form = useForm<IResetPasswordFields>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: IResetPasswordFields) {
    void data;
  }

  return (
    <Card className="w-full max-w-lg px-6">
      <FormProvider {...form}>
        {/* Heading */}
        <AuthHeading text="Forgot Password" className="mb-0" />

        <p className="text-gray-500 ms-4 text-base mb-6">
          Create a new strong password for your account.
        </p>

        {/* Form */}
        <CardContent className="relative">
          <form
            className="space-y-5"
            id="reset-password-form"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* Password */}
            <FormInput
              name="newPassword"
              label="Password"
              placeholder="********"
              type="password"
              autoComplete="new-password"
              required
            />

            {/* Confirm password */}
            <FormInput
              name="confirmPassword"
              label="Confirm Password"
              placeholder="********"
              type="password"
              autoComplete="new-password"
              required
            />

            {/* Button */}
            <FormButton label="Reset Password" className="mt-5" />
          </form>
        </CardContent>

        {/* Footer */}
        <AuthFooter mode="register" className="mt-5" />
      </FormProvider>
    </Card>
  );
}
