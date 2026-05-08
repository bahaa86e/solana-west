import type { ReactNode } from "react";

import { SkipLink } from "@/components/layout/skip-link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StickyMobileCtaBar } from "@/components/layout/sticky-mobile-cta";
import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-floating-button";
import { AnalyticsInteractionLayer } from "@/components/tracking/analytics-interaction-layer";
import { cn } from "@/lib/utils";

type SiteShellProps = {
  children: ReactNode;
  className?: string;
};

export function SiteShell({ children, className }: SiteShellProps) {
  return (
    <AnalyticsInteractionLayer>
      <div
        className={cn(
          "flex min-h-screen flex-col bg-lux-paper text-lux-ink antialiased",
          className,
        )}
      >
        <SkipLink />
        <SiteHeader />
        <div
          className="flex flex-1 flex-col pb-[calc(7rem+env(safe-area-inset-bottom))] pt-0 lg:pb-0"
          id="site-content"
        >
          {children}
        </div>
        <SiteFooter />
        <StickyMobileCtaBar />
        <WhatsAppFloatingButton />
      </div>
    </AnalyticsInteractionLayer>
  );
}
