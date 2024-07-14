import { Hanken_Grotesk, Inter, Red_Hat_Text } from "next/font/google";


export const inter = Inter({ subsets: ["latin"] });

export const hank = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--hank-grotesk",
});

export const redHatText = Red_Hat_Text({
    subsets: ["latin"],
    display: "swap",
    variable: "--red-hat-text"
})