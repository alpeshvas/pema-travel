import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { BhutanBorderThin } from "@/components/ui/BhutanBorder";

export const metadata: Metadata = {
  title: "Blog",
  description: "Stories, tips, and insights from Bhutan — your guide to the Land of the Thunder Dragon.",
};

const posts = [
  {
    title: "10 Things to Know Before Visiting Bhutan",
    excerpt: "From the Sustainable Development Fee to the dress code for temples, here's everything first-time visitors need to prepare for their Bhutanese adventure.",
    date: "February 10, 2026",
    category: "Travel Tips",
    gradient: "from-crimson to-[#6a1515]",
  },
  {
    title: "The Sacred Trail to Tiger's Nest",
    excerpt: "A step-by-step account of the pilgrimage hike to Paro Taktsang — what to expect, when to go, and why it will stay with you forever.",
    date: "January 25, 2026",
    category: "Trekking",
    gradient: "from-forest to-[#1a3520]",
  },
  {
    title: "Bhutan's Tshechu Festivals: A Complete Guide",
    excerpt: "Understanding the masked dances, spiritual significance, and vibrant celebrations of Bhutan's most important cultural events.",
    date: "January 12, 2026",
    category: "Culture",
    gradient: "from-[#4a6a8a] to-[#2a4a6a]",
  },
  {
    title: "Birding in Bhutan: Where to Spot the Black-Necked Crane",
    excerpt: "The endangered black-necked crane winters in Phobjikha Valley. Here's how to plan your birding trip to see these magnificent birds.",
    date: "December 28, 2025",
    category: "Nature",
    gradient: "from-[#5a7a3a] to-[#3a5a1a]",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-10 bg-gradient-to-br from-dark via-[#2a1a0e] to-dark text-center">
        <p className="font-heading text-gold text-sm tracking-[6px] uppercase mb-4">Stories</p>
        <h1 className="font-display text-cream leading-tight mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
          Travel <em className="text-gold italic">Journal</em>
        </h1>
        <p className="text-cream/60 text-lg italic max-w-2xl mx-auto">
          Insights, stories, and guides from the Land of the Thunder Dragon.
        </p>
      </section>

      <BhutanBorderThin />

      {/* Posts */}
      <section className="py-24 px-6 md:px-10 bg-cream">
        <div className="max-w-4xl mx-auto space-y-8">
          {posts.map((post) => (
            <RevealOnScroll key={post.title}>
              <article className="bg-white border border-crimson/[0.08] overflow-hidden hover:-translate-y-0.5 hover:shadow-lg transition-all group flex flex-col md:flex-row">
                <div className={`w-full md:w-56 h-40 md:h-auto flex-shrink-0 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                  <span className="font-heading text-cream/40 text-xs tracking-widest uppercase">{post.category}</span>
                </div>
                <div className="p-7 flex-1">
                  <p className="text-brown/40 text-xs font-heading tracking-wider mb-2">{post.date}</p>
                  <h2 className="font-display text-dark text-xl mb-2 group-hover:text-crimson transition-colors">{post.title}</h2>
                  <p className="text-brown/60 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link href="/blog" className="text-crimson font-heading text-xs tracking-widest uppercase hover:text-gold transition-colors">
                    Read More →
                  </Link>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
