import { z } from "zod";

export const phoneRegex = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;

const phoneSchemaOptional = z
  .string()
  .regex(
    phoneRegex,
    "Please enter a valid Egyptian mobile number (e.g. 01551234567)",
  )
  .optional()
  .or(z.literal(""));

const otpCodeSchema = z
  .string({ message: "Verification code is required" })
  .length(6, "Verification code must be exactly 6 digits");

const passwordSchema = z
  .string({ message: "Password is required" })
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must include at least one uppercase letter")
  .regex(/[a-z]/, "Password must include at least one lowercase letter")
  .regex(/[0-9]/, "Password must include at least one number")
  .regex(
    /[^A-Za-z0-9]/,
    "Password must include at least one special character",
  );

/** Send OTP to email (step 1 before registration). */
export const sendEmailVerificationBodySchema = z
  .object({
    email: z
      .string({ message: "Email is required" })
      .email("Please enter a valid email address"),
  })
  .strict();

/** Confirm OTP; email is then marked verified for registration. */
export const confirmEmailVerificationBodySchema = z
  .object({
    email: z
      .string({ message: "Email is required" })
      .email("Please enter a valid email address"),
    code: otpCodeSchema,
  })
  .strict();

export const registerBodySchema = z
  .object({
    username: z
      .string({ message: "Username is required" })
      .min(2, "Username must be at least 2 characters")
      .max(50, "Username must be at most 50 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores",
      ),
    email: z
      .string({ message: "Email is required" })
      .email("Please enter a valid email address"),
    password: passwordSchema,
    confirmPassword: z.string({ message: "Please confirm your password" }),
    firstName: z
      .string({ message: "First name is required" })
      .min(1)
      .max(100, "First name is too long"),
    lastName: z
      .string({ message: "Last name is required" })
      .min(1)
      .max(100, "Last name is too long"),
    phone: phoneSchemaOptional,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .strict();

export const loginBodySchema = z
  .object({
    username: z
      .string({ message: "Username is required" })
      .min(1, "Username is required"),
    password: z
      .string({ message: "Password is required" })
      .min(1, "Password is required"),
  })
  .strict();

export const forgotPasswordBodySchema = z
  .object({
    email: z
      .string({ message: "Email is required" })
      .email("Please enter a valid email address"),
  })
  .strict();

export const resetPasswordFormSchema = z
  .object({
    newPassword: passwordSchema,
    confirmPassword: z.string({ message: "Please confirm your new password" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .strict();

export const resetPasswordBodySchema = z
  .object({
    token: z.string({ message: "Reset token is required" }).min(1),
    newPassword: passwordSchema,
    confirmPassword: z.string({ message: "Please confirm your new password" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .strict();
