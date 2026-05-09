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

export function HomeSections() {
  return (
    <>
      <HeroSection />
      <LuxuryReveal>
        <TrustSection />
      </LuxuryReveal>
      <LuxuryReveal>
        <ProjectOverviewSection />
      </LuxuryReveal>
      <LuxuryReveal>
        <PropertyTypesSection />
      </LuxuryReveal>
      <LuxuryReveal>
        <PaymentPlanSection />
      </LuxuryReveal>
      <LuxuryReveal>
        <LocationAdvantagesSection />
      </LuxuryReveal>
      <LuxuryReveal>
        <InvestmentSection />
      </LuxuryReveal>
      <LuxuryReveal>
        <AmenitiesSection />
      </LuxuryReveal>
      <LuxuryReveal>
        <MasterplanSection />
      </LuxuryReveal>
      <LuxuryReveal>
        <FaqPreviewSection />
      </LuxuryReveal>
      <LuxuryReveal>
        <FinalCtaSection />
      </LuxuryReveal>
    </>
  );
}
