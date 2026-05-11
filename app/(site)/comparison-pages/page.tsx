import Link from "next/link";

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
          <p className="lux-eyebrow text-lux-ink/46">Benchmarks</p>
          <div className="mt-lux-stack-xs h-px w-9 bg-lux-gold/42 md:mt-lux-stack-sm" aria-hidden />
          <h1
            id="comparison-hub-heading"
            className="mt-lux-stack-xs max-w-[min(42ch,100%)] text-balance font-display text-display-xl text-lux-ink"
          >
            Compare New Zayed compounds — how {siteConfig.shortName} benchmarks
          </h1>
          <p className="lux-body mt-lux-stack-sm max-w-[54ch] text-lux-ink/68 md:mt-lux-stack-md">
            Use the same lenses for every pitch deck: masterplan density, green structure, road reach, sales desk discipline,
            and what your unit overlooks at delivery. Adjacent megaprojects such as VYE (Sodic) and Belle Vie (Emaar) are
            market comparables—not affiliations.
          </p>
        </header>

        <section className="border-b border-lux-ink/[0.06] py-10 md:py-12" aria-labelledby="comparison-framework">
          <h2 id="comparison-framework" className="font-display text-lux-display-sm font-medium text-lux-ink">
            Compound diligence lenses we apply before shortlisting
          </h2>
          <ul className="lux-body mt-4 max-w-[52ch] list-disc space-y-2 pl-5 text-lux-ink/68">
            <li>Land allocation before façade mood boards—where density sits and how landscape holds.</li>
            <li>Arterial reach (Mehwar, ring roads) versus estate privacy—noise and outlook at daily speed.</li>
            <li>Payment language vs. sales schedules—market lines vs. what you sign.</li>
            <li>Delivery windows by cluster—avoid quarter marketing when you model cash flow.</li>
          </ul>
          <p className="lux-body mt-6 max-w-[52ch] text-lux-ink/68">
            Deep-dive:&nbsp;
            <Link href="/blog/solana-west-vs-vye-belle-vie-buyer-framework-2026" className={linkClass}>
              Solana West vs. VYE &amp; Belle Vie
            </Link>
            .
          </p>
        </section>

        <section className="border-b border-lux-ink/[0.06] py-10 md:py-12" aria-labelledby="comparison-product">
          <h2 id="comparison-product" className="font-display text-lux-display-sm font-medium text-lux-ink">
            Inside {siteConfig.shortName} — villas through apartments in one footprint
          </h2>
          <p className="lux-body mt-4 max-w-[52ch] text-lux-ink/68">
            Cross-read typologies before you contrast compounds—finishing posture and façade packages move with current sales sheet.
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
            Essays that juxtapose comps without invented scorecards
          </h2>
          <ul className="lux-body mt-4 max-w-[52ch] list-disc space-y-2 pl-5 text-lux-ink/68">
            <li>
              <Link href="/blog/solana-west-villas-vs-apartments-lifestyle-investment" className={linkClass}>
                Villas vs. apartments — lifestyle &amp; hold logic
              </Link>
            </li>
            <li>
              <Link href="/blog/solana-west-new-zayed-prices-payment-plan-2026" className={linkClass}>
                Prices &amp; payment plan — 2026 starting price
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
