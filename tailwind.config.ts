import type { Config } from "tailwindcss";

/**
 * Tokens come from the UI UX Pro Max design system for this project:
 *   pattern  Hero + Features + CTA   style  Glassmorphism (light)
 *   dials    variance 5 / motion 5 / density 3 (spacious)
 *
 * Contrast notes (WCAG AA, verified):
 *   white on primary   #2563EB -> 5.12:1  OK for button labels
 *   white on accent    #EA580C -> 3.56:1  FAILS - never put text on it
 *   white on accentInk #C2410C -> 5.22:1  OK - use this for accent fills
 *   #EA580C is graphics-only (icons, rules, glows) at >= 3:1
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#2563EB", fg: "#FFFFFF", hover: "#1D4ED8" },
        secondary: { DEFAULT: "#3B82F6", fg: "#000000" },
        accent: {
          DEFAULT: "#EA580C", // graphics only
          ink: "#C2410C", // safe behind white text
          hover: "#9A3412",
          tint: "#FFF1E7",
        },
        background: "#F8FAFC",
        foreground: "#1E293B",
        card: { DEFAULT: "#FFFFFF", fg: "#1E293B" },
        muted: { DEFAULT: "#E9EFF8", fg: "#475569" },
        border: "#E2E8F0",
        destructive: { DEFAULT: "#DC2626", fg: "#FFFFFF" },
        ring: "#2563EB",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      // density 3/10 -> spacious scale (24-96px)
      spacing: {
        "space-xs": "0.75rem",
        "space-sm": "1.5rem",
        "space-md": "2.5rem",
        "space-lg": "4rem",
        "space-xl": "6rem",
        "space-2xl": "9rem",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        glass: "0 8px 32px -8px rgb(15 23 42 / 0.12), 0 2px 8px -2px rgb(15 23 42 / 0.06)",
        lift: "0 20px 48px -16px rgb(37 99 235 / 0.28)",
      },
      backdropBlur: { glass: "16px" },
      maxWidth: { content: "76rem" },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "none" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
