import { siteConfig } from "@/data/site";

/** FormSubmit.co — direct POST lead delivery (ZED East pattern). */
export const formSubmitConfig = {
  action: "https://formsubmit.co/bahaa86e@gmail.com",
  subject: "New Lead: Solana West",
  siteOrigin: siteConfig.url.replace(/\/$/, ""),
  captcha: "false",
  template: "table",
} as const;

export function formSubmitThankYouUrl(pathname: string, rid: string): string {
  const path = pathname.startsWith("/ar") ? "/ar/thank-you" : "/thank-you";
  return `${formSubmitConfig.siteOrigin}${path}?conversion=lead&rid=${encodeURIComponent(rid)}`;
}
