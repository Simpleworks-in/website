# Simpleworks Consulting — Website

Production website for **simpleworks.in**, the consulting firm of Prem Menon.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS · Keystatic CMS · Vercel · Formspree · Google Calendar

---

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Other scripts:

```bash
pnpm build        # production build
pnpm start        # serve production build
pnpm lint         # ESLint
pnpm check-secrets # scan staged diff for secrets (used by pre-commit)
```

> **Package manager: pnpm** (not npm). If you don't have it: `npm install -g pnpm`.

---

## Project structure

```
website/
├── README.md
├── CLAUDE.md                # AI-agent bootstrap
├── .env.example             # required env vars (no real values)
├── keystatic.config.ts      # blog post frontmatter schema (reader-only — no admin route exposed)
├── tailwind.config.ts       # design tokens (colors, fonts, sizes)
├── next.config.mjs          # security headers
├── public/                  # static assets
│   ├── hero-illustration.png
│   ├── prem-menon.png
│   └── Simpleworks_image_only_S.png
├── content/posts/           # blog posts (markdown — authored via GitHub web UI)
├── scripts/
│   └── check-secrets.sh     # pre-commit secret scanner
├── .github/workflows/       # CI (gitleaks, audit)
└── src/
    ├── app/
    │   ├── layout.tsx       # Nav + Footer + WhatsApp + GA wrap every page
    │   ├── globals.css      # brand vars + keyframes
    │   ├── page.tsx                  # landing
    │   ├── about/page.tsx
    │   ├── blog/page.tsx             # listing
    │   ├── blog/[slug]/page.tsx      # post template
    │   ├── contact/page.tsx
    │   ├── manifest.ts              # PWA manifest
    │   ├── sw.ts                    # PWA service worker (Serwist)
    │   ├── offline/page.tsx         # PWA offline fallback
    │   ├── sitemap.ts
    │   └── robots.ts
    └── components/
        ├── Nav.tsx
        ├── Footer.tsx
        ├── WhatsAppButton.tsx
        ├── Reveal.tsx           # scroll-reveal observer
        ├── PageRedRule.tsx
        ├── FAQAccordion.tsx     # client
        └── ContactTabs.tsx      # client
```

---

## Environment variables

Copy `.env.example` to `.env.local` for development; configure the same variables in **Vercel → Project → Settings → Environment Variables** for production.

| Variable | Class | Purpose |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | public | Form ID at formspree.io (e.g. `xnjrandy`) |
| `NEXT_PUBLIC_CALENDAR_EMBED_URL` | public | Google Calendar appointment-page iframe URL |
| `NEXT_PUBLIC_GA_ID` | public | Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`) |

**Rule:** only variables prefixed with `NEXT_PUBLIC_` ever leave the server. If you ever add a server-only secret, never prefix it `NEXT_PUBLIC_` — read it inside a server component or API route only.

---

## Deployment guide (Phases 7-12 of the handoff)

### 1. Push to GitHub
```bash
gh repo create simpleworks --public --source . --remote origin --push
# or, if you prefer the browser, create the repo in github.com then:
git remote add origin https://github.com/<you>/simpleworks.git
git push -u origin main
```

### 2. Vercel deploy
1. vercel.com → New Project → Import from GitHub → pick `simpleworks`.
2. Framework: Next.js (auto-detected). Click Deploy.
3. Settings → Environment Variables → add every var from the table above. Set per environment (Production / Preview / Development).

### 3. Formspree
- formspree.io → Sign up → New Form "Simpleworks Contact".
- Copy the Form ID into Vercel as `NEXT_PUBLIC_FORMSPREE_ID`.
- Enable hCaptcha in the form's dashboard for spam protection.
- Test: submit the contact form once; expect an email at pm@simpleworks.in within 2 minutes.

### 4. Google Calendar booking (Prem does this in his Google account)
1. calendar.google.com → + Other Calendars → Create new → "Simpleworks Consultations".
2. Appointment Schedules → Create → "Consultation with Prem Menon — Simpleworks".
3. Duration: 30 + 60 min. Mon-Fri 9:00-18:00 IST.
4. Share → Embed → copy iframe `src` URL.
5. Paste into Vercel as `NEXT_PUBLIC_CALENDAR_EMBED_URL`.

### 5. Domain connect
1. Vercel → Domains → Add `simpleworks.in` and `www.simpleworks.in`.
2. GoDaddy → DNS → add:
   - `A` @ → `76.76.21.21`
   - `CNAME` www → `cname.vercel-dns.com`
3. Propagation: 10-30 min. `simpleworks.in` then serves over HTTPS.
4. In Vercel's domain settings, `simpleworks.in` is configured to redirect to
   `www.simpleworks.in` — **www is the canonical host**. Do not add a competing
   hostname redirect in `next.config.mjs` or `src/proxy.ts`; two redirects
   pointing at each other produce an infinite 308 loop that takes the whole
   site down.

### 6. Google Analytics
- analytics.google.com → Create GA4 Property for simpleworks.in.
- Copy Measurement ID. Paste into Vercel as `NEXT_PUBLIC_GA_ID`. Redeploy.

### 7. Search Console
- search.google.com/search-console → Add property → Domain → simpleworks.in
  (a Domain property covers both the apex and www).
- Verify via TXT record in GoDaddy DNS.
- Submit sitemap: `https://www.simpleworks.in/sitemap.xml`.
- Use `https://www.simpleworks.in/` for URL Inspection — www is the canonical
  host, and the apex just 308s to it.

### 8. Professional email (Prem)
- workspace.google.com → start trial → add domain simpleworks.in.
- Add MX records in GoDaddy as Google instructs.
- `pm@simpleworks.in` becomes the inbox for Formspree submissions.

---

## Writing blog posts

There are three ways to publish a post. Pick whichever fits your day.

### Option 1 — Claude Code slash command (recommended for devs)

From this repo, in Claude Code:

```
/new-post "Your post title here"
```

The command walks you end-to-end:

1. **Title** — taken from your argument (or asks if you didn't provide one)
2. **Category** — picker for Strategy / Growth / Execution / Leadership
3. **Excerpt** — the one-line summary that shows on the blog grid
4. **Scaffolds** `content/posts/<slug>.mdoc` with valid frontmatter + a body skeleton
5. **Pauses** so you can open the file and write the body in your editor
6. **Asks** when you're done — **Publish now** / **Save as draft** / **Discard**
7. If publish: runs the secret scanner, commits, pushes, and watches the Vercel rebuild — you get a notification when the URL is live (~60s)

Safety rails: slug is URL-sanitised, won't overwrite an existing post, refuses to push if `scripts/check-secrets.sh` finds anything suspicious, and confirms before pushing from a non-`main` branch (preview deploys, not the live URL).

The command lives at `.claude/commands/new-post.md` — edit it if the workflow changes.

### Option 2 — GitHub web UI (Prem's preferred workflow, no terminal)

1. Open https://github.com/Simpleworks-in/website/tree/main/content/posts
2. **Add file → Create new file**
3. Filename: `your-slug.mdoc`
4. Paste the frontmatter (template below), write the post in the body
5. **Commit changes** — Vercel rebuilds, post is live in ~60 seconds at `https://simpleworks.vercel.app/blog/<slug>`

GitHub's web editor has a **Preview** tab — use it to check your markdown renders before committing.

### Option 3 — Manual file (any text editor)

Create `content/posts/<slug>.mdoc` with this frontmatter:

```yaml
---
title: Your post title
date: 2026-05-16
category: strategy   # or growth | execution | leadership
excerpt: One-line summary that shows on the blog grid.
seoTitle: ""         # optional override (max 60 chars)
seoDescription: ""   # optional (max 155 chars)
---

Body content in Markdown. Use **bold**, *italic*, [links](https://...),
and ## headings to structure the post.
```

Then `git add content/posts/<slug>.mdoc && git commit -m "post: …" && git push`.

---

## Security

This site is built **security-first**:

- HTTPS-only with HSTS preload via `next.config.mjs` headers.
- Strict CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy.
- No secrets in the repo. `.env.local` is gitignored; `.env.example` documents the contract with placeholders only.
- `scripts/check-secrets.sh` runs pre-commit (greps for known token patterns + high-entropy strings).
- `.github/workflows/gitleaks.yml` scans every push and PR.
- `npm audit` is run in CI.
- Contact form honeypot field `_gotcha` (Formspree's built-in spam trap).

If you find a vulnerability, email pm@simpleworks.in — please do not open a public issue.

---

## Pixel-fidelity / mockups

The canonical visual source-of-truth is in `/Users/aditya/Downloads/simpleworks-website-handoff/`:
- `simpleworks-landing-mock.html`
- `simpleworks-about.html`
- `simpleworks-blog.html`
- `simpleworks-contact.html`

These were produced by the design phase and the Next.js pages match them exactly. If you change a page, open the mock in a browser side-by-side and verify.

---

## Contact

- Owner: Prem Menon — pm@simpleworks.in — +91 90360 99000
- Repo: github.com/<owner>/simpleworks (set during deploy)
