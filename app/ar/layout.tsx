import type { ReactNode } from "react";

import { SiteShell } from "@/components/layout/site-shell";

export default function ArabicSiteLayout({ children }: { children: ReactNode }) {
  return <SiteShell locale="ar">{children}</SiteShell>;
}
