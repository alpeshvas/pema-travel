import RevealOnScroll from "@/components/ui/RevealOnScroll";

const stats = [
  { number: "72%", label: "Forest Coverage" },
  { number: "20", label: "Dzongkhags" },
  { number: "7,570", label: "Metres Highest Peak" },
  { number: "Carbon", label: "Negative Country" },
];

export default function Intro() {
  return (
    <section className="py-24 px-6 md:px-10 bg-cream text-center relative overflow-hidden">
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] text-gold opacity-[0.06] select-none">☸</span>

      <RevealOnScroll>
        <p className="section-label">འབྲུག་ཡུལ — Druk Yul</p>
        <h2 className="section-title">The Last Shangri-La</h2>
        <p className="section-desc mx-auto mb-12 max-w-2xl">
          Nestled high in the Eastern Himalayas, Bhutan is a kingdom where ancient traditions breathe alongside untouched forests, where dzongs stand sentinel over misty valleys, and where happiness is measured not in wealth, but in well-being.
        </p>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="p-7 border border-crimson/15 bg-white/60 hover:-translate-y-1 transition-transform">
              <div className="font-display text-5xl text-crimson font-bold leading-none">{s.number}</div>
              <div className="font-heading text-brown text-sm tracking-wider mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
