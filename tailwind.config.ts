import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          0: "#050507",
          50: "#07080B",
          100: "#0B0D12",
          200: "#11141A",
          300: "#171B23",
          400: "#1F242E",
          500: "#2A303C",
          600: "#3A414F",
        },
        bone: {
          DEFAULT: "#ECEEF3",
          muted: "#9097A3",
          dim: "#5A606C",
        },
        ice: {
          DEFAULT: "#5AE6FF",
          bright: "#7FF0FF",
          deep: "#1FB6D9",
          glow: "rgba(90, 230, 255, 0.35)",
        },
        chrome: {
          DEFAULT: "#D7DCE4",
          dark: "#8A919E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        "ultra-wide": "0.28em",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #070809 80%), linear-gradient(#1a1f2a 1px, transparent 1px), linear-gradient(90deg, #1a1f2a 1px, transparent 1px)",
        "radial-ice":
          "radial-gradient(circle at 30% 20%, rgba(90,230,255,0.18), transparent 55%)",
        "chrome-sheen":
          "linear-gradient(135deg, #ECEEF3 0%, #9097A3 30%, #ECEEF3 55%, #5A606C 80%, #ECEEF3 100%)",
      },
      boxShadow: {
        glow: "0 0 80px -10px rgba(90, 230, 255, 0.45)",
        "glow-sm": "0 0 40px -10px rgba(90, 230, 255, 0.35)",
        "inset-hairline": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "shine": "shine 2.5s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shine: {
          "0%, 100%": { backgroundPosition: "200% center" },
          "50%": { backgroundPosition: "-200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
