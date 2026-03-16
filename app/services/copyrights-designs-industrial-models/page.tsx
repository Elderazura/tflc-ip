import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FocusAreas } from "@/components/focus-areas";

const focusAreas = [
  "Artists & Designers",
  "Content Creators & Media Professionals",
  "Creative & Design-Led Businesses",
];

export const metadata = {
  title: "Copyrights, Designs and Industrial Models – Themis IP",
  description: "Registration and enforcement of copyrights, designs, and industrial models. Dubai IP services.",
};

export default function CopyrightsDesignsPage() {
  return (
    <>
      <section className="border-b border-brand-light bg-brand-light py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            Copyrights, Designs and Industrial Models
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-navy-link">
            Copyrights, designs, and industrial models protect creative works,
            proprietary content, and product aesthetics. Our services in this area
            focus on securing ownership while enabling lawful use and commercial
            exploitation.
          </p>
          <p className="mt-4 font-medium text-primary">
            We advise and assist clients with:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-navy-link">
            <li>Registration of copyrights, designs, and industrial models</li>
            <li>Filing and coordination with relevant intellectual property authorities</li>
            <li>Procedural compliance with applicable IP requirements</li>
            <li>Renewals, record-keeping, and portfolio maintenance</li>
            <li>Enforcement support for registered IP rights</li>
          </ul>
          <p className="mt-6 text-navy-link">
            We regularly work with artists, designers, content creators, and
            businesses to ensure that creative assets are clearly owned,
            properly recorded, and capable of being licensed, assigned, or
            otherwise commercialised.
          </p>
          <FocusAreas items={focusAreas} />
          <div className="mt-10">
            <Button asChild>
              <Link href="/contact-us">Contact us to discuss</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
