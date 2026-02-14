import RevealOnScroll from "@/components/ui/RevealOnScroll";

const destinations = [
  {
    tag: "Iconic",
    name: "Tiger's Nest Monastery",
    desc: "Paro Taktsang — perched impossibly on a 3,120m cliff face, this sacred monastery is Bhutan's most iconic landmark and a pilgrimage of profound spiritual significance.",
    gradient: "from-[#2D5A3D] via-[#4a7a5a] to-[#3a6a4a]",
    icon: "⛩",
    span: true,
  },
  {
    tag: "Valley",
    name: "Punakha Valley",
    desc: "Where the Mo Chhu and Pho Chhu rivers converge at the majestic Punakha Dzong.",
    gradient: "from-[#4a6a8a] via-[#6a8aaa] to-[#3a5a7a]",
    icon: "🏔",
  },
  {
    tag: "Heritage",
    name: "Bumthang Valley",
    desc: "The spiritual heartland of Bhutan, home to its oldest temples and sacred sites.",
    gradient: "from-[#8a6a4a] via-[#aa8a6a] to-[#6a4a2a]",
    icon: "🏯",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 px-6 md:px-10 bg-warm-white max-w-7xl mx-auto">
      <RevealOnScroll>
        <p className="section-label">Sacred Places</p>
        <h2 className="section-title">Where Ancient Spirits Dwell</h2>
        <p className="section-desc mb-14">
          From the cliffside monasteries to the pristine valleys, every corner of Bhutan tells a story written over centuries of devotion and wonder.
        </p>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {destinations.map((d) => (
            <div
              key={d.name}
              className={`relative overflow-hidden cursor-pointer group ${d.span ? "lg:row-span-2" : ""}`}
              style={{ aspectRatio: d.span ? undefined : "4/3" }}
            >
              <div className={`w-full h-full min-h-[300px] ${d.span ? "min-h-[500px] lg:min-h-full" : ""} bg-gradient-to-br ${d.gradient} flex items-center justify-center`}>
                <span className="text-cream/15 text-8xl font-display select-none group-hover:scale-110 transition-transform duration-700">{d.icon}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dark/90 to-transparent">
                <span className="inline-block px-3 py-1 bg-crimson text-gold-light font-heading text-[0.7rem] tracking-widest uppercase mb-2">{d.tag}</span>
                <h3 className="font-display text-cream text-2xl mb-1">{d.name}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
