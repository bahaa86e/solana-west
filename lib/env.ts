import { siteConfig } from "@/data/site";

/** Canonical origin — single source: `siteConfig.url` */
export function getSiteUrl(): URL {
  const raw =
    typeof siteConfig.url === "string" && siteConfig.url.length > 0
      ? siteConfig.url
      : "https://www.solanawestprices.com";
  return new URL(raw.endsWith("/") ? raw.slice(0, -1) : raw);
}

/** Absolute URL for paths under `public/` (starts with `/`) */
export function toAbsoluteSiteUrl(pathnameWithLeadingSlash: string): string {
  const base = getSiteUrl().origin;
  const path = pathnameWithLeadingSlash.startsWith("/")
    ? pathnameWithLeadingSlash
    : `/${pathnameWithLeadingSlash}`;
  return new URL(path, base).toString();
}
