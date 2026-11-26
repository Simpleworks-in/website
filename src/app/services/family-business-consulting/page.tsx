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

// Conversion page, rebuilt 26 Nov 2026 from family-business-consulting-page-audit.md
// (mock: "Family Business Page Mock" v5). Scope (Prem): leadership succession
// only. Shares, wills, settlements and tax are for the family's CA and lawyer.
// One objective: the visitor clicks WhatsApp Premraj.

const PAGE_URL = "https://www.simpleworks.in/services/family-business-consulting";
const TITLE = "Family Business Succession Planning in India | Simpleworks Consulting";
const DESCRIPTION =
  "Family business consultant for owners across India. Plan the succession, prepare the next generation and separate family from management, with Premraj Menon.";

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
  { num: "1-to-1", label: "in person in Bangalore or online, no junior team" },
];

const QUOTES: { text: string; successor?: boolean }[] = [
  { text: "My son joined three years ago. The staff still come to me for everything." },
  { text: "I don’t know what job to give my daughter in the business." },
  { text: "Two of my children work here, and nobody knows who decides what." },
  { text: "I want to step back. Every time I try, something goes wrong." },
  { text: "We talk about the business at the dinner table, and nothing gets decided." },
  { text: "I joined my father’s business. I have a title, but no real say.", successor: true },
];

const CAUSES = [
  {
    title: "Family and business share one room",
    body: "The same people own the business, run it and sit at the family table. So business decisions get mixed up with family feelings, and a disagreement at home shows up at work the next morning.",
  },
  {
    title: "The handover is treated as an event",
    body: "Succession is something that will happen “when the time comes”. So the next generation gets a title long before it gets a real role, and the handover arrives with no preparation.",
  },
  {
    title: "Letting go feels like losing control",
    body: "Writing down roles, or giving the next generation real decisions, can feel like admitting the old way stopped working. So it waits until it becomes urgent.",
  },
];

const PRACTICE = [
  {
    title: "Preparing the second generation to actually lead",
    body: "Most successors inherit a title and a business at the same time, with no real preparation for either. The work starts with the skills, decisions and relationships the role will need, before the role arrives.",
  },
  {
    title: "Succession planning: designing the handover before it becomes urgent",
    body: "Plan the handover years before it is due, while there is still time to do it well, and with the family agreed on what the next chapter looks like.",
  },
  {
    title: "Building a business that runs beyond the founder",
    body: "Written roles, clear decision limits and a weekly review, so the business runs the same whether the founder is in the room or not.",
  },
  {
    title: "Setting the direction for the next chapter",
    body: "The strategy that built the business may not be the one that grows it. The next generation helps set the direction, and presents it.",
  },
];

const RUNGS = [
  {
    takes: "One clear role: a written job, a reporting line and targets, like any manager",
    letsGo: "Treating them as “the owner’s son or daughter” in front of the team",
  },
  {
    takes: "Day-to-day decisions in one department, within agreed limits",
    letsGo: "Overruling those decisions in front of the team",
  },
  {
    takes: "A set of key customers and suppliers, introduced by you in person",
    letsGo: "Being the only one those customers call",
  },
  {
    takes: "The team in that area: hiring, reviews and who does what",
    letsGo: "The final word on people in that area",
  },
  {
    takes: "Money: the monthly numbers, the bank, pricing within limits",
    letsGo: "Signing every cheque",
  },
  {
    takes: "Direction: next year’s plan, written and presented by them",
    letsGo:
      "Day-to-day control. You become chairman, advisor and mentor, focused on review, governance and capital allocation",
  },
];

const STORY_BLOCKS = [
  {
    label: "The problem",
    text: "Almost every decision ran through the owner. By his own count of the minutes, his day was over 120% full, and he took 12 of the 21 regular decisions. His son had just joined the business, with no defined role.",
    strong: false,
  },
  {
    label: "What we did",
    text: "Wrote down who decides what, with limits for each person, and moved six pieces of work to people who had time. For the son, the first rungs of the twin ladder: a rotation through every department, learning from each department head, before taking one department of his own.",
    strong: false,
  },
  {
    label: "What’s changed so far",
    text: "The owner’s day is coming down from over 120% to about 100%, and the decisions he takes himself from 12 to 7. His son has worked through every department and is now taking charge of one, responsible for its results.",
    strong: true,
  },
];

const NEXT_STEPS = [
  "You send a short WhatsApp message.",
  "Premraj replies himself.",
  "You talk it through. No pitch, no commitment.",
];

const GOOD_FIT = [
  "Your son or daughter has joined the business, or is about to",
  "You want each family member in the business to have a clear role",
  "You want to step back without the business slipping",
  "The family is ready to talk about roles openly",
];

const FAQS = [
  {
    q: "What does a family business consultant do?",
    a: "A family business consultant works with the owner and the next generation on how the business is run and handed over: who does what, who decides what, and how decisions move from one generation to the next. At Simpleworks Consulting, Premraj Menon does this in person in Bangalore and online across India.",
  },
  {
    q: "What is family business succession planning?",
    a: "It is planning how the running of the business passes to the next generation: their role, their decisions and their place with the team and customers, step by step. We work on that side of succession. The ownership side (shares, wills, settlements) is for your CA and lawyer.",
  },
  {
    q: "Do you advise on shares, wills or how to divide the business?",
    a: "No. That is work for your CA and lawyer, and we are happy to work alongside them. We work on the business side of the handover: bringing the next generation in, giving them clear roles, and moving decisions across one step at a time.",
  },
  {
    q: "How do you bring the second generation into the business?",
    a: "Usually in two moves. First, time across the departments, learning from each department head, so they understand how the business actually works. Then one area of their own, with a written role, clear limits and targets, and responsibility for its results. From there, decisions move across one rung at a time.",
  },
  {
    q: "What is the twin ladder?",
    a: "A simple way to run the handover. You step down your ladder one rung at a time, and your successor steps up theirs one rung at a time. At each rung one area of the business moves across, such as a department, key customers, the team or the money. The next rung starts only when the last one holds. At the last rung you become chairman, advisor and mentor, focused on review, governance and capital allocation.",
  },
  {
    q: "Is this in person or online?",
    a: "Both. In Bangalore, Premraj works in person, on site with your family and team. Elsewhere in India, the Simple Diagnostic and the Simple Advisory run online by video call.",
  },
  {
    q: "How much does it cost?",
    a: `Fees are fixed and published. The Simple Diagnostic is ${price("diagnostic")}, paid after the engagement. In Bangalore, the Simple Reset is ${price("reset30")} for 30 days or ${price("reset60")} for 60 days, and the Simple Counsel is ${price("counsel")} a month in person. Online, the Simple Advisory is ${price("advisory")} a month, paid at the end of each month. Both monthly programmes have a three-month minimum. There is no hourly billing.`,
  },
  {
    q: "Is Simpleworks Consulting a mediator or a therapist for family conflict?",
    a: "Neither. Simpleworks Consulting is a management consultant who understands the family dimension of business problems, and knows when to bring in a mediator or therapist if the situation calls for it. We do help families have the business conversations they have been avoiding, in a structured setting where decisions can be made and acted on.",
  },
  {
    q: "At what stage should a family business engage a consultant?",
    a: "Earlier than most families do. The best time to plan the handover is years before it becomes necessary, while the business is doing well rather than in a crisis. We work with families who are planning ahead and with families facing an immediate situation. The earlier it starts, the more options remain.",
  },
  {
    q: "What if not all family members agree to engage a consultant?",
    a: "It is common. The founding generation may see the need and the next generation may resist, or the other way round. We start with whoever in the family is ready for the conversation. You can begin before everyone agrees; getting the family to agree is part of the work.",
  },
  {
    q: "What happens after I send a WhatsApp message?",
    a: "Premraj replies himself. You talk it through, with no pitch and no commitment. He will sign an NDA before you share your numbers.",
  },
];

const READING = [
  {
    title:
      "How Do You Prepare a Second-Generation Leader to Take Over a Family Business? A Practical Succession Plan",
    href: "/blog/how-do-you-prepare-a-second-generation-leader-to-take-over-a-family-business-a-practical-succession-plan",
  },
  {
    title:
      "Is Your Family Business Ready for the Next Generation? 5 Hard Questions Every Owner Must Answer",
    href: "/blog/is-your-family-business-ready-for-the-next-generation-5-hard-questions-every-owner-must-answer",
  },
  {
    title: "Why Family MSMEs Must Separate Ownership from Management to Scale",
    href: "/blog/why-family-msm-es-must-separate-ownership-from-management-to-scale",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.simpleworks.in" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.simpleworks.in/services" },
    { "@type": "ListItem", position: 3, name: "Family Business Succession Planning", item: PAGE_URL },
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

const monthly = (amount: number) => ({
  "@type": "UnitPriceSpecification",
  price: String(amount),
  priceCurrency: "INR",
  unitText: "MONTH",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Family business succession planning",
  serviceType: "Family business consulting",
  url: PAGE_URL,
  provider: {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: "Simpleworks Consulting",
    url: "https://www.simpleworks.in",
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
        "One problem you name: a three-hour working session, a written brief and a one-hour walkthrough. In person in Bangalore or online. Paid after the engagement.",
      price: String(PRICES.diagnostic),
      priceCurrency: "INR",
      url: "https://www.simpleworks.in/business-growth-review",
    },
    {
      "@type": "Offer",
      name: "The Simple Reset (30 days)",
      description: "On site in Bangalore, one visit a week.",
      price: String(PRICES.reset30),
      priceCurrency: "INR",
      url: "https://www.simpleworks.in/programmes",
    },
    {
      "@type": "Offer",
      name: "The Simple Reset (60 days)",
      description: "On site in Bangalore, one visit a week.",
      price: String(PRICES.reset60),
      priceCurrency: "INR",
      url: "https://www.simpleworks.in/programmes",
    },
    {
      "@type": "Offer",
      name: "The Simple Counsel",
      description:
        "In person in Bangalore. Two sessions a month, WhatsApp access and a quarterly review. Three-month minimum.",
      priceCurrency: "INR",
      priceSpecification: monthly(PRICES.counsel),
      url: "https://www.simpleworks.in/programmes",
    },
    {
      "@type": "Offer",
      name: "The Simple Advisory",
      description:
        "Online across India. Two 90-minute sessions a month with a short written summary after each. Three-month minimum.",
      priceCurrency: "INR",
      priceSpecification: monthly(PRICES.advisory),
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

function FeeRow({
  label,
  name,
  amount,
  suffix,
  caption,
  children,
}: {
  label: string;
  name: string;
  amount: string;
  suffix?: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-ink py-6 md:grid-cols-[1fr_1fr_1.4fr] md:gap-10">
      <div>
        <p className={`${LABEL} mb-2`}>{label}</p>
        <h3 className="text-[24px] font-bold leading-[1.25] text-red">{name}</h3>
      </div>
      <div>
        <p className="mb-2 whitespace-nowrap [font-variant-numeric:tabular-nums]">
          <span className="text-[32px] font-bold leading-none text-ink">{amount}</span>
          {suffix ? <span className="text-[16px] text-mid"> {suffix}</span> : null}
        </p>
        <p className="text-[14px] text-light">{caption}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}

// Two ladders: the owner steps down one rung at a time, the successor steps up.
// Owner's rungs count down from the top, the successor's count up from the bottom.
function TwinLadder() {
  const rungYs = [65, 107, 149, 191, 233, 275];
  return (
    <svg
      viewBox="0 0 520 330"
      role="img"
      aria-labelledby="twin-ladder-title"
      className="mx-auto block h-auto w-full max-w-[520px]"
    >
      <title id="twin-ladder-title">
        Two ladders: the owner steps down one rung at a time while the successor
        steps up one rung at a time
      </title>
      <g stroke="#0F0F0F" strokeWidth="2" fill="none">
        <line x1="110" y1="40" x2="110" y2="300" />
        <line x1="190" y1="40" x2="190" y2="300" />
        <line x1="330" y1="40" x2="330" y2="300" />
        <line x1="410" y1="40" x2="410" y2="300" />
      </g>
      <g stroke="#0F0F0F" strokeWidth="1.5">
        {rungYs.map((y) => (
          <g key={y}>
            <line x1="110" y1={y} x2="190" y2={y} />
            <line x1="330" y1={y} x2="410" y2={y} />
          </g>
        ))}
      </g>
      <g fontSize="13" fill="#878787" textAnchor="end">
        {rungYs.map((y, i) => (
          <text key={y} x="98" y={y + 4}>
            {i + 1}
          </text>
        ))}
      </g>
      <g fontSize="13" fill="#878787">
        {rungYs.map((y, i) => (
          <text key={y} x="422" y={y + 4}>
            {6 - i}
          </text>
        ))}
      </g>
      <g stroke="#464646" strokeWidth="1.5" fill="none">
        <line x1="60" y1="60" x2="60" y2="270" />
        <polyline points="53,260 60,272 67,260" />
      </g>
      <g stroke="#ED1C24" strokeWidth="1.5" fill="none">
        <line x1="460" y1="280" x2="460" y2="70" />
        <polyline points="453,80 460,68 467,80" />
      </g>
      <circle cx="150" cy="65" r="7" fill="#464646" />
      <circle cx="370" cy="275" r="7" fill="#ED1C24" />
      <g fontSize="15" fontWeight="700" textAnchor="middle" fill="#0F0F0F">
        <text x="150" y="24">You</text>
        <text x="370" y="24">Your successor</text>
      </g>
      <g fontSize="13" textAnchor="middle">
        <text x="150" y="322" fill="#464646">One rung down at a time</text>
        <text x="370" y="322" fill="#ED1C24">One rung up at a time</text>
      </g>
      <g fontSize="12" textAnchor="middle" fill="#878787">
        <text x="260" y="165">one area</text>
        <text x="260" y="181">moves across</text>
      </g>
      <g stroke="#CDCDCD" strokeWidth="1" strokeDasharray="3 4">
        <line x1="200" y1="172" x2="225" y2="172" />
        <line x1="295" y1="172" x2="320" y2="172" />
      </g>
    </svg>
  );
}

export default function FamilyBusinessConsultingPage() {
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
            Family Business Succession Planning
          </li>
        </ol>
      </nav>

      {/* 1. HERO + 2. STATS */}
      <section id="hero" className="pt-6 pb-8 md:pt-8 md:pb-10">
        <div className={WRAP}>
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-start md:gap-10">
            <div className="md:basis-[48%]">
              <h1 className="text-[16px] leading-[1.35] md:text-[18px] font-bold text-ink mb-3">
                Family business consultant{" "}
                <span className="text-red">for succession and the next generation</span>
              </h1>
              <p className="text-[38px] leading-[1.1] md:text-[56px] md:leading-[1.08] font-bold tracking-tight-1 text-ink mb-6">
                The business built by one generation{" "}
                <span className="text-red">must be led by the next.</span>
              </p>
              <p className="text-[16px] md:text-[18px] italic text-mid leading-[1.65] mb-8">
                Family business succession planning on the business side:
                bringing your son or daughter into the business, giving them a
                clear role, and handing over decisions one step at a time. With
                Premraj Menon, in person in Bangalore and online across India.
                Shares, wills and tax stay with your CA and lawyer.
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
                  <p>In person in Bangalore · Online across India</p>
                </div>
              </div>
              <p className="text-[14px] text-light">
                For family businesses where the next generation has joined, or
                is about to.
              </p>
            </div>
            <div className="md:basis-[52%]">
              <Image
                src="/images/family-business/family-business-father-son-factory-floor.webp"
                alt="Illustration of a family business owner showing his son around the factory floor"
                width={1152}
                height={860}
                sizes="(min-width: 1200px) 600px, (min-width: 768px) 52vw, 100vw"
                className="w-full h-auto"
                priority
                fetchPriority="high"
              />
            </div>
          </div>

          <ul className="mt-6 md:mt-7 grid grid-cols-1 border-y border-rule md:grid-cols-3">
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
                key={quote.text}
                className="flex items-start gap-4 border-b border-rule py-5"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.65em] h-[9px] w-[9px] shrink-0 rounded-full bg-red"
                />
                <div>
                  <p className="text-[18px] md:text-[20px] italic leading-[1.45] text-ink">
                    {quote.text}
                  </p>
                  {quote.successor ? (
                    <p className="mt-1 text-[13px] text-light">The successor&rsquo;s side</p>
                  ) : null}
                </div>
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
              It is rarely about the people.{" "}
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
            None of this is a failure of the family. It is what happens when a
            business grows faster than the way it is run.
          </p>
        </div>
      </section>

      {/* 5. IN PRACTICE + TWIN LADDER */}
      <section id="practice" className={SECTION}>
        <div className={WRAP}>
          <div className="mb-6 md:mb-8 max-w-[860px]">
            <Eyebrow>In practice</Eyebrow>
            <h2 className={`${H2} mb-5`}>
              What family business{" "}
              <span className="text-red">succession planning looks like in practice</span>
            </h2>
            <p className={BODY}>
              We work on the business side of the handover: people, roles and
              decisions. Who gets which shares, wills and family settlements are
              for your CA and lawyer.
            </p>
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

          <div id="twin-ladder" className="mt-10 md:mt-12 border-t border-ink pt-6">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_1.1fr] md:gap-10">
              <div>
                <Eyebrow>How the handover works</Eyebrow>
                <h3 className="text-[24px] md:text-[28px] font-bold leading-[1.25] text-ink mb-3">
                  The twin ladder
                </h3>
                <p className={BODY}>
                  Picture two ladders side by side. You step down yours one
                  rung at a time. Your son or daughter steps up theirs, one
                  rung at a time. At every rung, one area of the business moves
                  across, so nothing is held by both of you and nothing is held
                  by neither.
                </p>
              </div>
              <TwinLadder />
            </div>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr>
                    <th className={`${LABEL} pb-3 pr-5 font-light`}>Rung</th>
                    <th className={`${LABEL} pb-3 pr-5 font-light`}>Your successor takes</th>
                    <th className={`${LABEL} pb-3 font-light`}>You let go of</th>
                  </tr>
                </thead>
                <tbody>
                  {RUNGS.map((r, i) => (
                    <tr key={r.takes} className="border-t border-rule align-top last:border-b">
                      <td className="w-16 py-4 pr-5 text-[18px] font-bold text-red [font-variant-numeric:tabular-nums]">
                        {i + 1}
                      </td>
                      <td className="py-4 pr-5 text-[15px] leading-[1.55] text-ink">{r.takes}</td>
                      <td className="py-4 text-[15px] leading-[1.55] text-mid">{r.letsGo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={`${BODY} mt-5 max-w-[760px]`}>
              How a rung moves: you both agree what &ldquo;done&rdquo; looks like
              for that rung, you review it together with Premraj, and the next
              rung starts only when the last one holds. The pace is set by your
              successor&rsquo;s readiness, not by a calendar.
            </p>
          </div>
        </div>
      </section>

      {/* 6. WHAT CHANGES */}
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
                Everything ran through the owner. His son had just joined.
              </h3>
              <p className="text-[14px] text-light">
                Family-run bulk chemical manufacturer · Salem
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {STORY_BLOCKS.map((block) => (
                <div key={block.label}>
                  <p className={`${LABEL} mb-2 ${block.strong ? "!text-red" : ""}`}>
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

      {/* 7. PREMRAJ (shared bio) */}
      <PremrajBio
        sectionClassName={SECTION}
        ctaHref={CONTACT_LINK}
        portraitAlt="Premraj Menon"
        subLine="Premraj Menon · Founder, Simpleworks Consulting · In person in Bangalore · Online across India"
        lead={
          <>
            Premraj Menon spent about 30 years in large companies, rising to COO
            with full P&amp;L, and nearly 10 years inside MSMEs, as co-founder
            and on the management team. He now works with family business owners
            and the next generation, in person in Bangalore and online across
            India.
          </>
        }
        meaning={
          <>
            What that means for you: someone outside the family who has run
            large teams and worked inside owner-run businesses, and who can talk
            to both generations at the same table.
          </>
        }
      />

      {/* 8. WHAT HAPPENS AFTER YOU MESSAGE */}
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
              If it&rsquo;s a fit, most families start with the Simple
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

      {/* 9. FEES */}
      <section id="fees" className={SECTION}>
        <div className={WRAP}>
          <div className="max-w-[720px] mb-6 md:mb-8">
            <Eyebrow>Fees</Eyebrow>
            <h2 className={`${H2} mb-5`}>
              What it <span className="text-red">costs.</span>
            </h2>
            <p className={BODY}>
              Premraj Menon&rsquo;s fees are fixed and published. No hourly
              billing.
            </p>
          </div>

          <FeeRow
            label="Start here"
            name="The Simple Diagnostic"
            amount={price("diagnostic")}
            caption="Half a day · In person in Bangalore or online"
          >
            <p className={`${BODY} mb-4`}>
              One problem you name, such as what role to give your son or
              daughter first. A three-hour working session (two or three shorter
              sessions online), a written brief and a one-hour walkthrough.{" "}
              <strong className="font-bold text-ink">Paid after the engagement.</strong>
            </p>
            <Link href="/business-growth-review" className={`${TEXT_LINK} text-[15px]`}>
              See what the Diagnostic covers →
            </Link>
          </FeeRow>

          <p className="mt-10 mb-1 text-[19px] font-bold text-ink">
            In person, Bangalore{" "}
            <span className="ml-2 text-[14px] font-normal text-light">
              On site with your family and team
            </span>
          </p>
          <FeeRow
            label="Hands-on"
            name="The Simple Reset"
            amount={price("reset30")}
            caption={`30 days · ${price("reset60")} for 60 days · One visit a week`}
          >
            <p className={BODY}>
              Four weeks to work out what to do, and four more to make sure it
              happens. For the handover: written roles and decision limits, and
              the first rungs of the twin ladder in place.
            </p>
          </FeeRow>
          <FeeRow
            label="Ongoing"
            name="The Simple Counsel"
            amount={price("counsel")}
            suffix="/ month"
            caption="In person · Three-month minimum"
          >
            <p className={BODY}>
              A senior mentor in person in Bangalore. Two sessions a month on your
              agenda, WhatsApp access for live decisions, and a quarterly review
              with the family members in the business.
            </p>
          </FeeRow>

          <p className="mt-10 mb-1 text-[19px] font-bold text-ink">
            Online, across India{" "}
            <span className="ml-2 text-[14px] font-normal text-light">By video call</span>
          </p>
          <FeeRow
            label="Ongoing"
            name="The Simple Advisory"
            amount={price("advisory")}
            suffix="/ month"
            caption="Online · Three-month minimum"
          >
            <p className={BODY}>
              A senior sounding board, online. Two 90-minute sessions a month on
              your agenda and a short written summary after each. Paid at the end
              of each month. You can start here without a Diagnostic.
            </p>
          </FeeRow>
          <p className="border-t border-rule pt-5 text-[15px] text-mid">
            Fixed fees. No hourly billing. Each stage is agreed on its own.{" "}
            <Link href="/programmes" className={TEXT_LINK}>
              See Programmes →
            </Link>
          </p>
        </div>
      </section>

      {/* 10. FIT */}
      <section id="fit" className={SECTION}>
        <div className={WRAP}>
          <h2 className={`${H2} mb-6 md:mb-8`}>
            Is this right for <span className="text-red">your family business?</span>
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
                Probably not the right help
              </h3>
              <ul className="list-disc pl-5 text-[16px] text-mid leading-[1.7] marker:text-light">
                <li className="mb-2">
                  If you need advice on shares, wills or dividing the business:
                  that is work for your CA and lawyer
                </li>
                <li className="mb-2">
                  If the family needs a mediator before it can sit at one table
                </li>
                <li className="mb-2">
                  If you run a startup:{" "}
                  <Link href="/startup-mentor-bengaluru" className={TEXT_LINK}>
                    see startup mentoring →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section id="faq" className={SECTION}>
        <div className={WRAP}>
          <div className="mb-6 md:mb-8 max-w-[860px]">
            <Eyebrow>Frequently asked questions</Eyebrow>
            <h2 className={H2}>
              Questions families ask{" "}
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

      {/* 12. CLOSING */}
      <section id="close" className="border-t border-rule py-10 md:py-14">
        <div className={WRAP}>
          <div className="max-w-[760px]">
            <Eyebrow>Next step</Eyebrow>
            <h2 className={`${H2} mb-5`}>
              Start with <span className="text-red">an introductory call.</span>
            </h2>
            <p className={`${BODY} mb-8`}>
              Handover conversations are easier to start with someone outside
              the family. A short WhatsApp message is enough. Premraj replies
              himself.
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
              · In person in Bangalore · Online across India
            </p>
          </div>
        </div>
      </section>

      {/* 13. READ MORE */}
      <section id="read" className={`${SECTION} border-b`}>
        <div className={WRAP}>
          <div className="mb-6 md:mb-8">
            <Eyebrow>Not ready to talk yet?</Eyebrow>
            <h2 className={H2}>
              Read first, <span className="text-red">talk when you are ready.</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
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
