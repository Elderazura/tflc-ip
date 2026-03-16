import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Intellectual Property Services – Themis IP",
  description: "Strategic protection, management, and commercial use of IP. Trademarks, patents, copyrights, IP audits.",
};

export default function IPServicesPage() {
  return (
    <>
      <section className="border-b border-brand-light bg-brand-light py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            Intellectual Property Services
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-navy-link">
            Intellectual property plays a critical role in protecting business
            value, innovation, and creative output. At Themis, we advise clients on
            the strategic protection, management, and commercial use of
            intellectual property, ensuring that IP assets are legally secure,
            commercially viable, and aligned with broader business and
            transactional objectives.
          </p>
          <p className="mt-4 text-navy-link">
            Our IP practice supports clients across the full lifecycle of
            intellectual property, including creation, registration, portfolio
            management, commercialisation, and transaction readiness. We work
            closely with artists, innovators, and businesses to ensure that
            intellectual property is treated as a valuable commercial asset
            rather than a standalone compliance exercise.
          </p>
          <p className="mt-4 font-medium text-primary">
            We provide the following Intellectual Property services:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-navy-link">
            <li>Trademark Services</li>
            <li>Patent Services</li>
            <li>Copyrights, Designs & Industrial Models</li>
            <li>IP Audits & Due Diligence</li>
          </ul>
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
