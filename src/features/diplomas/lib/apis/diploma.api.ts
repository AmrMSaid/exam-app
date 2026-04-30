"use server";

import { getNextAuthToken } from "@/features/auth/lib/utils/auth.util";
import { IApiResponse } from "@/shared/lib/types/api";
import { IDiplomaByIdResponse } from "../types/diploma";

export const getDiplomaById = async (id: string) => {
  const jwt = await getNextAuthToken();
  const token = jwt?.accessToken;

  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("API base URL is not configured.");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/diplomas/${id}`,
    {
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : undefined,
    },
  );
  const data = (await response.json()) as IApiResponse<
    IDiplomaByIdResponse["payload"]
  >;

  if (!response.ok || !data.status || !data.payload) {
    throw new Error(
      data.status ? "Failed to load diploma." : data.message ?? "Failed to load diploma.",
    );
  }

  return {
    status: true,
    code: response.status,
    payload: data.payload,
  } satisfies IDiplomaByIdResponse;
};
