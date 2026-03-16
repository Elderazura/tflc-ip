import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

const legalLinks = [
  { href: "/contact-us", label: "Contact" },
  { href: "/about-us", label: "Offices" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background text-foreground">
      <div className="container mx-auto px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
              About Company
            </h3>
            <p className="text-sm text-muted">
              Themis IP – Protect | Monetize | Strengthen Your Brand
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-1 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted transition-colors hover:text-accent-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
              Contact
            </h3>
            <p className="text-sm text-muted">
              Churchill Executive Tower - Business Bay - Dubai
              <br />
              <a
                href="tel:+97145529233"
                className="transition-colors hover:text-accent-gold hover:underline"
              >
                04 552 9233
              </a>
              <br />
              <a
                href="mailto:legal@themis-ip.ae"
                className="transition-colors hover:text-accent-gold hover:underline"
              >
                legal@themis-ip.ae
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:flex-wrap sm:justify-between sm:text-left">
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted transition-colors hover:text-accent-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted">
            Copyright © TFLC {new Date().getFullYear()} All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
