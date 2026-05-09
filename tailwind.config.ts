import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lux: {
          ink: "#0a0a0a",
          paper: "#faf8f5",
          sand: "#e8e2d9",
          gold: "#c4a574",
          mist: "#f3efe8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "Segoe UI", "sans-serif"],
      },
      /** Ultra-lux serif display + readable sans editorial scale — pair serif with font-display only. */
      fontSize: {
        /** Cinematic homepage H1 scale */
        "lux-hero": [
          "clamp(2.275rem, 6.85vw + 0.62rem, 5.0625rem)",
          { lineHeight: "1.03", letterSpacing: "-0.036em", fontWeight: "500" },
        ],
        /** Interior / hub editorial H1 */
        "display-xl": [
          "clamp(2.0625rem, 3.9vw + 1.0625rem, 4.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.024em", fontWeight: "500" },
        ],
        /** Primary section headings (H2) */
        "display-lg": [
          "clamp(1.6875rem, 2.5vw + 0.965rem, 3.0625rem)",
          { lineHeight: "1.065", letterSpacing: "-0.021em", fontWeight: "500" },
        ],
        /** Supporting serif display (quotes, tertiary emphasis) */
        "lux-display-sm": [
          "clamp(1.4375rem, 1.4vw + 1.065rem, 2.0625rem)",
          { lineHeight: "1.15", letterSpacing: "-0.016em", fontWeight: "500" },
        ],
        /** Serif deck / standout line under article titles */
        "lux-deck": [
          "clamp(1.0625rem, 0.75vw + 0.8925rem, 1.3125rem)",
          { lineHeight: "1.48", letterSpacing: "-0.011em", fontWeight: "400" },
        ],
        /** Editorial overlines — intentional micro weight for hierarchy */
        micro: ["clamp(0.6875rem, 0.22vw + 0.6425rem, 0.75rem)", { lineHeight: "1.5", letterSpacing: "0.26em", fontWeight: "600" }],
        /** Primary running text (layouts / body baseline) */
        "body-lg": [
          "clamp(1.028125rem, 0.32vw + 0.9425rem, 1.15625rem)",
          { lineHeight: "1.7", letterSpacing: "0.01em", fontWeight: "400" },
        ],
        /** Larger intro paragraphs (sans lead) */
        "lux-lead": [
          "clamp(1.015625rem, 0.45vw + 0.8925rem, 1.1875rem)",
          { lineHeight: "1.72", letterSpacing: "0.012em", fontWeight: "400" },
        ],
        /** Supporting / secondary narration */
        "lux-muted": [
          "clamp(0.9175rem, 0.18vw + 0.8375rem, 1.015625rem)",
          { lineHeight: "1.76", letterSpacing: "0.018em", fontWeight: "400" },
        ],
      },
      spacing: {
        /** Vertical typography rhythm inside sections */
        "lux-stack-xs": "clamp(0.875rem, 2vw, 1.25rem)",
        "lux-stack-sm": "clamp(1.125rem, 2.5vw, 1.75rem)",
        "lux-stack-md": "clamp(1.4375rem, 3vw, 2.1875rem)",
        "lux-stack-lg": "clamp(1.6875rem, 3.5vw, 2.5rem)",
        section: "clamp(3rem, 8vw, 6rem)",
        "section-tight": "clamp(3.25rem, 9vw, 6.5rem)",
        "section-xl": "clamp(3.875rem, 11vw, 8.5rem)",
        /** Taller vertical breathing between major story beats */
        "section-breath": "clamp(4.25rem, 12vw, 9.25rem)",
        /** Consistent inter-column / stack gap for editorial grids */
        "section-gap": "clamp(2.75rem, 5.5vw, 4.5rem)",
        "section-block": "clamp(2.5rem, 5.5vw, 4rem)",
        gutter: "clamp(1.125rem, 4vw, 2rem)",
        "safe-bottom": "env(safe-area-inset-bottom, 0px)",
      },
      maxWidth: {
        content: "75rem",
        /** ~736px optimum line length on luxury editorial web */
        readable: "46rem",
      },
      minHeight: {
        screen: "100dvh",
      },
      boxShadow: {
        "lux-soft":
          "0 36px 90px -44px rgba(10,10,10,0.26), inset 0 1px 0 rgba(250,248,245,0.38)",
        "lux-card":
          "0 24px 56px -36px rgba(10,10,10,0.2), inset 0 1px 0 rgba(250,248,245,0.72)",
        "lux-line": "inset 0 1px 0 rgba(250,248,245,0.68)",
        "lux-depth":
          "0 1px 2px -1px rgba(10,10,10,0.05), 0 16px 40px -28px rgba(10,10,10,0.14)",
        "lux-image":
          "0 32px 78px -40px rgba(10,10,10,0.3), inset 0 1px 0 rgba(250,248,245,0.28)",
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
          "0%, 100%": { opacity: "0.42", transform: "scale(1)" },
          "50%": { opacity: "0.62", transform: "scale(1.035)" },
        },
        /** Barely perceptible elevation pulse on the capsule */
        "lux-wa-breathe-shell": {
          "0%, 100%": { boxShadow: "0 12px 36px -24px rgba(10,10,10,0.22)" },
          "50%": { boxShadow: "0 16px 42px -24px rgba(10,10,10,0.26)" },
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
