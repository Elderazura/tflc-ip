import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatsBar } from "@/components/stats-bar";
import { CtaBannerSection } from "@/components/cta-banner-section";

const serviceLinks = [
  { href: "/services/intellectual-property-services", label: "Intellectual Property Services" },
  { href: "/services/trademark-registration-brand-protection", label: "Trademark Registration & Brand Protection Services" },
  { href: "/services/patent-filing-strategy-commercialisation", label: "Patent Filing, Strategy & Commercialisation" },
  { href: "/services/copyrights-designs-industrial-models", label: "Copyrights, Designs and Industrial Models" },
  { href: "/services/ip-audits-due-diligence", label: "IP Audits & Due Diligence For Transactions And Investments" },
  { href: "/services/our-approach-to-intellectual-property", label: "Our Approach to Intellectual Property" },
];

const processSteps = [
  { step: 1, title: "Consult", text: "We understand your business, goals, and IP assets in a structured consultation." },
  { step: 2, title: "Strategy", text: "We design a tailored IP strategy aligned with your commercial objectives." },
  { step: 3, title: "File & manage", text: "We handle registration, prosecution, and portfolio management across jurisdictions." },
  { step: 4, title: "Enforce", text: "We support enforcement, dispute resolution, and ongoing protection of your rights." },
];

const industries = [
  { name: "Luxury & retail", tagline: "Brand protection and anti-counterfeiting" },
  { name: "Technology", tagline: "Patents and software IP" },
  { name: "Life sciences", tagline: "Pharma and biotech IP" },
  { name: "FMCG", tagline: "Trademarks and packaging" },
  { name: "Arts & media", tagline: "Copyrights and licensing" },
  { name: "Finance", tagline: "IP in transactions and compliance" },
];

const whyChoosePoints = [
  "UAE-focused with deep local and international IP experience",
  "Full suite of trademark, patent, copyright, and advisory services",
  "Commercial focus: IP aligned with your business outcomes",
  "Efficient processes and transparent communication",
];

export const metadata = {
  title: "Services – Themis IP",
  description: "IP services: trademarks, patents, copyrights, designs, IP audits and due diligence.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/Images/law-wallpaper.jpg)", backgroundAttachment: "fixed" }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 flex min-h-[45vh] flex-col justify-end px-4 pb-12 pt-24">
          <div className="container mx-auto">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 max-w-2xl text-white/95">
              Legal expertise and industry knowledge to protect your intellectual
              property and safeguard your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="mx-auto max-w-2xl text-center text-base text-muted sm:text-lg">
            Whether you are a startup, SME, or multinational, we provide
            efficient, reliable, and strategic IP legal services.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceLinks.map((link) => (
              <Card
                key={link.href}
                className="overflow-hidden transition-all hover:-translate-y-0.5 hover:border-accent-gold/30 hover:shadow-lg"
              >
                <CardHeader className="p-6">
                  <Link
                    href={link.href}
                    className="font-heading font-semibold text-foreground transition-colors hover:text-accent-gold"
                  >
                    {link.label}
                  </Link>
                  <span className="mt-2 inline-block text-sm text-accent-gold">Learn more →</span>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild>
              <Link href="/contact-us">Discuss your needs</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBannerSection
        title="Discuss your IP strategy with our team"
        subtitle="We'll help you choose the right services for your business."
        buttonText="Request consultation"
        buttonHref="/contact-us"
        variant="gold"
      />

      {/* How we work */}
      <section className="bg-surface py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-2">
              How we work
            </Badge>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Our process
            </h2>
            <p className="mt-4 text-muted">
              From consultation to enforcement, we support you at every step.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <Card
                key={item.step}
                className="relative border-white/10 transition-all hover:border-accent-gold/20 hover:-translate-y-0.5"
              >
                <CardContent className="p-6">
                  <span className="font-heading text-2xl font-bold text-accent-gold">
                    {String(item.step).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading mt-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries we serve */}
      <section className="bg-background py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-2">
              Industries
            </Badge>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Industries we serve
            </h2>
            <p className="mt-4 text-muted">
              Sector-specific IP expertise for your industry.
            </p>
          </div>
          <div className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <Card
                key={item.name}
                className="border-white/10 transition-all hover:border-accent-gold/20 hover:-translate-y-0.5"
              >
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.tagline}</p>
                  <Button asChild variant="link" className="mt-3 p-0">
                    <Link href="/contact-us">Relevant services →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose Themis for IP – with image */}
      <section className="bg-surface py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto grid items-center gap-12 px-4 md:max-w-6xl md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/Images/law-books.png"
              alt="IP expertise and strategy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-primary/30" />
          </div>
          <div>
            <Badge variant="secondary" className="mb-2">
              Why Themis
            </Badge>
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Why choose Themis for IP
            </h2>
            <ul className="mt-6 space-y-3 text-muted">
              {whyChoosePoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gold" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link href="/contact-us">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Contact CTA */}
      <CtaBannerSection
        title="Get in touch to discuss your needs"
        subtitle="Churchill Executive Tower, Business Bay, Dubai · legal@themis-ip.ae"
        buttonText="Contact us"
        buttonHref="/contact-us"
        variant="gold"
      />
    </>
  );
}
