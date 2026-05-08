import Image from "next/image";
import Link from "next/link";

import { PrimaryNavigation } from "@/components/navigation/primary-navigation";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  const { headerLogo } = siteConfig.branding;

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.045] bg-lux-paper/86 backdrop-blur-[12px] supports-[backdrop-filter]:bg-lux-paper/72">
      <Container
        as="div"
        className="flex min-h-[3.625rem] items-center justify-between gap-8 py-[0.55rem] md:min-h-[4rem] md:gap-11 md:py-[0.75rem]"
      >
        <div className="min-w-0 flex-1 md:max-w-[min(26rem,40vw)] lg:max-w-none">
          <Link
            href="/"
            className="group flex max-w-fit items-start gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-4 focus-visible:ring-offset-lux-paper md:gap-3"
          >
            <span className="relative shrink-0 translate-y-[0.04em]">
              <Image
                src={headerLogo.src}
                alt={headerLogo.suppressProjectWordmark ? headerLogo.alt : ""}
                width={headerLogo.width}
                height={headerLogo.height}
                priority
                sizes="(max-width: 768px) 108px, 120px"
                className="h-[1.375rem] w-auto max-w-[min(6.75rem,26vw)] object-contain object-left opacity-[0.94] transition-opacity duration-500 ease-luxury group-hover:opacity-100 md:h-[1.5rem] md:max-w-[7.5rem]"
              />
            </span>
            <div className="min-w-0">
              {headerLogo.suppressProjectWordmark ? null : (
                <span className="block font-display text-[1.32rem] leading-[1.05] tracking-[-0.02em] text-lux-ink transition-colors duration-500 ease-luxury group-hover:text-lux-ink/[0.92] md:text-[1.4rem]">
                  {siteConfig.shortName}
                </span>
              )}
              <span
                className={
                  headerLogo.suppressProjectWordmark
                    ? "mt-1.5 block font-sans text-[0.625rem] font-medium uppercase leading-none tracking-[0.22em] text-lux-ink/36 transition-colors duration-500 ease-luxury group-hover:text-lux-ink/44 md:mt-1.5 md:text-[0.65625rem] md:tracking-[0.24em]"
                    : "mt-1.5 hidden font-sans text-[0.625rem] font-medium uppercase leading-none tracking-[0.22em] text-lux-ink/36 transition-colors duration-500 ease-luxury group-hover:text-lux-ink/44 md:block md:text-[0.65625rem] md:tracking-[0.24em]"
                }
              >
                {siteConfig.developer}
              </span>
            </div>
          </Link>
        </div>

        <PrimaryNavigation />
      </Container>
    </header>
  );
}
