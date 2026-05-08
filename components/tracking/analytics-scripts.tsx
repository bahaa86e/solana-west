import Script from "next/script";

import { hasActiveTrackingTags, loadTrackingSurface } from "@/data/tracking-config";

function buildGtagInit(surface: ReturnType<typeof loadTrackingSurface>): string {
  const lines: string[] = [
    "window.dataLayer = window.dataLayer || [];",
    "function gtag(){dataLayer.push(arguments);}",
    "gtag('js', new Date());",
  ];

  if (surface.ga4MeasurementId) {
    lines.push(
      `gtag('config', ${JSON.stringify(surface.ga4MeasurementId)}, { send_page_view: true });`,
    );
  }

  const awId = surface.googleAdsPropertyId;
  if (surface.ga4MeasurementId && awId && awId !== surface.ga4MeasurementId) {
    lines.push(`gtag('config', ${JSON.stringify(awId)});`);
  }

  if (!surface.ga4MeasurementId && awId) {
    lines.push(
      `gtag('config', ${JSON.stringify(awId)}, { send_page_view: true });`,
    );
  }

  return lines.join("\n");
}

function buildMetaInit(pixelId: string): string {
  const idLiteral = JSON.stringify(pixelId);
  return `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(
window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', ${idLiteral});
fbq('track', 'PageView');
`.trim();
}

/**
 * Deferred third-party loaders — wired from centralized config (no stray inline tags in routes).
 */
export function AnalyticsScripts() {
  const surface = loadTrackingSurface();
  if (!hasActiveTrackingTags(surface)) {
    return null;
  }

  const loaderQs = encodeURIComponent(surface.gtagLoaderId);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderQs}`}
        strategy="afterInteractive"
      />
      <Script
        id="lux-gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: buildGtagInit(surface) }}
      />
      {surface.metaPixelId ? (
        <>
          <Script
            id="lux-meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: buildMetaInit(surface.metaPixelId) }}
          />
          {/* Meta-required 1×1 beacon — intentional raw img (not editorial content) */}
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height={1}
              width={1}
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${encodeURIComponent(surface.metaPixelId)}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      ) : null}
    </>
  );
}
