"use client";

import { Field, FieldError, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Controller } from "react-hook-form";
import { useFormContext, FieldValues, Path } from "react-hook-form";
import { cn } from "@/shared/lib/utils/tailwind.utils";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface FormInputProps<
  TFieldValues extends FieldValues,
> extends React.InputHTMLAttributes<HTMLInputElement> {
  name: Path<TFieldValues>;
  label: string;
  type?: "text" | "password" | "email";
  required?: boolean;
  className?: string;
}

export function FormInput<TFieldValues extends FieldValues>({
  name,
  label,
  type,
  required,
  className,
  ...props
}: FormInputProps<TFieldValues>) {
  const { control } = useFormContext<TFieldValues>();
  const [isVisible, setIsVisible] = useState(false);
  const isPasswordField = type === "password";
  const currentType = isPasswordField
    ? isVisible
      ? "text"
      : "password"
    : type;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel
            className={cn(
              "text-base font-medium mb-1.5",
              required &&
                "after:content-['*'] after:-translate-x-2 after:font-medium after:text-red-600",
            )}
            htmlFor={name}
          >
            {label}
          </FieldLabel>
          <div className="relative">
            <Input
              {...field}
              {...props}
              value={field.value ?? ""}
              id={name}
              type={currentType}
              aria-invalid={fieldState.invalid}
              className={cn("h-11", isPasswordField && "pr-10")}
            />
            {type === "password" && (
              <button
                type="button"
                onClick={() => setIsVisible(!isVisible)}
                className={cn(
                  "absolute right-3 top-1/2 -translate-y-1/2 h-fit text-gray-400 cursor-pointer",
                  fieldState.error && "-translate-y-2",
                )}
                aria-label={isVisible ? "Hide password" : "Show password"}
              >
                {isVisible ? (
                  <EyeOff size={18} strokeWidth={1} absoluteStrokeWidth />
                ) : (
                  <Eye size={18} strokeWidth={1} absoluteStrokeWidth />
                )}
              </button>
            )}
          </div>
          {fieldState.invalid && (
            <FieldError className="text-sm" errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
}
