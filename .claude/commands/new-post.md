---
description: End-to-end blog post workflow for Simpleworks. Scaffolds the file, waits while you write the body, then commits + pushes + verifies the live URL.
argument-hint: "<title>"
---

# /new-post — Write, scaffold, and publish a Simpleworks blog post

You are guiding the user from "I have a post idea" all the way to "the post is live at simpleworks.vercel.app/blog/<slug>". One command, end-to-end.

## Step 1 — Title

- If the user passed a title as the argument, use it verbatim.
- Otherwise ask: `What's the title of the post?` via AskUserQuestion (single question, no multiple choice, the user provides free-form text via "Other").
- Do not invent a title.

## Step 2 — Slug + collision check

Derive the slug:
- lowercase
- whitespace + `_` → single `-`
- strip every char not in `[a-z0-9-]`
- collapse repeated `-`, trim leading/trailing `-`

Check `content/posts/<slug>.mdoc` and `content/posts/<slug>.md`. If either exists, stop and tell the user — do not overwrite.

## Step 3 — Category (AskUserQuestion)

- Question: `What category fits this post?`
- Header: `Category`
- Single-select, 4 options:
  - `Strategy` — Strategy, vision, business design
  - `Growth` — Go-to-market, expansion, customer growth
  - `Execution` — OKRs, operations, getting things done
  - `Leadership` — People, culture, founder transitions

Use the lowercase value (`strategy` / `growth` / `execution` / `leadership`) in the file.

## Step 4 — Excerpt (AskUserQuestion)

- Question: `One-line summary for the blog grid? (under ~200 chars)`
- Header: `Excerpt`
- Provide two preset suggestions plus the implicit "Other" so the user can type free-form. Suggestions:
  - `Use the title as the excerpt` — copies the title verbatim
  - `Write a custom one-liner` — picks "Other" by convention

Take whatever the user provides as the final excerpt value.

## Step 5 — Scaffold the file

Write `content/posts/<slug>.mdoc` with **exactly** this content (substitute placeholders, no surrounding code fences in the output):

```
---
title: <exact title>
date: <today YYYY-MM-DD>
category: <lowercase category>
excerpt: <excerpt>
seoTitle: ""
seoDescription: ""
---

Write the post here. Replace this paragraph with your opening.

## A section heading

More body. Use **bold**, *italic*, [links](https://example.com),
short paragraphs, and `## Section headings` for structure.
```

Report to the user:
- The path: `content/posts/<slug>.mdoc`
- A reminder: "Open it in your editor and write the body now. Save when done."

## Step 6 — Wait for the user to finish writing

AskUserQuestion:
- Question: `Ready to publish?`
- Header: `Publish`
- Single-select, 3 options:
  - `Publish now` — commit + push + watch for the live URL
  - `Save as draft (don't commit yet)` — leave the file uncommitted; user can `/new-post` continue later or commit manually
  - `Discard this post` — delete the file, abort

Branch on the answer.

## Step 7a — Publish now

1. Run `bash scripts/check-secrets.sh` first. If it fails, tell the user and stop — do NOT push with secrets in the diff.
2. `git add content/posts/<slug>.mdoc`
3. `git commit -m "post: <title>"` — single-line commit subject, no body needed.
4. `git push` — capture the result. If push fails (e.g. branch behind), tell the user and stop.
5. After a successful push, kick off a background Bash:
   ```bash
   until curl -sI https://simpleworks.vercel.app/blog/<slug> | head -1 | grep -q '^HTTP/2 200'; do sleep 6; done && echo "live"
   ```
   with `run_in_background: true`. Tell the user the deploy is rebuilding and they'll get a notification when the post is live (~60s).
6. Report the final URL: `https://simpleworks.vercel.app/blog/<slug>`.

## Step 7b — Save as draft

- Don't run git at all.
- Confirm: "Saved as draft at content/posts/<slug>.mdoc. Run /new-post again or commit manually when ready."

## Step 7c — Discard

- `rm content/posts/<slug>.mdoc`
- Confirm: "Discarded. No changes committed."

## Constraints

- Use only Read, Write, Bash, AskUserQuestion tools.
- Never `--no-verify` on git commit.
- Never modify any file outside `content/posts/` (or `.git/` via normal git operations).
- The slug must be URL-safe — never let through a slug with uppercase, spaces, or special chars.
- Today's date comes from `date -u +%Y-%m-%d` via Bash (UTC, so consistent across timezones).
- If the user is on a branch that isn't `main`, ask before pushing (the site rebuilds from `main` only; a non-main branch will deploy as a Vercel preview, not the live URL).
