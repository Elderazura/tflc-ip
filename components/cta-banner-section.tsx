import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CtaBannerSectionProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "dark" | "gold";
}

export function CtaBannerSection({
  title,
  subtitle,
  buttonText = "Get in touch",
  buttonHref = "/contact-us",
  variant = "gold",
}: CtaBannerSectionProps) {
  const isGold = variant === "gold";
  return (
    <section
      className={
        isGold
          ? "w-full bg-accent-gold/20 border-y border-accent-gold/30 py-12 md:py-16"
          : "w-full bg-surface py-12 md:py-16"
      }
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-heading text-lg font-semibold text-foreground sm:text-xl">
            {title}
          </p>
          {subtitle && (
            <p className="mt-1 text-sm text-muted">{subtitle}</p>
          )}
        </div>
        <Button
          asChild
          size="lg"
          className={
            isGold
              ? "shrink-0 border border-accent-gold bg-accent-gold text-primary hover:bg-accent-gold/90"
              : "shrink-0 border border-white/20 bg-white/10 text-foreground hover:bg-white/20"
          }
        >
          <Link href={buttonHref}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
}
