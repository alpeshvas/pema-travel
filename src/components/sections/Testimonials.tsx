import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-10 bg-warm-white text-center">
      <RevealOnScroll>
        <p className="section-label">Traveller Stories</p>
        <h2 className="section-title">Voices from the Kingdom</h2>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="max-w-2xl mx-auto mt-12">
          <div className="p-10 bg-white border border-crimson/10 text-left relative">
            <span className="absolute top-2 left-5 font-display text-7xl text-gold/30 leading-none select-none">&ldquo;</span>
            <p className="italic text-brown/70 leading-relaxed mb-5 relative z-10 text-lg">
              Pema made our Bhutan trip truly unforgettable. His deep knowledge of the culture, the hidden trails, and local life gave us experiences no guidebook could. From Tiger&apos;s Nest at sunrise to sharing butter tea in a remote farmhouse — every moment felt genuine and personal.
            </p>
            <p className="font-heading text-crimson font-bold">Alpesh</p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
