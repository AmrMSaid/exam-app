"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form";
import { RegisterValues } from "../lib/types/forms";

interface PasswordInputProps {
  control: Control<RegisterValues>;
}

export default function PasswordInput({ control }: PasswordInputProps) {
  return (
    <FieldGroup>
      {/* Password */}
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              className="font-medium text-gray-800 gap-0"
              htmlFor="password"
            >
              Password<span className="text-red-600">*</span>
            </FieldLabel>
            <Input
              {...field}
              id="password"
              type="password"
              aria-invalid={fieldState.invalid}
              placeholder="********"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Confirm password */}
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              className="font-medium text-gray-800 gap-0"
              htmlFor="confirmPassword"
            >
              Confirm Password<span className="text-red-600">*</span>
            </FieldLabel>
            <Input
              {...field}
              id="confirmPassword"
              type="password"
              aria-invalid={fieldState.invalid}
              placeholder="********"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </FieldGroup>
  );
}
