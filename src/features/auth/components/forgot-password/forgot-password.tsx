"use client";

import { Card, CardContent, CardFooter } from "@/shared/components/ui/card";
import AuthHeading from "../auth-heading";
import { ChevronRight } from "lucide-react";
import EmailInput from "../email-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../lib/schemas/register-schema";
import LoginFooter from "../login-footer";
import { RegisterValues } from "../../lib/types/forms";

export default function ForgotPassword() {
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: RegisterValues) {}

  return (
    <Card className="w-full max-w-md gap-0">
      {/* Heading */}
      <AuthHeading text={"Forgot Password"} />

      <p className="text-gray-500 ms-4 text-base mb-8">
        Don’t worry, we will help you recover your account.
      </p>

      {/* Form */}
      <CardContent className="relative">
        <form
          className="space-y-5"
          id="login-form"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <EmailInput control={form.control} />
        </form>
      </CardContent>

      <CardFooter className="flex-col items-stretch gap-3">
        {/* Button */}
        <button
          type="submit"
          form="login-form"
          className="flex gap-2.5 items-center justify-center w-full bg-blue-600 text-white font-medium py-3.5 text-sm mt-6 cursor-pointer hover:bg-blue-700"
        >
          Next
          <ChevronRight size={16} />
        </button>

        {/* Footer */}
        <LoginFooter />
      </CardFooter>
    </Card>
  );
}
