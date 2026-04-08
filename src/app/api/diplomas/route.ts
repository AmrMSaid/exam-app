import { getNextAuthToken } from "@/features/auth/lib/utils/auth.util";
import { DiplomasResponse } from "@/features/diplomas/lib/types/diplomas";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page") || 1);

  const jwt = await getNextAuthToken();
  const token = jwt?.token;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/diplomas?page=${page}&limit=6`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const data: DiplomasResponse = await response.json();

  return NextResponse.json(data, { status: 200 });
}
