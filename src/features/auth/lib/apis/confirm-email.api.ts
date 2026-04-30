"use server";

import { IApiResponse, IErrorResponse } from "@/shared/lib/types/api";
import { IConfirmEmailFields, IEmailResponse } from "../types/auth";

export async function confirmEmailVerification(fields: IConfirmEmailFields) {
  let response: Response;

  try {
    response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/confirm-email-verification`,
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
      message: "Failed to fetch.",
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
      message: "Confirm email verification failed.",
    } satisfies IErrorResponse;
  }

  return payload;
}
