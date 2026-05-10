import { PropertyTypeExperienceView } from "@/components/properties/property-type-experience-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPropertyExperienceModelArabicPaths } from "@/data/properties/property-experience-ar";
import { townhousesPageSeoAr } from "@/data/seo/ar-routes-registry";
import { getPropertyExperienceStructuredData } from "@/lib/schema/jsonld/property-type-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(townhousesPageSeoAr);

export default function ArabicTownhousesPage() {
  const model = buildPropertyExperienceModelArabicPaths("townhouses");

  return (
    <>
      <JsonLd data={getPropertyExperienceStructuredData(townhousesPageSeoAr, model)} />
      <PageMain>
        <PropertyTypeExperienceView model={model} />
      </PageMain>
    </>
  );
}
