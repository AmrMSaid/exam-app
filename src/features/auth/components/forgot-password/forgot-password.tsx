"use client";

import { Card, CardContent } from "@/shared/components/ui/card";
import AuthHeading from "../auth-heading";
import { ChevronRight } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthFooter from "../auth-footer";
import { IForgotPasswordFields } from "../../lib/types/auth";
import { forgotPasswordBodySchema } from "../../lib/schemas/auth.schema";
import { FormInput } from "../form-input";
import { FormButton } from "../form-button";

export default function ForgotPassword() {
  const form = useForm<IForgotPasswordFields>({
    resolver: zodResolver(forgotPasswordBodySchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: IForgotPasswordFields) {
    void data;
  }

  return (
    <Card className="w-full max-w-md gap-0">
      <FormProvider {...form}>
        {/* Heading */}
        <AuthHeading text={"Forgot Password"} />

        <p className="text-gray-500 ms-4 text-base mb-8">
          Don&apos;t worry, we will help you recover your account.
        </p>

        {/* Form */}
        <CardContent className="relative">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Email */}
            <FormInput
              name="email"
              label="Email"
              placeholder="user@example.com"
              type="email"
              autoComplete="email"
            />

            {/* Button */}
            <FormButton label="Next" icon={ChevronRight} />
          </form>
        </CardContent>

        {/* Footer */}
        <AuthFooter mode="register" className="mt-5" />
      </FormProvider>
    </Card>
  );
}
