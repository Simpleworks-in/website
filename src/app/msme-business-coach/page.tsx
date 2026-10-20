import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FACTS } from "../../../content/facts";

export const metadata: Metadata = {
  title: { absolute: "MSME Business Coach in India | Simpleworks, Bengaluru" },
  description:
    "One-to-one MSME business coaching in Bengaluru with Premraj Menon, 39 years' experience. Fixed, published fees from ₹25,000. Book an introductory call.",
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

const CONTACT_LINK = `https://wa.me/${FACTS.whatsappNumber}`;

const STATS = [
  { num: "39", label: "Years running\nbusinesses" },
  { num: "1-to-1", label: "Just you and Premraj.\nNo junior team." },
  { num: "Hands-on", label: "Stays through execution,\nnot just the plan." },
];

const PAIN_QUOTES = [
  "“We’re busy every day but I don’t see the growth I expected.”",
  "“My team executes, but we keep missing targets somehow.”",
  "“Every decision still comes back to my desk.”",
  "“We’ve tried consultants before. Got a report. Nothing changed on the ground.”",
  "“We have no real GTM plan — we just chase every lead that comes.”",
];

const WHO_ITS_FOR = [
  {
    title: "Manufacturing & industrial MSMEs",
    body: "You run a factory, a component supplier, or a process business — and you’re trying to grow revenue without adding complexity you can’t manage.",
  },
  {
    title: "Consumer goods & distribution businesses",
    body: "You have a product in the market but the channel strategy isn’t working — you’re over-reliant on one customer, one geography, or one distributor.",
  },
  {
    title: "Family business successors",
    body: "You’ve taken over from a founder-parent and are navigating the balance between respecting what’s been built and leading where it needs to go.",
  },
  {
    title: "First-generation entrepreneurs",
    body: "You’ve crossed ₹10 crore in revenue but growth has plateaued — and you’re not sure whether the problem is strategy, sales, or execution.",
  },
  {
    title: "Startups moving from early traction to scale",
    body: "You have product-market fit and some revenue — but the business isn’t yet structured for the next phase of growth.",
  },
  {
    title: "Founders preparing for a growth leap",
    body: "You have a clear ambition — a new market, a new product line, a new city — and need structured thinking before you commit resources.",
  },
];

const STEPS = [
  {
    title: "Discover",
    subline: "Understand your business from the inside",
    body: "Map your business model, market, team, and where you actually stand today — without assumptions.",
  },
  {
    title: "Diagnose",
    subline: "Find the real constraint",
    body: "Most business problems have a root cause that isn’t obvious. We surface what’s actually holding growth back, not just the symptoms.",
  },
  {
    title: "Frame the recommendation",
    subline: "A clear path forward",
    body: "A practical, prioritised plan — strategy, GTM, or execution — that fits your business and your capacity to act.",
  },
  {
    title: "Execution cadence",
    subline: "Run the plan together",
    body: "We translate the recommendation into weekly actions. You’re not left with a deck — we work through implementation side by side.",
  },
  {
    title: "Set accountability",
    subline: "OKRs that keep you on track",
    body: "We build an OKR structure so progress is visible, ownership is clear, and course correction happens before it’s too late.",
  },
];

const STAGES = [
  {
    stepLabel: "Stage 1 · Find it",
    name: "The Simple Diagnostic",
    covers: "Discover, Diagnose, Frame the recommendation",
    price: "₹25,000",
    priceSuffix: "",
    suffixIsPrice: false,
    term: "Half a day",
    description:
      "A three-hour working session (two or three shorter sessions if online), a written diagnostic brief, and a one-hour walkthrough. You come away knowing what's working, what isn't, and the one thing to do first.",
    then: "act on the brief yourself, or move to the Reset.",
    linkLabel: "Start with the Simple Diagnostic →",
    linkHref: "/business-growth-review",
  },
  {
    stepLabel: "Stage 2 · Fix it",
    name: "The Simple Reset",
    covers: "Execution cadence",
    price: "₹1,40,000",
    priceSuffix: "/ ₹2,80,000",
    suffixIsPrice: true,
    term: "30 days, or 60 days",
    description:
      "Work the plan on the problem the Diagnostic named. In 30 days the gaps are costed in rupees and the fix is designed. Choose 60 days to have Premraj on site with your leadership team while it is put in place, with a weekly review rhythm handed over.",
    then: "run it with your own team, or keep Premraj in your corner.",
    linkLabel: "",
    linkHref: "",
  },
  {
    stepLabel: "Stage 3 · Keep it on track",
    name: "The Simple Counsel",
    covers: "Set accountability",
    price: "₹75,000",
    priceSuffix: "/ month",
    suffixIsPrice: false,
    term: "Minimum three months",
    description:
      "Two sessions a month on your agenda, WhatsApp access for urgent decisions, and a quarterly business review with your leadership team.",
    then: "stop when the business no longer needs it.",
    linkLabel: "",
    linkHref: "",
  },
];

const WHY_CARDS = [
  {
    title: "Built entirely around your business",
    body: "Every session begins where your business is — not where the course wants to start. The diagnosis, the plan, and the implementation support are shaped by your actual situation: your market, your margins, your team, your constraints.",
  },
  {
    title: "39 years of senior operating experience",
    body: "Premraj has held senior leadership roles across five industries — Consumer Durables, Tyres, Automotive, Telecom, and SaaS. That’s not theory or certification. It’s tested judgment applied to your reality.",
  },
  {
    title: "No reports left behind on a desk",
    body: "Most consultants deliver a document and exit. This engagement stays through implementation — weekly cadence, OKR tracking, course corrections as the business moves.",
  },
  {
    title: "Built for founders Premraj can sit across the table from",
    body: "This engagement is based in Bengaluru. The Diagnostic and monthly Counsel work well online. But the execution work in the Reset happens in person, on site, so this is best suited to founders based in or able to meet regularly in Bengaluru.",
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

const CTA_STEPS = [
  "You send a short WhatsApp message.",
  "Premraj replies himself.",
  "You talk it through. No pitch, no commitment.",
];

const CAREER = [
  { k: "1987", v: "Sales trainee, Usha International" },
  { k: "Tyres", v: "MRF and Apollo Tyres: dealer networks and government sales" },
  { k: "Telecom", v: "BPL Mobile, Bharti Airtel, then Tata Docomo, rising to COO of the Kerala circle with full P&L" },
  { k: "SaaS", v: "Strategy, product and growth at Neoffice" },
  { k: "Study", v: "IIM Bengaluru; Ross School of Business, University of Michigan" },
];

const FAQS = [
  {
    q: "What does an MSME business coach do differently from a consultant?",
    a: "A management consultant typically arrives with a framework, applies it, produces a plan, and hands it over. A business coach stays in the conversation longer — asking the right questions, challenging assumptions, and working alongside you as you implement. In practice, Premraj’s engagements combine both — structured consulting thinking with the continuity of a coaching relationship. You don’t just get a plan; you get someone who stays until it’s moving.",
  },
  {
    q: "Is MSME business coaching available online across India?",
    a: "Partly. The Simple Diagnostic and the Simple Counsel can both run fully online, wherever you are in India. The Simple Reset needs weekly on-site visits, so it suits founders based in Bengaluru or able to meet here regularly.",
  },
  {
    q: "What size of business benefits most from MSME business coaching?",
    a: "The engagement works best for established businesses in the ₹10 crore to ₹200 crore revenue range. This includes MSMEs that have hit a growth ceiling and family businesses navigating a transition. The common thread is a founder or leadership team making real decisions about strategy, market, or execution — and needing a rigorous thinking partner.",
  },
  {
    q: "How is a coaching engagement structured?",
    a: "Most founders start with the Simple Diagnostic: a three-hour working session (which could be spread across 2-3 sessions), a written diagnostic brief and a one-hour walkthrough, at a fixed ₹25,000. If you continue, the Simple Reset runs for 30 or 60 days, and the Simple Counsel carries on monthly for as long as it's useful. Every stage has a fixed fee, published on the Programmes page.",
  },
  {
    q: "How much does MSME business coaching cost?",
    a: "Fees are fixed and published. The Simple Diagnostic is ₹25,000 for a three-hour working session (which could be spread across 2-3 sessions), a written diagnostic brief and a one-hour walkthrough. The Simple Reset is ₹1,40,000 for 30 days or ₹2,80,000 for 60 days. The Simple Counsel is ₹75,000 a month, with a three-month minimum. There's no hourly billing. Full details are on the Programmes page.",
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
        "A three-hour working session, which could be spread across 2-3 sessions, a written diagnostic brief and a one-hour walkthrough of the findings.",
      price: "25000",
      priceCurrency: "INR",
      url: "https://www.simpleworks.in/programmes",
    },
    {
      "@type": "Offer",
      name: "The Simple Reset (30 days)",
      price: "140000",
      priceCurrency: "INR",
      url: "https://www.simpleworks.in/programmes",
    },
    {
      "@type": "Offer",
      name: "The Simple Reset (60 days)",
      price: "280000",
      priceCurrency: "INR",
      url: "https://www.simpleworks.in/programmes",
    },
    {
      "@type": "Offer",
      name: "The Simple Counsel",
      description: "Monthly business mentoring, minimum three months.",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "75000",
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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className={EYEBROW}>{children}</p>;
}

function FaqAnswer({ text }: { text: string }) {
  const marker = "Programmes page";
  const idx = text.indexOf(marker);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <Link href="/programmes" className={TEXT_LINK}>
        {marker}
      </Link>
      {text.slice(idx + marker.length)}
    </>
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

      {/* 1. HERO + STATS */}
      <section className="py-10 md:py-14">
        <div className={WRAP}>
          <div className="flex flex-col-reverse gap-10 md:flex-row md:items-start md:gap-12">
            <div className="md:basis-[55%]">
              <Eyebrow>MSME Business Coach — India</Eyebrow>
              <h1 className="text-[40px] leading-[1.1] md:text-hero-h1 font-bold tracking-tight-1 text-ink mb-6">
                Your business has{" "}
                <span className="text-red">
                  outgrown
                  <br />
                  generic advice.
                </span>
              </h1>
              <p className="text-[16px] md:text-[18px] italic text-mid leading-[1.65] mb-4">
                One-to-one MSME business coaching for Indian founders in the
                ₹10–200 crore range. Not a course. Someone senior who helps
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
                  Let&rsquo;s Talk
                </a>
              </div>
              <p className="text-[14px] text-light mb-6">
                Premraj replies personally. No pitch, no commitment.
              </p>
              <div className="flex items-center gap-4 border-t border-rule pt-5 mb-4">
                <Image
                  src="/images/landing/prem-menon-portrait.png"
                  alt="Premraj Menon"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover object-top"
                />
                <p className="text-[15px] leading-snug text-mid">
                  <strong className="font-bold text-ink">Premraj Menon</strong>
                  <br />
                  Founder / Former COO, Tata Docomo Kerala Circle
                </p>
              </div>
              <p className="text-[14px] text-light">
                In-person coaching for Bengaluru &nbsp;·&nbsp; Online advisory
                calls across India
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

          <div className="mt-12 md:mt-14 grid grid-cols-1 min-[700px]:grid-cols-3 border-t border-rule">
            {STATS.map((s, i) => (
              <div
                key={s.num}
                className={`py-6 min-[700px]:px-8 first:min-[700px]:pl-0 ${
                  i > 0
                    ? "border-t border-rule min-[700px]:border-t-0 min-[700px]:border-l"
                    : ""
                }`}
              >
                <div className="whitespace-nowrap text-[56px] min-[700px]:text-[clamp(36px,4.6vw,66px)] italic font-normal text-red tracking-tight-1 leading-none mb-4">
                  {s.num}
                </div>
                <div className="text-[12px] uppercase tracking-widest font-light text-light leading-relaxed whitespace-pre-line">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. RECOGNISE */}
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
            <p className={`${BODY} mb-3`}>
              Sound familiar? The first step is finding which one is really the
              problem.
            </p>
            <Link href="/business-growth-review" className={`${TEXT_LINK} block text-[16px]`}>
              Start with the Simple Diagnostic →
            </Link>
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
              This is for established businesses that have grown, but still run
              the way they did when they were small: on the owner&rsquo;s
              memory, the owner&rsquo;s calls and the owner&rsquo;s time. These
              are the situations where this engagement helps most:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {WHO_ITS_FOR.map((card) => (
              <div key={card.title} className="border-t border-ink pt-5">
                <h3 className="text-[20px] font-bold leading-[1.3] text-ink mb-2">
                  {card.title}
                </h3>
                <p className="text-[15px] text-mid leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t border-rule pt-6">
            <p className="text-[16px] leading-[1.7] text-mid max-w-[860px]">
              <strong className="font-bold text-ink">Where we work.</strong>{" "}
              Based in Bengaluru. The Diagnostic and monthly Counsel run online
              anywhere in India. The Reset happens on site, so it suits
              founders in or able to meet regularly in Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT CHANGES */}
      <section id="changes" className={SECTION}>
        <div className={WRAP}>
          <div className="mb-8 md:mb-10">
            <Eyebrow>What changes</Eyebrow>
            <h2 className={`${H2} mb-5 lg:whitespace-nowrap`}>
              What&rsquo;s different{" "}
              <span className="text-red">after we work together</span>
            </h2>
            <p className={`${BODY} max-w-[720px]`}>
              Recent engagements have been with trading and manufacturing
              companies. The problems differ, but the work usually lands in one
              of four places.
            </p>
          </div>
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
          <div className="grid gap-10 md:grid-cols-[340px_1fr] md:gap-14 md:items-center">
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
              <p className={`${BODY} mb-6`}>
                Premraj Menon has coached founders and led businesses for 39
                years, including as COO of Tata Docomo&rsquo;s Kerala Circle.
                Simpleworks Consulting works only with Indian MSMEs, startups
                and family businesses in the ₹10–200 crore range. Read his full
                background on the{" "}
                <Link href="/about" className={TEXT_LINK}>
                  About page
                </Link>
                .
              </p>
              <dl className="mb-8 border-t border-rule">
                {CAREER.map((row) => (
                  <div
                    key={row.k}
                    className="grid grid-cols-[90px_1fr] gap-4 border-b border-rule py-3 text-[15px]"
                  >
                    <dt className="text-light">{row.k}</dt>
                    <dd className="text-mid">{row.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href={CONTACT_LINK}
                  data-cta="bio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={BTN}
                >
                  Let&rsquo;s Talk
                </a>
                <span className="text-[14px] text-light">
                  No pitch, no commitment.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="how" className={SECTION}>
        <div className={WRAP}>
          <div className="max-w-[720px] mb-10">
            <Eyebrow>How it works</Eyebrow>
            <h2 className={`${H2} mb-5`}>
              A structured engagement —{" "}
              <span className="text-red">built around your business</span>
            </h2>
            <p className={BODY}>
              This isn&rsquo;t a course, a seminar or a report left on your desk.
              It&rsquo;s one-to-one work on your business, using a proven
              five-stage process.
            </p>
          </div>
          <ol className="grid grid-cols-1 gap-10 min-[900px]:grid-cols-5 min-[900px]:gap-7">
            {STEPS.map((step, i) => (
              <li key={step.title} className="border-t border-ink pt-5">
                <p
                  aria-hidden="true"
                  className="text-[44px] font-bold leading-none text-ink mb-5"
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[19px] font-bold text-ink leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-[15px] text-ink mb-3">{step.subline}</p>
                <p className="text-[15px] text-mid leading-relaxed">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-[15px] leading-[1.7] text-mid max-w-[860px]">
            Not sure how to tell a real fit from a generic one? Read{" "}
            <Link
              href="/blog/how-to-choose-the-right-msme-business-coach-in-india"
              className={TEXT_LINK}
            >
              how to choose the right MSME business coach
            </Link>{" "}
            for the five questions worth asking before you commit.
          </p>
        </div>
      </section>

      {/* 8. FEES */}
      <section id="fees" className={SECTION}>
        <div className={WRAP}>
          <Eyebrow>Fees</Eyebrow>
          <h2 className={`${H2} mb-6`}>
            One path, three stages.{" "}
            <span className="text-red">Stop at any of them.</span>
          </h2>
          <p className={`${BODY} mb-10 max-w-[720px]`}>
            Most coaches tell you their fee only after a sales call. Here it is
            upfront. You start small: the first stage is {STAGES[0].price} for
            half a day. Each stage has its own fixed fee, and you move to the
            next one only if the last one earned it.
          </p>
          <div className="mb-10 flex flex-col min-[860px]:grid min-[860px]:grid-cols-3 min-[860px]:grid-rows-[repeat(8,auto)]">
            {STAGES.map((stage, i) => (
              <div
                key={stage.name}
                className="relative flex flex-col border-l border-ink pb-10 pl-[34px] last:pb-0 min-[860px]:row-span-8 min-[860px]:grid min-[860px]:grid-rows-subgrid min-[860px]:border-l-0 min-[860px]:border-t min-[860px]:pb-0 min-[860px]:pl-0 min-[860px]:pr-8 min-[860px]:pt-[34px]"
              >
                <span
                  aria-hidden="true"
                  className={`absolute -left-[7px] top-[2px] h-[13px] w-[13px] rounded-full border border-ink min-[860px]:-top-[7px] min-[860px]:left-0 ${
                    i === 0 ? "bg-ink" : "bg-white"
                  }`}
                />
                <p className="mb-3 text-[11px] font-light uppercase tracking-widest text-light md:text-[13px]">
                  {stage.stepLabel}
                </p>
                <h3 className="mb-1 text-[20px] font-bold leading-[1.3] text-ink md:text-[24px]">
                  {stage.name}
                </h3>
                <p className="mb-4 text-[14px] text-light">{stage.covers}</p>
                <p className="mb-1 whitespace-nowrap text-[22px] font-bold leading-[1.15] text-ink [font-variant-numeric:tabular-nums] min-[860px]:text-[clamp(17px,2vw,26px)]">
                  <span className="whitespace-nowrap">{stage.price}</span>
                  {stage.priceSuffix && (
                    <>
                      {" "}
                      <span
                        className={
                          stage.suffixIsPrice
                            ? "whitespace-nowrap"
                            : "text-[16px] font-normal text-mid"
                        }
                      >
                        {stage.priceSuffix}
                      </span>
                    </>
                  )}
                </p>
                <p className="mb-4 text-[14px] text-light">{stage.term}</p>
                <p className="mb-4 text-[16px] md:text-[17px] leading-[1.78] text-mid">
                  {stage.description}
                </p>
                <p className="mb-4 min-[860px]:min-h-0">
                  {stage.linkHref && (
                    <Link
                      href={stage.linkHref}
                      data-cta="fees"
                      className="text-[15px] text-red hover:underline"
                    >
                      {stage.linkLabel}
                    </Link>
                  )}
                </p>
                <p className="mt-auto border-t border-rule pt-4 min-[860px]:mt-0 min-[860px]:self-start min-[860px]:w-full text-[15px] leading-[1.65] text-mid">
                  <strong className="font-bold text-ink">Then:</strong>{" "}
                  {stage.then}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 border-t border-rule pt-5 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="text-[15px] leading-relaxed text-mid">
              Fixed fees. No hourly billing. Each stage is agreed on its own.
            </p>
            <Link href="/programmes" className="text-[15px] text-red hover:underline">
              See how the programmes work →
            </Link>
          </div>
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

      {/* 9. THE ROLE */}
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

      {/* 7. WHY DIFFERENT + PREMRAJ */}
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

      {/* 11. CLOSING CTA */}
      <section id="book" className="border-t border-rule py-14 md:py-24">
        <div className={`${WRAP} text-center`}>
          <div className="max-w-[820px] mx-auto">
            <Eyebrow>Next step</Eyebrow>
            <h2 className="text-[32px] leading-[1.15] md:text-[52px] font-bold tracking-tight-1 text-ink mb-6">
              Ready to think clearly{" "}
              <span className="text-red">about your business?</span>
            </h2>
            <p className={`${BODY} mb-8`}>
              Start with a quick introductory conversation. No commitment, no
              pitch — just a clear-eyed look at what your MSME is dealing with
              and whether this helps.
            </p>
            <ol className="mb-10 grid grid-cols-1 gap-6 text-left md:grid-cols-3 md:gap-8">
              {CTA_STEPS.map((step, i) => (
                <li key={step} className="border-t border-ink pt-4">
                  <span
                    aria-hidden="true"
                    className="mb-2 block text-[15px] font-bold text-light"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[16px] leading-snug text-ink">{step}</p>
                </li>
              ))}
            </ol>
            <a
              href={CONTACT_LINK}
              data-cta="final-cta"
              target="_blank"
              rel="noopener noreferrer"
              className={BTN}
            >
              Let&rsquo;s Talk
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

      {/* 10. READ MORE */}
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
          <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
            {BLOG_LINKS.map((post) => (
              <article
                key={post.href}
                className="flex flex-col border-t border-ink pt-5"
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
        </div>
      </section>
    </main>
  );
}
