"use client";

import {
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form";
import { RegisterValues } from "../lib/types/forms";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputsProps {
  control: Control<RegisterValues>;
}

export default function PasswordInputs({ control }: PasswordInputsProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <FieldGroup>
      {/* Password */}
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <div
            data-invalid={fieldState.invalid}
            className="relative"
            role="group"
            data-slot="field"
          >
            <FieldLabel
              className="font-medium text-gray-800 gap-0 text-base mb-2"
              htmlFor="password"
            >
              Password<span className="text-red-600">*</span>
            </FieldLabel>
            <Input
              {...field}
              id="password"
              type={showPassword ? "text" : "password"}
              aria-invalid={fieldState.invalid}
              placeholder="********"
              className="h-11"
            />
            <button
              type="button"
              aria-label="Toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 bottom-3.5 h-fit text-gray-400 cursor-pointer"
            >
              {showPassword ? (
                <EyeOff size={18} strokeWidth={1} absoluteStrokeWidth />
              ) : (
                <Eye size={18} strokeWidth={1} absoluteStrokeWidth />
              )}
            </button>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </div>
        )}
      />

      {/* Confirm password */}
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field, fieldState }) => (
          <div
            data-invalid={fieldState.invalid}
            className="relative"
            role="group"
            data-slot="field"
          >
            <FieldLabel
              className="font-medium text-gray-800 gap-0 text-base mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password<span className="text-red-600">*</span>
            </FieldLabel>
            <Input
              {...field}
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              aria-invalid={fieldState.invalid}
              placeholder="********"
              className="h-11"
            />
            <button
              type="button"
              aria-label="Toggle password visibility"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 bottom-3.5 h-fit text-gray-400 cursor-pointer"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} strokeWidth={1} absoluteStrokeWidth />
              ) : (
                <Eye size={18} strokeWidth={1} absoluteStrokeWidth />
              )}
            </button>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </div>
        )}
      />
    </FieldGroup>
  );
}
