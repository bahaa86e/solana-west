import { HeroEnquiryForm } from "@/components/forms/hero-enquiry-form";

import { HeroEnquirySectionContent } from "@/components/conversion/hero-enquiry-section-content";

import { Container } from "@/components/ui/container";

import { ENQUIRY_FORM_SECTION_ID } from "@/lib/enquiry-form-anchor";

import { cn } from "@/lib/utils";



/**

 * Sitewide post-hero enquiry rail — placed directly below page heroes.

 * Reuses `submitLeadInquiry` and thank-you conversion flow via `HeroEnquiryForm`.

 */

export function GlobalHeroEnquirySection() {

  return (

    <section

      id={ENQUIRY_FORM_SECTION_ID}

      aria-labelledby="hero-enquiry-heading"

      className={cn(

        "lux-enquiry-section relative isolate overflow-hidden scroll-mt-[120px]",

        "border-y",

        /** Full-bleed when placed inside `SectionMain` / `Container` article stacks */

        "left-1/2 w-screen max-w-[100vw] -translate-x-1/2",

      )}

    >

      <div

        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_92%_68%_at_14%_-8%,rgba(196,165,116,0.11)_0%,transparent_54%)]"

        aria-hidden

      />

      <div

        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0f1520]/95 via-[#080c12] to-[#05070c]"

        aria-hidden

      />

      <div

        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lux-champagne/28 to-transparent"

        aria-hidden

      />



      <Container

        as="div"

        size="wide"

        className="relative z-[2] py-[clamp(3rem,7.5vw,4.75rem)] max-lg:pb-[clamp(3.25rem,8.5vw,5rem)]"

      >

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,22.5rem)] lg:gap-16 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,23.5rem)] xl:gap-[4.5rem]">

          <HeroEnquirySectionContent />

          <div className="lux-enquiry-card p-[clamp(1.5rem,3.8vw,2.125rem)] max-lg:mx-auto max-lg:w-full max-lg:max-w-[24rem]">

            <HeroEnquiryForm />

          </div>

        </div>

      </Container>

    </section>

  );

}

