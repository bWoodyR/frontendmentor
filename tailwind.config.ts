import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        hank: ["var(--hank-grotesk)"],
        "red-hat-text": ["var(--red-hat-text)"],
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
      },
    },
  },
  plugins: [],
};
export default config;
