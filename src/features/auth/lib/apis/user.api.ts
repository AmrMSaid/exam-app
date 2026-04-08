"use server";

import { updateTag } from "next/cache";
import { UpdateProfileFields, UpdateProfileResponse } from "../types/auth";
import { getNextAuthToken } from "../utils/auth.util";

export async function updateProfileAction(fields: UpdateProfileFields) {
  const jwt = await getNextAuthToken();
  const token = jwt?.token;

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
  const payload: ApiResponse<UpdateProfileResponse> = await response.json();

  if (payload.status !== true) {
    throw new Error(payload.message);
  }
  updateTag("posts");
  return payload;
}
