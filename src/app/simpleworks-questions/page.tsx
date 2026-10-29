import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import OpenHashDetails from "@/components/OpenHashDetails";
import { PERSON_ID } from "@/lib/site-schema";

const URL = "https://www.simpleworks.in/simpleworks-questions";
const TITLE = "Questions About Simpleworks and Premraj Menon | Simpleworks";
const DESCRIPTION =
  "Who Premraj Menon is, what Simpleworks does, how the work runs, what it costs, and where it is not the right fit. Straight answers for MSME founders.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
};

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

// Answers are plain text with optional [text](url) links.
function stripLinks(text: string) {
  return text.replace(LINK, "$1");
}

function renderAnswer(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    out.push(text.slice(last, m.index));
    const [, label, href] = m;
    const cls = "text-red underline hover:no-underline";
    out.push(
      href.startsWith("/") ? (
        <Link key={m.index} href={href} className={cls}>
          {label}
        </Link>
      ) : (
        <a key={m.index} href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ),
    );
    last = m.index + m[0].length;
  }
  out.push(text.slice(last));
  return out;
}

export default async function SimpleworksQuestionsPage() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const page = await reader.singletons.questionsPage.readOrThrow();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.groups.flatMap((g) =>
      g.questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: { "@type": "Answer", text: stripLinks(q.answer) },
      })),
    ),
  };

  // The sitewide graph already defines the Person; reference it, don't redefine it.
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: URL,
    name: TITLE,
    mainEntity: { "@id": PERSON_ID },
  };

  // The programme table sits between "how" and "strengths".
  const tableAfter = "how";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />
      <OpenHashDetails />
      <main>
        <section className="grid grid-cols-[2px_1fr] gap-x-10 px-6 pb-10 pt-14 md:px-14 md:pb-12 md:pt-24">
          <div className="w-[2px] bg-red" />
          <div>
            <p className="mb-6 text-[11px] font-light uppercase tracking-[0.2em] text-light">{page.eyebrow}</p>
            <h1 className="mb-4 text-[36px] font-bold leading-[1.1] tracking-tight-1 text-ink text-balance md:text-hero-h1">
              {page.heading} <span className="text-red">{page.headingRed}</span>
            </h1>
            <p className="mb-6 max-w-[540px] text-[18px] leading-[1.65] text-mid">{page.intro}</p>
            <Link href="/contact" className="text-[15px] text-red underline hover:no-underline">
              Talk to Premraj Menon →
            </Link>
          </div>
        </section>

        {page.groups.map((g) => (
          <div key={g.id}>
            <section id={g.id} className="scroll-mt-16 border-t border-rule px-6 py-14 md:px-14 md:py-20">
              <h2 className="mb-4 text-[32px] font-bold leading-[1.15] tracking-tight text-ink">
                {g.title}
              </h2>
              {g.note && <p className="mb-6 max-w-[640px] text-[16px] leading-[1.7] text-mid">{g.note}</p>}
              <div className="max-w-[760px] border-b border-rule">
                {g.questions.map((q) => (
                  <details key={q.id} id={q.id} className="group scroll-mt-16 border-t border-rule">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                      <span className="text-[17px] font-bold leading-snug text-ink md:text-[19px]">
                        {q.question}
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
                    <p className="pb-3 pr-10 text-[16px] leading-[1.7] text-mid">{renderAnswer(q.answer)}</p>
                    <p className="pb-6 text-[13px] text-light">
                      <a href={`#${q.id}`} className="transition-colors hover:text-red">
                        Link to this answer
                      </a>
                    </p>
                  </details>
                ))}
              </div>
              {g.id === "verify" && (
                <p className="mt-6 text-[15px]">
                  <Link href="/sample-diagnostic-report" className="text-red underline hover:no-underline">
                    See what the Diagnostic brief looks like →
                  </Link>
                </p>
              )}
            </section>

            {g.id === tableAfter && (
              <section id="table" className="scroll-mt-16 border-t border-rule px-6 py-14 md:px-14 md:py-20">
                <h2 className="mb-4 text-[32px] font-bold leading-[1.15] tracking-tight text-ink">
                  What each programme <span className="text-red">involves</span>
                </h2>
                <p className="mb-8 max-w-[640px] text-[16px] leading-[1.7] text-mid">
                  Who is involved, how often, where, and what you receive.
                </p>
                <div className="hidden overflow-x-auto md:block">
                  <table className="w-full border-collapse text-left text-[15px] leading-[1.6] text-mid">
                    <thead>
                      <tr>
                        <th className="border-b border-rule py-3 pr-6" />
                        {page.programmeTable.map((p) => (
                          <th key={p.name} className="border-b border-rule py-3 pr-6 font-bold text-ink">
                            {p.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {(
                        [
                          ["Fee", "fee"],
                          ["Who is involved", "who"],
                          ["How often", "often"],
                          ["Where", "where"],
                          ["What you receive", "receive"],
                          ["What your team does", "teamDoes"],
                        ] as const
                      ).map(([label, key]) => (
                        <tr key={key}>
                          <th scope="row" className="border-b border-rule py-4 pr-6 align-top font-bold text-ink">
                            {label}
                          </th>
                          {page.programmeTable.map((p) => (
                            <td key={p.name} className="border-b border-rule py-4 pr-6 align-top">
                              {p[key]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="md:hidden">
                  {page.programmeTable.map((p) => (
                    <div key={p.name} className="border-t border-rule py-6">
                      <h3 className="mb-3 text-[20px] font-bold text-ink">{p.name}</h3>
                      <dl className="text-[15px] leading-[1.6] text-mid">
                        {(
                          [
                            ["Fee", p.fee],
                            ["Who is involved", p.who],
                            ["How often", p.often],
                            ["Where", p.where],
                            ["What you receive", p.receive],
                            ["What your team does", p.teamDoes],
                          ] as const
                        ).map(([label, value]) => (
                          <div key={label} className="mb-3">
                            <dt className="font-bold text-ink">{label}</dt>
                            <dd>{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        ))}

        <section className="border-t border-rule px-6 py-14 md:px-14 md:py-20">
          <h2 className="mb-4 text-[40px] font-bold leading-[1.1] tracking-tight text-ink">
            Still have a question? <span className="text-red">Let&rsquo;s talk.</span>
          </h2>
          <p className="mb-8 max-w-[460px] text-[16px] leading-[1.7] text-mid">
            A short introductory call, with no pitch. You will hear plainly whether Simpleworks can help.
          </p>
          <Link
            href="/contact"
            className="inline-block whitespace-nowrap rounded-[1px] border border-red px-9 py-4 font-serif text-[15px] text-red transition-colors hover:bg-red hover:text-white"
          >
            Let&rsquo;s Talk
          </Link>
        </section>
      </main>
    </>
  );
}
