/**
 * Bilingual path map — English canonical pathnames (as used today) ↔ Arabic SEO pathnames under `/ar`.
 * Internal links in Arabic UI must use `ar` values only; English UI uses `en`.
 */

import type { SiteLocale } from "@/lib/i18n/locale";

export const AR_PREFIX = "/ar" as const;

/** English pathname (e.g. `/prices`, `/`) → Arabic pathname. */
export const englishPathToArabicPath: Record<string, string> = {
  "/": "/ar",
  "/about": "/ar/ora-developers-egypt",
  "/contact": "/ar/contact",
  "/projects": "/ar/projects",
  "/projects/solana-west": "/ar/projects/solana-west",
  "/properties/villas": "/ar/solana-west-villas",
  "/properties/townhouses": "/ar/solana-west-townhouses",
  "/properties/apartments": "/ar/solana-west-apartments",
  "/properties/twin-houses": "/ar/solana-west-twin-houses",
  "/payment-plan": "/ar/solana-west-payment-plan",
  "/prices": "/ar/solana-west-prices",
  "/location": "/ar/solana-west-location",
  "/master-plan": "/ar/solana-west-master-plan",
  "/faq": "/ar/solana-west-faq",
  "/blog": "/ar/blog",
  "/investment-guides": "/ar/solana-west-investment",
  "/comparison-pages": "/ar/comparison-pages",
  "/privacy-policy": "/ar/privacy-policy",
  "/thank-you": "/ar/thank-you",
};

/** Arabic pathname → English pathname (blog slugs stay aligned). */
export const arabicPathToEnglishPath: Record<string, string> = Object.fromEntries(
  Object.entries(englishPathToArabicPath).map(([en, ar]) => [ar, en]),
) as Record<string, string>;

/** English blog article path → Arabic twin. */
export function arabicBlogArticlePath(slug: string): string {
  return `${AR_PREFIX}/blog/${slug}`;
}

/** Arabic blog article → English. */
export function englishBlogArticlePathFromArabic(pathname: string): string | undefined {
  if (!pathname.startsWith(`${AR_PREFIX}/blog/`)) return undefined;
  const slug = pathname.slice(`${AR_PREFIX}/blog/`.length);
  return `/blog/${slug}`;
}

export function localizedPathname(pathname: string, locale: SiteLocale): string {
  if (locale === "ar") {
    if (pathname === "/") return "/ar";
    const direct = englishPathToArabicPath[pathname];
    if (direct) return direct;
    if (pathname.startsWith("/blog/") && pathname !== "/blog") {
      return arabicBlogArticlePath(pathname.slice("/blog/".length));
    }
    return pathname;
  }
  if (pathname.startsWith(`${AR_PREFIX}/blog/`)) {
    return englishBlogArticlePathFromArabic(pathname) ?? pathname;
  }
  if (pathname.startsWith(`${AR_PREFIX}/`)) {
    return arabicPathToEnglishPath[pathname] ?? pathname;
  }
  if (pathname === "/ar") return "/";
  return pathname;
}

export function alternatePairForPathname(pathname: string): { enPath: string; arPath: string } | undefined {
  if (pathname.startsWith(`${AR_PREFIX}/blog/`)) {
    const slug = pathname.slice(`${AR_PREFIX}/blog/`.length);
    return { enPath: `/blog/${slug}`, arPath: pathname };
  }
  if (pathname.startsWith("/blog/")) {
    const slug = pathname.slice("/blog/".length);
    return { enPath: pathname, arPath: arabicBlogArticlePath(slug) };
  }
  if (pathname === "/ar" || pathname.startsWith(`${AR_PREFIX}/`)) {
    const en = arabicPathToEnglishPath[pathname];
    if (!en) return undefined;
    return { enPath: en, arPath: pathname };
  }
  const ar = englishPathToArabicPath[pathname];
  if (!ar) return undefined;
  return { enPath: pathname, arPath: ar };
}
