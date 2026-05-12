import { SOLANA_WEST_FAQ_SHARED_INTRO, solanaWestFaqCanonical } from "@/data/faq/solana-west-faq";
import type { FaqPair, ProjectImageAsset } from "@/data/projects/types";
import { resolveProjectPage } from "@/data/projects/resolve-project-page";
import { siteConfig } from "@/data/site";

export type ContactPageModel = {
  idPrefix: string;
  heroImage: ProjectImageAsset;
  hero: {
    locationEyebrow: string;
    h1: string;
    lead: string;
    supporting: string;
  };
  overview: { eyebrow: string; title: string; paragraphs: readonly string[] };
  reassurance: { eyebrow: string; title: string; paragraphs: readonly string[] };
  channels: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  formColumn: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  faqPreview: { intro: string; items: readonly FaqPair[]; fullFaqHref: string };
  finalCta: {
    eyebrow: string;
    title: string;
    supporting: string;
    primaryLabel: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};

function faqPick(indices: readonly [number, number]): readonly FaqPair[] {
  return indices.map((i): FaqPair => solanaWestFaqCanonical[i]);
}

export function buildContactPageModel(): ContactPageModel {
  const bundle = resolveProjectPage("solana-west");
  if (!bundle) {
    throw new Error("Solana West bundle required for /contact composition.");
  }

  const dev = siteConfig.developer;
  const short = siteConfig.shortName;
  const project = siteConfig.name;

  const heroImage = bundle.media.amenities[1] ?? bundle.media.hero;

  return {
    idPrefix: "contact-sw",
    heroImage,
    hero: {
      locationEyebrow: "Solana West enquiries",
      h1: "Contact Solana West sales",
      lead:
        `Use this page to request current prices, payment plan details, available unit types, and site visit support for ${project}.`,
      supporting:
        "WhatsApp and phone are usually the fastest way to get a clear answer. The form is better when you want to leave a written brief.",
    },
    overview: {
      eyebrow: "Contact overview",
      title: "What to ask before reserving",
      paragraphs: [
        `For ${short}, the most useful enquiry includes your preferred unit type, budget range, payment comfort, and timing.`,
        "Ask for the current price sheet, available phases, payment schedule, delivery timing, and any fees before making a reservation decision.",
        "If you are still comparing, review the prices, payment plan, location, and FAQ pages first, then contact the sales team with a clearer brief.",
      ],
    },
    reassurance: {
      eyebrow: "Inquiry reassurance",
      title: "Clear answers, no pressure language",
      paragraphs: [
        "The form keeps the process simple: name, phone, and preferred unit type.",
        "No fake countdowns, no invented stock claims, and no pressure to reserve before you have the documents you need.",
      ],
    },
    channels: {
      eyebrow: "Direct channels",
      title: "WhatsApp, phone, email, or form",
      intro:
        "Choose the channel that fits the stage you are in. Fast questions usually belong on WhatsApp or phone; detailed briefs work well through the form.",
    },
    formColumn: {
      eyebrow: "Written enquiry",
      title: "Short form for serious enquiries",
      intro:
        "Share your name, phone number, and preferred typology so the reply can focus on relevant availability and pricing.",
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqPick([5, 1]),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Still browsing?",
      title: "Review prices, payment, and location first",
      supporting:
        "If you are not ready to contact yet, compare the price entry, payment structure, and New Zayed access first. Then return with your preferred unit type.",
      primaryLabel: "Ask on WhatsApp",
      secondaryLabel: "Prices route",
      secondaryHref: "/prices",
    },
  };
}
