import type { Metadata } from "next";
import { hank, inter, manrope, redHatText } from "./fonts";
import "./globals.css";

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
      <body className={`${inter.className} ${hank.variable} ${redHatText.variable} ${manrope.className}`}>{children}</body>
    </html>
  );
}
