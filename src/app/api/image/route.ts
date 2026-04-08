import { getNextAuthToken } from "@/features/auth/lib/utils/auth.util";
import { NextRequest, NextResponse } from "next/server";

function getImageUrls(url: string) {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const images = new Set<string>();

  if (url.startsWith("/")) {
    images.add(new URL(url, api).toString());
    return [...images].map((image) => new URL(image));
  }
  const parsedUrl = new URL(url);
  images.add(parsedUrl.toString());

  if (parsedUrl.hostname === "www.elevate-bootcamp.cloud") {
    const normalizedUrl = new URL(parsedUrl.toString());
    normalizedUrl.hostname = "elevate-bootcamp.cloud";
    images.add(normalizedUrl.toString());
  }
  images.add(
    new URL(`${parsedUrl.pathname}${parsedUrl.search}`, api).toString(),
  );
  return [...images].map((image) => new URL(image));
}

export async function GET(request: NextRequest) {
  let imageResponse = null;

  const url = request.nextUrl.searchParams.get("url");
  let imageUrls: URL[];
  imageUrls = getImageUrls(url!);

  const jwt = await getNextAuthToken();
  const token = jwt?.token;

  for (const imageUrl of imageUrls) {
    try {
      const response = await fetch(imageUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        imageResponse = response;
        break;
      }
    } catch {
      continue;
    }
  }
  return new NextResponse(imageResponse!.body);
}
