import RevealOnScroll from "@/components/ui/RevealOnScroll";

const testimonials = [
  { quote: "Standing before Tiger's Nest as dawn broke through the clouds, I understood why they call Bhutan the last Shangri-La. It changed how I see the world.", author: "Sarah Chen", origin: "Vancouver, Canada" },
  { quote: "The Bhutanese people welcomed us into their homes with such warmth. We shared meals, stories, and laughter. I left with a second family in the Himalayas.", author: "Marco Rossi", origin: "Florence, Italy" },
  { quote: "Trekking through Bhutan's forests, hearing nothing but birdsong and prayer flags in the wind — it was the most profound silence I've ever known.", author: "Aiko Tanaka", origin: "Kyoto, Japan" },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-10 bg-warm-white text-center">
      <RevealOnScroll>
        <p className="section-label">Traveller Stories</p>
        <h2 className="section-title">Voices from the Kingdom</h2>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto mt-12">
          {testimonials.map((t) => (
            <div key={t.author} className="p-9 bg-white border border-crimson/10 text-left relative">
              <span className="absolute top-2 left-5 font-display text-7xl text-gold/30 leading-none select-none">&ldquo;</span>
              <p className="italic text-brown/70 leading-relaxed mb-5 relative z-10">{t.quote}</p>
              <p className="font-heading text-crimson font-bold">{t.author}</p>
              <p className="text-brown/50 text-sm">{t.origin}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
