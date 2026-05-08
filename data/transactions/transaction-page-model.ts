import { SOLANA_WEST_FAQ_SHARED_INTRO, solanaWestFaqCanonical } from "@/data/faq/solana-west-faq";
import type { FaqPair, ProjectImageAsset } from "@/data/projects/types";
import { resolveProjectPage } from "@/data/projects/resolve-project-page";
import { solanaWestMedia } from "@/data/solana-west-media";
import { siteConfig } from "@/data/site";

export type TransactionalPageKey = "prices" | "payment-plan";

export type TransactionalBreakdownSection = {
  heading: string;
  body: readonly string[];
  links?: readonly { readonly label: string; readonly href: string }[];
};

export type TransactionalInternalLink = {
  label: string;
  href: string;
  context: string;
};

export type TransactionalPageModel = {
  key: TransactionalPageKey;
  /** Stable fragment for `id` attributes (hyphenated). */
  idPrefix: string;
  heroImage: ProjectImageAsset;
  overviewFigure: ProjectImageAsset;
  hero: {
    locationEyebrow: string;
    h1: string;
    lead: string;
    supporting: string;
  };
  overview: { eyebrow: string; title: string; paragraphs: readonly string[] };
  breakdowns: {
    eyebrow: string;
    title: string;
    intro?: string;
    sections: readonly TransactionalBreakdownSection[];
  };
  internalLinks: {
    eyebrow: string;
    title: string;
    intro: string;
    links: readonly TransactionalInternalLink[];
  };
  faqPreview: { intro: string; items: readonly FaqPair[]; fullFaqHref: string };
  finalCta: {
    eyebrow: string;
    title: string;
    supporting: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};

function faqPick(indices: readonly [number, number, number]): readonly FaqPair[] {
  return indices.map((i): FaqPair => solanaWestFaqCanonical[i]);
}

function baseInternalLinks(includePrices: boolean, includePayment: boolean): TransactionalInternalLink[] {
  const out: TransactionalInternalLink[] = [];
  if (includePrices) {
    out.push({
      label: "Pricing positioning",
      href: "/prices",
      context: "Issuance-led bracketing and typology context.",
    });
  }
  if (includePayment) {
    out.push({
      label: "Payment plan structure",
      href: "/payment-plan",
      context: "Down payment, tenor, and delivery framing.",
    });
  }
  out.push(
    {
      label: siteConfig.shortName + " project hub",
      href: "/projects/solana-west",
      context: "Amenities, connectivity, and full typology index.",
    },
    {
      label: "Apartments",
      href: "/properties/apartments",
      context: "Editorial typology route.",
    },
    {
      label: "Townhouses",
      href: "/properties/townhouses",
      context: "Editorial typology route.",
    },
    {
      label: "Twin houses",
      href: "/properties/twin-houses",
      context: "Editorial typology route.",
    },
    {
      label: "Standalone villas",
      href: "/properties/villas",
      context: "Editorial typology route.",
    },
    {
      label: "FAQ index",
      href: "/faq",
      context: "Full canonical answers mirrored in schema elsewhere.",
    },
  );
  return out;
}

export function buildPricesTransactionalModel(): TransactionalPageModel {
  const bundle = resolveProjectPage("solana-west");
  if (!bundle) {
    throw new Error("Solana West bundle required for transactional pages.");
  }

  const short = bundle.entry.shortName ?? bundle.entry.name;

  const heroImage = bundle.media.hero;
  const overviewFigure = bundle.media.overviewFigure;

  return {
    key: "prices",
    idPrefix: "prices-tx",
    heroImage,
    overviewFigure,
    hero: {
      locationEyebrow: "Commercial context · issuance-led",
      h1: "Pricing posture at Solana West New Zayed",
      lead:
        `Published marketing references starting from 9.8M EGP as project-level entry context. Effective brackets move with phase, outlook, finishing path, and typology — ${bundle.entry.developer} issues binding schedules at booking.`,
      supporting:
        `That 9.8M figure is not assigned on this page (or by us) to a specific property class; desk sheets alone show which typology aligns with a given issuance tranche. No inventory tables here — confirm live quotations before reserving.`,
    },
    overview: {
      eyebrow: "Overview",
      title: "How brackets form inside a phased masterplan",
      paragraphs: [
        `${short} is a 316-acre, low-density plan on Mehwar El Dabaa. Pricing behaves like infrastructure-led residential paper: contiguous green structure, walkway priority, and ORA-managed release cadences — not isolated building inventory.`,
        "Commercial quotations are regenerated at issuance. Typology mixes (apartments, townhouses, twin houses, standalone villas), finishing modality (fully finished versus core & shell), and façade specification reset the runnable price — summarise third-party rumours cautiously.",
        "Use the editorial typology routes for lifestyle and density context; return here for commercial bracket philosophy. Payment mechanics are isolated on /payment-plan to keep AI-search excerpts clean.",
      ],
    },
    breakdowns: {
      eyebrow: "Buyer-oriented breakdown",
      title: "Typology positioning · apartments, townhouses, twin houses, standalone villas",
      intro:
        "Four published residential archetypes inside the same phased issuance environment — narrative positioning only. Which SKU sits at or near the stated marketing entry is determined per tranche, not generalized on this route.",
      sections: [
        {
          heading: "Apartments",
          body: [
            "Apartments skew toward disciplined capital allocation and faster fit-out horizons when finished product is booked — façade, floorplate, and outlook premiums still widen commercial bands materially.",
            "Fully finished positioning is cited in marketing scope — verify SKU-level façade packages before underwriting rental cash flows against service-charge regimes.",
          ],
          links: [{ label: "Apartments editorial route", href: "/properties/apartments" }],
        },
        {
          heading: "Townhouses",
          body: [
            "Townhouses trade absolute land sovereignty for landscaped avenue sequencing — mid-density exposure within the pedestrian grain of New Zayed’s western corridor.",
            "Bracketing responds to setback quality, storey count, and release tranche sequencing; compare desk sheets across typologies before treating informal quotes as actionable.",
          ],
          links: [{ label: "Townhouses editorial route", href: "/properties/townhouses" }],
        },
        {
          heading: "Twin houses",
          body: [
            "Twin houses pair discrete party lines while retaining broader frontage cues than standard townhouses — issuance treats them as their own band within the mixed masterplan.",
            "Underwriting should compare paired-villa setbacks, finishing path, and outlook premiums against both townhouses and detached stock using desk-issued comparisons only.",
          ],
          links: [{ label: "Twin houses editorial route", href: "/properties/twin-houses" }],
        },
        {
          heading: "Standalone villas",
          body: [
            "Standalone villas occupy the widest land dedication per residential class in marketing literature — elevated massing and open green outlooks commonly widen commercial dispersion across phases.",
            "Do not infer that the published marketing entry applies to this class by default; detached SKUs are frequently quoted above entry context depending on phase, finishing, and outlook.",
          ],
          links: [{ label: "Standalone villas editorial route", href: "/properties/villas" }],
        },
        {
          heading: "Investment framing · disciplined underwriting",
          body: [
            "Benchmark adjacent large compounds (including VYE and Belle Vie in New Zayed) as contextual comparables only — cite no partnerships or corridor guarantees absent desk confirmation.",
            "Treat social-channel pricing screenshots as non-binding noise until reconciled to authorised ORA issuance.",
          ],
          links: [{ label: "Project hub — amenities & connectivity", href: "/projects/solana-west" }],
        },
      ],
    },
    internalLinks: {
      eyebrow: "Internal reference map",
      title: "Continue research without leaving the architecture",
      intro: "Calm cross-links — structured for humans and extractable for AI-search assistants.",
      links: baseInternalLinks(false, true),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqPick([0, 4, 1]),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Next step",
      title: "Request an issuance-aligned quotation",
      supporting:
        `Share target typology and horizon; we align you with ${bundle.entry.developer} desk practice — WhatsApp or contact form. No artificial urgency — reserve only after verifying live availability.`,
      primaryLabel: "WhatsApp",
      secondaryLabel: "Contact",
    },
  };
}

export function buildPaymentPlanTransactionalModel(): TransactionalPageModel {
  const bundle = resolveProjectPage("solana-west");
  if (!bundle) {
    throw new Error("Solana West bundle required for transactional pages.");
  }

  const short = bundle.entry.shortName ?? bundle.entry.name;
  const heroImage = bundle.media.amenities[0] ?? bundle.media.hero;
  const overviewFigure = solanaWestMedia.investment;

  return {
    key: "payment-plan",
    idPrefix: "payment-plan-tx",
    heroImage,
    overviewFigure,
    hero: {
      locationEyebrow: "Ownership mechanics · contract-governed",
      h1: "Payment plan structure at Solana West New Zayed",
      lead:
        "Collateral references 5% down with instalments extending up to 10 years — interest mechanics, reservation deposits, milestones, and admin fees are stipulated only in executed booking issuance.",
      supporting:
        `Marketing timelines cite delivery from 2027 at compound level — villa batch, tower, or cluster horizons follow construction pacing and instalment fulfilment schedules issued by ${bundle.entry.developer}.`,
    },
    overview: {
      eyebrow: "Overview",
      title: "Long-term ownership inside a master-planned compound",
      paragraphs: [
        `${short} sequences capital calls against staged construction reality — the payment architecture is designed for extended balance-sheet ownership, not instantaneous flip liquidity.`,
        "Collateral percentages and tenors published online summarise commercial intent; contractual cadence, penalties, early settlement, and administrative charges exist only inside signed booking documentation.",
        "Pair this route with /prices for typology bracket philosophy. Property-type editorial pages explain density and lifestyle cues without restating legal instalment mechanics verbatim.",
      ],
    },
    breakdowns: {
      eyebrow: "Structure",
      title: "What marketing collateral references today",
      intro:
        "Three headline mechanics — always read against your executed issuance. No countdowns, no scarcity theatre, no implied guarantee of inventory.",
      sections: [
        {
          heading: "5% down payment reference",
          body: [
            "Down-payment context is cited at 5% in published marketing — supplementary reservation deposits, milestone timing, and FX or admin handling (if any) are defined in issuance, not on this page.",
            "Capital structuring should leave headroom below bank and internal policy limits until contract schedules are lodged.",
          ],
          links: [{ label: "Pricing posture & typology framing", href: "/prices" }],
        },
        {
          heading: "Instalments up to 10 years",
          body: [
            "Instalments may extend toward a 10-year horizon in marketing summaries — amortisation curves, interim certificates, delivery-linked tranches, and interest treatment are articulated only in contractual exhibits.",
            "Long tenor aligns with staged handover pacing across a multi-year construction programme; correlate cash-flow modelling with phased delivery disclosures from desk teams.",
          ],
          links: [{ label: "Full FAQ — payment wording", href: "/faq" }],
        },
        {
          heading: "Delivery from 2027",
          body: [
            "Marketing describes handover commencing from 2027 — discrete cluster dates stagger with civil works, utilities, compound readiness, and snagging milestones.",
            "Ownership patience is materially different from opportunistic short-cycle trading — underwriting should anticipate holding cost, service regimes, and post-handover escalation channels through ORA-accredited desks.",
          ],
          links: [{ label: "Project hub — delivery FAQs in context", href: "/projects/solana-west" }],
        },
        {
          heading: "Long-term positioning · calm ownership thesis",
          body: [
            "Extended tenor should be interpreted as disciplined alignment between buyer, contractor pacing, and master developer governance — not promotional leverage.",
            "Serious underwriting pairs instalment optics with zoning stability, arterial access maturity, and long-horizon demand for low-density compounds in western New Cairo.",
          ],
        },
      ],
    },
    internalLinks: {
      eyebrow: "Internal reference map",
      title: "Cross-check pricing, typologies, and project depth",
      intro: "Editorial links — no conversion funnels, no artificial urgency.",
      links: baseInternalLinks(true, false),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqPick([1, 2, 4]),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Next step",
      title: "Request live commercial documentation",
      supporting:
        `Ask for the latest instalment schedule template and reservation mechanics for your typology — routing through ${bundle.entry.developer} authorised channels only.`,
      primaryLabel: "WhatsApp",
      secondaryLabel: "Contact",
    },
  };
}
