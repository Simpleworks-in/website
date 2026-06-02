import withSerwistInit from "@serwist/next";

/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== "production";

// React/Next dev mode needs eval() for HMR + better stack traces.
// In production we keep CSP strict (no unsafe-eval) — React never uses eval at runtime.
const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  isDev ? "'unsafe-eval'" : null,
  "https://www.googletagmanager.com",
  "https://www.google-analytics.com",
]
  .filter(Boolean)
  .join(" ");

const csp = [
  "default-src 'self'",
  `script-src ${scriptSrc}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: https: blob:",
  "font-src 'self' https://fonts.gstatic.com data:",
  // Keystatic admin needs (all via fetch, so connect-src):
  //   api.github.com — GraphQL + REST for repo content
  //   raw.githubusercontent.com — raw file blobs
  //   avatars.githubusercontent.com — user avatars in the admin UI
  //   fonts.googleapis.com — Inter UI font CSS
  //   fonts.gstatic.com — actual WOFF2 binary blobs (fetched via JS)
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://formspree.io https://api.github.com https://raw.githubusercontent.com https://avatars.githubusercontent.com https://fonts.googleapis.com https://fonts.gstatic.com",
  "frame-src 'self' https://calendar.google.com https://*.google.com",
  "frame-ancestors 'self'",
  "form-action 'self' https://formspree.io https://*.substack.com",
  "base-uri 'self'",
  "object-src 'none'",
  "worker-src 'self'",
  "manifest-src 'self'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "Content-Security-Policy", value: csp },
];

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  cacheOnNavigation: true,
  reloadOnOnline: true,
  disable: isDev,
  additionalPrecacheEntries: [{ url: "/offline", revision: null }],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // The /blog listing reads `content/posts/*.mdoc` at runtime via the
  // Keystatic reader (it's a dynamic route — depends on searchParams).
  // By default Vercel's serverless bundle only includes files reached
  // through JS imports, so content/ would be missing and the reader
  // returns []. Force-include the markdown source.
  outputFileTracingIncludes: {
    "/blog": ["./content/**/*"],
    "/blog/[slug]": ["./content/**/*"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.simpleworks.in" }],
        destination: "https://simpleworks.in/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/sw.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },
    ];
  },
  // Canonicalize Keystatic admin to the apex host. Both simpleworks.in
  // and www.simpleworks.in alias the same deployment, but Keystatic's
  // GitHub OAuth cookie is host-scoped (no Domain attribute) — so a
  // session established on apex doesn't apply to www and vice versa.
  // Pinning admin traffic to apex means the GitHub App only needs one
  // callback URL and there's a single source of truth for the session.
  async redirects() {
    return [
      {
        source: "/keystatic/:path*",
        has: [{ type: "host", value: "www.simpleworks.in" }],
        destination: "https://simpleworks.in/keystatic/:path*",
        permanent: true,
      },
      {
        source: "/api/keystatic/:path*",
        has: [{ type: "host", value: "www.simpleworks.in" }],
        destination: "https://simpleworks.in/api/keystatic/:path*",
        permanent: true,
      },
    ];
  },
};

export default withSerwist(nextConfig);
