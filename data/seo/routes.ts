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
  title: `About Solana West New Zayed · ORA pedigree | ${ora}`,
  description: `${nx} (${ora}, Chairman ${siteConfig.founder}). 316-acre New Zayed master plan: low density, walkable green structure, villas and apartments. Commercial terms available on request.`,
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
  title: `ORA Developers Egypt projects · New Zayed & West Cairo | ${nx}`,
  description: `${ora} project index: authoritative hubs for ${nx} (316-acre New Zayed low-density plan) and future ORA compounds as published. Typologies, pricing context, payment framing, location, master plan, FAQs — desk-verified issuance.`,
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
  title: `Contact sales · ${nx} | ${ora}`,
  description: `Reach ${ora} sales for ${nx}: pricing context, payment plan structure, unit mix, and site visits. Phone ${siteConfig.phone} — email on file at ${siteConfig.email}.`,
  openGraphImagePath: OG,
  keywords: ["Solana West contact", "ORA sales New Zayed", "book site visit Solana West"],
};

export const faqPageSeo: RouteSeoDefinition = {
  path: "/faq",
  title: `FAQ · prices, payment plan & delivery | ${nx}`,
  description: `Direct answers on ${nx}: Mehwar El Dabaa location, from 9.8M EGP reference, 5% down, up to 10-year installments, delivery from 2027, and unit types (villas, townhouses, twin houses, apartments).`,
  openGraphImagePath: OG,
  keywords: [
    "Solana West FAQ",
    "Solana West delivery 2027",
    "Solana West installment plan",
  ],
};

export const pricesPageSeo: RouteSeoDefinition = {
  path: "/prices",
  title: `Solana West prices New Zayed | ${ora}`,
  description: `Reference entry from 9.8M EGP at ${nx}. Pricing is issuance-driven; request current availability, phase pricing, and villa vs apartment brackets from ${ora} sales.`,
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
  description: `${nx}: 5% down payment, installments up to 10 years (final structure at booking), delivery from 2027. Request the live commercial schedule for your unit type.`,
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
  description: `${nx} on Mehwar El Dabaa with Alexandria Desert Road and Middle Ring Road access. Context: ~5 min Waslet Dahshour, ~10 min Sphinx Airport, ~15 min Mall of Arabia; adjacent VYE (Sodic) and Belle Vie (Emaar).`,
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
  description: `${nx}: 316-acre master-planned community — low-density batches, landscaped connectors, walkable structure, villa and apartment sequencing, open green rhythm, private landscaped pockets by ${ora}. Editorial scope — confirm parcel detail on issuance.`,
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
  title: `${nx} research journal · New Zayed & ORA briefing | ${ora}`,
  description: `${ora} editorial index: investor-grade briefing lanes for ${nx}, payment and pricing discourse, New Zayed geography, ORA counterparty literacy, comparisons. Issuance-collateral authoritative routes cross-linked.`,
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
  description: `Elevated standalone villas in ${nx}: open green outlooks, low-density planning, fully finished or core & shell. Request bracket pricing and payment structure from ${ora}.`,
  openGraphImagePath: OG,
  keywords: ["Solana West villas", "standalone villas New Zayed", "luxury villas ORA"],
};

export const townhousesPageSeo: RouteSeoDefinition = {
  path: "/properties/townhouses",
  title: `Townhouses · ${nx} | ${ora}`,
  description: `Townhouses within the ${nx} walkable master plan. Finishing options and commercial terms are issuance-specific — request current availability from ${ora}.`,
  openGraphImagePath: OG,
  keywords: ["Solana West townhouses", "New Zayed townhouses for sale"],
};

export const apartmentsPageSeo: RouteSeoDefinition = {
  path: "/properties/apartments",
  title: `Apartments · ${nx} | ${ora}`,
  description: `Fully finished apartment product in ${nx}, West Cairo. Verify live inventory, views, and milestone schedule with ${ora} sales before reservation.`,
  openGraphImagePath: OG,
  keywords: ["Solana West apartments", "fully finished apartments New Zayed"],
};

export const twinHousesPageSeo: RouteSeoDefinition = {
  path: "/properties/twin-houses",
  title: `Twin houses · ${nx} | ${ora}`,
  description: `Twin-house typology inside ${nx}'s landscaped structure. Pricing and façade packages vary by issuance — pull the current sheet from ${ora}.`,
  openGraphImagePath: OG,
  keywords: ["Solana West twin houses", "New Zayed twin villas"],
};

export const privacyPolicyPageSeo: RouteSeoDefinition = {
  path: "/privacy-policy",
  title: `Privacy policy · ${nx}`,
  description: `How ${nx} (${getSiteUrl().hostname}) treats enquiry forms, analytics, and contact identifiers. Operational replies route through accredited ${ora} sales channels.`,
  keywords: ["Solana West privacy policy", "data retention project site Egypt"],
};

export const comparisonPagesSeo: RouteSeoDefinition = {
  path: "/comparison-pages",
  title: `Compare West Cairo compounds · ${nx} context`,
  description: `Structured comparisons placing ${nx} next to neighboring New Zayed benchmarks (including VYE and Belle Vie) on density, road access, and ORA-led master planning.`,
  openGraphImagePath: OG,
  keywords: ["New Zayed compound comparison", "Solana West vs VYE", "West Cairo villas compare"],
};

export const investmentGuidesPageSeo: RouteSeoDefinition = {
  path: "/investment-guides",
  title: `Investment guides · West Cairo & ${nx}`,
  description: `Long-horizon context for buying in New Zayed: road network maturity, Sphinx Airport adjacency, and ${ora}-grade master-planned compounds such as ${nx}. Not financial advice.`,
  openGraphImagePath: OG,
  keywords: ["New Zayed investment", "West Cairo real estate guide", "ORA compound thesis"],
};
