import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaBannerSection } from "@/components/cta-banner-section";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { siteUrl } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function renderContent(content: string) {
  const paragraphs = content
    .trim()
    .split(/\n\n+/)
    .filter(Boolean);
  return (
    <div className="prose prose-invert max-w-none space-y-4">
      {paragraphs.map((para, i) => {
        const parts = para.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="text-muted leading-relaxed">
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} className="font-semibold text-foreground">
                  {part.slice(2, -2)}
                </strong>
              ) : (
                <span key={j}>{part}</span>
              )
            )}
          </p>
        );
      })}
    </div>
  );
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  const title = `${post.title} – Themis IP Blog`;
  const url = `${siteUrl.replace(/\/$/, "")}/blog/${slug}`;
  const image = post.image ? `${siteUrl.replace(/\/$/, "")}${post.image}` : undefined;
  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      images: image ? [{ url: image, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[35vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: post.image
              ? `url(${post.image})`
              : "url(/Images/law-wallpaper.jpg)",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 flex min-h-[35vh] flex-col justify-end px-4 pb-12 pt-24">
          <div className="container mx-auto max-w-3xl">
            {post.category && (
              <Badge variant="secondary" className="mb-2">
                {post.category}
              </Badge>
            )}
            <h1 className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-2 text-white/90">{formatDate(post.date)}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-12 sm:py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl border border-white/10 bg-card p-8 md:p-10">
            {renderContent(post.content)}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild variant="outline">
              <Link href="/blog">← All posts</Link>
            </Button>
            <Button asChild>
              <Link href="/contact-us">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBannerSection
        title="Discuss your IP strategy"
        buttonText="Get in touch"
        buttonHref="/contact-us"
        variant="gold"
      />
    </>
  );
}
