"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

type AnimationType = "fade-in" | "fade-in-up" | "slide-in-right";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: 0 | 100 | 200 | 300 | 400 | 500;
  as?: "section" | "div" | "article";
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  as: Tag = "section",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollReveal({ once: true });

  const animationClass =
    animation === "fade-in"
      ? "animate-fade-in"
      : animation === "fade-in-up"
        ? "animate-fade-in-up"
        : "animate-slide-in-right";

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${isVisible ? `${animationClass} opacity-100` : "opacity-0"} ${className}`}
      style={
        isVisible && delay
          ? { animationDelay: `${delay}ms`, animationFillMode: "forwards" }
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
