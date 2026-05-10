import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { ProjectsHubPageView } from "@/components/projects-hub/projects-hub-page-view";
import { buildProjectsHubPageModel } from "@/data/projects/projects-hub-model";
import { projectsHubPageSeo } from "@/data/seo/routes";
import { getProjectsHubStructuredData } from "@/lib/schema/jsonld/projects-hub-page";
import { buildPageMetadata } from "@/seo/build-metadata";

export const metadata = buildPageMetadata(projectsHubPageSeo);

export default function ProjectsHubPage() {
  const model = buildProjectsHubPageModel();

  return (
    <>
      <JsonLd data={getProjectsHubStructuredData(projectsHubPageSeo, model)} />
      <PageMain>
        <ProjectsHubPageView model={model} />
      </PageMain>
    </>
  );
}
