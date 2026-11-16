import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FACTS } from "../../../content/facts";
import { whatsappHref } from "@/lib/whatsapp";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: { absolute: "MSME Business Coach in Bangalore & India | Simpleworks" },
  description:
    "One-to-one MSME business coaching in Bangalore (Bengaluru) with Premraj Menon, 39 years' experience. Published fees from ₹25,000. Book an intro call.",
  keywords:
    "MSME business coach, MSME business coach India, business coach for MSME, MSME mentor India, business mentor for small business India, MSME coaching Bengaluru",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.simpleworks.in/msme-business-coach",
  },
  openGraph: {
    title: "MSME Business Coach in India | Simpleworks, Bengaluru",
    description:
      "One-to-one coaching for MSME founders who want to grow with clarity — not noise.",
    url: "https://www.simpleworks.in/msme-business-coach",
    siteName: "Simpleworks Consulting",
    type: "website",
  },
};

const CONTACT_LINK = whatsappHref();

const STATS = [
  { num: "About 30", label: "years in large companies, rising to COO with full P&L" },
  { num: "Nearly 10", label: "years inside MSMEs, as co-founder and on the management team" },
  { num: "About 3,000", label: "MSME partners worked with and coached" },
  { num: "1-to-1", label: "no junior team, no group batches" },
];

const PAIN_QUOTES = [
  "“We’re busy every day but I don’t see the growth I expected.”",
  "“My team executes, but we keep missing targets somehow.”",
  "“Every decision still comes back to my desk.”",
  "“We’ve tried consultants before. Got a report. Nothing changed on the ground.”",
  "“I’ve attended MSME coaching sessions. Good ideas in the room, but the real work back in my business is different.”",
  "“We have no real GTM plan — we just chase every lead that comes.”",
];

// The fifth grid cell (where the startup card used to be) is a pointer to
// /startup-mentor-bengaluru, not a fit card.
type FitCell =
  | { kind: "card"; title: string; body: string }
  | { kind: "startup" };

const WHO_ITS_FOR: FitCell[] = [
  {
    kind: "card",
    title: "Manufacturing & industrial MSMEs",
    body: "You run a factory, a component supplier, or a process business — and you’re trying to grow revenue without adding complexity you can’t manage. As a business coach for manufacturing businesses, Premraj works on the commercial side: customers, channels and the cash cycle. Not plant capacity or quality systems.",
  },
  {
    kind: "card",
    title: "Consumer goods & distribution businesses",
    body: "You have a product in the market but the channel strategy isn’t working — you’re over-reliant on one customer, one geography, or one distributor. Building revenue through channels is Premraj's home ground.",
  },
  {
    kind: "card",
    title: "Family business successors",
    body: "You’ve taken over from a founder-parent and are navigating the balance between respecting what’s been built and leading where it needs to go. Many family businesses in India asked Premraj to help bring the next generation in and get the family clear on direction.",
  },
  {
    kind: "card",
    title: "First-generation entrepreneurs",
    body: "You’ve crossed ₹10 crore in revenue but growth has plateaued — and you’re not sure whether the problem is strategy, sales, or execution.",
  },
  { kind: "startup" },
  {
    kind: "card",
    title: "Founders preparing for a growth leap",
    body: "You have a clear ambition — a new market, a new product line, a new city — and need structured thinking before you commit resources.",
  },
];

const STORY_BLOCKS = [
  {
    label: "The problem",
    text: "A founder-run business with revenue flat for two years. Two anchor customers took most of the output, so every price talk and every late payment hit hard.",
    strong: false,
  },
  {
    label: "What we did",
    text: "Rebuilt the go-to-market plan and mapped a far wider list of potential buyers. Opened the aftermarket through Bangalore distributors on cash-and-carry, to ease cash flow. Registered on Udyam, so B2B buyers come under the MSMED Act's 45-day payment rule.",
    strong: false,
  },
  {
    label: "What’s changed so far",
    text: "New B2B customers are signing on beyond the two anchors, and the first aftermarket distributor is on board.",
    strong: true,
  },
];

const CSUITE_VIEW = [
  { name: "Tata Docomo", line: "COO, Kerala circle, with full P&L responsibility" },
  { name: "Bharti Airtel · BPL Mobile", line: "Telecom leadership: sales, distribution and operations" },
  { name: "MRF · Apollo Tyres", line: "Dealer networks and government sales" },
  { name: "Usha International", line: "Started as a sales trainee in 1987" },
];

const OWNER_VIEW = [
  { name: "Viworks Ventures", line: "Co-founder: sales strategy and operations for businesses" },
  {
    name: "Neoffice, from September 2019",
    line: "Management team, running growth and strategy. Neoffice won the ET-SIDBI Best Exporter award, Micro Enterprise category, in 2019",
  },
  {
    name: "Around 3,000 MSME partners",
    line: "Worked with and coached on business performance across the corporate years",
  },
];

const NEXT_STEPS = [
  "You send a short WhatsApp message.",
  "Premraj replies himself.",
  "You talk it through. No pitch, no commitment.",
];

const STEPS = [
  { label: "01 · Diagnostic", title: "Discover", subline: "Understand your business from the inside" },
  { label: "02 · Diagnostic", title: "Diagnose", subline: "Find the real constraint" },
  { label: "03 · Coaching", title: "Frame the recommendation", subline: "A clear path forward" },
  { label: "04 · Coaching", title: "Execution cadence", subline: "Run the plan together" },
  { label: "05 · Coaching", title: "Set accountability", subline: "OKRs that keep you on track" },
];

const ONGOING = [
  {
    eyebrow: "In person · Bangalore",
    name: "The Simple Counsel",
    price: "₹75,000",
    suffix: "/ month",
    caption: "Three-month minimum",
    text: "Your senior business mentor, in person in Bangalore. Two sessions a month on your agenda, WhatsApp access for live decisions while the plan is being carried out, and a quarterly review with your leadership team.",
  },
  {
    eyebrow: "Online · Across India",
    name: "The Simple Advisory",
    price: "₹35,000",
    suffix: "/ month",
    caption: "Three-month minimum",
    text: "A senior sounding board, online. Two 90-minute sessions a month on your agenda and a short written summary after each. Paid after each session. You can start here without a Diagnostic.",
  },
];

const WHY_CARDS = [
  {
    title: "Built entirely around your business",
    body: "Every session begins where your business is — not where the course wants to start. The diagnosis, the plan, and the implementation support are shaped by your actual situation: your market, your margins, your team, your constraints.",
  },
  {
    title: "39 years of senior operating experience",
    body: "Premraj has held senior leadership roles across five industries — Consumer Durables, Tyres, Automotive, Telecom, and SaaS. That’s not theory or certification. It’s tested judgment applied to your reality. About 30 years in large companies up to COO, then nearly 10 years inside MSMEs.",
  },
  {
    title: "No reports left behind on a desk",
    body: "Most consultants deliver a document and exit. This engagement stays through implementation — weekly cadence, OKR tracking, course corrections as the business moves.",
  },
  {
    title: "Built for founders Premraj can sit across the table from",
    body: "This engagement is based in Bengaluru. The Diagnostic and the Simple Advisory work well online. But the execution work in the Reset happens in person, on site, so this is best suited to founders based in or able to meet regularly in Bengaluru. Online, the Simple Advisory works across India.",
  },
];

const CHANGES = [
  {
    area: "Regulation",
    before: "New regulations change the rules, and the old way of growing stops working.",
    after: "A growth plan rebuilt around the new rules.",
  },
  {
    area: "Internal process",
    before: "Internal processes have grown around the founder, and every decision waits on your desk.",
    after: "Streamlined processes your team can run.",
  },
  {
    area: "Go-to-market",
    before: "No real GTM plan. The team chases every lead that comes.",
    after: "A GTM plan co-created with your team, so they own it.",
  },
  {
    area: "Review",
    before: "Targets get set, but nobody looks at them until the month is over.",
    after: "A review model with a weekly rhythm, so course correction happens early.",
  },
];

const FAQS = [
  {
    q: "What does an MSME business coach do differently from a consultant?",
    a: "A management consultant typically arrives with a framework, applies it, produces a plan, and hands it over. A business coach stays in the conversation longer — asking the right questions, challenging assumptions, and working alongside you as you implement. In practice, Premraj’s engagements combine both — structured consulting thinking with the continuity of a coaching relationship. You don’t just get a plan; you get someone who stays until it’s moving.",
  },
  {
    q: "Is MSME business coaching available online across India?",
    a: "Yes. The Simple Diagnostic and the Simple Advisory run fully online, wherever you are in India. The Simple Counsel is in person, so it suits founders in or able to meet in Bangalore.",
  },
  {
    q: "What size of business benefits most from MSME business coaching?",
    a: "The engagement works best for established businesses in the ₹10 crore to ₹200 crore revenue range. This includes MSMEs that have hit a growth ceiling and family businesses navigating a transition. The common thread is a founder or leadership team making real decisions about strategy, market, or execution — and needing a rigorous thinking partner.",
  },
  {
    q: "Do you coach SMEs as well as MSMEs?",
    a: "Yes. SME (small and medium enterprises) and MSME describe much the same businesses. MSME is the term Indian law uses, and it adds micro enterprises. Simpleworks works as a business coach for SMEs and MSMEs alike, usually founder-led businesses with ₹10–200 crore in revenue. SME business coaching runs in person in Bangalore or online across India.",
  },
  {
    q: "How is a coaching engagement structured?",
    a: "Most founders start with the Simple Diagnostic: one problem you name, a three-hour working session, a written brief and a one-hour walkthrough. Ongoing coaching follows if it's useful: the Simple Counsel in person in Bangalore, or the Simple Advisory online. If you already know you want a monthly sounding board online, you can start with the Advisory.",
  },
  {
    q: "How much does MSME business coaching cost?",
    a: "Fees are fixed and published. The Simple Diagnostic is ₹25,000, paid after the engagement. The Simple Counsel is ₹75,000 a month in person, with a three-month minimum. The Simple Advisory is ₹35,000 a month for two 90-minute sessions online, also with a three-month minimum. For hands-on work on site there is also a 30 or 60-day Simple Reset; see Programmes. There's no hourly billing.",
  },
  {
    q: "How is this different from group MSME coaching programmes or bootcamps?",
    a: "Group programmes work through a shared curriculum applied to dozens or hundreds of businesses simultaneously. They’re affordable and useful for building frameworks. But they can’t diagnose your specific business, surface your specific growth constraint, or build a plan around your specific market. A one-to-one MSME business coach does exactly that. This engagement is built entirely around your business — nothing generic. Group programmes usually publish their fees; most one-to-one coaches don't. Simpleworks does. See the Programmes page.",
  },
  {
    q: "What industries does Simpleworks Consulting work with?",
    a: "Most clients are in manufacturing, consumer goods, retail and distribution, professional services, or early-stage technology and SaaS businesses. Premraj has operating experience across Consumer Durables, Automotive and Tyres, Telecom, and SaaS — so these are the verticals where the coaching is most grounded.",
  },
  {
    q: "What is the first step?",
    a: "A quick introductory conversation — no agenda, no pitch. You share what your business is dealing with and what you’re trying to solve. From there, you both decide whether to go further. No commitment until that conversation has happened.",
  },
];

const BLOG_LINKS = [
  {
    title: "What Does an MSME Business Coach Actually Do?",
    excerpt:
      "The role explained clearly — what a coach does, what they don’t do, and how it differs from consulting, training, and mentorship.",
    href: "/blog/what-does-an-msme-business-coach-actually-do",
  },
  {
    title: "How to Choose the Right MSME Business Coach in India",
    excerpt:
      "A practical guide for founders — the questions to ask, the red flags to watch for, and what experience actually matters in this context.",
    href: "/blog/how-to-choose-the-right-msme-business-coach-in-india",
  },
  {
    title: "Business Coach vs Consultant: What Indian MSMEs Actually Need",
    excerpt:
      "The difference between coaching and consulting — and why most Indian MSME founders need elements of both, not a choice between them.",
    href: "/blog/business-coach-vs-consultant-what-indian-msm-es-actually-need",
  },
  {
    title: "The Difference Between Business Coach and Mentor Isn’t Skill  - It’s Stage",
    excerpt:
      "Why founders need a coach at one stage and a mentor at another, and how to tell which stage you're in.",
    href: "/blog/the-difference-between-business-coach-and-mentor-isn-t-skill-it-s-stage",
  },
  {
    title: "How to Make Your Business Run Without the Owner",
    excerpt:
      "Why owners delegate tasks but keep decisions, and how moving decision rights is what finally lets the business run without you.",
    href: "/blog/how-to-make-your-business-run-without-the-owner",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "One-to-one MSME business coaching",
  serviceType: "Business coaching",
  url: "https://www.simpleworks.in/msme-business-coach",
  provider: {
    "@type": "ProfessionalService",
    name: "Simpleworks Consulting",
    url: "https://www.simpleworks.in",
    telephone: "+91 90360 99000",
    email: "pm@simpleworks.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Marathahalli, Bengaluru",
      postalCode: "560037",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  },
  areaServed: [
    { "@type": "City", name: "Bengaluru" },
    { "@type": "Country", name: "India" },
  ],
  offers: [
    {
      "@type": "Offer",
      name: "The Simple Diagnostic",
      description:
        "One problem you name: a three-hour working session, a written brief and a one-hour walkthrough. In person or online. Paid after the engagement.",
      price: "25000",
      priceCurrency: "INR",
      url: "https://www.simpleworks.in/business-growth-review",
    },
    {
      "@type": "Offer",
      name: "The Simple Counsel",
      description:
        "In person in Bangalore. Two sessions a month, WhatsApp access and a quarterly review with the leadership team. Three-month minimum.",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "75000",
        priceCurrency: "INR",
        unitText: "MONTH",
      },
      url: "https://www.simpleworks.in/programmes",
    },
    {
      "@type": "Offer",
      name: "The Simple Advisory",
      description:
        "Online across India. Two 90-minute sessions a month with a written summary after each. Three-month minimum. Paid after each session.",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "35000",
        priceCurrency: "INR",
        unitText: "MONTH",
      },
      url: "https://www.simpleworks.in/programmes",
    },
  ],
};

const WRAP = "max-w-[1200px] mx-auto px-4 md:px-10";
const SECTION = "border-t border-rule py-12 md:py-20";
const EYEBROW =
  "text-[11px] md:text-[13px] uppercase tracking-widest font-light text-light mb-3";
const H2 =
  "text-[30px] leading-[1.18] md:text-[36px] font-bold tracking-tight-1 text-ink";
const BODY = "text-[16px] md:text-[17px] text-mid leading-[1.78]";
const BTN =
  "inline-block bg-transparent border border-red text-red text-[14px] px-9 py-[14px] rounded-[1px] hover:bg-red hover:text-white transition-colors";
const TEXT_LINK = "text-red hover:underline";
const LABEL =
  "text-[11px] md:text-[13px] uppercase tracking-widest font-light text-light";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className={EYEBROW}>{children}</p>;
}

// Links "Programmes page" (or "Programmes" after "see ") inside FAQ answers.
function FaqAnswer({ text }: { text: string }) {
  const markers = ["Programmes page", "see Programmes"];
  for (const marker of markers) {
    const idx = text.indexOf(marker);
    if (idx === -1) continue;
    const linkText = marker === "see Programmes" ? "Programmes" : marker;
    const linkStart = idx + marker.length - linkText.length;
    return (
      <>
        {text.slice(0, linkStart)}
        <Link href="/programmes" className={TEXT_LINK}>
          {linkText}
        </Link>
        {text.slice(idx + marker.length)}
      </>
    );
  }
  return <>{text}</>;
}

function CareerColumn({
  eyebrow,
  rows,
}: {
  eyebrow: string;
  rows: { name: string; line: string }[];
}) {
  return (
    <div className="border-t border-ink pt-4">
      <p className={`${LABEL} mb-4`}>{eyebrow}</p>
      <ul className="flex flex-col gap-4">
        {rows.map((row) => (
          <li key={row.name}>
            <p className="text-[16px] font-bold text-ink leading-snug">{row.name}</p>
            <p className="text-[15px] text-mid leading-relaxed">{row.line}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MsmeBusinessCoachPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. HERO + 2. STATS */}
      <section id="hero" className="py-10 md:py-14">
        <div className={WRAP}>
          <div className="flex flex-col-reverse gap-10 md:flex-row md:items-start md:gap-12">
            <div className="md:basis-[55%]">
              <Eyebrow>MSME Business Coach — Bangalore &amp; India</Eyebrow>
              <h1 className="text-[40px] leading-[1.1] md:text-hero-h1 font-bold tracking-tight-1 text-ink mb-6">
                Is your{" "}
                <span className="text-red">MSME business not growing</span>{" "}
                the way it should?
              </h1>
              <p className="text-[16px] md:text-[18px] italic text-mid leading-[1.65] mb-4">
                One-to-one MSME business coaching in Bangalore, for founders
                across India in the ₹10–200 crore range. Not a course. Someone senior who helps
                you decide what to do, then helps you get it done.
              </p>
              <p className={`${BODY} mb-8`}>
                If you&rsquo;re running an MSME in India and feel stuck — on
                growth strategy, on where to sell, on why execution keeps
                falling short — you don&rsquo;t need another seminar. You need
                a thinking partner with deep industry experience who will work
                through your specific situation with you. That&rsquo;s what
                this engagement is.
              </p>
              <div className="mb-3">
                <a
                  href={CONTACT_LINK}
                  data-cta="hero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={BTN}
                >
                  WhatsApp Premraj
                </a>
              </div>
              <p className="text-[14px] text-light mb-6">
                Premraj replies personally. No pitch, no commitment.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/images/landing/prem-menon-portrait.png"
                  alt="Premraj Menon"
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-full object-cover object-top"
                />
                <p className="text-[15px] leading-snug text-mid">
                  <strong className="font-bold text-ink">Premraj Menon</strong>{" "}
                  · Former COO with full P&amp;L · Nearly 10 years inside MSMEs
                  as co-founder and on the management team
                </p>
              </div>
              <p className="text-[14px] text-light">
                In-person coaching in Bangalore (Bengaluru) &nbsp;·&nbsp; Online
                advisory calls across India
              </p>
            </div>
            <div className="md:basis-[45%] md:pt-8">
              <Image
                src="/images/msme-business-coach/hero-founder-factory-floor.webp"
                alt="Illustration of a founder standing with arms crossed on a factory floor, with machining centres and workers behind him"
                width={944}
                height={1136}
                sizes="(min-width: 768px) 380px, 80vw"
                className="w-full max-w-[340px] md:max-w-[380px] md:ml-auto mx-auto h-auto"
                priority
              />
            </div>
          </div>

          <ul className="mt-12 md:mt-14 grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <li
                key={s.num}
                className="border-t border-rule py-6"
              >
                <p className="whitespace-nowrap text-[40px] md:text-[44px] font-bold text-red tracking-tight-1 leading-none mb-3">
                  {s.num}
                </p>
                <p className="text-[14px] text-light leading-snug max-w-[260px]">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* IN SHORT */}
      <section className="border-t border-rule py-8 md:py-10">
        <div className={WRAP}>
          <div className="max-w-[720px]">
            <Eyebrow>In short</Eyebrow>
            <p className="text-[17px] md:text-[20px] text-ink leading-[1.7]">
              One-to-one business coaching for founder-led MSMEs with ₹10–200
              crore in revenue, led personally by Premraj Menon. You get a
              diagnosed constraint, a costed plan and a weekly review rhythm
              your team can run. Online across India, and on site in Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* 3. RECOGNISE */}
      <section id="signs" className={SECTION}>
        <div className={WRAP}>
          <div className="max-w-[720px] mb-8 md:mb-10">
            <Eyebrow>Is this for you?</Eyebrow>
            <h2 className={`${H2} mb-5`}>
              Recognise <span className="text-red">any of these?</span>
            </h2>
            <p className={BODY}>
              If you&rsquo;re running a business in the ₹10–200 crore range and
              feeling any of this, you&rsquo;re in the right place.
            </p>
          </div>
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            <div className="md:basis-[53%]">
              <Image
                src="/images/msme-business-coach/owner-thinking.webp"
                alt="Illustration of an MSME owner at his desk in the evening, thinking over a ledger and a laptop"
                width={1408}
                height={768}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto"
              />
            </div>
            <ul className="md:basis-[47%] border-t border-ink">
              {PAIN_QUOTES.map((quote) => (
                <li
                  key={quote}
                  className="flex gap-4 border-b border-rule py-5"
                >
                  <span
                    aria-hidden="true"
                    className="text-[44px] leading-[0.9] text-red"
                  >
                    &ldquo;
                  </span>
                  <p className="italic text-[19px] md:text-[22px] leading-[1.4] text-ink">
                    {quote.replace(/^[“"]|[”"]$/g, "")}
                    <span aria-hidden="true" className="text-red">&rdquo;</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 border-t border-rule pt-6">
            <a
              href={CONTACT_LINK}
              data-cta="recognise"
              target="_blank"
              rel="noopener noreferrer"
              className={`${TEXT_LINK} block text-[16px]`}
            >
              Sound familiar? Tell Premraj which one →
            </a>
          </div>
        </div>
      </section>

      {/* 4. WHAT CHANGES */}
      <section id="changes" className={SECTION}>
        <div className={WRAP}>
          <div className="mb-8 md:mb-10">
            <Eyebrow>What changes</Eyebrow>
            <h2 className={`${H2} lg:whitespace-nowrap`}>
              What&rsquo;s different{" "}
              <span className="text-red">after we work together</span>
            </h2>
          </div>

          <div className="mb-14 md:mb-16 grid gap-8 border-t border-ink pt-6 md:grid-cols-[5fr_7fr] md:gap-14">
            <div>
              <p className={`${LABEL} mb-3`}>
                Business coaching for manufacturing: a recent engagement
              </p>
              <h3 className="text-[26px] md:text-[30px] font-bold leading-[1.2] tracking-tight-1 text-ink mb-3">
                Flat for two years, two clients carrying the business.
              </h3>
              <p className="text-[14px] text-light">
                Automobile components manufacturer · Bangalore · Simple
                Diagnostic
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {STORY_BLOCKS.map((block) => (
                <div key={block.label}>
                  <p
                    className={`text-[11px] md:text-[13px] uppercase tracking-widest mb-2 ${
                      block.strong ? "font-bold text-ink" : "font-light text-light"
                    }`}
                  >
                    {block.label}
                  </p>
                  <p
                    className={`text-[16px] md:text-[17px] leading-[1.7] ${
                      block.strong ? "text-ink" : "text-mid"
                    }`}
                  >
                    {block.text}
                  </p>
                </div>
              ))}
              <Link href="/client-success-stories" className={`${TEXT_LINK} text-[16px]`}>
                Read more client stories →
              </Link>
            </div>
          </div>

          <p className={`${BODY} max-w-[720px] mb-8 md:mb-10`}>
            Recent engagements have been with trading and manufacturing
            companies. The problems differ, but the work usually lands in one
            of four places.
          </p>
          <div>
            <div
              aria-hidden="true"
              className="hidden min-[700px]:grid grid-cols-[1fr_40px_1.25fr] gap-6 pb-3"
            >
              <p className="text-[11px] md:text-[13px] uppercase tracking-widest font-light text-light">
                Before
              </p>
              <span />
              <p className="text-[11px] md:text-[13px] uppercase tracking-widest font-bold text-ink">
                After working together
              </p>
            </div>
            <ul>
              {CHANGES.map((row, i) => (
                <li
                  key={row.area}
                  className={`grid grid-cols-1 gap-3 py-5 min-[700px]:grid-cols-[1fr_40px_1.25fr] min-[700px]:items-center min-[700px]:gap-6 border-t ${
                    i === 0 ? "border-ink" : "border-rule"
                  } ${i === CHANGES.length - 1 ? "border-b border-b-rule" : ""}`}
                >
                  <p className="text-[17px] text-light leading-[1.6]">
                    {row.before}
                  </p>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 40 12"
                    className="hidden min-[700px]:block w-10 h-3 text-ink"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M0 6h38M33 1l5 5-5 5" />
                  </svg>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest font-light text-light mb-1">
                      {row.area}
                    </p>
                    <p className="text-[20px] md:text-[24px] font-bold text-ink leading-[1.3]">
                      {row.after}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-[14px] text-light">
            From recent engagements with trading and manufacturing companies.
            Client names are kept confidential.
          </p>
        </div>
      </section>

      {/* 5. WHO YOU'LL WORK WITH */}
      <section id="who" className={SECTION}>
        <div className={WRAP}>
          <div className="grid gap-10 md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr] md:gap-14 md:items-start">
            <div>
              <Image
                src="/images/landing/prem-menon-portrait.png"
                alt="Premraj Menon, MSME Business Coach"
                width={1024}
                height={1024}
                sizes="(min-width: 768px) 340px, 80vw"
                className="w-full max-w-[340px] h-auto mx-auto md:mx-0"
              />
            </div>
            <div>
              <Eyebrow>Who you&rsquo;ll work with</Eyebrow>
              <h2 className={`${H2} mb-3`}>
                You work with Premraj,{" "}
                <span className="text-red">not a junior team.</span>
              </h2>
              <p className="text-[15px] text-light mb-5">
                Premraj Menon · Founder, Simpleworks Consulting · MSME Business
                Coach, Bengaluru
              </p>
              <p className="text-[18px] md:text-[20px] text-ink leading-[1.6] mb-8">
                Most advisors bring one view of a business. Premraj Menon
                brings two: the C-suite view from about 30 years in large
                companies, rising to COO with full P&amp;L, and the
                owner&rsquo;s view from nearly 10 years inside MSMEs. He now
                works as a business coach in Bangalore for founder-led MSMEs
                and SMEs.
              </p>
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 mb-8">
                <CareerColumn
                  eyebrow="The C-suite view · About 30 years"
                  rows={CSUITE_VIEW}
                />
                <CareerColumn
                  eyebrow="The owner’s view · Nearly 10 years"
                  rows={OWNER_VIEW}
                />
              </div>
              <p className="border-t border-rule pt-5 text-[16px] md:text-[17px] text-ink leading-[1.7] mb-3">
                What that means for you: boardroom discipline on strategy,
                P&amp;L and review, applied to a business where the owner signs
                every cheque.
              </p>
              <p className="text-[14px] text-light mb-8">
                IIM Bengaluru · Ross School of Business, University of Michigan
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href={CONTACT_LINK}
                  data-cta="bio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={BTN}
                >
                  WhatsApp Premraj
                </a>
                <span className="text-[14px] text-light">
                  No pitch, no commitment.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE RIGHT FIT */}
      <section id="fit" className={SECTION}>
        <div className={WRAP}>
          <div className="mb-10">
            <Eyebrow>The right fit</Eyebrow>
            <h2 className={`${H2} mb-5 min-[1200px]:whitespace-nowrap`}>
              MSME business coaching{" "}
              <span className="text-red">works best</span> for these situations
            </h2>
            <p className={`${BODY} max-w-[860px]`}>
              One-to-one coaching for MSME and SME owners whose business has
              outgrown running on the owner&rsquo;s memory and time. A
              business coach for MSMEs earns his fee in these five situations:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {WHO_ITS_FOR.map((cell) =>
              cell.kind === "card" ? (
                <div key={cell.title} className="border-t border-ink pt-5">
                  <h3 className="text-[20px] font-bold leading-[1.3] text-ink mb-2">
                    {cell.title}
                  </h3>
                  <p className="text-[15px] text-mid leading-relaxed">
                    {cell.body}
                  </p>
                </div>
              ) : (
                <div key="startup" className="border-t border-rule pt-5">
                  <p className="text-[14px] text-light mb-2">Running a startup?</p>
                  <Link
                    href="/startup-mentor-bengaluru"
                    className={`${TEXT_LINK} text-[16px]`}
                  >
                    See startup mentoring →
                  </Link>
                </div>
              ),
            )}
          </div>
          <div className="mt-12 border-t border-rule pt-6">
            <p className="text-[16px] leading-[1.7] text-mid max-w-[860px]">
              <strong className="font-bold text-ink">Where we work.</strong>{" "}
              Based in Bangalore. In-person coaching happens on site in
              Bangalore. The Simple Diagnostic and the Simple Advisory run
              online across India. Also working with{" "}
              <Link
                href="/tamil-nadu-msme-consultant"
                className="underline decoration-rule underline-offset-4 transition-colors hover:text-red"
              >
                MSME owners across Tamil Nadu
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 7. WHAT HAPPENS AFTER YOU MESSAGE */}
      <section id="next-step" className={SECTION}>
        <div className={WRAP}>
          <div className="mb-10">
            <Eyebrow>Your first step</Eyebrow>
            <h2 className={H2}>
              What happens <span className="text-red">after you message.</span>
            </h2>
          </div>
          <ol className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 mb-12">
            {NEXT_STEPS.map((step, i) => (
              <li key={step} className="border-t border-ink pt-5">
                <span
                  aria-hidden="true"
                  className="mb-3 block text-[22px] font-bold leading-none text-red"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[19px] md:text-[20px] leading-snug text-ink">
                  {step}
                </p>
              </li>
            ))}
          </ol>
          <div className="flex flex-col gap-6 border-t border-rule pt-6 md:flex-row md:items-center md:justify-between md:gap-12">
            <p className={`${BODY} max-w-[760px]`}>
              If it&rsquo;s a fit, most founders start with the Simple
              Diagnostic: one problem you name, worked through in half a day.{" "}
              <strong className="font-bold text-ink">
                You pay after the engagement, not before.
              </strong>{" "}
              Premraj will sign an NDA before you share your numbers.
            </p>
            <div className="shrink-0">
              <a
                href={CONTACT_LINK}
                data-cta="next-step"
                target="_blank"
                rel="noopener noreferrer"
                className={BTN}
              >
                WhatsApp Premraj
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOW IT WORKS + FEES */}
      <section id="fees" className={SECTION}>
        <div className={WRAP}>
          <div className="max-w-[720px] mb-10">
            <Eyebrow>How it works, and what it costs</Eyebrow>
            <h2 className={`${H2} mb-5`}>
              A structured engagement —{" "}
              <span className="text-red">built around your business.</span>
            </h2>
            <p className={BODY}>
              Premraj Menon&rsquo;s fees are fixed and published. No hourly
              billing.
            </p>
          </div>

          <ol className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 min-[960px]:grid-cols-5">
            {STEPS.map((step) => (
              <li key={step.title} className="border-t border-rule pt-4">
                <p className="text-[11px] uppercase tracking-widest font-light text-light mb-2">
                  {step.label}
                </p>
                <h3 className="text-[17px] font-bold text-ink leading-snug mb-1">
                  {step.title}
                </h3>
                <p className="text-[15px] text-mid leading-snug">{step.subline}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-[15px] leading-[1.7] text-mid max-w-[860px]">
            Not sure how to tell a real fit from a generic one? Read{" "}
            <Link
              href="/blog/how-to-choose-the-right-msme-business-coach-in-india"
              className={TEXT_LINK}
            >
              how to choose the right MSME business coach
            </Link>{" "}
            for the five questions worth asking before you commit.
          </p>

          {/* 8b. Start here */}
          <div className="mt-14 grid gap-6 border-t border-ink pt-6 md:grid-cols-[1fr_1fr_1.4fr] md:gap-10">
            <div>
              <p className={`${LABEL} mb-2`}>Start here</p>
              <h3 className="text-[24px] font-bold leading-[1.25] text-red">
                The Simple Diagnostic
              </h3>
            </div>
            <div>
              <p className="text-[32px] font-bold leading-none text-ink mb-2 [font-variant-numeric:tabular-nums]">
                ₹25,000
              </p>
              <p className="text-[14px] text-light">
                Half a day · In person or online
              </p>
            </div>
            <div>
              <p className={`${BODY} mb-4`}>
                One problem you name. A three-hour working session (two or
                three shorter sessions online), a written brief and a one-hour
                walkthrough.{" "}
                <strong className="font-bold text-ink">
                  Paid after the engagement.
                </strong>
              </p>
              <Link
                href="/business-growth-review"
                data-cta="fees"
                className={`${TEXT_LINK} text-[15px]`}
              >
                See what the Diagnostic covers →
              </Link>
            </div>
          </div>

          {/* 8c. Ongoing coaching */}
          <p className="mt-14 mb-6 text-[19px] md:text-[20px] font-bold text-ink">
            Then, ongoing coaching. Choose how you work.
          </p>
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            {ONGOING.map((p) => (
              <div key={p.name} className="border-t border-ink pt-5">
                <p className={`${LABEL} mb-2`}>{p.eyebrow}</p>
                <h3 className="text-[24px] font-bold leading-[1.25] text-red mb-3">
                  {p.name}
                </h3>
                <p className="mb-1 whitespace-nowrap [font-variant-numeric:tabular-nums]">
                  <span className="text-[32px] font-bold leading-none text-ink">
                    {p.price}
                  </span>{" "}
                  <span className="text-[16px] text-mid">{p.suffix}</span>
                </p>
                <p className="text-[14px] text-light mb-4">{p.caption}</p>
                <p className={BODY}>{p.text}</p>
              </div>
            ))}
          </div>

          {/* 8d. Reset line */}
          <p className="mt-12 border-t border-rule pt-5 text-[16px] md:text-[17px] leading-[1.7] text-mid">
            Need hands-on fixing on site? The 30 or 60-day Simple Reset adds a
            weekly on-site visit.{" "}
            <Link href="/programmes" className={TEXT_LINK}>
              See Programmes →
            </Link>
          </p>
        </div>
      </section>

      {/* 9. FAQ */}
      <section id="faq" className={SECTION}>
        <div className={`${WRAP} grid gap-10 md:grid-cols-[38fr_62fr] md:gap-16`}>
          <div className="md:self-start">
            <Eyebrow>Common questions</Eyebrow>
            <h2 className={`${H2} mb-6`}>
              What MSME founders usually{" "}
              <span className="text-red">ask before starting</span>
            </h2>
            <p className={BODY}>
              Something not covered here?{" "}
              <a
                href={CONTACT_LINK}
                data-cta="faq"
                target="_blank"
                rel="noopener noreferrer"
                className={TEXT_LINK}
              >
                Ask Premraj on WhatsApp →
              </a>
            </p>
            <p className={`${BODY} mt-3`}>
              <Link href="/simpleworks-questions" className={TEXT_LINK}>
                More questions about Simpleworks →
              </Link>
            </p>
          </div>
          <div className="border-b border-rule">
            {FAQS.map((item, i) => (
              <details
                key={item.q}
                open={i === 0}
                className="group border-t border-rule"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="text-[17px] md:text-[19px] font-bold leading-snug text-ink">
                    {item.q}
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="mt-1.5 h-4 w-4 shrink-0 text-ink"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <path d="M2 8h12" />
                    <path d="M8 2v12" className="group-open:hidden" />
                  </svg>
                </summary>
                <p className="pb-6 pr-10 text-[16px] leading-[1.7] text-mid">
                  <FaqAnswer text={item.a} />
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CLOSING CTA */}
      <section id="book" className="border-t border-rule py-14 md:py-24">
        <div className={`${WRAP} text-center`}>
          <div className="max-w-[820px] mx-auto">
            <Eyebrow>Next step</Eyebrow>
            <h2 className="text-[32px] leading-[1.15] md:text-[52px] font-bold tracking-tight-1 text-ink mb-6">
              Ready to think clearly{" "}
              <span className="text-red">about your business?</span>
            </h2>
            <p className={`${BODY} mb-10`}>
              Start with a quick introductory conversation. No commitment, no
              pitch — just a clear-eyed look at what your MSME is dealing with
              and whether this helps.
            </p>
            <a
              href={CONTACT_LINK}
              data-cta="final-cta"
              target="_blank"
              rel="noopener noreferrer"
              className={BTN}
            >
              WhatsApp Premraj
            </a>
            <p className="mt-6 text-[14px] text-light">
              Or call{" "}
              <a href="tel:+919036099000" className={TEXT_LINK}>
                {FACTS.phone}
              </a>{" "}
              ·{" "}
              <a href={`mailto:${FACTS.email}`} className={TEXT_LINK}>
                {FACTS.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 11. THE ROLE */}
      <section id="role" className={SECTION}>
        <div className={WRAP}>
          <div className="max-w-[860px]">
            <Eyebrow>Understanding the role</Eyebrow>
            <h2 className={`${H2} mb-6 min-[900px]:whitespace-nowrap`}>
              What does an MSME business coach{" "}
              <span className="text-red">actually do?</span>
            </h2>
            <p className="text-[19px] md:text-[22px] leading-[1.45] text-ink mb-5">
              An MSME business coach is not a trainer, not a motivational
              speaker, and not a management consultant in the traditional
              sense.
            </p>
            <p className={BODY}>
              The role sits in a specific space: helping a founder or business
              leader think more clearly, make better decisions, and build the
              structures — strategy, GTM, execution, OKRs — that allow the
              business to grow without depending entirely on the
              founder&rsquo;s bandwidth.
            </p>
          </div>
          <div className="mt-12 md:mt-[70px] grid gap-10 md:grid-cols-2 md:gap-14">
            <div className="border-t border-rule pt-5">
              <p className="text-[11px] md:text-[13px] uppercase tracking-widest font-light text-light mb-3">
                Most MSME coaching in India
              </p>
              <h3 className="text-[20px] md:text-[24px] font-bold leading-[1.3] text-light mb-3">
                One framework, many businesses
              </h3>
              <p className="text-[16px] leading-[1.7] text-mid">
                In India, most coaching in the MSME space happens in groups —
                seminars, bootcamps, online cohorts where the same framework
                gets applied to 200 businesses at once. That model has its
                place. But for an MSME with specific problems — a family
                business navigating succession, a manufacturer trying to break
                into a new channel, a founder whose team keeps missing targets
                — generic frameworks rarely reach the root cause.
              </p>
            </div>
            <div className="border-t-2 border-ink pt-5">
              <p className="text-[11px] md:text-[13px] uppercase tracking-widest font-bold text-ink mb-3">
                One-to-one coaching
              </p>
              <h3 className="text-[20px] md:text-[24px] font-bold leading-[1.3] text-red mb-3">
                One business. Yours.
              </h3>
              <p className="text-[16px] leading-[1.7] text-mid">
                A one-to-one MSME business coach works only on your business.
                The diagnosis starts with your market, your numbers, your team,
                and your specific constraints. The plan that comes out of that
                process is yours — not a template adapted to fit. And the
                execution support that follows is built around your pace and
                capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. WHY DIFFERENT */}
      <section id="why" className={SECTION}>
        <div className={WRAP}>
          <div className="mb-10">
            <Eyebrow>Why this, not that</Eyebrow>
            <h2 className={`${H2} mb-5 min-[1100px]:whitespace-nowrap`}>
              What makes a{" "}
              <span className="text-red">one-to-one MSME business coach</span>{" "}
              different
            </h2>
            <p className={`${BODY} max-w-[860px]`}>
              There are plenty of coaching options for Indian MSME founders.
              Group programmes, online cohorts, weekend bootcamps — most built
              around a system that works across many businesses
              simultaneously. That model is efficient and affordable.
              It&rsquo;s also, by design, generic. Simpleworks Consulting is
              built differently.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {WHY_CARDS.map((card, i) => (
              <div key={card.title} className="border-t border-ink pt-5">
                <div className="flex items-baseline gap-4 mb-2">
                  <span
                    aria-hidden="true"
                    className="text-[15px] font-bold text-red"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[20px] font-bold leading-[1.3] text-ink">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[15px] text-mid leading-relaxed md:pl-[34px]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. READ MORE */}
      <section id="read" className={`${SECTION} border-b`}>
        <div className={WRAP}>
          <div className="max-w-[720px] mb-8 md:mb-10">
            <Eyebrow>Not ready to talk yet?</Eyebrow>
            <h2 className={`${H2} mb-5`}>
              <span className="text-red">Read more</span> on MSME business
              coaching
            </h2>
            <p className={BODY}>
              If you&rsquo;re still figuring out whether coaching is right for
              your business, these articles go deeper on the questions founders
              ask most.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
            {BLOG_LINKS.map((post, i) => (
              <article
                key={post.href}
                className={`flex flex-col border-t border-ink pt-5 ${
                  i < 3 ? "lg:col-span-2" : "lg:col-span-3"
                } ${i === BLOG_LINKS.length - 1 ? "md:col-span-2 lg:col-span-3" : ""}`}
              >
                <h3 className="text-[19px] font-bold leading-snug mb-3">
                  <Link href={post.href} className="text-ink hover:text-red">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-[15px] text-mid leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="mt-auto text-[14px] text-red hover:underline"
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-10">
            <Link href="/blog" className={`${TEXT_LINK} text-[16px]`}>
              All articles on the blog →
            </Link>
          </p>
        </div>
      </section>

      {/* 14. FLOATING WHATSAPP (phones only) */}
      <FloatingWhatsApp
        href={CONTACT_LINK}
        heroId="hero"
        hideWhileVisibleId="book"
      />
    </main>
  );
}
