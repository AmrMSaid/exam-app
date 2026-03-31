import EmailForm from "@/features/auth/components/register/email-form";
import VerifyEmail from "@/features/auth/components/register/verify-email";
import UserInfo from "@/features/auth/components/register/user-info";
import PasswordForm from "@/features/auth/components/register/password-form";

export default function RegisterPage() {
  return (
    <main className="flex items-center justify-center">
      <EmailForm />
      {/* <VerifyEmail /> */}
      {/* <UserInfo/> */}
      {/* <PasswordForm /> */}
      {/* <RegisterForm /> */}
    </main>
  );
}
