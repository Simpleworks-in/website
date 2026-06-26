"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/Simpleworks_image_only_S.png";

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/msme-business-coach")) {
    return null;
  }

  return (
    <footer className="border-t border-rule bg-[#F2F2F0] px-6 md:px-[60px]">
      {/* Row 1: logo + social */}
      <div className="flex flex-col gap-6 border-b border-rule py-8 md:flex-row md:items-center md:justify-between md:py-10 md:pt-10 md:pb-7">
        <div className="flex flex-col gap-2.5">
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} alt="Simpleworks S mark" height={32} className="h-8 w-auto" />
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
            href="https://www.facebook.com/profile.php?id=61588998071148"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[2px] border border-rule bg-white text-mid transition-colors hover:border-red hover:text-red"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://premraj.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Substack"
            className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[2px] border border-rule bg-white text-mid transition-colors hover:border-red hover:text-red"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Row 2: contact details centred */}
      <div className="flex flex-col items-start gap-3 border-b border-rule py-6 md:flex-row md:items-center md:justify-center md:gap-12 md:py-7">
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
          <span>+91 90360 99000</span>
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
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>Bengaluru, Karnataka, India</span>
        </div>
      </div>

      {/* Row 3: nav + copyright */}
      <div className="flex flex-col items-start gap-3 py-5 md:flex-row md:items-center md:justify-between md:py-[18px]">
        <ul className="flex list-none gap-6 md:gap-7">
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
              href="/blog"
              className="text-xs tracking-wide-3 text-mid transition-colors hover:text-red"
            >
              Blog
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
