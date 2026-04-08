"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
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

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginValues) {
    const res = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });
    if (!res?.ok) {
      setError(res?.error || "An error occurred");
      return;
    }
    location.href = "/";
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
                    className="font-medium text-gray-800"
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
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Password */}
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="font-medium text-gray-800"
                    htmlFor="password"
                  >
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="********"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>

        <Link
          className="text-blue-600 font-medium absolute right-4 mt-2.5 hover:underline"
          href={"#"}
        >
          Forgot your password?
        </Link>
      </CardContent>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <CardFooter className="flex-col items-stretch gap-3">
        {/* Button */}
        <Button
          type="submit"
          form="login-form"
          className="w-full bg-blue-600 py-6 text-sm mt-6 cursor-pointer hover:bg-blue-700"
        >
          Login
        </Button>

        {/* Footer */}
        <LoginFooter />
      </CardFooter>
    </Card>
  );
}
