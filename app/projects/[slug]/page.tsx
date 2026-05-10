import { notFound } from "next/navigation";

import { ProjectPageView } from "@/components/projects/project-page-view";
import { PageMain } from "@/components/layout/page-main";
import { JsonLd } from "@/components/seo/json-ld";
import { projectSlugs } from "@/data/projects/registry";
import { resolveProjectPage } from "@/data/projects/resolve-project-page";
import { buildProjectRouteMetadata } from "@/data/seo/projects";
import { getProjectStructuredDataGraph } from "@/lib/schema/jsonld/project-graph";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props) {
  const bundle = resolveProjectPage(params.slug);
  if (!bundle) {
    return {};
  }
  return buildProjectRouteMetadata(bundle);
}

export default function ProjectPage({ params }: Props) {
  const bundle = resolveProjectPage(params.slug);
  if (!bundle) {
    notFound();
  }

  return (
    <>
      <JsonLd data={getProjectStructuredDataGraph(bundle)} />
      <PageMain>
        <ProjectPageView page={bundle} />
      </PageMain>
    </>
  );
}
