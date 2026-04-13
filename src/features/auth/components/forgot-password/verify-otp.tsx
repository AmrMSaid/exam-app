import { MoveLeft } from "lucide-react";
import AuthHeading from "../auth-heading";
import LoginFooter from "../login-footer";

export default function VerifyOtp() {
  return (
    <div className="w-full max-w-lg p-2">
      <div className="outline-2 outline-gray-200 w-fit ms-4 mb-8 p-2 cursor-pointer hover:bg-gray-50">
        <MoveLeft />
      </div>

      {/* Heading */}
      <AuthHeading text={"Password Reset Sent"} />

      <div className="ms-4">
        <div className="flex flex-col gap-4 mb-12">
          <p>
            We have sent a password reset link to:{" "}
            <span className="text-blue-600">user@example.com</span>.
          </p>
          <p>
            Please check your inbox and follow the instructions to reset your
            password.
          </p>
          <p className="text-gray-500">
            If you don’t see the email within a few minutes, check your spam or
            junk folder.
          </p>
        </div>

        {/* Footer */}
        <LoginFooter />
      </div>
    </div>
  );
}
