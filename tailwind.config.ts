import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hexa: {
          black: "#050505",
          blackSoft: "#0B0B0D",
          blackCard: "#111114",
          red: "#E50914",
          redDark: "#8B050B",
          redGlow: "#FF1F2D",
          silver: "#E6E6E6",
          silverSoft: "#F5F5F5",
          graphite: "#111113",
          border: "rgba(255,255,255,0.14)",
          muted: "#A1A1AA",
        },
      },
      boxShadow: {
        "red-glow": "0 0 30px rgba(229, 9, 20, 0.35)",
        "red-glow-lg": "0 0 60px rgba(229, 9, 20, 0.45)",
        "premium-card": "0 18px 60px rgba(0, 0, 0, 0.45)",
      },
      borderRadius: {
        premium: "1.5rem",
        "premium-sm": "1rem",
      },
      backgroundImage: {
        "premium-dark":
          "linear-gradient(180deg, #050505 0%, #0B0B0D 45%, #050505 100%)",
        "hexa-radial":
          "radial-gradient(circle at top, rgba(229, 9, 20, 0.24), transparent 34%)",
      },
    },
  },
  plugins: [],
};

export default config;