"use client";

type ParallaxBannerProps = {
  image: string;
  overlay?: boolean;
  children?: React.ReactNode;
  className?: string;
};

export function ParallaxBanner({
  image,
  overlay = true,
  children,
  className = "",
}: ParallaxBannerProps) {
  return (
    <section
      className={`relative min-h-[40vh] overflow-hidden bg-cover bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundAttachment: "fixed",
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-primary/70" />
      )}
      {children && (
        <div className="relative z-10 flex min-h-[40vh] items-center justify-center px-4 py-16 text-center text-white">
          {children}
        </div>
      )}
    </section>
  );
}
