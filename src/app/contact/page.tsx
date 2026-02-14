import type { Metadata } from "next";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GuideCard from "@/components/sections/GuideCard";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Pema Wangchuk, your licensed Bhutan trekking guide. Book your journey to the Land of the Thunder Dragon.",
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-10 bg-warm-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <RevealOnScroll>
          <p className="section-label">Your Guide</p>
          <h2 className="section-title">Meet Pema Wangchuk</h2>
          <p className="section-desc mb-8">
            Your trusted guide to the Kingdom of Bhutan. With expertise spanning culture, trekking, birding, and mountain biking — Pema crafts unforgettable journeys through the Land of the Thunder Dragon.
          </p>
          <GuideCard />
        </RevealOnScroll>

        <RevealOnScroll>
          <ContactForm />
        </RevealOnScroll>
      </div>
    </section>
  );
}
