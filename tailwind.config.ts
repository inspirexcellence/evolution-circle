import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#030B09",
          900: "#071512",
          850: "#0A1F1C",
          800: "#0E2823",
          700: "#133731",
          600: "#1A4840",
        },
        gold: {
          300: "#F3E39F",
          400: "#E5C365",
          500: "#D4AF37",
          600: "#B59325",
          700: "#8C701B",
        },
        champagne: "#E6CA65",
        warmWhite: "#FAF8F5",
        ivory: "#EFEBE4",
        beige: "#E0D7C6",
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        quote: ["var(--font-quote)", "serif"],
      },
      boxShadow: {
        goldGlow: "0 0 25px rgba(212, 175, 55, 0.18)",
        goldGlowIntense: "0 0 40px rgba(212, 175, 55, 0.35)",
        luxuryCard: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E6CA65 0%, #C5A059 50%, #9A7B38 100%)",
        "gold-radial": "radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
        "hero-glow": "radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.12) 0%, transparent 60%)",
        "dark-emerald-gradient": "linear-gradient(180deg, #071512 0%, #030B09 100%)",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        shimmer: 'shimmer 3s infinite linear',
      }
    },
  },
  plugins: [],
};

export default config;
