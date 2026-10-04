import type { Metadata } from "next";
import { Wendy_One, Inter, Hedvig_Letters_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const wendy = Wendy_One({
  variable: "--font-wendy_one",
  subsets: ["latin"],
  weight: "400",
});
const hedvig = Hedvig_Letters_Serif({
  variable: "--font-hedvig_letters_serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "GitScope",
  description: "Explore GitHub developers, understand their work, and discover meaningful insights.",
  openGraph: {
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${wendy.variable} ${hedvig.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
