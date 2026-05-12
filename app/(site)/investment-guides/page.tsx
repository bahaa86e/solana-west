import Link from "next/link";

import { SectionMain } from "@/components/layout/section-main";
import { investmentGuidesPageSeo } from "@/data/seo/routes";
import { siteConfig } from "@/data/site";
import { buildPageMetadata } from "@/seo/build-metadata";
import { cn } from "@/lib/utils";

export const metadata = buildPageMetadata(investmentGuidesPageSeo);

const linkClass = cn(
  "font-sans text-[0.9375rem] font-normal tracking-[0.012em] text-lux-ink/[0.88]",
  "underline decoration-lux-gold/32 underline-offset-[0.38em]",
  "transition-[color,decoration-color] hover:text-lux-ink hover:decoration-lux-gold/55",
);

const guides = [
  {
    title: "Mehwar El Dabaa and the New Zayed land story",
    body: `Mehwar El Dabaa, ring-road access, and West Cairo growth help explain why buyers are studying ${siteConfig.shortName}. Start with location, then test the project against your own hold horizon.`,
    href: "/blog/solana-west-mehwar-new-zayed-location-buyer-guide-2026",
    cta: "Location buyer guide",
  },
  {
    title: "How to read the payment plan",
    body: "5% down and up to 10 years are useful headline terms. The real review happens when you see the exact schedule, fees, and dates for your unit.",
    href: "/blog/solana-west-payment-plan-explained-issuer-guide-2026",
    cta: "Payment plan guide",
  },
  {
    title: "Investment diligence without return promises",
    body: "ORA-led planning, greenery, and low density can support a strong long-term story, but they do not replace verified numbers and a realistic cash-flow plan.",
    href: "/blog/solana-west-new-zayed-investment-strength-2026",
    cta: "Investment context",
  },
  {
    title: "New Zayed vs Sheikh Zayed for luxury buyers",
    body: "How expansion geography, airport adjacency, and buyer pools differ when you choose a long-horizon address.",
    href: "/blog/new-zayed-vs-sheikh-zayed-luxury-buyers-2026",
    cta: "Area comparison",
  },
  {
    title: "How to read the ORA developer story",
    body: "Developer process, phasing, landscape, servicing, and after-sales clarity matter as much as the individual unit you choose.",
    href: "/blog/ora-developers-egypt-vision-projects-strategy",
    cta: "ORA strategy note",
  },
] as const;

export default function InvestmentGuidesPage() {
  return (
    <SectionMain>
      <article className="mx-auto max-w-readable" aria-labelledby="investment-guides-heading">
        <header className="border-b border-lux-ink/[0.06] pb-lux-stack-md md:pb-lux-stack-lg">
          <p className="lux-eyebrow text-lux-ink/46">Diligence</p>
          <div className="mt-lux-stack-xs h-px w-9 bg-lux-gold/42 md:mt-lux-stack-sm" aria-hidden />
          <h1
            id="investment-guides-heading"
            className="mt-lux-stack-xs max-w-[min(40ch,100%)] text-balance font-display text-display-xl text-lux-ink"
          >
            Investing in West Cairo with {siteConfig.shortName} as your case study
          </h1>
          <p className="lux-body mt-lux-stack-sm max-w-[52ch] text-lux-ink/68 md:mt-lux-stack-md">
            Practical buyer guides for New Zayed, West Cairo, payment plans, location, and ORA developer context. Use them
            to ask better questions before requesting current sales documents.
          </p>
        </header>

        <ul className="m-0 list-none space-y-0 p-0">
          {guides.map((g) => (
            <li key={g.href} className="border-b border-lux-ink/[0.06] py-10 md:py-12">
              <h2 className="font-display text-lux-display-sm font-medium text-lux-ink">{g.title}</h2>
              <p className="lux-body mt-4 max-w-[52ch] text-lux-ink/70">{g.body}</p>
              <p className="mt-5">
                <Link href={g.href} className={linkClass}>
                  {g.cta}
                </Link>
              </p>
            </li>
          ))}
        </ul>

        <section className="border-t border-lux-ink/[0.06] py-10 md:py-12" aria-labelledby="investment-next">
          <h2 id="investment-next" className="font-display text-lux-display-sm font-medium text-lux-ink">
            Tie the guides back to Solana West prices and payment
          </h2>
          <ul className="lux-body mt-4 max-w-[52ch] list-disc space-y-2 pl-5 text-lux-ink/68">
            <li>
              <Link href="/prices" className={linkClass}>
                Solana West prices
              </Link>
            </li>
            <li>
              <Link href="/payment-plan" className={linkClass}>
                Payment plan overview
              </Link>
            </li>
            <li>
              <Link href="/contact" className={linkClass}>
                Contact an advisor
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </SectionMain>
  );
}
