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
        "relative isolate overflow-hidden scroll-mt-[120px]",
        "border-y border-white/[0.06]",
        "bg-[#0c1018]",
        /** Full-bleed when placed inside `SectionMain` / `Container` article stacks */
        "left-1/2 w-screen max-w-[100vw] -translate-x-1/2",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_88%_72%_at_18%_0%,rgba(196,165,116,0.14)_0%,transparent_52%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#121a28]/90 via-[#0c1018] to-[#080b10]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lux-gold/35 to-transparent"
        aria-hidden
      />

      <Container
        as="div"
        size="wide"
        className="relative z-[2] py-[clamp(2.75rem,7vw,4.5rem)] max-lg:pb-[clamp(3rem,8vw,4.75rem)]"
      >
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26.5rem)] lg:gap-14 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,28rem)] xl:gap-16">
          <HeroEnquirySectionContent />
          <div
            className={cn(
              "rounded-[6px] border border-white/[0.12]",
              "bg-gradient-to-b from-white/[0.1] via-white/[0.06] to-white/[0.03]",
              "p-[clamp(1.35rem,4vw,2rem)]",
              "shadow-[0_24px_64px_-40px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.14)]",
              "backdrop-blur-[24px]",
              "ring-1 ring-lux-gold/[0.08]",
            )}
          >
            <HeroEnquiryForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
