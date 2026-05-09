import Link from "next/link";

import { InvestorAssuranceStrip } from "@/components/conversion/investor-assurance-strip";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/cta-button";
import { croMessaging } from "@/data/cro";
import { footerAuthority, footerLegalDisclaimer } from "@/data/footer-authority";
import { footerLegalLinks, footerMegaColumns } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const editorialDirectoryLinkClass = cn(
  "rounded-[7px] font-sans text-[0.834375rem] font-normal leading-[1.52] tracking-[0.015em] text-lux-ink/[0.72]",
  "transition-[color,text-decoration-color] duration-400 ease-luxury motion-reduce:transition-none",
  "underline decoration-lux-gold/28 underline-offset-[0.42em]",
  "hover:text-lux-ink hover:decoration-lux-gold/55 focus-visible:text-lux-ink",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold/[0.55] focus-visible:ring-offset-2 focus-visible:ring-offset-lux-paper",
  "xl:text-[0.855rem]",
);

const columnHeadingClass =
  "font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-lux-gold/[0.88] xl:text-[10.25px]";

const contactItemClass =
  "text-[0.8375rem] font-normal tracking-[0.012em] text-lux-ink/[0.78] underline-offset-[5px] transition-colors hover:text-lux-ink xl:text-[0.853125rem]";

const socialLinkClass =
  "text-[10.25px] font-semibold uppercase tracking-[0.22em] text-lux-ink/[0.5] underline-offset-[4px] transition-colors hover:text-lux-ink/[0.78] xl:text-[10.5px]";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className={cn(
        "relative z-[2] mt-auto border-t border-lux-gold/18",
        "bg-gradient-to-b from-lux-paper via-[#f7f4ef] to-[#e9e4dc]/93",
        "shadow-[inset_0_1px_0_rgba(250,248,245,0.85),0_-38px_90px_-56px_rgba(10,10,10,0.13)] backdrop-blur-[6px]",
        "supports-[backdrop-filter]:via-[#f8f5f1]/94 supports-[backdrop-filter]:to-[#ebe6df]/91",
      )}
    >
      <Container
        as="div"
        className="py-[clamp(3.5rem,8.5vw,5.75rem)] xl:pb-[clamp(4.375rem,10vw,6.875rem)] xl:pt-[clamp(3.875rem,9vw,5.5rem)]"
      >
        <div className="flex flex-col gap-16 xl:gap-[4.375rem]">
          <InvestorAssuranceStrip />

          <div className="grid gap-[clamp(3.25rem,8vw,4.125rem)] border-t border-lux-gold/[0.12] pt-[clamp(2.875rem,7vw,3.875rem)] lg:grid-cols-12 lg:gap-x-12 lg:gap-y-16 xl:gap-x-14">
            {/* Authority column — editorial + entity wording for crawl / AI readability */}
            <div className="lg:col-span-4 xl:col-span-3">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.34em] text-lux-gold/[0.9] xl:text-[10.25px]">
                {footerAuthority.kicker}
              </p>
              <h2 className="mt-[1.0625rem] font-display text-[clamp(1.8125rem,2.85vw,2.25rem)] font-medium leading-[1.04] tracking-[-0.024em] text-lux-ink md:mt-[1.1875rem]">
                {footerAuthority.headline}
              </h2>
              <p className="mt-4 max-w-[32ch] font-sans text-[12.25px] font-medium uppercase tracking-[0.22em] text-lux-ink/[0.45] xl:text-[12.5px]">
                {footerAuthority.subheading}
              </p>
              <span className="mt-10 block h-px max-w-[3.125rem] bg-gradient-to-r from-lux-gold/78 via-lux-gold/32 to-transparent" aria-hidden />
              <p className="mt-[1.9375rem] max-w-[min(38ch,100%)] font-sans text-[15px] font-normal leading-[1.75] tracking-[0.017em] text-lux-ink/[0.64] xl:max-w-[40ch] xl:text-[0.9575rem] xl:leading-[1.74] xl:tracking-[0.016em]">
                {footerAuthority.deck}
              </p>
            </div>

            {/* Internal linking — four authority silos */}
            <nav
              aria-label="Site sections and Solana West resources"
              className="lg:col-span-5 xl:col-span-6 min-w-0"
            >
              <div className="grid gap-y-14 sm:grid-cols-2 sm:gap-x-10 xl:grid-cols-4 xl:gap-x-11">
                {footerMegaColumns.map((column) => {
                  const titleId = `footer-cluster-${column.id}`;
                  return (
                    <section key={column.id} className="min-w-0" aria-labelledby={titleId}>
                      <h3 id={titleId} className={columnHeadingClass}>
                        {column.headline}
                      </h3>
                      <ul className="mt-[1.6875rem] space-y-[0.9625rem] text-balance xl:space-y-[1.0625rem]">
                        {column.links.map((item) => (
                          <li key={`${column.id}:${item.href}`}>
                            <Link href={item.href} className={editorialDirectoryLinkClass}>
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  );
                })}
              </div>
            </nav>

            {/* Concierge & trust channels */}
            <aside className="min-w-0 border-t border-lux-gold/[0.1] pt-14 lg:col-span-3 lg:border-none lg:pt-0 xl:col-span-3">
              <h3 className={columnHeadingClass}>Concierge & media</h3>
              <address className="mt-[1.6875rem] flex flex-col gap-6 font-sans not-italic xl:gap-8">
                <ul className="flex flex-col gap-[1.0625rem] xl:gap-4">
                  <li>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className={contactItemClass}
                      data-track="phone_call_click"
                      data-track-placement="footer_contact"
                    >
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${siteConfig.email}`} className={contactItemClass}>
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <a href={siteConfig.url} className={contactItemClass}>
                      {siteConfig.url.replace(/^https?:\/\//, "")}
                    </a>
                  </li>
                </ul>

                <CtaButton
                  href={siteConfig.whatsAppUrl}
                  external
                  variant="whatsapp"
                  size="md"
                  leadingIcon={<WhatsAppIcon className="size-[1.05rem] opacity-95" />}
                  className={cn(
                    "w-full min-h-[2.935rem] text-[11.5px] font-semibold uppercase tracking-[0.085em]",
                    "[&>span:last-child]:text-[12.75px]",
                  )}
                  data-track="whatsapp_click"
                  data-track-placement="footer_whatsapp_primary"
                >
                  {croMessaging.railWhatsAppLabel}
                </CtaButton>

                <div>
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-lux-gold/[0.88] xl:text-[10.25px]">
                    Profiles
                  </p>
                  <ul className="mt-6 flex flex-col gap-[0.9rem]">
                    {([
                      { label: "Facebook", href: siteConfig.social.facebook },
                      { label: "Instagram", href: siteConfig.social.instagram },
                      { label: "YouTube", href: siteConfig.social.youtube },
                      { label: "X", href: siteConfig.social.x },
                      { label: "Snapchat", href: siteConfig.social.snapchat },
                    ] as const).map((s) => (
                      <li key={s.href}>
                        <a
                          href={s.href}
                          className={socialLinkClass}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </address>
            </aside>
          </div>

          {/* Legal runway — statute + privacy isolated from merchandising grids */}
          <div className="border-t border-lux-ink/[0.06] pt-12 xl:pt-14">
            <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:justify-between xl:gap-x-14">
              <div className="max-w-xl space-y-8">
                <p className="font-sans text-[11.25px] font-normal uppercase tracking-[0.22em] text-lux-gold/[0.78] xl:text-[11.35px]">
                  Legal posture
                </p>
                <p className="font-sans text-[12.875px] leading-[1.92] tracking-[0.018em] text-lux-ink/[0.5] xl:max-w-[46rem] xl:text-[0.8375rem] xl:tracking-[0.017em]">
                  {footerLegalDisclaimer}
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-[1.9375rem] border-t border-lux-gold/[0.1] pt-10 xl:border-none xl:border-l xl:border-lux-gold/[0.12] xl:pl-[clamp(2rem,4vw,2.875rem)] xl:pt-[0.25rem]">
                <div>
                  <p className="font-display text-[0.9575rem] font-normal tracking-[-0.012em] text-lux-ink/[0.86] xl:text-[1rem]">
                    © {year} {siteConfig.shortName}
                  </p>
                  <p className="mt-[0.55rem] max-w-[20rem] font-sans text-[11.25px] font-normal uppercase tracking-[0.2em] text-lux-ink/[0.38] xl:text-[11.35px]">
                    {siteConfig.developer}
                  </p>
                </div>
                <nav aria-label="Legal">
                  <ul className="flex flex-wrap gap-x-10 gap-y-3">
                    {footerLegalLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            editorialDirectoryLinkClass,
                            "text-[0.8125rem] text-lux-ink/[0.58]",
                            "hover:text-lux-ink xl:text-[0.834375rem]",
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
