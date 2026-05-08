import Link from "next/link";

import { Container } from "@/components/ui/container";
import { footerDirectorySections } from "@/data/navigation";
import { siteConfig } from "@/data/site";

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "YouTube", href: siteConfig.social.youtube },
  { label: "X", href: siteConfig.social.x },
  { label: "Snapchat", href: siteConfig.social.snapchat },
] as const;

const linkClass =
  "text-[0.8125rem] font-normal leading-relaxed tracking-[0.01em] text-lux-ink/68 underline-offset-[5px] transition-colors duration-400 hover:text-lux-ink hover:underline sm:text-[0.84375rem]";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-lux-sand bg-lux-paper">
      <Container as="div" className="py-section xl:pb-[clamp(4rem,10vw,6.5rem)]">
        <div className="flex flex-col gap-14 xl:gap-16">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
            <div className="lg:col-span-3 xl:col-span-3">
              <p className="font-display text-2xl tracking-[-0.012em] text-lux-ink">{siteConfig.shortName}</p>
              <p className="mt-3 max-w-[22ch] text-sm leading-relaxed text-lux-ink/62">{siteConfig.developer}</p>
            </div>

            <nav aria-label="Site directory" className="lg:col-span-6 xl:col-span-6">
              <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:gap-x-10 xl:grid-cols-5 xl:gap-y-14">
                {footerDirectorySections.map((section) => {
                  const headingId = `footer-directory-${section.id}`;
                  return (
                    <section
                      key={section.id}
                      className="min-w-0"
                      aria-labelledby={headingId}
                    >
                      <h2 id={headingId} className="text-[10.5px] font-semibold uppercase tracking-[0.26em] text-lux-ink/42">
                        {section.eyebrow}
                      </h2>
                      <ul className="mt-4 space-y-2.5 sm:space-y-2 lg:space-y-2">
                        {section.links.map((item) => (
                          <li key={item.href}>
                            <Link href={item.href} className={linkClass}>
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

            <div className="space-y-10 border-t border-lux-sand/90 pt-10 lg:col-span-3 lg:border-none lg:pt-0 xl:col-span-3 xl:col-start-auto">
              <div>
                <h2 id="footer-contact-heading" className="text-[10.5px] font-semibold uppercase tracking-[0.26em] text-lux-ink/42">
                  Contact & media
                </h2>
                <ul aria-labelledby="footer-contact-heading" className="mt-5 space-y-3 text-[0.8125rem] leading-relaxed text-lux-ink/78 sm:text-[0.84375rem]">
                  <li>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="underline-offset-[5px] transition-colors hover:text-lux-ink hover:underline"
                      data-track="phone_call_click"
                      data-track-placement="footer_contact"
                    >
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="underline-offset-[5px] transition-colors hover:text-lux-ink hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.url}
                      className="underline-offset-[5px] transition-colors hover:text-lux-ink hover:underline"
                    >
                      {siteConfig.url.replace(/^https?:\/\//, "")}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 id="footer-social-heading" className="text-[10.5px] font-semibold uppercase tracking-[0.26em] text-lux-ink/42">
                  Social profiles
                </h2>
                <ul aria-labelledby="footer-social-heading" className="mt-5 flex flex-col gap-x-4 gap-y-2.5 sm:flex-row sm:flex-wrap sm:text-[0.84375rem]">
                  {socialLinks.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        className="inline-block text-[0.8125rem] text-lux-ink/74 underline-offset-[5px] transition-colors hover:text-lux-ink hover:underline sm:text-[0.84375rem]"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-lux-sand/80 pt-10 text-[12.25px] text-lux-ink/46 xl:pt-11">
            <p className="text-center md:text-start">
              © {year} {siteConfig.shortName}. {siteConfig.developer}.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
