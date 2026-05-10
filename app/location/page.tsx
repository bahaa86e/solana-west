import { LocationPageView } from "@/components/location/location-page-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { buildLocationPageModel } from "@/data/location/location-page-model";
import { locationPageSeo } from "@/data/seo/routes";
import { getLocationStructuredData } from "@/lib/schema/jsonld/location-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(locationPageSeo);

export default function LocationPage() {
  const model = buildLocationPageModel();

  return (
    <>
      <JsonLd data={getLocationStructuredData(locationPageSeo, model)} />
      <PageMain>
        <LocationPageView model={model} />
      </PageMain>
    </>
  );
}
