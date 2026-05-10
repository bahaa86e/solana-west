"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { Container } from "@/components/ui/container";
import { croCommercialFacts, croMessaging, croPrivateDeskTagline } from "@/data/cro";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const hiddenPaths = new Set(["/", "/thank-you", "/privacy-policy"]);

export function GlobalCroRail({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";

  if (hiddenPaths.has(pathname)) return null;

  const railItems = [
    croCommercialFacts.startingFrom,
    croCommercialFacts.downPayment,
    croCommercialFacts.installments,
    croCommercialFacts.delivery,
  ] as const;

  return (
    <aside
      className={cn(
        "relative z-[41] border-b border-lux-ink/[0.045] bg-gradient-to-r from-[#f5f3ef] via-lux-paper to-[#ebe6df]",
        "shadow-[0_8px_24px_-22px_rgba(28,26,23,0.08)]",
        className,
      )}
      aria-label="Commercial reference and private desk contact"
    >
      <Container as="div" className="py-2.5 max-md:py-2 md:py-3.5">
        <div className="flex flex-col gap-3.5 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="min-w-0 flex-1">
            <p className="font-sans text-[9.5px] font-semibold uppercase tracking-[0.28em] text-lux-ink/34 md:text-[10px]">
              {croMessaging.railEyebrow} · {croPrivateDeskTagline}
            </p>
            <p className="mt-2 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1.5 text-[10.5px] font-medium uppercase tracking-[0.2em] text-lux-ink/48 max-md:text-[10px] md:mt-2.5 md:gap-x-3 md:text-[11px] md:tracking-[0.22em]">
              {railItems.map((bit, index) => (
                <span key={bit} className="inline-flex flex-wrap items-center gap-x-2 md:gap-x-3">
                  {index > 0 ?
                    <span className="text-lux-gold/28 md:translate-y-[0.5px]" aria-hidden>
                      ·
                    </span>
                  : null}
                  <span className="text-lux-ink/72">{bit}</span>
                </span>
              ))}
            </p>
          </div>

          <Link
            href={siteConfig.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex w-full shrink-0 flex-col items-stretch justify-center gap-1.5 rounded-[8px] border border-[#3a5046]/22 bg-gradient-to-b from-[#3d5248]/90 to-[#2a3832]/92 px-4 py-3 md:w-auto md:min-w-[min(22rem,100%)]",
              "text-lux-paper shadow-[0_10px_30px_-22px_rgba(18,38,30,0.28)] transition-[filter] duration-400 ease-luxury",
              "hover:brightness-[1.02] active:opacity-[0.96] motion-reduce:transition-none",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-2 focus-visible:ring-offset-lux-paper md:flex-row md:items-center md:gap-4 md:py-3 md:pl-5 md:pr-6",
            )}
            data-track="whatsapp_click"
            data-track-placement="global_cro_rail"
          >
            <span className="flex items-center justify-center gap-2.5 md:justify-start">
              <WhatsAppIcon className="size-[1.1rem] shrink-0 opacity-90" />
              <span className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] md:text-left">
                {croMessaging.railWhatsAppLabel}
              </span>
            </span>
            <span className="px-1 text-center text-[9.5px] font-normal uppercase leading-snug tracking-[0.18em] text-lux-paper/52 md:max-w-[20rem] md:flex-1 md:text-left md:tracking-[0.2em]">
              {croMessaging.railWhatsAppSubline}
            </span>
          </Link>
        </div>
      </Container>
    </aside>
  );
}
