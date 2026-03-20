import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#FFFFFF",
        ink: "#0F0F0F",
        tan: "#CD9D65",
        brown: "#613B0F",
        muted: "#7C7C7C",
        divider: "#E9E9E9",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-heading)", "sans-serif"],
        link: ["var(--font-link)", "sans-serif"],
      },
      borderRadius: { card: "30px" },
      maxWidth: { page: "1280px" },
    },
  },
  plugins: [],
};
export default config;
