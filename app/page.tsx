import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ParallaxHero } from "@/components/parallax-hero";
import { ServicesSlider } from "@/components/services-slider";
import { ImageShowcaseSlider } from "@/components/image-showcase-slider";
import { StatsBar } from "@/components/stats-bar";
import { TrustStrip } from "@/components/trust-strip";
import { CtaBannerSection } from "@/components/cta-banner-section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";

const serviceLinks = [
  { href: "/services/intellectual-property-services", label: "Intellectual Property Services" },
  { href: "/services/trademark-registration-brand-protection", label: "Trademark Registration & Brand Protection Services" },
  { href: "/services/patent-filing-strategy-commercialisation", label: "Patent Filing, Strategy & Commercialisation" },
  { href: "/services/copyrights-designs-industrial-models", label: "Copyrights, Designs and Industrial Models" },
  { href: "/services/ip-audits-due-diligence", label: "IP Audits & Due Diligence For Transactions And Investments" },
  { href: "/services/our-approach-to-intellectual-property", label: "Our Approach to Intellectual Property" },
];

export const metadata = {
  title: "Themis IP – Protect | Monetize | Strengthen Your Brand",
  description:
    "Future-Ready IP Partner for the UAE. Trademark, copyright, and patent protection. Dubai-based intellectual property services.",
  openGraph: {
    title: "Themis IP – Protect | Monetize | Strengthen Your Brand",
    description:
      "Future-Ready IP Partner for the UAE. Trademark, copyright, and patent protection. Dubai-based intellectual property services.",
  },
};

const whyChoose = [
  {
    title: "Expertise You Can Trust",
    text: "Our team brings together skilled IP professionals and industry specialists who understand both the intellectual property landscape and real-world business needs.",
  },
  {
    title: "Tailored Strategies",
    text: "We craft customized IP and brand protection plans to suit your specific industry, market, and growth goals.",
  },
  {
    title: "Global Perspective",
    text: "Whether you operate locally or internationally, we help protect your rights across borders with a global compliance mindset.",
  },
  {
    title: "Commitment to Excellence",
    text: "At Themis, your success is our mission. We focus on building long-term partnerships that help your brand stay strong, protected, and positioned for growth.",
  },
];

export default function HomePage() {
  return (
    <>
      <ParallaxHero />

      <AnimatedSection as="section" className="relative bg-background" animation="fade-in-up">
        <div className="container mx-auto grid items-center gap-12 px-4 py-20 md:grid-cols-2 md:gap-16 md:py-28 lg:gap-20">
          <div className="relative order-2 md:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/Images/Lawyer-client.png"
                alt="Themis IP – client partnership"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-accent-gold/30" />
          </div>
          <div className="order-1 md:order-2">
            <Badge variant="secondary" className="mb-2">
              About Themis
            </Badge>
            <h2 className="font-heading mt-2 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Your Trusted Partner in Brand Protection
            </h2>
            <div className="mt-6 space-y-4 text-muted">
              <p>
                At <strong className="text-foreground">Themis</strong>, we are
                dedicated to protecting what matters most — your ideas, your
                brand, and your innovation.
              </p>
              <p>
                Based in Dubai, our team combines deep expertise in{" "}
                <strong className="text-foreground">intellectual property (IP)</strong>{" "}
                to deliver specialized services in{" "}
                <strong className="text-foreground">trademark, copyright, and patent
                protection</strong>. We help startups, SMEs, and global
                enterprises safeguard their intellectual assets and strengthen
                their market presence with confidence.
              </p>
              <p>
                From registration and portfolio management to strategic IP
                enforcement, we provide customized solutions that align with
                your business goals. Our approach is driven by precision,
                professionalism, and proactive guidance.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/about-us">About us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact-us">Discuss your needs</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="relative bg-surface py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-2">
              Why Us
            </Badge>
            <h2 className="font-heading mt-2 text-3xl font-bold text-foreground md:text-4xl">
              Why Choose Themis
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3 md:grid-rows-2">
            <AnimatedSection
              as="div"
              className="relative overflow-hidden rounded-2xl md:col-span-1 md:row-span-2"
              animation="fade-in-up"
              delay={0}
            >
              <Image
                src="/Images/law-books.png"
                alt="Intellectual property expertise"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/50" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="font-heading text-lg font-semibold">
                  Precision &amp; professionalism
                </p>
              </div>
            </AnimatedSection>
            {whyChoose.map((item, i) => (
              <AnimatedSection
                key={item.title}
                as="div"
                className="rounded-2xl border border-white/10 bg-card p-6 shadow-sm transition-shadow hover:-translate-y-0.5 hover:border-accent-gold/20 hover:shadow-md"
                animation="fade-in-up"
                delay={(i + 1) * 100 as 0 | 100 | 200 | 300 | 400 | 500}
              >
                <h3 className="font-heading font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/contact-us">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>

      <StatsBar />

      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-2">
              Services
            </Badge>
            <h2 className="font-heading mt-2 text-3xl font-bold text-foreground md:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-muted">
              Our team combines IP procedural expertise with industry knowledge to
              deliver tailored solutions that protect your intellectual property,
              safeguard your brand, and maximize your business&apos;s competitive
              advantage.
            </p>
          </div>
          <div className="mt-12">
            <ServicesSlider />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-center text-sm text-muted">
            <span>Years of Combined Experience</span>
            <span>Jurisdictions Connected</span>
            <span>Clients Served</span>
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBannerSection
        title="Discuss your IP strategy"
        subtitle="Get in touch to explore how we can protect and strengthen your intellectual property."
        buttonText="Request consultation"
        buttonHref="/contact-us"
        variant="gold"
      />

      <TrustStrip />

      <section
        className="relative min-h-[35vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/Images/law-wallpaper.jpg)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 flex min-h-[35vh] flex-col items-center justify-center px-4 py-16 text-center">
          <p className="font-heading max-w-2xl text-2xl font-semibold text-white md:text-3xl">
            We don&apos;t just secure your IP — we empower innovation, creativity, and sustainable growth.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Our World
            </h2>
            <p className="mt-2 text-muted">
              Dubai-based expertise. Global reach.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-5xl">
            <ImageShowcaseSlider />
          </div>
        </div>
      </section>

      <CtaBannerSection
        title="Ready to protect your intellectual property?"
        buttonText="Get in touch"
        buttonHref="/contact-us"
        variant="gold"
      />
    </>
  );
}
