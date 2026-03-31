import z from "zod";
import { registerSchema } from "../schemas/register-schema";

export type RegisterValues = z.infer<typeof registerSchema>;
