import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { FACTS } from "../../../content/facts";
import { STORIES_PAGE_LIVE } from "@/lib/stories-live";
import { getStoriesPageText, getVisibleStories } from "@/lib/client-stories";

const TITLE = "Client Success Stories | MSME Growth Consulting | Simpleworks";
const DESCRIPTION =
  "Real engagements with founder-led MSMEs: the problem, what Simpleworks Consulting did, and the programme used. Bangalore and across India.";
const URL = "https://www.simpleworks.in/client-success-stories";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  // Controlled by STORIES_PAGE_LIVE in src/lib/stories-live.ts
  robots: STORIES_PAGE_LIVE
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Simpleworks Consulting",
    locale: "en_IN",
    type: "website",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TITLE,
  url: URL,
  description: DESCRIPTION,
  provider: {
    "@type": "ProfessionalService",
    name: FACTS.orgName,
    url: "https://www.simpleworks.in",
  },
};

export default async function ClientSuccessStoriesPage() {
  const [text, { stories }] = await Promise.all([
    getStoriesPageText(),
    getVisibleStories(),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* PAGE HEADER */}
      <div className="flex">
        <div className="relative hidden md:flex w-[72px] flex-shrink-0 items-start pt-14 pl-6">
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-red" />
        </div>
        <div className="flex-1 px-6 py-10 md:px-[60px] md:py-14 md:pl-14">
          <div className="max-w-[640px]">
            <p
              className="text-eyebrow uppercase tracking-wide-10 text-light"
              style={{ opacity: 0, animation: "fadeUp 0.6s ease 0.1s both" }}
            >
              {text.eyebrow}
            </p>
            <h1
              className="mt-[18px] text-[36px] font-bold leading-[1.1] tracking-tight-2 md:text-[52px]"
              style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.2s both" }}
            >
              {text.heading} <span className="text-red">{text.headingRed}</span>
            </h1>
            <p
              className="mt-5 max-w-[520px] text-[17px] leading-[1.65] text-mid"
              style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.3s both" }}
            >
              {text.intro}
            </p>
          </div>
        </div>
      </div>

      {/* STORIES */}
      <section
        id="stories"
        className="reveal border-t border-rule px-6 py-14 md:px-[60px] md:py-20 md:pl-[132px]"
      >
        {stories.length === 0 ? (
          <p className="text-[15px] leading-[1.7] text-mid">
            New stories will appear here soon.
          </p>
        ) : (
          <div className="max-w-[860px]">
            {stories.map((story, i) => (
              <article
                key={story.id}
                className={`flex flex-col gap-6 py-10 min-[760px]:flex-row min-[760px]:gap-8 ${
                  i === 0 ? "pt-0" : "border-t border-rule"
                }`}
              >
                {story.image ? (
                  <Image
                    src={story.image}
                    alt={story.imageAlt}
                    width={140}
                    height={140}
                    className="h-[110px] w-[110px] flex-shrink-0 object-cover min-[760px]:h-[140px] min-[760px]:w-[140px]"
                  />
                ) : null}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wide-4 text-red">
                    {story.programme}
                  </p>
                  <h2 className="mt-3 text-[22px] font-bold leading-[1.3] tracking-tight-1">
                    {story.title}
                  </h2>
                  <p className="mt-3.5 text-[15px] leading-[1.7] text-mid">
                    <strong className="font-bold text-ink">The problem:</strong>{" "}
                    {story.problem}
                  </p>
                  <p className="mt-3 text-[15px] leading-[1.7] text-mid">
                    <strong className="font-bold text-ink">What we did:</strong>{" "}
                    {story.solution}
                  </p>
                  {story.meta ? (
                    <p className="mt-4 text-[12px] tracking-wide-3 text-light">
                      {story.meta}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        )}

        <p className="mt-10 max-w-[860px] border-l-2 border-red pl-4 text-[14px] leading-[1.7] text-light">
          {text.closingFootnote}
        </p>
      </section>

      {/* CLOSING CTA */}
      <section
        id="book"
        className="reveal border-t border-rule px-6 py-14 md:px-[60px] md:py-20 md:pl-[132px]"
      >
        <p className="text-eyebrow uppercase tracking-wide-9 text-light">
          {text.ctaEyebrow}
        </p>
        <h2 className="mt-4 text-[32px] font-bold leading-[1.18] tracking-tight-1 md:text-sec-h2">
          {text.ctaHeading} <span className="text-red">{text.ctaHeadingRed}</span>
        </h2>
        <p className="mt-4 max-w-body-text text-[16px] leading-[1.78] text-mid md:text-[17px]">
          {text.ctaBody}
        </p>
        <Link
          href={text.ctaButtonHref}
          data-cta="stories-cta"
          className="mt-8 inline-block w-fit rounded-[1px] border-[1.5px] border-red bg-transparent px-9 py-[14px] font-serif text-sm tracking-wide-3 text-red transition-colors hover:bg-red hover:text-white"
        >
          {text.ctaButtonLabel} &nbsp;→
        </Link>
        <p className="mt-5 text-[14px] leading-[1.7] text-light">
          {text.ctaCaption}{" "}
          <a
            href={`tel:${FACTS.phone.replace(/\s/g, "")}`}
            className="transition-colors hover:text-red"
          >
            {FACTS.phone}
          </a>{" "}
          · <a href={`mailto:${FACTS.email}`} className="transition-colors hover:text-red">{FACTS.email}</a>
        </p>
      </section>

      <Reveal />
    </>
  );
}
