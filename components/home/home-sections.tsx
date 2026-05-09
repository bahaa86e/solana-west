import { AmenitiesSection } from "@/components/home/amenities-section";
import { FaqPreviewSection } from "@/components/home/faq-preview-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { InvestmentSection } from "@/components/home/investment-section";
import { LocationAdvantagesSection } from "@/components/home/location-advantages-section";
import { MasterplanSection } from "@/components/home/masterplan-section";
import { PaymentPlanSection } from "@/components/home/payment-plan-section";
import { ProjectOverviewSection } from "@/components/home/project-overview-section";
import { PropertyTypesSection } from "@/components/home/property-types-section";
import { TrustSection } from "@/components/home/trust-section";
import { LuxuryReveal } from "@/components/motion/luxury-reveal";
import type { LuxuryRevealLift } from "@/components/motion/luxury-reveal";

const revealLiftCycle: LuxuryRevealLift[] = ["sm", "md", "lg"];

export function HomeSections() {
  return (
    <>
      <HeroSection />
      <LuxuryReveal lift={revealLiftCycle[0]}>
        <TrustSection />
      </LuxuryReveal>
      <LuxuryReveal lift={revealLiftCycle[1]}>
        <ProjectOverviewSection />
      </LuxuryReveal>
      <LuxuryReveal lift={revealLiftCycle[2]}>
        <PropertyTypesSection />
      </LuxuryReveal>
      <LuxuryReveal lift={revealLiftCycle[0]}>
        <PaymentPlanSection />
      </LuxuryReveal>
      <LuxuryReveal lift={revealLiftCycle[1]}>
        <LocationAdvantagesSection />
      </LuxuryReveal>
      <LuxuryReveal lift={revealLiftCycle[2]}>
        <InvestmentSection />
      </LuxuryReveal>
      <LuxuryReveal lift={revealLiftCycle[0]}>
        <AmenitiesSection />
      </LuxuryReveal>
      <LuxuryReveal lift={revealLiftCycle[1]}>
        <MasterplanSection />
      </LuxuryReveal>
      <LuxuryReveal lift={revealLiftCycle[2]}>
        <FaqPreviewSection />
      </LuxuryReveal>
      <LuxuryReveal lift="sm">
        <FinalCtaSection />
      </LuxuryReveal>
    </>
  );
}
