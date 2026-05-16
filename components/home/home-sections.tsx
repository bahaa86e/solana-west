import { CinematicStoryMoment } from "@/components/cinematic/cinematic-story-moment";
import { AmenitiesSection } from "@/components/home/amenities-section";
import { FaqPreviewSection } from "@/components/home/faq-preview-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { GlobalHeroEnquirySection } from "@/components/conversion/global-hero-enquiry-section";
import { HeroSection } from "@/components/home/hero-section";
import { HomeSnapshotSection } from "@/components/home/home-snapshot-section";
import { CinematicInterlude } from "@/components/ui/cinematic-interlude";
import { InvestmentSection } from "@/components/home/investment-section";
import { LocationAdvantagesSection } from "@/components/home/location-advantages-section";
import { MasterplanSection } from "@/components/home/masterplan-section";
import { PaymentPlanSection } from "@/components/home/payment-plan-section";
import { ProjectOverviewSection } from "@/components/home/project-overview-section";
import { PropertyTypesSection } from "@/components/home/property-types-section";
import { TrustSection } from "@/components/home/trust-section";
import { LuxuryReveal } from "@/components/motion/luxury-reveal";
import type { LuxuryRevealLift } from "@/components/motion/luxury-reveal";
import { HOME_VISUAL_BEATS } from "@/data/storytelling/home-visual-narrative";

const revealLiftCycle: LuxuryRevealLift[] = ["sm", "md", "lg"];

/**
 * Homepage orchestration: hero → chapter dividers (mood) → full-bleed story beats →
 * editorial reveals — cinematic pacing instead of uniform section stacking.
 */
export function HomeSections() {
  return (
    <>
      <HeroSection />
      <GlobalHeroEnquirySection />

      <HomeSnapshotSection />

      <CinematicInterlude mood="breath" label="Behind the project" />

      <LuxuryReveal lift={revealLiftCycle[0]} variant="cinematic">
        <TrustSection />
      </LuxuryReveal>
      <LuxuryReveal lift={revealLiftCycle[1]} variant="cinematic">
        <ProjectOverviewSection />
      </LuxuryReveal>

      <CinematicStoryMoment beat={HOME_VISUAL_BEATS.aerial} />

      <LuxuryReveal lift={revealLiftCycle[2]} variant="cinematic">
        <MasterplanSection />
      </LuxuryReveal>

      <CinematicInterlude mood="twilight" label="Place & reach" />

      <LuxuryReveal lift={revealLiftCycle[0]} variant="cinematic">
        <LocationAdvantagesSection />
      </LuxuryReveal>
      <LuxuryReveal lift={revealLiftCycle[1]} variant="cinematic">
        <InvestmentSection />
      </LuxuryReveal>

      <CinematicStoryMoment beat={HOME_VISUAL_BEATS.estateCirculation} />

      <CinematicStoryMoment beat={HOME_VISUAL_BEATS.architecture} />

      <CinematicInterlude mood="breath" label="Own the plan" />

      <LuxuryReveal lift={revealLiftCycle[2]} variant="cinematic">
        <PropertyTypesSection />
      </LuxuryReveal>

      <CinematicStoryMoment beat={HOME_VISUAL_BEATS.lifestyle} />

      <LuxuryReveal lift={revealLiftCycle[0]} variant="cinematic">
        <PaymentPlanSection />
      </LuxuryReveal>
      <LuxuryReveal lift={revealLiftCycle[1]} variant="cinematic">
        <AmenitiesSection />
      </LuxuryReveal>

      <CinematicStoryMoment beat={HOME_VISUAL_BEATS.facadeDetail} />

      <CinematicInterlude mood="nocturne" label="Before you decide" />

      <CinematicStoryMoment beat={HOME_VISUAL_BEATS.sunset} className="border-b border-lux-ink/[0.08]" />

      <LuxuryReveal lift={revealLiftCycle[2]} variant="cinematic">
        <FaqPreviewSection />
      </LuxuryReveal>
      <LuxuryReveal lift="sm" variant="cinematic">
        <FinalCtaSection />
      </LuxuryReveal>
    </>
  );
}
