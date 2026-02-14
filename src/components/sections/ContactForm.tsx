"use client";

import { guide } from "@/lib/config";

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    let text = `Kuzu Zangpo La, Pema La! 🙏\n\n`;
    text += `*Name:* ${data.get("firstName")} ${data.get("lastName")}\n`;
    if (data.get("email")) text += `*Email:* ${data.get("email")}\n`;
    if (data.get("phone")) text += `*Phone:* ${data.get("phone")}\n`;
    if (data.get("travelDate")) text += `*Travel Date:* ${data.get("travelDate")}\n`;
    if (data.get("travelers")) text += `*Travellers:* ${data.get("travelers")}\n`;
    if (data.get("interest")) text += `*Interested In:* ${data.get("interest")}\n`;
    text += `\n*Message:*\n${data.get("message")}`;

    window.open(`https://wa.me/${guide.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  }

  const inputClass =
    "w-full font-body text-sm p-3 border border-brown/20 bg-warm-white text-brown outline-none focus:border-crimson focus:bg-white focus:ring-2 focus:ring-crimson/10 transition-all";

  return (
    <div className="bg-white border border-crimson/10 overflow-hidden relative">
      <div className="h-1 bg-gradient-to-r from-crimson via-gold to-saffron" />
      <div className="p-9">
        <h3 className="font-display text-dark text-2xl mb-1">Book a Journey with Pema</h3>
        <p className="text-brown/50 text-sm italic mb-8">Fill in the details below — clicking send opens WhatsApp</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-heading text-xs text-brown tracking-wide">First Name <span className="text-crimson">*</span></label>
              <input name="firstName" required placeholder="Your first name" className={inputClass} />
            </div>
            <div>
              <label className="font-heading text-xs text-brown tracking-wide">Last Name <span className="text-crimson">*</span></label>
              <input name="lastName" required placeholder="Your last name" className={inputClass} />
            </div>
          </div>

          <div>
            <label className="font-heading text-xs text-brown tracking-wide">Email Address <span className="text-crimson">*</span></label>
            <input name="email" type="email" required placeholder="you@example.com" className={inputClass} />
          </div>

          <div>
            <label className="font-heading text-xs text-brown tracking-wide">Phone Number</label>
            <input name="phone" type="tel" placeholder="+1 234 567 890" className={inputClass} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-heading text-xs text-brown tracking-wide">Preferred Travel Date</label>
              <input name="travelDate" type="date" className={inputClass} />
            </div>
            <div>
              <label className="font-heading text-xs text-brown tracking-wide">Number of Travellers</label>
              <select name="travelers" className={inputClass}>
                <option value="">Select</option>
                <option>1 Traveller</option>
                <option>2 Travellers</option>
                <option>3–4 Travellers</option>
                <option>5–8 Travellers</option>
                <option>9+ Group</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-heading text-xs text-brown tracking-wide">Interested In</label>
            <select name="interest" className={inputClass}>
              <option value="">Select a journey type</option>
              <option>Cultural Tour</option>
              <option>Trekking &amp; Hiking</option>
              <option>Bird Watching Expedition</option>
              <option>Nature &amp; Wildlife</option>
              <option>Cycling &amp; Mountain Biking</option>
              <option>Family Adventure</option>
              <option>Custom Itinerary</option>
            </select>
          </div>

          <div>
            <label className="font-heading text-xs text-brown tracking-wide">Your Message <span className="text-crimson">*</span></label>
            <textarea name="message" required rows={4} placeholder="Tell Pema about your dream Bhutan journey..." className={`${inputClass} resize-y min-h-[100px]`} />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 px-10 py-4 bg-[#25D366] text-white font-heading text-sm tracking-widest uppercase border-2 border-[#25D366] hover:bg-[#1EBE5A] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,211,102,0.3)] transition-all mt-2"
          >
            <span>💬 Send via WhatsApp</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </form>
      </div>
    </div>
  );
}
