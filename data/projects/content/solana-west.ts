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
      title: `${entry.name} · project hub | ${entry.developer}`,
      description: `${entry.name}: 316-acre plan on Mehwar El Dabaa, New Zayed. Walkable low-density community, villas and apartments, reference from 9.8M EGP, 5% down, up to 10 years, delivery from 2027. ${siteConfig.founder}–led ${entry.developer}.`,
      openGraphImagePath: defaultOpenGraphImagePath,
      keywords: [
        `${short} ORA`,
        `${short} New Zayed master plan`,
        `${siteConfig.founder} ${short}`,
        "New Zayed villas ORA",
      ],
    },

    hero: {
      locationEyebrow: "New Zayed · Mehwar El Dabaa",
      h1: entry.name,
      communityLine: `A low-density residential community by ${entry.developer} in New Zayed.`,
      seoSupportLine:
        "Standalone villas, twin houses, townhouses, and apartments in West Cairo — long-term instalment structures available.",
    },

    overview: {
      eyebrow: "Overview",
      title: entry.developer,
      paragraphs: [
        `${entry.developer} is led by Chairman ${siteConfig.founder}. Density, servicing, and long-horizon land use are staged with the same measured discipline applied across the wider ORA portfolio.`,
        `At ${short}, landscape, pedestrian movement, and villa massing read as one coordinated master plan — not isolated building pads.`,
      ],
    },

    propertyTypes: {
      intro: `${short} allocates four residential typologies across a 316-acre, low-density plan — issuance pricing and façade packages vary by phase.`,
      types: [
        {
          title: "Apartments",
          description:
            "Fully finished apartment product overlooking green structure — suited to owner occupation or disciplined rental inventory under the same managed estate.",
          investorNote: "Smaller footprint, phase-driven commercial bands.",
        },
        {
          title: "Townhouses",
          description:
            "Multi-storey townhouses stitched into walkable avenues and landscape buffers — private entries with compound-level security and servicing.",
          investorNote: "Balances land cost with privacy versus apartments.",
        },
        {
          title: "Twin houses",
          description:
            "Paired villas sharing a discrete party line — wider frontage than townhouses while retaining efficient servicing and setbacks.",
          investorNote: "Mid-step between townhouse density and detached stock.",
        },
        {
          title: "Standalone villas",
          description:
            "Elevated villas with open green outlooks — largest land dedication per unit in the plan; finishing available fully finished or core & shell.",
          investorNote:
            "Upper band of the product mix — the published starting context remains from 9.8M EGP; confirm façade- and phase-specific brackets with sales.",
        },
      ],
    },

    payment: {
      eyebrow: "Commercial terms",
      title: "Payment plan",
      summary:
        "Reference pricing from 9.8M EGP, with a 5% down payment and installments up to 10 years. Delivery from 2027.",
      bullets: [
        "Starting pricing context: from 9.8M EGP.",
        "Down payment: 5%.",
        "Installment tenor: up to 10 years (structure subject to issuance at booking).",
        "Anticipated handover horizon: delivery from 2027.",
      ],
    },

    location: {
      eyebrow: "Connectivity",
      title: "Location advantages",
      intro: `${entry.name} sits along Mehwar El Dabaa in New Zayed, with arterial links to Alexandria Desert Road and the Middle Ring Road.`,
      routes: [
        {
          term: "Arterials",
          detail: "Direct access — Alexandria Desert Road · Middle Ring Road.",
        },
        {
          term: "West Cairo anchors",
          detail: "~5 min Waslet Dahshour · ~10 min Sphinx Airport · ~15 min Mall of Arabia.",
        },
        {
          term: "Context",
          detail: "Neighboring comps (market reference): VYE (Sodic) · Belle Vie (Emaar).",
        },
      ],
    },

    amenities: {
      eyebrow: "Community",
      title: "Amenities · open space",
      intro:
        "Community facilities and landscape are composed as continuous open space — not accessory lawns around isolated buildings.",
      groups: [
        {
          title: "Aquatic & club amenity",
          lines: [
            "Temperature-controlled pool and clubhouse cluster for resident use.",
            "Social anchor within the walkable plan — reduces reliance on off-site leisure for daily routines.",
          ],
        },
        {
          title: "Park & landscape rooms",
          lines: [
            "Wide green buffers between built rows — supports sight lines referenced in elevated villa massing.",
            "Pedestrian movement prioritised over drive-dominated edges.",
          ],
        },
        {
          title: "Avenue & spine landscaping",
          lines: [
            "Tree-lined connectors stitch residential clusters to amenity cores.",
            "Maintains legibility of the 316-acre master plan at ground level.",
          ],
        },
      ],
    },

    faq: {
      eyebrow: "Answers",
      title: "FAQ",
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: [...solanaWestFaqCanonical],
      fullFaqHref: "/faq",
    },

    finalCta: {
      eyebrow: "Next step",
      title: "Request pricing & payment options",
      supporting:
        "Share your unit preference and tenure; we confirm availability, issuance terms, and the latest commercial schedule by channel.",
      primaryLabel: "WhatsApp",
      secondaryLabel: "Contact",
    },
  };
}
