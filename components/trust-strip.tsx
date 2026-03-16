"use client";

const placeholderLabels = [
  "Leading Brands",
  "Global Reach",
  "Trusted Partners",
  "Innovation Leaders",
  "Market Leaders",
  "Industry Experts",
];

export function TrustStrip() {
  return (
    <section className="w-full overflow-hidden border-y border-white/10 bg-background py-8">
      <p className="mb-4 text-center text-sm font-medium text-muted">
        Trusted by leading brands worldwide
      </p>
      <div className="flex w-max animate-marquee-strip gap-12 whitespace-nowrap px-4">
        {[...placeholderLabels, ...placeholderLabels].map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="text-sm font-semibold text-white/60"
          >
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
