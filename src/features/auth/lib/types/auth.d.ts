import { IUser } from "@/features/auth/lib/types/user";
import z from "zod";
import {
  confirmEmailVerificationBodySchema,
  forgotPasswordBodySchema,
  loginBodySchema,
  registerBodySchema,
  resetPasswordFormSchema,
  sendEmailVerificationBodySchema,
} from "../schemas/auth.schema";
import { updateProfileBodySchema } from "../schemas/user.schema";

// Login

export type ILoginFields = z.infer<typeof loginBodySchema>;

export interface ILoginResponse {
  token: string;
  user: IUser;
}

// Register

export type ISendEmailFields = z.infer<typeof sendEmailVerificationBodySchema>;

export type IConfirmEmailFields = z.infer<
  typeof confirmEmailVerificationBodySchema
>;

export type IRegisterFields = z.infer<typeof registerBodySchema>;

export type IForgotPasswordFields = z.infer<typeof forgotPasswordBodySchema>;

export type IResetPasswordFields = z.infer<typeof resetPasswordFormSchema>;

export interface IEmailResponse {
  status: boolean;
  code: number;
  message?: string;
}

export interface IRegisterResponse {
  status: boolean;
  code: number;
  payload: Payload;
}

export interface Payload {
  user: IUser;
  token: string;
}
