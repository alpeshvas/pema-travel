import RevealOnScroll from "@/components/ui/RevealOnScroll";

const items = [
  { icon: "📋", title: "Sustainable Development Fee", text: "All international visitors pay a daily Sustainable Development Fee (SDF) of USD $100 per person per day, which supports Bhutan's free healthcare, education, and environmental conservation." },
  { icon: "✈️", title: "Getting There", text: "Paro International Airport is Bhutan's sole international airport, with flights from Delhi, Bangkok, Kathmandu, and other regional cities. The landing through the Himalayan mountains is unforgettable." },
  { icon: "🗓️", title: "Best Time to Visit", text: "Spring (March–May) brings rhododendron blooms and clear skies. Autumn (September–November) offers golden landscapes and major festivals. Both seasons have ideal trekking weather." },
  { icon: "🧳", title: "What to Pack", text: "Layers are essential — Bhutan's altitude means cool mornings and warm afternoons. Bring comfortable walking shoes, modest clothing for temple visits, and a good camera for those unforgettable views." },
];

export default function PracticalInfo() {
  return (
    <section className="py-24 px-6 md:px-10 bg-cream">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <p className="section-label">Essential Information</p>
          <h2 className="section-title">Planning Your Journey</h2>
          <p className="section-desc mb-12">Everything you need to know before embarking on your Bhutanese adventure.</p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {items.map((item) => (
              <div key={item.title} className="p-9 bg-white rounded-2xl border border-crimson/[0.08] hover:border-gold hover:-translate-y-0.5 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-2xl mb-4">{item.icon}</div>
                <h3 className="font-heading text-crimson text-lg mb-2">{item.title}</h3>
                <p className="text-brown/70 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
