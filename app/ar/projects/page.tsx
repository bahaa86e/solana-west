import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { ProjectsHubPageView } from "@/components/projects-hub/projects-hub-page-view";
import { buildProjectsHubPageModelAr } from "@/data/projects/projects-hub-model-ar";
import { projectsHubPageSeoAr } from "@/data/seo/ar-routes-registry";
import { getProjectsHubStructuredData } from "@/lib/schema/jsonld/projects-hub-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(projectsHubPageSeoAr);

export default function ArabicProjectsHubPage() {
  const model = buildProjectsHubPageModelAr();

  return (
    <>
      <JsonLd data={getProjectsHubStructuredData(projectsHubPageSeoAr, model)} />
      <PageMain>
        <ProjectsHubPageView model={model} />
      </PageMain>
    </>
  );
}
