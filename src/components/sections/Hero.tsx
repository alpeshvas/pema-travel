"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

/*
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  HERO SLIDESHOW IMAGES
 *
 *  To use your own tour photos:
 *  1. Drop your images into /public/hero/
 *  2. Replace the entries below, e.g.:
 *     { src: "/hero/tigers-nest-group.jpg", alt: "Our group at Tiger's Nest" }
 *     { src: "/hero/punakha-dzong-tour.jpg", alt: "Touring Punakha Dzong" }
 *
 *  Recommended: landscape photos, at least 1920px wide
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */
const slides = [
  {
    src: "/hero/phobjikha-valley.jpg",
    alt: "Phobjikha Valley and Gangtey monastery landscape",
  },
  {
    src: "/hero/jomolhari-mountain.jpg",
    alt: "Mount Jomolhari with glacial lake in Bhutan",
  },
  {
    src: "/hero/khamsum-chorten.jpg",
    alt: "Khamsum Yulley Namgyal Chorten in Punakha Valley",
  },
  {
    src: "/hero/paro-dzong.jpg",
    alt: "Paro Rinpung Dzong fortress in the Paro Valley",
  },
  {
    src: "/hero/bhutan-landscape.jpg",
    alt: "Bhutan mountain landscape from a guided trek",
  },
  {
    src: "/hero/fujidra.jpg",
    alt: "Scenic Bhutan landscape from a guided tour",
  },
  {
    src: "/hero/doddey-dre.jpg",
    alt: "Bhutan countryside and mountain vista",
  },
];

const SLIDE_DURATION = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(new Set([0]));
  const flagsRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgressKey((k) => k + 1);
    // Reset the auto-advance timer
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setProgressKey((k) => k + 1);
    }, SLIDE_DURATION);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setProgressKey((k) => k + 1);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Preload next two images
  useEffect(() => {
    const next = (current + 1) % slides.length;
    const next2 = (current + 2) % slides.length;
    setLoaded((prev) => new Set(prev).add(next).add(next2));
  }, [current]);

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
      {/* Slideshow background */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          {(i === 0 || loaded.has(i)) && (
            <div
              className="absolute inset-0"
              style={{
                animation: current === i ? `kenBurns ${SLIDE_DURATION + 1500}ms ease-in-out forwards` : "none",
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          )}
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/80 z-[1]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(26,18,9,0.6)_100%)] z-[1]" />

      {/* Prayer flags */}
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

      {/* Slide progress indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 opacity-0 animate-fade-up" style={{ animationDelay: "1.7s" }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative h-5 flex items-center"
          >
            {/* Track */}
            <div className={`h-[2px] rounded-full transition-all duration-300 ${
              current === i ? "w-10 bg-cream/20" : "w-5 bg-cream/15 hover:bg-cream/30"
            }`}>
              {/* Fill — animates over SLIDE_DURATION for the active slide */}
              {current === i && (
                <div
                  key={progressKey}
                  className="h-full rounded-full bg-gold"
                  style={{
                    animation: `progressFill ${SLIDE_DURATION}ms linear forwards`,
                  }}
                />
              )}
              {/* Past slides show full fill */}
              {i < current && (
                <div className="h-full w-full rounded-full bg-cream/40" />
              )}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
