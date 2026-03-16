/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Dark premium theme */
        background: "#0a0a0f",
        foreground: "#f8fafc",
        muted: "#94a3b8",
        card: "#151b28",
        "card-foreground": "#f8fafc",
        border: "rgba(255,255,255,0.08)",
        primary: "#0d1321",
        "primary-foreground": "#ffffff",
        navy: {
          DEFAULT: "#00152e",
          dark: "#0d1321",
          link: "#cbd5e1",
        },
        accent: {
          DEFAULT: "#70674a",
          gold: "#C9AA6D",
        },
        brand: {
          blue: "#0045ff",
          light: "#151b28",
        },
        surface: {
          DEFAULT: "#0d1321",
          elevated: "#151b28",
        },
      },
      fontFamily: {
        heading: ["var(--font-barlow)", "Barlow Condensed", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee-strip": "marquee 40s linear infinite",
        "icon-bounce": "iconBounce 0.5s ease-out",
        "icon-float": "iconFloat 2s ease-in-out infinite",
      },
      keyframes: {
        iconBounce: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-4px) scale(1.05)" },
        },
        iconFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.9" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
      },
    },
  },
  plugins: [],
};
