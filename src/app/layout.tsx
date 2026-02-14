import type { Metadata } from "next";
import { Cormorant_Garamond, Philosopher, Noto_Serif } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BhutanBorder, BhutanBorderThin } from "@/components/ui/BhutanBorder";
import { siteConfig } from "@/lib/config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Bhutan travel",
    "Bhutan trekking",
    "Tiger's Nest",
    "Pema Wangchuk",
    "Bhutan guide",
    "Bhutan tours",
    "Himalayan trek",
    "Gross National Happiness",
    "Paro Taktsang",
    "Punakha Dzong",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Bhutan — Land of the Thunder Dragon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=1200&h=630&fit=crop&q=80"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${philosopher.variable} ${notoSerif.variable}`}>
      <body>
        <BhutanBorder />
        <Navbar />
        <main>{children}</main>
        <BhutanBorderThin />
        <Footer />
        <BhutanBorder />
      </body>
    </html>
  );
}
