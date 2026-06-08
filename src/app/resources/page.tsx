import Reveal from "@/components/Reveal";
import ResourceDownloadButton from "@/components/ResourceDownloadButton";
import ResourceDownloadModal from "@/components/ResourceDownloadModal";

export const metadata = {
  title: { absolute: "Resources | Simpleworks | Business Consultant Bengaluru" },
  description:
    "Downloadable industry insights, frameworks and guides from Prem Menon — management consultant with 39 years of experience, for Indian MSME and family business founders.",
  alternates: {
    canonical: "https://simpleworks.in/resources",
  },
};

type Resource = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  file: string;
  pages: string;
};

const resources: Resource[] = [
  {
    slug: "msme-growth-playbook",
    title: "The MSME Growth Playbook: Five Levers for the Next Stage",
    category: "Growth",
    excerpt:
      "A practical framework for Indian MSME founders to identify which lever — market, margin, talent, systems or capital — will unlock the next stage of growth.",
    file: "/resources/msme-growth-playbook.pdf",
    pages: "12 pages",
  },
  {
    slug: "family-business-succession-checklist",
    title: "Family Business Succession: A Founder's Checklist",
    category: "Leadership",
    excerpt:
      "The questions every founder should answer before handing over the reins — drawn from three decades of advising Indian family businesses through transitions.",
    file: "/resources/family-business-succession-checklist.pdf",
    pages: "8 pages",
  },
  {
    slug: "okr-implementation-guide",
    title: "OKRs for MSMEs: A No-Nonsense Implementation Guide",
    category: "Execution",
    excerpt:
      "How to set, cascade and review Objectives and Key Results in a small or mid-sized business — without the jargon or the overhead.",
    file: "/resources/okr-implementation-guide.pdf",
    pages: "10 pages",
  },
];

const formatPdfMeta = (r: Resource) => `PDF · ${r.pages}`;

export default function ResourcesPage() {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "YOUR_FORM_ID";
  const resourceFormUrl = `https://formspree.io/f/${formspreeId}`;

  return (
    <>
      {/* PAGE HEADER */}
      <div className="flex border-b border-rule">
        <div className="relative hidden md:flex w-[72px] flex-shrink-0 items-start pt-14 pl-6">
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-red" />
        </div>
        <div className="flex flex-1 flex-col gap-8 px-6 py-10 md:px-[60px] md:py-14 md:pl-14">
          <div className="max-w-[640px]">
            <p
              className="text-eyebrow uppercase tracking-wide-10 text-light"
              style={{ opacity: 0, animation: "fadeUp 0.6s ease 0.1s both" }}
            >
              Simpleworks · Resources &amp; Downloads
            </p>
            <h1
              className="mt-[18px] text-[36px] font-bold leading-[1.1] tracking-tight-2 md:text-[52px]"
              style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.2s both" }}
            >
              Frameworks worth
              <br />
              keeping <span className="text-red">on hand.</span>
            </h1>
            <p
              className="mt-2.5 text-[13px] tracking-wide-3 text-light"
              style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.25s both" }}
            >
              Prem Menon · Business Consultant in Bengaluru · MSME Consultant · OKR
              Consultant · Family Business Advisory
            </p>
            <p
              className="mt-5 max-w-[520px] text-[17px] italic leading-[1.65] text-mid"
              style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.3s both" }}
            >
              Downloadable guides and frameworks distilled from 39 years of advising
              Indian MSMEs and family businesses — yours as a free PDF, in exchange
              for an email address.
            </p>
          </div>
        </div>
      </div>

      {/* RESOURCES GRID */}
      <section className="reveal px-6 py-14 md:px-[60px] md:py-20 md:pl-[132px]">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-10 md:gap-y-14 lg:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.slug}
              className="group flex flex-col border-t-[3px] border-t-transparent pt-6 transition-colors hover:border-t-red"
            >
              <span className="mb-3.5 inline-block w-fit bg-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide-4 text-white">
                {resource.category}
              </span>
              <h2 className="text-[22px] font-bold leading-[1.3] tracking-tight-1 transition-colors group-hover:text-red">
                {resource.title}
              </h2>
              <p className="mt-3.5 line-clamp-3 flex-1 text-[15px] leading-[1.7] text-mid">
                {resource.excerpt}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-rule pt-4">
                <span className="text-[12px] tracking-wide-3 text-light">
                  {formatPdfMeta(resource)}
                </span>
                <ResourceDownloadButton title={resource.title} file={resource.file} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS STRIP */}
      <div className="reveal flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between gap-6 md:gap-10 border-t border-rule bg-warm px-6 py-10 md:px-[60px] md:py-14 md:pl-[132px]">
        <div className="max-w-[560px]">
          <p className="text-eyebrow uppercase tracking-wide-9 text-light">
            How downloads work
          </p>
          <p className="mt-5 text-[22px] md:text-[28px] font-bold leading-[1.2] tracking-tight-1">
            Share your email,
            <br />
            get the PDF <em className="font-bold italic text-red">instantly.</em>
          </p>
          <p className="mt-4 max-w-[480px] text-[15px] leading-[1.7] text-mid">
            Each guide is free. We just ask for an email address before the
            download starts — so we can send you the link and, occasionally,
            related insights. No spam, ever.
          </p>
        </div>
      </div>

      <ResourceDownloadModal formActionUrl={resourceFormUrl} />
      <Reveal />
    </>
  );
}
