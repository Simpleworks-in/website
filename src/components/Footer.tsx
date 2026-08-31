import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Simpleworks_image_only_S.png";

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-[#F2F2F0] px-6 md:px-[60px]">
      {/* Row 1: logo + social */}
      <div className="flex flex-col gap-6 border-b border-rule py-8 md:flex-row md:items-center md:justify-between md:py-10 md:pt-10 md:pb-7">
        <div className="flex flex-col gap-2.5">
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} alt="Simpleworks Consulting logo" height={32} className="h-8 w-auto" />
            <span className="text-[15px] font-bold text-ink">
              Simpleworks <span className="text-red">Consulting</span>
            </span>
          </Link>
          <p className="text-[13px] italic text-light">
            Simple answers to hard business questions.
          </p>
        </div>
        <div className="flex items-center gap-3.5 md:mt-1">
          <a
            href="https://www.linkedin.com/in/premraj/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[2px] border border-rule bg-white text-mid transition-colors hover:border-red hover:text-red"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://x.com/nonemmerp"
            target="_blank"
            rel="noopener noreferrer"
            title="X (Twitter)"
            className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[2px] border border-rule bg-white text-mid transition-colors hover:border-red hover:text-red"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/simpleworksconsulting/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[2px] border border-rule bg-white text-mid transition-colors hover:border-red hover:text-red"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Row 2: contact details centred */}
      <address
        itemScope
        itemType="https://schema.org/LocalBusiness"
        className="not-italic flex flex-col items-start gap-3 border-b border-rule py-6 md:flex-row md:items-center md:justify-center md:gap-12 md:py-7"
      >
        <span itemProp="name" className="hidden">
          Simpleworks Consulting
        </span>
        <div className="flex items-center gap-2.5 text-[13px] leading-relaxed text-mid">
          <svg
            viewBox="0 0 24 24"
            className="h-[15px] w-[15px] flex-shrink-0 stroke-red"
            fill="none"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="2,4 12,13 22,4" />
          </svg>
          <a
            href="mailto:pm@simpleworks.in"
            itemProp="email"
            className="text-mid transition-colors hover:text-red"
          >
            pm@simpleworks.in
          </a>
        </div>
        <div className="hidden h-7 w-px flex-shrink-0 bg-rule md:block" />
        <div className="flex items-center gap-2.5 text-[13px] leading-relaxed text-mid">
          <svg
            viewBox="0 0 24 24"
            className="h-[15px] w-[15px] flex-shrink-0 stroke-red"
            fill="none"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          <a href="tel:+919036099000" itemProp="telephone" className="text-mid transition-colors hover:text-red">
            +91 90360 99000
          </a>
        </div>
        <div className="hidden h-7 w-px flex-shrink-0 bg-rule md:block" />
        <div
          className="flex items-center gap-2.5 text-[13px] leading-relaxed text-mid"
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-[15px] w-[15px] flex-shrink-0 stroke-red"
            fill="none"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>
            <span itemProp="addressLocality">Bengaluru</span>,{" "}
            <span itemProp="addressRegion">Karnataka</span>,{" "}
            <span itemProp="addressCountry">India</span>
          </span>
        </div>
      </address>

      {/* Row 3: nav + copyright */}
      <div className="flex flex-col items-start gap-3 py-5 md:flex-row md:items-center md:justify-between md:py-[18px]">
        <ul className="flex w-full list-none flex-wrap gap-x-6 gap-y-2 md:w-auto md:gap-x-7">
          <li>
            <Link
              href="/about"
              className="text-xs tracking-wide-3 text-mid transition-colors hover:text-red"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-xs tracking-wide-3 text-mid transition-colors hover:text-red"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-xs tracking-wide-3 text-mid transition-colors hover:text-red"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className="text-xs tracking-wide-3 text-mid transition-colors hover:text-red"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-xs tracking-wide-3 text-mid transition-colors hover:text-red"
            >
              Contact
            </Link>
          </li>
        </ul>
        <span className="text-[11px] tracking-wide-3 text-light">
          © {new Date().getFullYear()} Simpleworks Consulting. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
