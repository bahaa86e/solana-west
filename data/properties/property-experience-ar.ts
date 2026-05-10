import type { PropertyExperienceModel } from "@/data/properties/property-type-experience";
import { buildPropertyExperienceModel, type PropertyExperienceSlug } from "@/data/properties/property-type-experience";
import { englishPathToArabicPath } from "@/lib/i18n/paths";

function mapPath(href: string) {
  return englishPathToArabicPath[href] ?? href;
}

/** Localize URLs inside an English-authored property hub while keeping typography under the Arabic editorial shell */
export function withArabicPropertyUrls(model: PropertyExperienceModel): PropertyExperienceModel {
  return {
    ...model,
    relatedProject: {
      ...model.relatedProject,
      href: mapPath(model.relatedProject.href),
    },
    faqPreview: {
      ...model.faqPreview,
      fullFaqHref: mapPath(model.faqPreview.fullFaqHref),
    },
  };
}

export function buildPropertyExperienceModelArabicPaths(slug: PropertyExperienceSlug): PropertyExperienceModel {
  return withArabicPropertyUrls(buildPropertyExperienceModel(slug));
}
