"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { loginSchema } from "../../lib/schemas/login-schema";
import LoginFooter from "../login-footer";
import { LoginValues } from "../../lib/types/forms";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { CircleX, Eye, EyeOff, Loader2 } from "lucide-react";

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginValues) {
    setIsLoading(true);

    const res = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });
    setIsLoading(false);

    if (!res?.ok) {
      setError(res?.error || "An error occurred");
      return;
    }
    const callbackUrl =
      new URLSearchParams(location.search).get("callbackUrl") || "/";
    location.href = callbackUrl;
  }

  return (
    // Header
    <Card className="w-full max-w-md">
      <CardHeader className="gap-2">
        <CardTitle className="text-3xl font-inter font-bold mb-6 text-gray-800">
          Login
        </CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <form
          className="space-y-5"
          id="login-form"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            {/* Username */}
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="font-medium text-gray-800 text-base"
                    htmlFor="username"
                  >
                    Username
                  </FieldLabel>
                  <Input
                    {...field}
                    id="username"
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="user123"
                    className="h-11"
                  />
                  {fieldState.invalid && (
                    <FieldError
                      className="text-sm"
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )}
            />

            {/* Password */}
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <div
                  data-invalid={fieldState.invalid}
                  className="relative"
                  role="group"
                  data-slot="field"
                >
                  <FieldLabel
                    className="font-medium text-gray-800 text-base mb-2"
                    htmlFor="password"
                  >
                    Password
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
                  {fieldState.invalid && (
                    <FieldError
                      className="text-sm"
                      errors={[fieldState.error]}
                    />
                  )}
                </div>
              )}
            />
          </FieldGroup>
        </form>

        <Link
          className="text-blue-600 font-medium absolute right-4 mt-2.5 hover:underline hover:text-blue-700 text-sm"
          href={"#"}
        >
          Forgot your password?
        </Link>
      </CardContent>
      <span></span>

      {error && (
        <div className="flex justify-center mt-10">
          <div className="relative w-full max-w-2xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-2">
              <div className="w-8 h-8 flex items-center justify-center text-red-600">
                <CircleX
                  size={18}
                  fill="white"
                  strokeWidth={1}
                  absoluteStrokeWidth
                />
              </div>
            </div>
            <div className="outline-1 outline-red-600 bg-red-50 text-red-600 text-center py-2 mx-4.5 text-sm">
              {error}
            </div>
          </div>
        </div>
      )}

      {/* Button */}
      <Button
        type="submit"
        form="login-form"
        disabled={isLoading}
        aria-busy={isLoading}
        className="bg-blue-600 py-6 text-sm cursor-pointer hover:bg-blue-700 mt-6 mx-4 disabled:bg-gray-200 disabled:text-gray-400"
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin" />
            Logging in...
          </>
        ) : (
          "Login"
        )}
      </Button>

      {/* Footer */}
      <LoginFooter />
    </Card>
  );
}
