import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/env";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl().origin;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
