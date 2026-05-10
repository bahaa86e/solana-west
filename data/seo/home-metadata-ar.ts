import { defaultOpenGraphImagePath } from "@/data/seo/defaults";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { siteConfig } from "@/data/site";

/** Arabic homepage metadata — canonical `/ar` with hreflang twin to `/`. */
export const homeMetadataAr: RouteSeoDefinition = {
  path: "/ar",
  locale: "ar",
  title: `سولانا ويست الزيادة الجديدة | أسعار وخطة سداد | ${siteConfig.developer}`,
  description:
    `مجمع فاخر بالزيادة الجديدة على محور الضبعة من تطوير ${siteConfig.developer}. ` +
    `من 9.8 مليون جنيه، مقدّم 5%، أقساط حتى 10 سنوات، تسليم اعتباراً من 2027. ` +
    `فيلات وتاون هاوس وتوين هاوس وشقق بتشطيب متكامل أو عظم.`,
  openGraphImagePath: defaultOpenGraphImagePath,
  keywords: [
    "أسعار سولانا ويست",
    "خطة سداد سولانا ويست",
    "ORA Developers مصر",
    "فيلات الزيادة الجديدة",
    "غرب القاهرة مخطط مخضر",
    "محور الضبعة عقارات فاخرة",
  ],
};
