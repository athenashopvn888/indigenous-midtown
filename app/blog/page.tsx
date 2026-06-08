import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — Indigenous Midtown Cannabis | Toronto",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from Indigenous Midtown Cannabis in Toronto.",
  alternates: {
    canonical: "https://indigenousmidtowncannabis.ca/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
