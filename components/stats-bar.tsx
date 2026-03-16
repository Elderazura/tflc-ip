"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: 15, suffix: "+", label: "Years of experience" },
  { value: 50, suffix: "+", label: "Jurisdictions" },
  { value: 500, suffix: "+", label: "Clients" },
  { value: 10, suffix: "+", label: "Languages" },
];

export function StatsBar() {
  const { ref, isVisible } = useScrollReveal({ once: true });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="w-full border-y border-white/10 bg-surface py-10 md:py-14"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center"
              style={
                isVisible
                  ? {
                      animation: "fadeInUp 0.6s ease-out forwards",
                      animationDelay: `${i * 100}ms`,
                      animationFillMode: "forwards",
                    }
                  : undefined
              }
            >
              <p className="font-heading text-2xl font-bold text-accent-gold sm:text-3xl md:text-4xl">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
