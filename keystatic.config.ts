import { config, fields, collection } from "@keystatic/core";

const githubRepo = process.env.KEYSTATIC_GITHUB_REPO; // expected format: "owner/repo"
const [owner, name] = (githubRepo ?? "/").split("/");

const storage =
  process.env.NODE_ENV === "development" || !owner || !name
    ? ({ kind: "local" } as const)
    : ({ kind: "github", repo: { owner, name } } as const);

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
