import { defaultOpenGraphImagePath } from "@/data/seo/defaults";
import { solanaWestMedia } from "@/data/media/solana-west";
import type { RouteSeoDefinition } from "@/data/seo/types";
import { siteConfig } from "@/data/site";
import { getSiteUrl } from "@/lib/env";

const OG = defaultOpenGraphImagePath;
const nx = `${siteConfig.name}`;
const ora = `${siteConfig.developer}`;

/** Interior indexable routes — investor intent, factual scope per URL */
export const aboutPageSeo: RouteSeoDefinition = {
  path: "/about",
  title: `About Solana West New Zayed | ${ora}`,
  description: `${nx} by ${ora}, chaired by ${siteConfig.founder}. A 316-acre low-density New Zayed community with villas, townhouses, twin houses, apartments, and sales terms on request.`,
  openGraphImagePath: OG,
  keywords: [
    "ORA Developers Egypt",
    "Naguib Sawiris real estate",
    `${nx} developer`,
    "New Zayed master plan",
  ],
};

export const projectsHubPageSeo: RouteSeoDefinition = {
  path: "/projects",
  title: `${ora} Projects | Solana West New Zayed`,
  description: `Browse the ${ora} project hub for ${nx}: a 316-acre New Zayed compound with unit types, prices, payment plan, location, master plan, and buyer FAQs.`,
  openGraphImagePath: OG,
  keywords: [
    `${nx} ORA`,
    "ORA Developers Egypt projects",
    "New Zayed master-planned compounds",
    "West Cairo ORA villas",
    "Naguib Sawiris ORA pipeline",
    `${siteConfig.shortName} project hub`,
    "luxury compounds Egypt ORA",
  ],
};

export const contactPageSeo: RouteSeoDefinition = {
  path: "/contact",
  title: `Contact Solana West Sales | ${ora}`,
  description: `Contact ${nx} sales for current prices, payment plan details, available unit types, and site visit requests. Phone ${siteConfig.phone} or email ${siteConfig.email}.`,
  openGraphImagePath: OG,
  keywords: ["Solana West contact", "ORA sales New Zayed", "book site visit Solana West"],
};

export const faqPageSeo: RouteSeoDefinition = {
  path: "/faq",
  title: `Solana West FAQ | Prices, Payment Plan & New Zayed`,
  description: `Buyer FAQs for ${nx}: prices from 9.8M EGP, 5% down, installments up to 10 years, delivery from 2027, New Zayed location, unit types, and ORA developer context.`,
  openGraphImagePath: OG,
  keywords: [
    "Solana West FAQ",
    "Solana West prices FAQ",
    "Solana West payment plan FAQ",
    "ORA Developers Egypt FAQ",
    "New Zayed villas FAQ",
    "Solana West delivery 2027",
  ],
};

export const pricesPageSeo: RouteSeoDefinition = {
  path: "/prices",
  title: `Solana West prices New Zayed | ${ora}`,
  description: `${nx} prices start from 9.8M EGP. Request current availability, phase pricing, and apartment, townhouse, twin house, or villa brackets from ${ora} sales.`,
  openGraphImagePath: OG,
  keywords: [
    "Solana West prices",
    "New Zayed villa prices",
    "Solana West from 9.8M",
    "ORA New Zayed pricing",
  ],
};

export const paymentPlanPageSeo: RouteSeoDefinition = {
  path: "/payment-plan",
  title: `Solana West payment plan | ${ora}`,
  description: `${nx} payment plan: 5% down, installments up to 10 years, and delivery from 2027. Request the latest schedule for your preferred unit type.`,
  openGraphImagePath: OG,
  keywords: [
    "Solana West payment plan",
    "10 year installments New Zayed",
    "5% down Solana West",
  ],
};

export const locationPageSeo: RouteSeoDefinition = {
  path: "/location",
  title: `Solana West location · New Zayed & West Cairo | ${ora}`,
  description: `${nx} is located on Mehwar El Dabaa in New Zayed, with access toward Alexandria Desert Road and Middle Ring Road, near Sphinx Airport and Mall of Arabia.`,
  openGraphImagePath: OG,
  keywords: [
    "Solana West location",
    "New Zayed Mehwar El Dabaa",
    "West Cairo compound access",
  ],
};

export const masterPlanPageSeo: RouteSeoDefinition = {
  path: "/master-plan",
  title: `${nx} master plan · 316 acres · low density New Zayed | ${ora}`,
  description: `${nx} master plan: 316 acres in New Zayed with low-density planning, landscaped connectors, walkable routes, villas, townhouses, twin houses, and apartments by ${ora}.`,
  openGraphImagePath: solanaWestMedia.masterplan.src,
  keywords: [
    "Solana West master plan",
    "316 acres New Zayed",
    "walkable compound ORA",
    "low density New Zayed",
    "ORA master-planned villas",
    "Solana West open space layout",
  ],
};

export const blogIndexPageSeo: RouteSeoDefinition = {
  path: "/blog",
  title: `${nx} Blog | New Zayed Buyer Guides`,
  description: `Read ${nx} buyer guides on New Zayed, prices, payment plans, ORA developer context, location, villas, apartments, and West Cairo investment comparisons.`,
  openGraphImagePath: OG,
  keywords: [
    `${siteConfig.shortName} blog`,
    "New Zayed investment articles",
    "ORA Developers Egypt editorial",
    "West Cairo villa payment plan briefing",
    "compound comparison Egypt",
    "Solana West pricing commentary",
  ],
};

export const villasPageSeo: RouteSeoDefinition = {
  path: "/properties/villas",
  title: `Standalone villas · ${nx} | ${ora}`,
  description: `Standalone villas in ${nx}, New Zayed: private plots, green outlooks, low-density planning, and payment options from ${ora}. Request current villa pricing.`,
  openGraphImagePath: OG,
  keywords: ["Solana West villas", "standalone villas New Zayed", "luxury villas ORA"],
};

export const townhousesPageSeo: RouteSeoDefinition = {
  path: "/properties/townhouses",
  title: `Townhouses · ${nx} | ${ora}`,
  description: `Townhouses in ${nx}: family homes on landscaped avenues within a walkable New Zayed master plan. Request current availability and payment details.`,
  openGraphImagePath: OG,
  keywords: ["Solana West townhouses", "New Zayed townhouses for sale"],
};

export const apartmentsPageSeo: RouteSeoDefinition = {
  path: "/properties/apartments",
  title: `Apartments · ${nx} | ${ora}`,
  description: `Apartments in ${nx}, New Zayed, with prices from 9.8M EGP at project level. Request live inventory, views, finishing details, and payment schedule.`,
  openGraphImagePath: OG,
  keywords: ["Solana West apartments", "fully finished apartments New Zayed"],
};

export const twinHousesPageSeo: RouteSeoDefinition = {
  path: "/properties/twin-houses",
  title: `Twin houses · ${nx} | ${ora}`,
  description: `Twin houses in ${nx}: paired villa living with landscaped buffers, New Zayed access, and current payment plan details from ${ora}.`,
  openGraphImagePath: OG,
  keywords: ["Solana West twin houses", "New Zayed twin villas"],
};

export const privacyPolicyPageSeo: RouteSeoDefinition = {
  path: "/privacy-policy",
  title: `Privacy policy · ${nx}`,
  description: `How ${nx} (${getSiteUrl().hostname}) handles enquiry forms, analytics, contact details, and replies through sales communication channels.`,
  keywords: ["Solana West privacy policy", "data retention project site Egypt"],
};

export const comparisonPagesSeo: RouteSeoDefinition = {
  path: "/comparison-pages",
  title: `Compare West Cairo compounds · ${nx} context`,
  description: `Compare ${nx} with New Zayed and West Cairo buyer criteria such as location, density, master planning, payment plan, and lifestyle fit.`,
  openGraphImagePath: OG,
  keywords: ["New Zayed compound comparison", "Solana West New Zayed", "West Cairo villas compare"],
};

export const investmentGuidesPageSeo: RouteSeoDefinition = {
  path: "/investment-guides",
  title: `Investment guides · West Cairo & ${nx}`,
  description: `Investor-friendly guides for buying in New Zayed and West Cairo, including ${nx}, road access, Sphinx Airport context, payment plans, and long-hold considerations.`,
  openGraphImagePath: OG,
  keywords: ["New Zayed investment", "West Cairo real estate guide", "ORA compound thesis"],
};
