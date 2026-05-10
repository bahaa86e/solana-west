"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { HeaderAppearanceProvider, useHeaderAppearance } from "@/components/layout/header-appearance";
import { PrimaryNavigation } from "@/components/navigation/primary-navigation";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const easeLux = [0.22, 1, 0.36, 1] as const;

/** Light pages — quiet glass, private-desk tone */
const glassShellDocument = cn(
  "rounded-[1.25rem] border border-white/42 bg-white/[0.06]",
  "shadow-[0_24px_56px_-38px_rgba(28,26,23,0.1)]",
  "ring-1 ring-inset ring-white/[0.32]",
  "backdrop-blur-[22px] backdrop-saturate-[1.15] supports-[backdrop-filter]:bg-white/[0.04]",
);

/** Over hero — airy ivory glass, calm not cinematic */
const glassShellDark = cn(
  "rounded-[1.25rem] border border-white/[0.14] bg-white/[0.1]",
  "shadow-[0_24px_64px_-42px_rgba(62,54,46,0.12),inset_0_1px_0_rgba(253,252,249,0.22)]",
  "ring-1 ring-inset ring-white/[0.085]",
  "backdrop-blur-[18px] backdrop-saturate-[1.06] supports-[backdrop-filter]:bg-white/[0.06]",
);

function HeaderBar() {
  const appearance = useHeaderAppearance();
  const overDark = appearance === "overDark";

  return (
    <header className="sticky top-0 z-50 w-full">
      <Container as="div" className="pt-3 pb-2 max-lg:pt-3 md:pt-4 md:pb-2.5">
        <motion.div
          layout
          transition={{ duration: 0.52, ease: easeLux }}
          className={cn(
            overDark ? glassShellDark : glassShellDocument,
            "flex min-h-[3.5rem] items-center justify-between gap-4 max-lg:min-h-[3.625rem] max-lg:gap-4 max-lg:px-5 max-lg:py-3 md:min-h-[3.75rem] md:gap-9 md:px-6 md:py-2.5",
            "px-4 py-2.5",
          )}
        >
          <div className="min-w-0 flex-1 md:max-w-[min(30rem,48vw)] lg:max-w-none">
            <Link
              href="/"
              aria-label={siteConfig.branding.wordmarkHomeAriaLabel}
              className={cn(
                "group flex max-w-fit flex-col gap-1",
                "-m-2 rounded-[11px] p-2 outline-none transition-colors duration-[520ms] ease-luxury motion-reduce:transition-none",
                overDark ? "focus-visible:ring-offset-lux-ink/35" : "focus-visible:ring-offset-white/25",
                "focus-visible:ring-2 focus-visible:ring-lux-gold/[0.65] focus-visible:ring-offset-2",
                "hover:bg-white/[0.03]",
              )}
            >
              <span
                className={cn(
                  "font-display text-[1.3125rem] font-normal leading-[1.03] tracking-[-0.03em] md:text-[1.4rem]",
                  overDark ?
                    "text-lux-paper/96 [text-shadow:0_10px_32px_rgba(52,46,42,0.18)]"
                  : "text-lux-ink/[0.92]",
                )}
              >
                {siteConfig.shortName}
              </span>
              <span
                className={cn(
                  "font-sans text-[0.5625rem] font-semibold uppercase leading-none tracking-[0.36em] md:text-[0.578125rem]",
                  overDark ? "text-lux-paper/42" : "text-lux-ink/30",
                )}
              >
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
