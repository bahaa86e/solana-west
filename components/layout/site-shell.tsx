import type { ReactNode } from "react";

import { GlobalCroRail } from "@/components/conversion/global-cro-rail";
import { SkipLink } from "@/components/layout/skip-link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StickyMobileCtaBar } from "@/components/layout/sticky-mobile-cta";
import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-floating-button";
import { MobileMain } from "@/components/layout/mobile-main";
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
          "lux-page-canvas flex min-h-screen flex-col text-lux-ink antialiased",
          className,
        )}
      >
        <SkipLink />
        <SiteHeader />
        <GlobalCroRail />
        <MobileMain id="site-content">
          {children}
        </MobileMain>
        <SiteFooter />
        <StickyMobileCtaBar />
        <WhatsAppFloatingButton />
      </div>
    </AnalyticsInteractionLayer>
  );
}
