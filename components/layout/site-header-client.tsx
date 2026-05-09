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

/** Light pages: airy cinematic glass — high blur, restrained fill */
const glassShellDocument = cn(
  "rounded-[1.375rem] border border-white/55 bg-white/[0.07]",
  "shadow-[0_36px_80px_-42px_rgba(10,10,10,0.16)]",
  "ring-1 ring-inset ring-white/[0.45]",
  "backdrop-blur-[30px] backdrop-saturate-[1.35] supports-[backdrop-filter]:bg-white/[0.05]",
);

/** Hero / dark overlays: luminous edge, deep translucency */
const glassShellDark = cn(
  "rounded-[1.375rem] border border-white/[0.115] bg-lux-ink/[0.14]",
  "shadow-[0_38px_90px_-48px_rgba(0,0,0,0.58),inset_0_1px_0_rgba(255,255,255,0.1)]",
  "ring-1 ring-inset ring-white/[0.08]",
  "backdrop-blur-[34px] backdrop-saturate-[1.55] supports-[backdrop-filter]:bg-black/[0.12]",
);

function HeaderBar() {
  const appearance = useHeaderAppearance();
  const overDark = appearance === "overDark";
  const { headerLogo } = siteConfig.branding;

  return (
    <header className="sticky top-0 z-50 w-full">
      <Container as="div" className="pt-3.5 pb-2 max-lg:pt-3.5 md:pt-5 md:pb-3">
        <motion.div
          layout
          transition={{ duration: 0.52, ease: easeLux }}
          className={cn(
            overDark ? glassShellDark : glassShellDocument,
            "flex min-h-[3.5625rem] items-center justify-between gap-4 max-lg:min-h-[3.75rem] max-lg:gap-5 max-lg:px-[1.125rem] max-lg:py-[0.6875rem] md:min-h-[3.9375rem] md:gap-10 md:px-7 md:py-3",
            "px-[1.0625rem] py-[0.62rem]",
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
                "hover:bg-white/[0.04]",
              )}
            >
              <span
                className={cn(
                  "relative flex shrink-0 items-center justify-center rounded-[11px] p-[0.4375rem] transition-[transform,box-shadow] duration-[520ms] ease-luxury motion-reduce:transition-none motion-reduce:group-hover:translate-y-0",
                  "motion-safe:group-hover:-translate-y-px group-hover:shadow-[0_12px_32px_-20px_rgba(10,10,10,0.25)]",
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
