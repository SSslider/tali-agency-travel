import { HeroPlanner } from "@/components/home/HeroPlanner";
import { CategoryTiles } from "@/components/home/CategoryTiles";
import { TrustStrip } from "@/components/home/TrustStrip";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturedOffers } from "@/components/home/FeaturedOffers";
import { Recommendations } from "@/components/home/Recommendations";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { CtaSections } from "@/components/home/CtaSections";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroPlanner />
      <CategoryTiles />
      <TrustStrip />
      <HowItWorks />
      <FeaturedOffers />
      <Recommendations />
      <FaqAccordion />
      <CtaSections />
      <ContactSection />
    </div>
  );
}
