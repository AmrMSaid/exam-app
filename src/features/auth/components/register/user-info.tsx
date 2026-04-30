"use client";

import { ChevronRight } from "lucide-react";
import { Controller, FormProvider, UseFormReturn } from "react-hook-form";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { PhoneInput } from "./phone-input";
import AuthHeading from "../auth-heading";
import RegisterProgress from "./register-progress";
import ErrorFeedback from "../error-feedback";
import { FormInput } from "../form-input";
import { IRegisterFields } from "../../lib/types/auth";
import { FormButton } from "../form-button";

interface UserInfoProps {
  form: UseFormReturn<IRegisterFields>;
  error?: string | null;
  isPending?: boolean;
  onNext: () => Promise<void>;
}

export default function UserInfo({
  form,
  error,
  isPending,
  onNext,
}: UserInfoProps) {
  return (
    <Card className="w-full max-w-md gap-0">
      <FormProvider {...form}>
        {/* Progress figure */}
        <RegisterProgress currentStep={3} />

        {/* Heading */}
        <AuthHeading text={"Create Account"} />

        <h3 className="font-inter text-blue-600 font-bold text-2xl mb-8 ms-4">
          Tell us more about you
        </h3>

        {/* Form */}
        <CardContent className="relative">
          <form
            className="space-y-5"
            id="register-user-info-form"
            onSubmit={(event) => {
              event.preventDefault();
              void onNext();
            }}
          >
            <FieldGroup>
              <div className="flex gap-2.5">
                {/* First name */}
                <FormInput
                  name="firstName"
                  label="First name"
                  placeholder="Ahmed"
                  type="text"
                  autoComplete="given-name"
                  required
                />

                {/* Last name */}
                <FormInput
                  name="lastName"
                  label="Last name"
                  placeholder="Abdullah"
                  type="text"
                  autoComplete="family-name"
                  required
                />
              </div>

              {/* Username */}
              <FormInput
                name="username"
                label="Username"
                placeholder="user123"
                type="text"
                autoComplete="username"
                required
              />

              {/* Phone */}
              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      className="font-medium text-gray-800 text-base"
                      htmlFor="phone"
                    >
                      Phone
                    </FieldLabel>
                    <PhoneInput
                      id="phone"
                      type="tel"
                      aria-invalid={fieldState.invalid}
                      defaultCountry="EG"
                      value={field.value}
                      onChange={(value) => field.onChange(value ?? "")}
                      countries={["EG"]}
                      international={true}
                      autoComplete="tel"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>

            {/* Error feedback */}
            {error && <ErrorFeedback error={error} />}

            {/* Button */}
            <FormButton
              type="submit"
              label="Next"
              icon={ChevronRight}
              loadingLabel="Checking..."
              isPending={isPending}
              variant="secondary"
            />
          </form>
        </CardContent>
      </FormProvider>
    </Card>
  );
}
