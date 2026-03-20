"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "À propos" },
  { href: "/infos-pratiques", label: "Nous trouver" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-background">
      <nav className="max-w-page mx-auto flex flex-row items-center justify-between px-6 py-2.5 md:px-8 md:gap-4">
        <Link href="/" className="font-link text-2xl md:text-[54px] leading-[84%] tracking-[-0.06em] uppercase text-ink">
          La Page
        </Link>
        <button
          type="button"
          className="md:hidden inline-flex flex-col justify-center gap-1.5 w-9 h-9"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-[2px] w-full bg-ink" />
          <span className="h-[2px] w-full bg-ink" />
          <span className="h-[2px] w-full bg-ink" />
        </button>
        <div className="hidden md:flex flex-row items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-style ${pathname === link.href ? "text-ink" : "text-ink hover:opacity-80"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-ink/20 bg-background px-8 py-5">
          <div className="flex flex-col items-end gap-2.5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="link-style text-base"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="h-2 bg-ink w-full" aria-hidden />
    </header>
  );
}
