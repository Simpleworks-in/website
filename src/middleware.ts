import { NextResponse } from "next/server";
import { auth } from "@/auth";

// Routes that MUST be authenticated as a Simpleworks-in org member.
// Keystatic admin UI + the Keystatic API (excluding the GitHub OAuth callback
// itself, which is used during the Keystatic commit-side OAuth handshake).
const PROTECTED = [/^\/keystatic(\/.*)?$/, /^\/api\/keystatic(\/(?!github\/).*)?$/];

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const needsAuth = PROTECTED.some((re) => re.test(pathname));
  if (!needsAuth) return NextResponse.next();

  if (!req.auth) {
    const signInUrl = new URL("/api/auth/signin", req.nextUrl.origin);
    signInUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return NextResponse.redirect(signInUrl);
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/keystatic",
    "/keystatic/:path*",
    "/api/keystatic",
    "/api/keystatic/:path*",
  ],
};
