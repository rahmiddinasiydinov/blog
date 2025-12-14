import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "./components/Navbar";
import AudioPlayer from "./components/AudioPlayer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rakhmiddin Asiydinov | Personal Website",
  description: "Welcome to Rakhmiddin's personal portfolio - Software Developer, creative thinker, and problem solver.",
  keywords: ["Rakhmiddin", "Portfolio", "Developer", "Software Engineer"],
  openGraph: {
    title: "Rakhmiddin Asiydinov | Personal Website",
    description: "Welcome to Rakhmiddin's personal portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Navbar />
        <AudioPlayer />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
