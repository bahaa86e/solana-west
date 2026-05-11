import { notFound } from "next/navigation";

import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { ProjectPageView } from "@/components/projects/project-page-view";
import { createSolanaWestPageContentAr } from "@/data/projects/content/solana-west-ar";
import { resolveProjectPage } from "@/data/projects/resolve-project-page";
import type { ProjectImageAsset, ProjectPageMedia } from "@/data/projects/types";
import { solanaWestProjectPageSeoAr } from "@/data/seo/ar-routes-registry";
import { getProjectStructuredDataGraph } from "@/lib/schema/jsonld/project-graph";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(solanaWestProjectPageSeoAr);

function withArabicAlt(asset: ProjectImageAsset, alt: string): ProjectImageAsset {
  return { ...asset, alt };
}

function localizeProjectMediaForArabic(media: ProjectPageMedia): ProjectPageMedia {
  return {
    ...media,
    hero: withArabicAlt(media.hero, "فيلات ومساحات خضراء داخل كمبوند سولانا ويست نيو زايد من ORA Developer Egypt."),
    overviewFigure: withArabicAlt(media.overviewFigure, "تصميم معماري عصري ومساحات مفتوحة في سولانا ويست نيو زايد."),
    locationAtmosphere: withArabicAlt(media.locationAtmosphere, "موقع سولانا ويست نيو زايد ضمن امتداد غرب القاهرة ومحور الضبعة."),
    locationMap: withArabicAlt(media.locationMap, "خريطة موقع سولانا ويست نيو زايد واتصاله بمحاور غرب القاهرة."),
    amenities: media.amenities.map((asset, index) =>
      withArabicAlt(
        asset,
        [
          "مرافق فاخرة ونادٍ هادئ داخل سولانا ويست نيو زايد.",
          "المساحات الخضراء وممرات المشاة في سولانا ويست من ORA Developer Egypt.",
          "تصميم معماري عصري وسط مشهد أخضر في سولانا ويست نيو زايد.",
        ][index] ?? "صورة معمارية من سولانا ويست نيو زايد.",
      ),
    ),
  };
}

export default function ArabicSolanaWestProjectPage() {
  const bundle = resolveProjectPage("solana-west");
  if (!bundle) notFound();

  const page = {
    ...bundle,
    content: createSolanaWestPageContentAr(bundle.entry),
    media: localizeProjectMediaForArabic(bundle.media),
  };

  return (
    <>
      <JsonLd data={getProjectStructuredDataGraph(page, solanaWestProjectPageSeoAr)} />
      <PageMain>
        <ProjectPageView page={page} />
      </PageMain>
    </>
  );
}
