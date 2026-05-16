import { PropertyTypeEditorialStackSection } from "@/components/properties/property-type-editorial-stack-section";
import type { LocationPageModel } from "@/data/location/location-page-model";

import { LocationConnectivitySection } from "@/components/location/location-connectivity-section";
import { LocationFaqPreviewSection } from "@/components/location/location-faq-preview-section";
import { LocationFinalCtaSection } from "@/components/location/location-final-cta-section";
import { GlobalHeroEnquirySection } from "@/components/conversion/global-hero-enquiry-section";
import { LocationHeroSection } from "@/components/location/location-hero-section";
import { LocationInternalLinksSection } from "@/components/location/location-internal-links-section";
import { LocationOverviewSection } from "@/components/location/location-overview-section";

export function LocationPageView({ model }: { model: LocationPageModel }) {
  const { idPrefix, areaGrowth, investment } = model;

  return (
    <>
      <LocationHeroSection model={model} />
      <GlobalHeroEnquirySection />
      <LocationOverviewSection model={model} />
      <LocationConnectivitySection model={model} />
      <PropertyTypeEditorialStackSection
        tone="sand"
        block={{
          id: `${idPrefix}-growth`,
          headingId: `${idPrefix}-growth-heading`,
          eyebrow: areaGrowth.eyebrow,
          title: areaGrowth.title,
          paragraphs: areaGrowth.paragraphs,
        }}
      />
      <PropertyTypeEditorialStackSection
        tone="paper"
        block={{
          id: `${idPrefix}-investment`,
          headingId: `${idPrefix}-investment-heading`,
          eyebrow: investment.eyebrow,
          title: investment.title,
          paragraphs: investment.paragraphs,
        }}
      />
      <LocationInternalLinksSection model={model} />
      <LocationFaqPreviewSection model={model} />
      <LocationFinalCtaSection model={model} />
    </>
  );
}
