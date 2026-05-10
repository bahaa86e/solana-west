import { SOLANA_WEST_FAQ_SHARED_INTRO, solanaWestFaqCanonical } from "@/data/faq/solana-west-faq";
import type { FaqPair, ProjectImageAsset } from "@/data/projects/types";
import { resolveProjectPage } from "@/data/projects/resolve-project-page";
import { siteConfig } from "@/data/site";

export type LocationConnectivitySection = {
  heading: string;
  body: readonly string[];
};

export type LocationInternalLink = {
  label: string;
  href: string;
  context: string;
};

export type LocationPageModel = {
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
  connectivity: {
    eyebrow: string;
    title: string;
    intro: string;
    sections: readonly LocationConnectivitySection[];
  };
  areaGrowth: { eyebrow: string; title: string; paragraphs: readonly string[] };
  investment: { eyebrow: string; title: string; paragraphs: readonly string[] };
  internalLinks: {
    eyebrow: string;
    title: string;
    intro: string;
    links: readonly LocationInternalLink[];
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

function editorialInternalLinks(): readonly LocationInternalLink[] {
  const short = siteConfig.shortName;
  return [
    {
      label: `${short} project hub`,
      href: "/projects/solana-west",
      context: "Master plan, amenities, commercial context, and FAQs in one route.",
    },
    {
      label: "Pricing posture",
      href: "/prices",
      context: "Issuance-led bracketing — typology mix, no inventory tables.",
    },
    {
      label: "Payment plan structure",
      href: "/payment-plan",
      context: "Down payment, tenor, and delivery framing.",
    },
    {
      label: "Apartments",
      href: "/properties/apartments",
      context: "Vertical inventory inside the estate—rental and owner paths under one compound covenant.",
    },
    {
      label: "Townhouses",
      href: "/properties/townhouses",
      context: "Walkable-avenue townhomes; mid ticket with more privacy than vertical living.",
    },
    {
      label: "Twin houses",
      href: "/properties/twin-houses",
      context: "Paired villas—density step between townhouses and full detached lots.",
    },
    {
      label: "Standalone villas",
      href: "/properties/villas",
      context: "Detached stock—elevation, outlook bands, and land dedication vs. phased apartments.",
    },
    { label: "FAQ index", href: "/faq", context: "Canonical location and access answers.",
    },
  ];
}

export function buildLocationPageModel(): LocationPageModel {
  const bundle = resolveProjectPage("solana-west");
  if (!bundle) {
    throw new Error("Solana West bundle required for location route.");
  }

  const entry = bundle.entry;
  const short = entry.shortName ?? entry.name;
  const dev = entry.developer;

  const heroImage = bundle.media.hero;
  const overviewFigure = bundle.media.locationAtmosphere;

  return {
    idPrefix: "location-sw",
    heroImage,
    overviewFigure,
    hero: {
      locationEyebrow: "New Zayed · West Cairo · Geography",
      h1: `${short} location — Mehwar El Dabaa & New Zayed access`,
      lead: `${entry.name} sits on Mehwar El Dabaa inside the New Zayed growth corridor — arterial links toward Alexandria Desert Road and the Middle Ring Road frame daily access, while marketing context cites drive-time references to Waslet Dahshour, Sphinx Airport, and Mall of Arabia.`,
      supporting:
        `Driving minutes are directional comparables from collateral, not live traffic guarantees — confirm routes and peak-hour behaviour independently. Neighbouring benchmarks VYE (Sodic) and Belle Vie (Emaar) are cited as market context only, not partnership claims.`,
    },
    overview: {
      eyebrow: "Location overview",
      title: "New Zayed — institutional road fabric behind the estate",
      paragraphs: [
        "New Zayed extends the western residential spine of Greater Cairo — institutional road investment, airport adjacency, and large-format retail clusters are already part of how the market reads the district, without promising any specific future public project on this page.",
        `${short} occupies a 316-acre, low-density footprint in that corridor. ORA’s planning logic treats walkability and continuous landscape as primary infrastructure — compounds here compete on arterial legibility and long-horizon servicing, not billboard density.`,
        `${dev} stages delivery and sales through accredited desks; location advantage should be cross-checked against your own commute patterns, school routing, and weekday traffic experience.`,
      ],
    },
    connectivity: {
      eyebrow: "Connectivity",
      title: "Mehwar El Dabaa, ring roads, airport & landmark retail",
      intro:
        "The following items mirror published marketing collateral — they describe positioning, not fixed travel times. Satellite navigation and on-site runs remain authoritative.",
      sections: [
        {
          heading: "Mehwar El Dabaa",
          body: [
            `${short} is plotted along Mehwar El Dabaa in New Zayed — the spine is the organising reference for how the compound fronts the district and ties into westward residential expansion.`,
            "Mehwar sequencing matters for buyers comparing compounds: frontage quality, turning radii, and future phase adjacency are evaluated at issuance, not generalized here.",
          ],
        },
        {
          heading: "Alexandria Desert Road access",
          body: [
            "Marketing materials cite direct access logic toward Alexandria Desert Road — the link matters for buyers routing toward the North Coast corridor or western industrial nodes.",
            "Verify gate-level movement and peak-hour behaviour with on-site orientation; mapping screenshots age quickly as adjacent phases open.",
          ],
        },
        {
          heading: "Middle Ring Road access",
          body: [
            "Collateral positions Middle Ring Road connectivity for East–West sweep across Greater Cairo — relevant for buyers arbitraging office locations in 6th October, Sheikh Zayed, and inner-ring districts.",
            "Ring-road dependence implies toll, congestion, and weekday variance; underwrite location with real commutes, not brochure straight-line maps.",
          ],
        },
        {
          heading: "Waslet Dahshour proximity",
          body: [
            "Published context commonly references approximately five minutes toward Waslet Dahshour — useful for buyers already familiar with Dahshour arterial interchange and western secondary roads.",
            "Treat the figure as illustrative; traffic, seasonality, and construction detours change effective time on road.",
          ],
        },
        {
          heading: "Sphinx International Airport access",
          body: [
            "Marketing cites on the order of ten minutes toward Sphinx International Airport — relevant for flight-dependent households and guest access patterns.",
            "Airport proximity benefits convenience; it does not guarantee asset performance — avoid conflating runway adjacency with pricing outcomes.",
          ],
        },
        {
          heading: "Mall of Arabia access",
          body: [
            "Collateral references circa fifteen minutes toward Mall of Arabia — a large-format retail anchor commonly used in West Cairo comparables.",
            "Retail distance is lifestyle context, not investment thesis; daily shopping patterns still depend on compound retail, delivery logistics, and weekday preferences.",
          ],
        },
        {
          heading: "VYE (Sodic), Belle Vie (Emaar), and the West Cairo mosaic",
          body: [
            "VYE by Sodic and Belle Vie by Emaar sit adjacent in the same broad New Zayed conversation — cite them strictly as large-scale market comparables illustrating how institutional developers cluster land in the corridor.",
            "No commercial relationship between those projects and this page is implied; competitive analysis should reference public pricing, servicing, and density brochures from each counterparty independently.",
            "West Cairo’s growth narrative is structural — road maturation, diversified housing stock, and airport-linked demand — without predicting specific price paths or government project timelines on this editorial route.",
          ],
        },
      ],
    },
    areaGrowth: {
      eyebrow: "Area growth positioning",
      title: "District maturity — visibility without invented growth claims",
      paragraphs: [
        "The district’s investment story is told through visible infrastructure: arterial completion, airport scale, and repeatable master developer delivery — not through guaranteed appreciation figures or named future megaprojects unless confirmed in official issuance.",
        "Buyer discipline means separating land quality (plot shape, outlook, servicing) from marketing brochure claims; both VYE- and Belle Vie-scale neighbours signal institutional confidence in the corridor, not a synchronized price floor for every compound.",
        `${short} aligns with long-hold, low-density positioning — demand for walkable green structure in West Cairo is thematic, but underwriting must still reference personal liquidity, FX exposure, and tenancy rules where applicable.`,
      ],
    },
    investment: {
      eyebrow: "Investment relevance",
      title: "Logistics lowers friction — contracts still define risk",
      paragraphs: [
        "Location reduces certain operational risks — airport access, ring-road reach, and recognizable retail anchors lower navigation friction for GCC and domestic buyers who already know the district code names.",
        "Geography does not replace issuance discipline: payment schedules, delivery phasing, service-charge regimes, and after-sales governance matter as much as drive-time claims.",
        `Use this page alongside /prices and /payment-plan — ${siteConfig.founder}-led ${dev} counterparty credibility is substantive, yet every reservation still hinges on contractual documentation.`,
      ],
    },
    internalLinks: {
      eyebrow: "Authority silos",
      title: "Move from geography to hub, brackets and SKU pages",
      intro: "Use these links once driving context is anchored — underwriting finishes on issuance.",
      links: editorialInternalLinks(),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqPick([3, 4, 0]),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Next step",
      title: "Book a logistics briefing that matches your commute reality",
      supporting:
        `Request a logistics briefing or site orientation through ${dev} accredited channels—no implied inventory, countdowns, or guaranteed travel times.`,
      primaryLabel: "WhatsApp private desk",
      secondaryLabel: "Written enquiry",
    },
  };
}
