import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const allowedHosts = new Set([
  "elevate-bootcamp.cloud",
  "www.elevate-bootcamp.cloud",
  "exam-app.elevate-bootcamp.cloud",
]);

function getApiOrigin() {
  const apiBase = process.env.API;
  if (!apiBase) {
    throw new Error("Missing API env var");
  }

  return new URL(apiBase).origin;
}

function getCandidateUrls(rawUrl: string) {
  const apiOrigin = getApiOrigin();
  const candidates = new Set<string>();

  if (rawUrl.startsWith("/")) {
    candidates.add(new URL(rawUrl, apiOrigin).toString());
    return [...candidates].map((candidate) => new URL(candidate));
  }

  const parsedUrl = new URL(rawUrl);

  if (!allowedHosts.has(parsedUrl.hostname)) {
    throw new Error("Disallowed image host");
  }

  candidates.add(parsedUrl.toString());

  if (parsedUrl.hostname === "www.elevate-bootcamp.cloud") {
    const normalizedUrl = new URL(parsedUrl.toString());
    normalizedUrl.hostname = "elevate-bootcamp.cloud";
    candidates.add(normalizedUrl.toString());
  }

  candidates.add(
    new URL(`${parsedUrl.pathname}${parsedUrl.search}`, apiOrigin).toString(),
  );

  return [...candidates].map((candidate) => new URL(candidate));
}

export async function GET(request: NextRequest) {
  const rawUrl = request.nextUrl.searchParams.get("url");
  if (!rawUrl) {
    return new NextResponse("Missing image url", { status: 400 });
  }

  const token = process.env.TOKEN;
  if (!token) {
    return new NextResponse("Missing token", { status: 500 });
  }

  let candidateUrls: URL[];
  try {
    candidateUrls = getCandidateUrls(rawUrl);
  } catch {
    return new NextResponse("Invalid image url", { status: 400 });
  }

  let upstreamResponse: Response | null = null;

  for (const candidateUrl of candidateUrls) {
    try {
      const response = await fetch(candidateUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        upstreamResponse = response;
        break;
      }
    } catch {
      continue;
    }
  }

  if (!upstreamResponse) {
    return new NextResponse("Image fetch failed", { status: 502 });
  }

  return new NextResponse(upstreamResponse.body, {
    status: 200,
    headers: {
      "Content-Type":
        upstreamResponse.headers.get("content-type") ??
        "application/octet-stream",
      "Cache-Control":
        upstreamResponse.headers.get("cache-control") ??
        "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
