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

const glassShellDocument =
  "rounded-[1.2rem] border border-white/45 bg-lux-paper/46 shadow-[0_22px_58px_-32px_rgba(10,10,10,0.24),0_1px_0_rgba(255,255,255,0.58)_inset] backdrop-blur-[22px] backdrop-saturate-150 supports-[backdrop-filter]:bg-lux-paper/36";

const glassShellDark =
  "rounded-[1.2rem] border border-white/[0.14] bg-lux-ink/32 shadow-[0_28px_80px_-40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-[26px] backdrop-saturate-[1.65] supports-[backdrop-filter]:bg-lux-ink/[0.26]";

function HeaderBar() {
  const appearance = useHeaderAppearance();
  const overDark = appearance === "overDark";
  const { headerLogo } = siteConfig.branding;

  return (
    <header className="sticky top-0 z-50 w-full">
      <Container as="div" className="pt-3 pb-2 md:pt-4 md:pb-3">
        <motion.div
          layout
          transition={{ duration: 0.4, ease: easeLux }}
          className={cn(
            overDark ? glassShellDark : glassShellDocument,
            "flex min-h-[3.5rem] items-center justify-between gap-6 px-4 py-2.5 md:min-h-[3.8125rem] md:gap-8 md:px-6 md:py-3",
          )}
        >
          <div className="min-w-0 flex-1 md:max-w-[min(28rem,44vw)] lg:max-w-none">
            <Link
              href="/"
              className={cn(
                "group flex max-w-fit items-center gap-3 md:gap-3.5",
                "rounded-lg outline-none transition-[background-color,box-shadow] duration-500 ease-luxury motion-reduce:transition-none",
                overDark ? "focus-visible:ring-offset-lux-ink/40" : "focus-visible:ring-offset-lux-paper/35",
                "focus-visible:ring-2 focus-visible:ring-lux-gold/80 focus-visible:ring-offset-2",
                overDark ? "hover:bg-white/[0.07]" : "hover:bg-white/[0.07]",
              )}
            >
              <span
                className={cn(
                  "relative flex shrink-0 items-center justify-center rounded-xl p-1.5 ring-1 transition-[box-shadow,transform] duration-500 ease-luxury motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 group-hover:-translate-y-px",
                  overDark
                    ? "bg-gradient-to-br from-white/18 to-white/[0.04] ring-white/22 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] drop-shadow-[0_6px_28px_rgba(0,0,0,0.45)]"
                    : "bg-gradient-to-br from-white/38 to-white/[0.06] ring-white/28 shadow-[inset_0_1px_0_rgba(255,255,255,0.42)] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]",
                )}
              >
                <Image
                  src={headerLogo.src}
                  alt={headerLogo.suppressProjectWordmark ? headerLogo.alt : ""}
                  width={headerLogo.width}
                  height={headerLogo.height}
                  priority
                  sizes="(max-width: 768px) 120px, 140px"
                  className={cn(
                    "h-[1.55rem] w-auto max-w-[min(7.5rem,30vw)] object-contain object-left transition-[opacity,filter] duration-500 md:h-[1.6875rem] md:max-w-[8.25rem]",
                    overDark ?
                      "opacity-[0.98] brightness-[1.12] contrast-[1.05] saturate-[0.92]"
                    : "opacity-[0.96] group-hover:opacity-100",
                  )}
                />
              </span>
              <div className="min-w-0">
                {headerLogo.suppressProjectWordmark ? null : (
                  <span
                    className={cn(
                      "block font-display text-[1.32rem] font-medium leading-[1.06] tracking-[-0.022em] transition-colors duration-500 md:text-[1.42rem]",
                      overDark ?
                        "text-lux-paper [text-shadow:0_14px_40px_rgba(0,0,0,0.45)] group-hover:text-white"
                      : "text-lux-ink/96 group-hover:text-lux-ink",
                    )}
                  >
                    {siteConfig.shortName}
                  </span>
                )}
                <span
                  className={
                    headerLogo.suppressProjectWordmark
                      ? cn(
                          "mt-1.5 block font-sans text-[0.60125rem] font-medium uppercase leading-none tracking-[0.28em] transition-colors md:mt-1.5 md:text-[0.625rem] md:tracking-[0.3em]",
                          overDark ? "text-lux-paper/44 group-hover:text-lux-paper/58" : "text-lux-ink/34 group-hover:text-lux-ink/44",
                        )
                      : cn(
                          "mt-1 hidden font-sans text-[0.60125rem] font-medium uppercase leading-none tracking-[0.28em] transition-colors md:mt-1.5 md:block md:text-[0.625rem] md:tracking-[0.3em]",
                          overDark ? "text-lux-paper/38 group-hover:text-lux-paper/52" : "text-lux-ink/32 group-hover:text-lux-ink/40",
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
