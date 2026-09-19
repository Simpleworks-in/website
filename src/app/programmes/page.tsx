import Image from "next/image";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { FAQS } from "@/lib/faqs";

export const metadata = {
  title: {
    absolute: "Business Consulting Fees & Programmes | Simpleworks, Bengaluru",
  },
  description:
    "Fixed-fee consulting for MSME founders: a ₹15,000 half-day diagnostic, 30–60 day business reset, or monthly mentor retainer. No hourly billing. Bengaluru & online.",
  alternates: {
    canonical: "https://www.simpleworks.in/programmes",
  },
  openGraph: {
    title: "Business Consulting Fees & Programmes | Simpleworks, Bengaluru",
    description:
      "Fixed-fee consulting for MSME founders: a ₹15,000 half-day diagnostic, 30–60 day business reset, or monthly mentor retainer. No hourly billing. Bengaluru & online.",
    url: "https://www.simpleworks.in/programmes",
    type: "website",
  },
};

const PROGRAMMES_FAQS = [
  ...FAQS.filter((item) =>
    [
      "What is your consulting fee?",
      "How long does a consulting engagement typically last?",
    ].includes(item.q)
  ),
  {
    q: "Can the engagement be done remotely?",
    a: "<p>Yes, for two of the three programmes. The Simple Diagnostic (₹15,000 online) and The Simple Counsel can both run fully online, wherever you are in India. The Simple Reset needs weekly on-site visits, because the work happens inside your business with your team. Outside Bengaluru, travel for it is charged at actuals.</p>",
  },
  {
    q: "Will you sign an NDA?",
    a: "<p>Yes. We're happy to sign an NDA before you share financials or other sensitive information, usually before the Diagnostic begins.</p>",
  },
];

function stripHtml(html: string) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PROGRAMMES_FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: stripHtml(item.a),
    },
  })),
};

function Deliverables({ items }: { items: string[] }) {
  return (
    <ul className="mb-10">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-baseline gap-4 border-b border-rule py-[14px] text-[15px] leading-[1.65] text-mid"
        >
          <span className="flex-shrink-0 font-bold text-red">—</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ProgrammesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
      {/* 1. Hero */}
      <section className="grid grid-cols-[2px_1fr] gap-x-10 px-6 py-14 md:px-14 md:py-24">
        <div className="w-[2px] bg-red" />
        <div>
          <p className="mb-6 text-[11px] font-light uppercase tracking-[0.2em] text-light">
            Our Programmes
          </p>
          <h1 className="mb-4 text-[36px] leading-[1.1] font-bold tracking-tight-1 md:text-hero-h1 text-ink">
            Three business consulting programmes for MSMEs.
          </h1>
          <p className="mb-6 text-[20px] font-semibold leading-[1.4] text-ink">
            Fixed-fee consulting and business mentoring programmes for Indian
            MSMEs.
          </p>
          <p className="max-w-[540px] text-[18px] italic leading-[1.65] text-mid">
            One senior advisor — you get me, not a team. For founder-led
            businesses between ₹10 Cr and ₹200 Cr, in Bengaluru and across
            India.
          </p>
        </div>
      </section>

      {/* 2. Journey strip */}
      <section className="border-t border-rule">
        <div className="flex flex-col md:grid md:grid-cols-[repeat(4,minmax(140px,1fr))_minmax(220px,320px)]">
          {[
            ["01", "Diagnose"],
            ["02", "Plan"],
            ["03", "Reset"],
            ["04", "Counsel"],
          ].map(([num, label], i) => (
            <div
              key={num}
              className={`flex flex-col gap-[10px] border-rule px-6 py-7 md:px-8 ${
                i === 0
                  ? "border-t-0 md:border-l-0 md:pl-14"
                  : "border-t md:border-l md:border-t-0"
              }`}
            >
              <span className="text-[10px] uppercase leading-none tracking-[0.2em] text-light">
                {num}
              </span>
              <span className="text-[16px] font-bold leading-none text-ink">
                {label}
              </span>
            </div>
          ))}
          <p className="hidden items-center border-l border-rule px-10 py-7 pr-14 text-[13px] italic leading-[1.6] text-light md:flex">
            Most clients move through in that order. You can stop at any
            point.
          </p>
        </div>
      </section>

      {/* 3. Trust / reassurance */}
      <section className="border-t border-rule">
        <div className="grid grid-cols-1 items-center gap-8 px-6 py-14 md:grid-cols-[auto_1fr] md:px-14 md:py-16">
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src="/prem-menon.png"
              alt="Premraj Menon"
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-1 text-[15px] font-bold text-ink">Premraj Menon</p>
            <p className="mb-3 text-[12px] uppercase tracking-[0.15em] text-light">
              Founder, Simpleworks Consulting
            </p>
            <p className="max-w-[600px] text-[15px] leading-[1.7] text-mid">
              39 years across consumer durables, automotive, telecom and
              IT/SaaS — including senior management roles at Tata Docomo,
              Airtel, BPL Mobile, Apollo Tyres, MRF and entrepreneur roles at
              Viwoks &amp; Neoffice. You work directly with me, not a team,
              from first call to last.
            </p>
          </div>
        </div>
      </section>

      {/* 4. The Simple Diagnostic */}
      <section className="border-t border-rule px-6 py-14 md:px-14 md:py-20">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-[11px] font-light uppercase tracking-[0.2em] text-light">
              Start Here
            </p>
            <h2 className="mb-4 text-[40px] font-bold leading-[1.08] tracking-tight text-ink">
              The Simple <span className="text-red">Diagnostic</span>
            </h2>
            <p className="max-w-[580px] text-[17px] italic leading-[1.65] text-mid">
              In half a day I will tell you what is working, what is not,
              and the one thing to do first.
            </p>
          </div>
          <span className="-mt-4 hidden select-none text-[120px] font-bold leading-none tracking-[-0.04em] text-rule md:block">
            01
          </span>
        </div>

        <div className="mb-10 flex flex-wrap border-t border-b border-rule">
          <div className="flex flex-col gap-1 py-5 pr-8 min-w-[140px]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-light">
              Duration
            </span>
            <span className="text-[15px] font-bold text-ink">Half a day</span>
          </div>
          <div className="flex flex-col gap-1 border-l border-rule py-5 pl-8 pr-8 min-w-[140px]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-light">
              Format
            </span>
            <span className="text-[15px] font-bold text-ink">
              In person or online
            </span>
          </div>
          <div className="flex flex-col gap-1 border-l border-rule py-5 pl-8 pr-8 min-w-[140px]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-light">
              Output
            </span>
            <span className="text-[15px] font-bold text-ink">
              One written brief
            </span>
          </div>
        </div>

        <p className="mb-9 max-w-[640px] border-l-2 border-rule pl-5 text-[16px] leading-[1.78] text-mid">
          For any owner who knows something is off — growth has stalled, a
          channel isn&apos;t performing, or execution keeps slipping — but
          doesn&apos;t yet know what to fix first.
        </p>

        <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-light">
          What you get
        </p>
        <Deliverables
          items={[
            "A structured conversation across strategy, buying, selling, execution and people",
            "A written diagnostic brief naming what's working, what isn't, and why",
            "One clear recommendation for what to do first",
          ]}
        />

        <div className="flex flex-wrap items-end gap-12 pt-2">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-light">
              Investment
            </span>
            <span className="text-[44px] font-bold leading-none tracking-[-0.02em] text-red">
              ₹20,000
            </span>
            <span className="text-[13px] italic text-light">
              in person · fixed, all-inclusive
            </span>
          </div>
          <span className="pb-2 text-[15px] text-mid">₹15,000 online</span>
        </div>

        <p className="mt-4 text-[16px] leading-[1.78] text-mid md:text-[17px]">
          Not sure what you get?{" "}
          <Link href="/sample-diagnostic-report" className="text-red hover:underline">
            See a sample Diagnostic report →
          </Link>
        </p>

        <div className="mt-7 max-w-[560px] border-l-2 border-red pl-4 text-[14px] italic leading-[1.65] text-mid">
          Credited in full against anything that follows. It is a deposit,
          not a cost.
          <br />
          <br />
          If you are satisfied with just the Diagnostic, the invoice for the
          same will be raised — no further obligation.
        </div>

        <div className="mt-8">
          <a
            href="https://wa.me/919036099000"
            className="inline-block whitespace-nowrap rounded-[1px] border border-red px-9 py-3.5 font-serif text-[14px] text-red transition-colors hover:bg-red hover:text-white"
          >
            Book the Diagnostic
          </a>
        </div>
      </section>

      {/* 5. The Simple Reset */}
      <section className="border-t border-rule px-6 py-14 md:px-14 md:py-20">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-[11px] font-light uppercase tracking-[0.2em] text-light">
              Fixed Engagement
            </p>
            <h2 className="mb-4 text-[40px] font-bold leading-[1.08] tracking-tight text-ink">
              The Simple <span className="text-red">Reset</span>
            </h2>
            <p className="max-w-[580px] text-[17px] italic leading-[1.65] text-mid">
              Four weeks to work out what to do. Four more to make sure it
              happens.
            </p>
          </div>
          <span className="-mt-4 hidden select-none text-[120px] font-bold leading-none tracking-[-0.04em] text-rule md:block">
            02
          </span>
        </div>

        <div className="mb-10 flex flex-wrap border-t border-b border-rule">
          <div className="flex flex-col gap-1 py-5 pr-8 min-w-[140px]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-light">
              Duration
            </span>
            <span className="text-[15px] font-bold text-ink">
              30 or 60 days
            </span>
          </div>
          <div className="flex flex-col gap-1 border-l border-rule py-5 pl-8 pr-8 min-w-[140px]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-light">
              Format
            </span>
            <span className="text-[15px] font-bold text-ink">
              Weekly on-site visits
            </span>
          </div>
          <div className="flex flex-col gap-1 border-l border-rule py-5 pl-8 pr-8 min-w-[140px]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-light">
              Output
            </span>
            <span className="text-[15px] font-bold text-ink">
              Fixes in place, not just findings
            </span>
          </div>
        </div>

        <p className="mb-9 max-w-[640px] border-l-2 border-rule pl-5 text-[16px] leading-[1.78] text-mid">
          For owners who have a problem area they can name but have not
          been able to crack. You bring the problem. Option 1 gives you the
          diagnosis and a designed solution — you execute. Option 2 adds 30
          days of Prem alongside your team to make sure execution actually
          starts.
        </p>

        <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
          <div className="pr-0 md:pr-10">
            <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-light">
              Option 1
            </p>
            <p className="mb-1 text-[22px] font-bold text-ink">30 days</p>
            <p className="mb-5 text-[13px] italic text-light">
              Four weekly visits · you execute
            </p>
            <ul className="mb-6">
              {[
                "Structured discovery of the named problem area — root cause, not symptoms",
                "The gaps costed in rupees, ranked by impact",
                "A designed solution: what to do, who owns it, by when",
                "One page. Plain language. No deck.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b border-rule py-[14px] text-[15px] leading-[1.65] text-mid"
                >
                  <span className="flex-shrink-0 font-bold text-red">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[36px] font-bold leading-none tracking-[-0.02em] text-red">
              ₹1,40,000
            </p>
            <p className="mt-1 text-[12px] italic text-light">
              Fixed · billed at month end
            </p>
          </div>
          <div className="border-t border-rule pl-0 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-light">
              Option 2
            </p>
            <p className="mb-1 text-[22px] font-bold text-ink">60 days</p>
            <p className="mb-5 text-[13px] italic text-light">
              Eight weekly visits · Prem stays for execution
            </p>
            <ul className="mb-6">
              {[
                "Everything in Option 1, delivered in the first four weeks",
                "Four more weeks in person with your leadership team",
                "Obstacles cleared while they are still small",
                "A weekly review rhythm installed and handed over — your team runs it, not Prem",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b border-rule py-[14px] text-[15px] leading-[1.65] text-mid"
                >
                  <span className="flex-shrink-0 font-bold text-red">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[36px] font-bold leading-none tracking-[-0.02em] text-red">
              ₹2,80,000
            </p>
            <p className="mt-1 text-[12px] italic text-light">
              Fixed · billed monthly, two parts
            </p>
          </div>
        </div>

        <p className="max-w-[600px] border-t border-rule pt-5 text-[14px] italic leading-[1.65] text-light">
          Most clients know what they need to do. The question is whether
          they want help doing it. Option 1 gives you the answer. Option 2
          makes sure the answer gets implemented.
        </p>
      </section>

      {/* 6. The Simple Counsel */}
      <section className="border-t border-rule px-6 py-14 md:px-14 md:py-20">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-[11px] font-light uppercase tracking-[0.2em] text-light">
              Monthly Retainer
            </p>
            <h2 className="mb-4 text-[40px] font-bold leading-[1.08] tracking-tight text-ink">
              The Simple <span className="text-red">Counsel</span>
            </h2>
            <p className="max-w-[580px] text-[17px] italic leading-[1.65] text-mid">
              A business mentor in your corner — every month, for as long
              as it is useful.
            </p>
          </div>
          <span className="-mt-4 hidden select-none text-[120px] font-bold leading-none tracking-[-0.04em] text-rule md:block">
            03
          </span>
        </div>

        <div className="mb-10 flex flex-wrap border-t border-b border-rule">
          <div className="flex flex-col gap-1 py-5 pr-8 min-w-[140px]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-light">
              Duration
            </span>
            <span className="text-[15px] font-bold text-ink">
              Monthly, min. 3 months
            </span>
          </div>
          <div className="flex flex-col gap-1 border-l border-rule py-5 pl-8 pr-8 min-w-[140px]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-light">
              Format
            </span>
            <span className="text-[15px] font-bold text-ink">
              Regular check-ins + on-call
            </span>
          </div>
          <div className="flex flex-col gap-1 border-l border-rule py-5 pl-8 pr-8 min-w-[140px]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-light">
              Output
            </span>
            <span className="text-[15px] font-bold text-ink">
              A decision partner, not a report
            </span>
          </div>
        </div>

        <p className="mb-9 max-w-[640px] border-l-2 border-rule pl-5 text-[16px] leading-[1.78] text-mid">
          For founders who want a senior thinking partner on call — before
          a hire, a price change, a new market, or a difficult family
          conversation. Often how the relationship continues after the
          Reset. Also works as a standalone engagement for founders who do
          not need a project, just clear-headed counsel.
        </p>

        <Deliverables
          items={[
            "Two sessions a month, agenda set by you — at your office in Bengaluru, online anywhere else in India",
            "WhatsApp access for the decisions that will not wait",
            "Quarterly business review, and one leadership meeting a quarter if useful",
            "No deliverables. This is thinking, not documents",
          ]}
        />

        <div className="flex flex-wrap items-end gap-12 pt-2">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-light">
              Investment
            </span>
            <span className="text-[44px] font-bold leading-none tracking-[-0.02em] text-red">
              ₹75,000
            </span>
            <span className="text-[13px] italic text-light">
              per month · minimum three months
            </span>
          </div>
        </div>
      </section>

      {/* 7. Custom Engagement */}
      <section className="border-t border-rule px-6 py-14 md:px-14 md:py-20">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-[11px] font-light uppercase tracking-[0.2em] text-light">
              Outside The Three
            </p>
            <h2 className="mb-4 text-[40px] font-bold leading-[1.08] tracking-tight text-ink">
              <span className="text-red">Custom</span> Engagement
            </h2>
            <p className="max-w-[580px] text-[17px] italic leading-[1.65] text-mid">
              If what you need doesn&apos;t fit the Diagnostic, Reset or
              Counsel, I will scope it with you directly.
            </p>
          </div>
          <span className="-mt-4 hidden select-none text-[120px] font-bold leading-none tracking-[-0.04em] text-rule md:block">
            04
          </span>
        </div>

        <div className="mb-10 flex flex-wrap border-t border-b border-rule">
          <div className="flex flex-col gap-1 py-5 pr-8 min-w-[140px]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-light">
              Duration
            </span>
            <span className="text-[15px] font-bold text-ink">
              Scoped to fit
            </span>
          </div>
          <div className="flex flex-col gap-1 border-l border-rule py-5 pl-8 pr-8 min-w-[140px]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-light">
              Format
            </span>
            <span className="text-[15px] font-bold text-ink">
              Agreed with you upfront
            </span>
          </div>
          <div className="flex flex-col gap-1 border-l border-rule py-5 pl-8 pr-8 min-w-[140px]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-light">
              Output
            </span>
            <span className="text-[15px] font-bold text-ink">
              A fixed quote before we begin
            </span>
          </div>
        </div>

        <p className="mb-9 max-w-[640px] border-l-2 border-rule pl-5 text-[16px] leading-[1.78] text-mid">
          For situations that don&apos;t map cleanly to a half-day
          diagnostic, a four-to-eight week reset, or an ongoing monthly
          counsel — a specific project, a one-time review, or something in
          between.
        </p>

        <div className="flex flex-col gap-1 pt-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-light">
            Investment
          </span>
          <span className="text-[32px] font-bold leading-none tracking-[-0.02em] text-ink">
            Quoted before we <span className="text-red">begin</span>
          </span>
          <span className="text-[13px] italic text-light">
            Always fixed, always agreed first — no open-ended billing
          </span>
        </div>
      </section>

      {/* 8. At a Glance */}
      <section className="border-t border-rule px-6 py-14 md:px-14 md:py-20">
        <h2 className="mb-10 text-[32px] font-bold leading-[1.15] tracking-tight text-ink">
          At a <span className="text-red">Glance</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr className="border-b border-rule">
                <th className="pb-4 text-left text-[10px] font-light uppercase tracking-[0.2em] text-light">
                  Programme
                </th>
                <th className="pb-4 text-left text-[10px] font-light uppercase tracking-[0.2em] text-light">
                  Length
                </th>
                <th className="pb-4 text-right text-[10px] font-light uppercase tracking-[0.2em] text-light">
                  Investment
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-rule">
                <td className="py-[18px] text-[15px] font-bold text-ink">
                  The Simple Diagnostic
                </td>
                <td className="py-[18px] text-[15px] text-mid">
                  Half a day
                </td>
                <td className="py-[18px] text-right">
                  <span className="font-bold text-red">₹20,000</span>
                  <span className="mt-1 block text-[12px] italic text-light">
                    in person · ₹15,000 online
                  </span>
                </td>
              </tr>
              <tr className="border-b border-rule">
                <td className="py-[18px] text-[15px] font-bold text-ink">
                  The Simple Reset
                </td>
                <td className="py-[18px] text-[15px] text-mid">30 days</td>
                <td className="py-[18px] text-right text-[15px]">
                  <span className="font-bold text-red">₹1,40,000</span>
                </td>
              </tr>
              <tr className="border-b border-rule">
                <td className="py-[18px]"></td>
                <td className="py-[18px] text-[15px] text-mid">60 days</td>
                <td className="py-[18px] text-right text-[15px]">
                  <span className="font-bold text-red">₹2,80,000</span>
                </td>
              </tr>
              <tr className="border-b border-rule">
                <td className="py-[18px] text-[15px] font-bold text-ink">
                  The Simple Counsel
                </td>
                <td className="py-[18px] text-[15px] text-mid">Monthly</td>
                <td className="py-[18px] text-right text-[15px]">
                  <span className="font-bold text-red">
                    ₹75,000 / month
                  </span>
                  <span className="mt-1 block text-[12px] italic text-light">
                    3-month minimum
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-[13px] italic leading-[1.6] text-light">
          All fees exclusive of GST. Travel outside Bengaluru at actuals.
          Anything that does not fit these three programmes, I will scope
          and quote with you before we begin.
        </p>
      </section>

      {/* 9. How the money works */}
      <section className="grid grid-cols-1 gap-6 border-t border-rule px-6 py-14 md:grid-cols-2 md:gap-20 md:px-14 md:py-20">
        <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight text-ink">
          How the
          <br />
          <span className="text-red">money works.</span>
        </h2>
        <div>
          <p className="mb-5 text-[16px] leading-[1.78] text-mid">
            Every programme has one price, agreed before we start. No
            hourly billing, no scope creep, no surprise invoice at the end.
          </p>
          <p className="text-[16px] leading-[1.78] text-mid">
            The Diagnostic fee is credited in full against whatever
            follows. If you stop there, that&apos;s the whole engagement —
            no further obligation, no upsell conversation.
          </p>
        </div>
      </section>

      {/* 10. What I don't do */}
      <section className="grid grid-cols-1 gap-6 border-t border-rule px-6 py-14 md:grid-cols-2 md:gap-20 md:px-14 md:py-20">
        <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight text-ink">
          What I
          <br />
          <span className="text-red">don&apos;t</span> do.
        </h2>
        <ul>
          {[
            "Run your sales function or sit in your customer meetings. I build the system and train the people who run it",
            "Produce decks. You get short written documents your team can actually use",
            "Bring an associate who does the work while I attend the first meeting. You get me, every visit",
            "Take on work outside my expertise. If the problem area is not one I can serve well, I will tell you upfront — and share someone who can do a better job than me",
          ].map((item) => (
            <li
              key={item}
              className="flex items-baseline gap-4 border-b border-rule py-[14px] text-[15px] leading-[1.65] text-mid"
            >
              <span className="flex-shrink-0 font-bold text-light">—</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* 11. FAQ */}
      <section className="border-t border-rule px-6 py-14 md:px-14 md:py-20">
        <p className="mb-3 text-[11px] font-light uppercase tracking-[0.2em] text-light">
          Common Questions
        </p>
        <h2 className="mb-4 text-[32px] font-bold leading-[1.15] tracking-tight text-ink">
          Fees and <span className="text-red">duration.</span>
        </h2>
        <FAQAccordion faqs={PROGRAMMES_FAQS} />
      </section>

      {/* 12. CTA band */}
      <section className="border-t border-rule px-6 py-14 md:px-14 md:py-20">
        <h2 className="mb-4 text-[40px] font-bold leading-[1.1] tracking-tight text-ink">
          Start with
          <br />
          <span className="text-red">half a day.</span>
        </h2>
        <p className="mb-8 max-w-[460px] text-[16px] leading-[1.7] text-mid">
          Most clients begin with the Diagnostic. ₹20,000 in person,
          ₹15,000 online. Credited in full against whatever comes next.
          If you only need the Diagnostic, that is perfectly fine too.
        </p>
        <a
          href="https://wa.me/919036099000"
          className="inline-block whitespace-nowrap rounded-[1px] border border-red px-9 py-4 font-serif text-[15px] text-red transition-colors hover:bg-red hover:text-white"
        >
          Book the Diagnostic
        </a>
        <div className="mt-5 text-[13px] leading-[1.8] text-light">
          <a href="mailto:pm@simpleworks.in" className="text-mid transition-colors hover:text-red">
            pm@simpleworks.in
          </a>
          <br />
          <a href="tel:+919036099000" className="text-mid transition-colors hover:text-red">
            +91 90360 99000
          </a>
        </div>
      </section>
      </main>
    </>
  );
}
