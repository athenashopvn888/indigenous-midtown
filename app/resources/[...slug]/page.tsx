import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourceView from "../ResourceView";
import { getResourcePage, RESOURCE_PAGES } from "../resourceData";
import { isHiddenCigaretteHref } from "../../lib/showCigarettes";

type ResourceRouteProps = {
  params: Promise<{ slug?: string[] }>;
};

function routeSlug(slug?: string[]) {
  return (slug || []).join("/");
}

export function generateStaticParams() {
  return RESOURCE_PAGES.filter((page) => page.slug).map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({ params }: ResourceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourcePage(routeSlug(slug));
  if (!page || isHiddenCigaretteHref(`/resources/${page.slug}`)) return { robots: { index: false, follow: false } };
  return {
    title: page.seoTitle,
    description: page.description,
    alternates: { canonical: "https://www.indigenousmidtowncannabis.ca/resources/" + page.slug },
  };
}

export default async function ResourcePage({ params }: ResourceRouteProps) {
  const { slug } = await params;
  const page = getResourcePage(routeSlug(slug));
  if (!page || isHiddenCigaretteHref(`/resources/${page.slug}`)) notFound();
  return <ResourceView page={page} />;
}
