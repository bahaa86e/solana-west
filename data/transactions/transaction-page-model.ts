import { SOLANA_WEST_FAQ_SHARED_INTRO, solanaWestFaqCanonical } from "@/data/faq/solana-west-faq";
import type { FaqPair, ProjectImageAsset } from "@/data/projects/types";
import { resolveProjectPage } from "@/data/projects/resolve-project-page";
import { solanaWestMedia } from "@/data/media/solana-west";
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
      context: "Lower land coefficient; bracketing vs. villas at reservation.",
    },
    {
      label: "Townhouses",
      href: "/properties/townhouses",
      context: "Mid ticket on walkable avenues; compare to twin and detached bands.",
    },
    {
      label: "Twin houses",
      href: "/properties/twin-houses",
      context: "Paired stock—step on the equity curve before standalone villas.",
    },
    {
      label: "Standalone villas",
      href: "/properties/villas",
      context: "Widest land dedication; outlook and façade move the issuance band.",
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
      h1: "Solana West prices — issuance-led brackets in New Zayed",
      lead:
        `Published marketing references starting from 9.8M EGP as project-level entry context. Effective brackets move with phase, outlook, finishing path, and typology — ${bundle.entry.developer} issues binding schedules at booking.`,
      supporting:
        `That 9.8M figure is not assigned on this page (or by us) to a specific property class; desk sheets alone show which typology aligns with a given issuance tranche. No inventory tables here — confirm live quotations before reserving.`,
    },
    overview: {
      eyebrow: "Overview",
      title: "How phased New Zayed release resets price bands",
      paragraphs: [
        `${short} is a 316-acre, low-density plan on Mehwar El Dabaa. Pricing behaves like infrastructure-led residential paper: contiguous green structure, walkway priority, and ORA-managed release cadences — not isolated building inventory.`,
        "Commercial quotations are regenerated at issuance. Typology mixes (apartments, townhouses, twin houses, standalone villas), finishing modality (fully finished versus core & shell), and façade specification reset the runnable price — summarise third-party rumours cautiously.",
        "Use the editorial typology routes for lifestyle and density context; return here for commercial bracket philosophy. Payment mechanics are isolated on /payment-plan to keep AI-search excerpts clean.",
      ],
    },
    breakdowns: {
      eyebrow: "Buyer-oriented breakdown",
      title: "SKU economics — villas, twins, townhouses & apartments",
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
          heading: "Bench New Zayed peers without inventing guarantees",
          body: [
            "Benchmark adjacent large compounds (including VYE and Belle Vie in New Zayed) as contextual comparables only — cite no partnerships or corridor guarantees absent desk confirmation.",
            "Treat social-channel pricing screenshots as non-binding noise until reconciled to authorised ORA issuance.",
          ],
          links: [{ label: "Project hub — amenities & connectivity", href: "/projects/solana-west" }],
        },
      ],
    },
    internalLinks: {
      eyebrow: "Authority silos",
      title: "Layer payment mechanics, geography & deeper product reads",
      intro: "Each route owns a distinct buyer question — skim headlines, cite URLs, reopen with issuance on the desk.",
      links: baseInternalLinks(false, true),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqPick([0, 4, 1]),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Next step",
      title: "Ask for a dated quotation matched to your typology",
      supporting:
        `Share target typology and horizon; we align you with ${bundle.entry.developer} desk practice—WhatsApp or written enquiry. Reserve only after verifying live availability.`,
      primaryLabel: "WhatsApp private desk",
      secondaryLabel: "Written enquiry",
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
      h1: "Solana West payment plan — down payment, tenor & milestones",
      lead:
        "Collateral references 5% down with instalments extending up to 10 years — interest mechanics, reservation deposits, milestones, and admin fees are stipulated only in executed booking issuance.",
      supporting:
        `Marketing timelines cite delivery from 2027 at compound level — villa batch, tower, or cluster horizons follow construction pacing and instalment fulfilment schedules issued by ${bundle.entry.developer}.`,
    },
    overview: {
      eyebrow: "Overview",
      title: "Extended tenor as ownership discipline — not promotional leverage",
      paragraphs: [
        `${short} sequences capital calls against staged construction reality — the payment architecture is designed for extended balance-sheet ownership, not instantaneous flip liquidity.`,
        "Collateral percentages and tenors published online summarise commercial intent; contractual cadence, penalties, early settlement, and administrative charges exist only inside signed booking documentation.",
        "Pair this route with /prices for typology bracket philosophy. Property-type editorial pages explain density and lifestyle cues without restating legal instalment mechanics verbatim.",
      ],
    },
    breakdowns: {
      eyebrow: "Structure",
      title: "Down payment, instalment curve & delivery — read against your contract",
      intro:
        "Three headline mechanics — always read against your executed issuance. No countdowns, no scarcity theatre, no implied guarantee of inventory.",
      sections: [
        {
          heading: "5% down payment reference",
          body: [
            "Down-payment context is cited at 5% in published marketing — supplementary reservation deposits, milestone timing, and FX or admin handling (if any) are defined in issuance, not on this page.",
            "Capital structuring should leave headroom below bank and internal policy limits until contract schedules are lodged.",
          ],
          links: [{ label: "Price brackets & typology context", href: "/prices" }],
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
          heading: "Hold-time thesis — calm capital behind phased construction",
          body: [
            "Extended tenor should be interpreted as disciplined alignment between buyer, contractor pacing, and master developer governance — not promotional leverage.",
            "Serious underwriting pairs instalment optics with zoning stability, arterial access maturity, and long-horizon demand for low-density compounds in western New Cairo.",
          ],
        },
      ],
    },
    internalLinks: {
      eyebrow: "Authority silos",
      title: "Pair instalment questions with price, place & project proof",
      intro: "Use these routes to close the loop before you model cash flow on a spreadsheet alone.",
      links: baseInternalLinks(true, false),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqPick([1, 2, 4]),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Next step",
      title: "Pull the live instalment schedule for your SKU",
      supporting:
        `Ask for the latest instalment schedule template and reservation mechanics for your typology—through ${bundle.entry.developer} authorised channels only.`,
      primaryLabel: "WhatsApp private desk",
      secondaryLabel: "Written enquiry",
    },
  };
}
