import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import websiteData from "@/data/websiteData.json";

const commonJson = websiteData.common;
const bannerJson =
  websiteData.categories.FinanceBanking.sections.Banner.variants.VaultBanner1;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${commonJson.siteNamePrimary}${commonJson.siteNameAccent} | ${commonJson.tagline}`,
  description: bannerJson.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="flex min-h-screen flex-col bg-white font-[family-name:var(--font-inter)] text-[#072242] antialiased">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}