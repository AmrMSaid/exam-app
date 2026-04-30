"use client";

import { FormEventHandler } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { Card, CardContent } from "@/shared/components/ui/card";
import AuthHeading from "../auth-heading";
import RegisterProgress from "./register-progress";
import ErrorFeedback from "../error-feedback";
import { FormInput } from "../form-input";
import { IRegisterFields } from "../../lib/types/auth";
import { FormButton } from "../form-button";

interface PasswordFormProps {
  form: UseFormReturn<IRegisterFields>;
  error?: string | null;
  isPending?: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export default function PasswordForm({
  form,
  error,
  isPending,
  onSubmit,
}: PasswordFormProps) {
  return (
    <Card className="w-full max-w-md gap-0">
      <FormProvider {...form}>
        {/* Progress figure */}
        <RegisterProgress currentStep={4} />

        {/* Heading */}
        <AuthHeading text={"Create Account"} />

        <h3 className="font-inter text-blue-600 font-bold text-2xl mb-8 ms-4">
          Create a strong password
        </h3>

        {/* Form */}
        <CardContent className="relative">
          <form
            className="space-y-5"
            id="register-password-form"
            onSubmit={onSubmit}
          >
            {/* Password */}
            <FormInput
              name="password"
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

            {/* Error feedback */}
            {error && <ErrorFeedback error={error} />}

            {/* Button */}
            <FormButton
              type="submit"
              label="Create Account"
              loadingLabel="Creating Account..."
              isPending={isPending}
              className="mt-5"
            />
          </form>
        </CardContent>
      </FormProvider>
    </Card>
  );
}
