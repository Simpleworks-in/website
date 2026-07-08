import { config, fields, collection } from "@keystatic/core";

// Storage strategy:
// - In production (Vercel), `KEYSTATIC_GITHUB_APP_SLUG` is set and we use
//   GitHub App mode. Anyone with write access to the repo can sign in via
//   the Keystatic admin UI; commits go straight to the repo.
// - Locally, we default to `local` mode: writes go to your filesystem.
//   The first time you visit /keystatic on localhost, Keystatic's setup
//   wizard offers to create the GitHub App for you.

const REPO_OWNER = "Simpleworks-in";
const REPO_NAME = "website";

// Storage strategy is decided by NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG.
//
// CRITICAL: we must use a NEXT_PUBLIC_* variable here because this config
// file is imported by the Keystatic React app (a client component). Any
// server-only env var (no NEXT_PUBLIC_ prefix) is undefined in the client
// bundle, so a check against `KEYSTATIC_GITHUB_CLIENT_ID` would make the
// client always think we're in local mode — which makes the UI call the
// `/api/keystatic/tree` (local-filesystem) endpoint that doesn't exist
// in github mode, producing 404s and a broken admin UI.
//
// `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` is the same variable Keystatic
// already needs for the GitHub-App OAuth flow, so it doubles as the
// "we have a GitHub App configured" sentinel.
const HAS_GITHUB_APP = !!process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG;

const storage = HAS_GITHUB_APP
  ? ({
      kind: "github",
      repo: { owner: REPO_OWNER, name: REPO_NAME },
    } as const)
  : ({ kind: "local" } as const);

export default config({
  storage,
  ui: {
    brand: { name: "Simpleworks" },
  },
  collections: {
    posts: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "content/posts/*",
      format: { contentField: "content" },
      columns: ["title", "date", "category"],
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({ label: "Date Published" }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Strategy", value: "strategy" },
            { label: "Growth", value: "growth" },
            { label: "Execution", value: "execution" },
            { label: "Leadership", value: "leadership" },
          ],
          defaultValue: "strategy",
        }),
        excerpt: fields.text({
          label: "Excerpt",
          description: "2-line summary shown on the blog listing page",
          multiline: false,
        }),
        seoTitle: fields.text({
          label: "SEO Title (optional)",
          description: "Override the post title for Google (max 60 chars)",
        }),
        seoDescription: fields.text({
          label: "SEO Description (optional)",
          description: "Meta description for Google (max 155 chars)",
          multiline: true,
        }),
        content: fields.markdoc({
          label: "Content",
          description: "Write the full blog post here",
        }),
      },
    }),
    resources: collection({
      label: "Resources",
      slugField: "title",
      path: "content/resources/*",
      format: { data: "yaml" },
      columns: ["title", "category", "pages"],
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Growth", value: "Growth" },
            { label: "Leadership", value: "Leadership" },
            { label: "Execution", value: "Execution" },
            { label: "Strategy", value: "Strategy" },
          ],
          defaultValue: "Growth",
        }),
        excerpt: fields.text({
          label: "Excerpt",
          description: "1-3 sentence summary shown on the resources grid",
          multiline: true,
        }),
        pages: fields.text({
          label: "Page count",
          description: "Shown next to the PDF badge, e.g. \"12 pages\"",
        }),
        file: fields.file({
          label: "PDF file",
          description: "Upload the resource PDF — it's committed straight to public/resources/",
          directory: "public/resources",
          publicPath: "/resources/",
          validation: { isRequired: true },
        }),
      },
    }),
  },
});
