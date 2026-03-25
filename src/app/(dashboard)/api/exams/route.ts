import { DiplomasResponse } from "@/app/(dashboard)/_diplomas/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page") || 1);
  const id = searchParams.get("diplomaId");

  const response = await fetch(
    `${process.env.API}exams?diplomaId=${id}&page=${page}&limit=3`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    },
  );
  const data: DiplomasResponse = await response.json();

  return NextResponse.json(data, { status: 200 });
}
