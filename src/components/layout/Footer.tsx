import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { guide, siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-dark text-cream pt-20 pb-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3 text-gold font-heading text-xl tracking-widest mb-4">
            <Logo />
            PEMA TRAVEL
          </Link>
          <p className="text-cream/50 text-sm leading-relaxed max-w-xs">
            {siteConfig.description}
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-heading text-gold text-sm tracking-widest uppercase mb-5">Explore</h4>
          <ul className="space-y-3">
            {["Destinations", "Experiences", "Culture", "Tours"].map((item) => (
              <li key={item}>
                <Link href={item === "Tours" ? "/tours" : `/#${item.toLowerCase()}`} className="text-cream/50 text-sm hover:text-gold transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Journeys */}
        <div>
          <h4 className="font-heading text-gold text-sm tracking-widest uppercase mb-5">Journeys</h4>
          <ul className="space-y-3">
            {["Cultural Tours", "Trekking Routes", "Festival Calendar", "Custom Itineraries"].map((item) => (
              <li key={item}>
                <Link href="/tours" className="text-cream/50 text-sm hover:text-gold transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-heading text-gold text-sm tracking-widest uppercase mb-5">Connect</h4>
          <ul className="space-y-3">
            <li><a href={`mailto:${guide.email}`} className="text-cream/50 text-sm hover:text-gold transition-colors">{guide.email}</a></li>
            <li><a href={`tel:+${guide.whatsapp}`} className="text-cream/50 text-sm hover:text-gold transition-colors">{guide.phone}</a></li>
            <li><span className="text-cream/50 text-sm">{guide.location}</span></li>
            <li><a href={`https://instagram.com/${guide.instagram}`} target="_blank" className="text-cream/50 text-sm hover:text-gold transition-colors">@{guide.instagram}</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-gold/15 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-cream/30 text-xs">© 2026 Pema Travel. All rights reserved.</p>
        <p className="text-gold text-sm italic opacity-50">ༀ་མ་ཎི་པདྨེ་ཧཱུྃ།</p>
      </div>
    </footer>
  );
}
