import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const privateRoutes = new Set(["/", "/diplomas/**", "/account"]);
const authRoutes = new Set(["/login", "/register"]);

export default async function proxy(request: NextRequest) {
  const jwt = await getToken({ req: request });
  const pathname = request.nextUrl.pathname;

  // User cannot access private routes if not authenticated
  // User cannot access auth routes if authenticated

  if (privateRoutes.has(pathname)) {
    if (jwt) return NextResponse.next();

    const redirectUrl = new URL("/login", request.nextUrl.origin);
    redirectUrl.searchParams.set("callbackUrl", pathname);

    return NextResponse.redirect(redirectUrl);
  }

  if (authRoutes.has(pathname)) {
    if (!jwt) return NextResponse.next();

    const redirectUrl = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
