import Image from "next/image";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// Shared "You work with Premraj, not a junior team." section, used on
// /msme-business-coach and /services/small-business-consulting. Career lines,
// portrait and education live here once, so a credential change updates both
// pages. Each page passes its own lead paragraph, sub-line and "what that
// means" line. Wording limits: msme-credibility-handover.md.

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
    line: "Management team, running growth and strategy. Neoffice won the ET-SIDBI MSME award for Best Exporter, Micro category, in 2019",
  },
  {
    name: "Around 3,000 MSME partners",
    line: "Worked with and coached on business performance across the corporate years",
  },
];

const WRAP = "max-w-[1200px] mx-auto px-4 md:px-10";
const SECTION = "border-t border-rule py-12 md:py-16";
const EYEBROW =
  "text-[11px] md:text-[13px] uppercase tracking-widest font-light text-light mb-3";
const H2 =
  "text-[30px] leading-[1.18] md:text-[36px] font-bold tracking-tight-1 text-ink";
const BTN =
  "inline-block bg-transparent border border-red text-red text-[14px] px-9 py-[14px] rounded-[1px] hover:bg-red hover:text-white transition-colors";
const LABEL =
  "text-[11px] md:text-[13px] uppercase tracking-widest font-light text-light";

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

export default function PremrajBio({
  ctaHref,
  portraitAlt,
  subLine,
  lead,
  meaning,
}: {
  ctaHref: string;
  portraitAlt: string;
  subLine: React.ReactNode;
  lead: React.ReactNode;
  meaning: React.ReactNode;
}) {
  return (
    <section id="who" className={SECTION}>
      <div className={WRAP}>
        <div className="grid gap-10 md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr] md:gap-14 md:items-start">
          <div>
            <Image
              src="/images/landing/prem-menon-portrait.webp"
              alt={portraitAlt}
              width={1024}
              height={1024}
              sizes="(min-width: 768px) 340px, 80vw"
              className="w-full max-w-[340px] h-auto mx-auto md:mx-0"
            />
          </div>
          <div>
            <p className={EYEBROW}>Who you&rsquo;ll work with</p>
            <h2 className={`${H2} mb-3`}>
              You work with Premraj,{" "}
              <span className="text-red">not a junior team.</span>
            </h2>
            <p className="text-[15px] text-light mb-5">{subLine}</p>
            <p className="text-[18px] md:text-[20px] text-ink leading-[1.6] mb-8">
              {lead}
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
              {meaning}
            </p>
            <p className="text-[14px] text-light mb-8">
              IIM Bengaluru · Ross School of Business, University of Michigan
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href={ctaHref}
                data-cta="bio"
                target="_blank"
                rel="noopener noreferrer"
                className={BTN}
              >
                <WhatsAppIcon />
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
  );
}
