import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { BhutanBorderThin } from "@/components/ui/BhutanBorder";

export const metadata: Metadata = {
  title: "Tours",
  description: "Explore our curated Bhutan tours — from cultural journeys and Himalayan treks to bird watching expeditions and family adventures.",
};

const tours = [
  {
    title: "Cultural Immersion",
    duration: "7 Days",
    difficulty: "Easy",
    desc: "Explore Bhutan's living heritage — from the grand dzongs of Thimphu and Punakha to ancient temples, vibrant festivals, and traditional farmhouses.",
    highlights: ["Punakha Dzong", "Thimphu Tsechu", "Farmhouse Stay", "Traditional Cooking Class"],
    gradient: "from-crimson to-[#6a1515]",
  },
  {
    title: "Tiger's Nest Trek",
    duration: "5 Days",
    difficulty: "Moderate",
    desc: "A focused journey centred on the iconic hike to Paro Taktsang, with cultural exploration of the Paro Valley and surrounding monasteries.",
    highlights: ["Tiger's Nest Monastery", "Paro Rinpung Dzong", "National Museum", "Chele La Pass"],
    gradient: "from-forest to-[#1a3520]",
  },
  {
    title: "Snowman Trek",
    duration: "25 Days",
    difficulty: "Challenging",
    desc: "One of the world's most difficult and rewarding treks, crossing remote passes above 5,000m through Bhutan's pristine wilderness.",
    highlights: ["Laya Village", "Lunana Region", "Glacial Lakes", "Alpine Meadows"],
    gradient: "from-[#4a6a8a] to-[#2a4a6a]",
  },
  {
    title: "Bird Watching Expedition",
    duration: "10 Days",
    difficulty: "Easy–Moderate",
    desc: "Bhutan hosts over 700 bird species. Journey from subtropical forests to alpine heights spotting rare species including the black-necked crane.",
    highlights: ["Phobjikha Valley", "Royal Manas Park", "Thrumshingla Pass", "Black-Necked Cranes"],
    gradient: "from-[#5a7a3a] to-[#3a5a1a]",
  },
  {
    title: "Family Adventure",
    duration: "8 Days",
    difficulty: "Easy",
    desc: "A family-friendly journey combining gentle hikes, cultural experiences, and hands-on activities perfect for travellers of all ages.",
    highlights: ["Archery Lesson", "Paper Making", "Gentle Nature Walks", "Hot Stone Bath"],
    gradient: "from-saffron to-[#c07a20]",
  },
  {
    title: "Cycling the Dragon's Trail",
    duration: "12 Days",
    difficulty: "Challenging",
    desc: "Pedal through Bhutan's dramatic landscapes — from Paro to Bumthang — crossing high passes and descending into lush valleys.",
    highlights: ["Dochula Pass", "Gangtey Valley", "Trongsa Dzong", "Bumthang Temples"],
    gradient: "from-[#8a5a3a] to-[#6a3a1a]",
  },
];

export default function ToursPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-10 bg-gradient-to-br from-dark via-[#16213e] to-dark text-center relative overflow-hidden">
        <div className="relative z-10">
          <p className="font-heading text-gold text-sm tracking-[6px] uppercase mb-4">Journeys</p>
          <h1 className="font-display text-cream leading-tight mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Curated <em className="text-gold italic">Tours</em>
          </h1>
          <p className="text-cream/60 text-lg italic max-w-2xl mx-auto">
            Each journey is crafted by Pema to offer an authentic, immersive experience of the kingdom.
          </p>
        </div>
      </section>

      <BhutanBorderThin />

      {/* Tours grid */}
      <section className="py-24 px-6 md:px-10 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {tours.map((tour) => (
            <RevealOnScroll key={tour.title}>
              <div className="bg-white border border-crimson/[0.08] overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all group">
                <div className={`h-48 bg-gradient-to-br ${tour.gradient} flex items-center justify-center relative`}>
                  <h3 className="font-display text-cream text-2xl text-center px-6">{tour.title}</h3>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="px-2.5 py-1 bg-black/20 text-cream text-xs font-heading tracking-wide">{tour.duration}</span>
                    <span className="px-2.5 py-1 bg-black/20 text-cream text-xs font-heading tracking-wide">{tour.difficulty}</span>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-brown/70 text-sm leading-relaxed mb-5">{tour.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tour.highlights.map((h) => (
                      <span key={h} className="px-2.5 py-1 border border-gold/40 text-brown/60 text-xs font-heading">{h}</span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-crimson font-heading text-sm tracking-wider uppercase hover:text-gold transition-colors"
                  >
                    Enquire Now →
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
