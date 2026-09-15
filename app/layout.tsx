import type { Metadata } from "next";
import { Wendy_One, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const wendy = Wendy_One({
  variable: "--font-wendy_one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "GitScope",
  description: "Explore GitHub developers, understand their work, and discover meaningful insights.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${wendy.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <Navbar/>
        {children}</body>
    </html>
  );
}
