import { PropertyTypeExperienceView } from "@/components/properties/property-type-experience-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPropertyExperienceModel } from "@/data/properties/property-type-experience";
import { apartmentsPageSeo } from "@/data/seo/routes";
import { getPropertyExperienceStructuredData } from "@/lib/schema/jsonld/property-type-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(apartmentsPageSeo);

export default function ApartmentsPage() {
  const model = buildPropertyExperienceModel("apartments");

  return (
    <>
      <JsonLd data={getPropertyExperienceStructuredData(apartmentsPageSeo, model)} />
      <PageMain>
        <PropertyTypeExperienceView model={model} />
      </PageMain>
    </>
  );
}
