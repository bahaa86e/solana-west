import { SOLANA_WEST_FAQ_SHARED_INTRO, solanaWestFaqCanonical } from "@/data/faq/solana-west-faq";
import type { ProjectEntry } from "@/data/projects/types";
import type { ProjectPageContent } from "@/data/projects/types";
import { defaultOpenGraphImagePath } from "@/data/seo/defaults";
import { siteConfig } from "@/data/site";

/**
 * Full project surface for the Solana West slug — derives display strings from `ProjectEntry` plus shared site facts.
 */
export function createSolanaWestPageContent(entry: ProjectEntry): ProjectPageContent {
  const short = entry.shortName ?? entry.name;

  return {
    schemaPlaceContainedIn: "New Zayed · West Cairo, Egypt",

    seo: {
      title: `${entry.name} Prices & Payment Plan | New Zayed | ${entry.developer}`,
      description: `${entry.name} on Mehwar El Dabaa in New Zayed: a 316-acre walkable compound by ${entry.developer}. Prices from 9.8M EGP, 5% down, up to 10 years, delivery from 2027.`,
      openGraphImagePath: defaultOpenGraphImagePath,
      keywords: [
        `${short} prices New Zayed`,
        `${short} payment plan`,
        `${short} ORA`,
        `${short} New Zayed master plan`,
        `${siteConfig.founder} ${short}`,
        "New Zayed villas ORA",
      ],
    },

    hero: {
      locationEyebrow: "New Zayed · Mehwar El Dabaa",
      /** Hub depth — distinct headline from homepage brand statement */
      h1: `${entry.name} project guide`,
      communityLine: `A 316-acre walkable community by ${entry.developer}, planned around greenery, privacy, and clear West Cairo access.`,
      seoSupportLine:
        "Apartments, townhouses, twin houses, and standalone villas in New Zayed. Request current prices and payment terms before reserving.",
    },

    overview: {
      eyebrow: "Developer",
      title: `${entry.developer} behind the master plan`,
      paragraphs: [
        `${short} is developed by ${entry.developer}, chaired by ${siteConfig.founder}. For buyers, the value is not only the name. It is the way the land is planned: low density, strong greenery, and a compound structure that feels coherent from arrival to daily living.`,
        "The project brings apartments, townhouses, twin houses, and villas into one estate. That mix gives investors and families more than one entry point while keeping the address anchored by the same master plan.",
      ],
    },

    propertyTypes: {
      intro: `${short} offers four residential types across a low-density New Zayed footprint. Each option has a different balance of budget, privacy, land share, and long-term use, so the right choice should be matched to your family plan or investment horizon.`,
      types: [
        {
          title: "Apartments",
          description:
            "A practical way to enter Solana West with estate services, green outlooks, and a lower ticket than land-heavy homes.",
          investorNote: "Good for buyers seeking accessibility, easier ownership, and phase-specific price options.",
        },
        {
          title: "Townhouses",
          description:
            "Family homes on landscaped avenues, with private entrances and more space than apartments while staying easier to manage than detached villas.",
          investorNote: "A balanced middle ground for end users and long-hold investors.",
        },
        {
          title: "Twin houses",
          description:
            "Paired villa homes with a more private feel than townhouses and a more efficient land profile than standalone villas.",
          investorNote: "A step-up option for buyers comparing space, privacy, and budget.",
        },
        {
          title: "Standalone villas",
          description:
            "Detached homes for buyers who want maximum privacy, garden life, and the strongest sense of ownership inside the estate.",
          investorNote:
            "Best reviewed with current phase maps, plot details, finishing options, and live villa pricing.",
        },
      ],
    },

    payment: {
      eyebrow: "Prices & payment",
      title: "From 9.8M EGP with 5% down",
      summary:
        "Starting price from 9.8M EGP · 5% down payment · installments up to 10 years · delivery from 2027.",
      bullets: [
        "Prices vary by unit type, phase, size, view, and finishing route.",
        "The 5% down payment is the headline structure; confirm reservation deposits, fees, and payment dates in writing.",
        "Installments can extend up to 10 years depending on the current sales schedule.",
        "Delivery starts from 2027, with exact timing confirmed by cluster and unit.",
      ],
    },

    location: {
      eyebrow: "New Zayed",
      title: "Mehwar El Dabaa access with a private compound setting",
      intro: `${entry.name} sits on Mehwar El Dabaa, connecting buyers to New Zayed, Sheikh Zayed, and the wider West Cairo road network while keeping the residential experience inside a gated estate.`,
      routes: [
        {
          term: "Primary links",
          detail: "Direct access to Alexandria Desert Road and the Middle Ring Road.",
        },
        {
          term: "Routine reach",
          detail: "~5 min Waslet Dahshour · ~10 min Sphinx Airport · ~15 min Mall of Arabia, based on project marketing context.",
        },
        {
          term: "Market frame",
          detail: "Located near key residential destinations in New Zayed, with strong West Cairo access and a private ORA-led setting.",
        },
      ],
    },

    amenities: {
      eyebrow: "Life on site",
      title: "Amenities shaped around everyday calm",
      intro:
        "Solana West is positioned around a quieter daily rhythm: greenery, walkable routes, social spaces, and family-friendly amenities that support life inside the compound.",
      groups: [
        {
          title: "Aquatic & social core",
          lines: [
            "Pool and clubhouse areas create natural gathering points inside the estate.",
            "Residents have space to meet, unwind, and keep simple leisure close to home.",
          ],
        },
        {
          title: "Park rooms & buffers",
          lines: [
            "Green separation helps soften the distance between homes and supports open outlooks.",
            "Pedestrian routes make the compound easier to enjoy beyond the car.",
          ],
        },
        {
          title: "Architecture in sync",
          lines: [
            "Architecture, roads, and landscape are meant to read as one address, not a collection of unrelated blocks.",
            "That consistency is part of what gives a luxury compound long-term appeal.",
          ],
        },
      ],
    },

    faq: {
      eyebrow: "Resolution",
      title: "Project hub FAQs: Solana West buyer answers",
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: [...solanaWestFaqCanonical],
      fullFaqHref: "/faq",
    },

    finalCta: {
      eyebrow: "Next step",
      title: "Request current availability for your preferred unit",
      supporting:
        "Share your preferred unit type, budget range, and timeline. The sales team can return current availability, price brackets, payment details, and the next steps for reservation.",
      primaryLabel: "Request prices on WhatsApp",
      secondaryLabel: "Written enquiry",
    },
  };
}
