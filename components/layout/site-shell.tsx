import type { ReactNode } from "react";

import { GlobalCroRail } from "@/components/conversion/global-cro-rail";
import { DocumentLangBridge } from "@/components/i18n/document-lang-bridge";
import { EditorialCopyProvider } from "@/components/i18n/editorial-copy-context";
import { SiteLocaleProvider } from "@/components/i18n/site-locale-context";
import { SiteAtmosphereField } from "@/components/atmosphere/site-atmosphere-field";
import { SkipLink } from "@/components/layout/skip-link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StickyMobileCtaBar } from "@/components/layout/sticky-mobile-cta";
import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-floating-button";
import { MobileMain } from "@/components/layout/mobile-main";
import { AnalyticsInteractionLayer } from "@/components/tracking/analytics-interaction-layer";
import type { SiteLocale } from "@/lib/i18n/locale";
import { cn } from "@/lib/utils";

type SiteShellProps = {
  children: ReactNode;
  className?: string;
  /** English surface remains root (`/`); Arabic editorial lives under `/ar`. */
  locale?: SiteLocale;
};

export function SiteShell({ children, className, locale = "en" }: SiteShellProps) {
  return (
    <SiteLocaleProvider locale={locale}>
      <DocumentLangBridge locale={locale} />
      <EditorialCopyProvider locale={locale}>
        <AnalyticsInteractionLayer>
          <div
            className={cn(
              "lux-page-canvas relative flex min-h-screen flex-col antialiased text-lux-ink",
              locale === "ar" &&
                cn(
                  "font-arabic leading-[1.85] tracking-[0.01em]",
                  "text-[1.035rem]",
                  "md:text-body-lg [&_h1]:font-arabic [&_h2]:font-arabic [&_h3]:font-arabic",
                ),
              className,
            )}
            dir={locale === "ar" ? "rtl" : "ltr"}
            lang={locale === "ar" ? "ar" : "en"}
          >
            <SiteAtmosphereField />
            <div className="relative z-[1] flex min-h-screen flex-1 flex-col">
              <SkipLink />
              <SiteHeader />
              <GlobalCroRail />
              <MobileMain id="site-content">{children}</MobileMain>
              <SiteFooter />
              <StickyMobileCtaBar />
              <WhatsAppFloatingButton />
            </div>
          </div>
        </AnalyticsInteractionLayer>
      </EditorialCopyProvider>
    </SiteLocaleProvider>
  );
}
