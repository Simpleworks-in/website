import Link from "next/link";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: { absolute: "Blog | Simpleworks | Business Consultant Bengaluru" },
  description:
    "Practical business insights from Prem Menon — management consultant with 39 years of experience. Strategy, growth, execution and leadership for Indian MSMEs.",
};

type Category = "strategy" | "growth" | "execution" | "leadership";

const categories: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "strategy", label: "Strategy" },
  { value: "growth", label: "Growth" },
  { value: "execution", label: "Execution" },
  { value: "leadership", label: "Leadership" },
];

const formatDate = (iso: string | null) => {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const activeCategory = (params?.category ?? "all") as Category | "all";

  const reader = createReader(process.cwd(), keystaticConfig);
  const allPosts = await reader.collections.posts.all();
  const posts = allPosts
    .map((p) => ({ slug: p.slug, ...p.entry }))
    .filter((p) =>
      activeCategory === "all" ? true : p.category === activeCategory
    )
    .sort((a, b) => ((a.date ?? "") < (b.date ?? "") ? 1 : -1));

  return (
    <>
      {/* PAGE HEADER */}
      <div className="flex border-b border-rule">
        <div className="relative hidden md:flex w-[72px] flex-shrink-0 items-start pt-14 pl-6">
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-red" />
        </div>
        <div className="flex flex-1 flex-col md:flex-row md:flex-wrap md:items-end md:justify-between gap-8 md:gap-10 px-6 py-10 md:px-[60px] md:py-14 md:pl-14">
          <div className="max-w-[520px]">
            <p
              className="text-eyebrow uppercase tracking-wide-10 text-light"
              style={{ opacity: 0, animation: "fadeUp 0.6s ease 0.1s both" }}
            >
              Simpleworks · Insights &amp; Perspectives
            </p>
            <h1
              className="mt-[18px] text-[36px] font-bold leading-[1.1] tracking-tight-2 md:text-[52px]"
              style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.2s both" }}
            >
              Thinking clearly
              <br />
              about <span className="text-red">business.</span>
            </h1>
            <p
              className="mt-2.5 text-[13px] tracking-wide-3 text-light"
            >
              Prem Menon · Business Consultant in Bengaluru · MSME Consultant · OKR
              Consultant · Family Business Advisory
            </p>
            <p
              className="mt-5 max-w-[440px] text-[17px] italic leading-[1.65] text-mid"
              style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.3s both" }}
            >
              Practical perspectives on strategy, growth, and execution — written by
              Prem Menon, an independent management consultant in India, for Indian
              MSME and family business founders.
            </p>
            <p
              className="mt-4 max-w-[480px] text-[15px] leading-[1.65] text-mid flex items-center gap-2"
              style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.4s both" }}
            >
              You can also read my blogs on my{" "}
              <a
                href="https://www.premraj.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#FF6719] hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#FF6719"
                  className="w-4 h-4 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
                Substack page
              </a>
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 md:gap-2.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              const href = cat.value === "all" ? "/blog" : `/blog?category=${cat.value}`;
              return (
                <Link
                  key={cat.value}
                  href={href}
                  className={`rounded-[1px] border px-4 py-2 text-[11px] md:px-5 md:text-[12px] tracking-wide-4 uppercase transition-colors ${
                    isActive
                      ? "border-red bg-red text-white"
                      : "border-rule text-mid hover:border-red hover:text-red"
                  }`}
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* BLOG GRID */}
      <section className="reveal px-6 py-14 md:px-[60px] md:py-20 md:pl-[132px]">
        {posts.length === 0 ? (
          <div className="mx-auto max-w-[640px] px-6 py-20 text-center">
            <p className="text-eyebrow uppercase tracking-wide-9 text-light">
              Coming Soon
            </p>
            <h2 className="mt-5 text-sec-h2 font-bold leading-[1.18] tracking-tight-1">
              First posts on the way.
            </h2>
            <p className="mt-5 text-[17px] leading-[1.78] text-mid">
              {activeCategory === "all"
                ? "Practical insights on strategy, growth, and execution will appear here as Prem publishes them."
                : `No posts published under "${activeCategory}" yet — try a different category.`}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-10 md:gap-y-14 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col border-t-[3px] border-t-transparent pt-6 transition-colors hover:border-t-red"
              >
                <span className="mb-3.5 inline-block w-fit bg-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide-4 text-white">
                  {post.category}
                </span>
                <Link href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-[22px] font-bold leading-[1.3] tracking-tight-1 transition-colors group-hover:text-red">
                    {post.title}
                  </h2>
                </Link>
                <p className="mt-3.5 line-clamp-3 flex-1 text-[15px] leading-[1.7] text-mid">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-rule pt-4">
                  <span className="text-[12px] tracking-wide-3 text-light">
                    {formatDate(post.date)}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[13px] font-semibold tracking-wide-2 text-red"
                  >
                    Read{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* SUBSCRIBE STRIP */}
      <div className="reveal flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between gap-6 md:gap-10 border-t border-rule bg-warm px-6 py-10 md:px-[60px] md:py-14 md:pl-[132px]">
        <div className="max-w-[520px]">
          <p className="text-eyebrow uppercase tracking-wide-9 text-light">
            Simpleworks · Business Consultant Bengaluru · Substack
          </p>
          <p className="mt-5 text-[22px] md:text-[28px] font-bold leading-[1.2] tracking-tight-1">
            Get new posts delivered
            <br />
            directly to your inbox.{" "}
            <em className="font-bold italic text-red">No noise.</em>
          </p>
        </div>
        <form
          action="https://premraj.substack.com/subscribe"
          method="get"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row md:flex-1 sm:min-w-[300px] items-stretch gap-2 sm:gap-0"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your email address"
            className="flex-1 rounded-[1px] sm:rounded-l-[1px] sm:rounded-r-none border-[0.5px] border-rule bg-white px-4 py-3 font-serif text-[15px] outline-none transition-colors focus:border-ink"
          />
          <button
            type="submit"
            className="rounded-[1px] sm:rounded-l-none sm:rounded-r-[1px] border-[1.5px] sm:border-l-0 border-red bg-red px-6 py-3 font-serif text-[14px] tracking-wide-3 text-white transition-colors hover:bg-ink hover:border-ink"
          >
            Subscribe →
          </button>
        </form>
      </div>

      <Reveal />
    </>
  );
}
