import type { ContactPageModel } from "@/data/contact/contact-page-model";

import { ContactChannelsAndFormSection } from "@/components/contact/contact-channels-and-form-section";
import { ContactEditorialBlockSection } from "@/components/contact/contact-editorial-block-section";
import { ContactFaqPreviewSection } from "@/components/contact/contact-faq-preview-section";
import { ContactFinalCtaSection } from "@/components/contact/contact-final-cta-section";
import { GlobalHeroEnquirySection } from "@/components/conversion/global-hero-enquiry-section";
import { ContactHeroSection } from "@/components/contact/contact-hero-section";

export function ContactExperienceView({ model }: { model: ContactPageModel }) {
  const { idPrefix, overview, reassurance } = model;

  return (
    <>
      <ContactHeroSection model={model} />
      <GlobalHeroEnquirySection />
      <ContactEditorialBlockSection
        tone="sand"
        block={{
          id: `${idPrefix}-overview`,
          headingId: `${idPrefix}-overview-heading`,
          eyebrow: overview.eyebrow,
          title: overview.title,
          paragraphs: overview.paragraphs,
        }}
      />
      <ContactEditorialBlockSection
        tone="paper"
        block={{
          id: `${idPrefix}-reassurance`,
          headingId: `${idPrefix}-reassurance-heading`,
          eyebrow: reassurance.eyebrow,
          title: reassurance.title,
          paragraphs: reassurance.paragraphs,
        }}
      />
      <ContactChannelsAndFormSection model={model} />
      <ContactFaqPreviewSection model={model} />
      <ContactFinalCtaSection model={model} />
    </>
  );
}
