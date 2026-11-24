import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import StoryArticle from "@/components/StoryArticle";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { STORIES, type HomeStory, type RedHeading, type TextLink } from "@/content/home";
import { faqPageSchema, getFaqs, gtmFaqIds } from "@/lib/faqs";
import { price } from "@/lib/programmes";
import { whatsappHref } from "@/lib/whatsapp";

// /services/gtm-consulting. Redesigned 24 Nov 2026, then reordered the same day
// after a structure review: recognise the problem → see we understand Indian
// distribution → proof → trust → fit and price → objections → act. Blog moved
// below the closing call to action. "GTM" is never used alone in a heading:
// it also means Google Tag Manager.

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

// A WhatsApp opening the owner can fill in: what he sells, where, what next.
const GTM_WHATSAPP =
  "Hi Premraj, we make / sell: … We sell today in: … The market we want to open next: …";

// ── Copy ──

const HERO = {
  eyebrow: "Go-to-Market Strategy · Bangalore, India",
  h1: { text: "Go-to-Market Strategy Consultant", red: "for MSMEs" },
  subhead:
    "The right customers, and the right way to reach them: sales and distribution through dealers, distributors and your own team.",
  body: "Premraj Menon works with founder-led MSMEs and startups across India on how they sell: which customers to go after, which channels to use, and what to do first. You know your product. What is hard from the inside is seeing why sales have stalled in one market, or how to open the next one.",
  cta: { label: "Start with a WhatsApp message", dataCta: "gtm-hero" },
  prompt: "Tell us what you sell, where you sell today, and the market you want to open next.",
  image: {
    src: "/images/gtm-hero-owner-sales-team.webp",
    alt: "An MSME owner and his sales team in a meeting room inside their plant, while a consultant at the whiteboard maps sales routes across India and the chain from factory to distributor, dealer and shop",
    width: 1200,
    height: 896,
  },
};

const SITUATIONS = {
  eyebrow: "Does this sound like your business?",
  heading: { text: "Owners usually", red: "call us when sales stop moving." },
  items: [
    { quote: "Sales are flat while the market grows.", text: "Competitors are adding customers. Your numbers look like last year’s." },
    { quote: "We’re strong in one region and missing everywhere else.", text: "The home market is covered. The next state never quite works." },
    { quote: "Distributors take the stock but don’t push it.", text: "Your product sits in their godown while they sell someone else’s." },
    { quote: "We’re not in the big retail chains.", text: "Modern trade doesn’t carry you, and you don’t know how to get in on terms you can afford." },
    { quote: "Our new product isn’t moving.", text: "It is a good product, but customers and the trade haven’t picked it up." },
    { quote: "We spend on marketing, but sales don’t follow.", text: "Campaigns run and enquiries come in. Orders don’t." },
  ],
};

// "What needs to change" and "What go-to-market strategy covers", merged.
const COVERS = {
  eyebrow: "What we work on",
  heading: { text: "What", red: "go-to-market strategy covers." },
  lead: "Most sales problems are go-to-market problems. Three questions decide it:",
  questions: [
    { before: "", red: "Who", after: " exactly is the customer?" },
    { before: "Why would they ", red: "choose", after: " you?" },
    { before: "How do you ", red: "reach", after: " them?" },
  ],
  rows: [
    { title: "The right customers", youGet: "a short written description of your best customers, and who to stop chasing.", link: null },
    { title: "Positioning and message", youGet: "one clear reason to buy, and the message for each channel.", link: null },
    { title: "Channel sales strategy", youGet: "a channel plan that fits your team and your budget.", link: null },
    {
      title: "The first market, and the first steps",
      youGet: "a first-market plan with named owners and a weekly review.",
      link: { label: "Strategy Implementation", href: "/services/execution-consulting" },
    },
  ] satisfies { title: string; youGet: string; link: TextLink | null }[],
};

const CHANNELS = {
  eyebrow: "Dealers and distributors",
  heading: { text: "Sales and distribution", red: "the way India buys." },
  lead: "Most Indian MSMEs sell through someone else: dealers, distributors, retailers and, more and more, marketplaces. Getting that right decides growth more than any campaign.",
  chain: ["Your business", "Distributor", "Dealer and retailer", "Customer"],
  online: "Online and marketplaces: straight to the customer",
  items: [
    { title: "Appoint the right distributors", text: "Finding and appointing distributors in a new state." },
    { title: "Get them to push, not just stock", text: "Getting dealers and distributors to push your product, not just hold it." },
    { title: "General trade and modern trade", text: "When to enter the large retail chains, and on what terms." },
    { title: "New states, one at a time", text: "Expanding into new markets and states in the right order." },
    { title: "Pricing and margins along the channel", text: "What each link earns, and what the customer pays." },
    { title: "Online alongside the trade", text: "Marketplaces and online sales, run alongside your distributors." },
  ],
};

// Proof first: an Indian manufacturer that opened distributors, then the
// handicraft founder. Both anonymous; no names, brands or products.
const PROOF = {
  eyebrow: "Client stories",
  heading: { text: "What changed for", red: "two founders." },
  cta: {
    lead: "Selling through distributors, or about to? Tell Premraj how you sell today.",
    label: "Tell Premraj how you sell today",
    dataCta: "gtm-proof",
  },
};
const HANDICRAFT: HomeStory = {
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
    { label: "What we did", text: "Built a full picture of the market and a go-to-market plan for the first six months." },
    {
      label: "What’s changed so far",
      text: "The business has rolled out in one target state, using Meta channels, and the response is encouraging.",
      emphasis: true,
    },
  ],
  link: { label: "Read more client stories", href: "/client-success-stories" },
};

// Led by the MSME partners and the channel-selling years (review, 24 Nov).
const WHY = {
  eyebrow: "Why Premraj",
  heading: { text: "A consultant who has", red: "sold through the channel." },
  points: [
    "Nearly 10 years inside MSMEs, with around 3,000 MSME partners.",
    "In telecom at BPL Mobile, Airtel and Tata Docomo: sales and distribution, business operations, customer lifecycle management and customer interactions (call centres and relationship centres), ending as Chief Operating Officer of the Kerala circle at Tata Docomo.",
    "Before that, Premraj worked on the business side at Usha International, Apollo Tyres and MRF.",
    "Co-founded Viworks Ventures, working with startups on their sales and go-to-market.",
    "Part of the Neoffice management team that ran growth and strategy.",
    "ET-SIDBI Best Exporter award, Micro Enterprise category, 2019, won by Neoffice.",
    "39 years in business, across corporate roles, MSMEs and startups.",
  ],
  closing: "You work with Premraj himself, not a junior team.",
};

// Who we work with + what we don't do, as one short strip.
const FIT = {
  eyebrow: "Is this for you?",
  yes: {
    label: "Right for",
    text: "Founder-led manufacturers, brands, distributors, and SaaS and service businesses across India, MSMEs and startups, whose product works but whose sales don’t yet match it.",
  },
  no: {
    label: "Not what we do",
    text: "Digital marketing, ad campaigns, social media or software. We set the go-to-market direction; if you need an agency, we will tell you what to brief them on.",
  },
};

const HOW = {
  eyebrow: "Programmes and fees",
  heading: { text: "Start with a Reset.", red: "Stay with Counsel or Advisory." },
  lead: "Each programme has one fixed fee, agreed before we begin.",
  programmes: [
    {
      name: "Simple Reset",
      fee: `From ${price("reset30")}`,
      note: `30 days · ${price("reset60")} for 60 days`,
      first30: "In the first 30 days: the problem area mapped, the gaps costed in rupees and ranked by impact, and a one-page plan saying what to do, who owns it and by when. The 60-day version stays four more weeks to put it in place.",
    },
    {
      name: "Simple Counsel",
      fee: `${price("counsel")} a month`,
      note: "In person, Bangalore · three-month minimum",
      first30: "Each month: two sessions on your agenda, WhatsApp access for decisions that won’t wait, and a quarterly business review.",
    },
    {
      name: "Simple Advisory",
      fee: `${price("advisory")} a month`,
      note: "Online, anywhere in India · three-month minimum",
      first30: "Each month: two 90-minute online sessions on your agenda, with a short written summary after each.",
    },
  ],
  cta: { label: "Ask which programme fits", dataCta: "gtm-programmes" },
  link: { label: "See all programmes and fees", href: "/programmes" },
};

const START = {
  eyebrow: "How to start",
  heading: { text: "Three steps,", red: "starting with a message." },
  steps: [
    { title: "Send a WhatsApp message", text: "What you sell, where you sell today, and the market you want to open next." },
    { title: "A short introductory call", text: "Premraj asks how you sell today and where it is stuck, then tells you honestly whether a Reset would help." },
    { title: "Start with a Simple Reset", text: "Fixed fee, agreed before we begin, with one visit a week." },
  ],
};

const QUESTIONS = {
  eyebrow: "Questions",
  heading: { text: "Questions owners ask", red: "before they call." },
};

const CLOSING = {
  heading: { text: "Start with", red: "an introductory call." },
  text: "On the call, Premraj asks what you sell, where it sells today and where it is stuck. Then he tells you honestly whether a Reset would help, what it would cost, and what changes first. If we can’t help, we will say that too.",
  cta: { label: "Message us on WhatsApp", dataCta: "gtm-closing" },
  trust: "Based in Bangalore",
};

const READING = {
  eyebrow: "Further reading",
  posts: [
    {
      title: "The Go-to-Market Strategy Most Indian MSMEs Skip, and Why It’s Costing Them",
      href: "/blog/the-go-to-market-strategy-most-indian-msm-es-skip-and-why-it-s-costing-them",
    },
    {
      title: "GTM Strategy vs Growth Strategy: Why Confusing the Two Stalls Your Revenue",
      href: "/blog/gtm-strategy-vs-growth-strategy-why-confusing-the-two-stalls-your-revenue",
    },
    {
      title: "Online Sales Strategy for Manufacturers in India: Why the Marketplace Listing Is Only the Start",
      href: "/blog/online-sales-strategy-for-manufacturers-in-india-why-the-marketplace-listing-is-only-the-start",
    },
    { title: "Who Is Your Customer, Really?", href: "/blog/who-is-your-customer-really" },
  ],
};

// The visible FAQ and the FAQPage JSON-LD come from the same call.
const FAQS = getFaqs(gtmFaqIds);

const schemaMarkup = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.simpleworks.in" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.simpleworks.in/services" },
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

function WhatsAppButton({
  label,
  dataCta,
  text,
  className = "",
}: {
  label: string;
  dataCta: string;
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
      <WhatsAppIcon size={20} />
      {label} &nbsp;→
    </a>
  );
}

function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const num = (i: number) => String(i + 1).padStart(2, "0");

export default function GtmConsultingPage() {
  const manufacturer = STORIES.items[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* ── 1. HERO ── */}
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
            <WhatsAppButton
              label={HERO.cta.label}
              dataCta={HERO.cta.dataCta}
              text={GTM_WHATSAPP}
              className="mt-8 md:mt-10"
            />
            <p className="mt-3 max-w-[480px] text-[14px] leading-[1.6] text-light">{HERO.prompt}</p>
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

      {/* ── 2. PAIN: does this sound like your business? ── */}
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

      {/* ── 3. WHAT GO-TO-MARKET STRATEGY COVERS ── merged with "what needs to change". */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{COVERS.eyebrow}</p>
          <Heading heading={COVERS.heading} />
          <p className={`${BODY} max-w-[680px] mt-4 md:mt-5`}>{COVERS.lead}</p>
        </div>
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
          {COVERS.questions.map((q) => (
            <p key={q.red} className={`${H3} border-t-2 border-ink pt-4`}>
              {q.before}
              <span className="text-red">{q.red}</span>
              {q.after}
            </p>
          ))}
        </div>
        <ol className="border-b-[0.5px] border-rule">
          {COVERS.rows.map((row, i) => (
            <li
              key={row.title}
              className="grid grid-cols-1 gap-y-2 border-t-[0.5px] border-rule py-5 lg:grid-cols-[80px_minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-x-12 lg:items-baseline"
            >
              <span className="text-[15px] font-bold text-red tracking-wide-2 [font-variant-numeric:tabular-nums]">
                {num(i)}
              </span>
              <h3 className="text-[19px] md:text-[21px] font-bold leading-[1.3] text-ink">{row.title}</h3>
              <div>
                <p className={BODY}>
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
        <p className="mt-5 text-[14px] md:text-[15px] text-light">
          Go-to-market is the second pillar of the Simpleworks Consulting{" "}
          <Link href={FOUR_P_POST} className="text-red hover:underline">
            4P framework
          </Link>
          .
        </p>
      </section>

      {/* ── 4. DEALERS AND DISTRIBUTORS ── the differentiator, kept high. */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{CHANNELS.eyebrow}</p>
          <Heading heading={CHANNELS.heading} />
          <p className={`${BODY} max-w-[680px] mt-4 md:mt-5`}>{CHANNELS.lead}</p>
        </div>
        <div className="mb-14 max-w-[1000px]">
          <ol className="flex flex-col md:flex-row md:items-stretch gap-2 md:gap-0">
            {CHANNELS.chain.map((step, i) => {
              const last = i === CHANNELS.chain.length - 1;
              return (
                <li key={step} className="flex flex-col md:flex-row md:items-stretch md:flex-1">
                  <div
                    className={`flex flex-1 flex-col justify-center border px-5 py-4 ${
                      last ? "border-red" : "border-ink"
                    }`}
                  >
                    <p className="text-[12px] md:text-[13px] uppercase tracking-widest text-light mb-1">
                      {num(i)}
                    </p>
                    <p className={`text-[17px] md:text-[18px] font-bold leading-[1.3] ${last ? "text-red" : "text-ink"}`}>
                      {step}
                    </p>
                  </div>
                  {!last && (
                    <span
                      aria-hidden="true"
                      className="self-center px-3 py-1 text-[22px] leading-none text-red rotate-90 md:rotate-0"
                    >
                      →
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
          <p className="mt-4 border-t border-dashed border-red pt-3 text-[14px] md:text-[15px] text-mid">
            {CHANNELS.online}
          </p>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12">
          {CHANNELS.items.map((item, i) => (
            <li key={item.title} className="border-t-[0.5px] border-rule py-6">
              <span className="mb-2 block text-[15px] font-bold text-red [font-variant-numeric:tabular-nums]">
                {num(i)}
              </span>
              <h3 className="mb-2 text-[19px] md:text-[21px] font-bold leading-[1.3] text-ink">{item.title}</h3>
              <p className={BODY}>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── 5. PROOF ── client stories, then a WhatsApp call to action. */}
      <section className={SECTION}>
        <SectionHeader eyebrow={PROOF.eyebrow} heading={PROOF.heading} />
        <StoryArticle story={manufacturer} />
        <div className="mt-14 border-t-[0.5px] border-rule pt-14">
          <StoryArticle story={HANDICRAFT} />
        </div>
        <div className="mt-12 flex flex-col gap-y-5 border-t-[0.5px] border-rule pt-8">
          <p className={`${BODY} max-w-[680px]`}>{PROOF.cta.lead}</p>
          <WhatsAppButton label={PROOF.cta.label} dataCta={PROOF.cta.dataCta} text={GTM_WHATSAPP} />
        </div>
      </section>

      {/* ── 6. WHY PREMRAJ ── led by MSME partners and channel selling. */}
      <section className={SECTION}>
        <SectionHeader eyebrow={WHY.eyebrow} heading={WHY.heading} />
        <ul className="max-w-[760px]">
          {WHY.points.map((point) => (
            <li
              key={point}
              className="flex items-baseline gap-[18px] border-t-[0.5px] border-rule py-4 text-[17px] md:text-[18px] leading-[1.6] text-mid"
            >
              <span aria-hidden="true" className="h-2 w-2 flex-shrink-0 -translate-y-1 rounded-full bg-red" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="max-w-[760px] border-t-[0.5px] border-rule pt-6 text-[18px] md:text-[20px] font-bold leading-[1.5] text-ink">
          {WHY.closing}
        </p>
      </section>

      {/* ── 7. FIT STRIP ── who it's for, and what we don't do, in one block. */}
      <section className={SECTION}>
        <p className={EYEBROW}>{FIT.eyebrow}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y-[0.5px] border-rule">
          <div className="py-6 md:pr-10">
            <p className="mb-2 text-[13px] font-bold uppercase tracking-widest text-ink">{FIT.yes.label}</p>
            <p className={BODY}>{FIT.yes.text}</p>
          </div>
          <div className="border-t-[0.5px] border-rule py-6 md:border-t-0 md:border-l-[0.5px] md:pl-10">
            <p className="mb-2 text-[13px] font-bold uppercase tracking-widest text-red">{FIT.no.label}</p>
            <p className={BODY}>{FIT.no.text}</p>
          </div>
        </div>
      </section>

      {/* ── 8. PROGRAMMES ── starting fees and what the first month brings. */}
      <section className={SECTION}>
        <div className={HEADER}>
          <p className={EYEBROW}>{HOW.eyebrow}</p>
          <Heading heading={HOW.heading} />
          <p className={`${BODY} max-w-[680px] mt-4 md:mt-5`}>{HOW.lead}</p>
        </div>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-6">
          {HOW.programmes.map((p) => (
            <li key={p.name} className="border-t-2 border-ink pt-5">
              <h3 className="text-[20px] md:text-[22px] font-bold text-ink">
                Simple <span className="text-red">{p.name.replace("Simple ", "")}</span>
              </h3>
              <p className="mt-2 text-[30px] md:text-[34px] leading-none text-mid [font-variant-numeric:lining-nums_tabular-nums]">
                {p.fee}
              </p>
              <p className="mt-2 text-[14px] text-light">{p.note}</p>
              <p className={`${BODY} mt-4`}>{p.first30}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t-[0.5px] border-rule pt-8">
          <WhatsAppButton label={HOW.cta.label} dataCta={HOW.cta.dataCta} text={GTM_WHATSAPP} />
          <Link href={HOW.link.href} className={TEXT_LINK}>
            {HOW.link.label} &rarr;
          </Link>
        </div>
      </section>

      {/* ── 9. HOW TO START ── */}
      <section className={SECTION}>
        <SectionHeader eyebrow={START.eyebrow} heading={START.heading} />
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
          {START.steps.map((step, i) => (
            <li key={step.title} className="border-t-[0.5px] border-rule pt-5">
              <span className="block text-[15px] font-bold text-red [font-variant-numeric:tabular-nums]">{num(i)}</span>
              <h3 className="mt-2 mb-2 text-[19px] md:text-[21px] font-bold leading-[1.3] text-ink">{step.title}</h3>
              <p className={BODY}>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── 10. QUESTIONS ── cost and out-of-city first. */}
      <section className={SECTION}>
        <SectionHeader eyebrow={QUESTIONS.eyebrow} heading={QUESTIONS.heading} />
        <div className="max-w-[900px] border-b-[0.5px] border-rule">
          {FAQS.map((item, i) => (
            <details key={item.id} open={i === 0} className="faq-item border-t-[0.5px] border-rule">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-[22px] [&::-webkit-details-marker]:hidden">
                <h3 className="text-[18px] md:text-[20px] font-bold leading-[1.4] text-ink">{item.q}</h3>
                <span
                  aria-hidden="true"
                  className="faq-pm flex-shrink-0 text-[26px] leading-none text-red transition-transform duration-200"
                >
                  +
                </span>
              </summary>
              <div
                className={`${BODY} pb-[26px] max-w-[760px] [&_p]:mb-3 [&_p:last-child]:mb-0 [&_a]:text-red [&_a]:underline hover:[&_a]:no-underline`}
                dangerouslySetInnerHTML={{ __html: item.aHtml ?? `<p>${escapeHtml(item.a)}</p>` }}
              />
            </details>
          ))}
        </div>
      </section>

      {/* ── 11. CLOSING ── the call, explained. */}
      <section className={SECTION}>
        <div className="max-w-[760px]">
          <Heading heading={CLOSING.heading} />
          <p className={`${BODY} mt-4 mb-8 max-w-[600px]`}>{CLOSING.text}</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <WhatsAppButton label={CLOSING.cta.label} dataCta={CLOSING.cta.dataCta} text={GTM_WHATSAPP} />
            <p className="text-[14px] text-light">{CLOSING.trust}</p>
          </div>
        </div>
      </section>

      {/* ── 12. FURTHER READING ── a strip after the call to action. */}
      <section className="reveal border-t-[0.5px] border-rule px-6 py-10 md:pr-[60px] md:pl-[132px]">
        <p className={`${LABEL} mb-4`}>{READING.eyebrow}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-[1000px]">
          {READING.posts.map((post) => (
            <li key={post.href} className="flex items-baseline gap-3">
              <span aria-hidden="true" className="h-1.5 w-1.5 flex-shrink-0 -translate-y-0.5 rounded-full bg-red" />
              <Link href={post.href} className="text-[15px] leading-[1.55] text-mid transition-colors hover:text-red">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Reveal />
    </>
  );
}
