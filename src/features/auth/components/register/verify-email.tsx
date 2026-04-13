import { OtpInput } from "./otp-input";
import AuthHeading from "../auth-heading";

export default function VerifyEmail() {
  return (
    <div className="w-full max-w-lg">
      {/* Progress */}
      <div className="flex items-center w-full max-w-xl px-5 mb-6">
        {/* Step 1 (completed) */}
        <div className="flex items-center">
          <div className="w-2.5 h-2.5 bg-blue-600 -rotate-45"></div>
        </div>

        {/* Line */}
        <div className="flex-1 outline-1 outline-blue-600 mx-2"></div>

        {/* Step 2 (active) */}
        <div className="flex items-center">
          <div className="relative">
            <div className="absolute w-2.5 h-2.5 bg-blue-600 -rotate-45 z-10 -translate-y-1/2"></div>
            <div className="absolute inset-0 w-5.5 h-5.5 bg-blue-100 -rotate-45 -translate-x-1/4 -translate-y-1/2"></div>
          </div>
        </div>

        {/* Line (dashed upcoming) */}
        <div className="flex-1 h-0.5 border-t-2 border-dashed border-blue-600 mx-2"></div>

        {/* Step 3 (upcoming) */}
        <div className="flex items-center">
          <div className="w-2.5 h-2.5 outline-1 outline-blue-600 bg-blue-50 -rotate-45"></div>
        </div>

        {/* Line (dashed upcoming) */}
        <div className="flex-1 h-0.5 border-t-2 border-dashed border-blue-600 mx-2"></div>

        {/* Step 4 (upcoming) */}
        <div className="flex items-center">
          <div className="w-2.5 h-2.5 outline-1 outline-blue-600 bg-blue-50 -rotate-45"></div>
        </div>
      </div>

      {/* Heading */}
      <AuthHeading text={"Create Account"} />

      <div className="ps-4">
        {/* Subheader */}
        <h3 className="font-inter text-blue-600 font-bold text-2xl mb-2">
          Verify OTP
        </h3>

        {/* Text */}
        <span className="text-gray-500">
          Please enter the 6-digits code we have sent to:{" "}
        </span>
        <span className="text-gray-800">
          user@example.com.{" "}
          <span className="text-blue-600 font-medium underline cursor-pointer hover:text-blue-700">
            Edit
          </span>
        </span>

        {/* OTP */}
        <div className="flex flex-col items-center gap-6 mt-6">
          <OtpInput />
          <p className="text-sm font-medium text-gray-500">
            You can request another code in: 60s
          </p>
        </div>

        {/* Button */}
        <button
          type="submit"
          form="login-form"
          className="w-full bg-blue-50 outline-1 outline-blue-600 text-gray-800 font-medium py-3.5 text-sm mt-6 cursor-pointer hover:bg-blue-100"
        >
          Verify Code
        </button>
      </div>
    </div>
  );
}
