import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /** Editorial luxury — ivory, architectural stone, warm charcoal, Champagne (muted). */
        lux: {
          ink: "#2c2b28",
          paper: "#f7f6f3",
          sand: "#e8e4dc",
          gold: "#b9a892",
          mist: "#f1eee8",
          stone: "#c4bdb2",
          ivory: "#fcfaf7",
          charcoal: "#1f1e1b",
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
          "clamp(1.9375rem, 4.5vw + 0.72rem, 4rem)",
          { lineHeight: "1.05", letterSpacing: "-0.032em", fontWeight: "500" },
        ],
        /** Interior & hub H1 — editorial feature scale */
        "display-xl": [
          "clamp(1.875rem, 2.7vw + 1.0625rem, 3.375rem)",
          { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "500" },
        ],
        /** Section H2 — primary story titles */
        "display-lg": [
          "clamp(1.4375rem, 1.45vw + 0.95rem, 2.5rem)",
          { lineHeight: "1.095", letterSpacing: "-0.021em", fontWeight: "500" },
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
        "section-gap": "clamp(2.875rem, 5.5vw, 4.75rem)",
        "section-block": "clamp(2.625rem, 5.5vw, 4.125rem)",
        gutter: "clamp(1.125rem, 4vw, 2rem)",
        "safe-bottom": "env(safe-area-inset-bottom, 0px)",
      },
      maxWidth: {
        content: "75rem",
        /** ~672px — classic editorial measure; luxury web, not full-bleed SaaS widths */
        readable: "42rem",
      },
      minHeight: {
        screen: "100dvh",
      },
      boxShadow: {
        "lux-soft":
          "0 22px 58px -44px rgba(28,26,23,0.11), inset 0 1px 0 rgba(252,250,247,0.52)",
        "lux-card":
          "0 14px 38px -30px rgba(28,26,23,0.09), inset 0 1px 0 rgba(252,250,247,0.62)",
        "lux-line": "inset 0 1px 0 rgba(252,250,247,0.55)",
        "lux-depth":
          "0 1px 2px -1px rgba(28,26,23,0.032), 0 10px 28px -24px rgba(28,26,23,0.085)",
        "lux-image":
          "0 18px 48px -34px rgba(28,26,23,0.12), inset 0 1px 0 rgba(252,250,247,0.2)",
        "lux-glass":
          "0 24px 58px -40px rgba(28,26,23,0.11), inset 0 1px 0 rgba(255,255,255,0.48), inset 0 -1px 0 rgba(28,26,23,0.03)",
        "lux-glow-warm":
          "0 0 min(88px,14vw) min(20px,3vw) rgba(185,168,146,0.06), 0 18px 48px -36px rgba(28,26,23,0.09)",
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
