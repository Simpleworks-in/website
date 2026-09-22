import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Simpleworks Consulting',
  description:
    'How Simpleworks Consulting collects, uses and protects the personal information you share through simpleworks.in.',
  alternates: { canonical: 'https://www.simpleworks.in/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-[720px] px-6 py-14 md:py-20">
      <p className="text-[11px] md:text-[13px] uppercase tracking-widest font-light text-light">
        Legal
      </p>

      <h1 className="mt-4 text-[40px] leading-[1.1] md:text-[56px] font-bold tracking-tight">
        Privacy <span className="text-red">Policy</span>
      </h1>

      <p className="mt-4 text-[14px] text-light">Last updated: 20 September 2026</p>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-[20px] leading-[1.3] md:text-[24px] font-bold">Who we are</h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]">
            Simpleworks Consulting (Sole Proprietor is Premraj Menon) is a management consulting practice based in Bengaluru,
            Karnataka, India. This policy explains what personal information we collect through
            www.simpleworks.in, why we collect it, and what you can ask us to do with it. For any
            question about this policy, write to pm@simpleworks.in.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] leading-[1.3] md:text-[24px] font-bold">What we collect</h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]">
            When you submit our contact form, we collect the name, email address, phone number and
            any details you choose to include in your message. When you browse the site, our
            analytics tools collect standard technical information such as pages visited, approximate
            location, device type and referring source. We do not collect financial information,
            government identifiers or any sensitive personal data through this website.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] leading-[1.3] md:text-[24px] font-bold">Why we collect it</h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]">
            Contact details are used only to respond to your enquiry and, if an engagement follows,
            to correspond with you about that work. Analytics data is used in aggregate to understand
            which content is useful and to improve the site. We do not sell your information, and we
            do not use it for advertising.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] leading-[1.3] md:text-[24px] font-bold">
            Who else handles your data
          </h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]">
            We use a small number of third-party services to run this site: Formspree processes
            contact form submissions, Google Analytics and Google Tag Manager provide website
            analytics, and Vercel hosts the site. Each of these providers processes data under its
            own privacy terms, and some may store data on servers outside India.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] leading-[1.3] md:text-[24px] font-bold">
            Cookies and analytics
          </h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]">
            This site uses cookies set by Google Analytics to distinguish visitors and measure how
            the site is used. You can block or delete cookies through your browser settings without
            affecting your ability to read the site.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] leading-[1.3] md:text-[24px] font-bold">How long we keep it</h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]">
            Enquiry details are retained for as long as needed to respond and, where an engagement
            follows, for the period required by our professional and statutory record-keeping
            obligations. Analytics data is retained according to the default retention period set in
            Google Analytics.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] leading-[1.3] md:text-[24px] font-bold">Your rights</h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]">
            Under the Digital Personal Data Protection Act, 2023, you may ask us for a summary of the
            personal data we hold about you, ask us to correct or complete it, ask us to erase it, and
            withdraw a consent you have previously given. Write to pm@simpleworks.in and we will
            respond within a reasonable period. If you are not satisfied with our response, you may
            raise a grievance with the Data Protection Board of India.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] leading-[1.3] md:text-[24px] font-bold">Changes</h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]">
            We may update this policy from time to time. The date at the top of this page shows when
            it was last revised.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] leading-[1.3] md:text-[24px] font-bold">Contact</h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]">
            Premraj Menon, Founder and Principal Consultant
            <br />
            Simpleworks Consulting, Bengaluru, Karnataka, India
            <br />
            pm@simpleworks.in
          </p>
        </section>
      </div>
    </main>
  )
}
