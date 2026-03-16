"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ParallaxHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden sm:min-h-[80vh] lg:min-h-[90vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/Images/dubai_skyline.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center 20%",
        }}
      />
      <div className="absolute inset-0 bg-background/85 backdrop-blur-[1px]" />
      <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[80vh] sm:py-20 lg:min-h-[90vh] lg:py-24">
        <h1 className="font-heading max-w-4xl text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Future-Ready IP Partner for the UAE
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/95 sm:mt-6 sm:text-lg md:text-xl">
          Whether you&apos;re a luxury brand, a fast-growing startup, or a major
          corporation, Themis IP provides intelligent, strategic solutions that
          strengthen your brand and protect your intellectual property.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
          <Button
            asChild
            size="lg"
            className="border-0 bg-accent-gold text-primary hover:bg-accent-gold/90"
          >
            <Link href="/about-us">Learn more</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/contact-us">Contact us</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
