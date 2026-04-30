"use server";

import { IApiResponse } from "@/shared/lib/types/api";
import { IRegisterResponse, IRegisterFields } from "../types/auth";

export async function register(fields: IRegisterFields) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
    {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const raw = await response.text();
  let payload: IApiResponse<IRegisterResponse> | null = null;

  try {
    payload = raw ? (JSON.parse(raw) as IApiResponse<IRegisterResponse>) : null;
  } catch {
    payload = null;
  }

  if (!payload) {
    throw new Error("Register request failed.");
  }

  if (!response.ok && payload.status === true) {
    throw new Error("Register request failed.");
  }

  return payload;
}
