import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/JsonLd";
import { siteUrl, siteName, siteTagline, defaultDescription } from "@/lib/site";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0d1321",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} – ${siteTagline}`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "intellectual property",
    "trademark",
    "patent",
    "copyright",
    "IP",
    "Dubai",
    "UAE",
    "brand protection",
    "Themis IP",
    "TFLC",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName,
    title: `${siteName} – ${siteTagline}`,
    description: defaultDescription,
    images: [
      {
        url: "/logo/favicon.png",
        width: 512,
        height: 512,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} – ${siteTagline}`,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/logo/favicon.png",
    apple: "/logo/favicon.png",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "legal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${inter.variable} min-h-screen antialiased font-sans`}
      >
        <JsonLd />
        <Header />
        <main className="min-h-[60vh] overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
