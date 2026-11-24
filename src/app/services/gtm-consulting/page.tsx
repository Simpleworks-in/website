import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import StoryArticle from "@/components/StoryArticle";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  PROGRAMMES,
  type HomeStory,
  type RedHeading,
  type TextLink,
} from "@/content/home";
import { faqPageSchema, getFaqs, gtmFaqIds } from "@/lib/faqs";
import { whatsappHref } from "@/lib/whatsapp";

// /services/gtm-consulting, redesigned 24 Nov 2026 (gtm-consulting-page-audit.md
// plus Premraj's decisions). Same blueprint as /services/msme-consulting.
// "GTM" is never used alone in a heading: it also means Google Tag Manager.

const TITLE = "Go-to-Market Strategy Consultant in India | Simpleworks Consulting";
const DESCRIPTION =
  "Go-to-market strategy consultant in Bangalore for MSMEs and startups across India: the right customers, dealer and distributor channels, fixed-fee programmes.";
const URL = "https://www.simpleworks.in/services/gtm-consulting";
const FOUR_P_POST =
  "/blog/business-strategy-consulting-for-indian-msm-es-how-the-simpleworks-4-p-framework-turns-problems-into-plans";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
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

// ── Copy ──

const HERO = {
  eyebrow: "Go-to-Market Strategy · Bangalore, India",
  h1: { text: "Go-to-Market Strategy Consultant", red: "for MSMEs" },
  subhead:
    "The right customers, and the right way to reach them: sales and distribution through dealers, distributors and your own team.",
  body: "Premraj Menon works with founder-led MSMEs and startups across India on how they sell: which customers to go after, which channels to use, and what to do first. You know your product. What is hard from the inside is seeing why sales have stalled in one market, or how to open the next one.",
  cta: { label: "Start with a WhatsApp message", dataCta: "gtm-hero" },
  image: {
    src: "/images/gtm-hero-owner-sales-team.webp",
    alt: "An MSME owner and his sales team in a meeting room inside their plant, while a consultant at the whiteboard maps sales routes across India and the chain from factory to distributor, dealer and shop",
    width: 1200,
    height: 896,
  },
};

const SITUATIONS = {
  eyebrow: "Does this sound like your business?",
  heading: { text: "Owners usually call us when", red: "sales stop moving." },
  items: [
    {
      quote: "Sales are flat while the market grows.",
      text: "Competitors are adding customers. Your numbers look like last year’s.",
    },
    {
      quote: "We’re strong in one region and missing everywhere else.",
      text: "The home market is covered. The next state never quite works.",
    },
    {
      quote: "Distributors take the stock but don’t push it.",
      text: "Your product sits in their godown while they sell someone else’s.",
    },
    {
      quote: "We’re not in the big retail chains.",
      text: "Modern trade doesn’t carry you, and you don’t know how to get in on terms you can afford.",
    },
    {
      quote: "Our new product isn’t moving.",
      text: "It is a good product, but customers and the trade haven’t picked it up.",
    },
    {
      quote: "We spend on marketing, but sales don’t follow.",
      text: "Campaigns run and enquiries come in. Orders don’t.",
    },
  ],
};

const CAUSES = {
  eyebrow: "What needs to change",
  heading: { text: "Most sales problems are", red: "go-to-market problems." },
  lead: "Before more effort or more spend, three questions need a precise answer. Most businesses have answered at least one of them vaguely.",
  items: [
    {
      title: "Who exactly is the customer?",
      text: "Not “everyone who might buy”. The two or three segments most likely to buy, pay on time and come back.",
    },
    {
      title: "Why would they choose you?",
      text: "One honest reason a buyer should pick you over the next option, in words your sales team can use.",
    },
    {
      title: "How do you reach them?",
      text: "Direct sales, dealers and distributors, retail chains or online: which channel, in what order, with the team you have.",
    },
  ],
};

const COVERS = {
  eyebrow: "What we work on",
  heading: { text: "What go-to-market strategy", red: "covers." },
  rows: [
    {
      title: "The right customers",
      text: "Which segments to go after first, built from who buys, pays and comes back today.",
      youGet: "a short written description of your best customers, and who to stop chasing.",
      link: null,
    },
    {
      title: "Positioning and message",
      text: "Why a buyer should choose you over the alternative, said the way buyers think about it.",
      youGet: "one clear reason to buy, and the message for each channel.",
      link: null,
    },
    {
      title: "Channel sales strategy",
      text: "Direct sales, dealers and distributors, modern trade and online: which to use, and in what order.",
      youGet: "a channel plan that fits your team and your budget.",
      link: null,
    },
    {
      title: "The first market, and the first steps",
      text: "Which market or state to open first, what the team does each week, and how you will know it is working.",
      youGet: "a first-market plan with named owners and a weekly review.",
      link: { label: "Strategy Implementation", href: "/services/execution-consulting" },
    },
  ] satisfies { title: string; text: string; youGet: string; link: TextLink | null }[],
};

const CHANNELS = {
  eyebrow: "Dealers and distributors",
  heading: { text: "Sales and distribution", red: "the way India buys." },
  lead: "Most Indian MSMEs sell through someone else: dealers, distributors, retailers and, more and more, marketplaces. Getting that right decides growth more than any campaign.",
  items: [
    "Finding and appointing distributors in a new state",
    "Getting dealers and distributors to push your product, not just stock it",
    "General trade and modern trade: when to enter the large retail chains, and on what terms",
    "Expanding into new markets and states, one at a time",
    "Pricing and margins along the channel",
    "Online and marketplaces alongside the trade",
  ],
};

const FIT = {
  who: {
    eyebrow: "Who we work with",
    heading: { text: "Founder-led businesses", red: "with something worth selling." },
    text: "Manufacturers, brands, distributors, and SaaS and service businesses across India, MSMEs and startups, whose product works but whose sales don’t yet match it.",
  },
  not: {
    eyebrow: "What we don’t do",
    heading: { text: "We set the direction.", red: "Others run the ads." },
    text: "We work on the go-to-market strategy and the sales and distribution plan. We don’t run digital marketing, ad campaigns or social media, and we don’t sell software. If you need an agency, we will tell you what to brief them on.",
  },
};

const WHY = {
  eyebrow: "Why Premraj",
  heading: { text: "A consultant who has", red: "sold through the channel." },
  points: [
    "39 years in business, across corporate roles, MSMEs and startups.",
    "Nearly 10 years inside MSMEs, with around 3,000 MSME partners.",
    "Co-founded Viworks Ventures, working with startups on their sales and go-to-market.",
    "Part of the Neoffice management team that ran growth and strategy.",
    "ET-SIDBI Best Exporter award, Micro Enterprise category, 2019, won by Neoffice.",
    "Before that, Premraj worked on the business side at Usha International, Apollo Tyres and MRF.",
  ],
  closing: "You work with Premraj himself, not a junior team.",
};

// Go-to-market work runs through these three programmes (Premraj, 24 Nov).
const HOW = {
  eyebrow: "How we work",
  heading: { text: "Start with a Reset.", red: "Stay with Counsel or Advisory." },
  lead: "Go-to-market work usually starts with a Simple Reset: we find what is holding sales back and design the plan, and the 60-day version puts the first steps in place with your team. After that, the Simple Counsel or the Simple Advisory keeps a senior adviser beside you as you open each market. Each has a fixed fee, agreed before we begin.",
  programmes: ["Reset", "Counsel", "Advisory"],
  link: { label: "See all programmes and fees", href: "/programmes" },
};

// Anonymous client: no name, brand or product anywhere, including the image.
const STORY_SECTION = {
  eyebrow: "Client story",
  heading: { text: "What changed for", red: "one founder." },
};
const STORY: HomeStory = {
  caption: "Indian handicraft e-commerce · USA · Simple Diagnostic",
  title: "A family’s handicraft, taken to buyers in the USA.",
  note: "Client details are confidential.",
  image: {
    src: "/images/stories/indian-handicraft-startup-in-usa/image.webp",
    alt: "Watercolour illustration of Indian handicrafts being packed into a shipping box beside a laptop",
    width: 1200,
    height: 896,
  },
  rows: [
    {
      label: "The problem",
      text: "A founder from an Indian handicraft manufacturing family, now living in the USA, wanted to sell the family factory’s products online there, and didn’t know where to start.",
    },
    {
      label: "What we did",
      text: "Built a full picture of the market and a go-to-market plan for the first six months.",
    },
    {
      label: "What’s changed so far",
      text: "The business has rolled out in one target state, using Meta channels, and the response is encouraging.",
      emphasis: true,
    },
  ],
  link: { label: "Read more client stories", href: "/client-success-stories" },
};

const READING = {
  eyebrow: "From the blog",
  heading: { text: "Read more on", red: "go-to-market strategy." },
  posts: [
    {
      title: "The Go-to-Market Strategy Most Indian MSMEs Skip — And Why It’s Costing Them",
      href: "/blog/the-go-to-market-strategy-most-indian-msm-es-skip-and-why-it-s-costing-them",
    },
    {
      title: "GTM Strategy vs Growth Strategy: Why Confusing the Two Stalls Your Revenue",
      href: "/blog/gtm-strategy-vs-growth-strategy-why-confusing-the-two-stalls-your-revenue",
    },
    {
      title:
        "Online Sales Strategy for Manufacturers in India: Why the Marketplace Listing Is Only the Start",
      href: "/blog/online-sales-strategy-for-manufacturers-in-india-why-the-marketplace-listing-is-only-the-start",
    },
    { title: "Who Is Your Customer, Really?", href: "/blog/who-is-your-customer-really" },
  ],
};

const QUESTIONS = {
  eyebrow: "Questions",
  heading: { text: "Questions owners ask", red: "before they call." },
};

const CLOSING = {
  heading: { text: "Start with", red: "an introductory call." },
  text: "Tell us where sales are stuck, or which market you want to open next. If we can help, we will say how. If we can’t, we will say that too.",
  cta: { label: "Message us on WhatsApp", dataCta: "gtm-closing" },
  trust: "Based in Bangalore",
};

// The visible FAQ and the FAQPage JSON-LD come from the same call.
const FAQS = getFaqs(gtmFaqIds);

const schemaMarkup = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.simpleworks.in" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.simpleworks.in/services",
      },
      { "@type": "ListItem", position: 3, name: "Sales & Distribution Strategy", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Go-to-Market Strategy Consulting",
    provider: { "@id": "https://www.simpleworks.in/#organization" },
    areaServed: { "@type": "Country", name: "India" },
    description: DESCRIPTION,
    url: URL,
  },
  faqPageSchema(FAQS),
];

// ── Shared styles (same scale as the /services hub) ──
const SECTION =
  "reveal py-14 md:py-[72px] px-6 md:pr-[60px] md:pl-[132px] border-t-[0.5px] border-rule";
const LABEL = "text-[11px] md:text-[13px] uppercase tracking-widest text-light leading-[1.6]";
const EYEBROW = `${LABEL} mb-4 md:mb-5`;
const H2 = "text-[28px] md:text-[36px] leading-[1.18] font-bold tracking-tight-1";
const H3 = "text-[20px] md:text-[24px] font-bold leading-[1.3] text-ink";
const HEADER = "mb-10";
const BODY = "text-[16px] md:text-[17px] leading-[1.78] text-mid";
const BUTTON =
  "inline-flex items-center font-serif text-sm tracking-wide-3 text-red border-[1.5px] border-red px-9 py-[14px] rounded-[1px] bg-transparent cursor-pointer transition-colors hover:bg-red hover:text-white w-fit";
const TEXT_LINK = "text-red hover:underline w-fit";

function Heading({ heading }: { heading: RedHeading }) {
  return (
    <h2 className={H2}>
      {heading.text} <span className="text-red">{heading.red}</span>
    </h2>
  );
}

function SectionHeader({ eyebrow, heading }: { eyebrow: string; heading: RedHeading }) {
  return (
    <div className={HEADER}>
      <p className={EYEBROW}>{eyebrow}</p>
      <Heading heading={heading} />
    </div>
  );
}

function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const num = (i: number) => String(i + 1).padStart(2, "0");

export default function GtmConsultingPage() {
  const programmes = PROGRAMMES.cards.filter((card) => HOW.programmes.includes(card.name));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* ── 1. HERO ── text left, image right; stacks below 900px. */}
      <section className="px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <div className="flex flex-col min-[900px]:flex-row min-[900px]:items-start gap-x-14 gap-y-10">
          <div className="min-[900px]:flex-[1_1_400px] min-w-0">
            <p className={EYEBROW}>{HERO.eyebrow}</p>
            <h1 className="mb-5 max-w-[640px] text-[36px] leading-[1.1] font-bold tracking-tight-1 text-ink md:text-hero-h1">
              {HERO.h1.text} <span className="text-red">{HERO.h1.red}</span>
            </h1>
            <p className="mb-6 max-w-[560px] text-[16px] md:text-[18px] italic leading-[1.65] text-mid">
              {HERO.subhead}
            </p>
            <p className={`${BODY} max-w-[560px]`}>{HERO.body}</p>
            <a
              href={whatsappHref()}
              data-cta={HERO.cta.dataCta}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BUTTON} mt-8 md:mt-10`}
            >
              <WhatsAppIcon size={20} />
              {HERO.cta.label} &nbsp;→
            </a>
          </div>
          {/* Top margin = eyebrow height, so the image lines up with the H1. */}
          <div className="min-[900px]:flex-[1.4_1_480px] min-w-0 min-[900px]:mt-[41px]">
            <Image
              src={HERO.image.src}
              alt={HERO.image.alt}
              width={HERO.image.width}
              height={HERO.image.height}
              priority
              sizes="(min-width: 900px) 55vw, 100vw"
              className="block w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── 2. DOES THIS SOUND LIKE YOUR BUSINESS? ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={SITUATIONS.eyebrow} heading={SITUATIONS.heading} />
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12">
          {SITUATIONS.items.map((item) => (
            <li key={item.quote} className="border-t-[0.5px] border-rule py-7">
              <h3 className={`${H3} mb-2`}>&ldquo;{item.quote}&rdquo;</h3>
              <p className={BODY}>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── 3. WHAT NEEDS TO CHANGE ── the three go-to-market questions. */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{CAUSES.eyebrow}</p>
          <Heading heading={CAUSES.heading} />
          <p className={`${BODY} max-w-[680px] mt-4 md:mt-5`}>{CAUSES.lead}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
          {CAUSES.items.map((item) => (
            <div key={item.title} className="border-t-2 border-ink pt-6">
              <h3 className={`${H3} mb-3`}>{item.title}</h3>
              <p className={BODY}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. WHAT GO-TO-MARKET STRATEGY COVERS ── second pillar of the 4P framework. */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{COVERS.eyebrow}</p>
          <Heading heading={COVERS.heading} />
          <p className={`${BODY} max-w-[680px] mt-4 md:mt-5`}>
            Go-to-market is the second pillar of the Simpleworks Consulting{" "}
            <Link href={FOUR_P_POST} className="text-red hover:underline">
              4P framework
            </Link>
            : business strategy first, then go-to-market, then execution and OKRs.
          </p>
        </div>
        <ol>
          {COVERS.rows.map((row, i) => (
            <li
              key={row.title}
              className="grid grid-cols-1 gap-y-3 border-t-[0.5px] border-rule py-7 md:py-8 lg:grid-cols-[80px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-12"
            >
              <span className="text-[15px] font-bold leading-[1.6] text-red tracking-wide-2 [font-variant-numeric:tabular-nums]">
                {num(i)}
              </span>
              <h3 className={H3}>{row.title}</h3>
              <div>
                <p className="text-[18px] leading-[1.55] text-ink mb-2">{row.text}</p>
                <p className={`${BODY} ${row.link ? "mb-3" : ""}`}>
                  <strong className="font-bold text-ink">You get:</strong>{" "}
                  <span className="text-red">{row.youGet}</span>
                </p>
                {row.link && (
                  <Link href={row.link.href} className={TEXT_LINK}>
                    {row.link.label} &rarr;
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── 5. DEALERS AND DISTRIBUTORS ── */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{CHANNELS.eyebrow}</p>
          <Heading heading={CHANNELS.heading} />
          <p className={`${BODY} max-w-[680px] mt-4 md:mt-5`}>{CHANNELS.lead}</p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 max-w-[1000px]">
          {CHANNELS.items.map((item) => (
            <li
              key={item}
              className="border-t-[0.5px] border-rule py-4 text-[17px] md:text-[18px] leading-[1.6] text-ink"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ── 6. WHO WE WORK WITH / WHAT WE DON'T DO ── */}
      <section className={SECTION}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {[FIT.who, FIT.not].map((col) => (
            <div key={col.eyebrow}>
              <SectionHeader eyebrow={col.eyebrow} heading={col.heading} />
              <p className={`${BODY} max-w-[520px] -mt-4`}>{col.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. WHY PREMRAJ ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={WHY.eyebrow} heading={WHY.heading} />
        <ul className="max-w-[760px]">
          {WHY.points.map((point) => (
            <li
              key={point}
              className="border-t-[0.5px] border-rule py-4 text-[17px] md:text-[18px] leading-[1.6] text-mid"
            >
              {point}
            </li>
          ))}
        </ul>
        <p className="max-w-[760px] border-t-[0.5px] border-rule pt-6 text-[18px] md:text-[20px] font-bold leading-[1.5] text-ink">
          {WHY.closing}
        </p>
      </section>

      {/* ── 8. HOW WE WORK ── Reset, then Counsel or Advisory. */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{HOW.eyebrow}</p>
          <Heading heading={HOW.heading} />
          <p className={`${BODY} max-w-[680px] mt-4 md:mt-5`}>{HOW.lead}</p>
        </div>
        <ul className="max-w-[860px]">
          {programmes.map((card) => (
            <li
              key={card.name}
              className="border-t-[0.5px] border-rule py-5 text-[17px] md:text-[18px] leading-[1.6] text-mid"
            >
              <strong className="font-bold text-ink">Simple {card.name}</strong>: {card.forWho}
            </li>
          ))}
        </ul>
        <Link
          href={HOW.link.href}
          className={`${TEXT_LINK} inline-block border-t-[0.5px] border-rule pt-6`}
        >
          {HOW.link.label} &rarr;
        </Link>
      </section>

      {/* ── 9. CLIENT STORY ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={STORY_SECTION.eyebrow} heading={STORY_SECTION.heading} />
        <StoryArticle story={STORY} />
      </section>

      {/* ── 10. FROM THE BLOG ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={READING.eyebrow} heading={READING.heading} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-[1000px]">
          {READING.posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group block border-l-2 border-red pl-6 py-2"
            >
              <h3 className="mb-3 text-[18px] font-bold leading-[1.4] text-ink transition-colors group-hover:text-red">
                {post.title}
              </h3>
              <span className="text-[14px] text-red">Read article &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 11. QUESTIONS ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={QUESTIONS.eyebrow} heading={QUESTIONS.heading} />
        <div className="max-w-[900px] border-b-[0.5px] border-rule">
          {FAQS.map((item, i) => (
            <details key={item.id} open={i === 0} className="faq-item border-t-[0.5px] border-rule">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-[22px] [&::-webkit-details-marker]:hidden">
                <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.4] text-ink">
                  {item.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="faq-pm flex-shrink-0 text-[26px] leading-none text-red transition-transform duration-200"
                >
                  +
                </span>
              </summary>
              <div
                className={`${BODY} pb-[26px] max-w-[760px] [&_p]:mb-3 [&_p:last-child]:mb-0 [&_a]:text-red [&_a]:underline hover:[&_a]:no-underline`}
                dangerouslySetInnerHTML={{
                  __html: item.aHtml ?? `<p>${escapeHtml(item.a)}</p>`,
                }}
              />
            </details>
          ))}
        </div>
      </section>

      {/* ── 12. CLOSING CALL TO ACTION ── */}
      <section className={SECTION}>
        <div className="max-w-[760px]">
          <Heading heading={CLOSING.heading} />
          <p className={`${BODY} mt-4 mb-8 max-w-[560px]`}>{CLOSING.text}</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={whatsappHref()}
              data-cta={CLOSING.cta.dataCta}
              target="_blank"
              rel="noopener noreferrer"
              className={BUTTON}
            >
              <WhatsAppIcon size={20} />
              {CLOSING.cta.label} &nbsp;→
            </a>
            <p className="text-[14px] text-light">{CLOSING.trust}</p>
          </div>
        </div>
      </section>

      <Reveal />
    </>
  );
}
