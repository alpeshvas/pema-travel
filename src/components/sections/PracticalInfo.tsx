import RevealOnScroll from "@/components/ui/RevealOnScroll";

const items = [
  { icon: "📋", title: "Sustainable Development Fee", text: "International visitors pay a daily SDF of USD $100 per person per day, supporting Bhutan's free healthcare, education, and conservation. Regional visitors from India, Bangladesh, and the Maldives pay a reduced fee of \u20B91,200 per day." },
  { icon: "✈️", title: "Getting There", text: "Fly into Paro International Airport with Drukair or Bhutan Airlines from Delhi, Bangkok, Kathmandu, Singapore, and other regional cities — the Himalayan approach is unforgettable. Indian citizens can also enter by road through Phuentsholing, Gelephu, or Samdrup Jongkhar." },
  { icon: "🗓️", title: "Best Time to Visit", text: "Spring (March\u2013May) brings rhododendron blooms and clear mountain views. Autumn (September\u2013November) offers golden landscapes and major Tshechu festivals. Winter (December\u2013February) is quieter with fewer visitors and pleasant lower valley temperatures." },
  { icon: "🧳", title: "What to Pack", text: "Layers are essential \u2014 Bhutan's altitude means cool mornings and warm afternoons. Bring sturdy walking shoes for monastery hikes, modest clothing covering knees and shoulders for temple visits, and rain gear if visiting during monsoon months." },
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
