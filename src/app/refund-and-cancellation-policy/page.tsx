import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Simpleworks Consulting",
  description:
    "Refund, cancellation and rescheduling terms for Simpleworks Consulting programmes — Diagnostic, Reset, Counsel and Custom Engagements.",
  alternates: { canonical: "https://www.simpleworks.in/refund-and-cancellation-policy" },
  robots: { index: true, follow: true },
};

const Accent = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#ED1C24]">{children}</span>
);

function Section({ n, title, accent, children }: {
  n: number; title: string; accent: string; children: React.ReactNode;
}) {
  return (
    <section className="border-t-[0.5px] border-neutral-300 py-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        {n}. {title} <Accent>{accent}</Accent>
      </h2>
      <div className="space-y-3 text-[17px] leading-relaxed text-neutral-800">{children}</div>
    </section>
  );
}

const ul = "list-disc pl-6 space-y-2";

export default function RefundPolicyPage() {
  return (
    <main className="bg-white font-serif">
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
          Refund &amp; Cancellation <Accent>Policy</Accent>
        </h1>
        <p className="text-neutral-600 mb-10">Last updated: 21 September 2026</p>

        <Section n={1} title="Scope" accent="of this policy">
          <p>This policy covers all paid services from Simpleworks Consulting (&ldquo;Simpleworks&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;): the Diagnostic, Reset, Counsel and Custom Engagement programmes, plus any paid session or workshop. The introductory call is free and involves no payment. If a signed engagement letter or proposal has different terms, those terms apply instead of this policy.</p>
        </Section>

        <Section n={2} title="Nature of" accent="our services">
          <p>Consulting is professional time and expertise. Once a session has been held, or analysis, frameworks or recommendations have been delivered, that work can&rsquo;t be taken back. Refunds therefore depend on how much work has been done, not on whether you are happy with the advice or on the business results that follow.</p>
        </Section>

        <Section n={3} title="Cancellation" accent="by the client">
          <p className="font-semibold">Diagnostic programme</p>
          <ul className={ul}>
            <li>More than 48 hours before the scheduled kickoff: full refund.</li>
            <li>Less than 48 hours before kickoff: 50% refund, or a free reschedule within 30 days.</li>
            <li>After the kickoff session: no refund. You receive all work completed up to that point.</li>
          </ul>
          <p className="font-semibold pt-2">Reset, Counsel and Custom Engagements</p>
          <ul className={ul}>
            <li>Before the engagement starts: full refund of any advance, minus up to 10% for scoping and preparation work already done.</li>
            <li>During the engagement: cancel with 15 days&rsquo; written notice. You pay for work done up to the end of the notice period. Fees paid for later phases or months that have not started are refunded.</li>
            <li>Monthly retainers (Counsel): cancel with 15 days&rsquo; written notice before the next billing cycle. The current month is not refunded.</li>
          </ul>
        </Section>

        <Section n={4} title="Rescheduling" accent="sessions">
          <p>You can reschedule a session free of charge with at least 24 hours&rsquo; notice. With less notice, or if you don&rsquo;t turn up, the session may count as delivered. Sessions rescheduled more than twice may be counted as delivered at our discretion.</p>
        </Section>

        <Section n={5} title="Cancellation" accent="by Simpleworks">
          <p>If we have to cancel or reschedule because of illness, emergency or a situation beyond our control, we will offer another date. If that doesn&rsquo;t suit you, we will refund in full any fees for work not yet delivered. We may end an engagement if payments are overdue, if you haven&rsquo;t responded for more than 30 days, or if we find a conflict of interest. You still pay for work already completed.</p>
        </Section>

        <Section n={6} title="How to" accent="request a refund">
          <p>Email <a className="underline" href="mailto:pm@simpleworks.in">pm@simpleworks.in</a> with your name, company, programme, payment reference and reason. We reply within 3 working days.</p>
          <p>Payments are processed through Zoho Payments. Approved refunds are issued to the original payment method (card, UPI or net banking) within 7 working days of approval. Your bank may take a further 5&ndash;7 working days to credit the amount.</p>
        </Section>

        <Section n={7} title="Taxes" accent="and charges">
          <p>Refunds cover the fees you paid, including GST where it can be reversed. We do not refund payment-gateway charges we have already paid.</p>
        </Section>

        <Section n={8} title="Confidentiality" accent="after cancellation">
          <p>Confidentiality obligations and any NDA continue after cancellation. Deliverables provided up to the date of cancellation remain yours to use within your business.</p>
        </Section>

        <Section n={9} title="Changes" accent="to this policy">
          <p>We may update this policy from time to time. The version shown on this page on the date you pay applies to your engagement.</p>
        </Section>

        <Section n={10} title="Governing" accent="law">
          <p>This policy is governed by the laws of India. Any dispute falls under the jurisdiction of the courts in Bengaluru, Karnataka.</p>
        </Section>

        <Section n={11} title="Contact" accent="us">
          <p>Simpleworks Consulting, Bengaluru<br />
            <a className="underline" href="mailto:pm@simpleworks.in">pm@simpleworks.in</a> · <a className="underline" href="tel:+919036099000">+91 90360 99000</a>
          </p>
          <p><Link className="underline" href="/">Back to home</Link></p>
        </Section>
      </div>
    </main>
  );
}
