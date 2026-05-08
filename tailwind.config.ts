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
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.375rem, 4.9vw + 1rem, 3.875rem)",
          { lineHeight: "1.04", letterSpacing: "-0.022em", fontWeight: "500" },
        ],
        "display-lg": [
          "clamp(1.6875rem, 2.9vw + 0.85rem, 2.6875rem)",
          { lineHeight: "1.12", letterSpacing: "-0.018em", fontWeight: "500" },
        ],
        micro: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.28em", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.72" }],
      },
      spacing: {
        section: "clamp(3rem, 8vw, 6rem)",
        "section-tight": "clamp(3.25rem, 9vw, 6.5rem)",
        "section-xl": "clamp(4rem, 12vw, 8.75rem)",
        gutter: "clamp(1.125rem, 4vw, 2rem)",
        "safe-bottom": "env(safe-area-inset-bottom, 0px)",
      },
      maxWidth: {
        content: "75rem",
        readable: "42rem",
      },
      minHeight: {
        screen: "100dvh",
      },
      boxShadow: {
        "lux-soft": "0 32px 80px -40px rgba(10,10,10,0.22)",
        "lux-card": "0 20px 50px -32px rgba(10,10,10,0.16)",
        "lux-line": "inset 0 1px 0 rgba(250,248,245,0.65)",
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
