import type { Metadata } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const hank = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--hank-grotesk",
});

export const metadata: Metadata = {
  title: "Frontened Mentor Challanges",
  description: "Frontend Mentor challanges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${hank.variable}`}>{children}</body>
    </html>
  );
}
