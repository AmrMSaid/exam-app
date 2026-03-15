import { DiplomaResponse } from "@/app/(dashboard)/_diplomas/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const response = await fetch(`${process.env.API}diplomas?page=1&limit=20`, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  });
  const payload: DiplomaResponse = await response.json();

  return NextResponse.json(payload, { status: 200 });
}
