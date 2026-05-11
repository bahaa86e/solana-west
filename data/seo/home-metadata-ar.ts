import { defaultOpenGraphImagePath } from "@/data/seo/defaults";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { siteConfig } from "@/data/site";

/** Arabic homepage metadata — canonical `/ar` with hreflang twin to `/`. */
export const homeMetadataAr: RouteSeoDefinition = {
  path: "/ar",
  locale: "ar",
  title: `سولانا ويست نيو زايد | أسعار وتقسيط`,
  description:
    `سولانا ويست نيو زايد من ${siteConfig.developer}: أسعار تبدأ من 9.8 مليون جنيه، تقسيط حتى 10 سنوات، فلل وشقق داخل مجتمع فاخر على محور الضبعة.`,
  openGraphImagePath: defaultOpenGraphImagePath,
  keywords: [
    "أسعار سولانا ويست",
    "تقسيط سولانا ويست",
    "ORA Developer Egypt",
    "فلل سولانا ويست",
    "شقق سولانا ويست",
    "نيو زايد عقارات فاخرة",
    "غرب القاهرة مخطط فاخر",
    "محور الضبعة عقارات فاخرة",
  ],
};
