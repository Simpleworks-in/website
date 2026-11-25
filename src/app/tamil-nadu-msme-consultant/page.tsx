import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import type { RedHeading } from "@/content/home";
import { faqPageSchema, getFaqs, tnFaqIds } from "@/lib/faqs";
import { whatsappHref } from "@/lib/whatsapp";

// /tamil-nadu-msme-consultant, rebuilt 25 Nov 2026 from the "Tamil Nadu page
// redesign" Claude Design canvas. Written for a Tamil Nadu owner comparing a
// local consultant with one in Bangalore. Premraj's decisions: no fees in the
// "how it works" section; no "Why Tamil Nadu" block; hero image unchanged;
// competitors never named.

const TITLE = "Business Consultant in Chennai & Tamil Nadu | Simpleworks Consulting";
const DESCRIPTION =
  "Business consultant for owner-run MSMEs in Chennai, Hosur, Coimbatore, Tiruppur and Salem: strategy, sales and distribution, and execution. Based in Bangalore.";
const URL = "https://www.simpleworks.in/tamil-nadu-msme-consultant";
const HERO_IMAGE = "/images/landing/tamil-nadu-hero.png";

export const metadata: Metadata = {
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
    images: [{ url: `https://www.simpleworks.in${HERO_IMAGE}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`https://www.simpleworks.in${HERO_IMAGE}`],
  },
};

const CTA_LABEL = "WhatsApp Premraj";
const WHATSAPP_TEXT =
  "Hi Premraj, I run a business in Tamil Nadu and would like to talk about it.";
const PHONE = { href: "tel:+919036099000", label: "+91 90360 99000" };

const HOSUR_POST =
  "when-one-oem-is-60-of-your-revenue-customer-concentration-risk-in-hosur-s-auto-component-belt";

// ── Copy ──

const HERO = {
  eyebrow: "Business consultant · Tamil Nadu",
  h1: { text: "Business consultant for MSMEs", red: "in Tamil Nadu" },
  sub: "Tamil Nadu’s MSMEs are built by their owners. The next stage needs a system.",
  lead: "Premraj Menon works one to one with owner-run manufacturers, exporters and traders in Hosur, Chennai, Coimbatore, Tiruppur and Salem, from Bangalore. He has run sales, distribution and operations himself. He understands Tamil, and you work with him directly.",
  prompt: "Tell him what you make, where you sell and what is stuck.",
};

const SITUATIONS = {
  eyebrow: "What owners tell us",
  heading: { text: "Which of these sounds like", red: "your business?" },
  columns: { problem: "Your problem", help: "How Simpleworks can help" },
  items: [
    {
      where: "Hosur · Chennai · auto components",
      problem: "“Two or three OEM customers take most of what we make.”",
      help: "Map the buyers you are not selling to, open a second channel such as the aftermarket, and cut the risk of one customer’s price talk.",
      link: { href: `/blog/${HOSUR_POST}`, label: "Read: When one OEM is 60% of your revenue" },
    },
    {
      where: "Tiruppur · garment exports",
      problem: "“Buyers push the price down every season.”",
      help: "Find out which buyers and styles actually make money, and decide where to grow and where to say no.",
    },
    {
      where: "Coimbatore · pumps, motors, machinery",
      problem: "“Our dealer network stopped growing years ago.”",
      help: "Review dealers one by one, set clear targets and terms, and add the territories you have left open.",
    },
    {
      where: "Salem · family-run firms",
      problem: "“The next generation has joined. Nobody is sure who decides what.”",
      help: "Write down who owns which decisions, and set a monthly review the family runs together.",
    },
    {
      where: "Any town",
      problem: "“Everything still runs through me.”",
      help: "Give managers clear owners and targets, and a weekly review that works without you in every meeting.",
    },
  ],
  cta: {
    label: "Sound familiar? Tell Premraj which one",
    dataCta: "tn-situations",
    text: "Hi Premraj, I run a business in Tamil Nadu. One of the problems on your page sounds like mine.",
  },
};

const QUESTIONS5 = {
  eyebrow: "Before you choose",
  heading: { text: "Choosing a consultant?", red: "Ask these five questions." },
  lead: "Ask them of anyone you are considering, local or from outside the state. Here are our answers.",
  items: [
    {
      q: "Has the consultant run a business, or only advised one?",
      a: "Premraj ran sales, distribution and operations in telecom, ending as Chief Operating Officer of the Kerala circle at Tata Docomo, and has spent nearly 10 years inside MSMEs.",
    },
    {
      q: "Have they worked with businesses like mine?",
      a: "Around 3,000 MSME partners over his career, plus business-side roles at Usha International, Apollo Tyres and MRF.",
    },
    {
      q: "Who will actually do the work?",
      a: "Premraj himself, in every session. He takes on a few owners at a time.",
    },
    {
      q: "What will it cost, and is that written down?",
      a: "Fixed fees, published on the programmes page, and agreed in writing before any work starts.",
      link: { href: "/programmes", label: "See the programmes" },
    },
    {
      q: "What will be different in 90 days?",
      a: "You agree two or three outcomes at the start and check them every month. If they are not moving, you hear it from Premraj first.",
    },
  ],
};

const HOW = {
  eyebrow: "How it works",
  heading: { text: "How we work with you", red: "from Bangalore" },
  lead: "Most of the work is online. Premraj visits when the work needs it: to see the floor, meet the team and understand how the business runs.",
  places: [
    {
      where: "Hosur · Krishnagiri",
      mode: "In person",
      text: "About an hour from Bangalore, so meetings can be at your unit.",
    },
    {
      where: "Chennai · Coimbatore · Tiruppur · Salem",
      mode: "Online, with visits when needed",
      text: "Video calls and WhatsApp week to week, with visits planned into the programme. Travel is charged at actuals.",
    },
  ],
  steps: [
    "It starts with a WhatsApp or a call: what you make, where you sell and what is stuck.",
    "Premraj then suggests the programme that fits, and the fee is agreed in writing before any work starts.",
    "Visits are planned into the programme where the work needs them.",
  ],
  link: { href: "/programmes", label: "All programmes are on the programmes page" },
};

// Same case and wording as on the homepage and /client-success-stories.
const PROOF = {
  eyebrow: "Client story",
  heading: { text: "Flat for two years,", red: "two clients carrying the business." },
  meta: "Automobile components manufacturer · Bangalore · Simple Diagnostic · Client details are confidential",
  rows: [
    {
      label: "The problem",
      text: "A founder-run business with revenue flat for two years. Two anchor customers took most of the output, so every price talk and every late payment hit hard.",
    },
    {
      label: "What we did",
      text: "Rebuilt the go-to-market plan and mapped a far wider list of potential buyers. Opened the aftermarket through Bangalore distributors on cash-and-carry, to ease cash flow. Registered on Udyam, so B2B buyers come under the MSMED Act’s 45-day payment rule.",
    },
  ],
  changed: "New B2B customers are signing on beyond the two anchors, and the first aftermarket distributor is on board.",
  link: { href: "/client-success-stories", label: "Read more client stories" },
};

const WHY = {
  eyebrow: "Why Premraj",
  heading: { text: "A consultant who has worked", red: "inside MSMEs." },
  experience: [
    "Nearly 10 years inside MSMEs, with around 3,000 MSME partners.",
    "Co-founded Viworks Ventures, working with startups on their sales and go-to-market.",
    "Worked on the business side at Usha International, Apollo Tyres and MRF.",
    "In telecom at BPL Mobile, Airtel and Tata Docomo: sales and distribution, business operations and customer service, ending as Chief Operating Officer of the Kerala circle at Tata Docomo.",
    "Understands Tamil and speaks a little.",
  ],
  education: [
    "Executive General Management Programme (EGMP), IIM Bangalore.",
    "Advanced Global Management Programme for Tata Group senior leadership, Ross School of Business, University of Michigan.",
    "Programme for middle management, XLRI Jamshedpur, 1993, conducted for Apollo Tyres.",
  ],
  cta: {
    label: "Talk to Premraj directly",
    dataCta: "tn-why",
    text: "Hi Premraj, I read about your background and would like to talk about my business in Tamil Nadu.",
  },
};

const FAQ_HEADING = { text: "Questions owners in", red: "Tamil Nadu ask" };

const CLOSING = {
  heading: { text: "Tell Premraj what is stuck.", red: "He replies himself." },
  text: "A short WhatsApp is enough: what you make, where you sell and what has stopped moving.",
  trust: "Based in Bangalore · Working with owners across Tamil Nadu",
};

// Hand-picked, kept from the previous page. Titles come from the CMS.
const RELATED_POSTS = [
  HOSUR_POST,
  "how-to-make-your-business-run-without-the-owner",
  "founder-dependency-fix-the-decisions-before-the-org-chart",
  "business-not-growing-a-business-growth-consultant-s-audit",
  "zero-to-one-for-msm-es-your-second-market-is-a-new-startup",
  "how-to-build-a-90-day-gtm-plan-a-complete-framework-for-small-business-owners-with-limited-marketing-budgets",
];

const FAQS = getFaqs(tnFaqIds);

const schemaMarkup = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.simpleworks.in" },
      { "@type": "ListItem", position: 2, name: "Tamil Nadu", item: URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business consulting for MSMEs in Tamil Nadu",
    description: DESCRIPTION,
    url: URL,
    provider: { "@id": "https://www.simpleworks.in/#organization" },
    areaServed: [
      "Tamil Nadu",
      "Chennai",
      "Hosur",
      "Krishnagiri",
      "Coimbatore",
      "Tiruppur",
      "Salem",
    ],
  },
  faqPageSchema(FAQS),
];

// ── Shared styles (same scale as the /services pages) ──
const SECTION =
  "reveal py-14 md:py-[72px] px-6 md:pr-[60px] md:pl-[132px] border-t-[0.5px] border-rule";
const LABEL = "text-[11px] md:text-[13px] uppercase tracking-widest text-light leading-[1.6]";
const EYEBROW = `${LABEL} mb-4 md:mb-5`;
const H2 = "text-[28px] md:text-[36px] leading-[1.18] font-bold tracking-tight-1";
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

function SectionHeader({
  eyebrow,
  heading,
  lead,
}: {
  eyebrow: string;
  heading: RedHeading;
  lead?: string;
}) {
  return (
    <div className={HEADER}>
      <p className={EYEBROW}>{eyebrow}</p>
      <Heading heading={heading} />
      {lead && <p className={`${BODY} max-w-[680px] mt-4 md:mt-5`}>{lead}</p>}
    </div>
  );
}

function WhatsAppButton({
  dataCta,
  label = CTA_LABEL,
  text = WHATSAPP_TEXT,
  className = "",
}: {
  dataCta: string;
  label?: string;
  text?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappHref(text)}
      data-cta={dataCta}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BUTTON} ${className}`}
    >
      <WhatsAppIcon size={18} />
      {label}
    </a>
  );
}

function PhoneLine({ dataCta, after }: { dataCta: string; after?: string }) {
  return (
    <p className="mt-4 text-[14px] leading-[1.6] text-light">
      Or call{" "}
      <a href={PHONE.href} data-cta={dataCta} className="transition-colors hover:text-red">
        {PHONE.label}
      </a>
      {after && <> · {after}</>}
    </p>
  );
}

function RedBullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className={`flex items-baseline gap-3.5 ${BODY}`}>
          <span aria-hidden="true" className="h-2 w-2 flex-shrink-0 -translate-y-0.5 rounded-full bg-red" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export default async function TamilNaduMsmeConsultantPage() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const relatedPosts = (
    await Promise.all(
      RELATED_POSTS.map(async (slug) => {
        const entry = await reader.collections.posts.read(slug);
        return entry ? { slug, title: entry.title } : null;
      }),
    )
  ).filter((p): p is NonNullable<typeof p> => p !== null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* ── 1. HERO ── text left, existing watercolour right. */}
      <section className="px-6 py-14 md:py-20 md:pr-[60px] md:pl-[132px]">
        <div className="flex flex-col min-[900px]:flex-row min-[900px]:items-center gap-x-14 gap-y-10">
          <div className="min-[900px]:flex-[1_1_520px] min-w-0">
            <p className={EYEBROW}>{HERO.eyebrow}</p>
            <h1 className="mb-5 max-w-[640px] text-[36px] leading-[1.1] font-bold tracking-tight-1 text-ink md:text-hero-h1">
              {HERO.h1.text} <span className="text-red">{HERO.h1.red}</span>
            </h1>
            <p className="mb-6 max-w-[580px] text-[16px] md:text-[18px] italic leading-[1.65] text-mid">
              {HERO.sub}
            </p>
            <p className={`${BODY} max-w-[600px]`}>{HERO.lead}</p>
            <WhatsAppButton dataCta="tn-hero" className="mt-8 md:mt-10" />
            <p className="mt-4 text-[14px] leading-[1.6] text-light">{HERO.prompt}</p>
            <p className="text-[14px] leading-[1.6] text-light">
              Or call{" "}
              <a href={PHONE.href} data-cta="tn-hero-phone" className="transition-colors hover:text-red">
                {PHONE.label}
              </a>
              .
            </p>
          </div>
          <figure className="min-[900px]:flex-[1_1_380px] min-w-0 w-full max-w-[480px]">
            <div className="relative h-[340px] md:h-[440px] w-full overflow-hidden rounded-sm">
              <Image
                src={HERO_IMAGE}
                alt="Watercolour portrait of Premraj Menon, founder of Simpleworks Consulting"
                fill
                sizes="(min-width: 900px) 480px, 100vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </figure>
        </div>
      </section>

      {/* ── 2. SITUATIONS ── one row per cluster. */}
      <section className={SECTION}>
        <SectionHeader eyebrow={SITUATIONS.eyebrow} heading={SITUATIONS.heading} />
        <div className="max-w-[980px] border-b-[0.5px] border-rule">
          <div className="hidden md:grid grid-cols-2 gap-8 border-t-[0.5px] border-rule py-3.5">
            <p className={LABEL}>{SITUATIONS.columns.problem}</p>
            <p className={LABEL}>{SITUATIONS.columns.help}</p>
          </div>
          {SITUATIONS.items.map((s) => (
            <div
              key={s.where}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 border-t-[0.5px] border-rule py-6"
            >
              <div>
                <p className="mb-1.5 text-[13px] text-red">{s.where}</p>
                <p className="text-[18px] md:text-[19px] font-bold leading-[1.5] text-ink">{s.problem}</p>
              </div>
              <div>
                <p className={BODY}>{s.help}</p>
                {s.link && (
                  <Link href={s.link.href} className={`${TEXT_LINK} mt-2.5 inline-block text-[15px]`}>
                    {s.link.label} &rarr;
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        <WhatsAppButton
          dataCta={SITUATIONS.cta.dataCta}
          label={SITUATIONS.cta.label}
          text={SITUATIONS.cta.text}
          className="mt-10"
        />
      </section>

      {/* ── 3. FIVE QUESTIONS ── answered from confirmed facts only. */}
      <section className={SECTION}>
        <SectionHeader eyebrow={QUESTIONS5.eyebrow} heading={QUESTIONS5.heading} lead={QUESTIONS5.lead} />
        <ol className="max-w-[1040px] border-b-[0.5px] border-rule">
          {QUESTIONS5.items.map((item, i) => (
            <li
              key={item.q}
              className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-x-8 gap-y-2 border-t-[0.5px] border-rule py-5"
            >
              <h3 className="text-[17px] md:text-[18px] font-bold leading-[1.5] text-ink">
                <span className="text-red">{i + 1}.</span> {item.q}
              </h3>
              <p className={BODY}>
                {item.a}
                {item.link && (
                  <>
                    {" "}
                    <Link href={item.link.href} className={TEXT_LINK}>
                      {item.link.label} &rarr;
                    </Link>
                  </>
                )}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── 4. HOW WE WORK FROM BANGALORE ── no fees here (Premraj, 25 Nov). */}
      <section className={SECTION}>
        <SectionHeader eyebrow={HOW.eyebrow} heading={HOW.heading} lead={HOW.lead} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1040px]">
          {HOW.places.map((p) => (
            <div key={p.where} className="flex flex-col gap-2.5 border border-rule p-7">
              <p className={LABEL}>{p.where}</p>
              <h3 className="text-[20px] font-bold text-ink">{p.mode}</h3>
              <p className="text-[16px] leading-[1.7] text-mid">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 max-w-[760px]">
          <RedBullets items={HOW.steps} />
        </div>
        <Link href={HOW.link.href} className={`${TEXT_LINK} inline-block mt-6 text-[15px]`}>
          {HOW.link.label} &rarr;
        </Link>
      </section>

      {/* ── 5. CLIENT STORY ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={PROOF.eyebrow} heading={PROOF.heading} />
        <p className={`${LABEL} -mt-4 mb-6`}>{PROOF.meta}</p>
        <dl className="max-w-[860px] border-b-[0.5px] border-rule">
          {PROOF.rows.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-1 md:grid-cols-[180px_minmax(0,1fr)] gap-x-6 gap-y-1 border-t-[0.5px] border-rule py-4"
            >
              <dt className="text-[14px] font-bold text-ink">{r.label}</dt>
              <dd className={BODY}>{r.text}</dd>
            </div>
          ))}
          <div className="grid grid-cols-1 md:grid-cols-[180px_minmax(0,1fr)] gap-x-6 gap-y-1 border-t-[0.5px] border-rule py-4">
            <dt className="text-[14px] font-bold text-red">What’s changed so far</dt>
            <dd className="text-[16px] md:text-[17px] leading-[1.78] font-bold text-red">{PROOF.changed}</dd>
          </div>
        </dl>
        <Link href={PROOF.link.href} className={`${TEXT_LINK} inline-block mt-6`}>
          {PROOF.link.label} &rarr;
        </Link>
      </section>

      {/* ── 6. WHY PREMRAJ ── */}
      <section className={SECTION}>
        <div className="flex flex-col md:flex-row md:items-start gap-x-14 gap-y-10 max-w-[1100px]">
          <div className="md:flex-[0_0_280px]">
            <Image
              src="/prem-menon.png"
              alt="Watercolour portrait of Premraj Menon, founder of Simpleworks Consulting"
              width={520}
              height={520}
              sizes="(min-width: 768px) 280px, 60vw"
              className="mix-blend-multiply w-[220px] md:w-full h-auto"
            />
            <WhatsAppButton
              dataCta={WHY.cta.dataCta}
              label={WHY.cta.label}
              text={WHY.cta.text}
              className="mt-6"
            />
          </div>
          <div className="min-w-0 flex-1">
            <SectionHeader eyebrow={WHY.eyebrow} heading={WHY.heading} />
            <RedBullets items={WHY.experience} />
            <p className="mt-8 mb-3 text-[13px] uppercase tracking-widest text-red">Education</p>
            <RedBullets items={WHY.education} />
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ── same text and order as the FAQPage JSON-LD. */}
      <section className={SECTION}>
        <SectionHeader eyebrow="Questions" heading={FAQ_HEADING} />
        <div className="max-w-[900px] border-b-[0.5px] border-rule">
          {FAQS.map((item, i) => (
            <details key={item.id} open={i === 0} className="faq-item border-t-[0.5px] border-rule">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-[22px] [&::-webkit-details-marker]:hidden">
                <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.4] text-ink">{item.q}</h3>
                <span aria-hidden="true" className="faq-pm flex-shrink-0 text-[26px] leading-none text-red transition-transform duration-200">
                  +
                </span>
              </summary>
              <div
                className={`${BODY} pb-[26px] max-w-[760px] [&_p]:mb-3 [&_p:last-child]:mb-0 [&_a]:text-red [&_a:hover]:underline`}
                dangerouslySetInnerHTML={{ __html: item.aHtml ?? `<p>${escapeHtml(item.a)}</p>` }}
              />
            </details>
          ))}
        </div>
      </section>

      {/* ── 8. CLOSING ── */}
      <section className={SECTION}>
        <div className="max-w-[760px]">
          <Heading heading={CLOSING.heading} />
          <p className={`${BODY} mt-4 mb-8 max-w-[640px]`}>{CLOSING.text}</p>
          <WhatsAppButton dataCta="tn-closing" />
          <PhoneLine dataCta="tn-closing-phone" after={CLOSING.trust} />
        </div>
      </section>

      {/* ── 9. GOING DEEPER ── */}
      {relatedPosts.length > 0 && (
        <section className="reveal border-t-[0.5px] border-rule px-6 py-10 md:pr-[60px] md:pl-[132px]">
          <p className={`${LABEL} mb-4`}>Going deeper</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-[1000px]">
            {relatedPosts.map((p) => (
              <li key={p.slug} className="flex items-baseline gap-3">
                <span aria-hidden="true" className="h-1.5 w-1.5 flex-shrink-0 -translate-y-0.5 rounded-full bg-red" />
                <Link
                  href={`/blog/${p.slug}`}
                  className="text-[15px] leading-[1.55] text-mid transition-colors hover:text-red"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Reveal />
    </>
  );
}
