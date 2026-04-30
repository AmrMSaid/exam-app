"use client";

import { OtpInput } from "./otp-input";
import AuthHeading from "../auth-heading";
import RegisterProgress from "./register-progress";
import ErrorFeedback from "../error-feedback";
import { FormButton } from "../form-button";

interface VerifyEmailProps {
  email: string;
  otp: string;
  error?: string | null;
  otpError: string | null;
  isPending?: boolean;
  onOtpChange: (value: string) => void;
  onEditEmail: () => void;
  onVerify: () => void;
}

export default function VerifyEmail({
  email,
  otp,
  error,
  otpError,
  isPending,
  onOtpChange,
  onEditEmail,
  onVerify,
}: VerifyEmailProps) {
  return (
    <div className="w-full max-w-lg">
      {/* Progress figure */}
      <RegisterProgress currentStep={2} />

      {/* Heading */}
      <AuthHeading text={"Create Account"} />

      {/* Body */}
      <div className="ps-4">
        <h3 className="font-inter text-blue-600 font-bold text-2xl mb-2">
          Verify OTP
        </h3>

        <span className="text-gray-500">
          Please enter the 6-digits code we have sent to:{" "}
        </span>
        <span className="text-gray-800">{email}.</span>
        <button
          type="button"
          onClick={onEditEmail}
          className="ms-2 font-medium text-blue-600 hover:text-blue-700 underline cursor-pointer"
        >
          Edit
        </button>

        {/* OTP input */}
        <div className="flex flex-col items-center gap-6 mt-6">
          <OtpInput value={otp} onChange={onOtpChange} />
          <p className="text-sm font-medium text-gray-500">
            You can request another code in: 60s
          </p>
        </div>

        {/* Error feedback */}
        {error && <ErrorFeedback error={error} />}
        {otpError && <ErrorFeedback error={otpError} />}

        {/* Button */}
        <FormButton
          label="Verify Code"
          loadingLabel="Verifying..."
          isPending={isPending}
          variant="secondary"
          onClick={onVerify}
        />
      </div>
    </div>
  );
}
