import { DiplomasResponse } from "@/features/diplomas/lib/types/diplomas";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page") || 1);

  const response = await fetch(
    `${process.env.API}diplomas?page=${page}&limit=6`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    },
  );
  const data: DiplomasResponse = await response.json();

  return NextResponse.json(data, { status: 200 });
}
