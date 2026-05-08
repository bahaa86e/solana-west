import { ContactExperienceView } from "@/components/contact/contact-experience-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { buildContactPageModel } from "@/data/contact/contact-page-model";
import { contactPageSeo } from "@/data/seo/routes";
import { getContactStructuredData } from "@/schemas/contact-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(contactPageSeo);

export default function ContactPage() {
  const model = buildContactPageModel();

  return (
    <>
      <JsonLd data={getContactStructuredData(contactPageSeo, model)} />
      <PageMain>
        <ContactExperienceView model={model} />
      </PageMain>
    </>
  );
}
