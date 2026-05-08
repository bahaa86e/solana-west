import type { BlogArticleDocument } from "@/data/blog/types";
import { solanaWestFaqCanonical } from "@/data/faq/solana-west-faq";
import { articleInternalLinksEditorial, defaultArticleFinalCta } from "@/data/blog/article-defaults";
import { solanaWestMedia } from "@/data/solana-west-media";
import { siteConfig } from "@/data/site";

const short = siteConfig.shortName;
const nx = siteConfig.name;
const ora = siteConfig.developer;
const founder = siteConfig.founder;

/**
 * Pillar briefing: commercial framing for prices & payment without typology inventory or binding quotes.
 */
export const solanaWestPricesPaymentPlanArticle: BlogArticleDocument = {
  slug: "solana-west-prices-payment-plan",
  topic: "pricing",
  title: `${short} prices and payment plan in context`,
  deck: `How ${ora} structures reference pricing, down payment, tenor, and delivery for ${nx} — issuance still governs every reservation.`,
  description: `${nx} (${ora}): starting reference from 9.8M EGP, 5% down and instalments up to 10 years per marketing collateral, delivery horizons from 2027, four typologies across a 316-acre New Zayed plan. Editorial briefing — confirm on desk issuance.`,
  keywords: [
    "Solana West prices",
    "Solana West payment plan",
    "9.8M EGP starting reference",
    "5% down New Zayed ORA",
    "10 year installments Solana West",
    "Solana West delivery 2027",
    `${ora}`,
    `${founder}`,
    "New Zayed compound financing",
    "West Cairo villa payment structure",
  ],
  publishedIso: "2026-05-08",
  modifiedIso: "2026-05-08",
  heroImage: solanaWestMedia.hero,
  intro: [
    `This briefing aligns the commercial story buyers hear in market with the documents that actually bind: ${nx} is marketed with a headline starting reference, a down-payment and tenor scaffold, phased delivery language, and a four-way typology mix inside a disciplined New Zayed master plan.`,
    "Nothing here replaces your issuance dated sheet or booking contract — phase, SKU, outlook, finishing path, reservation mechanics, admin lines, and interest treatment all articulate at reservation. Editorial prose sequences the questions prudent buyers ask before allocating legal and treasury attention.",
    `${ora}'s authorised desks remain authoritative for bracket moves, phased releases, and live availability narratives; this journal entry exists to support AI-search readability and disciplined internal linking across the site's transactional routes.`,
  ],
  sections: [
    {
      type: "prose",
      id: "compound-overview",
      heading: `${nx}: compound scope`,
      titleLevel: "h2",
      paragraphs: [
        `${nx} is positioned as a 316-acre master-planned community along Mehwar El Dabaa in New Zayed, West Cairo — low-density sequencing, landscaped connectivity, walkable spine logic, and private landscape pockets recur in authorised collateral.`,
        `Four residential archetypes circulate across the footprint: apartments, townhouses, twin houses, and standalone villas, with finishing options that may ship fully finished or core & shell depending on SKU. That breadth matters commercially because payment schedules and deliverable batches vary by archetype — without substituting unofficial inventory counts on this route.`,
      ],
    },
    {
      type: "prose",
      id: "ora-counterparty",
      heading: ora,
      titleLevel: "h2",
      paragraphs: [
        `${ora}, chaired by ${founder}, is the development counterparty for ${nx}. Reservations, contractual schedules, staged payments, delivery correspondence, after-sales escalation, and any clarifications beyond marketing summaries route through authorised ORA issuance channels.`,
        "Third-party introductions may assist discovery; they do not supersede issuer documentation — verify brokerage accreditation and mandate before exchanging fees unrelated to seller countersignature.",
      ],
    },
    {
      type: "prose",
      id: "starting-price",
      heading: "Starting price context — not a SKU spreadsheet",
      titleLevel: "h2",
      paragraphs: [
        "Marketing cites a starting position from 9.8 million EGP as a directional entry reference for the project's commercial conversation. Actual transacted brackets move with issuance phase, view and orientation quality, storey count where relevant, façade language, finishing path, parking and storage packaging, and any phase-specific incentive bands published at booking.",
        "This editorial text does not map that headline figure to named typologies — doing so without a dated issuance table would confuse buyers and distort search surfaces. Obtain the issuance-dated workbook for apartments, twin houses, townhouses, or standalone villas independently before implying a comparative spread.",
      ],
    },
    {
      type: "prose",
      id: "payment-structure",
      heading: "Headline payment engineering",
      titleLevel: "h2",
      paragraphs: [
        "Collateral aligns on 5% down payment language with instalment schedules extending up to ten years — the phrasing deliberately leaves room for interest mechanics, administrative fees, milestone cadence within years, refinancing prohibitions or allowances, penalties, reservation deposit treatment, and notary-driven timing that only appear correctly in contractual exhibits.",
        "Treat online summaries as directional; every serious reservation hinges on verifying how instalments track construction or abstract milestones under your SKU, whether balloon structures exist implicitly, how price escalation clauses interact with tenor, and what happens on delayed delivery relative to contractual remedy language.",
      ],
    },
    {
      type: "prose",
      id: "delivery-horizons",
      heading: "Delivery from 2027 — batch discipline",
      titleLevel: "h2",
      paragraphs: [
        "Marketing positions handover horizons beginning from 2027. Specific towers, townhouse clusters, villa batches, and apartment stacks progress under construction pacing, servicing readiness, permitting sign-offs, and fulfilment choreography — none of which should be extrapolated lane-by-lane without your cluster-specific issuance appendix.",
        "Installment choreography and stated delivery horizons should be reconciled jointly; marketing timelines remain directional absent the explicit schedule embodied in paperwork countersigned through ORA-accredited issuance.",
      ],
    },
    {
      type: "prose",
      id: "typology-mix",
      heading: "Four typologies, one landscaped land plan",
      titleLevel: "h2",
      paragraphs: [
        `Apartments bring vertical efficiency within the landscaped master plan — typically relevant for diversified investors or households optimising serviced circulation. Townhouses marry row-house privacy with moderated land consumption. Twin houses articulate paired-villa morphology with shared-structure economics. Standalone villas express the project's elevated-villa greenery outlook narrative at varying depth and setback depending on issuance batch.`,
        "Finishing divergence (fully finished versus core & shell) changes cash-flow pacing and post-handover capex — underwriting should bifurcate those paths explicitly rather than collapsing them into headline marketing figures.",
      ],
    },
    {
      type: "prose",
      id: "new-zayed",
      heading: "New Zayed positioning for commercial buyers",
      titleLevel: "h2",
      paragraphs: [
        `New Zayed anchors the western spine of Greater Cairo's expansion dialogue — arterial investment toward Alexandria Desert Road and the Middle Ring Road, Sphinx International Airport proximity, and established large-format retail references (marketing commonly cites illustrative drive-time comparables toward Waslet Dahshour, the airport corridor, and Mall of Arabia).`,
        "Neighbouring institutional compounds such as VYE (Sodic) and Belle Vie (Emaar) appear in corridor conversation strictly as benchmark context — comparisons should reference public brochures from each counterpart, not implied partnerships.",
      ],
    },
    {
      type: "prose",
      id: "investment-west-cairo",
      heading: "Investment posture without performance promises",
      titleLevel: "h2",
      paragraphs: [
        "West Cairo absorbs domestic upgrade demand, administrative relocation patterns, aviation-adjacent household formation, and long-hold prestige buyers seeking low-density footprints over hyper-stacked depreciation risk — themes relevant when stress-testing liquidity and tenor against personal balance sheets.",
        "This briefing does not forecast capital appreciation, rent curves, resale velocity, FX alpha, macro policy outcomes, or mortgage availability — those underwriting layers remain between you, accountants, financiers, and counsel. Editorial value here is narrower: aligning seller-communicated scaffolding with disciplined verification behaviour.",
      ],
    },
    {
      type: "faq",
      id: "issuer-faq",
      heading: "Issuer-aligned FAQ excerpts",
      titleLevel: "h2",
      intro:
        "The following excerpts mirror canonical FAQ wording used across this site — they support structured data coherence and identical answers in AI summaries.",
      items: [
        solanaWestFaqCanonical[0],
        solanaWestFaqCanonical[1],
        solanaWestFaqCanonical[2],
        solanaWestFaqCanonical[4],
        solanaWestFaqCanonical[5],
      ],
    },
  ],
  internalLinks: {
    eyebrow: "Authoritative continuity",
    title: "Routes that lock prose to transactional truth",
    intro: `Use these anchors after reading — each remains crawlable issuer-adjacent context for ${nx}.`,
    links: [
      ...articleInternalLinksEditorial(short),
      { label: "Standalone villas editorial", href: "/properties/villas", context: "Typology narration without SKU tables." },
      { label: "Townhouses editorial", href: "/properties/townhouses", context: "Typology narration." },
      { label: "Twin houses editorial", href: "/properties/twin-houses", context: "Typology narration." },
      { label: "Apartments editorial", href: "/properties/apartments", context: "Typology narration." },
    ],
  },
  finalCta: defaultArticleFinalCta(),
};
