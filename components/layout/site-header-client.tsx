"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { HeaderAppearanceProvider } from "@/components/layout/header-appearance";
import { useSiteLocale } from "@/components/i18n/site-locale-context";
import { PrimaryNavigation } from "@/components/navigation/primary-navigation";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";
import { luxGlassIvory } from "@/lib/ui/premium-refinement";
import { cn } from "@/lib/utils";

const easeLux = [0.22, 1, 0.36, 1] as const;

/** Editorial shell — light glass; readable on hero imagery and ivory bands */
const headerShell = cn(
  luxGlassIvory,
  "rounded-[6px] shadow-[0_8px_32px_-26px_rgba(45,42,37,0.08)]",
);

function HeaderBar() {
  const locale = useSiteLocale();
  const homeHref = locale === "ar" ? "/ar" : "/";

  return (
    <header className="sticky top-0 z-50 w-full supports-[backdrop-filter]:bg-[#fdfcfa]/10">
      <Container as="div" className="pt-2.5 pb-2 max-lg:pt-2.5 md:pt-3.5 md:pb-2.5">
        <motion.div
          layout
          transition={{ duration: 0.52, ease: easeLux }}
          className={cn(
            headerShell,
            "flex min-h-[3.5rem] items-center justify-between gap-4 max-lg:min-h-[3.625rem] max-lg:gap-4 max-lg:px-5 max-lg:py-3 md:min-h-[3.75rem] md:gap-9 md:px-6 md:py-2.5",
            "px-4 py-2.5",
          )}
        >
          <div className="min-w-0 flex-1 md:max-w-[min(30rem,48vw)] lg:max-w-none">
            <Link
              href={homeHref}
              aria-label={siteConfig.branding.wordmarkHomeAriaLabel}
              className={cn(
                "group flex max-w-fit flex-col gap-1",
                "-m-2 rounded-[6px] p-2 outline-none transition-colors duration-[520ms] ease-luxury motion-reduce:transition-none",
                "focus-visible:ring-2 focus-visible:ring-lux-gold/[0.65] focus-visible:ring-offset-2 focus-visible:ring-offset-lux-paper",
                "hover:bg-lux-ink/[0.02]",
              )}
            >
              <span className="font-display text-[1.3125rem] font-normal leading-[1.03] tracking-[-0.03em] text-lux-ink/[0.94] md:text-[1.4rem]">
                {siteConfig.shortName}
              </span>
              <span className="font-sans text-[0.5625rem] font-semibold uppercase leading-none tracking-[0.22em] text-lux-ink/44 md:text-[0.578125rem]">
                {siteConfig.developer}
              </span>
            </Link>
          </div>

          <PrimaryNavigation />
        </motion.div>
      </Container>
    </header>
  );
}

export function SiteHeaderClient() {
  return (
    <HeaderAppearanceProvider>
      <HeaderBar />
    </HeaderAppearanceProvider>
  );
}
