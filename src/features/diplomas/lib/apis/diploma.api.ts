"use server";

import { getNextAuthToken } from "@/features/auth/lib/utils/auth.util";
import { DiplomaByIdResponse } from "../types/diploma";

export const getDiplomaById = async (id: string) => {
  const jwt = await getNextAuthToken();
  const token = jwt?.token;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/diplomas/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const data: DiplomaByIdResponse = await response.json();

  return data;
};
