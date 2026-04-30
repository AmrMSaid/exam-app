"use client";

import { ChevronRight } from "lucide-react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { Card, CardContent } from "@/shared/components/ui/card";
import AuthHeading from "../auth-heading";
import ErrorFeedback from "../error-feedback";
import { FormInput } from "../form-input";
import { IRegisterFields } from "../../lib/types/auth";
import AuthFooter from "../auth-footer";
import { FormButton } from "../form-button";

interface EmailFormProps {
  form: UseFormReturn<IRegisterFields>;
  error?: string | null;
  isPending?: boolean;
  onNext: () => Promise<void>;
}

export default function EmailForm({
  form,
  error,
  isPending,
  onNext,
}: EmailFormProps) {
  return (
    <Card className="w-full max-w-md gap-0">
      <FormProvider {...form}>
        {/* Heading */}
        <AuthHeading text={"Create Account"} />

        {/* Form */}
        <CardContent className="relative">
          <form
            className="space-y-2"
            onSubmit={(event) => {
              event.preventDefault();
              void onNext();
            }}
          >
            {/* Email */}
            <FormInput
              name="email"
              label="Email"
              placeholder="user@example.com"
              type="email"
              autoComplete="email"
            />

            {/* Error feedback */}
            {error && <ErrorFeedback error={error} />}

            {/* Button */}
            <FormButton
              type="submit"
              label="Next"
              icon={ChevronRight}
              loadingLabel="Sending OTP..."
              isPending={isPending}
              variant="secondary"
            />
          </form>
        </CardContent>

        {/* Footer */}
        <AuthFooter mode="register" className="mt-9" />
      </FormProvider>
    </Card>
  );
}
