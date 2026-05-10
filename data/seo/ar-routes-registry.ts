/**
 * Arabic-facing Route SEO payloads (`locale: "ar"`) — canonical paths beneath `/ar`.
 * Mirrors issuance-safe factual framing aligned with English hubs without overwriting EN defs.
 */

import { defaultOpenGraphImagePath } from "@/data/seo/defaults";
import { solanaWestMedia } from "@/data/media/solana-west";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { siteConfig } from "@/data/site";

const OG = defaultOpenGraphImagePath;
const nx = siteConfig.name;
const ora = siteConfig.developer;

export const aboutPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/ora-developers-egypt",
  title: `ORA Developers Egypt وسولانا ويست | ملف المطوّر`,
  description: `${nx} من تطوير ${ora} على محور الضبعة — مخطط ~316 فداناً بكثافة مُخفَّفة. هذه الصفحة تأطير مؤسسي للمشتري بدون ادِّعاء تمثيل رسمي خارج قنوات الحجز.`,
  openGraphImagePath: OG,
  keywords: ["ORA Developers مصر", "سولانا ويست", "ناجيب ساويرس", "مشاريع ORA"],
};

export const projectsHubPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/projects",
  title: `مشاريع ORA وغرب القاهرة | ${nx}`,
  description: `فهرس عربي لمسارات المشاريع المنشورة على هذا النطاق، بما فيها ${nx} في الزيادة الجديدة — نية شراء وأسعار وموقع وأسئلة شائعة مع إصدار المطور.`,
  openGraphImagePath: OG,
  keywords: ["مشاريع ORA", "سولانا ويست", "الزيادة الجديدة عقارات"],
};

export const contactPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/contact",
  title: `تواصل مبيعات ${nx} | ${ora}`,
  description: `تواصل مع مكتب ${ora} لـ${nx}: أسعار، خطة سداد، جولات ميدانية. الهاتف ${siteConfig.phone} والبريد ${siteConfig.email}.`,
  openGraphImagePath: OG,
  keywords: ["تواصل سولانا ويست", "مبيعات ORA", "حجز زيارة"],
};

export const faqPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-faq",
  title: `الأسئلة الشائعة — ${nx} | أسعار ودفع وموقع`,
  description: `مرجع عربي لأسئلة المشتري حول ${nx} من ${ora}: أسعار، خطة سداد (5% / حتى 10 سنوات)، موقع محور الضبعة، أنواع الوحدات، تسليم من 2027.`,
  openGraphImagePath: OG,
  keywords: ["أسئلة سولانا ويست", "خطة سداد", "ORA مصر"],
};

export const pricesPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-prices",
  title: `أسعار سولانا ويست الزيادة الجديدة | ${ora}`,
  description: `مرجع بدءاً من 9.8 مليون جنيه كسياق تسويقي لـ${nx}. اطلب جدول الإصدار الحي للفئة قبل الحجز عبر قنوات ${ora}.`,
  openGraphImagePath: OG,
  keywords: ["أسعار سولانا ويست", "فيلات الزيادة الجديدة"],
};

export const paymentPlanPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-payment-plan",
  title: `خطة سداد سولانا ويست | ${ora}`,
  description: `${nx}: مقدم 5% وأقساط حتى عشر سنوات كتأطير تسويقي؛ التسليم من 2027 على مستوى المجمع. التفاصيل الملزمة في عقد الإصدار.`,
  openGraphImagePath: OG,
  keywords: ["خطة سداد سولانا ويست", "أقساط 10 سنوات"],
};

export const locationPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-location",
  title: `موقع سولانا ويست | محور الضبعة وغرب القاهرة | ${ora}`,
  description: `${nx} على محور الضبعة مع سياق وصول لطريق الإسكندرية الصحراوي وحِلقة الربط المركزية. ذكر وصول تقريبي لوسط القاهرة حسب المواد المتاحة — تحقّق قبل التخطيط.`,
  openGraphImagePath: OG,
  keywords: ["موقع سولانا ويست", "محور الضبعة"],
};

export const masterPlanPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-master-plan",
  title: `المخطط العام — ${nx} | ~316 فدان`,
  description: `مخطط منخفض الكثافة بمساحة كبرى نحو 316 فداناً — مشاة ومساحات خضراء وتسلسل وحدات. التفاصيل القطعية وفق الإصدار من ${ora}.`,
  openGraphImagePath: solanaWestMedia.masterplan.src,
  keywords: ["مخطط سولانا ويست"],
};

export const blogIndexPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/blog",
  title: `مدونة ${nx} وORA | الزيادة وغرب القاهرة`,
  description: `مقالات إنجليزية بتغطية عربية لمحركات البحث — تأطير الأسعار والدفع والمقارنات وفق المواد المتاحة. تبقى الروابط الداخلية عربية.`,
  openGraphImagePath: OG,
  keywords: ["مدونة سولانا ويست", "ORA مصر"],
};

export const villasPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-villas",
  title: `فيلات مستقلة — ${nx} | ${ora}`,
  description: `فيلات مرتفعة بإطلالات خضراء ضمن ${nx}. التشطيب متكامل أو عظم حسب الإصدار — اطلب الفئة قبل الحجز.`,
  openGraphImagePath: OG,
  keywords: ["فيلات سولانا ويست"],
};

export const townhousesPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-townhouses",
  title: `تاون هاوس — ${nx} | ${ora}`,
  description: `تاون هاوس على محاور مشاة ومساحات منسّقة ضمن مخطط ORA بالزيادة الجديدة — الشريحة السعرية عبر الإصدار.`,
  openGraphImagePath: OG,
  keywords: ["تاون هاوس الزيادة الجديدة"],
};

export const apartmentsPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-apartments",
  title: `شقق — ${nx} | ${ora}`,
  description: `شقق بتشطيب متكامل ضمن مخطط منخفض الكثافة — تحقّق من المخزون والواجهات مع المكتب المعتمد قبل الحجز.`,
  openGraphImagePath: OG,
  keywords: ["شقق سولانا ويست"],
};

export const twinHousesPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-twin-houses",
  title: `توين هاوس — ${nx} | ${ora}`,
  description: `وحدات مزدوجة بخط مشترك متحكم وفِرَق أوسع للواجهة مقارنة بالتاون — الشريحة عبر الإصدار.`,
  openGraphImagePath: OG,
  keywords: ["توين هاوس سولانا ويست"],
};

export const privacyPolicyPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/privacy-policy",
  title: `سياسة الخصوصية — ${siteConfig.shortName}`,
  description: `كيف يُدار النموذج والتحليلات والمراسلات عبر هذا النطاق — المسارات التشغيلية تخدم الاستفسار وتوجيهه للمكتب المعتمد لـ${ora}.`,
  keywords: ["خصوصية سولانا ويست"],
};

export const comparisonPagesSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/comparison-pages",
  title: `مقارنة مجمعات غرب القاحرة وسياق ${nx}`,
  description: `منظور تقييم بين ${nx} ومشاريع زيادة جديدة بارزة — كثافة ووصول، دون ادِّعاء شراكات أو ضمان أسعار.`,
  openGraphImagePath: OG,
  keywords: ["مقارنة مشاريع الزيادة الجديدة"],
};

export const investmentGuidesPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/solana-west-investment",
  title: `أدلة استثمارية — غرب القاهرة و${nx}`,
  description: `تأطير طويل الأمد لمشتري الزيادة: نضج الشوارع الطولية، تقارب Sphinx Airport والطلب على مخططات منخفضة الكثافة مثل ${nx}. لا نصائح استثمارية.`,
  openGraphImagePath: OG,
  keywords: ["استثمار الزيادة الجديدة"],
};

/** Solana West project hub (Arabic pathname stays under `/ar/projects`). */
export const solanaWestProjectPageSeoAr: RouteSeoDefinition = {
  locale: "ar",
  path: "/ar/projects/solana-west",
  title: `${nx} — مخطط ORA بالزيادة الجديدة | فيلات وشقق`,
  description: `${nx} بواجهة عربية: ~316 فداناً، مخفّف الكثافة، طرق مشاة ومساحات خضراء، أسعار بدءاً من 9.8 مليون ومقدّم 5%. التحقق بالإصدار من ${ora}.`,
  openGraphImagePath: OG,
  keywords: [`${nx} ORA`, "مشروع سولانا ويست الزيادة"],
};
