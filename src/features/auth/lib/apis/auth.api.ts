import "server-only";

import { ILoginResponse, ILoginFields } from "../types/auth";
import { IApiResponse } from "@/shared/lib/types/api";

export const login = async (Fields: ILoginFields) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: "POST",
      body: JSON.stringify(Fields),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const payload: IApiResponse<ILoginResponse> = await response.json();

  return payload;
};
