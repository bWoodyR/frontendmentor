import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        hank: ["var(--hank-grotesk)"],
        "red-hat-text": ["var(--red-hat-text)"],
        manrope: ["var(--manrope)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-red": "#c73a0f",
        "dark-green": "#1ea475",
        rose50: "#fcf9f7",
        rose100: "#f4edeb",
        rose300: "#c9aea6",
        rose400: "#ad8985",
        rose500: "#87635a",
        rose900: "#260f08",
        "light-cyan": "hsl(193, 38%, 86%)",
        "neon-green": "hsl(150, 100%, 66%)",
        "grayish-blue": "hsl(217, 19%, 38%)",
        "dark-grayish-blue": "hsl(217, 19%, 24%)",
        "dark-blue": "hsl(218, 23%, 16%)",
      },
      boxShadow: {
        "neon-spread": `0 0 0.75rem 1rem rgba(82, 255, 168, 0.25)`,
      },
    },
  },
  plugins: [],
};
export default config;
