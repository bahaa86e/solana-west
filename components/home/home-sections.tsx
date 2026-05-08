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

export function HomeSections() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProjectOverviewSection />
      <PropertyTypesSection />
      <PaymentPlanSection />
      <LocationAdvantagesSection />
      <InvestmentSection />
      <AmenitiesSection />
      <MasterplanSection />
      <FaqPreviewSection />
      <FinalCtaSection />
    </>
  );
}
