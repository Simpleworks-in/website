# CLAUDE.md — AI agent bootstrap

You are about to work on **Simpleworks Consulting's** website (simpleworks.in). This file is the fastest way for you to get useful.

## What this is

A 5-page brochure site for Prem Menon's management consulting firm in Bengaluru. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind. Blog content is managed via **Keystatic** (markdown files in `content/posts/`). Deployed to **Vercel**, domain at **GoDaddy**.

## Pages

| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Landing |
| `/about` | `src/app/about/page.tsx` | Prem's bio |
| `/blog` | `src/app/blog/page.tsx` | Listing — server-rendered category filter via `?category=` |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | Post template (derived, no separate mockup) |
| `/contact` | `src/app/contact/page.tsx` | 3 tabs: form / calendar / WhatsApp |
| `/keystatic` | `src/app/keystatic/*` | CMS admin UI (GitHub OAuth in prod) |

`src/app/layout.tsx` renders Nav, Footer, WhatsAppButton, and Google Analytics around every page — do NOT include them in individual pages.

## Brand rules — non-negotiable

These come from the design handoff. Future agents must obey:

1. **Color palette is locked**: `#FFFFFF` bg, `#0F0F0F` text, `#464646` mid, `#878787` light, `#ED1C24` red, `#E1E1E1` rule, `#F9F8F6` warm. Defined as CSS vars in `globals.css` and as Tailwind tokens in `tailwind.config.ts`. **Never introduce new colors** without a brand decision.
2. **Red is used sparingly** — one accent per section. Hover states, accents, the vertical rule. Never as a section background or for body text.
3. **Lora serif only**. No sans-serif (except inside Keystatic admin which has its own UI). Set via `next/font/google` in layout.tsx, available as `--font-lora` and the `font-serif` Tailwind class.
4. **Vertical 2px red rule** on the left side of certain hero / page-header sections. See `simpleworks-landing-mock.html` for the pattern.
5. **`mix-blend-mode: multiply`** on `hero-illustration.png` and `prem-menon.png`. Removes the white background so they blend into the page. Use the `mix-blend-multiply` Tailwind class.
6. **Generous whitespace**. Do not compress sections to fit smaller viewports — let it scroll.

## Source-of-truth mockups

Located outside the repo at:
- `/Users/aditya/Downloads/simpleworks-website-handoff/simpleworks-landing-mock.html`
- `/Users/aditya/Downloads/simpleworks-website-handoff/simpleworks-about.html`
- `/Users/aditya/Downloads/simpleworks-website-handoff/simpleworks-blog.html`
- `/Users/aditya/Downloads/simpleworks-website-handoff/simpleworks-contact.html`

These are pixel-perfect HTML/CSS specs. **When changing a page, open the corresponding mockup in a browser side-by-side and verify.**

## Verification approach for pixel-fidelity

1. Open the mockup file in Chrome via the MCP browser (`file://` URL).
2. Capture screenshot at 1440x900.
3. Open the corresponding Next.js page at `localhost:3000`. Capture same dimensions.
4. Diff visually. Whitespace within 4px of the mockup is acceptable; element layout, color, line breaks must match exactly.
5. Repeat at 375x812 for mobile (mockups don't have mobile specs — use sensible defaults).

## Stack-specific gotchas

- **Next.js 16 async params/searchParams**: `params` and `searchParams` are `Promise<>`. Always `await` them in server components. Type as `Promise<{ slug: string }>`.
- **Keystatic config path**: posts live in `content/posts/*` (not `src/content/posts/*` as in some Keystatic examples).
- **Keystatic storage**: in dev (`NODE_ENV === 'development'`), uses `local`. In prod, uses `github` mode — requires `KEYSTATIC_GITHUB_REPO` env var ("owner/repo" format).
- **next/image**: ALL images go through `next/image` for optimization. The 3 brand assets are pre-imported via static imports for type safety.
- **`use client`** components in `src/components/`: `Nav.tsx` (usePathname), `Reveal.tsx` (IntersectionObserver), `FAQAccordion.tsx`, `ContactTabs.tsx`. Server components everywhere else.

## Security namespace rule

**Only `NEXT_PUBLIC_*` env vars reach the client bundle.** Everything else is server-only.

| Public-by-design (client OK) | Server-only (secrets) |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | `KEYSTATIC_GITHUB_CLIENT_ID` |
| `NEXT_PUBLIC_CALENDAR_EMBED_URL` | `KEYSTATIC_GITHUB_CLIENT_SECRET` |
| `NEXT_PUBLIC_GA_ID` | `KEYSTATIC_SECRET` |
|  | `KEYSTATIC_GITHUB_REPO` |

If you need to add a new secret, **never** prefix it `NEXT_PUBLIC_`. Read it inside a server component or API route only.

## Never do

- Don't change `--red` (`#ED1C24`). It's the only accent color.
- Don't introduce sans-serif fonts. Lora throughout.
- Don't add Nav, Footer, or WhatsAppButton to individual pages — they live in layout.tsx.
- Don't put secrets in `.env.example` or commit `.env.local`.
- Don't bypass `next/image` and use raw `<img>`.
- Don't hardcode the Formspree URL — read from `NEXT_PUBLIC_FORMSPREE_ID`.
- Don't `--no-verify` to skip the pre-commit secret scanner.

## When you're about to ship

1. `pnpm build` — must pass with zero TS / ESLint errors.
2. `pnpm exec next lint` — must pass.
3. `pnpm check-secrets` — must report clean (no entropy-flagged strings in staged diff).
4. Open each page in Chrome MCP and compare against its mockup.
5. Submit a test through the contact form (if Formspree is configured) — confirm email arrives at pm@simpleworks.in.

## Package management

**pnpm only** — never `npm install` or `yarn`. `pnpm-lock.yaml` is the only lockfile.
