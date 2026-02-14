import Link from "next/link";

export default function GNHBanner() {
  return (
    <div className="bg-gradient-to-br from-crimson via-[#6a1515] to-crimson py-20 px-6 md:px-10 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-100" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A843' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      <div className="relative z-10">
        <h2 className="font-display text-cream mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
          Gross National Happiness
        </h2>
        <p className="text-cream/70 text-lg italic max-w-2xl mx-auto leading-relaxed mb-8">
          In Bhutan, progress is measured not by GDP, but by the happiness and well-being of its people. Travel here and discover a nation that has chosen a different path — one of balance, sustainability, and joy.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-9 py-4 border-2 border-gold text-gold font-heading text-sm tracking-widest uppercase hover:bg-gold hover:text-dark transition-all"
        >
          Plan Your Visit →
        </Link>
      </div>
    </div>
  );
}
