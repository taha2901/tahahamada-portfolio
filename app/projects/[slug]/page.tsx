import ProjectDetailsClient from "@/components/ProjectDetailsClient";
import { projects } from "@/data/projects";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectDetailsClient slug={params.slug} />;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}
