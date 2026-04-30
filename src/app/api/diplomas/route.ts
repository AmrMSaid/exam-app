import { getAllDiplomas } from "@/features/diplomas/lib/apis/diplomas.api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const payload = await getAllDiplomas(req);

  return NextResponse.json(payload);
}
