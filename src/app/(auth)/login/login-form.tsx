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

const loginSchema = z.object({
  username: z.string().nonempty("Your username is required"),
  password: z
    .string()
    .nonempty("Your password is required")
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters"),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: LoginValues) {}

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="gap-2">
        <CardTitle className="text-3xl font-bold text-slate-900">
          Login
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-5"
          id="login-form"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="username">Username</FieldLabel>
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
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
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
        <Link className="text-blue-600" href={"#"}>
          Forgot your password?
        </Link>
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-3">
        <Button type="submit" form="login-form" className="w-full bg-blue-600">
          Login
        </Button>
        <div className="flex items-center justify-center text-xs text-muted-foreground">
          <CardDescription>
            Don’t have an account?{" "}
            <Link className="text-blue-600" href={"/register"}>
              Create yours
            </Link>
          </CardDescription>
        </div>
      </CardFooter>
    </Card>
  );
}
