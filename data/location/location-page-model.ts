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
      context: "Master plan, amenities, prices, and FAQs in one route.",
    },
    {
      label: "Prices",
      href: "/prices",
      context: "Starting price and current availability context.",
    },
    {
      label: "Payment plan",
      href: "/payment-plan",
      context: "Down payment, installment timeline, and delivery date.",
    },
    {
      label: "Apartments",
      href: "/properties/apartments",
      context: "A practical entry point into the estate.",
    },
    {
      label: "Townhouses",
      href: "/properties/townhouses",
      context: "Family homes on landscaped avenues.",
    },
    {
      label: "Twin houses",
      href: "/properties/twin-houses",
      context: "Paired villa living inside the same master plan.",
    },
    {
      label: "Standalone villas",
      href: "/properties/villas",
      context: "Detached homes for privacy, land, and open outlooks.",
    },
    { label: "FAQ index", href: "/faq", context: "Location and access answers.",
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
      h1: `${short} location in New Zayed`,
      lead: `${entry.name} sits on Mehwar El Dabaa in New Zayed, with access toward Alexandria Desert Road, the Middle Ring Road, Sphinx Airport, Waslet Dahshour, and Mall of Arabia.`,
      supporting:
        "Published drive times are useful for orientation, not a traffic guarantee. If commute timing matters to your decision, test the route at the hours you actually travel.",
    },
    overview: {
      eyebrow: "Location overview",
      title: "A West Cairo address with room to grow",
      paragraphs: [
        "New Zayed has become one of West Cairo's most watched residential corridors because it combines new land supply with access to established Sheikh Zayed and 6th of October routes.",
        `${short} adds a 316-acre low-density footprint to that corridor, with ORA's planning focused on greenery, walkability, and a private residential setting.`,
        `The location is strong, but it should still be checked against your own routine: school runs, airport use, office routes, weekend retail, and peak-hour traffic.`,
      ],
    },
    connectivity: {
      eyebrow: "Connectivity",
      title: "Mehwar El Dabaa, ring roads, airport, and retail access",
      intro:
        "The points below reflect published project positioning and common buyer landmarks. Treat them as location highlights, then verify real travel times for your lifestyle.",
      sections: [
        {
          heading: "Mehwar El Dabaa",
          body: [
            `${short} is positioned on Mehwar El Dabaa, one of the key axes shaping New Zayed's westward residential growth.`,
            "For buyers comparing compounds, the road matters because it affects arrival, future area visibility, and everyday movement.",
          ],
        },
        {
          heading: "Alexandria Desert Road access",
          body: [
            "Access toward Alexandria Desert Road helps buyers who move between West Cairo, the North Coast corridor, and wider western routes.",
            "Gate-level movement and peak-hour traffic should be checked during a site visit.",
          ],
        },
        {
          heading: "Middle Ring Road access",
          body: [
            "Middle Ring Road access helps connect the area to other parts of Greater Cairo, including 6th of October, Sheikh Zayed, and inner-ring districts.",
            "As with any ring-road route, timing changes by day, hour, tolls, and traffic conditions.",
          ],
        },
        {
          heading: "Waslet Dahshour proximity",
          body: [
            "Project information commonly mentions around five minutes to Waslet Dahshour, a useful landmark for buyers familiar with western Cairo movement.",
            "Treat the figure as approximate because traffic, detours, and construction can change the actual drive.",
          ],
        },
        {
          heading: "Sphinx International Airport access",
          body: [
            "Sphinx International Airport is commonly cited at around ten minutes, making the location attractive for frequent travellers and visiting family.",
            "Airport access improves convenience, but it should not be treated as a guaranteed investment outcome.",
          ],
        },
        {
          heading: "Mall of Arabia access",
          body: [
            "Mall of Arabia is commonly mentioned at around fifteen minutes, giving buyers a familiar West Cairo retail landmark.",
            "Retail access is part of lifestyle comfort, while day-to-day convenience will also depend on compound services and delivery habits.",
          ],
        },
        {
          heading: "Key New Zayed Residential Destinations",
          body: [
            "Solana West sits near key residential destinations in New Zayed, adding to the area's premium West Cairo character.",
            "Nearby communities are useful for area orientation only. There is no partnership or commercial relationship implied.",
            "Compare each compound on land plan, developer, density, access, pricing, and payment schedule rather than brand names alone.",
          ],
        },
      ],
    },
    areaGrowth: {
      eyebrow: "Area growth positioning",
      title: "Area growth without exaggerated promises",
      paragraphs: [
        "The New Zayed story is best read through visible infrastructure, large land plans, airport proximity, and the arrival of established developers.",
        "Nearby large-scale compounds suggest developer confidence in the corridor, but they do not guarantee a price path for every project.",
        `${short} is a long-hold play for buyers who value low density, greenery, and West Cairo access. Personal liquidity, payment timing, and exit plans still matter.`,
      ],
    },
    investment: {
      eyebrow: "Investment relevance",
      title: "Good access supports demand, but documents define risk",
      paragraphs: [
        "Airport access, ring-road reach, and familiar retail anchors make the location easier to understand for Egyptian, GCC, and international buyers.",
        "Still, location is only one part of the decision. Payment schedule, delivery phase, service charges, and contract terms deserve the same attention.",
        `Use this page alongside prices and payment plan details before asking ${dev} sales for live availability.`,
      ],
    },
    internalLinks: {
      eyebrow: "Continue research",
      title: "Move from location to prices, payment, and unit types",
      intro: "Once the location makes sense, compare the product and numbers.",
      links: editorialInternalLinks(),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqPick([3, 4, 0]),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Next step",
      title: "Ask for a location and availability briefing",
      supporting:
        `Request current availability, phase location, and site orientation details through ${dev} sales channels. Verify travel times against your own routine before reserving.`,
      primaryLabel: "Request details on WhatsApp",
      secondaryLabel: "Written enquiry",
    },
  };
}
