"use client";

import Link from "next/link";

import { InvestorAssuranceStrip } from "@/components/conversion/investor-assurance-strip";
import { useEditorialCopy } from "@/components/i18n/editorial-copy-context";
import { useSiteLocale } from "@/components/i18n/site-locale-context";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/cta-button";
import { footerAuthority, footerLegalDisclaimer } from "@/data/footer-authority";
import { footerAuthorityAr, footerLegalDisclaimerAr } from "@/data/footer-authority-ar";
import { footerMegaColumnsAr, footerLegalLinksAr } from "@/data/navigation/ar";
import { footerLegalLinks, footerMegaColumns } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const editorialDirectoryLinkClass = cn(
  "rounded-[7px] font-sans text-[0.834375rem] font-normal leading-[1.52] tracking-[0.015em] text-lux-ink/[0.72]",
  "transition-[color,text-decoration-color] duration-400 ease-luxury motion-reduce:transition-none",
  "underline decoration-lux-gold/20 underline-offset-[0.42em]",
  "hover:text-lux-ink hover:decoration-lux-gold/38 focus-visible:text-lux-ink",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold/[0.55] focus-visible:ring-offset-2 focus-visible:ring-offset-lux-paper",
  "xl:text-[0.855rem]",
);

const columnHeadingClass =
  "font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-lux-gold/[0.72] xl:text-[10.25px]";

const contactItemClass =
  "text-[0.8375rem] font-normal tracking-[0.012em] text-lux-ink/[0.78] underline-offset-[5px] transition-colors hover:text-lux-ink xl:text-[0.853125rem]";

const socialLinkClass =
  "text-[10.25px] font-semibold uppercase tracking-[0.22em] text-lux-ink/[0.5] underline-offset-[4px] transition-colors hover:text-lux-ink/[0.78] xl:text-[10.5px]";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const locale = useSiteLocale();
  const { croMessaging } = useEditorialCopy();
  const mega = locale === "ar" ? footerMegaColumnsAr : footerMegaColumns;
  const authority = locale === "ar" ? footerAuthorityAr : footerAuthority;
  const disclaimer = locale === "ar" ? footerLegalDisclaimerAr : footerLegalDisclaimer;
  const legalLane = locale === "ar" ? footerLegalLinksAr : footerLegalLinks;
  const socialHeading = locale === "ar" ? "وسائل التواصل" : "Social";
  const legalPostureHeading = locale === "ar" ? "إطار قانوني" : "Formal posture";
  const conciergeHeading = locale === "ar" ? "كونسييرج" : "Concierge";

  return (
    <footer
      role="contentinfo"
      className={cn(
        "relative z-[2] mt-auto border-t border-lux-stone/35",
        "bg-[#faf8f5]",
        "shadow-[inset_0_1px_0_rgba(252,250,247,0.85)]",
      )}
    >
      <Container
        as="div"
        className="py-[clamp(3rem,7vw,5rem)] xl:pb-[clamp(3.75rem,8.5vw,5.5rem)] xl:pt-[clamp(3.25rem,7.5vw,4.75rem)]"
      >
        <div className="flex flex-col gap-11 xl:gap-14">
          <InvestorAssuranceStrip />

          <div className="grid gap-[clamp(2.75rem,6.5vw,3.5rem)] border-t border-lux-ink/[0.05] pt-[clamp(2.5rem,5.75vw,3.25rem)] lg:grid-cols-12 lg:gap-x-11 lg:gap-y-12 xl:gap-x-12">
            {/* Authority column — editorial + entity wording for crawl / AI readability */}
            <div className="lg:col-span-4 xl:col-span-3">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-lux-gold/[0.7] xl:text-[10.25px]">
                {footerAuthority.kicker}
              </p>
              <h2 className="mt-[1.0625rem] font-display text-[clamp(1.8125rem,2.85vw,2.25rem)] font-medium leading-[1.04] tracking-[-0.024em] text-lux-ink md:mt-[1.1875rem]">
                {footerAuthority.headline}
              </h2>
              <p className="mt-4 max-w-[32ch] font-sans text-[12.25px] font-medium uppercase tracking-[0.22em] text-lux-ink/[0.45] xl:text-[12.5px]">
                {footerAuthority.subheading}
              </p>
              <span className="mt-10 block h-px max-w-[3.125rem] bg-gradient-to-r from-lux-gold/48 via-lux-gold/22 to-transparent" aria-hidden />
              <p className="mt-[1.9375rem] max-w-[min(38ch,100%)] font-sans text-[15px] font-normal leading-[1.75] tracking-[0.017em] text-lux-ink/[0.64] xl:max-w-[40ch] xl:text-[0.9575rem] xl:leading-[1.74] xl:tracking-[0.016em]">
                {authority.deck}
              </p>
            </div>

            {/* Internal linking — four authority silos */}
            <nav
              aria-label={
                locale === "ar"
                  ? "أقسام الموقع وموارد مشروع Solana West"
                  : "Site sections and Solana West resources"
              }
              className="lg:col-span-5 xl:col-span-6 min-w-0"
            >
              <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-x-8 xl:grid-cols-4 xl:gap-x-9">
                {mega.map((column) => {
                  const titleId = `footer-cluster-${column.id}`;
                  return (
                    <section key={column.id} className="min-w-0" aria-labelledby={titleId}>
                      <h3 id={titleId} className={columnHeadingClass}>
                        {column.headline}
                      </h3>
                      <ul className="mt-[1.25rem] space-y-[0.78rem] text-balance xl:mt-[1.375rem] xl:space-y-[0.875rem]">
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
            <aside className="min-w-0 border-t border-lux-gold/[0.08] pt-10 lg:col-span-3 lg:border-none lg:pt-0 xl:col-span-3">
              <h3 className={columnHeadingClass}>{conciergeHeading}</h3>
              <address className="mt-[1.25rem] flex flex-col gap-5 font-sans not-italic xl:mt-[1.375rem] xl:gap-6">
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
                  {croMessaging.footerWhatsAppLabel}
                </CtaButton>

                <div>
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-lux-gold/[0.82] xl:text-[10.25px]">
                    {socialHeading}
                  </p>
                  <ul className="mt-4 flex flex-col gap-[0.65rem]">
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

          {/* Formal runway — statute + privacy isolated from merchandising grids */}
          <div className="border-t border-lux-ink/[0.055] pt-8 xl:pt-10">
            <div className="flex flex-col gap-7 xl:flex-row xl:items-start xl:justify-between xl:gap-x-12">
              <div className="max-w-xl space-y-4">
                <p className="font-sans text-[11.25px] font-normal uppercase tracking-[0.22em] text-lux-gold/[0.78] xl:text-[11.35px]">
                  {legalPostureHeading}
                </p>
                <p className="font-sans text-[12.875px] leading-[1.92] tracking-[0.018em] text-lux-ink/[0.5] xl:max-w-[46rem] xl:text-[0.8375rem] xl:tracking-[0.017em]">
                  {disclaimer}
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-6 border-t border-lux-gold/[0.08] pt-8 xl:border-none xl:border-l xl:border-lux-gold/[0.1] xl:pl-[clamp(1.75rem,3.5vw,2.5rem)] xl:pt-[0.125rem]">
                <div>
                  <p className="font-display text-[0.9575rem] font-normal tracking-[-0.012em] text-lux-ink/[0.86] xl:text-[1rem]">
                    © {year} {siteConfig.shortName}
                  </p>
                  <p className="mt-[0.55rem] max-w-[20rem] font-sans text-[11.25px] font-normal uppercase tracking-[0.2em] text-lux-ink/[0.38] xl:text-[11.35px]">
                    {siteConfig.developer}
                  </p>
                </div>
                <nav aria-label={locale === "ar" ? "روابط قانونية" : "Formal"}>
                  <ul className="flex flex-wrap gap-x-10 gap-y-3">
                    {legalLane.map((item) => (
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
