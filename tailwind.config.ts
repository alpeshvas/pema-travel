import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: "#8B1A1A",
        "deep-red": "#A02020",
        gold: "#D4A843",
        "gold-light": "#E8C972",
        saffron: "#E89B3A",
        cream: "#F5EDD8",
        "warm-white": "#FAF6EE",
        dark: "#1A1209",
        brown: "#3D2B1F",
        forest: "#2D4A2D",
        sky: "#6BA3BE",
        cloud: "#E8E2D4",
      },
      borderRadius: {
        card: "20px",
        lg: "16px",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "serif"],
      },
      animation: {
        "cloud-float": "cloudFloat 60s linear infinite",
        "flag-wave": "flagWave 3s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "mandala-spin": "mandalaSpin 40s linear infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
        "ken-burns": "kenBurns 25s ease-in-out infinite alternate",
        "slide-down": "slideDown 0.3s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        cloudFloat: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(100vw + 400px))" },
        },
        flagWave: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        mandalaSpin: {
          from: { transform: "translate(-50%, -50%) rotate(0deg)" },
          to: { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scrollPulse: {
          "0%, 100%": { transform: "scaleY(1)", opacity: "1" },
          "50%": { transform: "scaleY(0.5)", opacity: "0.5" },
        },
        kenBurns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        progressFill: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
