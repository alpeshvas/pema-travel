"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/lib/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-3 left-0 right-0 z-50 px-6 md:px-10 transition-all duration-400 ${
        scrolled ? "bg-dark/92 backdrop-blur-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 text-gold font-heading text-xl tracking-widest">
          <Logo />
          PEMA TRAVEL
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-9">
          <ul className="flex gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cream font-heading text-sm tracking-wider uppercase relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-gold text-dark font-heading text-sm tracking-wider uppercase rounded-full hover:bg-gold-light transition-colors"
          >
            Plan Your Trip
          </Link>
        </div>

        {/* Mobile CTA + toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            href="/contact"
            className="px-4 py-2 bg-gold text-dark font-heading text-xs tracking-wider uppercase rounded-full hover:bg-gold-light transition-colors"
          >
            Plan Trip
          </Link>
          <button
            className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-[2px] bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-cream transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-dark/95 backdrop-blur-md pb-6 px-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                className={menuOpen ? "animate-slide-down" : ""}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <Link
                  href={link.href}
                  className="text-cream font-heading text-sm tracking-wider uppercase block py-3 border-b border-gold/10 hover:text-gold transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
