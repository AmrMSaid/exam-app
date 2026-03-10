"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "./phone-input";
import { useState } from "react";
import { loginSchema } from "../schema";

type LoginValues = z.infer<typeof loginSchema>;

export default function RegisterForm() {
  const [phone, setPhone] = useState<string>();

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: LoginValues) {}

  return (
    // Header
    <Card className="w-full max-w-md">
      <CardHeader className="gap-2">
        <CardTitle className="text-3xl font-inter font-bold text-gray-800 mb-6">
          Create Account
        </CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <form
          className="space-y-5"
          id="login-form"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <div className="flex gap-2.5">
              {/* First name */}
              <Controller
                name="firstname"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      className="font-medium text-gray-800"
                      htmlFor="firstname"
                    >
                      First name
                    </FieldLabel>
                    <Input
                      {...field}
                      id="firstname"
                      type="text"
                      aria-invalid={fieldState.invalid}
                      placeholder="Ahmed"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Last name */}
              <Controller
                name="lastname"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      className="font-medium text-gray-800"
                      htmlFor="lastname"
                    >
                      Last name
                    </FieldLabel>
                    <Input
                      {...field}
                      id="lastname"
                      type="text"
                      aria-invalid={fieldState.invalid}
                      placeholder="Abdullah"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

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

            {/* Email */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="font-medium text-gray-800"
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
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Phone */}
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="font-medium text-gray-800"
                    htmlFor="phone"
                  >
                    Phone
                  </FieldLabel>
                  <PhoneInput
                    {...field}
                    id="phone"
                    type="tel"
                    aria-invalid={fieldState.invalid}
                    defaultCountry="EG"
                    value={phone}
                    onChange={setPhone}
                    countries={["EG"]}
                    international={true}
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

            {/* Confirm password */}
            <Controller
              name="confirmPassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="font-medium text-gray-800"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="confirmPassword"
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

        {/* Footer */}
        <Link
          className="text-blue-600 font-medium absolute right-4 mt-2.5 hover:underline"
          href={"#"}
        >
          Forgot your password?
        </Link>
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-3">
        <Button
          type="submit"
          form="login-form"
          className="w-full bg-blue-600 py-6 text-sm mt-6 cursor-pointer hover:bg-blue-700"
        >
          Login
        </Button>
        <div className="flex items-center justify-center text-xs text-muted-foreground">
          <CardDescription className="font-medium mt-3 text-gray-500">
            Don’t have an account?{" "}
            <Link className="text-blue-600 hover:underline" href={"/register"}>
              Create yours
            </Link>
          </CardDescription>
        </div>
      </CardFooter>
    </Card>
  );
}
