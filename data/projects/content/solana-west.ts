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
      description: `${entry.name} on Mehwar El Dabaa: 316-acre walkable estate, villas to apartments. Apartments starting from 9.8M EGP, 5% down, up to 10 years, delivery from 2027. ORA-led master plan—${siteConfig.founder}.`,
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
      h1: `${entry.name} · project briefing — units, amenities & access`,
      communityLine: `A 316-acre walkable estate by ${entry.developer}—architecture, landscape, and circulation planned as one composition.`,
      seoSupportLine:
        "Villas, twin houses, townhouses, and apartments in West Cairo. Commercial terms are confirmed at current sales sheet.",
    },

    overview: {
      eyebrow: "Developer",
      title: `${entry.developer} — contract-facing developer`,
      paragraphs: [
        `Chairman ${siteConfig.founder} stages land with portfolio-wide discipline—you are contracting with an operating developer, not interpreting a render. Density, servicing, and long-horizon layout at ${short} follow that same investment review bar.`,
        `Landscape, pedestrian movement, and elevated villa massing read as one continuous master plan—setbacks and green structure are coordinated so the compound holds together as a place, not a scatter of building pads.`,
      ],
    },

    propertyTypes: {
      intro: `${short} phases four typologies across a low-density footprint—apartments through standalone villas. Current sales sheet sets live brackets, façades, and finishing path; marketing figures orient intent only.`,
      types: [
        {
          title: "Apartments",
          description:
            "Elevated apartment inventory inside the green armature—owner-occupiers who want estate governance without villa land carry, or investors sizing rental exposure inside one managed compound.",
          investorNote: "Lower land coefficient per unit—phase-specific price bands apply.",
        },
        {
          title: "Townhouses",
          description:
            "Multi-storey homes on walkable avenues with private entries—more square footage and privacy than typical apartments, without full detached land dedication.",
          investorNote: "Balances ticket size with operational simplicity versus standalone stock.",
        },
        {
          title: "Twin houses",
          description:
            "Paired villas with a controlled party interface—wider frontage than townhouses while retaining efficient servicing and setbacks.",
          investorNote: "Mid step on the equity curve between townhomes and detached villas.",
        },
        {
          title: "Standalone villas",
          description:
            "Detached villas, elevated where the plan allows for open green outlooks. Finishing may be fully finished or core & shell—confirm façade packages and lot dimensions with the sales team.",
          investorNote:
            "Apartments starting from 9.8M EGP; phase, outlook, and specification move live prices.",
        },
      ],
    },

    payment: {
      eyebrow: "Acquisition",
      title: "Headline payment outline — current sales sheet executes the detail",
      summary:
        "Apartments starting from 9.8M EGP · 5% down payment · installments up to 10 years · delivery from 2027.",
      bullets: [
        "Starting-price starting price: from 9.8M EGP (phase, typology, finishing, and outlook reset the live bracket at booking).",
        "Reservation posture: 5% down—verify deposits, admin fees, and payment timing in your current sales pack.",
        "Tenor: installments may extend up to 10 years—how interest is applied belongs in the signed schedule, not in a web summary.",
        "Delivery horizon: from 2027—cluster and tower dates follow construction fulfilment; confirm in writing before you review rent or exit timing.",
      ],
    },

    location: {
      eyebrow: "New Zayed",
      title: "Mehwar El Dabaa frontage — arterial reach, estate privacy",
      intro: `${entry.name} fronts Mehwar El Dabaa—West Cairo’s longitudinal link between Sheikh Zayed’s established fabric and westward expansion. Arterial reach without surrendering a gated residential envelope.`,
      routes: [
        {
          term: "Primary links",
          detail: "Direct access to Alexandria Desert Road and the Middle Ring Road.",
        },
        {
          term: "Routine reach",
          detail: "~5 min Waslet Dahshour · ~10 min Sphinx Airport · ~15 min Mall of Arabia—directional drive context as cited in project information.",
        },
        {
          term: "Market frame",
          detail: "Adjacent large-scale mentions include VYE (Sodic) and Belle Vie (Emaar)—comparables only, not affiliations.",
        },
      ],
    },

    amenities: {
      eyebrow: "Life on site",
      title: "Aquatic, clubhouse & green buffers on pedestrian spines",
      intro:
        "Pools, club spaces, and green rooms tie into the pedestrian plan—leisure sits inside circulation, not at the end of a separate commute. The outcome is quieter daily rhythm for families and frequent travellers.",
      groups: [
        {
          title: "Aquatic & social core",
          lines: [
            "Temperature-controlled pool and clubhouse cluster anchor resident life inside the walkable fabric.",
            "Social energy stays on-site—reducing reliance on off-compound leisure for ordinary weeks.",
          ],
        },
        {
          title: "Park rooms & buffers",
          lines: [
            "Wide green separation between built rows supports sight lines mentioned in elevated villa massing.",
            "Pedestrian priority keeps driveway noise at the edges—not through front doors.",
          ],
        },
        {
          title: "Architecture in sync",
          lines: [
            "Facades and avenues are composed together so the estate reads authored—not façades imported onto leftover plots.",
            "That continuity keeps a 316-acre plan legible on year five as on day one.",
          ],
        },
      ],
    },

    faq: {
      eyebrow: "Resolution",
      title: "Project hub FAQs — canonical Solana West answers",
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: [...solanaWestFaqCanonical],
      fullFaqHref: "/faq",
    },

    finalCta: {
      eyebrow: "Private advisory",
      title: "Book a desk briefing on your unit line and phase",
      supporting:
        "Share typology, finishing path, and hold horizon—the desk returns availability, sales-ready commercial detail, and clear next steps (WhatsApp or written enquiry). GCC and international buyers receive structured answers suitable for family review.",
      primaryLabel: "WhatsApp private desk",
      secondaryLabel: "Written enquiry",
    },
  };
}
