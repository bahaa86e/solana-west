/**
 * Public measurement IDs — use env overrides in deployments.
 * Set `NEXT_PUBLIC_GOOGLE_ADS_LEAD_SEND_TO` to the exact `AW-xxxxxxxxx/label` pair from Google Ads for lead conversions.
 */

export type TrackingSurface = {
  ga4MeasurementId?: string;
  /** Google Ads property used in `gtag('config', …)` */
  googleAdsPropertyId: string;
  googleAdsLeadSendTo?: string;
  metaPixelId?: string;
  /** First `gtag/js?id=` parameter */
  gtagLoaderId: string;
};

const DEFAULT_GOOGLE_ADS = "AW-17085316447";
const DEFAULT_META = "1150985977106859";

function normalizedLeadSendTo(raw?: string): string | undefined {
  const t = raw?.trim();
  if (!t) return undefined;
  return /^AW-\d+\/.+$/i.test(t) ? t : undefined;
}

export function loadTrackingSurface(): TrackingSurface {
  const ga4MeasurementId =
    process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim() || undefined;

  const googleAdsPropertyId =
    process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim() ?? DEFAULT_GOOGLE_ADS;

  const leadSend =
    normalizedLeadSendTo(process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_SEND_TO) ??
    normalizedLeadSendTo(process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LEAD_SEND_TO);

  return {
    ga4MeasurementId,
    googleAdsPropertyId,
    googleAdsLeadSendTo: leadSend,
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ?? DEFAULT_META,
    gtagLoaderId: ga4MeasurementId ?? googleAdsPropertyId,
  };
}

export function hasActiveTrackingTags(surface: TrackingSurface): boolean {
  return Boolean(surface.gtagLoaderId || surface.metaPixelId);
}
