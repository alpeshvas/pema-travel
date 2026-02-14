import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Destinations from "@/components/sections/Destinations";
import Experiences from "@/components/sections/Experiences";
import Culture from "@/components/sections/Culture";
import Testimonials from "@/components/sections/Testimonials";
import GNHBanner from "@/components/sections/GNHBanner";
import PracticalInfo from "@/components/sections/PracticalInfo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Destinations />
      <Experiences />
      <Culture />
      <Testimonials />
      <GNHBanner />
      <PracticalInfo />
    </>
  );
}
