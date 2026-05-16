---
description: Create a new Keystatic blog post markdown file under content/posts/
argument-hint: "<title>" [category]
---

# /new-post — Create a Simpleworks blog post

You are creating a new blog post markdown file that Keystatic can read and that will render at `/blog/<slug>`.

## Steps

1. Parse the argument as the post title. Optional second word(s) — if matching one of `strategy`, `growth`, `execution`, `leadership` — sets the category. Default category: `strategy`.

2. Derive the slug from the title:
   - lowercase
   - replace spaces and underscores with hyphens
   - strip any character that is not `[a-z0-9-]`
   - collapse repeated hyphens
   - trim leading/trailing hyphens

3. **Refuse to overwrite an existing file.** Check if `content/posts/<slug>.md` exists. If it does, stop and tell the user to choose a different title or delete the existing file first.

4. Write `content/posts/<slug>.md` with this exact format (replace `<...>` placeholders):

```markdown
---
title: <The exact title the user typed>
date: <today's date in YYYY-MM-DD>
category: <strategy | growth | execution | leadership>
excerpt: <One-sentence summary — the user will fill this in>
seoTitle: ""
seoDescription: ""
---

<!-- Write the post here.

Tip: Keystatic admin (at /keystatic) is the recommended author tool —
this command is a developer shortcut. The canonical workflow for Prem is
the web UI: simpleworks.in/keystatic.

Keep paragraphs short. Use H2 (##) for section headings. Italics with *single-asterisks*.
-->

Body content...
```

5. After writing, report:
   - The file path created
   - The slug
   - The URL the post will be served at (`/blog/<slug>` on prod, `localhost:3000/blog/<slug>` in dev)
   - A reminder to fill in the excerpt and write the body

## Constraints

- Use only the Bash, Write, and Read tools.
- Do not modify any other file.
- Do not run the dev server.
- If the user didn't pass a title argument, ask them for one — do not invent.
