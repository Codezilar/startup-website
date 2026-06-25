import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#050505",
        panel: "#101010",
        cyan: "#00F5FF"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 44px rgba(0, 245, 255, 0.26)",
        card: "0 22px 70px rgba(0, 0, 0, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
