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

// Always use github storage so Keystatic's setup wizard becomes
// reachable at /keystatic/setup. The wizard auto-creates the GitHub
// App for us on first run.
const storage = {
  kind: "github",
  repo: { owner: REPO_OWNER, name: REPO_NAME },
} as const;

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
  },
});
