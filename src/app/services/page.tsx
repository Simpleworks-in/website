import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import StoryArticle from "@/components/StoryArticle";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { HELP, PROGRAMMES, STORIES, type RedHeading, type TextLink } from "@/content/home";
import { faqPageSchema, getFaqs, hubFaqIds } from "@/lib/faqs";
import { whatsappHref } from "@/lib/whatsapp";

// /services hub, redesigned 24 Nov 2026 (services-hub-redesign-handover.md).
// Owner's problem first, in the homepage's voice: the five rows, the
// programme lines and the client story all read from content/home.ts.

const TITLE = "Business Advisory Services in India | Simpleworks Consulting";
const DESCRIPTION =
  "Business advisory services for founder-led MSMEs across India: strategy, sales and distribution, and execution from a boutique Bangalore consulting firm.";
const URL = "https://www.simpleworks.in/services";

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
  eyebrow: "Consulting Services · Bangalore",
  h1: "Business consulting for MSMEs in Bangalore & India",
  subhead: { text: "Consulting built for businesses that are", red: "ready to move." },
  intro:
    "Simpleworks Consulting is a boutique business consulting firm in Bangalore. Premraj Menon gives founder-led MSMEs senior business advisory, from strategy through to execution.",
  body: "You know your business better than any consultant could. But growth has slowed, or every decision still lands on your desk, and that is hard to fix from the inside. You don’t have to pick a service. Find the problem below that sounds like your week, and see what we would do about it.",
  scope: "We don’t offer tax, compliance or registration services.",
  // Same label as the homepage hero button.
  cta: { label: "Let’s discuss your business", dataCta: "hub-hero" },
  image: {
    src: "/images/hub-hero-owner-chart.webp",
    alt: "Watercolour illustration of a business owner studying a sales chart that has flattened and started to fall, with his factory floor visible through the office window",
    width: 1200,
    height: 896,
  },
};

// The rows' label, problem and promise come from the homepage (HELP.rows).
// The hub points each row at a service page by its service name.
const ROW_LINKS: TextLink[][] = [
  [{ label: "Sales & Distribution Strategy", href: "/services/gtm-consulting" }],
  [{ label: "Founder Effectiveness & Strategic Advisory", href: "/msme-business-coach" }],
  [
    { label: "Strategy Implementation", href: "/services/execution-consulting" },
    {
      label: "Goals and weekly accountability: Objectives and Key Results (OKRs)",
      href: "/services/okr-consulting",
    },
  ],
  [{ label: "MSME Consulting", href: "/services/msme-consulting" }],
  [{ label: "Strategy Implementation", href: "/services/execution-consulting" }],
];

const PROBLEMS = {
  id: "problems",
  eyebrow: "Start with your problem",
  heading: { text: "Which of these is", red: "holding your business back?" },
  cta: { label: "Sound familiar? Tell Premraj which one", dataCta: "hub-recognise" },
};

const AUDIENCES = {
  eyebrow: "Your kind of business",
  heading: { text: "Or start with", red: "the kind of business you run." },
  cards: [
    {
      title: "MSME Consulting",
      text: "Founder-led businesses with ₹10–200 crore in revenue and 20 or more people, in manufacturing, consumer goods, retail and distribution, usually at a turning point.",
      link: { label: "Explore MSME Consulting", href: "/services/msme-consulting" },
    },
    {
      title: "Small Business Growth & Coaching",
      text: "Owners of smaller businesses who want a working thinking partner, not just a coach on the side.",
      link: {
        label: "Explore Small Business Growth & Coaching",
        href: "/services/small-business-consulting",
      },
    },
    {
      title: "Family Business Consulting",
      text: "Second-generation owners and family-run firms working through handover, professional management, and keeping family and business apart.",
      link: {
        label: "Explore Family Business Consulting",
        href: "/services/family-business-consulting",
      },
    },
  ],
  tamilNadu: {
    label:
      "Working in Tamil Nadu? See how we work across Chennai, Hosur, Salem, Tiruppur and Coimbatore",
    href: "/tamil-nadu-msme-consultant",
  },
};

const HOW = {
  eyebrow: "How we work",
  heading: { text: "Start small. Know the fee", red: "before you begin." },
  lead: "Every engagement starts with a quick introductory call. Then you choose a format, with the fee and the end date agreed before work begins.",
};

const STORY = {
  eyebrow: "Client story",
  heading: { text: "What changed for", red: "one manufacturer." },
};

// Every blog link from the old six cards, regrouped. Titles as they were.
const DEEPER = {
  eyebrow: "Go deeper",
  heading: { text: "Read more on", red: "the problems above." },
  groups: [
    {
      label: "Growth has stopped",
      links: [
        { label: "Who Is Your Customer, Really?", href: "/blog/who-is-your-customer-really" },
        {
          label: "GTM vs growth strategy",
          href: "/blog/gtm-strategy-vs-growth-strategy-why-confusing-the-two-stalls-your-revenue",
        },
        {
          label:
            "Online Sales Strategy for Manufacturers in India, Why the Marketplace Listing Is Only the Start",
          href: "/blog/online-sales-strategy-for-manufacturers-in-india-why-the-marketplace-listing-is-only-the-start",
        },
      ],
    },
    {
      label: "Team and execution",
      links: [
        {
          label: "Why Strategy Execution Fails in Indian MSMEs — and What to Do About It",
          href: "/blog/why-strategy-execution-fails-in-indian-msm-es-and-what-to-do-about-it",
        },
        {
          label: "How to Build Accountability in a 50-Person MSME Business",
          href: "/blog/how-to-build-accountability-in-a-50-person-msme-business-without-bureaucracy",
        },
        {
          label: "OKR Consulting for Indian MSMEs: Why Less Is More",
          href: "/blog/okr-consulting-for-indian-msm-es-why-less-is-more",
        },
        {
          label: "OKR for Small Business India: Why You Probably Need KPIs First",
          href: "/blog/okr-for-small-business-india-why-you-probably-need-kp-is-first",
        },
      ],
    },
    {
      label: "Direction",
      links: [
        {
          label: "Why 90% of Indian MSMEs Have No Real Strategy — And the 3-Step Fix",
          href: "/blog/why-90-of-indian-msm-es-have-no-real-strategy-and-the-3-step-fix",
        },
        {
          label: "MSME Consulting: Why a Focused Firm Delivers More Than a Full-Service One",
          href: "/blog/msme-consulting-why-a-focused-firm-delivers-more-than-a-full-service-one",
        },
        {
          label: "Simpleworks Consulting 4P Framework",
          href: "/blog/business-strategy-consulting-for-indian-msm-es-how-the-simpleworks-4-p-framework-turns-problems-into-plans",
        },
      ],
    },
    {
      label: "Small business",
      links: [
        {
          label: "The Difference Between Business Coach and Mentor Isn’t Skill — It’s Stage",
          href: "/blog/the-difference-between-business-coach-and-mentor-isn-t-skill-it-s-stage",
        },
        {
          label: "Why Indian MSMEs Should Hire an Independent Consultant — Not a Big Firm",
          href: "/blog/why-indian-msm-es-should-hire-an-independent-consultant-not-a-big-firm",
        },
        {
          label: "What to Expect in a First Consulting Engagement",
          href: "/blog/what-to-expect-in-a-first-consulting-engagement-it-s-not-what-you-think",
        },
      ],
    },
    {
      label: "Family business",
      links: [
        {
          label:
            "Is Your Family Business Ready for the Next Generation? 5 Hard Questions Every Owner Must Answer",
          href: "/blog/is-your-family-business-ready-for-the-next-generation-5-hard-questions-every-owner-must-answer",
        },
        {
          label: "How to Prepare a Second Generation Leader to Take Over",
          href: "/blog/how-do-you-prepare-a-second-generation-leader-to-take-over-a-family-business-a-practical-succession-plan",
        },
        {
          label: "Why Family MSMEs Must Separate Ownership from Management to Scale",
          href: "/blog/why-family-msm-es-must-separate-ownership-from-management-to-scale",
        },
      ],
    },
  ] satisfies { label: string; links: TextLink[] }[],
  foundational: {
    label: "Foundational reading",
    lead: "Two posts that cut across everything: the thinking behind how Simpleworks Consulting approaches every engagement, whatever the sector or problem.",
    posts: [
      {
        title: "Why Strategy Execution Fails in Indian MSMEs — and What to Do About It",
        href: "/blog/why-strategy-execution-fails-in-indian-msm-es-and-what-to-do-about-it",
      },
      {
        title:
          "Business Strategy Consulting for Indian MSMEs: How the Simpleworks Consulting 4P Framework Turns Problems Into Plans",
        href: "/blog/business-strategy-consulting-for-indian-msm-es-how-the-simpleworks-4-p-framework-turns-problems-into-plans",
      },
    ],
  },
};

const QUESTIONS = {
  eyebrow: "Questions",
  heading: { text: "Before you", red: "get in touch." },
};

const CLOSING = {
  heading: { text: "Not sure which one", red: "fits your situation?" },
  primary: { label: "Tell Premraj what is holding your business back", dataCta: "hub-closing" },
  secondary: { label: "or use the contact form", href: "/contact", dataCta: "hub-contact-form" },
};

// The visible FAQ and the FAQPage JSON-LD come from the same call.
const HUB_FAQS = getFaqs(hubFaqIds);

const schemaMarkup = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.simpleworks.in" },
      { "@type": "ListItem", position: 2, name: "Services", item: URL },
    ],
  },
  faqPageSchema(HUB_FAQS),
];

// ── Shared styles (same scale as the homepage) ──
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
const HELP_GRID = "lg:grid lg:grid-cols-[80px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-12";

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

export default function ServicesPage() {
  const story = STORIES.items[0];

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
            <h1 className="mb-4 max-w-[640px] text-[36px] leading-[1.1] font-bold tracking-tight-1 text-ink md:text-hero-h1">
              {HERO.h1}
            </h1>
            <p className="mb-6 max-w-[640px] text-[24px] leading-[1.25] font-bold text-ink md:text-[28px]">
              {HERO.subhead.text} <span className="text-red">{HERO.subhead.red}</span>
            </p>
            <p className="mb-6 max-w-[560px] text-[16px] md:text-[18px] italic leading-[1.65] text-mid">
              {HERO.intro}
            </p>
            <p className={`${BODY} max-w-[560px] mb-4`}>{HERO.body}</p>
            <p className={`${BODY} max-w-[560px]`}>{HERO.scope}</p>
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

      {/* ── 2. START WITH YOUR PROBLEM ── same rows as the homepage. */}
      <section id={PROBLEMS.id} className={SECTION}>
        <SectionHeader eyebrow={PROBLEMS.eyebrow} heading={PROBLEMS.heading} />
        <div aria-hidden="true" className={`hidden ${HELP_GRID} pb-4 ${LABEL}`}>
          <span />
          <span>{HELP.columns.problem}</span>
          <span>{HELP.columns.help}</span>
        </div>
        <ol>
          {HELP.rows.map((row, i) => (
            <li
              key={row.label}
              className={`${HELP_GRID} grid grid-cols-1 gap-y-3 border-t-[0.5px] border-rule py-7 md:py-8`}
            >
              <span className="text-[15px] font-bold leading-[1.6] text-red tracking-wide-2 [font-variant-numeric:tabular-nums]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className={`${LABEL} mb-2`}>{row.label}</p>
                <h3 className={H3}>&ldquo;{row.problem}&rdquo;</h3>
              </div>
              <div>
                <p className={`lg:hidden ${LABEL} mb-2`}>{HELP.columns.help}</p>
                <p className="text-[18px] leading-[1.55] text-ink mb-3">{row.promise}</p>
                <div className="flex flex-col gap-2">
                  {ROW_LINKS[i].map((link) => (
                    <Link key={link.href + link.label} href={link.href} className={TEXT_LINK}>
                      {link.label} &rarr;
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="flex flex-col gap-y-6 border-t-[0.5px] border-rule pt-8">
          <p className={`${BODY} max-w-[680px]`}>
            <strong className="font-bold text-ink">&ldquo;{HELP.quoteLead}</strong>{" "}
            {HELP.quoteBody}&rdquo;{" "}
            <span className="text-light whitespace-nowrap">&mdash; {HELP.quoteBy}</span>
          </p>
          <a
            href={whatsappHref(HELP.cta.whatsappText)}
            data-cta={PROBLEMS.cta.dataCta}
            target="_blank"
            rel="noopener noreferrer"
            className={`${BUTTON} shrink-0`}
          >
            <WhatsAppIcon size={20} />
            {PROBLEMS.cta.label} &nbsp;→
          </a>
        </div>
      </section>

      {/* ── 3. YOUR KIND OF BUSINESS ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={AUDIENCES.eyebrow} heading={AUDIENCES.heading} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
          {AUDIENCES.cards.map((card) => (
            <div key={card.title} className="border-t-2 border-ink pt-6 flex flex-col">
              <h3 className={`${H3} mb-3`}>{card.title}</h3>
              <p className={`${BODY} mb-5`}>{card.text}</p>
              <Link href={card.link.href} className={`${TEXT_LINK} mt-auto`}>
                {card.link.label} &rarr;
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-10 border-t-[0.5px] border-rule pt-6">
          <Link href={AUDIENCES.tamilNadu.href} className={TEXT_LINK}>
            {AUDIENCES.tamilNadu.label} &rarr;
          </Link>
        </p>
      </section>

      {/* ── 4. HOW WE WORK ── programme lines from the homepage cards. */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{HOW.eyebrow}</p>
          <Heading heading={HOW.heading} />
          <p className={`${BODY} max-w-[620px] mt-4 md:mt-5`}>{HOW.lead}</p>
        </div>
        <ul className="max-w-[860px]">
          {PROGRAMMES.cards.map((card) => (
            <li
              key={card.name}
              className="border-t-[0.5px] border-rule py-5 text-[17px] md:text-[18px] leading-[1.6] text-mid"
            >
              <strong className="font-bold text-ink">Simple {card.name}</strong>: {card.forWho}
            </li>
          ))}
        </ul>
        <Link
          href={PROGRAMMES.compareLink.href}
          className={`${TEXT_LINK} inline-block border-t-[0.5px] border-rule pt-6 mt-0`}
        >
          {PROGRAMMES.compareLink.label} &rarr;
        </Link>
      </section>

      {/* ── 5. ONE CLIENT STORY ── first story from the homepage. */}
      <section className={SECTION}>
        <SectionHeader eyebrow={STORY.eyebrow} heading={STORY.heading} />
        <StoryArticle story={story} />
        <p className="border-t-[0.5px] border-rule mt-12 pt-8 text-[17px] leading-[1.7] text-ink max-w-[760px]">
          &ldquo;{STORIES.trust}&rdquo;{" "}
          <span className="text-light whitespace-nowrap">&mdash; {STORIES.trustBy}</span>
        </p>
      </section>

      {/* ── 6. GO DEEPER ── every blog link from the old cards. */}
      <section className={SECTION}>
        <SectionHeader eyebrow={DEEPER.eyebrow} heading={DEEPER.heading} />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-10">
          {DEEPER.groups.map((group) => (
            <div key={group.label}>
              <p className="text-[11px] md:text-[13px] uppercase tracking-widest text-[#D91B22] leading-[1.6] mb-3">
                {group.label}
              </p>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] leading-[1.55] text-mid transition-colors hover:text-red"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t-[0.5px] border-rule pt-10">
          <p className={EYEBROW}>{DEEPER.foundational.label}</p>
          <p className={`${BODY} max-w-body-text mb-8`}>{DEEPER.foundational.lead}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {DEEPER.foundational.posts.map((post) => (
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
        </div>
      </section>

      {/* ── 7. QUESTIONS ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={QUESTIONS.eyebrow} heading={QUESTIONS.heading} />
        <div className="max-w-[900px] border-b-[0.5px] border-rule">
          {HUB_FAQS.map((item, i) => (
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

      {/* ── 8. CLOSING CALL TO ACTION ── */}
      <section className={SECTION}>
        <div className="max-w-[760px]">
          <div className="mb-8">
            <Heading heading={CLOSING.heading} />
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={whatsappHref()}
              data-cta={CLOSING.primary.dataCta}
              target="_blank"
              rel="noopener noreferrer"
              className={BUTTON}
            >
              <WhatsAppIcon size={20} />
              {CLOSING.primary.label} &nbsp;→
            </a>
            <Link
              href={CLOSING.secondary.href}
              data-cta={CLOSING.secondary.dataCta}
              className={TEXT_LINK}
            >
              {CLOSING.secondary.label} &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Reveal />
    </>
  );
}
