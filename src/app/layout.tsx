import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BhutanBorder, BhutanBorderThin } from "@/components/ui/BhutanBorder";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
