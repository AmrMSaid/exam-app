"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardFooter } from "@/shared/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { registerSchema } from "../../lib/schemas/register-schema";
import AuthHeading from "../auth-heading";
import PasswordInput from "../password-input";

type RegisterValues = z.infer<typeof registerSchema>;

export default function PasswordForm() {
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: RegisterValues) {}

  return (
    <Card className="w-full max-w-md gap-0">
      {/* Progress */}
      <div className="flex items-center w-full max-w-xl px-5 mb-6">
        {/* Step 1 (completed) */}
        <div className="flex items-center">
          <div className="w-2.5 h-2.5 bg-blue-600 -rotate-45"></div>
        </div>
        {/* Line */}
        <div className="flex-1 outline-1 outline-blue-600 mx-2"></div>

        {/* Step 2 (completed) */}
        <div className="flex items-center">
          <div className="w-2.5 h-2.5 bg-blue-600 -rotate-45"></div>
        </div>
        {/* Line */}
        <div className="flex-1 outline-1 outline-blue-600 mx-2"></div>

        {/* Step 3 (completed) */}
        <div className="flex items-center">
          <div className="w-2.5 h-2.5 bg-blue-600 -rotate-45"></div>
        </div>
        {/* Line */}
        <div className="flex-1 outline-1 outline-blue-600 mx-2"></div>

        {/* Step 4 (active) */}
        <div className="flex items-center">
          <div className="relative">
            <div className="absolute w-2.5 h-2.5 bg-blue-600 -rotate-45 z-10 -translate-y-1/2"></div>
            <div className="absolute inset-0 w-5.5 h-5.5 bg-blue-100 -rotate-45 -translate-x-1/4 -translate-y-1/2"></div>
          </div>
        </div>
      </div>

      {/* Heading */}
      <AuthHeading text={"Create Account"} />

      {/* Subheader */}
      <h3 className="font-inter text-blue-600 font-bold text-2xl mb-8 ms-4">
        Create a strong password
      </h3>

      <CardContent className="relative">
        {/* Form */}
        <form
          className="space-y-5"
          id="login-form"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <PasswordInput control={form.control} />
        </form>
      </CardContent>

      {/* Button */}
      <CardFooter className="flex-col items-stretch gap-3">
        <Button
          type="submit"
          form="login-form"
          className="w-full bg-blue-600 py-6 text-sm mt-6 cursor-pointer hover:bg-blue-700"
        >
          Create Account
        </Button>
      </CardFooter>
    </Card>
  );
}
