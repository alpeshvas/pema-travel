"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const flagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (flagsRef.current && flagsRef.current.children.length === 0) {
      const colors = ["#E63946", "#457B9D", "#F1FAEE", "#2A9D8F", "#E9C46A"];
      for (let i = 0; i < 30; i++) {
        const flag = document.createElement("div");
        Object.assign(flag.style, {
          position: "absolute",
          top: "2px",
          left: `${i * 3.4}%`,
          width: "24px",
          height: "32px",
          backgroundColor: colors[i % 5],
          opacity: "0.35",
          clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
          animation: `flagWave 3s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
        });
        flagsRef.current.appendChild(flag);
      }
    }
  }, []);

  return (
    <section className="h-screen min-h-[700px] relative flex items-center justify-center overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src="https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=1920&q=80&fit=crop"
          alt="Tiger's Nest Monastery perched on a cliff in Bhutan"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/80" />

      {/* Atmospheric vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(26,18,9,0.6)_100%)]" />

      {/* Prayer flags across top */}
      <div ref={flagsRef} className="absolute top-[12%] left-[5%] right-[5%] h-[2px] bg-white/10 -rotate-1 z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center px-5">
        <p
          className="font-heading text-gold-light text-base tracking-[6px] uppercase mb-5 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          Welcome to the Kingdom of
        </p>
        <h1
          className="font-display text-cream leading-tight mb-4 text-shadow-heavy opacity-0 animate-fade-up"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)", animationDelay: "0.8s" }}
        >
          Land of the
          <br />
          <em className="text-gold italic">Thunder Dragon</em>
        </h1>
        <p
          className="font-body text-cream/80 text-lg italic mb-10 opacity-0 animate-fade-up text-shadow-hero"
          style={{ animationDelay: "1.1s" }}
        >
          Where Gross National Happiness reigns supreme
        </p>
        <Link
          href="#destinations"
          className="inline-flex items-center gap-3 px-10 py-4 bg-crimson text-cream font-heading text-sm tracking-widest uppercase border-2 border-gold hover:bg-gold hover:text-dark transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,168,67,0.3)] opacity-0 animate-fade-up"
          style={{ animationDelay: "1.4s" }}
        >
          Begin Your Journey →
        </Link>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gold-light font-heading text-xs tracking-[3px] uppercase opacity-0 animate-fade-up"
        style={{ animationDelay: "1.7s" }}
      >
        <span>Explore</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent animate-scroll-pulse" />
      </div>
    </section>
  );
}
