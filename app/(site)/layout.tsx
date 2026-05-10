import type { ReactNode } from "react";

import { SiteShell } from "@/components/layout/site-shell";

/** English / default locale routes — unchanged URL surface (`/`, `/prices`, …). */
export default function EnglishSiteLayout({ children }: { children: ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
