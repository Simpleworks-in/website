import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

// Public shape of a story. This is the ONLY shape that leaves this module, so
// an anonymous client's real name and location can never reach a component,
// the HTML, JSON-LD or alt text: they are dropped here, on the server.
export type PublicStory = {
  id: string;
  programme: string;
  title: string;
  meta: string;
  image: string | null;
  imageAlt: string;
  problem: string;
  solution: string;
};

export type StoriesPageText = {
  eyebrow: string;
  heading: string;
  headingRed: string;
  intro: string;
  closingFootnote: string;
  ctaEyebrow: string;
  ctaHeading: string;
  ctaHeadingRed: string;
  ctaBody: string;
  ctaButtonLabel: string;
  ctaButtonHref: string;
  ctaCaption: string;
};

const reader = () => createReader(process.cwd(), keystaticConfig);

// `limit` and `offset` are here so pagination can be added later
// (/client-success-stories/page/2 ...) without changing the schema.
export async function getVisibleStories(opts?: {
  limit?: number;
  offset?: number;
}): Promise<{ stories: PublicStory[]; total: number }> {
  const entries = await reader().collections.clientStories.all();

  const visible = entries
    .filter((e) => e.entry.permissionConfirmed)
    .sort((a, b) => (b.entry.date ?? "").localeCompare(a.entry.date ?? ""));

  const offset = opts?.offset ?? 0;
  const page = visible.slice(
    offset,
    opts?.limit ? offset + opts.limit : undefined,
  );

  const stories = page.map(({ slug, entry }): PublicStory => {
    const anon = entry.anonymous;
    const location = anon ? entry.publicLocation : entry.location;
    return {
      id: slug,
      programme: entry.programme,
      title: anon ? entry.publicLabel : entry.clientName,
      meta: [location, entry.industryLabel].filter(Boolean).join(" · "),
      image: entry.image,
      // Anonymous: ignore the free-text alt, which could contain a name.
      imageAlt: anon
        ? `Illustration for a ${entry.programme} engagement`
        : entry.imageAlt || `Illustration for ${entry.clientName}`,
      problem: entry.problem,
      solution: entry.solution,
    };
  });

  return { stories, total: visible.length };
}

export async function getStoriesPageText(): Promise<StoriesPageText> {
  const text = await reader().singletons.storiesPage.read();
  if (!text) throw new Error("content/stories-page.yaml is missing");
  return text;
}
