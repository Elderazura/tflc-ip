import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBannerSection } from "@/components/cta-banner-section";

const office = {
  name: "Churchill Executive Tower",
  address: "Business Bay",
  city: "Dubai, UAE",
  phone: "+971 4 552 9233",
  email: "legal@themis-ip.ae",
  mapFallbackUrl: "https://www.google.com/maps/search/Churchill+Executive+Tower+Business+Bay+Dubai",
};

export const metadata = {
  title: "Contact Us – Themis IP",
  description: "Reach out to Themis IP. We answer all queries within 24 hours.",
};

export default function ContactUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/Images/dubai-city.jpg)",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 flex min-h-[40vh] flex-col justify-end px-4 pb-8 pt-20 sm:pb-12 sm:pt-24">
          <div className="container mx-auto">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-2 max-w-xl text-sm text-white/95 sm:text-base">
              Reach out today. We answer all queries within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact + Map */}
      <section className="bg-background py-16 sm:py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-2">
              Get in touch
            </Badge>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              We&apos;re here to help
            </h2>
            <p className="mt-4 text-muted">
              Send a message or visit us at our Dubai office.
            </p>
          </div>

          <div className="mx-auto mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <div className="lg:order-2">
              <Card className="border-white/10 p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Send a message
                </h3>
                <form className="mt-6 space-y-6" action="#" method="post">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Name
                    </Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      required
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      required
                      className="h-4 w-4 rounded border-white/30 bg-card text-accent-gold focus:ring-accent-gold"
                    />
                    <Label htmlFor="terms" className="font-normal text-muted">
                      I agree to the Terms & Conditions
                    </Label>
                  </div>
                  <Button type="submit" size="lg">
                    Send message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact details + Map */}
            <div className="space-y-8 lg:order-1">
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="border-white/10 transition-all hover:border-accent-gold/20">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-gold">
                      Call us
                    </h3>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="mt-2 block text-foreground transition-colors hover:text-accent-gold hover:underline"
                    >
                      {office.phone}
                    </a>
                  </CardContent>
                </Card>
                <Card className="border-white/10 transition-all hover:border-accent-gold/20">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-gold">
                      Email us
                    </h3>
                    <a
                      href={`mailto:${office.email}`}
                      className="mt-2 block break-all text-foreground transition-colors hover:text-accent-gold hover:underline"
                    >
                      {office.email}
                    </a>
                  </CardContent>
                </Card>
              </div>

              <Card className="overflow-hidden border-white/10">
                <CardContent className="p-0">
                  <h3 className="font-heading border-b border-white/10 px-6 py-4 text-lg font-semibold text-foreground">
                    Our office
                  </h3>
                  <div className="p-6">
                    <p className="font-medium text-foreground">{office.name}</p>
                    <p className="text-muted">{office.address}</p>
                    <p className="text-muted">{office.city}</p>
                    <Button asChild variant="outline" size="sm" className="mt-4">
                      <a
                        href={office.mapFallbackUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps →
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Map embed */}
              <Card className="overflow-hidden border-white/10">
                <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-video">
                  <iframe
                    title="Themis IP office location - Business Bay, Dubai"
                    src="https://maps.google.com/maps?q=Churchill+Executive+Tower+Business+Bay+Dubai&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full"
                  />
                  <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-b-xl" />
                </div>
                <div className="border-t border-white/10 px-4 py-3 text-center">
                  <p className="text-sm text-muted">
                    {office.name}, {office.address}, {office.city}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office hours / info strip */}
      <section className="bg-surface py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-6 text-center sm:gap-8">
            <div>
              <p className="text-sm font-medium text-accent-gold">Response time</p>
              <p className="mt-1 text-muted">We aim to respond within 24 hours</p>
            </div>
            <div>
              <p className="text-sm font-medium text-accent-gold">Office</p>
              <p className="mt-1 text-muted">By appointment at Churchill Executive Tower</p>
            </div>
            <div>
              <p className="text-sm font-medium text-accent-gold">Languages</p>
              <p className="mt-1 text-muted">English, Arabic & more</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBannerSection
        title="Explore our services or speak to the team."
        buttonText="View services"
        buttonHref="/services"
        variant="gold"
      />
    </>
  );
}
