import { guide } from "@/lib/config";

export default function GuideCard() {
  return (
    <div className="bg-white border border-crimson/10 overflow-hidden relative">
      {/* Top gradient bar */}
      <div className="h-1 bg-gradient-to-r from-crimson via-gold to-saffron" />

      {/* Header */}
      <div className="flex gap-6 p-7 items-start">
        <div className="relative flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={guide.photo}
            alt={guide.name}
            className="w-28 h-28 object-cover object-top border-[3px] border-crimson rounded"
          />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-forest text-white font-heading text-[0.65rem] tracking-wider uppercase px-2.5 py-0.5 whitespace-nowrap">
            Licensed Guide
          </div>
        </div>
        <div className="pt-1">
          <h3 className="font-display text-dark text-2xl leading-tight">{guide.name}</h3>
          <p className="font-heading text-crimson text-sm mb-2">{guide.title}</p>
          <div className="text-brown/50 text-xs space-y-0.5">
            <p>🏔️ {guide.licenseType}</p>
            <p>License: {guide.licenseNo}</p>
          </div>
          <p className="text-brown text-sm mt-1.5">📍 {guide.location}</p>
        </div>
      </div>

      {/* Specialties */}
      <div className="px-7 py-4 border-t border-crimson/[0.08]">
        <h4 className="font-heading text-crimson text-xs tracking-widest uppercase mb-3">Tour Specialties</h4>
        <div className="flex flex-wrap gap-2">
          {guide.specialties.map((s) => (
            <span key={s} className="px-3 py-1 border-[1.5px] border-gold text-brown font-heading text-xs tracking-wide bg-gold/[0.06] hover:bg-gold hover:text-dark transition-all cursor-default">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="px-7 py-4 border-t border-crimson/[0.08]">
        <h4 className="font-heading text-crimson text-xs tracking-widest uppercase mb-3">Languages</h4>
        <div className="space-y-2.5">
          {guide.languages.map((lang) => (
            <div key={lang.name} className="grid grid-cols-[70px_1fr_90px] items-center gap-3">
              <span className="font-heading text-brown text-sm">{lang.name}</span>
              <div className="h-1.5 bg-crimson/[0.08] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-crimson to-saffron rounded-full" style={{ width: `${lang.percent}%` }} />
              </div>
              <span className="text-brown/50 text-xs text-right">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact links */}
      <div className="px-7 py-5 border-t border-crimson/[0.08] space-y-2.5">
        <a href={`mailto:${guide.email}`} className="flex items-center gap-3 text-brown text-sm px-3.5 py-2 bg-cream border-l-[3px] border-crimson hover:bg-white hover:translate-x-1 hover:text-crimson hover:shadow-md transition-all">
          <span>✉️</span> {guide.email}
        </a>
        <a href={`tel:+${guide.whatsapp}`} className="flex items-center gap-3 text-brown text-sm px-3.5 py-2 bg-cream border-l-[3px] border-crimson hover:bg-white hover:translate-x-1 hover:text-crimson hover:shadow-md transition-all">
          <span>📞</span> {guide.phone}
        </a>
        <a href={`https://instagram.com/${guide.instagram}`} target="_blank" className="flex items-center gap-3 text-brown text-sm px-3.5 py-2 bg-cream border-l-[3px] border-saffron hover:bg-white hover:translate-x-1 hover:text-crimson hover:shadow-md transition-all">
          <span>📸</span> @{guide.instagram}
        </a>
        <a href={`https://wa.me/${guide.whatsapp}`} target="_blank" className="flex items-center gap-3 text-brown text-sm px-3.5 py-2 bg-[#25D366]/[0.06] border-l-[3px] border-[#25D366] hover:bg-white hover:translate-x-1 hover:text-[#25D366] hover:shadow-md transition-all">
          <span>💬</span> WhatsApp Pema
        </a>
      </div>
    </div>
  );
}
