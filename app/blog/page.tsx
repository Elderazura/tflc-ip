import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBannerSection } from "@/components/cta-banner-section";
import { blogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog – Themis IP",
  description: "Insights on intellectual property, trademarks, patents, and brand protection from Themis IP.",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/Images/lawyers.jpg)",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 flex min-h-[40vh] flex-col justify-end px-4 pb-12 pt-24">
          <div className="container mx-auto">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
              Blog
            </h1>
            <p className="mt-2 max-w-xl text-white/95">
              Insights on IP, trademarks, patents, and brand protection.
            </p>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-2">
              Insights
            </Badge>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Latest articles
            </h2>
            <p className="mt-4 text-muted">
              Practical perspectives on intellectual property and commercial strategy.
            </p>
          </div>
          <div className="mx-auto mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full overflow-hidden border-white/10 transition-all hover:border-accent-gold/20 hover:-translate-y-0.5 hover:shadow-lg">
                  {post.image && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-primary/30" />
                      {post.category && (
                        <Badge variant="secondary" className="absolute right-3 top-3">
                          {post.category}
                        </Badge>
                      )}
                    </div>
                  )}
                  {!post.image && post.category && (
                    <div className="border-b border-white/10 px-6 pt-6">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <p className="text-xs text-muted">{formatDate(post.date)}</p>
                    <h3 className="font-heading mt-2 text-lg font-semibold text-foreground line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="mt-3 inline-block text-sm text-accent-gold">
                      Read more →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBannerSection
        title="Have a question about IP?"
        subtitle="We're here to help with trademarks, patents, and strategy."
        buttonText="Contact us"
        buttonHref="/contact-us"
        variant="gold"
      />
    </>
  );
}
