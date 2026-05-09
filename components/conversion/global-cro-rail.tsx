"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { Container } from "@/components/ui/container";
import { croCommercialFacts, croMessaging } from "@/data/cro";
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
        "relative z-[41] border-b border-lux-ink/[0.06] bg-gradient-to-r from-[#f6f3ee] via-lux-paper to-[#ede6dd]",
        "shadow-[0_12px_32px_-28px_rgba(10,10,10,0.12)]",
        className,
      )}
      aria-label="Commercial reference summary"
    >
      <Container as="div" className="py-2.5 max-md:py-2 md:py-3">
        <div className="flex flex-col gap-2.5 max-md:gap-2 md:flex-row md:items-center md:justify-between md:gap-6">
          <p className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1.5 text-[10.5px] font-medium uppercase tracking-[0.22em] text-lux-ink/48 max-md:text-[10px] max-md:leading-relaxed md:gap-x-3 md:text-[11px] md:tracking-[0.24em]">
            {railItems.map((bit, index) => (
              <span key={bit} className="inline-flex flex-wrap items-center gap-x-2 md:gap-x-3">
                {index > 0 ?
                  <span className="text-lux-gold/45 md:translate-y-[0.5px]" aria-hidden>
                    ·
                  </span>
                : null}
                <span className="text-lux-ink/68">{bit}</span>
              </span>
            ))}
          </p>

          <Link
            href={siteConfig.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex w-full min-h-[2.875rem] shrink-0 items-center justify-center gap-2 rounded-[8px] max-md:py-2.5 md:w-auto",
              "border border-[#2a3f35]/26 bg-gradient-to-b from-[#344a40]/94 to-[#24332c]/96 px-4 py-2.5 md:px-5",
              "text-[11px] font-semibold uppercase tracking-[0.24em] text-lux-paper/95 shadow-[0_14px_40px_-24px_rgba(12,32,26,0.55)] transition-[filter,transform,box-shadow] duration-400 ease-luxury",
              "hover:brightness-[1.05] active:translate-y-px motion-reduce:transition-none",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-2 focus-visible:ring-offset-lux-paper",
            )}
            data-track="whatsapp_click"
            data-track-placement="global_cro_rail"
          >
            <WhatsAppIcon className="size-[1.05rem] opacity-90" />
            <span className="whitespace-normal text-center leading-snug md:whitespace-nowrap">
              {croMessaging.railWhatsAppLabel}
            </span>
          </Link>
        </div>
      </Container>
    </aside>
  );
}
