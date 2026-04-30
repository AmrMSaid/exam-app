import ForgotPassword from "@/features/auth/components/forgot-password/forgot-password";
import VerifyOtp from "@/features/auth/components/forgot-password/verify-otp";
import ResetPassword from "@/features/auth/components/forgot-password/reset-password";

export default function ForgotPasswordPage() {
  return (
    <main className="flex items-center justify-center">
      <ForgotPassword />
      {/* <VerifyOtp /> */}
      {/* <ResetPassword /> */}
    </main>
  );
}
