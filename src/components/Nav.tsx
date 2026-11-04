"use client";

import { STORIES_PAGE_LIVE } from "@/lib/stories-live";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "../../public/Simpleworks_image_only_S.png";
import { FACTS } from "../../content/facts";

const WHATSAPP_HREF = `https://wa.me/${FACTS.whatsappNumber}`;

const baseLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/startup-mentor-bengaluru", label: "Startups" },
  { href: "/programmes", label: "Programmes" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const links = STORIES_PAGE_LIVE
  ? [
      ...baseLinks.slice(0, 4),
      { href: "/client-success-stories", label: "Stories", lgOnly: true },
      ...baseLinks.slice(4),
    ]
  : baseLinks;

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(href + "/");

  return (
    <nav data-cta="nav" className="sticky top-0 z-[100] border-b border-rule/100 bg-bg">
      <div className="flex items-center justify-between px-6 py-4 md:px-[60px] md:py-5">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src={logo}
            alt="Simpleworks Consulting logo"
            height={38}
            className="h-[34px] w-auto md:h-[38px]"
            priority
          />
          <span className="text-[14px] font-bold tracking-[0.01em] md:text-[15px]">
            Simpleworks <span className="text-red">Consulting</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden list-none items-center gap-4 whitespace-nowrap md:flex lg:gap-6 xl:gap-8">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <li
                key={link.href}
                className={"lgOnly" in link && link.lgOnly ? "hidden lg:block" : undefined}
              >
                <Link
                  href={link.href}
                  className={`text-[13px] tracking-wide-2 transition-colors hover:text-red ${
                    active ? "text-red" : "text-mid"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[1px] border border-red px-4 py-2 text-[13px] lg:px-[22px] tracking-wide-2 text-red transition-colors hover:bg-red hover:text-white"
            >
              Let&rsquo;s Talk
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-rule bg-bg px-6 py-5 md:hidden">
          <ul className="flex list-none flex-col gap-4">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block text-[15px] tracking-wide-2 transition-colors hover:text-red ${
                      active ? "text-red" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-block rounded-[1px] border border-red px-6 py-2.5 text-[13px] tracking-wide-2 text-red transition-colors hover:bg-red hover:text-white"
              >
                Let&rsquo;s Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
