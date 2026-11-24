import Image from "next/image";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { FACTS } from "../../../content/facts";
import { STORIES_PAGE_LIVE } from "@/lib/stories-live";
import { getStoriesPageText, getVisibleStories } from "@/lib/client-stories";
import { whatsappHref } from "@/lib/whatsapp";

// Client Stories (renamed from "Client Success Stories", 24 Nov 2026). The URL
// stays /client-success-stories so Google indexing is not reset. Copy lives in
// content/stories-page.yaml and content/client-stories/*.yaml (Keystatic).

const TITLE = "Client Stories: What Changed for MSME Owners | Simpleworks Consulting";
const DESCRIPTION =
  "Real work with founder-led MSMEs and startups: what was stuck, what Simpleworks Consulting did, and what has changed so far. Bangalore and across India.";
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
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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

// ── Shared styles (same scale as the /services pages) ──
const PAD = "px-6 md:pr-[60px] md:pl-[132px]";
const LABEL = "text-[11px] md:text-[13px] uppercase tracking-widest text-light leading-[1.6]";
const H2 = "text-[28px] md:text-[36px] leading-[1.18] font-bold tracking-tight-1";
const BODY = "text-[16px] md:text-[17px] leading-[1.78] text-mid";
const BUTTON =
  "inline-flex items-center font-serif text-sm tracking-wide-3 text-red border-[1.5px] border-red px-9 py-[14px] rounded-[1px] bg-transparent cursor-pointer transition-colors hover:bg-red hover:text-white w-fit";

export default async function ClientStoriesPage() {
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

      {/* ── HEADER ── */}
      <section className={`${PAD} py-14 md:py-20`}>
        <p className={`${LABEL} mb-4 md:mb-5`}>{text.eyebrow}</p>
        <h1 className="mb-5 max-w-[760px] text-[36px] leading-[1.1] font-bold tracking-tight-1 text-ink md:text-hero-h1">
          {text.heading} <span className="text-red">{text.headingRed}</span>
        </h1>
        <p className={`${BODY} max-w-[600px]`}>{text.intro}</p>
      </section>

      {/* ── STORIES ── one per section, newest first. */}
      {stories.length === 0 ? (
        <section className={`reveal border-t-[0.5px] border-rule ${PAD} py-14`}>
          <p className={BODY}>New stories will appear here soon.</p>
        </section>
      ) : (
        stories.map((story) => {
          const rows = [
            { label: "The problem", text: story.problem },
            story.revenue ? { label: "Revenue", text: story.revenue } : null,
            { label: "What we did", text: story.solution },
            story.outcome
              ? { label: "What’s changed so far", text: story.outcome, emphasis: true }
              : null,
          ].filter((row): row is { label: string; text: string; emphasis?: boolean } => !!row);
          const caption = [story.title, story.location, story.programme]
            .filter(Boolean)
            .join(" · ");

          return (
            <section
              key={story.id}
              className={`reveal border-t-[0.5px] border-rule ${PAD} py-14 md:py-[72px]`}
            >
              <article className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-x-14 gap-y-6 items-start">
                <div className="border-l-2 border-red pl-6">
                  <p className={`${LABEL} mb-4`}>{caption}</p>
                  <h2 className={`${H2} mb-3`}>{story.headline || story.title}</h2>
                  {story.note && <p className="text-[14px] text-light">{story.note}</p>}
                  {story.image && (
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      width={720}
                      height={480}
                      loading="lazy"
                      sizes="360px"
                      className="mix-blend-multiply mt-6 w-full max-w-[360px] h-auto"
                    />
                  )}
                </div>
                <dl>
                  {rows.map((row) => (
                    <div key={row.label} className="border-t-[0.5px] border-rule pt-[22px] pb-[26px]">
                      <dt className="text-[13px] font-bold uppercase tracking-widest text-ink mb-3">
                        {row.label}
                      </dt>
                      <dd
                        className={`text-[16px] md:text-[17px] leading-[1.7] ${
                          row.emphasis ? "text-red font-bold" : "text-mid"
                        }`}
                      >
                        {row.text}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </section>
          );
        })
      )}

      {/* ── FOOTNOTE ── */}
      <section className={`border-t-[0.5px] border-rule ${PAD} py-8`}>
        <p className="max-w-[760px] text-[14px] leading-[1.7] text-light">{text.closingFootnote}</p>
      </section>

      {/* ── CLOSING CALL TO ACTION ── */}
      <section className={`reveal border-t-[0.5px] border-rule ${PAD} py-14 md:py-[72px]`}>
        <p className={`${LABEL} mb-4 md:mb-5`}>{text.ctaEyebrow}</p>
        <h2 className={H2}>
          {text.ctaHeading} <span className="text-red">{text.ctaHeadingRed}</span>
        </h2>
        <p className={`${BODY} mt-4 mb-8 max-w-[560px]`}>{text.ctaBody}</p>
        <a
          href={whatsappHref()}
          data-cta="stories-cta"
          target="_blank"
          rel="noopener noreferrer"
          className={BUTTON}
        >
          <WhatsAppIcon size={20} />
          {text.ctaButtonLabel} &nbsp;→
        </a>
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
