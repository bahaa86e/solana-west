import { ContactExperienceView } from "@/components/contact/contact-experience-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { buildContactPageModelAr } from "@/data/contact/contact-page-model-ar";
import { contactPageSeoAr } from "@/data/seo/ar-routes-registry";
import { getContactStructuredData } from "@/lib/schema/jsonld/contact-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(contactPageSeoAr);

export default function ArabicContactPage() {
  const model = buildContactPageModelAr();

  return (
    <>
      <JsonLd data={getContactStructuredData(contactPageSeoAr, model)} />
      <PageMain>
        <ContactExperienceView model={model} />
      </PageMain>
    </>
  );
}
