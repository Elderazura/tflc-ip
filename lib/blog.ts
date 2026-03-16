export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  category?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "trademark-protection-uae-2024",
    title: "Trademark protection in the UAE: what you need to know",
    excerpt: "A practical overview of registering and enforcing trademarks in the UAE and across the Gulf region.",
    date: "2024-03-01",
    image: "/Images/law-wallpaper.jpg",
    category: "Trademarks",
    content: `
      Protecting your brand in the UAE and the wider Gulf region requires a clear understanding of local trademark law and practice. At Themis IP, we help clients from startups to multinationals secure and enforce their marks.

      **Registration and use** – Filing strategies, opposition handling, and maintaining your portfolio across jurisdictions are core to what we do. We align registration with your commercial timeline and expansion plans.

      **Enforcement** – From customs recordals to civil and administrative actions, we support clients in defending their brands against infringement and counterfeiting.

      Whether you are entering the market or already operating here, we can advise on the right steps to protect and strengthen your trademark position.
    `,
  },
  {
    slug: "ip-due-diligence-transactions",
    title: "IP due diligence for transactions and investments",
    excerpt: "Why intellectual property audits matter in M&A, fundraising, and licensing—and how we approach them.",
    date: "2024-02-15",
    image: "/Images/law-books.png",
    category: "Advisory",
    content: `
      Intellectual property often forms a significant part of the value in mergers, acquisitions, and investments. Proper IP due diligence helps buyers, investors, and licensors understand what they are getting—and what risks they might be taking on.

      **What we review** – We look at ownership, chain of title, registrations, pending applications, and key agreements (licences, assignments, co-existence). We also flag enforcement history and potential conflicts.

      **Outcome** – Our reports are tailored to the deal: clear, actionable, and aligned with your commercial and legal priorities. We work alongside your deal team to keep timelines on track.

      If you are planning a transaction or investment where IP is in scope, we can design and deliver the right level of due diligence for your needs.
    `,
  },
  {
    slug: "patents-innovation-uae",
    title: "Patents and innovation: filing and strategy in the UAE",
    excerpt: "An introduction to patent protection and commercialisation for innovators and businesses in the region.",
    date: "2024-01-20",
    image: "/Images/dubai_skyline.jpg",
    category: "Patents",
    content: `
      The UAE and regional patent landscape continues to evolve, offering more options for protecting and commercialising innovation. Whether you are an inventor, an SME, or a larger enterprise, a clear patent strategy can support funding, partnerships, and market position.

      **Filing options** – We advise on national filings, GCC patent applications, and international routes (PCT and direct overseas). Choice of route depends on your markets, budget, and timeline.

      **Commercialisation** – Patents are assets. We help clients think through licensing, joint ventures, and enforcement so that their R&D supports business outcomes.

      Our team combines procedural expertise with a commercial focus—get in touch if you would like to discuss your patent strategy.
    `,
  },
  {
    slug: "copyrights-designs-brands",
    title: "Copyrights and designs: protecting creativity and product identity",
    excerpt: "How copyright and design rights can protect your creative work and product identity alongside your brands.",
    date: "2023-12-10",
    category: "Copyrights",
    content: `
      Trademarks protect your brand names and logos; copyright and design rights protect the underlying creative work and product appearance. Together they form a strong basis for protecting your identity and creativity.

      **Copyright** – Applies to literary, artistic, and musical works, software, and certain other subject matter. Registration is not always mandatory but can strengthen evidence of ownership and dates.

      **Designs** – Registered design rights protect the appearance of products. They are especially relevant for consumer goods, packaging, and industrial design.

      We advise on the interplay between trademarks, copyrights, and designs so that your IP portfolio reflects the full value of your creativity and product identity.
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
