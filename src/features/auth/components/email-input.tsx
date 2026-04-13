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

interface EmailInputProps {
  control: Control<RegisterValues>;
}

export default function EmailInput({ control }: EmailInputProps) {
  return (
    <FieldGroup>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel
              className="font-medium text-gray-800 text-base"
              htmlFor="email"
            >
              Email
            </FieldLabel>
            <Input
              {...field}
              id="email"
              type="email"
              aria-invalid={fieldState.invalid}
              placeholder="user@example.com"
              className="h-11"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </FieldGroup>
  );
}
