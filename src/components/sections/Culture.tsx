import RevealOnScroll from "@/components/ui/RevealOnScroll";

const cultureItems = [
  { icon: "🎨", title: "Zorig Chusum", text: "The thirteen traditional arts and crafts of Bhutan, from thangka painting to intricate woodcarving, kept alive through dedicated schools of learning." },
  { icon: "👘", title: "National Dress", text: "The Gho for men and Kira for women — handwoven garments worn daily with pride, each pattern telling the story of its region." },
  { icon: "🏛️", title: "Dzong Architecture", text: "Massive fortress-monasteries built without nails, serving as both administrative centres and spiritual sanctuaries for centuries." },
];

export default function Culture() {
  return (
    <section id="culture" className="py-24 px-6 md:px-10 bg-cream">
      <RevealOnScroll>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Mandala visual */}
          <div className="relative aspect-[3/4] bg-gradient-to-br from-crimson to-[#6a1515] overflow-hidden">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] text-gold/20 select-none">༄</span>
            {[200, 280, 360].map((size, i) => (
              <div
                key={size}
                className="absolute top-1/2 left-1/2 border border-gold/30 rounded-full animate-mandala-spin"
                style={{
                  width: size,
                  height: size,
                  animationDuration: `${40 + i * 10}s`,
                  animationDirection: i === 1 ? "reverse" : "normal",
                }}
              />
            ))}
            <div className="absolute bottom-0 left-0 right-0 h-2" style={{ background: "repeating-linear-gradient(90deg, #D4A843 0px, #D4A843 10px, transparent 10px, transparent 20px)" }} />
          </div>

          {/* Text */}
          <div>
            <p className="section-label">Living Heritage</p>
            <h2 className="section-title">A Culture Preserved<br />Through Centuries</h2>
            <p className="section-desc mb-8">
              Bhutan&apos;s rich cultural tapestry is woven from centuries of Buddhist traditions, vibrant arts, and a deep reverence for nature that permeates every aspect of daily life.
            </p>
            <ul className="space-y-5">
              {cultureItems.map((item) => (
                <li key={item.title} className="flex gap-4 p-4 border-l-[3px] border-crimson bg-white/50">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-heading text-crimson mb-1">{item.title}</h4>
                    <p className="text-brown/70 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
