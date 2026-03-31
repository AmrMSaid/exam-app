"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/shared/components/ui/card";
import AuthHeading from "../auth-heading";
import { ChevronRight } from "lucide-react";
import { RegisterValues } from "../../lib/types/types";
import EmailInput from "../email-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../lib/schemas/register-schema";

export default function EmailForm() {
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: RegisterValues) {}

  return (
    <Card className="w-full max-w-md">
      {/* Heading */}
      <AuthHeading text={"Create Account"} />

      {/* Form */}
      <CardContent className="relative">
        <form
          className="space-y-5"
          id="login-form"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <EmailInput control={form.control} />
        </form>
      </CardContent>

      <CardFooter className="flex-col items-stretch gap-3">
        {/* Button */}
        <button
          type="submit"
          form="login-form"
          className="flex gap-2.5 items-center justify-center w-full bg-blue-50 outline-1 outline-blue-600 text-gray-800 font-medium py-3.5 text-sm mt-6 cursor-pointer hover:outline-2"
        >
          Next
          <ChevronRight size={16} />
        </button>

        {/* Footer */}
        <div className="flex items-center justify-center text-xs text-muted-foreground">
          <CardDescription className="font-medium mt-3 text-gray-500">
            Already have an account?{" "}
            <Link
              className="text-blue-600 hover:text-blue-700 hover:underline"
              href={"/login"}
            >
              Login
            </Link>
          </CardDescription>
        </div>
      </CardFooter>
    </Card>
  );
}
