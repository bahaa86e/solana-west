import Link from "next/link";

import { GlobalHeroEnquirySection } from "@/components/conversion/global-hero-enquiry-section";
import { SectionMain } from "@/components/layout/section-main";
import { comparisonPagesSeo } from "@/data/seo/routes";
import { siteConfig } from "@/data/site";
import { buildPageMetadata } from "@/seo/build-metadata";
import { cn } from "@/lib/utils";

export const metadata = buildPageMetadata(comparisonPagesSeo);

const linkClass = cn(
  "font-sans text-[0.9375rem] font-normal tracking-[0.012em] text-lux-ink/[0.88]",
  "underline decoration-lux-gold/32 underline-offset-[0.38em]",
  "transition-[color,decoration-color] hover:text-lux-ink hover:decoration-lux-gold/55",
);

export default function ComparisonPagesHub() {
  return (
    <SectionMain>
      <article className="mx-auto max-w-readable" aria-labelledby="comparison-hub-heading">
        <header className="border-b border-lux-ink/[0.06] pb-lux-stack-md md:pb-lux-stack-lg">
          <p className="lux-eyebrow text-lux-ink/46">Buyer checklist</p>
          <div className="mt-lux-stack-xs h-px w-9 bg-lux-gold/42 md:mt-lux-stack-sm" aria-hidden />
          <h1
            id="comparison-hub-heading"
            className="mt-lux-stack-xs max-w-[min(42ch,100%)] text-balance font-display text-display-xl text-lux-ink"
          >
            Review {siteConfig.shortName} with clear New Zayed buyer criteria
          </h1>
          <p className="lux-body mt-lux-stack-sm max-w-[54ch] text-lux-ink/68 md:mt-lux-stack-md">
            Review the details that still matter after launch: land plan, density, greenery, access, developer process,
            payment schedule, and the view from the unit you are actually buying. Solana West should be read through its
            own ORA-led master plan.
          </p>
        </header>

        <GlobalHeroEnquirySection />

        <section className="border-b border-lux-ink/[0.06] py-10 md:py-12" aria-labelledby="comparison-checklist">
          <h2 id="comparison-checklist" className="font-display text-lux-display-sm font-medium text-lux-ink">
            What to review before shortlisting
          </h2>
          <ul className="lux-body mt-4 max-w-[52ch] list-disc space-y-2 pl-5 text-lux-ink/68">
            <li>Land allocation: where density sits and how much the landscape shapes daily life.</li>
            <li>Access versus privacy: road reach matters, but so do noise, outlook, and compound calm.</li>
            <li>Payment language versus the signed schedule: headlines are not enough.</li>
            <li>Delivery by phase or cluster: confirm timing before modelling cash flow.</li>
          </ul>
          <p className="lux-body mt-6 max-w-[52ch] text-lux-ink/68">
            Deep-dive:&nbsp;
            <Link href="/blog" className={linkClass}>
              Solana West New Zayed buyer guide
            </Link>
            .
          </p>
        </section>

        <section className="border-b border-lux-ink/[0.06] py-10 md:py-12" aria-labelledby="comparison-product">
          <h2 id="comparison-product" className="font-display text-lux-display-sm font-medium text-lux-ink">
            Inside {siteConfig.shortName}: villas, townhouses, twin houses, and apartments
          </h2>
          <p className="lux-body mt-4 max-w-[52ch] text-lux-ink/68">
            Review unit types carefully. Finishing, view, plot, floor, and phase can change the decision.
          </p>
          <ul className="lux-body mt-5 max-w-[52ch] list-disc space-y-2 pl-5 text-lux-ink/68">
            <li>
              <Link href="/properties/villas" className={linkClass}>
                Villas
              </Link>
            </li>
            <li>
              <Link href="/properties/townhouses" className={linkClass}>
                Townhouses
              </Link>
            </li>
            <li>
              <Link href="/properties/twin-houses" className={linkClass}>
                Twin houses
              </Link>
            </li>
            <li>
              <Link href="/properties/apartments" className={linkClass}>
                Apartments
              </Link>
            </li>
          </ul>
        </section>

        <section className="py-10 md:py-12" aria-labelledby="comparison-journal">
          <h2 id="comparison-journal" className="font-display text-lux-display-sm font-medium text-lux-ink">
            Guides for serious buyers
          </h2>
          <ul className="lux-body mt-4 max-w-[52ch] list-disc space-y-2 pl-5 text-lux-ink/68">
            <li>
              <Link href="/blog/solana-west-villas-vs-apartments-lifestyle-investment" className={linkClass}>
                Villas vs. apartments: lifestyle and investment fit
              </Link>
            </li>
            <li>
              <Link href="/blog/solana-west-new-zayed-prices-payment-plan-2026" className={linkClass}>
                Prices and payment plan: 2026 buyer guide
              </Link>
            </li>
            <li>
              <Link href="/location" className={linkClass}>
                Location advantages
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </SectionMain>
  );
}
