import { getNextAuthToken } from "@/features/auth/lib/utils/auth.util";
import { IDiplomaByIdResponse } from "@/features/diplomas/lib/types/diploma";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const jwt = await getNextAuthToken();
  const token = jwt?.accessToken;

  if (!process.env.NEXT_PUBLIC_API_URL) {
    return NextResponse.json(
      { status: false, code: 500, message: "API base URL is not configured." },
      { status: 500 },
    );
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
  const data = (await response.json()) as IDiplomaByIdResponse;

  return NextResponse.json(data, { status: response.status });
}
