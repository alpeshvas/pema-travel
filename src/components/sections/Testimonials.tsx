import RevealOnScroll from "@/components/ui/RevealOnScroll";

const testimonials = [
  {
    quote:
      "Pema made our Bhutan trip truly unforgettable. His deep knowledge of the culture, the hidden trails, and local life gave us experiences no guidebook could. From Tiger\u2019s Nest at sunrise to sharing butter tea in a remote farmhouse \u2014 every moment felt genuine and personal.",
    name: "Alpesh",
    location: "London, UK",
    stars: 5,
  },
  {
    quote:
      "We\u2019ve travelled extensively through Asia, but Bhutan with Pema was something else entirely. He arranged a private blessing ceremony at a monastery that left us speechless. His calm, thoughtful approach made every day feel effortless.",
    name: "Sarah & James",
    location: "Melbourne, Australia",
    stars: 5,
  },
  {
    quote:
      "As a solo traveller, I was nervous about visiting Bhutan alone. Pema instantly put me at ease. He tailored the whole itinerary to my pace \u2014 long hikes, quiet temples, and incredible home-cooked meals. I left feeling like I\u2019d found a second home.",
    name: "Mika",
    location: "Tokyo, Japan",
    stars: 5,
  },
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
            <div
              key={t.name}
              className="p-9 bg-white rounded-2xl border border-crimson/10 text-left relative shadow-sm hover:shadow-lg transition-shadow"
            >
              <span className="absolute top-3 left-6 font-display text-6xl text-gold/25 leading-none select-none">
                &ldquo;
              </span>
              <div className="flex gap-0.5 mb-4 relative z-10">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-gold text-sm">&#9733;</span>
                ))}
              </div>
              <p className="italic text-brown/70 leading-relaxed mb-6 relative z-10 text-sm">
                {t.quote}
              </p>
              <div>
                <p className="font-heading text-crimson font-bold text-sm">{t.name}</p>
                <p className="text-brown/40 text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
