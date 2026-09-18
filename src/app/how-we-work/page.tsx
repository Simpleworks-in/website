import Image from "next/image";

export const metadata = {
  title: "How We Work — Simpleworks Consulting",
  description:
    "Three fixed-fee programmes for founder-led businesses between ₹10 Cr and ₹200 Cr — plus custom, scoped engagements. The Simple Diagnostic, The Simple Reset, The Simple Counsel, and Custom Engagement.",
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

export default function HowWeWorkPage() {
  return (
    <main>
      {/* 1. Hero */}
      <section className="grid grid-cols-[2px_1fr] gap-x-10 px-6 py-14 md:px-14 md:py-24">
        <div className="w-[2px] bg-red" />
        <div>
          <p className="mb-6 text-[11px] font-light uppercase tracking-[0.2em] text-light">
            How We Work
          </p>
          <h1 className="mb-6 text-[40px] font-bold leading-[1.06] tracking-tight text-ink md:text-[56px]">
            Three ways in.
            <br />
            <span className="text-red">Fixed fees,</span>
            <br />
            agreed first.
          </h1>
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
              alt="Prem Menon"
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-1 text-[15px] font-bold text-ink">Prem Menon</p>
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
              Then, If Needed
            </p>
            <h2 className="mb-4 text-[40px] font-bold leading-[1.08] tracking-tight text-ink">
              The Simple <span className="text-red">Reset</span>
            </h2>
            <p className="max-w-[580px] text-[17px] italic leading-[1.65] text-mid">
              Four to eight weeks, on site, to put the fixes in place — not
              just point at them.
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
          For owners who&apos;ve had the Diagnostic — or already know the
          problem — and want it actually fixed, with someone in the room
          each week until it sticks.
        </p>

        <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
          <div className="pr-0 md:pr-10">
            <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-light">
              Option 1
            </p>
            <p className="mb-1 text-[22px] font-bold text-ink">30 days</p>
            <p className="mb-5 text-[13px] italic text-light">
              Four weekly visits
            </p>
            <ul className="mb-6">
              {[
                "Weekly on-site sessions with the owner and core team",
                "One priority area diagnosed and reset end to end",
                "A short written close-out with what changed and what to watch",
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
              Eight weekly visits
            </p>
            <ul className="mb-6">
              {[
                "Everything in the 30-day option",
                "A second priority area addressed, or deeper work on the first",
                "A written handover so the fix outlives the engagement",
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
          Finding the problems takes four weeks. Making sure they get fixed
          takes the other four — and that is the half most businesses skip.
          It is why analysis sits in drawers.
        </p>
      </section>

      {/* 6. The Simple Counsel */}
      <section className="border-t border-rule px-6 py-14 md:px-14 md:py-20">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-[11px] font-light uppercase tracking-[0.2em] text-light">
              Ongoing
            </p>
            <h2 className="mb-4 text-[40px] font-bold leading-[1.08] tracking-tight text-ink">
              The Simple <span className="text-red">Counsel</span>
            </h2>
            <p className="max-w-[580px] text-[17px] italic leading-[1.65] text-mid">
              A standing sounding board for the decisions that don&apos;t
              wait for a quarterly review.
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
              Monthly, min. 6 months
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
          For owners past the Reset who want a senior second opinion on
          hand — on hiring, pricing, channel bets, and the calls that are
          hard to make alone.
        </p>

        <Deliverables
          items={[
            "A standing monthly session, plus ad-hoc calls as decisions come up",
            "Direct access — you reach me, not a team inbox",
            "A light written note after each session, not a formal deck",
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
              per month · minimum six months
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
      <section className="border-t border-rule px-6 py-14 md:px-14 md:py-[72px]">
        <p className="mb-10 text-[11px] font-light uppercase tracking-[0.2em] text-light">
          At a Glance
        </p>
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
                </td>
              </tr>
              <tr className="border-b border-rule">
                <td className="py-[18px] text-[15px] font-bold text-ink">
                  Custom Engagement
                </td>
                <td className="py-[18px] text-[15px] text-mid">
                  Scoped to fit
                </td>
                <td className="py-[18px] text-right text-[15px] text-mid">
                  Quoted before we begin
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
      <section className="grid grid-cols-1 gap-6 border-t border-rule px-6 py-14 md:grid-cols-2 md:gap-20 md:px-14 md:py-[72px]">
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
      <section className="grid grid-cols-1 gap-6 border-t border-rule px-6 py-14 md:grid-cols-2 md:gap-20 md:px-14 md:py-[72px]">
        <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight text-ink">
          What I
          <br />
          <span className="text-red">don&apos;t</span> do.
        </h2>
        <ul>
          {[
            "Retainer relationships with no defined end point",
            "Capacity planning or quality systems work",
            "Remote-only delivery for full engagements",
            "Generic GTM consulting outside channel-sold businesses",
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

      {/* 11. CTA band */}
      <section className="grid grid-cols-1 items-center gap-8 border-t border-rule px-6 py-14 md:grid-cols-[1fr_auto] md:gap-16 md:px-14 md:py-20">
        <div>
          <h2 className="mb-4 text-[40px] font-bold leading-[1.1] tracking-tight text-ink">
            Start with
            <br />
            <span className="text-red">half a day.</span>
          </h2>
          <p className="max-w-[460px] text-[16px] leading-[1.7] text-mid">
            Most clients begin with the Diagnostic. ₹20,000 in person,
            ₹15,000 online. Credited in full against whatever comes next.
            If you only need the Diagnostic, that is perfectly fine too.
          </p>
        </div>
        <div className="flex flex-col items-start gap-5 md:items-end">
          <a
            href="https://wa.me/919036099000"
            className="inline-block whitespace-nowrap rounded-[1px] border border-red px-9 py-4 font-serif text-[15px] text-red transition-colors hover:bg-red hover:text-white"
          >
            Book the Diagnostic
          </a>
          <div className="text-[13px] leading-[1.8] text-light md:text-right">
            <a
              href="mailto:pm@simpleworks.in"
              className="text-mid transition-colors hover:text-red"
            >
              pm@simpleworks.in
            </a>
            <br />
            <a
              href="tel:+919036099000"
              className="text-mid transition-colors hover:text-red"
            >
              +91 90360 99000
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
