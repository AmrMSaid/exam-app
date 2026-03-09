import * as z from "zod";

export const loginSchema = z
  .object({
    firstname: z.string().nonempty("Your first name is required"),
    lastname: z.string().nonempty("Your last name is required"),
    username: z.string().nonempty("Your username is required"),
    email: z
      .string()
      .email({ message: "Please use the format user@example.com" })
      .or(z.literal("")),
    phone: z
      .string()
      .regex(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g, {
        message: "Please enter a valid 11-digit Egyptian mobile number",
      })
      .or(z.literal("")),
    password: z
      .string()
      .nonempty("Your password is required")
      .min(8, "Password must be at least 8 characters")
      .max(64, "Password must be at most 64 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
