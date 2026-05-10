import { AboutPageView } from "@/components/about/about-page-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { buildAboutPageModelAr } from "@/data/about/about-page-model-ar";
import { aboutPageSeoAr } from "@/data/seo/ar-routes-registry";
import { getAboutStructuredData } from "@/lib/schema/jsonld/about-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(aboutPageSeoAr);

export default function ArabicAboutOraPage() {
  const model = buildAboutPageModelAr();

  return (
    <>
      <JsonLd data={getAboutStructuredData(aboutPageSeoAr, model)} />
      <PageMain>
        <AboutPageView model={model} />
      </PageMain>
    </>
  );
}
