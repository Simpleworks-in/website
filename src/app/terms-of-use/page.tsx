import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | Simpleworks Consulting',
  description:
    'The terms that govern your use of simpleworks.in, including content ownership and limitation of liability.',
  alternates: { canonical: 'https://www.simpleworks.in/terms-of-use' },
}

export default function TermsOfUsePage() {
  return (
    <main className="mx-auto max-w-[720px] px-6 py-14 md:py-20">
      <p className="text-[11px] md:text-[13px] uppercase tracking-widest font-light text-light">
        Legal
      </p>

      <h1 className="mt-4 text-[40px] leading-[1.1] md:text-[56px] font-bold tracking-tight">
        Terms of <span className="text-red">Use</span>
      </h1>

      <p className="mt-4 text-[14px] text-light">Last updated: 20 September 2026</p>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-[20px] leading-[1.3] md:text-[24px] font-bold">Agreement</h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]">
            By using www.simpleworks.in you accept these terms. If you do not accept them, please do
            not use the site.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] leading-[1.3] md:text-[24px] font-bold">
            Content is informational
          </h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]">
            Everything published on this site — articles, frameworks, case illustrations and service
            descriptions — is general information, not professional advice for your specific
            situation. Business circumstances vary, and nothing here should be acted on as a
            substitute for a proper advisory engagement or for advice from your own legal, financial
            or tax advisers. No consulting relationship is created by reading this site or by
            submitting the contact form.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] leading-[1.3] md:text-[24px] font-bold">Ownership</h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]">
            The content, frameworks, methodology, design and marks on this site — including the 4D
            framework and the Simpleworks name and logo — belong to Simpleworks Consulting. You may
            read, quote briefly with attribution, and share links freely. You may not reproduce,
            republish or adapt substantial portions of this content, or use it commercially, without
            written permission.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] leading-[1.3] md:text-[24px] font-bold">Limitation of liability</h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]">
            The site is provided as it is. We take care to keep the content accurate and current, but
            we make no warranty that it is complete or error-free, or that the site will always be
            available. To the extent permitted by law, Simpleworks Consulting is not liable for any
            loss arising from your use of, or reliance on, this site.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] leading-[1.3] md:text-[24px] font-bold">External links</h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]">
            This site links to third-party websites for reference. We do not control those sites and
            are not responsible for their content or practices.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] leading-[1.3] md:text-[24px] font-bold">
            Engagement terms are separate
          </h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]">
            Consulting engagements are governed by a separate written proposal or engagement letter
            agreed with the client. Those terms, not these, determine scope, fees and deliverables.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] leading-[1.3] md:text-[24px] font-bold">Governing law</h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]">
            These terms are governed by the laws of India, and the courts at Bengaluru, Karnataka have
            exclusive jurisdiction over any dispute arising from them.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] leading-[1.3] md:text-[24px] font-bold">Contact</h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]">
            Questions about these terms: pm@simpleworks.in
          </p>
        </section>
      </div>
    </main>
  )
}
