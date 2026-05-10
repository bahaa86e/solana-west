import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /** Quiet luxury — warm ivory, sand, stone; ink is editorial not harsh black. */
        lux: {
          ink: "#3d3a36",
          paper: "#faf9f6",
          sand: "#ede8e0",
          gold: "#b9a892",
          mist: "#f3f0ea",
          stone: "#c9c2b7",
          ivory: "#fdfcfa",
          charcoal: "#2f2c29",
          champagne: "#c4b69a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "Segoe UI", "sans-serif"],
      },
      /**
       * Luxury editorial scale — Cormorant (display) × Source Sans 3 (UI / body).
       * Principles: calm optical size, architectural display rhythm, investor-readable body (~42–62ch).
       */
      fontSize: {
        /** Cinematic homepage H1 — iconic, not billboard; caps ~68px for editorial grace */
        "lux-hero": [
          "clamp(2rem, 3vw + 0.94rem, 3.375rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "500" },
        ],
        /** Interior & hub H1 — editorial feature scale */
        "display-xl": [
          "clamp(1.875rem, 2.7vw + 1.0625rem, 3.375rem)",
          { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "500" },
        ],
        /** Section H2 — primary story titles */
        "display-lg": [
          "clamp(1.375rem, 1.38vw + 0.92rem, 2.35rem)",
          { lineHeight: "1.1", letterSpacing: "-0.019em", fontWeight: "500" },
        ],
        /** Story beats, pull quotes, cinematic captions */
        "lux-display-sm": [
          "clamp(1.3125rem, 1.15vw + 1rem, 1.875rem)",
          { lineHeight: "1.14", letterSpacing: "-0.018em", fontWeight: "500" },
        ],
        /** Serif subdeck — restrained elegance */
        "lux-deck": [
          "clamp(1.03125rem, 0.55vw + 0.875rem, 1.25rem)",
          { lineHeight: "1.5", letterSpacing: "-0.008em", fontWeight: "400" },
        ],
        /** Eyebrows / overlines — wide tracking, calm micro size */
        micro: [
          "clamp(0.6375rem, 0.14vw + 0.58rem, 0.7rem)",
          { lineHeight: "1.58", letterSpacing: "0.28em", fontWeight: "600" },
        ],
        /** Body baseline — long-form & UI paragraphs */
        "body-lg": [
          "clamp(1rem, 0.2vw + 0.92rem, 1.09375rem)",
          { lineHeight: "1.72", letterSpacing: "0.0075em", fontWeight: "400" },
        ],
        /** Intro & hero secondary — emotional readability */
        "lux-lead": [
          "clamp(1rem, 0.38vw + 0.9rem, 1.125rem)",
          { lineHeight: "1.65", letterSpacing: "0.009em", fontWeight: "400" },
        ],
        /** Annotation & supporting clauses */
        "lux-muted": [
          "clamp(0.890625rem, 0.16vw + 0.8125rem, 1rem)",
          { lineHeight: "1.68", letterSpacing: "0.014em", fontWeight: "400" },
        ],
        /** Primary CTA & key controls — confident, not SaaS-thin */
        "lux-cta": [
          "clamp(0.875rem, 0.12vw + 0.82rem, 0.9375rem)",
          { lineHeight: "1.35", letterSpacing: "0.055em", fontWeight: "600" },
        ],
      },
      lineHeight: {
        /** Display: architectural tightness without crunch */
        "lux-display": "1.06",
        "lux-display-loose": "1.1",
        /** Body: calm investor scan */
        "lux-body": "1.68",
        "lux-body-relaxed": "1.74",
      },
      spacing: {
        /** Vertical typography rhythm inside sections */
        "lux-stack-xs": "clamp(0.9375rem, 2.1vw, 1.3125rem)",
        "lux-stack-sm": "clamp(1.1875rem, 2.65vw, 1.8125rem)",
        "lux-stack-md": "clamp(1.5rem, 3.1vw, 2.25rem)",
        "lux-stack-lg": "clamp(1.75rem, 3.6vw, 2.625rem)",
        section: "clamp(3.25rem, 8.5vw, 6.5rem)",
        "section-tight": "clamp(3.5rem, 9.25vw, 6.75rem)",
        "section-xl": "clamp(4.125rem, 11vw, 8.75rem)",
        "section-breath": "clamp(4.5rem, 12vw, 9.75rem)",
        "section-gap": "clamp(2.5rem, 4.25vw, 3.875rem)",
        "section-block": "clamp(2.625rem, 5.5vw, 4.125rem)",
        gutter: "clamp(1.125rem, 4vw, 2rem)",
        "safe-bottom": "env(safe-area-inset-bottom, 0px)",
      },
      maxWidth: {
        /** ~1152px — prevents ultra-wide stretched reading columns inside default shells */
        content: "min(72rem,calc(100vw-4.75rem))",
        /** ~672px — classic editorial measure; luxury web, not full-bleed SaaS widths */
        readable: "42rem",
      },
      minHeight: {
        screen: "100dvh",
      },
      boxShadow: {
        "lux-soft":
          "0 22px 58px -44px rgba(45,42,37,0.08), inset 0 1px 0 rgba(252,250,247,0.58)",
        "lux-card":
          "0 14px 38px -30px rgba(45,42,37,0.07), inset 0 1px 0 rgba(252,250,247,0.68)",
        "lux-line": "inset 0 1px 0 rgba(252,250,247,0.55)",
        "lux-depth":
          "0 1px 2px -1px rgba(45,42,37,0.028), 0 10px 28px -24px rgba(45,42,37,0.065)",
        "lux-image":
          "0 18px 48px -34px rgba(45,42,37,0.09), inset 0 1px 0 rgba(252,250,247,0.35)",
        "lux-glass":
          "0 24px 58px -40px rgba(45,42,37,0.08), inset 0 1px 0 rgba(255,255,255,0.52), inset 0 -1px 0 rgba(45,42,37,0.024)",
        "lux-glow-warm":
          "0 0 min(88px,14vw) min(20px,3vw) rgba(185,168,146,0.05), 0 18px 48px -36px rgba(45,42,37,0.07)",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        400: "400ms",
        480: "480ms",
      },
      screens: {
        xs: "380px",
      },
      keyframes: {
        /** Floating WhatsApp — soft outer ring “breathing”, no aggressive motion */
        "lux-wa-breathe-ring": {
          "0%, 100%": { opacity: "0.36", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.02)" },
        },
        /** Barely perceptible elevation pulse on the capsule */
        "lux-wa-breathe-shell": {
          "0%, 100%": { boxShadow: "0 8px 22px -20px rgba(28,26,23,0.1)" },
          "50%": { boxShadow: "0 10px 26px -20px rgba(28,26,23,0.12)" },
        },
      },
      animation: {
        "lux-wa-breathe-ring": "lux-wa-breathe-ring 4.2s ease-in-out infinite",
        "lux-wa-breathe-shell": "lux-wa-breathe-shell 4.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
