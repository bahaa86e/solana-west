import { AboutPageView } from "@/components/about/about-page-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { buildAboutPageModel } from "@/data/about/about-page-model";
import { aboutPageSeo } from "@/data/seo/routes";
import { getAboutStructuredData } from "@/lib/schema/jsonld/about-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(aboutPageSeo);

export default function AboutPage() {
  const model = buildAboutPageModel();

  return (
    <>
      <JsonLd data={getAboutStructuredData(aboutPageSeo, model)} />
      <PageMain>
        <AboutPageView model={model} />
      </PageMain>
    </>
  );
}
