import { PropertyTypeExperienceView } from "@/components/properties/property-type-experience-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPropertyExperienceModelArabicPaths } from "@/data/properties/property-experience-ar";
import { twinHousesPageSeoAr } from "@/data/seo/ar-routes-registry";
import { getPropertyExperienceStructuredData } from "@/lib/schema/jsonld/property-type-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(twinHousesPageSeoAr);

export default function ArabicTwinHousesPage() {
  const model = buildPropertyExperienceModelArabicPaths("twin-houses");

  return (
    <>
      <JsonLd data={getPropertyExperienceStructuredData(twinHousesPageSeoAr, model)} />
      <PageMain>
        <PropertyTypeExperienceView model={model} />
      </PageMain>
    </>
  );
}
