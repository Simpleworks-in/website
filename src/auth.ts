import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

// Org whose members are allowed to access /keystatic.
const ALLOWED_ORG = "Simpleworks-in";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      // Reuse the same OAuth app credentials Keystatic uses.
      clientId: process.env.KEYSTATIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
      authorization: {
        params: { scope: "read:user read:org" },
      },
    }),
  ],
  // Lock down to Simpleworks-in org members only.
  callbacks: {
    async signIn({ account }) {
      if (account?.provider !== "github" || !account.access_token) return false;
      try {
        const res = await fetch(
          `https://api.github.com/user/memberships/orgs/${ALLOWED_ORG}`,
          {
            headers: {
              Authorization: `Bearer ${account.access_token}`,
              Accept: "application/vnd.github+json",
              "User-Agent": "Simpleworks-Keystatic-Gate",
            },
          }
        );
        if (!res.ok) return false;
        const data = (await res.json()) as { state?: string; role?: string };
        return data.state === "active";
      } catch {
        return false;
      }
    },
  },
  pages: {
    signIn: "/api/auth/signin",
    error: "/api/auth/error",
  },
  // Use stateless JWT sessions — no DB required.
  session: { strategy: "jwt" },
  // AUTH_SECRET env var signs the JWT. Vercel auto-injects it if you set it.
  trustHost: true,
});
