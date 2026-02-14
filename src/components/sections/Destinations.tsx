import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const destinations = [
  {
    tag: "Iconic",
    name: "Tiger\u2019s Nest Monastery",
    desc: "Paro Taktsang \u2014 perched impossibly on a 3,120m cliff face, this sacred monastery is Bhutan\u2019s most iconic landmark and a pilgrimage of profound spiritual significance.",
    image: "https://images.unsplash.com/photo-1578556881786-851d4b79cb73?w=800&h=1000&fit=crop&q=80",
    span: true,
  },
  {
    tag: "Valley",
    name: "Punakha Valley",
    desc: "Where the Mo Chhu and Pho Chhu rivers meet at the stunning Punakha Dzong \u2014 Bhutan\u2019s most beautiful fortress and the winter seat of the monastic body.",
    image: "https://images.unsplash.com/photo-1597658333270-8c0d8f0eb845?w=800&h=600&fit=crop&q=80",
  },
  {
    tag: "Heritage",
    name: "Bumthang Valley",
    desc: "The spiritual heartland of Bhutan, home to the ancient Jambay Lhakhang temple, sacred burning lakes, and centuries-old monasteries set among pine-forested hills.",
    image: "https://images.unsplash.com/photo-1608659377506-3b4fec4f7634?w=800&h=600&fit=crop&q=80",
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
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${d.span ? "lg:row-span-2" : ""}`}
              style={{ aspectRatio: d.span ? undefined : "4/3" }}
            >
              <div className={`w-full h-full ${d.span ? "min-h-[500px] lg:min-h-full" : "min-h-[300px]"} relative`}>
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={d.span ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 50vw"}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent">
                <span className="inline-block px-3 py-1 bg-crimson text-gold-light font-heading text-[0.7rem] tracking-widest uppercase mb-2 rounded-full">
                  {d.tag}
                </span>
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
