import { HomeSections } from "@/components/home/home-sections";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { homeMetadata } from "@/data/seo/home";
import { getHomeWebPageJsonLd } from "@/schemas/webpage";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(homeMetadata);

export default function HomePage() {
  return (
    <>
      <JsonLd data={getHomeWebPageJsonLd(homeMetadata)} />
      <PageMain>
        <HomeSections />
      </PageMain>
    </>
  );
}
