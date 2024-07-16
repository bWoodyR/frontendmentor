import { Fira_Code, Hanken_Grotesk, Inter, Manrope, Outfit, Red_Hat_Text, Rubik } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const hank = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--hank-grotesk",
});

export const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--red-hat-text",
});

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--manrope",
});

export const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--outfit",
});

export const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--rubik",
});

export const firecoda = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--firacode",
});