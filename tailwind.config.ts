import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        hank: ["var(--hank-grotesk)"],
        "red-hat-text": ["var(--red-hat-text)"],
        manrope: ["var(--manrope)"],
        outfit: ["var(--outfit)"],
        rubik: ["var(--rubik)"],
        firacode: ["var(--firacode)"],
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
        "light-gray": "hsl(212, 45%, 89%)",
        "qr-grayish-blue": "hsl(220, 15%, 55%)",
        "qr-dark-blue": "hsl(218, 44%, 22%)",
        "very-dark-gray": "hsl(0, 0%, 17%)",
        "dark-gray": "hsl(0, 0%, 59%)",
        "scissors-gradient-from": "hsl(39, 89%, 49%)",
        "scissors-gradient-to": "hsl(40, 84%, 53%)",
        "rock-gradient-from": "hsl(349, 71%, 52%)",
        "rock-gradient-to": "hsl(349, 70%, 56%)",
        "paper-gradient-from": "hsl(230, 89%, 62%)",
        "paper-gradient-to": "hsl(230, 89%, 65%)",
      },
      boxShadow: {
        "neon-spread": `0 0 0.75rem 1rem rgba(82, 255, 168, 0.25)`,
      },
    },
  },
  plugins: [],
};
export default config;
