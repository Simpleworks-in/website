import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Startup Mentor in Bengaluru | Business Advisor for Founders | Simpleworks Consulting",
  description:
    "Prem Menon — senior startup mentor in Bengaluru with 39 years of operational experience. One-to-one mentorship for SaaS, D2C, and funded startup founders navigating growth, GTM, and execution.",
  keywords:
    "startup mentor Bengaluru, startup advisor India, business mentor for startups, founder mentor Bangalore, startup mentor for founders, startup scaling mentor, startup execution mentor, mentor for funded startups",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://simpleworks.in/startup-mentor-bengaluru",
  },
  openGraph: {
    title: "Startup Mentor in Bengaluru | Simpleworks Consulting",
    description:
      "One-to-one startup mentorship from Prem Menon — 39 years of operating experience. For SaaS, D2C, and funded startup founders in Bengaluru.",
    url: "https://simpleworks.in/startup-mentor-bengaluru",
    siteName: "Simpleworks Consulting",
    locale: "en_IN",
    type: "website",
  },
};

const WA_LINK =
  "https://wa.me/919036099000?text=Hi%20Prem%2C%20I%20am%20looking%20for%20a%20startup%20mentor%20in%20Bengaluru.%20Can%20we%20talk%3F";
const CALENDAR_LINK = "https://calendar.app.google/ME9vQ9MnqLowqNUW8";

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const GAP_BULLETS = [
  "Your GTM was founder-led. Now you need a team and a system to replace you.",
  "You've raised a round. Now investors expect quarterly accountability you haven't built.",
  "The product works. Execution — across teams, processes, and priorities — is breaking down.",
  "You're making ₹10–50 crore decisions with no one senior enough to pressure-test them.",
  "Advisors give frameworks. You need someone who has held the P&L when it mattered.",
];

const WHO = [
  {
    n: "01",
    title: "SaaS & B2B Tech Founders",
    body: "Post-PMF, pre-Series B. Revenue between ₹2–25 crore ARR. Struggling with GTM repeatability, sales hiring, or investor-grade operational rigour.",
  },
  {
    n: "02",
    title: "D2C & Consumer Founders",
    body: "Past early traction, building for real distribution. Unit economics are improving but execution velocity isn't. Needing a senior operator's lens on the business.",
  },
  {
    n: "03",
    title: "Funded Startup Leadership Teams",
    body: "Series A/B companies where the founding team needs an external thinking partner — for strategy, OKR design, or operational accountability that investors can't provide.",
  },
];

const WHAT_I_BRING = [
  {
    title: "GTM Architecture",
    body: "Designing go-to-market engines that don't depend on the founder to close every deal. Channel strategy, sales team structure, pricing, and revenue accountability — built for scale.",
  },
  {
    title: "Execution & OKR Systems",
    body: "Most startups have vision. Few have the operating rhythm to execute it. I build OKR frameworks and review cadences that create accountability without bureaucracy.",
  },
  {
    title: "Strategic Thinking Partner",
    body: "A thinking partner with no equity, no agenda, and no reason to tell you what you want to hear. Board-level strategic clarity, without the board dynamics.",
  },
  {
    title: "Operational Scaling",
    body: "Consumer Durables. Automotive. Telecom. SaaS. 39 years of building operating systems inside Indian businesses — applied to your specific growth bottleneck.",
  },
];

const CREDENTIALS = [
  "EGMP, IIM Bengaluru",
  "Advanced Management Programme, Ross School of Business (via TMTC Pune)",
  "BA, Bengaluru University",
  "COO-level experience across 6 industries",
  "Bengaluru-based. In-person preferred.",
];

const STEPS = [
  {
    n: "01",
    title: "Discovery Conversation",
    body: "A 30-minute call where I understand your stage, your challenge, and whether I'm the right fit. No sales pitch. Honest assessment on both sides.",
  },
  {
    n: "02",
    title: "Diagnostic Session",
    body: "A structured 2-hour working session to map your business — strategy, GTM, execution, team. I identify the actual constraint, not the presenting problem.",
  },
  {
    n: "03",
    title: "Mentorship Engagement",
    body: "Regular one-to-one sessions — fortnightly or monthly. In-person in Bengaluru wherever possible. Deep engagement on your specific priorities.",
  },
  {
    n: "04",
    title: "Accountability & Review",
    body: "We track outcomes, not outputs. OKRs, decisions, and actions are reviewed in every session. The work must move the business — not just the conversation.",
  },
];

const OUTCOMES = [
  {
    title: "Clarity on the Real Bottleneck",
    body: "Most founders are solving the wrong problem. After a diagnostic session, you know exactly where the constraint is — and what to do about it first.",
  },
  {
    title: "A GTM System You Can Delegate",
    body: "A go-to-market motion that doesn't require you to close every deal — with team structure, accountability, and metrics built in.",
  },
  {
    title: "OKR-Based Execution Rhythm",
    body: "A quarterly review cadence and OKR structure that your team actually runs — not a spreadsheet that gets updated once and forgotten.",
  },
  {
    title: "Investor-Grade Operating Discipline",
    body: "Board-ready numbers, structured reviews, and a management operating system that gives investors confidence between rounds.",
  },
  {
    title: "Decisions Made with Senior Perspective",
    body: "A thinking partner who has held the P&L, managed the team, and faced the board — so your biggest decisions get tested before they're made.",
  },
  {
    title: "A Relationship, Not a Transaction",
    body: "I work with very few founders at a time. The engagement is ongoing, not one-off. You get someone who knows your business as well as you do.",
  },
];

const FAQS = [
  {
    q: "How is this different from an accelerator or incubator?",
    a: "Accelerators run programmes for cohorts of 10–20 startups simultaneously. I work with a small number of founders at a time, one-to-one, with no fixed curriculum. The engagement is built entirely around your specific business and challenge — not a generalised programme.",
  },
  {
    q: "What stage of startup do you typically work with?",
    a: "Post-product-market fit, typically ₹2–50 crore in revenue or Series A/B stage. The challenges I'm most useful for — GTM scaling, execution discipline, OKR design, board-readiness — tend to appear at this stage. Earlier-stage founders are better served by accelerator programmes.",
  },
  {
    q: "Do you take equity or only fees?",
    a: "I work on a pure advisory fee basis. I do not take equity. This keeps the relationship clean — my only incentive is the quality of my advice, not your cap table.",
  },
  {
    q: "Is this in-person or virtual?",
    a: "I prefer in-person for the primary relationship — I'm based in Bengaluru. For founders outside Bengaluru, or for ongoing sessions, virtual works well. The first diagnostic session is always in-person where possible.",
  },
  {
    q: "Do you only work with tech startups?",
    a: "No. My experience spans Consumer Durables, Automotive, Telecom, and SaaS — so I'm comfortable with both tech and non-tech businesses. The principles of GTM, execution, and operational scaling apply across sectors.",
  },
  {
    q: "How long does a typical engagement run?",
    a: "Most engagements run for 6–12 months. Meaningful change in business systems takes time — and a strong mentor relationship compounds over quarters, not weeks. I don't offer one-session advisory sprints.",
  },
];

export default function StartupMentorBengaluruPage() {
  return (
    <main className="bg-white">
      {/* NAV */}
      <nav className="sticky top-0 z-[100] flex h-16 items-center justify-between border-b border-[#E1E1E1] bg-white px-6 md:px-12">
        <a
          href="https://simpleworks.in"
          className="flex items-center gap-3 no-underline"
        >
          <span className="text-[28px] font-bold leading-none text-[#ED1C24]">S</span>
          <span className="text-[15px] font-semibold text-[#0F0F0F]">
            Simpleworks <span className="text-[#ED1C24]">Consulting</span>
          </span>
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap border-[1.5px] border-[#ED1C24] px-[22px] py-[9px] text-[14px] font-semibold text-[#ED1C24] transition-colors hover:bg-[#ED1C24] hover:text-white"
        >
          Talk to Prem &rarr;
        </a>
      </nav>

      {/* HERO */}
      <section className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 px-6 py-[100px] md:min-h-screen md:grid-cols-[0.85fr_1.15fr] md:gap-8 md:px-10 md:py-[120px]">
        <div>
          <p className="relative mb-6 flex items-center gap-3 pl-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#878787] before:absolute before:left-0 before:h-5 before:w-[2px] before:bg-[#ED1C24]">
            Startup Mentor &middot; Bengaluru
          </p>
          <h1 className="mb-6 text-[clamp(42px,5vw,64px)] font-bold leading-[1.12] text-[#0F0F0F]">
            Your startup has grown.
            <br />
            Your <em className="not-italic text-[#ED1C24]">problems have changed.</em>
          </h1>
          <p className="mb-8 max-w-[520px] text-[19px] italic leading-[1.65] text-[#464646]">
            One-to-one mentorship for startup founders navigating the hard
            stretch — post-product-fit, pre-scale. No cohorts. No templates.
            Just 39 years of real operating experience, in the room with you.
          </p>
          <div className="mb-10 flex flex-wrap items-center gap-6">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ED1C24] px-9 py-4 text-[15px] font-semibold text-white transition-opacity hover:opacity-[0.88]"
            >
              Start a Conversation
            </a>
            <a
              href="#what-i-bring"
              className="border-b border-[#0F0F0F] pb-1 text-[15px] font-semibold text-[#0F0F0F] transition-colors hover:border-[#ED1C24] hover:text-[#ED1C24]"
            >
              See how I work
            </a>
          </div>
          <div className="flex flex-wrap gap-8 border-t border-[#E1E1E1] pt-9">
            <div>
              <div className="text-[36px] font-bold leading-none text-[#0F0F0F]">
                39<span className="text-[#ED1C24]">+</span>
              </div>
              <div className="mt-[5px] text-[13px] text-[#878787]">Years experience</div>
            </div>
            <div>
              <div className="text-[36px] font-bold leading-none text-[#0F0F0F]">6</div>
              <div className="mt-[5px] text-[13px] text-[#878787]">Industries</div>
            </div>
            <div>
              <div className="text-[36px] font-bold leading-none text-[#0F0F0F]">COO</div>
              <div className="mt-[5px] text-[13px] text-[#878787]">Level practitioner</div>
            </div>
          </div>
        </div>
        <div className="hidden md:block -mt-20">
          <Image
            src="/images/startup-mentor-hero.png"
            alt="Startup mentor session in Bengaluru co-working space"
            width={1376}
            height={768}
            priority
            className="mix-blend-multiply w-full h-auto max-w-[800px]"
          />
        </div>
      </section>

      {/* THE GAP */}
      <section id="the-gap" className="border-t border-[#E1E1E1] px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-16 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-3 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ED1C24] after:h-[1.5px] after:w-8 after:bg-[#ED1C24]">
              The Problem
            </p>
            <h2 className="mb-6 text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.2] text-[#0F0F0F]">
              Most startup mentors teach.
              <br />
              You need <em className="not-italic text-[#ED1C24]">someone who has done.</em>
            </h2>
            <p className="mb-9 text-[17px] leading-[1.75] text-[#464646]">
              Bengaluru&rsquo;s startup ecosystem is exceptional at
              early-stage support — accelerators, angel networks, cohort
              programmes. But once you&rsquo;re past ₹2 crore ARR and
              actually trying to scale, the support thins out.
            </p>
            <ul className="flex list-none flex-col gap-4 p-0">
              {GAP_BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-4 text-[17px] leading-[1.6] text-[#464646]">
                  <span className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ED1C24]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t-2 border-[#ED1C24] pt-9 md:border-l-2 md:border-t-0 md:pl-12 md:pt-0">
            <p className="text-[22px] italic leading-[1.55] text-[#0F0F0F]">
              &ldquo;The hardest stage isn&rsquo;t the idea or the first
              crore. It&rsquo;s the stretch between early traction and real
              scale — where gut instinct stops being enough and systems
              haven&rsquo;t been built yet.&rdquo;
            </p>
            <p className="mt-5 text-[13px] uppercase tracking-[0.06em] text-[#878787]">
              &mdash; Prem Menon, Startup Mentor &middot; Bengaluru
            </p>
          </div>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section id="who-i-work-with" className="bg-[#F7F5F2] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ED1C24]">
            Who I Work With
          </p>
          <h2 className="mb-4 text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.2] text-[#0F0F0F]">
            Startup founders at the <em className="not-italic text-[#ED1C24]">growth inflection.</em>
          </h2>
          <p className="mb-12 max-w-[600px] text-[19px] italic leading-[1.65] text-[#464646]">
            I work with a small number of founders at a time. Fit matters
            more than sector.
          </p>
          <div className="grid grid-cols-1 gap-[2px] border border-[#E1E1E1] bg-[#E1E1E1] md:grid-cols-3">
            {WHO.map((c) => (
              <div key={c.n} className="bg-white px-8 py-10">
                <p className="mb-4 text-[13px] font-bold tracking-[0.1em] text-[#ED1C24]">{c.n}</p>
                <h3 className="mb-3 text-[20px] font-bold text-[#0F0F0F]">{c.title}</h3>
                <p className="text-[15px] leading-[1.7] text-[#464646]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I BRING */}
      <section id="what-i-bring" className="border-t border-[#E1E1E1] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ED1C24]">
            What I Bring
          </p>
          <h2 className="mb-12 text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.2] text-[#0F0F0F]">
            39 years of operating.
            <br />
            Not <em className="not-italic text-[#ED1C24]">advising</em> — operating.
          </h2>
          <div className="grid grid-cols-1 gap-20 md:grid-cols-2 md:items-start">
            <div>
              {WHAT_I_BRING.map((item, i) => (
                <div
                  key={item.title}
                  className={`border-b border-[#E1E1E1] py-7 ${i === 0 ? "pt-0" : ""}`}
                >
                  <h3 className="mb-2 text-[18px] font-bold text-[#0F0F0F]">{item.title}</h3>
                  <p className="text-[16px] leading-[1.7] text-[#464646]">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="border-l-2 border-[#ED1C24] bg-[#F7F5F2] px-10 py-12">
              <h3 className="mb-1.5 text-[22px] font-bold text-[#0F0F0F]">Prem Menon</h3>
              <p className="mb-6 text-[14px] uppercase tracking-[0.06em] text-[#ED1C24]">
                Startup Mentor &middot; Bengaluru
              </p>
              <p className="mb-7 text-[16px] leading-[1.75] text-[#464646]">
                39 years of management experience rising to COO-level roles
                across Consumer Durables, Automotive, Telecom, and SaaS.
                Independent management consultant since founding Simpleworks
                Consulting — working exclusively one-to-one with founders who
                need a senior operator in their corner.
              </p>
              <ul className="flex list-none flex-col gap-2.5 p-0">
                {CREDENTIALS.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-[14px] text-[#878787]">
                    <span className="text-[#ED1C24]">&rarr;</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-[#F7F5F2] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ED1C24]">
            The Process
          </p>
          <h2 className="mb-4 text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.2] text-[#0F0F0F]">
            Simple. One-to-one. <em className="not-italic text-[#ED1C24]">No cohorts.</em>
          </h2>
          <p className="mb-12 max-w-[600px] text-[19px] italic leading-[1.65] text-[#464646]">
            Most mentorship programmes put you in a room with eleven other
            founders. This isn&rsquo;t that.
          </p>
          <div className="grid grid-cols-1 gap-[2px] border border-[#E1E1E1] bg-[#E1E1E1] sm:grid-cols-2 md:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-white px-7 py-9">
                <span className="mb-5 block text-[42px] font-bold leading-none text-[#E1E1E1]">
                  {s.n}
                </span>
                <h3 className="mb-3 text-[17px] font-bold text-[#0F0F0F]">{s.title}</h3>
                <p className="text-[15px] leading-[1.65] text-[#464646]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section id="outcomes" className="border-t border-[#E1E1E1] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ED1C24]">
            Outcomes
          </p>
          <h2 className="mb-4 text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.2] text-[#0F0F0F]">
            What founders leave with <em className="not-italic text-[#ED1C24]">differently.</em>
          </h2>
          <p className="mb-12 max-w-[600px] text-[19px] italic leading-[1.65] text-[#464646]">
            Not frameworks in a slide deck. Working systems inside the
            business.
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {OUTCOMES.map((o) => (
              <div
                key={o.title}
                className="border-l-2 border-[#E1E1E1] pl-6 transition-colors duration-200 hover:border-[#ED1C24]"
              >
                <h3 className="mb-2.5 text-[18px] font-bold text-[#0F0F0F]">{o.title}</h3>
                <p className="text-[16px] leading-[1.7] text-[#464646]">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-[#E1E1E1] bg-[#F7F5F2] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ED1C24]">
            Common Questions
          </p>
          <h2 className="mb-[52px] text-[clamp(28px,3.5vw,42px)] font-bold leading-[1.2] text-[#0F0F0F]">
            What founders <em className="not-italic text-[#ED1C24]">ask first.</em>
          </h2>
          <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
            {FAQS.map((item) => (
              <div key={item.q}>
                <p className="mb-3 text-[17px] font-bold leading-[1.4] text-[#0F0F0F]">{item.q}</p>
                <p className="text-[16px] leading-[1.7] text-[#464646]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section id="contact" className="border-t border-[#E1E1E1] px-6 py-24 text-center md:px-12">
        <div className="mx-auto max-w-[680px]">
          <h2 className="mb-5 text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.2] text-[#0F0F0F]">
            Ready to talk to a startup
            <br />
            mentor who has <em className="not-italic text-[#ED1C24]">been there?</em>
          </h2>
          <p className="mb-10 text-[18px] italic leading-[1.6] text-[#464646]">
            Start with a 30-minute call. No pitch. No cohort. Just a direct
            conversation about your business and whether I can help.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#ED1C24] px-9 py-4 text-[15px] font-semibold text-white transition-opacity hover:opacity-[0.88]"
            >
              <WhatsAppIcon />
              WhatsApp Prem
            </a>
            <a
              href={CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border-[1.5px] border-[#0F0F0F] px-8 py-[14px] text-[15px] font-semibold text-[#0F0F0F] transition-colors hover:bg-[#0F0F0F] hover:text-white"
            >
              Book a 30-min Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
