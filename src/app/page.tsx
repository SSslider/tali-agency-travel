import { HeroPlanner } from "@/components/home/HeroPlanner";
import { CategoryTiles } from "@/components/home/CategoryTiles";
import { TrustStrip } from "@/components/home/TrustStrip";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturedOffers } from "@/components/home/FeaturedOffers";
import { Recommendations } from "@/components/home/Recommendations";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { CtaSections } from "@/components/home/CtaSections";
import { ContactSection } from "@/components/home/ContactSection";
import { FlightsSection } from "@/components/home/FlightsSection";
import { HotelsSection } from "@/components/home/HotelsSection";
import { ToursSection } from "@/components/home/ToursSection";
import { CarRentalSection } from "@/components/home/CarRentalSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroPlanner />
      <CategoryTiles />
      <TrustStrip />
      <FeaturedOffers />
      <FlightsSection />
      <HotelsSection />
      <ToursSection />
      <CarRentalSection />
      <HowItWorks />
      <Recommendations />
      <FaqAccordion />
      <CtaSections />
      <ContactSection />
    </div>
  );
}
