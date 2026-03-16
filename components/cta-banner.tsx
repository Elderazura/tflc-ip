import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="w-full bg-primary py-3 text-primary-foreground">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4">
        <p className="text-sm font-medium md:text-base">
          Future-Ready IP Partner for the UAE
        </p>
        <Button
          asChild
          variant="secondary"
          size="sm"
          className="shrink-0 border-0 bg-accent-gold text-primary hover:bg-accent hover:text-white"
        >
          <Link href="/contact-us">Get in touch</Link>
        </Button>
      </div>
    </section>
  );
}
