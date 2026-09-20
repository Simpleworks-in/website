import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: { absolute: "Sample Diagnostic Report | Simpleworks, Bengaluru" },
  description:
    "What a Simpleworks half-day Diagnostic produces, written up in full: what I heard, what it adds up to, and the direction I would take.",
  alternates: {
    canonical: "https://www.simpleworks.in/sample-diagnostic-report",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sample Diagnostic Report | Simpleworks",
    description: "What a half-day Diagnostic produces, written up in full.",
    url: "https://www.simpleworks.in/sample-diagnostic-report",
    type: "article",
  },
};

const P = "mb-5 text-[16px] leading-[1.78] text-mid md:text-[17px]";
const SECTION = "border-t border-rule py-[52px] md:py-[68px]";
const EYEBROW =
  "mb-3.5 text-[11px] font-light uppercase tracking-widest text-light md:text-[13px]";
const H2 =
  "mb-4 text-[28px] font-bold leading-[1.18] tracking-tight text-ink md:text-[36px]";
const H3 =
  "mb-3 mt-8 text-[20px] font-bold leading-[1.3] text-ink md:text-[24px]";
const BTN =
  "inline-block whitespace-nowrap rounded-[1px] border border-red bg-transparent px-9 py-3.5 font-serif text-[14px] text-red transition-colors hover:bg-red hover:text-white";

function SectionHead({ n, title }: { n: number; title: string }) {
  return (
    <>
      <p className={EYEBROW}>Section {n}</p>
      <h2 className={H2}>{title}</h2>
    </>
  );
}

function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-8 border-l-2 border-red pl-6">
      <p className="text-[16px] italic leading-[1.65] text-ink md:text-[18px]">
        {children}
      </p>
    </blockquote>
  );
}

function Exhibit({
  head,
  rows,
  boldCols = [0],
}: {
  head: string[];
  rows: ReactNode[][];
  boldCols?: number[];
}) {
  return (
    <div className="-mx-4 mb-6 mt-6 overflow-x-auto px-4 md:mx-0 md:px-0">
      <table className="w-full min-w-[540px] border-collapse text-[15px]">
        <thead>
          <tr>
            {head.map((h, i) => (
              <th
                key={i}
                scope="col"
                className="border-b border-ink pb-3 pr-4 text-left align-bottom text-[11px] font-normal uppercase tracking-[0.14em] text-light"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td
                  key={c}
                  className="border-b border-rule py-3.5 pr-4 align-top leading-[1.6] text-mid"
                >
                  {boldCols.includes(c) ? (
                    <strong className="font-bold text-ink">{cell}</strong>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SampleDiagnosticReportPage() {
  return (
    <main>
      <article className="mx-auto max-w-[720px] px-4 md:px-6">
        {/* Cover */}
        <header className="pb-[52px] pt-14 md:pb-[68px] md:pt-20">
          <p className="mb-6 text-[11px] font-light uppercase tracking-widest text-light md:text-[13px]">
            Simpleworks Consulting · Sample Report
          </p>
          <h1 className="mb-6 text-[36px] leading-[1.1] font-bold tracking-tight-1 md:text-hero-h1 text-ink">
            Three flat years at a <span className="text-red">Hosur pipe maker.</span>
          </h1>
          <p className="max-w-[560px] text-[18px] italic leading-[1.65] text-mid">
            What you described, what I think it adds up to, and the direction I
            would take.
          </p>

          <p className="mt-8 text-[14px] leading-[1.8] text-light">
            <span className="text-mid">Prepared for:</span> Srikanth Rajagopal,
            Arunodaya Polymers Pvt Ltd, Hosur
            <br />
            <span className="text-mid">Prepared by:</span> Premraj Menon,
            Simpleworks Consulting
            <br />
            <span className="text-mid">Date:</span> 6 October 2026
            <br />
            <span className="text-mid">Basis:</span> One half-day diagnostic
            session, 2 October 2026. You, Meghna, Devanathan, and Farida by
            call.
          </p>

          <div className="mt-12 border border-rule p-6 md:p-8">
            <p className={EYEBROW}>About this document</p>
            <div className="space-y-4 text-[15px] leading-[1.75] text-mid">
              <p>
                This is a sample of what Simpleworks produces after a half-day
                diagnostic session. The company, the people and the figures are
                illustrative. The method and the standard of work are real.
              </p>
              <p>
                The session is an interview. I ask, you answer, and the answers
                are the evidence. So everything below is built on what the four
                of you said in the room — not on an audit, a site visit or a
                data review, none of which happened.
              </p>
              <p>
                Note the shape of it. It plays back what I heard, says what I
                think it adds up to, and recommends a direction. That is what a
                morning can honestly produce. It is not a plan, and anyone
                offering you a plan off one conversation is selling you
                something else.
              </p>
            </div>
          </div>
        </header>

        {/* Section 1 */}
        <section className={SECTION}>
          <SectionHead n={1} title="What you told me" />
          <p className={P}>
            Five things came out of the morning. I am putting them back to you
            in the order that matters, rather than the order they came up,
            because the order is most of the point.
          </p>

          <h3 className={H3}>You have grown by addition, and it has stopped paying</h3>
          <p className={P}>
            Three states. Then builders direct, alongside the distributors. Then
            two more categories. Then, by your own count, something like 120 new
            distributor appointments in three years. Each one was a sound answer
            to the problem in front of you that month, and you described the
            reasoning behind several of them without hesitating.
          </p>
          <p className={P}>
            Revenue has sat in the same band throughout. That is the business
            telling you addition has stopped working, and it was Meghna who said
            it first in the room, not me.
          </p>

          <h3 className={H3}>Distributor count went up. Distribution did not</h3>
          <p className={P}>
            Your own reckoning: roughly 200 names on the master, about sixty
            billing in a given quarter. Before the appointments started, you
            were at about the same number of active parties. Devanathan put five
            of his 22 people on the newest ones for most of last year and
            estimated they brought in around two crore between them.
          </p>
          <p className={P}>
            He also said, without prompting, that most of those appointments
            happened because a competitor had signed somebody in that town.
          </p>

          <h3 className={H3}>The margin did not leak — you spent it</h3>
          <p className={P}>
            Six or seven points of gross margin gone in three years. Farida
            attributed about half to resin you chose not to pass through. The
            rest tracks with scheme and discount spend, which she described as
            having roughly doubled as a share of revenue.
          </p>
          <p className={P}>
            Four people can approve a discount: you, Devanathan and the two
            regional managers. There is no floor, no band by volume, and nobody
            reviews afterwards what a scheme actually bought. Your description
            of quarter-end was that when the month is short, you call the big
            parties and give something, and that it has always worked.
          </p>

          <h3 className={H3}>The sales cycle lives in one man&rsquo;s head</h3>
          <p className={P}>
            There is no written customer definition, no call plan, no stage
            definitions. You confirmed that directly. What exists instead is
            Devanathan, who told the room he is personally in close to half of
            revenue, and who said he has stopped fighting it.
          </p>

          <h3 className={H3}>The monthly review produces updates, not decisions</h3>
          <p className={P}>
            Four hours and ten minutes in August. A pack that takes two people
            three days to build. Of fourteen actions carried over from April,
            Meghna&rsquo;s count was that eleven were still open. Nobody owns the
            minutes and no decision is written down.
          </p>
        </section>

        {/* Section 2 */}
        <section className={SECTION}>
          <SectionHead n={2} title="What it adds up to" />
          <p className={P}>
            Taken one at a time, each of those is a problem with an obvious fix
            — tighten discounts, push the distributors, write the sales process,
            shorten the meeting. You have tried versions of all four and none of
            them held. That is usually the sign that they are not four problems.
          </p>

          <PullQuote>
            What you have is one problem showing up in four places: the company
            has never chosen where it plays.
          </PullQuote>

          <p className={P}>
            Follow it through. A salesman with no defined customer calls on
            whoever answers the phone, so you get activity without pattern and a
            cycle that only works when the one man who can improvise attends. A
            distributor network appointed without a coverage design goes wide
            and stays shallow, because nobody ever defined what a good territory
            looks like. A discount has no floor because nobody can say which
            business the company does not want — if all revenue is equally good,
            any price that wins it is defensible. And a review meeting produces
            no decisions because there is no standard against which a decision
            could be made.
          </p>
          <p className={P}>
            Three flat years is not underperformance against a plan. It is the
            arithmetic of a business that keeps adding fields without ever
            deciding to win one.
          </p>
          <p className={P}>
            I should say plainly that this is a conclusion drawn from one
            conversation, and the four of you were unusually candid — which
            makes it more reliable than most such conversations, not less. But
            it rests on your account of your business. Section 5 says what would
            confirm or break it.
          </p>
        </section>

        {/* Section 3 */}
        <section className={SECTION}>
          <SectionHead n={3} title="The direction I would take" />
          <p className={P}>
            You asked me at the end what I would do if it were mine. Here it is.
          </p>

          <PullQuote>
            Stop adding. Grow the next twenty crore by subtraction — a smaller
            field, held properly.
          </PullQuote>

          <p className={P}>
            The logic is not sentiment about focus. It is that you cannot afford
            the other path. The addition company — three states, two channels,
            the full range, more feet on the ground — needs capital you have not
            raised and a layer of management you do not have, and it asks you to
            compete on price and availability against national brands with
            deeper pockets, in a market where you are already discounting to
            hold ground. It is a legitimate strategy. It is not available to you
            at ₹42 Cr with the balance sheet you described.
          </p>
          <p className={P}>
            The subtraction company is available to you this year, and it costs
            almost nothing to start. Fewer states. One channel. A fraction of
            the range. Half the distributor names, each buying several times
            what they buy today. Your plant has the headroom for it already —
            that was one of the few genuinely good pieces of news in the
            morning.
          </p>

          <h3 className={H3}>What that means giving up</h3>
          <p className={P}>
            A direction with no exclusions is a wish. On what you described,
            these are the three candidates, and I would test them in this order.
          </p>
          <Exhibit
            head={["Candidate", "Why, on what you said", "Confirm by"]}
            rows={[
              [
                "The slowest SKUs",
                "Devanathan named the fifteen or twenty that move without pausing. Nobody could say what the slowest hundred contribute. They cost you stock, price-list confusion and despatch errors.",
                "A movement report. Two days.",
              ],
              [
                "Builders direct",
                "You described it as thinner margin than distribution, and it puts your price in front of the contractors your own distributors serve.",
                "Channel contribution after full cost. Three days.",
              ],
              [
                "The weakest state",
                "Longest freight, worst ageing, no plant within reach — your words, about Kerala, twice.",
                "State contribution after freight and provisions.",
              ],
            ]}
          />
          <p className={P}>
            And one exclusion I would make now without testing anything: appoint
            no new distributors for two quarters. You do not have a coverage
            problem. You have an activation problem in the names you already
            hold, and every new appointment pulls a salesman away from fixing
            it.
          </p>
        </section>

        {/* Section 4 */}
        <section className={SECTION}>
          <SectionHead n={4} title="Where to start" />
          <p className={P}>
            Two things in the first month. Both are independent of the direction
            question, which means neither is wasted whichever way you go.
          </p>
          <Exhibit
            head={["By", "Action", "Owner"]}
            rows={[
              [
                "17 Oct",
                "A written margin floor below which no scheme goes without your signature",
                "Farida Contractor",
              ],
              [
                "24 Oct",
                "Discount approval cut from four people to two, with a volume band for each",
                "Srikanth Rajagopal",
              ],
              [
                "24 Oct",
                "Freeze on new distributor appointments for two quarters, with a named exception route",
                "Srikanth Rajagopal",
              ],
              [
                "31 Oct",
                "The four checks in Section 5 completed and circulated as one page",
                "Farida Contractor",
              ],
            ]}
          />
          <p className={P}>
            If you do only the first two, the morning has paid for itself. On
            the numbers Farida described, a floor and two fewer approvers is the
            difference between buying volume deliberately and buying it by
            accident, and you are currently doing the second.
          </p>

          <h3 className={H3}>Then, in sequence</h3>
          <p className={P}>
            Do not run these in parallel. Each needs the one before it settled.
          </p>
          <Exhibit
            head={["", "Phase", "What it settles"]}
            boldCols={[0, 1]}
            rows={[
              [
                "One",
                "Discount governance",
                "A floor, two approvers, and a monthly total of what schemes cost against what they bought.",
              ],
              [
                "Two",
                "Where to play",
                "States, channel and range, written to one page the five of you sign.",
              ],
              [
                "Three",
                "Distributor economics",
                "Which names to revive, which to release, and what a productive one looks like in numbers.",
              ],
              [
                "Four",
                "Operating rhythm",
                "A monthly review that produces written decisions, and three numbers reviewed on a fixed date.",
              ],
            ]}
          />
        </section>

        {/* Section 5 */}
        <section className={SECTION}>
          <SectionHead n={5} title="What would change my mind" />
          <p className={P}>
            Four checks. None needs me, and all four together are under a
            fortnight of your team&rsquo;s time. I would rather you spent that
            before you spent anything more with me.
          </p>
          <Exhibit
            head={["Check", "Who", "What it would change"]}
            rows={[
              [
                "What the last eight quarter-end schemes did to those parties' offtake in the quarter after",
                "Farida",
                "If they buy nothing beyond the month, this is a margin problem first and the direction can wait",
              ],
              [
                "Devanathan’s name against last year’s billing — his real share",
                "Farida",
                "If it is close to half, succession is the urgent problem, not strategy",
              ],
              [
                "Parties billing in the last 90 days, median offtake, top-20 share",
                "Devanathan",
                "Confirms or breaks the width-without-depth reading",
              ],
              [
                "Why four distributors who stopped buying, stopped",
                "You, in person",
                "The only question here that cannot be answered from a desk",
              ],
            ]}
          />
          <p className={P}>
            Do the last one yourself, and do not send Devanathan. A distributor
            will tell the owner things he will not tell the man who sold to him.
            Four conversations would tell you more than anything else on this
            page.
          </p>

          <h3 className={H3}>Two things I have left alone</h3>
          <ul className="mb-5 list-disc space-y-3 pl-5 text-[16px] leading-[1.78] text-mid md:text-[17px]">
            <li>
              Meghna&rsquo;s scope came up three times and was described three
              different ways in three hours. The succession question behind it
              is not a consulting question and I will not treat it as one. It
              will surface the moment you make the choice in Section 3.
            </li>
            <li>
              Farida flagged a line in the scheme ledger as needing
              reclassification. I have not looked at it and I am not raising it
              as a finding. It is her work and she knows it needs doing.
            </li>
          </ul>

          <PullQuote>
            If the schemes turn out to buy nothing, and you fix that and grow
            again without hearing from me, I will take this morning as having
            done its job.
          </PullQuote>

          <p className="mt-10 text-[14px] leading-[1.8] text-light">
            Premraj Menon
            <br />
            Founder and Principal Consultant, Simpleworks Consulting
          </p>
        </section>

        {/* Closing CTA */}
        <section className={`${SECTION} no-print text-center`}>
          <h2 className={H2}>Your business is not this one.</h2>
          <p className={`${P} mx-auto max-w-[560px]`}>
            The half day tells you what your own morning adds up to. ₹20,000
            fixed — credited in full against anything that
            follows.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className={BTN}>
              Schedule an Introductory Call
            </Link>
            <Link href="/programmes" className={BTN}>
              See the programmes
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <p className="mb-14 border-t border-rule pt-6 text-[12px] leading-[1.75] text-light">
          Sample report. Arunodaya Polymers, its people and its figures are
          illustrative and created to show the shape of the deliverable. Any
          resemblance to a real company is coincidental.
        </p>
      </article>
    </main>
  );
}
