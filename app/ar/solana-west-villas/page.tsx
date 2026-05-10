import { PropertyTypeExperienceView } from "@/components/properties/property-type-experience-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPropertyExperienceModelArabicPaths } from "@/data/properties/property-experience-ar";
import { villasPageSeoAr } from "@/data/seo/ar-routes-registry";
import { getPropertyExperienceStructuredData } from "@/lib/schema/jsonld/property-type-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(villasPageSeoAr);

export default function ArabicVillasPage() {
  const model = buildPropertyExperienceModelArabicPaths("villas");

  return (
    <>
      <JsonLd data={getPropertyExperienceStructuredData(villasPageSeoAr, model)} />
      <PageMain>
        <PropertyTypeExperienceView model={model} />
      </PageMain>
    </>
  );
}
