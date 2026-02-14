import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const cultureItems = [
  {
    icon: "\uD83C\uDFA8",
    title: "Zorig Chusum",
    text: "The thirteen traditional arts and crafts of Bhutan, from thangka painting to intricate woodcarving, kept alive through dedicated schools of learning.",
  },
  {
    icon: "\uD83D\uDC58",
    title: "National Dress",
    text: "The Gho for men and Kira for women \u2014 handwoven garments worn daily with pride, each pattern telling the story of its region.",
  },
  {
    icon: "\uD83C\uDFDB\uFE0F",
    title: "Dzong Architecture",
    text: "Massive fortress-monasteries built without nails, serving as both administrative centres and spiritual sanctuaries for centuries.",
  },
];

export default function Culture() {
  return (
    <section id="culture" className="py-24 px-6 md:px-10 bg-cream">
      <RevealOnScroll>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1605904583059-7880dad25595?w=700&h=940&fit=crop&q=80"
              alt="Buddhist monks walking through a traditional Bhutanese dzong"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-crimson/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-2" style={{ background: "repeating-linear-gradient(90deg, #D4A843 0px, #D4A843 10px, transparent 10px, transparent 20px)" }} />
          </div>

          {/* Text */}
          <div>
            <p className="section-label">Living Heritage</p>
            <h2 className="section-title">
              A Culture Preserved
              <br />
              Through Centuries
            </h2>
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
