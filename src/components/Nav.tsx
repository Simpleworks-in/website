"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/Simpleworks_image_only_S.png";

const links = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between border-b border-rule/100 bg-bg px-[60px] py-5">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src={logo}
          alt="Simpleworks S mark"
          height={38}
          className="h-[38px] w-auto"
          priority
        />
        <span className="text-[15px] font-bold tracking-[0.01em]">
          Simpleworks <span className="text-red">Consulting</span>
        </span>
      </Link>
      <ul className="flex list-none items-center gap-8">
        {links.map((link) => {
          const active = pathname === link.href || pathname?.startsWith(link.href + "/");
          return (
            <li key={link.href}>
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
          <Link
            href="/contact"
            className="rounded-[1px] border border-red px-[22px] py-2 text-[13px] tracking-wide-2 text-red transition-colors hover:bg-red hover:text-white"
          >
            Let&apos;s Talk
          </Link>
        </li>
      </ul>
    </nav>
  );
}
