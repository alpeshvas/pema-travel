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

  return (
    <section className="h-screen min-h-[700px] relative flex items-start justify-center pt-[18vh] overflow-hidden">
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
          className="inline-flex items-center gap-3 px-10 py-4 bg-crimson text-cream font-heading text-sm tracking-widest uppercase border-2 border-gold rounded-full hover:bg-gold hover:text-dark transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,168,67,0.3)] opacity-0 animate-fade-up"
          style={{ animationDelay: "1.4s" }}
        >
          Begin Your Journey →
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-up" style={{ animationDelay: "2s" }}>
        <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 rounded-full bg-gold animate-scroll-pulse" />
        </div>
      </div>

      {/* Slide progress indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center opacity-0 animate-fade-up" style={{ animationDelay: "1.7s" }}>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group relative py-3 px-1 flex items-center cursor-pointer"
            >
              {/* Track — fixed width for all, prevents layout shift */}
              <div className="relative w-8 h-[2px] rounded-full overflow-hidden bg-cream/20">
                {/* Fill — animates over SLIDE_DURATION for the active slide */}
                {current === i && (
                  <div
                    key={progressKey}
                    className="absolute inset-y-0 left-0 rounded-full bg-gold"
                    style={{
                      animation: `progressFill ${SLIDE_DURATION}ms linear forwards`,
                    }}
                  />
                )}
                {/* Past slides show full fill */}
                {i < current && (
                  <div className="absolute inset-0 rounded-full bg-cream/50" />
                )}
                {/* Hover highlight for inactive future slides */}
                {i > current && (
                  <div className="absolute inset-0 rounded-full bg-transparent group-hover:bg-cream/30 transition-colors" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
