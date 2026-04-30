"use server";

import { IApiResponse, IErrorResponse } from "@/shared/lib/types/api";
import { IEmailResponse, ISendEmailFields } from "../types/auth";

export async function sendEmailVerification(fields: ISendEmailFields) {
  let response: Response;

  try {
    response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/send-email-verification`,
      {
        method: "POST",
        body: JSON.stringify(fields),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch {
    return {
      status: false,
      code: 500,
      message: "Failed to reach email verification service.",
    } satisfies IErrorResponse;
  }

  const raw = await response.text();
  let payload: IApiResponse<IEmailResponse> | null = null;

  try {
    payload = raw ? (JSON.parse(raw) as IApiResponse<IEmailResponse>) : null;
  } catch {
    payload = null;
  }

  if (!payload) {
    return {
      status: false,
      code: response.status || 500,
      message: "Send email verification failed.",
    } satisfies IErrorResponse;
  }

  return payload;
}
