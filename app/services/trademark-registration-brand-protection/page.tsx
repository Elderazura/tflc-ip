import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FocusAreas } from "@/components/focus-areas";

const focusAreas = [
  "Artists & Brand Owners",
  "Startups & SMEs",
  "Mergers & Acquisitions",
  "Investment Transactions",
];

export const metadata = {
  title: "Trademark Registration & Brand Protection Services – Themis IP",
  description: "Trademark searches, filing, portfolio management, and brand protection. Dubai IP services.",
};

export default function TrademarkServicesPage() {
  return (
    <>
      <section className="border-b border-brand-light bg-brand-light py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            Trademark Registration & Brand Protection Services
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-navy-link">
            Trademarks are often among a business&apos;s most valuable assets,
            representing brand identity, goodwill, and market recognition. Our
            trademark practice focuses on protecting brands while supporting
            long-term commercial use and growth.
          </p>
          <p className="mt-4 font-medium text-primary">
            We advise and assist clients with:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-navy-link">
            <li>Trademark searches and clearance to assess registrability and potential conflicts</li>
            <li>Preparation and filing of trademark applications before relevant authorities</li>
            <li>Liaison and coordination with trademark registries</li>
            <li>Trademark monitoring, renewals, and portfolio management</li>
            <li>Strategic advice on brand protection, usage, and enforcement</li>
          </ul>
          <p className="mt-6 text-navy-link">
            In addition to registration and maintenance, we regularly support
            clients in corporate and transactional contexts, including mergers,
            acquisitions, licensing arrangements, and brand transfers. Our
            approach ensures that trademark portfolios are not only compliant
            but also structured to support transactions, investments, and
            commercial expansion.
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
