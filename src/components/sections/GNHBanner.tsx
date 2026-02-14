import Link from "next/link";

export default function GNHBanner() {
  return (
    <div className="px-6 md:px-10 py-4">
      <div className="bg-gradient-to-br from-crimson via-[#6a1515] to-crimson py-20 px-6 md:px-10 text-center relative overflow-hidden rounded-2xl max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(212,168,67,0.12),transparent_60%)]" />
        <div className="relative z-10">
          <h2 className="font-display text-cream mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Gross National Happiness
          </h2>
          <p className="text-cream/70 text-lg italic max-w-2xl mx-auto leading-relaxed mb-8">
            In Bhutan, progress is measured not by GDP, but by the happiness and well-being of its people. Travel here and discover a nation that has chosen a different path — one of balance, sustainability, and joy.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-9 py-4 border-2 border-gold text-gold font-heading text-sm tracking-widest uppercase rounded-full hover:bg-gold hover:text-dark transition-all"
          >
            Plan Your Visit →
          </Link>
        </div>
      </div>
    </div>
  );
}
