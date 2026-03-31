"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent, CardFooter } from "@/shared/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { PhoneInput } from "./phone-input";
import { useState } from "react";
import { registerSchema } from "../../lib/schemas/register-schema";
import AuthHeading from "../auth-heading";
import { ChevronRight } from "lucide-react";

type RegisterValues = z.infer<typeof registerSchema>;

export default function UserInfo() {
  const [phone, setPhone] = useState<string>();

  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      phone: "",
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
          <div className="relative">
            <div className="absolute w-2.5 h-2.5 bg-blue-600 -rotate-45 z-10 -translate-y-1/2"></div>
            <div className="absolute inset-0 w-5.5 h-5.5 bg-blue-100 -rotate-45 -translate-x-1/4 -translate-y-1/2"></div>
          </div>
        </div>

        {/* Line (dashed upcoming) */}
        <div className="flex-1 h-0.5 border-t-2 border-dashed border-blue-600 mx-2"></div>

        {/* Step 4 (upcoming) */}
        <div className="flex items-center">
          <div className="w-2.5 h-2.5 outline-1 outline-blue-600 bg-blue-50 -rotate-45"></div>
        </div>
      </div>

      {/* Heading */}
      <AuthHeading text={"Create Account"} />

      {/* Subheader */}
      <h3 className="font-inter text-blue-600 font-bold text-2xl mb-8 ms-4">
        Tell us more about you
      </h3>

      <CardContent className="relative">
        {/* Form */}
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
                      className="font-medium text-gray-800 gap-0"
                      htmlFor="firstname"
                    >
                      First name<span className="text-red-600">*</span>
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
                      className="font-medium text-gray-800 gap-0"
                      htmlFor="lastname"
                    >
                      Last name<span className="text-red-600">*</span>
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
                    className="font-medium text-gray-800 gap-0"
                    htmlFor="username"
                  >
                    Username<span className="text-red-600">*</span>
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
          </FieldGroup>
        </form>
      </CardContent>

      {/* Button */}
      <CardFooter className="flex-col items-stretch gap-3">
        <button
          type="submit"
          form="login-form"
          className="flex gap-2.5 items-center justify-center w-full bg-blue-50 outline-1 outline-blue-600 text-gray-800 font-medium py-3.5 text-sm mt-6 cursor-pointer hover:outline-2"
        >
          Next
          <ChevronRight size={16} />
        </button>
      </CardFooter>
    </Card>
  );
}
