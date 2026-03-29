import { DiplomaByIdResponse } from "@/features/diplomas/lib/types/diploma";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const response = await fetch(`${process.env.API}diplomas/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  const data: DiplomaByIdResponse = await response.json();

  return NextResponse.json(data, { status: 200 });
}
