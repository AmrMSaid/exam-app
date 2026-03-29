import * as z from "zod";

export const loginSchema = z.object({
  username: z.string().nonempty("Your username is required"),
  password: z
    .string()
    .nonempty("Your password is required")
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters"),
});
