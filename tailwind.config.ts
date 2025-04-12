import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005792",
        secondary: "#0094f8",
        background: "#e6e6e6",
      },
      animation: {
        "spin-slower": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
