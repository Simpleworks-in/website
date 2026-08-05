# CLAUDE.md — AI agent bootstrap

You are about to work on **Simpleworks Consulting's** website (simpleworks.in). This file is the fastest way for you to get useful.

## What this is

A 5-page brochure site for Prem Menon's management consulting firm in Bengaluru. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind. Blog content is **git-only**: markdown files in `content/posts/`. No CMS admin route exists — Prem writes posts directly via the GitHub web UI. The `@keystatic/core` reader still parses frontmatter at build time (the schema lives in `keystatic.config.ts`), but no Keystatic admin routes are exposed.

## Pages

| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Landing |
| `/about` | `src/app/about/page.tsx` | Prem's bio |
| `/blog` | `src/app/blog/page.tsx` | Listing — server-rendered category filter via `?category=` |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | Post template (derived, no separate mockup) |
| `/contact` | `src/app/contact/page.tsx` | 2 tabs: WhatsApp (default) / form. Calendar/Book-a-Call tab was removed. |

The Keystatic admin **does** exist: `src/app/keystatic/[[...params]]/page.tsx` (UI) and `src/app/api/keystatic/[...params]/route.ts` (API + GitHub OAuth). `src/proxy.ts` gates the UI behind a GitHub login — only users with write access to `Simpleworks-in/website` get in; the `/api/keystatic/*` routes stay ungated so the OAuth callback can complete. Blog posts are usually authored through GitHub directly (see below); resources go through the admin because it commits the PDF for you.

`src/app/layout.tsx` renders Nav, Footer, WhatsAppButton, and Google Analytics around every page — do NOT include them in individual pages.

## Brand rules — non-negotiable

These come from the design handoff. Future agents must obey:

1. **Color palette is locked**: `#FFFFFF` bg, `#0F0F0F` text, `#464646` mid, `#878787` light, `#ED1C24` red, `#E1E1E1` rule, `#F9F8F6` warm. Defined as CSS vars in `globals.css` and as Tailwind tokens in `tailwind.config.ts`. **Never introduce new colors** without a brand decision.
2. **Red is used sparingly** — one accent per section. Hover states, accents, the vertical rule. Never as a section background or for body text.
3. **Lora serif only**. No sans-serif. Set via `next/font/google` in layout.tsx, available as `--font-lora` and the `font-serif` Tailwind class.
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
- **Blog posts live at `content/posts/*.mdoc` (or `.md`)** in the repo. The Keystatic reader (`createReader` from `@keystatic/core/reader`) parses them at build time against the schema in `keystatic.config.ts`. There is no Keystatic admin route — posts are authored through the GitHub web UI.
- **Resources live at `content/resources/*.yaml`** (metadata) + `public/resources/*.pdf` (the file). Same git-only pattern as blog posts — `src/app/resources/page.tsx` reads the `resources` collection via the Keystatic reader at build time. See "Adding a downloadable resource" below.
- **next/image**: ALL images go through `next/image` for optimization. The 3 brand assets are pre-imported via static imports for type safety.
- **`use client`** components in `src/components/`: `Nav.tsx` (usePathname), `Reveal.tsx` (IntersectionObserver), `FAQAccordion.tsx`, `ContactTabs.tsx`. Server components everywhere else.

## Authoring a blog post (the canonical workflow)

1. Visit https://github.com/Simpleworks-in/website/tree/main/content/posts
2. Click **Add file → Create new file**.
3. Filename: `your-slug.mdoc` (kebab-case, ends in `.mdoc` so Keystatic's reader picks it up).
4. Paste frontmatter at the top, write the post body below:
   ```markdown
   ---
   title: Your post title
   date: 2026-05-16
   category: strategy   # or growth | execution | leadership
   excerpt: One-line summary shown on the blog grid.
   seoTitle: ""
   seoDescription: ""
   ---

   Your post body. Use **bold**, *italic*, [links](https://...), ## headings.
   ```
5. Click **Commit changes**. Vercel rebuilds; post is live in ~60 seconds at `/blog/<slug>`.

## Adding a downloadable resource (the canonical workflow)

Resources are authored entirely through the Keystatic admin UI at `/keystatic` — one item, one commit, PDF included.

1. Visit `https://www.simpleworks.in/keystatic/branch/main/collection/resources/create`.
2. Fill in title, category, excerpt, page count.
3. Drag the PDF itself into the **PDF file** field — Keystatic commits it straight to `public/resources/` and stores the public path in the entry's `file` field. There's no separate GitHub upload step and no filename to type by hand.
4. Click **Save**. Vercel rebuilds; the resource appears in ~60 seconds at `/resources` as a direct download — no email gate.

The `file` field (`fields.file` in `keystatic.config.ts`, `directory: "public/resources"`, `publicPath: "/resources/"`) reads back as the full public path (e.g. `/resources/my-guide.pdf`). A handful of older entries predate this field type and still store a bare filename (e.g. `my-guide.pdf`) — `src/app/resources/page.tsx` handles both shapes (prefixes with `/resources/` only if the stored value doesn't already start with `/`).

## Security namespace rule

**Only `NEXT_PUBLIC_*` env vars reach the client bundle.** Everything else is server-only.

| Public-by-design (client OK) | Server-only (secrets) |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | (none currently) |
| `NEXT_PUBLIC_GA_ID` | |

If you ever add a new secret, **never** prefix it `NEXT_PUBLIC_`. Read it inside a server component or API route only.

## Never do

- Don't change `--red` (`#ED1C24`). It's the only accent color.
- Don't introduce sans-serif fonts. Lora throughout.
- Don't add Nav, Footer, or WhatsAppButton to individual pages — they live in layout.tsx.
- Don't put secrets in `.env.example` or commit `.env.local`.
- Don't bypass `next/image` and use raw `<img>`.
- Don't hardcode the Formspree URL — read from `NEXT_PUBLIC_FORMSPREE_ID`.
- Don't `--no-verify` to skip the pre-commit secret scanner.
- Don't add a hostname redirect in `next.config.mjs` or `src/proxy.ts`. **`www.simpleworks.in` is the canonical host**, and the apex → www 308 is owned by the Vercel domain config, which runs before the app. A redirect in the app pointing the other way ping-pongs against it and takes both hostnames down (this happened — see commit `40b110e`). New absolute URLs (canonical, OG, JSON-LD, sitemap) use `https://www.simpleworks.in`.

## When you're about to ship

1. `pnpm build` — must pass with zero TS / ESLint errors.
2. `pnpm lint` — must pass. (`next lint` was removed in Next 16; the script runs `eslint .` directly.)
3. `pnpm check-secrets` — must report clean (no entropy-flagged strings in staged diff).
4. Open each page in Chrome MCP and compare against its mockup.
5. Submit a test through the contact form (if Formspree is configured) — confirm email arrives at pm@simpleworks.in.

## Package management

**pnpm only** — never `npm install` or `yarn`. `pnpm-lock.yaml` is the only lockfile.
