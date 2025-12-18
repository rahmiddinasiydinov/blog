import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from '@next/third-parties/google';
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
  metadataBase: new URL("https://rakhmiddin.uz"),
  title: {
    default: "Rakhmiddin Asiydinov | Personal Website",
    template: "%s | Rakhmiddin Asiydinov",
  },
  description: "Welcome to Rakhmiddin's personal portfolio - Software Developer, creative thinker, and problem solver.",
  keywords: ["Rakhmiddin", "Rahmiddin", "Rahmiddin Asiydinov", "Asiydinov", "Portfolio", "Fullstack Developer", "Software Engineer", "Web Development", "React", "Next.js", "Uzbekistan", "TezYoz", "Examy.me", "Sandiq", "Frontend Developer", "Backend Developer", "Uzbekistan Developer"],
  authors: [{ name: "Rakhmiddin Asiydinov" }],
  creator: "Rakhmiddin Asiydinov",
  openGraph: {
    title: "Rakhmiddin Asiydinov | Personal Website",
    description: "Welcome to Rakhmiddin's personal portfolio - Software Developer, creative thinker, and problem solver.",
    url: "https://rakhmiddin.uz",
    siteName: "Rakhmiddin Asiydinov",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakhmiddin Asiydinov | Personal Website",
    description: "Welcome to Rakhmiddin's personal portfolio",
    creator: "@rakhmiddin", // Assuming handle or generic
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </body>
    </html>
  );
}
