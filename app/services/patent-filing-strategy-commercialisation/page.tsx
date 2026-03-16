import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FocusAreas } from "@/components/focus-areas";

const focusAreas = [
  "PhD Students & Researchers",
  "Innovators & Technology-Focused Businesses",
  "Investment-Backed Ventures",
];

export const metadata = {
  title: "Patent Filing, Strategy & Commercialisation – Themis IP",
  description: "Patent filing, prosecution, portfolio strategy, and commercialisation. Dubai IP services.",
};

export default function PatentServicesPage() {
  return (
    <>
      <section className="border-b border-brand-light bg-brand-light py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            Patent Filing, Strategy & Commercialisation
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-navy-link">
            Patents protect innovation and are often central to valuation,
            funding, and long-term business growth. Our patent services are
            designed to support research-driven individuals and innovation-led
            businesses at each stage of the patent lifecycle.
          </p>
          <p className="mt-4 font-medium text-primary">
            We assist clients with:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-navy-link">
            <li>Patent filing, prosecution, and registration support</li>
            <li>Development of patent portfolio strategy</li>
            <li>Documentation support for licensing and assignment of patent rights</li>
            <li>Guidance on protection of innovations and commercialisation pathways</li>
          </ul>
          <p className="mt-6 text-navy-link">
            Our advisory extends beyond filings. We work with innovators,
            researchers, and businesses to ensure that patent portfolios are
            aligned with commercial objectives, funding strategies, and potential
            transactions, enabling intellectual property to support growth
            rather than create obstacles.
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
