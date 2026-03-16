import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { getAllSlugs } from "@/lib/blog";

const staticRoutes = [
  "",
  "/about-us",
  "/services",
  "/services/intellectual-property-services",
  "/services/trademark-registration-brand-protection",
  "/services/patent-filing-strategy-commercialisation",
  "/services/copyrights-designs-industrial-models",
  "/services/ip-audits-due-diligence",
  "/services/our-approach-to-intellectual-property",
  "/blog",
  "/contact-us",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : path.startsWith("/blog") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/blog" || path === "/contact-us" ? 0.9 : 0.8,
  }));

  const blogSlugs = getAllSlugs();
  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
