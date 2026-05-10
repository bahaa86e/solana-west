import { HomeSections } from "@/components/home/home-sections";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { homeMetadata, homeSections } from "@/data/seo/home";
import { getHomeWebPageJsonLd } from "@/lib/schema/jsonld/webpage";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(homeMetadata);

export default function HomePage() {
  return (
    <>
      <JsonLd data={getHomeWebPageJsonLd(homeMetadata, { headline: homeSections.hero.h1 })} />
      <PageMain>
        <HomeSections />
      </PageMain>
    </>
  );
}
