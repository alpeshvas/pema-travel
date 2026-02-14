import RevealOnScroll from "@/components/ui/RevealOnScroll";

const experiences = [
  { icon: "🎭", title: "Festival Celebrations", text: "Witness the vibrant Tshechu festivals where masked dancers perform sacred dances, accompanied by the deep resonance of horns and drums echoing through ancient courtyards." },
  { icon: "🏔️", title: "Himalayan Treks", text: "Trek through pristine forests of blue pine and rhododendron, from the legendary Snowman Trek to gentle walks through terraced rice paddies and alpine meadows." },
  { icon: "🧘", title: "Meditation Retreats", text: "Find stillness in remote monasteries where monks have meditated for centuries. Learn mindfulness practices rooted in Vajrayana Buddhist traditions." },
  { icon: "♨️", title: "Hot Stone Baths", text: "Immerse yourself in a traditional Bhutanese hot stone bath — river stones heated over fire and placed in herb-infused water, a centuries-old healing ritual." },
  { icon: "🍲", title: "Culinary Heritage", text: "Savour Ema Datshi — Bhutan's beloved chilli and cheese dish — alongside red rice, momos, and butter tea prepared in farmhouse kitchens with generations-old recipes." },
  { icon: "🏹", title: "Archery Traditions", text: "Join in Bhutan's beloved national sport. Watch local teams compete with traditional bamboo bows, celebrating each hit with spirited songs and dances." },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 px-6 md:px-10 bg-dark text-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(139,26,26,0.15),transparent_60%),radial-gradient(ellipse_at_80%_80%,rgba(212,168,67,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <RevealOnScroll>
          <p className="section-label !text-gold">Immersive Journeys</p>
          <h2 className="section-title !text-cream">Experiences That Transform</h2>
          <p className="section-desc !text-cream/60 mb-14">
            Bhutan offers not mere tourism but transformative encounters — with nature, with culture, and with the self.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="p-9 rounded-2xl border border-gold/20 bg-white/[0.03] relative overflow-hidden group hover:bg-gold/[0.06] hover:-translate-y-1 hover:border-gold/40 transition-all"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-400 rounded-r" />
                <span className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center text-3xl mb-5">{exp.icon}</span>
                <h3 className="font-display text-gold-light text-xl mb-3">{exp.title}</h3>
                <p className="text-cream/55 leading-relaxed text-sm">{exp.text}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
