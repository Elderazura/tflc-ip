import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Our Approach to Intellectual Property – Themis IP",
  description: "How Themis integrates IP with commercial, corporate, and transactional advisory.",
};

export default function OurApproachPage() {
  return (
    <>
      <section className="border-b border-brand-light bg-brand-light py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            Our Approach to Intellectual Property
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="space-y-4 text-muted-foreground">
            <p>
              What distinguishes our IP practice is its close integration with
              commercial, corporate, and transactional advisory. We do not treat
              intellectual property as an isolated legal process. Instead, we
              ensure that IP strategy supports clients&apos; broader business
              objectives, commercial arrangements, and long-term growth plans.
            </p>
            <p>
              Whether advising on brand protection, innovation, or transaction
              readiness, our focus remains on delivering clear, practical, and
              commercially aligned intellectual property solutions.
            </p>
            <p>
              Our team combines deep expertise in intellectual property (IP) to
              deliver specialized services in trademark, copyright, and patent
              protection. We help startups, SMEs, and global enterprises
              safeguard their intellectual assets and strengthen their market
              presence with confidence.
            </p>
            <p>
              From registration and portfolio management to strategic IP
              enforcement, we provide customized solutions that align with your
              business goals. Our approach is driven by precision,
              professionalism, and proactive guidance ensuring your creative and
              intellectual investments are fully protected.
            </p>
            <p>
              At Themis, we don&apos;t just secure your IP; we empower
              innovation, creativity, and sustainable growth.
            </p>
          </div>
          <div className="mt-10">
            <Button asChild>
              <Link href="/contact-us">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
