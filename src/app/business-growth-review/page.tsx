import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FACTS } from "../../../content/facts";

const URL = "https://www.simpleworks.in/business-growth-review";
const TITLE = "Revenue Not Growing? A Half-Day Growth Review | Simpleworks";
const DESCRIPTION =
  "Revenue stuck at the same level? A fixed-fee, half-day growth review for MSME owners in Bengaluru. Fixed fee of ₹25,000, written brief included.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: FACTS.orgName,
    type: "website",
  },
};

// Every CTA on this page goes to WhatsApp.
const CTA_HREF = `https://wa.me/${FACTS.whatsappNumber}?text=${encodeURIComponent(
  "Hi Prem, I'd like to book a growth review for my business.",
)}`;

const btn =
  "inline-block whitespace-nowrap rounded-[1px] border border-red bg-transparent px-9 py-[14px] font-serif text-[14px] text-red transition-colors hover:bg-red hover:text-white";
const eyebrow =
  "mb-4 text-[11px] font-light uppercase tracking-widest text-light md:text-[13px]";
const h2 =
  "mb-8 max-w-[760px] text-[28px] font-bold leading-[1.18] tracking-tight text-ink md:text-[36px]";
const h3 = "text-[20px] font-bold leading-[1.3] text-ink md:text-[24px]";
const body = "text-[16px] leading-[1.78] text-mid md:text-[17px]";
const section = "border-t border-rule px-6 py-14 md:px-14 md:py-20";

const PROBLEMS = [
  "Revenue has sat at the same level for two or three years, though everyone is working harder.",
  "Dealers and distributors are taking less stock, or only moving it on a scheme.",
  "The sales team hits its volume targets while margins keep slipping.",
  "Stock, receivables and costs tie up more cash every year, and operations feel harder to run.",
  "Profit has turned into losses, and the business needs turning round before it drifts further.",
  "You have tried a new hire, a new product, a new territory. The number hasn't moved.",
  "Every decision still comes back to your desk, so nothing gets fixed properly.",
];

const STEPS = [
  {
    label: "First",
    title: "An introductory call",
    text: "A short call to understand the issue and whether Simpleworks can help. If it is a fit, we agree what to share and sign an NDA if you want one.",
  },
  {
    label: "Three hours",
    title: "The working session",
    text: "A structured conversation across strategy, buying, selling, operations, execution and people. At your office in Bengaluru, or online in two or three shorter sessions.",
  },
  {
    label: "In writing",
    title: "The growth brief",
    text: "A written brief that names what's working, what isn't, and why. Plain language, no slideware.",
  },
  {
    label: "One hour",
    title: "The walkthrough",
    text: "We go through the brief together and agree the one thing to do first. You leave knowing where to start on Monday.",
  },
];

const INCLUDED = [
  {
    label: "Working session",
    text: "Three hours with you and, if useful, your senior team. Online, it runs as two or three shorter sessions.",
  },
  { label: "Written brief", text: "What's working, what isn't, and why." },
  {
    label: "Walkthrough",
    text: "One hour to go through the brief and agree the first move.",
  },
];

const GOOD_FIT = [
  "You run a founder-led business with ₹10–200 crore in revenue.",
  "The pressure is in sales, distribution, operations or margins.",
  "Growth has flattened, or profit is slipping, and you want an outside view.",
  "You are ready to act on one clear priority.",
];

const NOT_FIT = [
  "You are still finding your first customers.",
  "The problem is plant capacity or quality systems.",
  "You want a team of analysts and a 60-page report.",
  "You are looking for funding or a valuation.",
];

const CAREER = [
  ["1987", "Sales trainee, Usha International"],
  ["Tyres", "MRF and Apollo Tyres: dealer networks and government sales"],
  [
    "Telecom",
    "BPL Mobile, Bharti Airtel, then Tata Docomo, rising to COO of the Kerala circle with full P&L",
  ],
  ["SaaS", "Strategy, product and growth at Neoffice"],
  ["Study", "IIM Bengaluru; Ross School of Business, University of Michigan"],
];

// Single source for the visible accordion and the FAQPage JSON-LD.
const FAQS = [
  {
    q: "What is the growth review?",
    a: "A fixed-fee look at why your business has stopped growing: an introductory call, a three-hour working session, a written brief, and a one-hour walkthrough. On the Programmes page it is listed as the Simple Diagnostic.",
  },
  {
    q: "How is this different from a free business health check?",
    a: "A free health check is usually the opening of a sales conversation. This review is the work itself. You pay a published fee, get a written brief you keep, and there is nothing to sign up for afterwards.",
  },
  {
    q: "What do I need to prepare?",
    a: "We agree that on the introductory call. Rough numbers, in whatever form you already keep them, are fine.",
  },
  {
    q: "Can it be done online?",
    a: "Yes. In person, the working session runs as one three-hour block in Bengaluru. Online, wherever you are in India, it is split into two or three shorter sessions.",
  },
  {
    q: "What happens after the review?",
    a: "That is your call. Some founders take the brief and act on it themselves. Others continue into the Simple Reset (₹1,40,000 for 30 days or ₹2,80,000 for 60 days) or the Simple Counsel (₹75,000 a month, minimum three months).",
  },
  {
    q: "Will you sign an NDA?",
    a: "Yes, before you share any numbers.",
  },
  {
    q: "Who will I be working with?",
    a: "Premraj, personally. Simpleworks is one senior advisor, not a team, so you will not be handed to someone junior after the first meeting.",
  },
];

const READS = [
  {
    title: "Business Not Growing? A Business Growth Consultant's Audit",
    href: "/blog/business-not-growing-a-business-growth-consultant-s-audit",
    text: "Ten places stalled businesses leak revenue they have already earned: discounts, lapsed customers, lost quotes and loose credit.",
  },
  {
    title:
      "How to Grow Your MSME: Stop Adding, Start Removing the Constraint Holding You Back",
    href: "/blog/how-to-grow-your-msme-stop-adding-start-removing-the-constraint-holding-you-back",
    text: "Why growth comes from finding the one constraint choking the business, not from more products, markets and hours.",
  },
  {
    title: "Why Retail and Distribution MSMEs in India Are Hitting a Wall",
    href: "/blog/why-retail-and-distribution-msm-es-in-india-are-hitting-a-wall-and-how-to-scale-through-it",
    text: "The distribution model that built your first ₹20 crore can be the thing blocking the next.",
  },
  {
    title:
      "What a Business Turnaround Actually Looks Like: An Indian MSME Case Study",
    href: "/blog/what-a-business-turnaround-actually-looks-like-an-indian-msme-case-study",
    text: "Why a turnaround is a sequencing and courage problem, and what the outside view adds.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business growth review for MSMEs (The Simple Diagnostic)",
  serviceType: "Business growth consulting",
  url: URL,
  description:
    "A fixed-fee, half-day review for founder-led MSMEs whose revenue has stopped growing: an introductory call, a three-hour working session (two or three sessions online), a written brief and a one-hour walkthrough.",
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
  offers: {
    "@type": "Offer",
    name: "Business growth review",
    price: "25000",
    priceCurrency: "INR",
    description:
      "Three-hour working session, written growth brief and one-hour walkthrough.",
    url: URL,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

function FitList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li
          key={item}
          className="border-t border-rule py-3 text-[16px] leading-[1.65] text-mid first:border-t-0 first:pt-0"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function BusinessGrowthReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        {/* 1. Hero */}
        <section className="grid grid-cols-1 items-center gap-10 px-6 pb-14 pt-10 md:grid-cols-2 md:gap-14 md:px-14 md:pb-20 md:pt-20">
          <div className="md:order-2">
            <Image
              src="/images/business-growth-review/hero-msme-owner.webp"
              alt="Illustration of an MSME owner in his business"
              width={1200}
              height={896}
              priority
              className="h-auto w-full"
            />
          </div>
          <div className="md:order-1">
            <p className={eyebrow}>For founder-led MSMEs · Bengaluru</p>
            <h1 className="mb-6 text-[40px] font-bold leading-[1.1] tracking-tight text-ink text-balance md:text-[56px]">
              Your business has stopped growing.{" "}
              <span className="text-red">Find out why in half a day.</span>
            </h1>
            <p className="mb-8 max-w-[520px] text-[16px] italic leading-[1.65] text-mid md:text-[18px]">
              A fixed-fee growth review for founders whose revenue has
              flattened. Three hours on your business, a written brief, and one
              clear thing to fix first.
            </p>
            <a href={CTA_HREF} className={btn}>
              Book a growth review
            </a>
            <p className="mt-4 text-[14px] text-light">
              <strong className="font-bold text-ink">₹25,000</strong> fixed fee ·
              written brief included
            </p>
          </div>
        </section>

        {/* 2. Problem */}
        <section className={section}>
          <p className={eyebrow}>Where founders get stuck</p>
          <h2 className={h2}>
            Growth has stalled, and{" "}
            <span className="text-red">nobody can say exactly why.</span>
          </h2>
          <ul className="mb-8 max-w-[720px]">
            {PROBLEMS.map((p) => (
              <li
                key={p}
                className="border-t border-rule py-4 text-[17px] leading-[1.65] text-ink first:border-t-0 first:pt-0 md:text-[18px]"
              >
                {p}
              </li>
            ))}
          </ul>
          <p className={`${body} max-w-[640px]`}>
            When growth stalls, the cause is usually one or two things, not ten.
            The hard part is seeing which ones from inside the business. The
            review gives you that view.
          </p>
        </section>

        {/* 3. How it works */}
        <section id="how" className={section}>
          <p className={eyebrow}>How the review works</p>
          <h2 className={h2}>
            Half a day of work, <span className="text-red">in four steps.</span>
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.title} className="border-t border-ink pt-5">
                <p className="mb-3 text-[11px] font-light uppercase tracking-widest text-light md:text-[13px]">
                  {s.label}
                </p>
                <h3 className={`${h3} mb-3`}>{s.title}</h3>
                <p className="text-[16px] leading-[1.7] text-mid">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Fee */}
        <section id="fee" className={section}>
          <p className={eyebrow}>The fee</p>
          <h2 className={h2}>
            One fixed fee. <span className="text-red">Published, not negotiated.</span>
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-[56px] font-bold leading-none tracking-tight text-ink [font-variant-numeric:tabular-nums] md:text-[88px]">
                ₹25,000
              </p>
              <p className="mt-4 text-[14px] text-light">
                Paid post engagement. No hourly billing.
              </p>
            </div>
            <div>
              {INCLUDED.map((i) => (
                <div
                  key={i.label}
                  className="grid grid-cols-1 gap-1 border-t border-rule py-4 first:border-t-0 first:pt-0 sm:grid-cols-[160px_1fr] sm:gap-6"
                >
                  <p className="text-[16px] font-bold text-ink">{i.label}</p>
                  <p className="text-[16px] leading-[1.7] text-mid">{i.text}</p>
                </div>
              ))}
            </div>
          </div>
          <p className={`${body} mt-10 max-w-[720px]`}>
            Most coaches tell you their fee only after a sales call. Free health
            checks are usually the start of that call. This review is the work
            itself, priced upfront, and you keep the brief whether or not we work
            together again.
          </p>
        </section>

        {/* 5. Who it is for */}
        <section className={section}>
          <p className={eyebrow}>Who it is for</p>
          <h2 className={h2}>
            Built for businesses that have{" "}
            <span className="text-red">hit a ceiling.</span>
          </h2>
          <p className={`${body} mb-10 max-w-[720px]`}>
            The block can sit in sales, distribution, operations or the P&amp;L
            itself. These are the areas Premraj has run for 39 years, so the
            review looks at all of them, not only the sales line.
          </p>
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16 md:max-w-[880px]">
            <div>
              <h3 className={`${h3} mb-5`}>A good fit if</h3>
              <FitList items={GOOD_FIT} />
            </div>
            <div>
              <h3 className={`${h3} mb-5`}>Not the right fit if</h3>
              <FitList items={NOT_FIT} />
            </div>
          </div>
        </section>

        {/* 6. Who does the work */}
        <section className={section}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[260px_1fr] md:gap-16">
            <div>
              <Image
                src="/images/business-growth-review/premraj-menon.webp"
                alt="Illustrated portrait of Premraj Menon"
                width={1024}
                height={1024}
                className="h-auto w-full max-w-[260px]"
              />
              <a href={CTA_HREF} className={`${btn} mt-8`}>
                Book a growth review
              </a>
            </div>
            <div>
              <p className={eyebrow}>Who does the work</p>
              <h2 className={h2}>
                You work with Premraj,{" "}
                <span className="text-red">not a junior team.</span>
              </h2>
              <p className={`${body} mb-8 max-w-[640px]`}>
                Simpleworks is one senior advisor. Premraj Menon spent 39 years
                running businesses in India: sales and distribution, business
                operations, turnarounds, and full P&amp;L responsibility. He
                started Simpleworks in Bengaluru to bring that experience to
                founder-led businesses.
              </p>
              <div className="max-w-[640px]">
                {CAREER.map(([l, r]) => (
                  <div
                    key={l}
                    className="grid grid-cols-[90px_1fr] gap-4 border-t border-rule py-3 text-[16px] leading-[1.65] first:border-t-0 first:pt-0"
                  >
                    <span className="text-light">{l}</span>
                    <span className="text-ink">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section id="faq" className={section}>
          <p className={eyebrow}>Questions founders ask</p>
          <h2 className={h2}>
            Before you <span className="text-red">book.</span>
          </h2>
          <div className="max-w-[720px]">
            {FAQS.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="group border-b-[0.5px] border-rule"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-[22px] text-[16px] font-bold leading-[1.4] text-ink transition-colors hover:text-red [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span
                    aria-hidden="true"
                    className="relative h-[18px] w-[18px] flex-shrink-0"
                  >
                    <span className="absolute left-[2px] top-[8px] h-[2px] w-[14px] bg-red" />
                    <span className="absolute left-[8px] top-[2px] h-[14px] w-[2px] bg-red transition-transform group-open:rotate-90" />
                  </span>
                </summary>
                <p className="pb-[22px] text-[16px] leading-[1.75] text-mid">
                  {i === 0 ? (
                    <>
                      {f.a.split("Programmes page")[0]}
                      <Link href="/programmes" className="text-red hover:underline">
                        Programmes page
                      </Link>
                      {f.a.split("Programmes page")[1]}
                    </>
                  ) : (
                    f.a
                  )}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* 8. Read before you book */}
        <section id="read" className={section}>
          <p className={eyebrow}>Read before you book</p>
          <h2 className={h2}>
            How stalled businesses{" "}
            <span className="text-red">start growing again.</span>
          </h2>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {READS.map((r) => (
              <div key={r.href} className="border-t border-rule pt-5">
                <h3 className="mb-2 text-[20px] font-bold leading-[1.3] text-ink">
                  <Link href={r.href} className="transition-colors hover:text-red">
                    {r.title}
                  </Link>
                </h3>
                <p className="mb-3 text-[16px] leading-[1.7] text-mid">{r.text}</p>
                <Link href={r.href} className="text-[15px] text-red hover:underline">
                  Read article →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Closing CTA */}
        <section id="book" className={`${section} border-b border-rule`}>
          <p className={eyebrow}>Next step</p>
          <h2 className={h2}>
            Find the one thing{" "}
            <span className="text-red">holding your growth back.</span>
          </h2>
          <p className={`${body} mb-8 max-w-[640px]`}>
            Start with a short introductory call. If the review isn&rsquo;t the
            right fit, we will say so before you pay anything.
          </p>
          <a href={CTA_HREF} className={btn}>
            Book an introductory call
          </a>
        </section>
      </main>
    </>
  );
}
