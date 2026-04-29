"use server";

import { updateTag } from "next/cache";
import { getNextAuthToken } from "../utils/auth.util";
import { IApiResponse } from "@/shared/lib/types/api";
import { IUpdateProfileFields, IUpdateProfileResponse } from "../types/user";

export async function updateProfileAction(fields: IUpdateProfileFields) {
  const jwt = await getNextAuthToken();
  const token = jwt?.accessToken;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
    {
      method: "PATCH",
      body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const payload: IApiResponse<IUpdateProfileResponse> = await response.json();

  if (payload.status !== true) {
    throw new Error(payload.message);
  }
  updateTag("posts");
  return payload;
}
