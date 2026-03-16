"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us", cta: true },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent-gold/30 bg-primary/98 backdrop-blur">
      <div className="container mx-auto flex h-14 min-h-[3.5rem] items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Themis IP – Home">
          <Image
            src="/logo/favicon.png"
            alt="Themis IP"
            width={120}
            height={48}
            className="h-10 w-auto object-contain sm:h-12"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex lg:gap-8">
          {navLinks.filter((l) => !l.cta).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-slate-300 transition-colors hover:text-accent-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="shrink-0 rounded-md border border-accent-gold/60 bg-accent-gold/10 px-4 py-2.5 font-medium text-accent-gold transition-colors hover:bg-accent-gold hover:text-primary"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-slate-300 hover:bg-white/10 hover:text-white md:hidden"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav panel */}
      <div
        className={`absolute left-0 right-0 top-full border-b border-white/10 bg-primary shadow-lg transition-all duration-200 ease-out md:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav className="container mx-auto flex flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`rounded-md px-4 py-3 text-base font-medium transition-colors ${
                link.cta
                  ? "bg-accent-gold/20 text-accent-gold hover:bg-accent-gold hover:text-primary"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
