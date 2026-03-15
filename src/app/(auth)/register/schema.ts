import * as z from "zod";

export const loginSchema = z
  .object({
    firstname: z.string().nonempty("Your first name is required"),
    lastname: z.string().nonempty("Your last name is required"),
    username: z
      .string()
      .nonempty("Your username is required")
      .min(2, "Username must be at least 2 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores",
      ),
    email: z.email("Please enter a valid email address").or(z.literal("")),
    phone: z
      .string()
      .regex(
        /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g,
        "Please enter a valid Egyptian mobile number (e.g. 01226817189)",
      )
      .or(z.literal("")),
    password: z
      .string()
      .nonempty("Your password is required")
      .min(8, "Password must be at least 8 characters")
      .refine(
        (val) => /[A-Z]/.test(val),
        "Password must include at least one uppercase letter",
      )
      .refine(
        (val) => /[0-9]/.test(val),
        "Password must include at least one number",
      )
      .refine(
        (val) => /[!@#$%^&*(),.?":{}|<>]/.test(val),
        "Password must include at least one special character",
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
