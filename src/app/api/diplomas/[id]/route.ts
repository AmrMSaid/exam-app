import { getNextAuthToken } from "@/features/auth/lib/utils/auth.util";
import { DiplomaByIdResponse } from "@/features/diplomas/lib/types/diploma";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

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

  return NextResponse.json(data, { status: 200 });
}
