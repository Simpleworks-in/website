import type { Metadata } from "next";
import { FACTS } from "../../../content/facts";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | Simpleworks Consulting",
  description:
    "Simpleworks Consulting provides professional services, not physical goods. How consulting engagements are delivered, scheduled and confirmed.",
  alternates: { canonical: "https://www.simpleworks.in/shipping-and-delivery-policy" },
};

const h2 = "text-[20px] leading-[1.3] md:text-[24px] font-bold";
const body = "mt-3 text-[16px] md:text-[17px] text-mid leading-[1.78]";
const list = `${body} list-disc pl-6 space-y-2`;

export default function ShippingAndDeliveryPolicyPage() {
  return (
    <main className="mx-auto max-w-[720px] px-6 py-14 md:py-20">
      <p className="text-[11px] md:text-[13px] uppercase tracking-widest font-light text-light">
        Legal
      </p>

      <h1 className="mt-4 text-[40px] leading-[1.1] md:text-[56px] font-bold tracking-tight">
        Shipping &amp; Delivery <span className="text-red">Policy</span>
      </h1>

      <p className="mt-4 text-[14px] text-light">Last updated: 21 September 2026</p>

      <div className="mt-10 space-y-10">
        <section>
          <p className={body}>
            {FACTS.orgName} is a management consulting practice. We provide professional services,
            not physical goods. <strong className="text-ink">No physical products are shipped.</strong>
          </p>
        </section>

        <section>
          <h2 className={h2}>How services are delivered</h2>
          <ul className={list}>
            <li>
              <strong className="text-ink">Digitally:</strong> online meetings (Google Meet / Zoom),
              email, and shared documents such as reports, frameworks, templates and presentations.
            </li>
            <li>
              <strong className="text-ink">In person:</strong> workshops and working sessions at the
              client&rsquo;s premises or an agreed venue, where the engagement includes them.
            </li>
          </ul>
        </section>

        <section>
          <h2 className={h2}>Delivery timelines</h2>
          <ul className={list}>
            <li>
              A consultation or engagement is scheduled within 2&ndash;5 working days of payment
              confirmation, unless another date is agreed.
            </li>
            <li>
              Deliverables follow the timelines set out in the engagement proposal or agreement.
            </li>
            <li>
              Confirmation and scheduling details are sent to the email address given at the time of
              payment.
            </li>
          </ul>
        </section>

        <section>
          <h2 className={h2}>Non-delivery</h2>
          <p className={body}>
            If you have not received a scheduling confirmation within 5 working days of payment,
            contact us at{" "}
            <a className="underline" href={`mailto:${FACTS.email}`}>
              {FACTS.email}
            </a>{" "}
            or{" "}
            <a className="underline" href="tel:+919036099000">
              {FACTS.phone}
            </a>{" "}
            and we will resolve it promptly.
          </p>
        </section>

        <section>
          <h2 className={h2}>Contact</h2>
          <address className={`${body} not-italic`}>
            {FACTS.orgName}, {FACTS.streetAddress}, {FACTS.city} &ndash; {FACTS.postalCode},{" "}
            {FACTS.region}, India &middot;{" "}
            <a className="underline" href={`mailto:${FACTS.email}`}>
              {FACTS.email}
            </a>{" "}
            &middot;{" "}
            <a className="underline" href="tel:+919036099000">
              {FACTS.phone}
            </a>
          </address>
        </section>
      </div>
    </main>
  );
}
