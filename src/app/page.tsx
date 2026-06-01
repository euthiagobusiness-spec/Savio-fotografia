import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { ExperienceQuizSection } from "@/components/sections/ExperienceQuizSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LegacySection } from "@/components/sections/LegacySection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PreparationGuideSection } from "@/components/sections/PreparationGuideSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServiceJourneysSection } from "@/components/sections/ServiceJourneysSection";
import { StudioSection } from "@/components/sections/StudioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LegacySection />
        <PortfolioSection />
        <ExperienceQuizSection />
        <ServiceJourneysSection />
        <StudioSection />
        <ProcessSection />
        <PreparationGuideSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
