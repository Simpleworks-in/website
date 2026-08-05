import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: {
    absolute: "Independent Management Consultant India | Prem Menon | Simpleworks",
  },
  description:
    "Prem Menon is an independent management consultant in India with 39 years of experience across Consumer Durables, Telecom and SaaS. Founder of Simpleworks Consulting, Bengaluru.",
  alternates: {
    canonical: "https://www.simpleworks.in/about",
  },
  openGraph: {
    title: "Independent Management Consultant India | Prem Menon | Simpleworks",
    description:
      "Prem Menon is an independent management consultant in India with 39 years of experience across Consumer Durables, Telecom and SaaS. Founder of Simpleworks Consulting, Bengaluru.",
    url: "https://www.simpleworks.in/about",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.simpleworks.in/#localbusiness",
      name: "Simpleworks Consulting",
      description:
        "Independent management consulting firm in Bengaluru working with Indian MSMEs and startup founders on business strategy, go-to-market planning, and OKR consulting.",
      url: "https://www.simpleworks.in",
      telephone: "+919036099000",
      email: "pm@simpleworks.in",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.9716,
        longitude: 77.5946,
      },
      founder: { "@id": "https://www.simpleworks.in/#prem-menon" },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      priceRange: "₹₹₹",
      openingHours: "Mo-Fr 09:00-18:00",
    },
    {
      "@type": "Person",
      "@id": "https://www.simpleworks.in/#prem-menon",
      name: "Prem Menon",
      jobTitle: "Founder & Principal Consultant",
      worksFor: { "@id": "https://www.simpleworks.in/#localbusiness" },
      url: "https://www.simpleworks.in/about",
      sameAs: [
        "https://www.linkedin.com/in/premraj/",
        "https://premraj.substack.com/",
        "https://x.com/nonemmerp",
      ],
      description:
        "Management consultant with 39 years of experience across Consumer Durables, Automotive, Telecom, and IT/SaaS in India.",
      knowsAbout: [
        "Business Strategy",
        "Go-to-Market Planning",
        "OKR Consulting",
        "MSME Advisory",
        "Business Turnaround",
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      {/* PAGE HEADER */}
      <section className="flex flex-col lg:flex-row min-h-0 lg:min-h-[88vh] overflow-hidden border-b-[0.5px] border-rule">
        <div className="relative hidden lg:flex w-[72px] flex-shrink-0 items-start pt-[72px] pl-6">
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-red" />
        </div>

        <div className="flex flex-col lg:flex-row flex-1 items-stretch">
          {/* Text */}
          <div className="flex w-full lg:w-[480px] flex-shrink-0 flex-col justify-center px-6 py-12 lg:pt-[72px] lg:pr-10 lg:pb-[72px] lg:pl-14">
            <p className="mb-6 text-eyebrow uppercase tracking-wide-10 text-light opacity-0 animate-fade-up [animation-delay:0.1s]">
              Founder · Simpleworks Consulting
            </p>
            <h1 className="mb-2 text-[36px] leading-[1.05] md:text-hero-h1 md:leading-[1] font-bold tracking-tight-2 opacity-0 animate-fade-up [animation-delay:0.2s]">
              Prem
              <br />
              <span className="text-red">Menon</span>
            </h1>
            <p className="mb-8 text-[16px] tracking-wide-1 text-mid opacity-0 animate-fade-up [animation-delay:0.3s]">
              Management Consultant · India &amp; Bengaluru
            </p>
            <div className="mb-7 h-[2px] w-10 bg-red opacity-0 animate-fade-up [animation-delay:0.35s]" />
            <p className="mb-9 max-w-[400px] text-[18px] md:text-[22px] italic leading-[1.55] text-ink opacity-0 animate-fade-up [animation-delay:0.45s]">
              &ldquo;Business growth doesn&rsquo;t have to be complicated. Most of the time, it just needs clarity.&rdquo;
            </p>
            <div className="flex gap-8 opacity-0 animate-fade-up [animation-delay:0.55s]">
              <div className="flex flex-col gap-1">
                <span className="text-[28px] md:text-[32px] font-bold leading-none text-ink">
                  39<em className="not-italic text-red">+</em>
                </span>
                <span className="text-eyebrow-lg uppercase tracking-wide-5 text-light">
                  Years Experience
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[28px] md:text-[32px] font-bold leading-none text-ink">6</span>
                <span className="text-eyebrow-lg uppercase tracking-wide-5 text-light">
                  Major Industries
                </span>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex flex-1 items-center justify-center p-6 md:p-10 opacity-0 animate-fade-in [animation-delay:0.6s]">
            <Image
              src="/prem-menon.png"
              alt="Prem Menon — Founder, Simpleworks Consulting"
              width={800}
              height={1000}
              className="mix-blend-multiply max-h-[400px] md:max-h-[62vh] max-w-[88%] w-auto h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <div className="reveal border-b-[0.5px] border-rule bg-warm px-6 py-12 md:py-[60px] md:pl-[132px] md:pr-[60px]">
        <p className="mb-9 text-eyebrow-lg font-medium uppercase tracking-wide-5 text-light">
          Career — Organisations Across Four Sectors
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[2px]">
          <div className="lg:border-r-[0.5px] border-rule py-6 pl-0 pr-7">
            <span className="mb-4 block text-eyebrow-lg font-semibold uppercase tracking-wide-8 text-red">
              Consumer Durables
            </span>
            <div className="flex flex-col gap-2.5">
              <div>
                <p className="text-[15px] font-semibold leading-[1.3] text-ink">
                  Usha International
                </p>
              </div>
            </div>
          </div>

          <div className="lg:border-r-[0.5px] border-rule py-6 pl-0 pr-7">
            <span className="mb-4 block text-eyebrow-lg font-semibold uppercase tracking-wide-8 text-red">
              Automotive &amp; Tyres
            </span>
            <div className="flex flex-col gap-2.5">
              <div>
                <p className="text-[15px] font-semibold leading-[1.3] text-ink">MRF Tyres</p>
              </div>
              <div>
                <p className="text-[15px] font-semibold leading-[1.3] text-ink">Apollo Tyres</p>
              </div>
            </div>
          </div>

          <div className="lg:border-r-[0.5px] border-rule py-6 pl-0 pr-7">
            <span className="mb-4 block text-eyebrow-lg font-semibold uppercase tracking-wide-8 text-red">
              Telecom
            </span>
            <div className="flex flex-col gap-2.5">
              <div>
                <p className="text-[15px] font-semibold leading-[1.3] text-ink">BPL Mobile</p>
              </div>
              <div>
                <p className="text-[15px] font-semibold leading-[1.3] text-ink">Airtel</p>
              </div>
              <div>
                <p className="text-[15px] font-semibold leading-[1.3] text-ink">Tata Docomo</p>
              </div>
            </div>
          </div>

          <div className="py-6 pl-0 pr-7">
            <span className="mb-4 block text-eyebrow-lg font-semibold uppercase tracking-wide-8 text-red">
              Entrepreneurial
            </span>
            <div className="flex flex-col gap-2.5">
              <div>
                <p className="text-[15px] font-semibold leading-[1.3] text-ink">
                  Viworks Ventures
                </p>
              </div>
              <div>
                <p className="text-[15px] font-semibold leading-[1.3] text-ink">
                  Neoffice AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STORY */}
      <section className="reveal flex flex-col md:grid md:grid-cols-[1fr_380px] items-start gap-12 md:gap-20 border-b-[0.5px] border-rule px-6 py-12 md:py-[88px] md:pl-[132px] md:pr-[60px]">
        <div>
          <p className="mb-5 text-eyebrow-lg font-medium uppercase tracking-wide-5 text-light">
            The Story
          </p>
          <h2 className="mb-7 text-[32px] leading-[1.18] md:text-sec-h2 md:leading-[1.15] font-bold tracking-tight-1">
            39 years in the thick of it —
            <br />
            building, scaling, <span className="text-red">turning around.</span>
          </h2>
          <div className="text-[16px] md:text-[17px] leading-[1.75] md:leading-[1.82] text-mid">
            <p className="mb-[22px]">
              I started my corporate career in 1987 on the front line — as a{" "}
              <strong className="font-semibold text-ink">
                Sales Executive at Usha International
              </strong>
              . That ground-level beginning shaped everything that followed. I learned early that
              real business insight comes from being where the customer is, not from a head office.
            </p>
            <p className="mb-[22px]">
              Over the next three decades, I moved through some of India&rsquo;s most demanding
              industries — consumer durables, automotive tyres, telecom, and SaaS. I have handled{" "}
              <strong className="font-semibold text-ink">
                Sales and Distribution, Marketing, Product Management, Growth, Call Center
                Operations, Customer retention,
              </strong>{" "}
              and <strong className="font-semibold text-ink">Customer management</strong> — and
              carried full responsibility for both the{" "}
              <strong className="font-semibold text-ink">
                top line and bottom line of the P&amp;L
              </strong>{" "}
              across large geographies. I have built and led large teams — and learned that a
              well-aligned team is often the difference between a good strategy and one that
              actually works.
            </p>
            <p className="mb-[22px]">
              That journey took me from Sales Executive all the way to{" "}
              <strong className="font-semibold text-ink">
                Chief Operating Officer of Kerala Circle at Tata Docomo
              </strong>{" "}
              — one of India&rsquo;s most competitive telecom markets. At Tata Docomo, I also took
              on the additional responsibility of serving as an{" "}
              <strong className="font-semibold text-ink">Ethics Counselor</strong>, a role that
              cemented my belief that the best business decisions are always values-led. You build
              trust before you build market share.
            </p>
            <p className="mb-[22px]">
              At 50, I made a deliberate choice to step off the corporate track and onto the
              entrepreneurial one. I co-founded{" "}
              <strong className="font-semibold text-ink">Viworks Ventures</strong>, then headed
              product and growth at{" "}
              <strong className="font-semibold text-ink">Neoffice AI</strong> — a SaaS startup
              where I learned firsthand what it takes to build from near-zero with limited
              resources and unlimited ambition.
            </p>
            <p className="mb-[22px]">
              That experience changed how I see business problems. When you&rsquo;ve worked inside
              large organisations with deep resources <em>and</em> inside startups with none, you
              develop a very clear sense of what actually moves the needle — and what just looks
              like progress.
            </p>
            <p className="mb-0">
              <strong className="font-semibold text-ink">
                Simpleworks Consulting — an independent management consulting firm — is the natural
                outcome of that entire journey — and my answer to a question many Indian MSME
                founders and family business owners ask: where do I find a management consultant in
                India — not a large firm, but an independent business growth consultant — who
                actually understands my business?
              </strong>{" "}
              It exists for founders and business leaders who know their business has more
              potential, but can&rsquo;t quite find the lever that unlocks the next stage.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[380px] md:sticky md:top-[100px] md:pt-[52px]">
          <div className="border-l-[3px] border-red bg-warm py-7 pl-6 pr-7">
            <p className="mb-4 text-[17px] md:text-[18px] italic leading-[1.6] text-ink">
              &ldquo;What I bring is not a framework from a textbook. It&rsquo;s 39 years of real
              decisions, real teams, and real markets — distilled into advice that is simple enough
              to act on by Monday morning.&rdquo;
            </p>
            <cite className="text-eyebrow-lg uppercase not-italic tracking-wide-5 text-light">
              — Prem Menon, Founder
            </cite>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="reveal border-b-[0.5px] border-rule bg-warm px-6 py-12 md:py-20 md:pl-[132px] md:pr-[60px]">
        <p className="mb-5 text-eyebrow-lg font-medium uppercase tracking-wide-5 text-light">
          Education
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 md:leading-[1.15] font-bold tracking-tight-1">
          Grounded in practice.
          <br />
          <span className="text-red">Sharpened by learning.</span>
        </h2>
        <div className="mt-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[2px]">
          <div className="border-t-2 border-rule bg-bg px-7 py-8 transition-colors duration-[250ms] hover:border-t-red">
            <p className="mb-3 text-eyebrow-lg font-semibold uppercase tracking-wide-6 text-red">
              1987
            </p>
            <h3 className="mb-2.5 text-[17px] font-bold leading-[1.3] text-ink">
              Bachelor of Arts
            </h3>
            <p className="text-[14px] leading-[1.5] text-mid">
              Bengaluru University
              <br />
              Bengaluru, India
            </p>
          </div>
          <div className="border-t-2 border-rule bg-bg px-7 py-8 transition-colors duration-[250ms] hover:border-t-red">
            <p className="mb-3 text-eyebrow-lg font-semibold uppercase tracking-wide-6 text-red">
              2006
            </p>
            <h3 className="mb-2.5 text-[17px] font-bold leading-[1.3] text-ink">
              EGMP — Executive General Management Programme
            </h3>
            <p className="text-[14px] leading-[1.5] text-mid">
              Indian Institute of Management
              <br />
              Bengaluru (IIM-B)
            </p>
          </div>
          <div className="border-t-2 border-rule bg-bg px-7 py-8 transition-colors duration-[250ms] hover:border-t-red">
            <p className="mb-3 text-eyebrow-lg font-semibold uppercase tracking-wide-6 text-red">
              2013
            </p>
            <h3 className="mb-2.5 text-[17px] font-bold leading-[1.3] text-ink">
              Advanced Management Programme
            </h3>
            <p className="text-[14px] leading-[1.5] text-mid">
              Ross School of Business
              <br />
              University of Michigan
              <br />
              <span className="text-[12px] text-light">Conducted by TMTC Pune</span>
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I HELP WITH */}
      <section className="reveal border-b-[0.5px] border-rule px-6 py-12 md:py-20 md:pl-[132px] md:pr-[60px]">
        <div className="mb-12 max-w-[560px]">
          <p className="mb-5 text-eyebrow-lg font-medium uppercase tracking-wide-5 text-light">
            What I Can Help You With
          </p>
          <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 md:leading-[1.15] font-bold tracking-tight-1">
            Practical advice. <span className="text-red">Clear direction.</span> Real execution.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[2px]">
          <div className="lg:border-r-[0.5px] border-t-2 border-rule pt-6 pr-8 pb-7 pl-0 transition-colors duration-[250ms] hover:border-t-red">
            <span className="mb-4 block text-[28px] font-bold leading-none tracking-tight-2 text-red opacity-25">
              01
            </span>
            <h3 className="mb-2.5 text-[17px] font-bold leading-[1.35] text-ink">
              Strategic Clarity &amp; Business Design
            </h3>
            <p className="text-[14px] leading-[1.7] text-mid">
              Diagnose what&rsquo;s holding growth back and build a direction the whole organisation
              can follow.
            </p>
          </div>
          <div className="lg:border-r-[0.5px] border-t-2 border-rule pt-6 pr-8 pb-7 pl-0 transition-colors duration-[250ms] hover:border-t-red">
            <span className="mb-4 block text-[28px] font-bold leading-none tracking-tight-2 text-red opacity-25">
              02
            </span>
            <h3 className="mb-2.5 text-[17px] font-bold leading-[1.35] text-ink">
              Go-to-Market Strategy That Actually Works
            </h3>
            <p className="text-[14px] leading-[1.7] text-mid">
              Right segment, right message, right channel — before spending on the ones that
              don&rsquo;t convert.
            </p>
          </div>
          <div className="border-t-2 border-rule pt-6 pr-8 pb-7 pl-0 transition-colors duration-[250ms] hover:border-t-red">
            <span className="mb-4 block text-[28px] font-bold leading-none tracking-tight-2 text-red opacity-25">
              03
            </span>
            <h3 className="mb-2.5 text-[17px] font-bold leading-[1.35] text-ink">
              OKR Consultant &amp; Execution Frameworks
            </h3>
            <p className="text-[14px] leading-[1.7] text-mid">
              Goals, accountability structures, and review rhythms that turn strategy into progress.
            </p>
          </div>
          <div className="lg:border-r-[0.5px] border-t-2 border-rule pt-6 pr-8 pb-7 pl-0 transition-colors duration-[250ms] hover:border-t-red">
            <span className="mb-4 block text-[28px] font-bold leading-none tracking-tight-2 text-red opacity-25">
              04
            </span>
            <h3 className="mb-2.5 text-[17px] font-bold leading-[1.35] text-ink">
              Team Alignment &amp; Leadership Development
            </h3>
            <p className="text-[14px] leading-[1.7] text-mid">
              Build a leadership team that can run the business — not just report to you.
            </p>
          </div>
          <div className="lg:border-r-[0.5px] border-t-2 border-rule pt-6 pr-8 pb-7 pl-0 transition-colors duration-[250ms] hover:border-t-red">
            <span className="mb-4 block text-[28px] font-bold leading-none tracking-tight-2 text-red opacity-25">
              05
            </span>
            <h3 className="mb-2.5 text-[17px] font-bold leading-[1.35] text-ink">
              Practical, Tech-Enabled Process Simplification
            </h3>
            <p className="text-[14px] leading-[1.7] text-mid">
              Identify where complexity is killing productivity and replace it with systems that
              work.
            </p>
          </div>
          {/* Empty cell for grid balance */}
          <div className="hidden lg:block pointer-events-none border-t-2 border-transparent bg-transparent pt-6 pr-8 pb-7 pl-0" />
        </div>
      </section>

      {/* IS THIS YOU */}
      <section className="reveal border-b-[0.5px] border-rule bg-warm px-6 py-12 md:py-20 md:pl-[132px] md:pr-[60px]">
        <p className="mb-5 text-eyebrow-lg font-medium uppercase tracking-wide-5 text-light">
          Is This You?
        </p>
        <h2 className="text-[32px] leading-[1.18] md:text-sec-h2 md:leading-[1.15] font-bold tracking-tight-1">
          If any of these sound familiar,
          <br />
          <span className="text-red">we should talk.</span>
        </h2>
        <div className="mt-11 flex flex-col">
          <div className="group grid grid-cols-[48px_1fr] md:grid-cols-[56px_1fr] items-start gap-4 md:gap-7 border-b-[0.5px] border-rule py-8 pt-0">
            <div className="mt-[3px] flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-rule transition-colors duration-[250ms] group-hover:border-red">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-red"
                fill="none"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-[20px] font-bold leading-[1.3] text-ink">
                Stuck at a revenue plateau — or needing a business turnaround
              </h3>
              <p className="max-w-[680px] text-[16px] leading-[1.7] text-mid">
                You can&rsquo;t seem to break through, despite working harder than ever. The
                business is busy but the numbers aren&rsquo;t moving.
              </p>
            </div>
          </div>

          <div className="group grid grid-cols-[48px_1fr] md:grid-cols-[56px_1fr] items-start gap-4 md:gap-7 border-b-[0.5px] border-rule py-8">
            <div className="mt-[3px] flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-rule transition-colors duration-[250ms] group-hover:border-red">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-red"
                fill="none"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-[20px] font-bold leading-[1.3] text-ink">
                Wearing too many hats
              </h3>
              <p className="max-w-[680px] text-[16px] leading-[1.7] text-mid">
                Growth is slowing because the founder is the bottleneck. Every decision flows
                through you, and it isn&rsquo;t sustainable.
              </p>
            </div>
          </div>

          <div className="group grid grid-cols-[48px_1fr] md:grid-cols-[56px_1fr] items-start gap-4 md:gap-7 py-8">
            <div className="mt-[3px] flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-rule transition-colors duration-[250ms] group-hover:border-red">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-red"
                fill="none"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </div>
            <div>
              <h3 className="mb-2 text-[20px] font-bold leading-[1.3] text-ink">
                Ready to build a business that runs well
              </h3>
              <p className="max-w-[680px] text-[16px] leading-[1.7] text-mid">
                You want the right structure, the right team, and the right plan — a business that
                performs even when you&rsquo;re not in the room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="reveal grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20 bg-bg px-6 py-12 md:py-20 md:pl-[132px] md:pr-[60px]"
      >
        <div className="flex flex-col justify-center gap-5 border-l-2 border-red pl-6 md:pl-7">
          <p className="text-eyebrow-lg font-medium uppercase tracking-wide-5 text-light">
            Start Here
          </p>
          <p className="text-[28px] md:text-[34px] font-bold leading-[1.2] tracking-tight-1 text-ink">
            The first conversation
            <br />
            <span className="text-red">is free.</span>
          </p>
          <p className="text-[20px] md:text-[24px] font-normal italic leading-[1.3] text-mid">
            The clarity usually isn&rsquo;t.
          </p>
          <p className="mt-1 max-w-[360px] text-[15px] leading-[1.7] text-light">
            Whether you run a family business, an MSME, or an early-stage startup — tell me what
            you&rsquo;re working on. I&rsquo;ll tell you honestly whether I can help — and what
            that would look like.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div className="flex items-center gap-3.5 text-[15px] text-mid">
            <svg
              viewBox="0 0 24 24"
              className="h-[17px] w-[17px] flex-shrink-0 stroke-red"
              fill="none"
              strokeWidth={1.7}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
            <a href="mailto:pm@simpleworks.in" className="transition-colors hover:text-red">
              pm@simpleworks.in
            </a>
          </div>

          <div className="flex items-center gap-3.5 text-[15px] text-mid">
            <svg
              viewBox="0 0 24 24"
              className="h-[17px] w-[17px] flex-shrink-0 stroke-red"
              fill="none"
              strokeWidth={1.7}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span>+91 90360 99000</span>
          </div>

          <div className="flex items-center gap-3.5 text-[15px] text-mid">
            <svg
              viewBox="0 0 24 24"
              className="h-[17px] w-[17px] flex-shrink-0 stroke-red"
              fill="none"
              strokeWidth={1.7}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Bengaluru, Karnataka, India</span>
          </div>

          <div className="my-1 h-[0.5px] w-full bg-rule" />

          <a
            href="mailto:pm@simpleworks.in"
            className="inline-flex w-fit items-center gap-2.5 rounded-[1px] border-[1.5px] border-red px-8 py-3.5 text-[14px] tracking-wide-3 text-red transition-colors hover:bg-red hover:text-white"
          >
            Start a Conversation &nbsp;→
          </a>
        </div>
      </section>

      <Reveal />
    </>
  );
}
