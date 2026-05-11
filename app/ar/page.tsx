import { ArabicHomePage } from "@/components/ar/arabic-home-page";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { homeMetadataAr } from "@/data/seo/home-metadata-ar";
import { getHomeWebPageJsonLd } from "@/lib/schema/jsonld/webpage";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(homeMetadataAr);

const arHomeH1 = "سولانا ويست نيو زايد من ORA Developer Egypt";

export default function ArabicHomeRoute() {
  return (
    <>
      <JsonLd data={getHomeWebPageJsonLd(homeMetadataAr, { headline: arHomeH1 })} />
      <PageMain>
        <ArabicHomePage />
      </PageMain>
    </>
  );
}
