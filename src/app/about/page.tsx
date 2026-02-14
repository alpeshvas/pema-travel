import type { Metadata } from "next";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { BhutanBorderThin } from "@/components/ui/BhutanBorder";

export const metadata: Metadata = {
  title: "About Bhutan",
  description: "Discover the Kingdom of Bhutan — the Last Shangri-La. Learn about its history, culture, and the philosophy of Gross National Happiness.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="pt-32 pb-20 px-6 md:px-10 bg-gradient-to-br from-dark via-[#1a2a1a] to-dark text-center relative overflow-hidden">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] text-gold/[0.04] select-none">☸</span>
        <div className="relative z-10">
          <p className="font-heading text-gold text-sm tracking-[6px] uppercase mb-4">About</p>
          <h1 className="font-display text-cream leading-tight mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            The Kingdom of <em className="text-gold italic">Bhutan</em>
          </h1>
          <p className="text-cream/60 text-lg italic max-w-2xl mx-auto">
            A land where the thunder dragon soars above snow-capped peaks, and an ancient culture thrives in harmony with nature.
          </p>
        </div>
      </section>

      <BhutanBorderThin />

      {/* Content */}
      <section className="py-24 px-6 md:px-10 bg-cream">
        <div className="max-w-3xl mx-auto space-y-16">
          <RevealOnScroll>
            <h2 className="font-display text-dark text-3xl mb-4">A Brief History</h2>
            <p className="text-brown/70 leading-relaxed text-lg">
              Known as Druk Yul — the Land of the Thunder Dragon — Bhutan has maintained its sovereignty and distinct cultural identity for over a thousand years. Nestled between the giants of India and China, this small Himalayan kingdom has never been colonised, preserving traditions that stretch back to the 7th century when Buddhism first arrived on its shores.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 className="font-display text-dark text-3xl mb-4">Gross National Happiness</h2>
            <p className="text-brown/70 leading-relaxed text-lg">
              In 1972, the Fourth King of Bhutan declared that &ldquo;Gross National Happiness is more important than Gross Domestic Product.&rdquo; This visionary philosophy guides Bhutan&apos;s development, measuring prosperity through the well-being of its citizens, preservation of culture, conservation of the environment, and good governance.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 className="font-display text-dark text-3xl mb-4">Environmental Stewardship</h2>
            <p className="text-brown/70 leading-relaxed text-lg">
              Bhutan is the world&apos;s only carbon-negative country. Its constitution mandates that at least 60% of the country remains under forest cover for all time — currently over 72% is forested. From the subtropical plains to alpine glaciers, this biodiversity hotspot is home to snow leopards, black-necked cranes, and the rare blue poppy.
            </p>
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 className="font-display text-dark text-3xl mb-4">High Value, Low Volume Tourism</h2>
            <p className="text-brown/70 leading-relaxed text-lg">
              Bhutan&apos;s approach to tourism is as unique as the kingdom itself. Through the Sustainable Development Fee and carefully managed tourism, Bhutan ensures that visitors experience the country authentically while protecting its environment and cultural heritage for future generations.
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
