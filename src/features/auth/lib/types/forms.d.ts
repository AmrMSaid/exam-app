import z from "zod";
import { registerSchema } from "../schemas/register-schema";
import { loginSchema } from "../schemas/login-schema";

export type RegisterValues = z.infer<typeof registerSchema>;

export type LoginValues = z.infer<typeof loginSchema>;
