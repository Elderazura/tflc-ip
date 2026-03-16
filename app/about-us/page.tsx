import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatsBar } from "@/components/stats-bar";
import { CtaBannerSection } from "@/components/cta-banner-section";

const team = [
  { name: "Imthias Kadeer Hameed", role: "Chief Executive Officer" },
  { name: "Françoise Staring - Mouly", role: "Partner - Head of Business Development" },
  { name: "Sreeram Harikumar", role: "Operations Manager" },
  { name: "Hayat Muhammad Junejo", role: "Legal Counsel - Intellectual Property" },
];

const values = [
  { title: "Integrity", text: "We act with transparency and ethical rigour in every client relationship." },
  { title: "Excellence", text: "We deliver high-quality, precise IP advice and execution." },
  { title: "Global mindset", text: "We think across borders and jurisdictions to protect your assets worldwide." },
  { title: "Client-first", text: "Your business goals and commercial success drive our strategy." },
];

const milestones = [
  { year: "Founded", label: "Establishment of Themis IP practice" },
  { year: "First office", label: "Dubai as primary base for UAE and regional clients" },
  { year: "Key practice areas", label: "Trademarks, patents, copyrights, and advisory" },
  { year: "Today", label: "Serving clients across multiple jurisdictions" },
];

const testimonials = [
  { quote: "Themis IP provided clear, practical advice that aligned perfectly with our commercial objectives.", author: "Client, luxury sector" },
  { quote: "Professional, responsive, and deeply knowledgeable in IP. We trust them with our portfolio.", author: "Client, technology sector" },
];

export const metadata = {
  title: "About Us – Themis IP",
  description: "Our approach to intellectual property and team. Dubai-based IP practice.",
};

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/Images/lawyers.jpg)",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 flex min-h-[50vh] flex-col justify-end px-4 pb-12 pt-24">
          <div className="container mx-auto">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
              About Us
            </h1>
            <p className="mt-2 max-w-xl text-white/95">
              Our approach to intellectual property and the people behind Themis IP.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-background py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto grid items-center gap-10 px-4 sm:px-6 sm:gap-12 md:max-w-6xl md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/Images/lawyer-client2.png"
              alt="Client partnership"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-primary/20" />
          </div>
          <div>
            <Badge variant="secondary" className="mb-2">
              Our approach
            </Badge>
            <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
              Our Approach to Intellectual Property
            </h2>
            <div className="mt-6 space-y-4 text-muted">
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
                At Themis, we don&apos;t just secure your IP; we empower
                innovation, creativity, and sustainable growth.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link href="/services/our-approach-to-intellectual-property">
                  Our approach in detail
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-2">
              Core values
            </Badge>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Our values
            </h2>
            <p className="mt-4 text-muted">
              The principles that guide how we work with clients and partners.
            </p>
          </div>
          <div className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <Card
                key={item.title}
                className="border-white/10 transition-all hover:border-accent-gold/20 hover:-translate-y-0.5"
              >
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-2">
              Our journey
            </Badge>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Key milestones
            </h2>
          </div>
          <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-6">
            {milestones.map((item) => (
              <Card
                key={item.year}
                className="min-w-[200px] flex-1 border-white/10 transition-all hover:border-accent-gold/20 hover:-translate-y-0.5"
              >
                <CardContent className="p-6 text-center">
                  <p className="font-heading text-lg font-semibold text-accent-gold">
                    {item.year}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-2">
              Where we work
            </Badge>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Global presence
            </h2>
            <p className="mt-4 text-muted">
              Dubai-based. We serve clients globally across multiple jurisdictions.
            </p>
          </div>
          <div className="mx-auto mt-14 max-w-2xl">
            <Card className="overflow-hidden border-white/10">
              <div className="relative aspect-[2/1] w-full overflow-hidden md:aspect-[3/1]">
                <Image
                  src="/Images/dubai-city.jpg"
                  alt="Dubai – Themis IP headquarters"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
                <div className="absolute inset-0 bg-primary/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
                  <p className="font-heading text-xl font-semibold md:text-2xl">
                    Churchill Executive Tower
                  </p>
                  <p className="mt-1 text-white/90">Business Bay · Dubai, UAE</p>
                  <Button asChild variant="outline" size="sm" className="mt-4 border-white/50 bg-white/10 text-white hover:bg-white/20">
                    <Link href="/contact-us">Contact & directions</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Team */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-2">
              Team
            </Badge>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Our team
            </h2>
            <p className="mt-4 text-muted">
              Experienced IP professionals dedicated to protecting your assets.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card
                key={member.name}
                className="overflow-hidden border-white/10 transition-all hover:border-accent-gold/20 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div
                  className="aspect-square w-full bg-gradient-to-br from-primary/20 to-accent-gold/10"
                  aria-hidden
                />
                <CardHeader className="p-6">
                  <h3 className="font-heading font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted">{member.role}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild>
              <Link href="/contact-us">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-2">
              Client voices
            </Badge>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              What our clients say
            </h2>
          </div>
          <div className="mx-auto mt-14 grid gap-6 md:max-w-4xl md:grid-cols-2">
            {testimonials.map((item) => (
              <Card
                key={item.author}
                className="border-accent-gold/20 border-l-4 border-l-accent-gold/50 bg-card"
              >
                <CardContent className="p-6">
                  <p className="text-foreground">&ldquo;{item.quote}&rdquo;</p>
                  <p className="mt-3 text-sm text-muted">— {item.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBannerSection
        title="Speak to our team"
        subtitle="Request a consultation to discuss your IP needs."
        buttonText="Request a consultation"
        buttonHref="/contact-us"
        variant="gold"
      />
    </>
  );
}
