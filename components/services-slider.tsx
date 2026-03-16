"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { getServiceIcon } from "@/components/service-icons";

const serviceLinks = [
  { href: "/services/intellectual-property-services", label: "Intellectual Property Services" },
  { href: "/services/trademark-registration-brand-protection", label: "Trademark Registration & Brand Protection" },
  { href: "/services/patent-filing-strategy-commercialisation", label: "Patent Filing, Strategy & Commercialisation" },
  { href: "/services/copyrights-designs-industrial-models", label: "Copyrights, Designs & Industrial Models" },
  { href: "/services/ip-audits-due-diligence", label: "IP Audits & Due Diligence" },
  { href: "/services/our-approach-to-intellectual-property", label: "Our Approach to Intellectual Property" },
];

export function ServicesSlider() {
  const [emblaRef, setEmblaRef] = useState<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (!emblaRef) return;
    emblaRef.scrollBy({ left: -320, behavior: "smooth" });
  }, [emblaRef]);

  const scrollNext = useCallback(() => {
    if (!emblaRef) return;
    emblaRef.scrollBy({ left: 320, behavior: "smooth" });
  }, [emblaRef]);

  const updateScrollState = useCallback(() => {
    if (!emblaRef) return;
    setCanScrollPrev(emblaRef.scrollLeft > 0);
    setCanScrollNext(
      emblaRef.scrollLeft < emblaRef.scrollWidth - emblaRef.clientWidth - 10
    );
  }, [emblaRef]);

  useEffect(() => {
    if (!emblaRef) return;
    updateScrollState();
    emblaRef.addEventListener("scroll", updateScrollState);
    return () => emblaRef.removeEventListener("scroll", updateScrollState);
  }, [emblaRef, updateScrollState]);

  return (
    <div className="relative">
      <div
        ref={setEmblaRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-2 py-4 scrollbar-hide md:gap-6"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {serviceLinks.map((link) => {
          const Icon = getServiceIcon(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className="group min-w-[280px] max-w-[320px] flex-shrink-0 rounded-xl border border-white/10 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent-gold/30 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-gold/30 md:min-w-[300px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-accent-gold/30 bg-accent-gold/10 text-accent-gold animate-icon-float">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="font-heading font-semibold text-foreground">
                {link.label}
              </h3>
              <span className="mt-2 inline-block text-sm text-accent-gold">
                Learn more →
              </span>
            </Link>
          );
        })}
      </div>
      {/* Navigation arrows - desktop */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous services"
        className={`absolute left-0 top-1/2 hidden h-12 w-12 -translate-y-1/2 rounded-full border border-white/20 bg-card shadow-md transition-all hover:bg-white/10 md:flex md:items-center md:justify-center ${!canScrollPrev ? "invisible" : ""}`}
      >
        <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next services"
        className={`absolute right-0 top-1/2 hidden h-12 w-12 -translate-y-1/2 rounded-full border border-white/20 bg-card shadow-md transition-all hover:bg-white/10 md:flex md:items-center md:justify-center ${!canScrollNext ? "invisible" : ""}`}
      >
        <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
