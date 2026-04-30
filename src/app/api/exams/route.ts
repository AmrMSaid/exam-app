import { getNextAuthToken } from "@/features/auth/lib/utils/auth.util";
import { IExamsResponse } from "@/features/exams/lib/types/exam";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page") || 1);
  const id = searchParams.get("diplomaId");

  const jwt = await getNextAuthToken();
  const token = jwt?.accessToken;

  if (!process.env.NEXT_PUBLIC_API_URL) {
    return NextResponse.json(
      { status: false, code: 500, message: "API base URL is not configured." },
      { status: 500 },
    );
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/exams?diplomaId=${id}&page=${page}&limit=3`,
    {
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : undefined,
    },
  );
  const data: IExamsResponse = await response.json();

  return NextResponse.json(data, { status: response.status });
}
