"use server";

import { getNextAuthToken } from "@/features/auth/lib/utils/auth.util";
import { IDiplomaByIdResponse } from "../types/diploma";

export const getDiplomaById = async (id: string) => {
  const jwt = await getNextAuthToken();
  const token = jwt?.accessToken;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/diplomas/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const data: IDiplomaByIdResponse = await response.json();

  return data;
};
