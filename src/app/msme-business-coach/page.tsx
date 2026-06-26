import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MSME Business Coach India | Simpleworks Consulting",
  description:
    "One-to-one MSME business coaching with Prem Menon — 39 years of industry experience. Online across India. In-person in Bengaluru. Book a free 30-min call.",
  keywords:
    "MSME business coach, business mentor India, startup business coach, small business coaching Bengaluru",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://simpleworks.in/msme-business-coach",
  },
  openGraph: {
    title: "MSME Business Coach India | Simpleworks Consulting",
    description:
      "One-to-one coaching for MSME founders who want to grow with clarity — not noise.",
    url: "https://simpleworks.in/msme-business-coach",
    siteName: "Simpleworks Consulting",
    type: "website",
  },
};

const WA_LINK =
  "https://wa.me/919036099000?text=Hi%20Prem%2C%20I%20found%20your%20MSME%20coaching%20page%20and%20would%20like%20to%20connect.";

const STATS = [
  { num: "39+", label: "Years in business\nleadership" },
  { num: "6", label: "Industries: FMCG\nto SaaS" },
  { num: "1-to-1", label: "No group batches.\nOnly you." },
];

const PAIN_QUOTES = [
  "“We're busy every day but I don't see the growth I expected.”",
  "“My team executes, but we keep missing targets somehow.”",
  "“I know what the problem is. I just can't seem to fix it.”",
  "“We have no real GTM plan — we just chase every lead that comes.”",
];

const STEPS = [
  {
    title: "Discover — understand your business from the inside",
    body: "Map your business model, market, team, and where you actually stand today — without assumptions.",
  },
  {
    title: "Diagnose — find the real constraint",
    body: "Most business problems have a root cause that isn't obvious. We surface what's actually holding growth back, not just the symptoms.",
  },
  {
    title: "Frame the recommendation — a clear path forward",
    body: "A practical, prioritised plan — strategy, GTM, or execution — that fits your business and your capacity to act.",
  },
  {
    title: "Execution cadence — run the plan together",
    body: "We translate the recommendation into weekly actions. You're not left with a deck — we work through implementation side by side.",
  },
  {
    title: "Set accountability — OKRs that keep you on track",
    body: "We build an OKR structure so progress is visible, ownership is clear, and course correction happens before it's too late.",
  },
];

const WHY_CARDS = [
  {
    title: "One client at a time",
    body: "Your session is yours. No group dynamics. No sharing airtime. We work only on your business.",
  },
  {
    title: "COO-level thinking",
    body: "39 years across Consumer, Telecom, Automotive and SaaS. Tested at scale — applied to your reality.",
  },
  {
    title: "In-person for Bengaluru",
    body: "Face-to-face conversations build better outcomes. If you're in Bengaluru, we meet in person.",
  },
  {
    title: "Online across India",
    body: "Founders in Mumbai, Chennai, Hyderabad and beyond — same rigour, online.",
  },
];

const FAQS = [
  {
    q: "Is this coaching or consulting?",
    a: "Both, in practice. I work with you as a thinking partner — asking the right questions, challenging assumptions, and helping you build plans yourself. When specific frameworks are needed, I bring those in too.",
  },
  {
    q: "What size of business is a good fit?",
    a: "MSMEs and startups in the ₹1 crore to ₹50 crore revenue range — early-stage founders, family business successors, and first-generation entrepreneurs navigating growth.",
  },
  {
    q: "How many sessions does an engagement involve?",
    a: "It depends on the complexity of your situation. The standard engagement runs over four structured calls — but this is flexible. Some businesses need more depth at specific stages; others move faster. We shape the cadence around what your business actually needs, not a fixed programme.",
  },
  {
    q: "I'm not in Bengaluru. Can we still work together?",
    a: "Absolutely. Founders across India connect online. Focused video calls are just as effective as in-person for structured coaching work.",
  },
  {
    q: "What is the first step?",
    a: "A free 30-minute conversation — no agenda, no pitch. You tell me about your business and what you're trying to solve. We figure out together if it makes sense to go further.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Simpleworks Consulting — MSME Business Coach",
  description:
    "One-to-one business coaching for MSME founders in India. Online across India, in-person in Bengaluru.",
  url: "https://simpleworks.in/msme-business-coach",
  telephone: "+919036099000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "IN",
  },
  founder: {
    "@type": "Person",
    name: "Prem Menon",
  },
  areaServed: "India",
  serviceType: "Business Coaching",
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

export default function MsmeBusinessCoachPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* NAV */}
      <nav className="flex items-center justify-between px-7 py-3 border-b border-[#E1E1E1] bg-white">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/landing/simpleworks-s-mark.png"
            alt="Simpleworks Consulting"
            width={30}
            height={30}
            className="w-[30px] h-[30px] object-contain"
          />
          <span className="text-[13px] font-bold text-[#0F0F0F] tracking-wide">
            Simpleworks <span className="text-[#ED1C24]">Consulting</span>
          </span>
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#ED1C24] text-[#ED1C24] text-[11px] font-bold px-4 py-1.5 uppercase tracking-widest rounded-sm hover:bg-[#ED1C24] hover:text-white transition-colors"
        >
          Book a call
        </a>
      </nav>

      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-7 py-9 border-b border-[#E1E1E1]">
        <div>
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#ED1C24] mb-3">
            MSME Business Coach
          </p>
          <h1 className="text-3xl font-bold leading-tight text-[#0F0F0F] mb-3.5">
            Your business deserves a{" "}
            <span className="text-[#ED1C24]">thinking partner,</span>
            <br />
            not a template.
          </h1>
          <p className="text-sm italic text-[#464646] leading-relaxed mb-5">
            One-to-one coaching for MSME founders who want to grow with
            clarity — not noise.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ED1C24] text-white text-[12px] font-bold px-5 py-2.5 rounded-sm"
          >
            Book your free 30-min call
          </a>
          <p className="text-[11px] text-[#878787] mt-2">
            Online across India &nbsp;·&nbsp; In-person in Bengaluru
          </p>
        </div>
        <div className="rounded-sm overflow-hidden">
          <Image
            src="/images/landing/msme-coach-hero.png"
            alt="MSME business coaching session in progress"
            width={480}
            height={400}
            className="w-full h-[210px] object-cover object-top rounded-sm"
            priority
          />
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="grid grid-cols-3 border-b border-[#E1E1E1]">
        {STATS.map((s, i) => (
          <div
            key={s.num}
            className={`py-4 px-4 text-center ${i < 2 ? "border-r border-[#E1E1E1]" : ""}`}
          >
            <div className="text-2xl font-bold text-[#ED1C24] leading-none mb-1">
              {s.num}
            </div>
            <div className="text-[11px] text-[#464646] leading-snug whitespace-pre-line">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* PAIN SECTION */}
      <section className="px-7 py-8 border-b border-[#E1E1E1]">
        <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#ED1C24] mb-2">
          Is this for you?
        </p>
        <h2 className="text-xl font-bold text-[#0F0F0F] mb-3">
          Recognise any of these?
        </h2>
        <p className="text-sm text-[#464646] leading-relaxed mb-4">
          If you&rsquo;re running a business in the ₹1–50 crore range and
          feeling any of this, you&rsquo;re in the right place.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {PAIN_QUOTES.map((quote) => (
            <div
              key={quote}
              className="bg-[#F9F9F9] border-l-[3px] border-[#ED1C24] px-3.5 py-3 rounded-r-sm"
            >
              <p className="text-xs text-[#464646] leading-relaxed italic">
                {quote}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-7 py-8 border-b border-[#E1E1E1]">
        <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#ED1C24] mb-2">
          How it works
        </p>
        <h2 className="text-xl font-bold text-[#0F0F0F] mb-3">
          A structured engagement — built around your business
        </h2>
        <p className="text-sm text-[#464646] leading-relaxed mb-4">
          This isn&rsquo;t a course or a workshop. It&rsquo;s one-to-one
          coaching working through your actual challenges — using a proven
          five-stage process.
        </p>
        <div className="flex flex-col gap-3.5">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex gap-3.5 items-start">
              <div className="w-7 h-7 min-w-[28px] bg-[#0F0F0F] text-white rounded-full flex items-center justify-center text-[11px] font-bold mt-0.5">
                {i + 1}
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-[#0F0F0F] mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-[#464646] leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY SIMPLEWORKS */}
      <section className="px-7 py-8 border-b border-[#E1E1E1]">
        <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#ED1C24] mb-2">
          Why Simpleworks
        </p>
        <h2 className="text-xl font-bold text-[#0F0F0F] mb-3">
          Personalised coaching, not a seminar seat
        </h2>
        <p className="text-sm text-[#464646] leading-relaxed mb-4">
          There are coaches who put 200 people in a room for ₹99 and sell a
          3-day course at the back. That&rsquo;s one model. This is another —
          slower, quieter, and more useful.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {WHY_CARDS.map((card) => (
            <div
              key={card.title}
              className="p-3.5 border border-[#E1E1E1] rounded-sm"
            >
              <h4 className="text-[13px] font-bold text-[#0F0F0F] mb-1">
                {card.title}
              </h4>
              <p className="text-xs text-[#464646] leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <div className="grid grid-cols-[78px_1fr] gap-5 items-center px-7 py-7 border-b border-[#E1E1E1] bg-[#FAFAFA]">
        <div className="w-[78px] h-[78px] rounded-full overflow-hidden border-2 border-[#E1E1E1] flex-shrink-0">
          <Image
            src="/images/landing/prem-menon-photo.jpg"
            alt="Prem Menon, MSME Business Coach"
            width={78}
            height={78}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div>
          <h3 className="text-[15px] font-bold text-[#0F0F0F] mb-1.5">
            Prem Menon
          </h3>
          <p className="text-xs text-[#464646] leading-relaxed">
            Founder, Simpleworks Consulting. 39 years across Usha
            International, MRF, Apollo, Airtel, Tata Docomo, and SaaS
            ventures. COO-level roles across 6 industries. IIM Bengaluru
            EGMP. Now working exclusively with MSMEs, startups, and family
            businesses in the ₹1–50 crore range.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <section className="px-7 py-8 border-b border-[#E1E1E1]">
        <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#ED1C24] mb-2">
          Common questions
        </p>
        <h2 className="text-xl font-bold text-[#0F0F0F] mb-4">
          What founders usually ask
        </h2>
        <div className="divide-y divide-[#E1E1E1]">
          {FAQS.map((item) => (
            <div key={item.q} className="py-3.5">
              <p className="text-[13px] font-bold text-[#0F0F0F] mb-1.5">
                {item.q}
              </p>
              <p className="text-xs text-[#464646] leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <div className="px-7 py-10 text-center bg-white border-t border-[#E1E1E1] border-b border-[#E1E1E1]">
        <h2 className="text-xl font-bold text-[#0F0F0F] mb-2 leading-snug">
          Ready to think clearly
          <br />
          about your business?
        </h2>
        <p className="text-sm italic text-[#464646] mb-6">
          Start with a free conversation. No commitment, no pressure.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[#25D366] text-white text-[13px] font-bold px-7 py-3.5 rounded-sm"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Prem Menon
        </a>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#F2F2F0] border-t border-[#E1E1E1] px-7 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/landing/simpleworks-s-mark.png"
            alt="Simpleworks"
            width={20}
            height={20}
            className="w-5 h-5 object-contain"
          />
          <span className="text-[12px] font-semibold text-[#ED1C24]">
            Simpleworks Consulting · Bengaluru
          </span>
        </div>
        <span className="text-[12px] font-semibold text-[#ED1C24]">
          simpleworks.in
        </span>
      </footer>
    </main>
  );
}
