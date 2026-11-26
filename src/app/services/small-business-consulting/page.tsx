import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FACTS } from "../../../../content/facts";
import { whatsappHref } from "@/lib/whatsapp";
import { PRICES, price } from "@/lib/programmes";
import { ORG_ID } from "@/lib/site-schema";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PremrajBio from "@/components/PremrajBio";

// Conversion page, rebuilt 26 Nov 2026 from small-business-page-final-handover.md
// (mock: "Small Business Page Mock" v6). One objective: the visitor clicks
// WhatsApp Premraj. Every button on the page is that one button.

const PAGE_URL = "https://www.simpleworks.in/services/small-business-consulting";
const TITLE = "Small Business Coach & Consultant in India | Simpleworks Consulting";
const DESCRIPTION =
  "Online small business coach and consultant for owners across India. Fix the one problem holding your business back, with Premraj Menon.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Simpleworks Consulting",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

const CONTACT_LINK = whatsappHref();

const STATS = [
  { num: "About 30", label: "years in large companies, rising to COO with full P&L" },
  { num: "Nearly 10", label: "years inside MSMEs, as co-founder and on the management team" },
  { num: "1-to-1", label: "online, no junior team, no group batches" },
];

const QUOTES = [
  "Some months are good, some are bad, and I can’t tell why.",
  "If I take a week off, things slip. Everything in the office stops.",
  "Most of my customers come from word of mouth. I have no system for finding new ones.",
  "I know what I should do. I never get to it.",
  "I’ve tried consultants and courses. Good ideas, but nothing changed in my business.",
];

const CAUSES = [
  {
    title: "The business runs on you",
    body: "Every decision, every customer call and every follow-up passes through you. When you step away, things slip. Working harder only makes you more of a bottleneck.",
  },
  {
    title: "Customers find you, you don’t find them",
    body: "Most new business comes from word of mouth and old relationships. That works until it stops, and then there is no system to fall back on.",
  },
  {
    title: "The plan never leaves the notebook",
    body: "You know what to do. The week fills with urgent work, and the important change waits another month.",
  },
];

// Live page H3s and paragraphs, word for word.
const PRACTICE = [
  {
    title: "Getting the business off the wrong path",
    body: "Many small businesses grow in the wrong direction — serving the wrong customers, pricing incorrectly, spread across too many offers. The first job is diagnosis: understanding what the business is actually doing versus what it should be doing, and making the hard decisions that clarify the path forward.",
  },
  {
    title: "Finding and winning the right customers",
    body: "Growth for a small business is not a marketing campaign. It is a clear answer to three questions: who exactly is the customer, why would they choose you over the alternative, and how do you reach them efficiently. Simpleworks Consulting works through these with founders who are ready to be specific.",
  },
  {
    title: "Building a business that doesn’t need you for everything",
    body: "Most small business founders are the bottleneck in their own company. Every decision, every client call, every important email runs through them. Simpleworks Consulting builds the structure — roles, accountability, decision rights — that allows the business to operate independently of the founder’s constant attention.",
  },
  {
    title: "Making the plan actually happen",
    body: "A plan that stays in a document is not a plan — it is a good intention. Simpleworks Consulting builds the execution rhythm that turns strategy into weekly action: clear priorities, clear owners, and a review cadence that keeps the business accountable to its own decisions.",
  },
];

// Live "Three areas we work in for small businesses" block, word for word.
const AREAS = [
  {
    title: "Business Strategy",
    body: "Clarity on what the business is, who it serves, and why it wins. For small businesses and startups, strategy is not a long-term exercise — it is an urgent one. The wrong direction compounds faster at this stage than at any other.",
  },
  {
    title: "Go-to-Market Planning",
    body: "The right customers, reached through the right channels, with the right message. For startups and small businesses, GTM is the difference between a product that sells and one that doesn’t — regardless of how good the product is.",
  },
  {
    title: "Execution & OKRs",
    body: "Simple goal-setting and accountability structures that a small team can actually use. Three to five objectives. Clear key results. A weekly rhythm. Enough structure to create momentum — not so much that it becomes a system nobody maintains.",
  },
];

const HELP_TYPES = [
  {
    title: "A consultant",
    body: "Studies your business and hands you a report. Useful, if you have the time to turn it into action.",
  },
  {
    title: "A coach",
    body: "Works with you over time, so you make the decisions and carry them out.",
  },
  {
    title: "A mentor",
    body: "Shares what he learned on his own road. Valuable, but it is his road, not yours.",
  },
];

const STORY_BLOCKS = [
  {
    label: "The problem",
    text: "Revenue flat for two years. Two anchor customers took most of the output, so every price talk and every late payment hit hard.",
    strong: false,
  },
  {
    label: "What we did",
    text: "Rebuilt the go-to-market plan, mapped a far wider list of buyers, and opened the aftermarket through Bangalore distributors.",
    strong: false,
  },
  {
    label: "What’s changed so far",
    text: "New B2B customers are signing on beyond the two anchors, and the first aftermarket distributor is on board.",
    strong: true,
  },
];

const NEXT_STEPS = [
  "You send a short WhatsApp message.",
  "Premraj replies himself.",
  "You talk it through. No pitch, no commitment.",
];

const GOOD_FIT = [
  "You run the business, and it is above about ₹10 crore",
  "Your team can act on the advice",
  "You have one clear problem, or want a regular senior sounding board",
  "You are comfortable working online",
];

// Eight new questions first, then the six live questions word for word.
const FAQS = [
  {
    q: "What does a small business coach do?",
    a: "A small business coach works one-to-one with you, the owner, on the problem holding the business back, then helps carry out the fix. At Simpleworks Consulting, Premraj Menon does this online across India.",
  },
  {
    q: "What is the difference between a small business coach and a small business consultant?",
    a: "A consultant studies the business and hands over a report. A coach works with you over time, so you decide and carry out the changes. Simpleworks Consulting does both: the Simple Diagnostic finds the problem, and the Simple Advisory keeps you moving on the fix.",
  },
  {
    q: "How much does a small business coach cost in India?",
    a: `Fees at Simpleworks Consulting are fixed and published. The Simple Diagnostic is ${price("diagnostic")}, paid after the engagement. The Simple Advisory is ${price("advisory")} a month for two 90-minute online sessions, with a three-month minimum, paid at the end of each month. There is no hourly billing.`,
  },
  {
    q: "Can small business coaching work online?",
    a: "Yes. The Simple Diagnostic and the Simple Advisory run fully online, wherever you are in India. Sessions are by video call, and you get a short written summary after each Advisory session.",
  },
  {
    q: "What size of small business is this for?",
    a: "If you run the business and it is above about ₹10 crore, with a team that can act on the advice. If you are smaller, the articles on the blog are the best place to start.",
  },
  {
    q: "What happens after I send a WhatsApp message?",
    a: "Premraj replies himself. You talk it through, with no pitch and no commitment. He will sign an NDA before you share your numbers.",
  },
  {
    q: "Do I need a Diagnostic before the Simple Advisory?",
    a: "No. You can start with the Simple Advisory directly if you already know you want a regular senior sounding board.",
  },
  {
    q: "How is this different from a business coaching course?",
    a: "A course teaches a general method to a group. This is one-to-one and only about your business, with no group batches.",
  },
  {
    q: "What is the difference between a business consultant and a business mentor?",
    a: "A mentor shares experience and perspective — what they would do, what worked for them. A consultant works on the business directly — diagnosing problems, building plans, and staying until the plan is moving. Simpleworks Consulting is a consulting practice, not a mentoring arrangement. The difference matters because a mentor is not accountable for the outcome. A consultant is.",
  },
  {
    q: "What stage of business does Simpleworks Consulting typically work with?",
    a: "We work with small businesses and startups typically between ₹10 crore and ₹200 crore in annual revenue. The business has usually found its first customers and proven the model works — but is struggling to scale, clarify direction, or execute consistently. If you are pre-revenue, we are likely not the right fit yet.",
  },
  {
    q: "Can Simpleworks Consulting work with early-stage startups?",
    a: "Yes — but with a caveat. Early-stage startups benefit most from consulting when they have enough customer feedback to know what is and isn’t working. If you are still testing the core assumption of your business, the right engagement is a short diagnostic — not a full consulting programme.",
  },
  {
    q: "How is Simpleworks Consulting different from other small business consultants?",
    a: "Three things: Premraj Menon leads every engagement personally — no junior consultants, no hand-offs. Engagements are scoped to the specific problem — not packaged into standard formats. And Simpleworks Consulting stays until the plan is moving — not until an agreed number of sessions is complete.",
  },
  {
    q: "How long does a small business consulting engagement typically last?",
    a: "It depends on the problem. A strategic clarity sprint runs two to four weeks. A go-to-market engagement typically runs six to ten weeks. A longer execution engagement — including OKR design — runs three to six months. We define the scope and timeline at the start so there are no open-ended commitments on either side.",
  },
  {
    q: "What does the first step look like?",
    a: "A 30-minute conversation, with no agenda except understanding your situation. You describe what you are dealing with — Premraj asks a few direct questions and tells you honestly whether Simpleworks Consulting can help and what that engagement would look like in practice.",
  },
];

// Reading cards picked by Prem, 26 Nov 2026.
const READING = [
  {
    title: "Business Not Growing? A Business Growth Consultant's Audit",
    href: "/blog/business-not-growing-a-business-growth-consultant-s-audit",
  },
  {
    title: "How to Make Your Business Run Without the Owner",
    href: "/blog/how-to-make-your-business-run-without-the-owner",
  },
  {
    title:
      "How to Build a 90-Day GTM Plan - A Complete Framework for Small Business Owners with Limited Marketing Budgets",
    href: "/blog/how-to-build-a-90-day-gtm-plan-a-complete-framework-for-small-business-owners-with-limited-marketing-budgets",
  },
  {
    title: "Business Coach vs Consultant: What Indian MSMEs Actually Need",
    href: "/blog/business-coach-vs-consultant-what-indian-msm-es-actually-need",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.simpleworks.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.simpleworks.in/services" },
    { "@type": "ListItem", position: 3, name: "Small Business Coach & Consultant", item: PAGE_URL },
  ],
};

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
  name: "Small business coaching and consulting",
  serviceType: "Business coaching",
  url: PAGE_URL,
  provider: {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: "Simpleworks Consulting",
    url: "https://www.simpleworks.in",
  },
  areaServed: { "@type": "Country", name: "India" },
  offers: [
    {
      "@type": "Offer",
      name: "The Simple Diagnostic",
      description:
        "One problem you name: a three-hour working session online, a written brief and a one-hour walkthrough. Paid after the engagement.",
      price: String(PRICES.diagnostic),
      priceCurrency: "INR",
      url: "https://www.simpleworks.in/business-growth-review",
    },
    {
      "@type": "Offer",
      name: "The Simple Advisory",
      description:
        "Online across India. Two 90-minute sessions a month with a short written summary after each. Three-month minimum.",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(PRICES.advisory),
        priceCurrency: "INR",
        unitText: "MONTH",
      },
      url: "https://www.simpleworks.in/programmes",
    },
  ],
};

const WRAP = "max-w-[1200px] mx-auto px-4 md:px-10";
const SECTION = "border-t border-rule py-9 md:py-12";
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

function WhatsAppButton({ cta }: { cta: string }) {
  return (
    <a
      href={CONTACT_LINK}
      data-cta={cta}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BTN} whitespace-nowrap`}
    >
      <WhatsAppIcon />
      WhatsApp Premraj
    </a>
  );
}

export default function SmallBusinessConsultingPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className={`${WRAP} pt-5 text-[13px]`}>
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="text-light transition-colors hover:text-red">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-rule">›</li>
          <li>
            <Link href="/services" className="text-light transition-colors hover:text-red">
              Services
            </Link>
          </li>
          <li aria-hidden="true" className="text-rule">›</li>
          <li className="text-mid" aria-current="page">
            Small Business Coach &amp; Consultant
          </li>
        </ol>
      </nav>

      {/* 1. HERO + 2. STATS */}
      <section id="hero" className="pt-6 pb-8 md:pt-8 md:pb-10">
        <div className={WRAP}>
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-start md:gap-10">
            <div className="md:basis-[48%]">
              <h1 className="text-[18px] leading-[1.3] md:text-[22px] font-bold text-ink mb-4">
                Small business coach and consultant{" "}
                <span className="text-red">for owners across India</span>
              </h1>
              <p className="text-[38px] leading-[1.1] md:text-[56px] md:leading-[1.08] font-bold tracking-tight-1 text-ink mb-6">
                You work every day. So why does the business{" "}
                <span className="text-red">feel stuck?</span>
              </p>
              <p className="text-[16px] md:text-[18px] italic text-mid leading-[1.65] mb-8">
                A small business coach works one-to-one with you, the owner, on
                the problem holding the business back, then helps carry out the
                fix. Simpleworks Consulting does this online across India with
                Premraj Menon: start with a one-problem Simple Diagnostic, or
                ongoing advice through the Simple Advisory.
              </p>
              <div className="mb-3">
                <WhatsAppButton cta="hero" />
              </div>
              <p className="text-[14px] text-light mb-7">
                Premraj replies personally. No pitch, no commitment.
              </p>
              <div className="flex items-center gap-4 border-t border-rule pt-5 mb-4">
                <Image
                  src="/images/landing/prem-menon-portrait.webp"
                  alt="Premraj Menon"
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-full object-cover object-top"
                />
                <div className="text-[14px] leading-snug text-light">
                  <p className="text-[16px] font-bold text-ink">Premraj Menon</p>
                  <p>Founder, Simpleworks Consulting</p>
                  <p>Online across India · Based in Bangalore</p>
                </div>
              </div>
              <p className="text-[14px] text-light">
                For you, if your business is above about ₹10 crore and your team
                can act on the advice.
              </p>
            </div>
            <div className="md:basis-[52%]">
              <Image
                src="/images/small-business/small-business-owner-online-coaching.webp"
                alt="Illustration of a small business owner on a video call from his shop"
                width={1152}
                height={860}
                sizes="(min-width: 1200px) 600px, (min-width: 768px) 52vw, 100vw"
                className="w-full h-auto"
                priority
                fetchPriority="high"
              />
            </div>
          </div>

          <ul className="mt-10 md:mt-12 grid grid-cols-1 border-y border-rule md:grid-cols-3">
            {STATS.map((s, i) => (
              <li
                key={s.num}
                className={`py-6 md:pr-8 border-rule ${i > 0 ? "border-t md:border-t-0" : ""}`}
              >
                <p className="whitespace-nowrap text-[40px] md:text-[44px] font-bold text-red tracking-tight-1 leading-none mb-3">
                  {s.num}
                </p>
                <p className="text-[14px] text-light leading-snug max-w-[280px]">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. IS THIS FOR YOU? */}
      <section id="recognise" className={SECTION}>
        <div className={WRAP}>
          <div className="mb-6 md:mb-8">
            <Eyebrow>Is this for you?</Eyebrow>
            <h2 className={H2}>
              Recognise <span className="text-red">any of these?</span>
            </h2>
          </div>
          <ul className="max-w-[860px] border-t border-rule mb-8">
            {QUOTES.map((quote) => (
              <li
                key={quote}
                className="flex items-start gap-4 border-b border-rule py-5"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.65em] h-[9px] w-[9px] shrink-0 rounded-full bg-red"
                />
                <p className="text-[18px] md:text-[20px] italic leading-[1.45] text-ink">
                  {quote}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <p className={BODY}>Sound familiar? Tell Premraj which one.</p>
            <WhatsAppButton cta="recognise" />
          </div>
        </div>
      </section>

      {/* 4. WHY IT KEEPS HAPPENING */}
      <section id="why-it-happens" className={SECTION}>
        <div className={WRAP}>
          <div className="mb-6 md:mb-8 max-w-[860px]">
            <Eyebrow>Why it keeps happening</Eyebrow>
            <h2 className={H2}>
              It is rarely a lack of effort.{" "}
              <span className="text-red">It is usually one of three things.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {CAUSES.map((c) => (
              <div key={c.title} className="border-t border-ink pt-5">
                <h3 className="text-[20px] font-bold leading-[1.3] text-ink mb-2">
                  {c.title}
                </h3>
                <p className="text-[16px] text-mid leading-[1.7]">{c.body}</p>
              </div>
            ))}
          </div>
          <p className={`${BODY} mt-8 max-w-[720px]`}>
            None of this is a flaw in you. It is what happens to a business that
            has outgrown your memory and time.
          </p>
        </div>
      </section>

      {/* 5. WHAT COACHING LOOKS LIKE IN PRACTICE */}
      <section id="practice" className={SECTION}>
        <div className={WRAP}>
          <div className="mb-6 md:mb-8">
            <Eyebrow>In practice</Eyebrow>
            <h2 className={H2}>
              What small business growth coaching{" "}
              <span className="text-red">looks like in practice</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-10 border-t border-rule md:grid-cols-2">
            {PRACTICE.map((p) => (
              <div key={p.title} className="border-b border-rule py-6">
                <h3 className="text-[20px] font-bold leading-[1.3] text-ink mb-2">
                  {p.title}
                </h3>
                <p className="text-[16px] text-mid leading-[1.7]">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-12">
            <h2 className="text-[24px] md:text-[28px] font-bold leading-[1.25] tracking-tight-1 text-ink mb-3">
              Three areas we work in{" "}
              <span className="text-red">for small businesses</span>
            </h2>
            <p className={`${BODY} max-w-[720px] mb-8`}>
              Small business consulting at Simpleworks Consulting is not a
              menu. Strategy, growth, and execution connect to each other — and
              a change in one always affects the other two.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
              {AREAS.map((a) => (
                <div key={a.title} className="border-t border-rule pt-5">
                  <h3 className="text-[18px] font-bold leading-[1.3] text-ink mb-2">
                    {a.title}
                  </h3>
                  <p className="text-[15px] text-mid leading-[1.7]">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MENTOR, COACH OR CONSULTANT */}
      <section id="choosing" className={SECTION}>
        <div className={WRAP}>
          <div className="mb-6 md:mb-8 max-w-[860px]">
            <Eyebrow>Choosing help</Eyebrow>
            <h2 className={`${H2} mb-5`}>
              Business mentor, coach, or consultant:{" "}
              <span className="text-red">which one does your business need?</span>
            </h2>
            <p className={BODY}>
              Most founders use these three terms interchangeably. They are not
              the same — and choosing the wrong one costs time your business
              doesn&rsquo;t have.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {HELP_TYPES.map((h) => (
              <div key={h.title} className="border-t border-ink pt-5">
                <h3 className="text-[20px] font-bold leading-[1.3] text-ink mb-2">
                  {h.title}
                </h3>
                <p className="text-[16px] text-mid leading-[1.7]">{h.body}</p>
              </div>
            ))}
          </div>
          <p className={`${BODY} mt-8 max-w-[720px]`}>
            You will probably need some of each: someone to find the real
            problem, and someone to keep you on it. That is how Simpleworks
            Consulting works. The Simple Diagnostic finds the problem. The
            Simple Advisory keeps you moving on the fix.
          </p>
        </div>
      </section>

      {/* 7. WHAT CHANGES */}
      <section id="changes" className={SECTION}>
        <div className={WRAP}>
          <div className="mb-6 md:mb-8">
            <Eyebrow>What changes</Eyebrow>
            <h2 className={H2}>
              What&rsquo;s different{" "}
              <span className="text-red">after we work together.</span>
            </h2>
          </div>
          <div className="grid gap-8 border-t border-ink pt-6 md:grid-cols-[5fr_7fr] md:gap-14">
            <div>
              <h3 className="text-[26px] md:text-[30px] font-bold leading-[1.2] tracking-tight-1 text-ink mb-3">
                Flat for two years, two clients carrying the business.
              </h3>
              <p className="text-[14px] text-light">
                Automobile components manufacturer · Bangalore
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {STORY_BLOCKS.map((block) => (
                <div key={block.label}>
                  <p
                    className={`${LABEL} mb-2 ${block.strong ? "!text-red" : ""}`}
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
        </div>
      </section>

      {/* 8. PREMRAJ (shared bio) */}
      <PremrajBio
        sectionClassName={SECTION}
        ctaHref={CONTACT_LINK}
        portraitAlt="Premraj Menon"
        subLine="Premraj Menon · Founder, Simpleworks Consulting · Online across India · Based in Bangalore"
        lead={
          <>
            Premraj Menon spent about 30 years in large companies, rising to COO
            with full P&amp;L, and nearly 10 years inside MSMEs, as co-founder
            and on the management team. He now works one-to-one with small
            business owners, online across India.
          </>
        }
        meaning={
          <>
            What that means for you: boardroom discipline on strategy, P&amp;L
            and review, applied to a business where you, the owner, sign every
            cheque.
          </>
        }
      />

      {/* 9. WHAT HAPPENS AFTER YOU MESSAGE */}
      <section id="next-step" className={SECTION}>
        <div className={WRAP}>
          <div className="mb-6 md:mb-8">
            <Eyebrow>Your first step</Eyebrow>
            <h2 className={H2}>
              What happens <span className="text-red">after you message.</span>
            </h2>
          </div>
          <ol className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 mb-8">
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
              If it&rsquo;s a fit, you would most likely start with the Simple
              Diagnostic: one problem you name, worked through in half a day.{" "}
              <strong className="font-bold text-ink">
                You pay after the engagement, not before.
              </strong>{" "}
              Premraj will sign an NDA before you share your numbers.
            </p>
            <div className="shrink-0">
              <WhatsAppButton cta="next-step" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. FEES */}
      <section id="fees" className={SECTION}>
        <div className={WRAP}>
          <div className="max-w-[720px] mb-6 md:mb-8">
            <Eyebrow>Fees</Eyebrow>
            <h2 className={`${H2} mb-5`}>
              What small business coaching <span className="text-red">costs.</span>
            </h2>
            <p className={BODY}>
              Premraj Menon&rsquo;s fees are fixed and published. No hourly
              billing.
            </p>
          </div>

          <div className="grid gap-6 border-t border-ink py-6 md:grid-cols-[1fr_1fr_1.4fr] md:gap-10">
            <div>
              <p className={`${LABEL} mb-2`}>Start here</p>
              <h3 className="text-[24px] font-bold leading-[1.25] text-red">
                The Simple Diagnostic
              </h3>
            </div>
            <div>
              <p className="text-[32px] font-bold leading-none text-ink mb-2 [font-variant-numeric:tabular-nums]">
                {price("diagnostic")}
              </p>
              <p className="text-[14px] text-light">Half a day · Online</p>
            </div>
            <div>
              <p className={`${BODY} mb-4`}>
                One problem you name. A three-hour working session, split into
                two or three shorter sessions online, a written brief and a
                one-hour walkthrough.{" "}
                <strong className="font-bold text-ink">
                  Paid after the engagement.
                </strong>
              </p>
              <Link href="/business-growth-review" className={`${TEXT_LINK} text-[15px]`}>
                See what the Diagnostic covers →
              </Link>
            </div>
          </div>

          <div className="grid gap-6 border-t border-ink border-b border-b-rule py-6 md:grid-cols-[1fr_1fr_1.4fr] md:gap-10">
            <div>
              <p className={`${LABEL} mb-2`}>Then, ongoing</p>
              <h3 className="text-[24px] font-bold leading-[1.25] text-red">
                The Simple Advisory
              </h3>
            </div>
            <div>
              <p className="mb-2 whitespace-nowrap [font-variant-numeric:tabular-nums]">
                <span className="text-[32px] font-bold leading-none text-ink">
                  {price("advisory")}
                </span>{" "}
                <span className="text-[16px] text-mid">/ month</span>
              </p>
              <p className="text-[14px] text-light">
                Online · Three-month minimum
              </p>
            </div>
            <div>
              <p className={BODY}>
                A senior sounding board, online. Two 90-minute sessions a month
                on your agenda and a short written summary after each. Paid at
                the end of each month. You can start here without a Diagnostic.
              </p>
            </div>
          </div>
          <p className="mt-5 text-[15px] text-mid">
            Fixed fees. No hourly billing. Each stage is agreed on its own.
          </p>
        </div>
      </section>

      {/* 11. FIT */}
      <section id="fit" className={SECTION}>
        <div className={WRAP}>
          <h2 className={`${H2} mb-6 md:mb-8`}>
            Is this <span className="text-red">right for your business?</span>
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            <div className="border-t border-ink pt-5">
              <h3 className="text-[20px] font-bold leading-[1.3] text-ink mb-3">
                A good fit
              </h3>
              <ul className="list-disc pl-5 text-[16px] text-mid leading-[1.7] marker:text-light">
                {GOOD_FIT.map((line) => (
                  <li key={line} className="mb-2">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-ink pt-5">
              <h3 className="text-[20px] font-bold leading-[1.3] text-ink mb-3">
                Probably not yet
              </h3>
              <ul className="list-disc pl-5 text-[16px] text-mid leading-[1.7] marker:text-light">
                <li className="mb-2">
                  If your business is smaller: the articles on the{" "}
                  <Link href="/blog" className={TEXT_LINK}>
                    blog
                  </Link>{" "}
                  are the place to start.
                </li>
                <li className="mb-2">
                  If you run a startup:{" "}
                  <Link href="/startup-mentor-bengaluru" className={TEXT_LINK}>
                    see startup mentoring →
                  </Link>
                </li>
                <li className="mb-2">
                  If you want someone on site every week:{" "}
                  <Link href="/programmes" className={TEXT_LINK}>
                    see Programmes →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section id="faq" className={SECTION}>
        <div className={WRAP}>
          <div className="mb-6 md:mb-8 max-w-[860px]">
            <Eyebrow>Frequently asked questions</Eyebrow>
            <h2 className={H2}>
              Questions small business owners ask{" "}
              <span className="text-red">before starting.</span>
            </h2>
          </div>
          <div className="max-w-[860px] border-b border-rule">
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
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CLOSING */}
      <section id="close" className="border-t border-rule py-10 md:py-14">
        <div className={WRAP}>
          <div className="max-w-[760px]">
            <Eyebrow>Next step</Eyebrow>
            <h2 className={`${H2} mb-5`}>
              Start with <span className="text-red">an introductory call.</span>
            </h2>
            <p className={`${BODY} mb-8`}>
              You probably know something is not working, but not what to fix
              first. A short WhatsApp message is enough to start. Premraj
              replies himself.
            </p>
            <WhatsAppButton cta="final-cta" />
            <p className="mt-6 text-[14px] text-light">
              Or call{" "}
              <a href="tel:+919036099000" className={TEXT_LINK}>
                {FACTS.phone}
              </a>{" "}
              ·{" "}
              <a href={`mailto:${FACTS.email}`} className={TEXT_LINK}>
                {FACTS.email}
              </a>{" "}
              · Online across India · Based in Bangalore
            </p>
          </div>
        </div>
      </section>

      {/* 14. READ MORE */}
      <section id="read" className={`${SECTION} border-b`}>
        <div className={WRAP}>
          <div className="mb-6 md:mb-8">
            <Eyebrow>Not ready to talk yet?</Eyebrow>
            <h2 className={H2}>
              Read first, <span className="text-red">talk when you are ready.</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {READING.map((post) => (
              <article key={post.href} className="flex flex-col border-t border-ink pt-5">
                <h3 className="text-[17px] md:text-[18px] font-bold leading-snug mb-4">
                  <Link href={post.href} className="text-ink hover:text-red">
                    {post.title}
                  </Link>
                </h3>
                <Link
                  href={post.href}
                  className="mt-auto text-[14px] text-red hover:underline"
                  aria-hidden="true"
                  tabIndex={-1}
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

      {/* FLOATING WHATSAPP (phones only) */}
      <FloatingWhatsApp href={CONTACT_LINK} heroId="hero" hideWhileVisibleId="close" />
    </main>
  );
}
