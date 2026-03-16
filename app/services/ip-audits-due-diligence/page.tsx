import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FocusAreas } from "@/components/focus-areas";

const focusAreas = [
  "Mergers & Acquisitions",
  "Investors & Acquirers",
  "Transaction Readiness & Corporate Restructuring",
];

export const metadata = {
  title: "IP Audits & Due Diligence – Themis IP",
  description: "IP audits and due diligence for transactions and investments. Dubai IP services.",
};

export default function IPAuditsPage() {
  return (
    <>
      <section className="border-b border-brand-light bg-brand-light py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            IP Audits & Due Diligence For Transactions And Investments
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-navy-link">
            Intellectual property audits are a critical component of mergers,
            acquisitions, investments, and corporate restructuring. Our IP audit
            and due diligence services help clients identify risks, verify
            ownership, and assess the commercial strength of IP portfolios.
          </p>
          <p className="mt-4 font-medium text-foreground">
            Our IP audit services include:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-navy-link">
            <li>Identification and mapping of intellectual property assets</li>
            <li>Review of ownership and chain of title</li>
            <li>Verification of registrations, renewals, and validity status</li>
            <li>Review of licensing, assignment, and encumbrance arrangements</li>
            <li>Identification of IP-related risks relevant to transactions or investments</li>
          </ul>
          <p className="mt-6 text-navy-link">
            Our approach ensures that intellectual property is accurately
            documented, properly structured, and transaction-ready, enabling
            informed decision-making and effective risk management in corporate
            and investment matters.
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
