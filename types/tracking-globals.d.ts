export {};

declare global {
  interface Window {
    /** Google tag / Ads / GA4 queue */
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    /** Meta Pixel queue */
    fbq?: (...args: unknown[]) => void;
    _fbq?: Window["fbq"];
  }
}
