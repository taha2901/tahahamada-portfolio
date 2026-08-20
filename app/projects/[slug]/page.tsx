import type { Metadata } from "next";
import ProjectDetailsClient from "@/components/ProjectDetailsClient";
import { projects } from "@/data/projects";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  const title = `${project.title} — Taha Hamada`;
  const description = project.description;
  // The card cover doubles as the share image.
  const images = [{ url: project.images[0], alt: project.coverAlt ?? project.title }];

  return {
    title,
    description,
    openGraph: { title, description, type: "article", images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectDetailsClient slug={params.slug} />;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}
