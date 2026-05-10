import { LocationPageView } from "@/components/location/location-page-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { buildLocationPageModelAr } from "@/data/location/location-page-model-ar";
import { locationPageSeoAr } from "@/data/seo/ar-routes-registry";
import { getLocationStructuredData } from "@/lib/schema/jsonld/location-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(locationPageSeoAr);

export default function ArabicLocationPage() {
  const model = buildLocationPageModelAr();

  return (
    <>
      <JsonLd data={getLocationStructuredData(locationPageSeoAr, model)} />
      <PageMain>
        <LocationPageView model={model} />
      </PageMain>
    </>
  );
}
