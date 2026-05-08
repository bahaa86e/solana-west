import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

/**
 * Editorial FAB — above sticky mobile CTA (`z-[55]`).
 * Neutral outer pulse + gentle shadow; honours `prefers-reduced-motion`.
 */
export function WhatsAppFloatingButton({ className }: Props) {
  const aria = `WhatsApp — request pricing or payment plan for ${siteConfig.shortName}`;

  return (
    <a
      href={siteConfig.whatsAppUrl}
      className={cn(
        "fixed z-[56] flex size-[3.5rem] items-center justify-center outline-none max-lg:bottom-[calc(5.25rem+env(safe-area-inset-bottom,0px))] max-lg:right-4 lg:bottom-11 lg:right-12 lg:size-[3.625rem] xl:bottom-12 xl:right-12",
        "transition-transform duration-[420ms] ease-luxury motion-reduce:transition-none active:translate-y-px motion-reduce:active:translate-y-0",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lux-gold focus-visible:ring-offset-4 focus-visible:ring-offset-lux-paper",
        className,
      )}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={aria}
      data-track="whatsapp_click"
    >
      <span
        className={cn(
          "pointer-events-none absolute -inset-[0.4375rem] rounded-full bg-lux-ink/[0.05]",
          "motion-safe:animate-lux-wa-breathe-ring motion-reduce:animate-none",
        )}
        aria-hidden
      />
      <span
        className={cn(
          "relative flex size-full items-center justify-center rounded-full",
          "border border-lux-ink/[0.07] bg-gradient-to-b from-lux-paper to-lux-mist/95 text-lux-ink",
          "ring-1 ring-inset ring-white/45",
          "motion-safe:animate-lux-wa-breathe-shell motion-reduce:animate-none",
          "motion-reduce:shadow-[0_16px_44px_-24px_rgba(10,10,10,0.28)]",
          "transition-[color,filter] duration-[420ms] ease-luxury motion-reduce:transition-none",
          "hover:text-lux-ink/92 hover:[filter:brightness(1.02)] motion-reduce:hover:[filter:none]",
        )}
        aria-hidden
      >
        <WhatsAppIcon className="relative z-[1] size-[1.48rem] opacity-[0.88]" aria-hidden />
      </span>
    </a>
  );
}
