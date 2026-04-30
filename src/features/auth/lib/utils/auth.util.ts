import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getNextAuthToken() {
  const cookiesStore = await cookies();
  const configuredCookieName = process.env.NEXTAUTH_SESSION_COOKIE;
  const token =
    (configuredCookieName
      ? cookiesStore.get(configuredCookieName)?.value
      : undefined) ??
    cookiesStore.get("next-auth.session-token")?.value ??
    cookiesStore.get("__Secure-next-auth.session-token")?.value;

  if (!token || !process.env.NEXTAUTH_SECRET) {
    return null;
  }

  try {
    const jwt = await decode({
      token,
      secret: process.env.NEXTAUTH_SECRET,
    });
    return jwt;
  } catch (error) {
    void error;
    return null;
  }
}
