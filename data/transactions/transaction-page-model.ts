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
      context: "Current sales bracketing and typology context.",
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
      context: "Amenities, location, master plan, and full unit-type overview.",
    },
    {
      label: "Apartments",
      href: "/properties/apartments",
      context: "A practical entry into the compound with current view and phase details.",
    },
    {
      label: "Townhouses",
      href: "/properties/townhouses",
      context: "Family homes on landscaped avenues with a balanced ticket.",
    },
    {
      label: "Twin houses",
      href: "/properties/twin-houses",
      context: "Paired villa living between townhouses and standalone homes.",
    },
    {
      label: "Standalone villas",
      href: "/properties/villas",
      context: "Detached homes where plot, outlook, and finishing move the price band.",
    },
    {
      label: "FAQ index",
      href: "/faq",
      context: "Clear answers on prices, payment, delivery, location, and unit types.",
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
      locationEyebrow: "Prices · New Zayed · ORA Developers Egypt",
      h1: "Solana West prices in New Zayed",
      lead:
        `Solana West prices start from 9.8M EGP at project level. Final pricing depends on the unit type, phase, size, view, finishing route, and the current release from ${bundle.entry.developer}.`,
      supporting:
        "Use this page as a clear pricing guide, then request a dated sales sheet before making any reservation decision.",
    },
    overview: {
      eyebrow: "Overview",
      title: "What the starting price means",
      paragraphs: [
        `${short} is a 316-acre, low-density compound on Mehwar El Dabaa. The starting price gives buyers a useful entry point, but it does not replace a current quotation.`,
        "Apartments, townhouses, twin houses, and standalone villas sit in different price bands. Phase, view, finishing, and plot or floor position can change the final number materially.",
        "Review the unit-type pages for lifestyle fit, then use this route to understand pricing before requesting live availability.",
      ],
    },
    breakdowns: {
      eyebrow: "Buyer breakdown",
      title: "How prices differ by unit type",
      intro:
        "The right number depends on the home you choose. A smaller apartment, a townhouse, a twin house, and a standalone villa serve different budgets and different ownership goals.",
      sections: [
        {
          heading: "Apartments",
          body: [
            "Apartments are usually the most accessible way to enter Solana West, especially for buyers seeking a lower ticket and simpler maintenance.",
            "Floor, view, finishing, building position, and phase still matter. Request the exact apartment stack before comparing options.",
          ],
          links: [{ label: "Apartments editorial route", href: "/properties/apartments" }],
        },
        {
          heading: "Townhouses",
          body: [
            "Townhouses offer a family-home feel with private entries and more space than apartments, without the full price profile of detached villas.",
            "Compare townhouse releases by phase, location within the estate, and payment schedule before relying on any informal quote.",
          ],
          links: [{ label: "Townhouses editorial route", href: "/properties/townhouses" }],
        },
        {
          heading: "Twin houses",
          body: [
            "Twin houses sit between townhouses and standalone villas, giving buyers more privacy and frontage while staying more efficient than detached homes.",
            "Check outlook, finishing path, plot feel, and phase pricing against both townhouse and villa options.",
          ],
          links: [{ label: "Twin houses editorial route", href: "/properties/twin-houses" }],
        },
        {
          heading: "Standalone villas",
          body: [
            "Standalone villas are the most land-rich and private homes in the mix, so pricing can move significantly by plot, view, finishing, and phase.",
            "Do not assume the project-level starting price applies to detached villas. Request a villa-specific quotation before shortlisting.",
          ],
          links: [{ label: "Standalone villas editorial route", href: "/properties/villas" }],
        },
        {
          heading: "Compare New Zayed carefully",
          body: [
            "Nearby luxury communities help frame the New Zayed market, but each project has its own land plan, pricing, and release strategy.",
            "Treat social media price screenshots as informal until matched with an official current price list.",
          ],
          links: [{ label: "Project hub — amenities & connectivity", href: "/projects/solana-west" }],
        },
      ],
    },
    internalLinks: {
      eyebrow: "Next research steps",
      title: "Compare payment, location, and unit types",
      intro: "Use these routes to move from price interest to a more confident shortlist.",
      links: baseInternalLinks(false, true),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqPick([0, 4, 1]),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Next step",
      title: "Request a current quotation",
      supporting:
        `Share your target unit type, budget range, and timeline. The sales team can send current availability, phase pricing, and payment options from ${bundle.entry.developer}.`,
      primaryLabel: "Request prices on WhatsApp",
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
      locationEyebrow: "Payment plan · 5% down · up to 10 years",
      h1: "Solana West payment plan",
      lead:
        "Solana West is marketed with 5% down payment and installments up to 10 years, with delivery starting from 2027.",
      supporting:
        `The exact payment steps, reservation deposit, fees, and unit-specific delivery timing should be confirmed through the current ${bundle.entry.developer} sales schedule.`,
    },
    overview: {
      eyebrow: "Overview",
      title: "A flexible structure for long-term buyers",
      paragraphs: [
        `${short} gives buyers a relatively light entry point through the 5% down payment, then spreads the remaining balance across an extended installment period.`,
        "That flexibility is useful, but the signed schedule is what matters. Payment dates, fees, reservation steps, and delivery timing should be reviewed before reserving.",
        "Pair this page with the prices route and the unit-type pages so you can compare affordability, lifestyle fit, and timing in one view.",
      ],
    },
    breakdowns: {
      eyebrow: "Structure",
      title: "Down payment, installments, and delivery",
      intro:
        "The headline terms are simple. The detailed schedule should still be confirmed in writing before any reservation.",
      sections: [
        {
          heading: "5% down payment",
          body: [
            "The published structure starts with 5% down. Reservation deposits, administrative fees, and payment timing should be checked in the current sales pack.",
            "Keep enough payment headroom until the sales team confirms the exact schedule for your chosen unit.",
          ],
          links: [{ label: "Price brackets & typology context", href: "/prices" }],
        },
        {
          heading: "Instalments up to 10 years",
          body: [
            "Installments may extend up to 10 years, depending on the current release and unit type.",
            "For investment planning, ask how payments are distributed across the construction period and after delivery.",
          ],
          links: [{ label: "Full FAQ — payment wording", href: "/faq" }],
        },
        {
          heading: "Delivery from 2027",
          body: [
            "Project delivery is marketed from 2027. Exact handover timing may differ by cluster, building, or release.",
            "If you are buying for rental, resale, or family relocation, confirm delivery timing before building your plan around a specific date.",
          ],
          links: [{ label: "Project hub — delivery FAQs in context", href: "/projects/solana-west" }],
        },
        {
          heading: "How to read the plan as an investor",
          body: [
            "A long installment plan can reduce entry pressure, but it does not replace due diligence on price, delivery, service charges, and exit timing.",
            "Serious buyers should compare the payment plan with New Zayed location value, ORA developer profile, and the specific unit they are reserving.",
          ],
        },
      ],
    },
    internalLinks: {
      eyebrow: "Next research steps",
      title: "Compare the payment plan with price, place, and product",
      intro: "Use these pages before modelling cash flow or choosing a unit type.",
      links: baseInternalLinks(true, false),
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqPick([1, 2, 4]),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Next step",
      title: "Request the latest installment schedule",
      supporting:
        `Ask for the current payment schedule, reservation steps, and availability for your preferred typology through ${bundle.entry.developer} sales channels.`,
      primaryLabel: "Request payment plan on WhatsApp",
      secondaryLabel: "Written enquiry",
    },
  };
}
