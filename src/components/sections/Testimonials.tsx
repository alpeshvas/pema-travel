import RevealOnScroll from "@/components/ui/RevealOnScroll";

const testimonials = [
  {
    quote:
      "Pema made our Bhutan trip truly unforgettable. His deep knowledge of the culture, the hidden trails, and local life gave us experiences no guidebook could. From Tiger\u2019s Nest at sunrise to sharing butter tea in a remote farmhouse \u2014 every moment felt genuine and personal.",
    name: "Alpesh",
    location: "Bangalore, India",
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
        <div className="flex justify-center max-w-2xl mx-auto mt-12">
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
