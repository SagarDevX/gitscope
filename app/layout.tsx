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
  metadataBase: new URL("https://gitscope-x.vercel.app/"),

  title: {
    default: "GitScope - Explore GitHub Developers",
    template: "%s | GitScope",
  },

  description:
    "Explore GitHub developers, repositories, programming languages, and activity insights with GitScope.",

  keywords: [
    "GitHub developer explorer",
    "GitHub developer search",
    "GitHub profile analyzer",
    "GitHub repository explorer",
    "GitHub insights",
    "developer insights",
    "GitHub analytics",
    "GitHub developers",
  ],

  authors: [{ name: "Sagar" }],

  creator: "Sagar",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "GitScope - Explore GitHub Developers",
    description:
      "Explore GitHub developers, repositories, programming languages, and activity insights.",
    url: "https://gitscope-x.vercel.app/",
    siteName: "GitScope",
    images: [
      {
        url: "/GitScope.png",
        width: 1200,
        height: 630,
        alt: "GitScope — Explore GitHub Developers",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GitScope - Explore GitHub Developers",
    description:
      "Explore GitHub developers, repositories, programming languages, and activity insights.",
    images: ["/GitScope.png"],
  },

  icons: {
    icon: "/favicon.ico",
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
