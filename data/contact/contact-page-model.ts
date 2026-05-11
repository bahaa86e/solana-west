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
      locationEyebrow: "Inquiry desk · accredited sales",
      h1: "Contact Solana West sales — New Zayed buyer enquiries",
      lead:
        `Use this page to reach ${dev} for ${project} with minimal friction: direct channels for fast context, or a compact written enquiry when you prefer a recorded hand-off.`,
      supporting:
        "No urgency framing and no implied inventory — responses follow accredited desk hours. WhatsApp and phone are often the fastest path to sales-confirmed answers.",
    },
    overview: {
      eyebrow: "Contact overview",
      title: "Accredited desks — how Solana West briefs route",
      paragraphs: [
        `${short} sales operate through ${dev}'s authorised workflow — quotations, payment steps, reservations, and after-sales escalation are documented desk-side, not improvised from chat excerpts alone.`,
        "This inquiry layer is informational: align your preferred channel (instant messaging, voice, or structured form), then rely on current sales sheet paperwork for final commercial terms.",
        "Prefer self-serve facts first — review prices, payment plan, location, and FAQ routes on this site; use contact when your brief requires typology routing or current sales sheet verification.",
      ],
    },
    reassurance: {
      eyebrow: "Inquiry reassurance",
      title: "Routing integrity — no phantom inventory theatrics",
      paragraphs: [
        "Three visible fields — name, phone, and typology preference — minimise friction while still routing sales-aware briefs.",
        "Third-party intermediaries mentioning the compound are not vetted via this route — broker engagement remains your diligence matter unless ORA designates an accredited channel partner.",
      ],
    },
    channels: {
      eyebrow: "Direct channels",
      title: "WhatsApp, voice and email — one desk philosophy",
      intro:
        "Choose the modality that suits your investment review rhythm — all route into the same desk philosophy: calm, documentary, sales-team confirmed.",
    },
    formColumn: {
      eyebrow: "Written enquiry",
      title: "Short form — name, reachability, typology",
      intro:
        "Three fields capture who you are, how to reply, and which typology you are exploring — context attaches automatically for authorised desks.",
    },
    faqPreview: {
      intro: SOLANA_WEST_FAQ_SHARED_INTRO,
      items: faqPick([5, 1]),
      fullFaqHref: "/faq",
    },
    finalCta: {
      eyebrow: "Still browsing?",
      title: "Re-open prices, payments and New Zayed access",
      supporting:
        `Cross-check pricing posture, payment structure, and New Zayed access before you reserve—then re-open WhatsApp or this form when your brief is ready for desk review.`,
      primaryLabel: "WhatsApp private desk",
      secondaryLabel: "Prices route",
      secondaryHref: "/prices",
    },
  };
}
