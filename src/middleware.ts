import { NextResponse, type NextRequest } from "next/server";

// Gate the Keystatic admin behind GitHub auth.
//
// Keystatic's own OAuth flow sets `keystatic-gh-access-token` after a
// successful login. Without it, the admin shell loads publicly — anyone
// could see the collection structure even if API reads fail.
//
// This middleware enforces a stricter contract: if you don't have the
// auth cookie when you hit /keystatic, you get redirected through the
// GitHub OAuth dance first. Only users with write access to the
// Simpleworks-in/website repo will succeed.
//
// The /api/keystatic routes themselves are NOT gated here — they need to
// be reachable so the OAuth callback can complete and set the cookie.

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("keystatic-gh-access-token");
  if (accessToken) return NextResponse.next();

  // Build the OAuth login URL on the same origin Keystatic exposes.
  const loginUrl = new URL("/api/keystatic/github/login", req.nextUrl.origin);
  loginUrl.searchParams.set(
    "from",
    req.nextUrl.pathname + req.nextUrl.search
  );
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/keystatic",
    // Anything under /keystatic except the OAuth callbacks themselves
    "/keystatic/((?!api).*)",
  ],
};
