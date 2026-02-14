"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const starsRef = useRef<HTMLDivElement>(null);
  const flagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stars
    if (starsRef.current) {
      for (let i = 0; i < 80; i++) {
        const star = document.createElement("div");
        const size = Math.random() * 2 + 1;
        Object.assign(star.style, {
          position: "absolute",
          width: `${size}px`,
          height: `${size}px`,
          background: "white",
          borderRadius: "50%",
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `twinkle ${Math.random() * 2 + 2}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 3}s`,
        });
        starsRef.current.appendChild(star);
      }
    }

    // Prayer flags
    if (flagsRef.current) {
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
          opacity: "0.4",
          clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
          animation: `flagWave 3s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
        });
        flagsRef.current.appendChild(flag);
      }
    }
  }, []);

  return (
    <section className="h-screen min-h-[700px] relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#0f3460] to-[#1a1a2e]">
      {/* Stars */}
      <div ref={starsRef} className="absolute top-0 left-0 right-0 h-[40%]" />

      {/* Clouds */}
      <div className="absolute top-[20%] left-0 right-0 h-[200px] opacity-15">
        <div className="absolute w-[200px] h-[60px] bg-white rounded-full top-[20%] -left-[200px] animate-cloud-float" style={{ animationDuration: "45s" }} />
        <div className="absolute w-[300px] h-[80px] bg-white rounded-full top-[50%] -left-[300px] animate-cloud-float" style={{ animationDuration: "60s", animationDelay: "15s" }} />
        <div className="absolute w-[150px] h-[50px] bg-white rounded-full top-[70%] -left-[150px] animate-cloud-float" style={{ animationDuration: "50s", animationDelay: "30s" }} />
      </div>

      {/* Mountains */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%]">
        <div className="absolute bottom-0 left-[15%] w-[70%] h-[70%] opacity-40" style={{ background: "linear-gradient(180deg, #4a6a4a, #355035)", clipPath: "polygon(0 100%, 10% 50%, 30% 25%, 50% 40%, 70% 15%, 90% 45%, 100% 100%)" }} />
        <div className="absolute bottom-0 -left-[5%] w-[50%] h-full opacity-60" style={{ background: "linear-gradient(170deg, #2D4A2D, #1a3520)", clipPath: "polygon(0 100%, 20% 20%, 40% 45%, 60% 10%, 80% 35%, 100% 100%)" }} />
        <div className="absolute bottom-0 -right-[5%] w-[55%] h-[90%] opacity-50" style={{ background: "linear-gradient(190deg, #3D5A3D, #2a4a2a)", clipPath: "polygon(0 100%, 15% 40%, 35% 15%, 55% 30%, 75% 5%, 100% 100%)" }} />
      </div>

      {/* Dzong silhouette */}
      <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[280px] h-[200px] opacity-20">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[120px] bg-gradient-to-b from-cream to-[#d4c9b0] rounded-t" />
        <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 w-[70px] h-[100px] bg-gradient-to-b from-cream to-[#d4c9b0] rounded-t" />
        <div className="absolute bottom-[185px] left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-crimson" style={{ clipPath: "polygon(10% 100%, 50% 0%, 90% 100%)" }} />
      </div>

      {/* Prayer flags */}
      <div ref={flagsRef} className="absolute top-[15%] left-[5%] right-[5%] h-[2px] bg-white/10 -rotate-1" />

      {/* Content */}
      <div className="relative z-10 text-center px-5">
        <p className="font-heading text-gold-light text-base tracking-[6px] uppercase mb-5 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          Welcome to the Kingdom of
        </p>
        <h1 className="font-display text-cream leading-tight mb-4 opacity-0 animate-fade-up" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", animationDelay: "0.8s" }}>
          Land of the<br /><em className="text-gold italic">Thunder Dragon</em>
        </h1>
        <p className="font-body text-cream/70 text-lg italic mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "1.1s" }}>
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gold-light font-heading text-xs tracking-[3px] uppercase opacity-0 animate-fade-up" style={{ animationDelay: "1.7s" }}>
        <span>Explore</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent animate-scroll-pulse" />
      </div>
    </section>
  );
}
