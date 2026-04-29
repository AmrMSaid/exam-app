import { RESPONSES } from "@/features/auth/lib/constants/response.constant";
import {
  HEADERS,
  PAGINATION_LIMIT,
} from "@/shared/lib/constants/api.constants";
import { IApiResponse, IPaginatedResponse } from "@/shared/lib/types/api";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";
import { IDiploma } from "../types/all-diplomas";

export async function getDiplomas(req: NextRequest) {
  const token = await getToken({ req });
  const page = Number(req.nextUrl.searchParams.get("page") || 1);
  const limit = Number(
    req.nextUrl.searchParams.get("limit") || PAGINATION_LIMIT,
  );

  if (!token) return RESPONSES.unauthorized;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/diplomas?page=${page}&limit=${limit}`,
    {
      method: "GET",
      headers: {
        ...HEADERS.authorization(token.accessToken),
      },
    },
  );

  const payload: IApiResponse<IPaginatedResponse<IDiploma>> =
    await response.json();

  return payload;
}
