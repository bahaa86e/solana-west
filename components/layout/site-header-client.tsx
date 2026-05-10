"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

/** Over hero — softer translucency, less ink */
const glassShellDark = cn(
  "rounded-[1.25rem] border border-white/[0.095] bg-white/[0.065]",
  "shadow-[0_28px_72px_-42px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.08)]",
  "ring-1 ring-inset ring-white/[0.055]",
  "backdrop-blur-[26px] backdrop-saturate-[1.2] supports-[backdrop-filter]:bg-black/[0.08]",
);

function HeaderBar() {
  const appearance = useHeaderAppearance();
  const overDark = appearance === "overDark";
  const { headerLogo } = siteConfig.branding;

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
              className={cn(
                "group flex max-w-fit items-center gap-3.5 md:gap-4",
                "-m-2 rounded-[13px] p-2 outline-none transition-[background-color] duration-[520ms] ease-luxury motion-reduce:transition-none",
                overDark ? "focus-visible:ring-offset-lux-ink/35" : "focus-visible:ring-offset-white/25",
                "focus-visible:ring-2 focus-visible:ring-lux-gold/[0.65] focus-visible:ring-offset-2",
                "hover:bg-white/[0.03]",
              )}
            >
              <span
                className={cn(
                  "relative flex shrink-0 items-center justify-center rounded-[11px] p-[0.4375rem] transition-[transform,box-shadow] duration-[520ms] ease-luxury motion-reduce:transition-none motion-reduce:group-hover:translate-y-0",
                  "motion-safe:group-hover:-translate-y-px group-hover:shadow-[0_10px_26px_-18px_rgba(28,26,23,0.12)]",
                  overDark ?
                    cn(
                      "border border-white/[0.14] bg-gradient-to-br from-white/[0.13] to-white/[0.02]",
                      "shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] drop-shadow-[0_8px_32px_rgba(0,0,0,0.35)]",
                    )
                  : cn(
                      "border border-white/[0.22] bg-gradient-to-br from-white/[0.32] to-white/[0.05]",
                      "shadow-[inset_0_1px_0_rgba(255,255,255,0.52)] group-hover:border-white/30 group-hover:[box-shadow:inset_0_1px_0_rgba(255,255,255,0.62)]",
                    ),
                )}
              >
                <Image
                  src={headerLogo.src}
                  alt={headerLogo.suppressProjectWordmark ? headerLogo.alt : ""}
                  width={headerLogo.width}
                  height={headerLogo.height}
                  priority
                  sizes="(max-width: 768px) 132px, 148px"
                  className={cn(
                    "h-[1.5rem] w-auto max-w-[min(7.75rem,32vw)] object-contain object-left transition-[opacity,filter] duration-[520ms] md:h-[1.665rem] md:max-w-[8.375rem]",
                    overDark ?
                      "opacity-[0.97] brightness-[1.1] saturate-[0.92]"
                    : "opacity-[0.93] motion-safe:group-hover:opacity-[0.995]",
                  )}
                />
              </span>
              <div className="min-w-0">
                {headerLogo.suppressProjectWordmark ? null : (
                  <span
                    className={cn(
                      "block font-display text-[1.2875rem] font-normal leading-[1.06] tracking-[-0.02em] transition-colors duration-[520ms] md:text-[1.3975rem]",
                      overDark ?
                        "text-lux-paper/95 [text-shadow:0_18px_48px_rgba(0,0,0,0.42)] group-hover:text-white"
                      : "text-lux-ink/[0.93] motion-safe:group-hover:text-lux-ink",
                    )}
                  >
                    {siteConfig.shortName}
                  </span>
                )}
                <span
                  className={
                    headerLogo.suppressProjectWordmark
                      ? cn(
                          "mt-2 block font-sans text-[0.59625rem] font-medium uppercase leading-none tracking-[0.32em] transition-colors md:mt-2 md:text-[0.61375rem] md:tracking-[0.33em]",
                          overDark ?
                            "text-lux-paper/40 motion-safe:group-hover:text-lux-paper/52"
                          : "text-lux-ink/[0.3] motion-safe:group-hover:text-lux-ink/38",
                        )
                      : cn(
                          "mt-1 hidden font-sans text-[0.59625rem] font-medium uppercase leading-none tracking-[0.32em] transition-colors md:mt-[0.3875rem] md:block md:text-[0.61375rem] md:tracking-[0.33em]",
                          overDark ?
                            "text-lux-paper/34 motion-safe:group-hover:text-lux-paper/46"
                          : "text-lux-ink/28 motion-safe:group-hover:text-lux-ink/36",
                        )
                  }
                >
                  {siteConfig.developer}
                </span>
              </div>
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
