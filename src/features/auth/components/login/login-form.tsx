"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Card, CardContent } from "@/shared/components/ui/card";
import { FieldGroup } from "@/shared/components/ui/field";
import AuthFooter from "../auth-footer";
import ErrorFeedback from "../error-feedback";
import { FormInput } from "../form-input";
import { ILoginFields } from "../../lib/types/auth";
import { loginBodySchema } from "../../lib/schemas/auth.schema";
import useLogin from "../../hooks/use-login";
import AuthHeading from "./../auth-heading";
import { FormButton } from "../form-button";

export default function LoginForm() {
  // Mutation
  const { mutate: login, isPending, error } = useLogin();

  // Form
  const form = useForm<ILoginFields>({
    resolver: zodResolver(loginBodySchema),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Functions
  const onSubmit: SubmitHandler<ILoginFields> = (values) => {
    login(values);
  };

  return (
    <Card className="w-full max-w-md">
      <FormProvider {...form}>
        {/* Heading */}
        <AuthHeading text="Login" />

        {/* Form */}
        <CardContent className="relative">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              {/* Username */}
              <FormInput
                name="username"
                label="Username"
                placeholder="user123"
                type="text"
                autoComplete="username"
              />

              {/* Password */}
              <FormInput
                name="password"
                label="Password"
                placeholder="********"
                type="password"
                autoComplete="current-password"
              />
            </FieldGroup>

            {/* Forgot password */}
            <Link
              className="text-blue-600 font-medium flex justify-end mt-2.5 hover:underline hover:text-blue-700 text-sm"
              href={"/forgot-password"}
            >
              Forgot your password?
            </Link>

            {/* Error feedback */}
            {error?.message && <ErrorFeedback error={error.message} />}

            {/* Button */}
            <FormButton
              type="submit"
              label="Login"
              loadingLabel="Logging in..."
              isPending={isPending}
            />
          </form>
        </CardContent>

        {/* Footer */}
        <AuthFooter mode="login" className="mt-5" />
      </FormProvider>
    </Card>
  );
}
