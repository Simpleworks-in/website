import { NextResponse, type NextRequest } from "next/server";

// Gate the Keystatic admin behind GitHub auth.
//
// Keystatic's own OAuth flow sets `keystatic-gh-access-token` after a
// successful login. Without it, the admin shell loads publicly — anyone
// could see the collection structure even if API reads fail.
//
// This proxy enforces a stricter contract: if you don't have the
// auth cookie when you hit /keystatic, you get redirected through the
// GitHub OAuth dance first. Only users with write access to the
// Simpleworks-in/website repo will succeed.
//
// The /api/keystatic routes themselves are NOT gated here — they need to
// be reachable so the OAuth callback can complete and set the cookie.

export function proxy(req: NextRequest) {
  // Canonicalize the apex domain to www.
  if (req.headers.get("host") === "simpleworks.in") {
    const url = req.nextUrl.clone();
    url.host = "www.simpleworks.in";
    return NextResponse.redirect(url, 308);
  }

  // No GitHub App configured → local mode → no auth gate (dev/local only).
  if (!process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG) {
    return NextResponse.next();
  }

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
    // Run on every path so the apex→www redirect always fires.
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
