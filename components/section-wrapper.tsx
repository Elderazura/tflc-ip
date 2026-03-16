import { Badge } from "@/components/ui/badge";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  as?: "section" | "div";
}

export function SectionWrapper({
  children,
  className = "",
  label,
  title,
  subtitle,
  as: Tag = "section",
}: SectionWrapperProps) {
  return (
    <Tag className={className}>
      <div className="container mx-auto px-4 py-12 sm:py-16 md:px-6 md:py-20 lg:py-28">
        {(label || title || subtitle) && (
          <div className="mx-auto max-w-2xl text-center">
            {label && (
              <Badge variant="secondary" className="mb-2">
                {label}
              </Badge>
            )}
            {title && (
              <h2 className="font-heading mt-2 text-3xl font-bold text-foreground md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-muted">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </Tag>
  );
}
