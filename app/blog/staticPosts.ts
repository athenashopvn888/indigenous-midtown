export interface StaticBlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  seo_title: string;
  metaDescription: string;
  meta_description: string;
  h1: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
  faq: string;
  internal_links_used: string;
  relatedLinks: Array<{
    title: string;
    url: string;
    description: string;
  }>;
}

export const STORE_BLOG_CONFIG = {
  storeCode: "IMC01",
  storeName: "Indigenous Midtown Cannabis",
  city: "Toronto",
  domain: "www.indigenousmidtowncannabis.ca",
  storePath: "/weed-dispensary-toronto",
};

export const STATIC_POSTS: StaticBlogPost[] = [
  {
    slug: "indigenous-midtown-cannabis-toronto-store-guide",
    title: "Indigenous Midtown Cannabis Local Store Guide for Adults 19+",
    seoTitle: "Indigenous Midtown Cannabis Guide | Toronto Adult 19+",
    seo_title: "Indigenous Midtown Cannabis Guide | Toronto Adult 19+",
    metaDescription: "Adult 19+ guide to Indigenous Midtown Cannabis around Midtown Toronto / Yonge and Eglinton / Mount Pleasant, with local store-page checks, menu-category context, and safe visit planning.",
    meta_description: "Adult 19+ guide to Indigenous Midtown Cannabis around Midtown Toronto / Yonge and Eglinton / Mount Pleasant, with local store-page checks, menu-category context, and safe visit planning.",
    h1: "Indigenous Midtown Cannabis Local Store Guide for Adults 19+",
    excerpt: "Indigenous Midtown Cannabis guide for adults 19+ reviewing store information around Midtown Toronto / Yonge and Eglinton / Mount Pleasant.",
    author: "Athena SEO Team",
    date: "2026-07-02",
    category: "Store Guide",
    readTime: "4 min",
    content: `## Indigenous Midtown Cannabis Local Store Guide for Adults 19+

Indigenous Midtown Cannabis serves adults 19+ looking for store information around Midtown Toronto / Yonge and Eglinton / Mount Pleasant. Use this guide to get oriented, compare the store page with menu categories, and choose the most useful next step before visiting.

The focus is practical and store-specific: confirm the right storefront, browse helpful category links, and use the store page for directions, contact options, and visit planning.

## Why Local Context Helps

Indigenous Midtown Cannabis is tied to Midtown Toronto and Yonge and Eglinton context in Toronto. Useful local content should make the page easier for shoppers to understand by connecting the store to nearby streets, neighbourhood language, and visit-planning details already supported by the site.

Searchers often want to confirm that they are looking at the right storefront before they visit. A concise guide can support that decision by explaining the local context and the most helpful next steps.

## Plan A Better Visit

Start with the official Indigenous Midtown Cannabis store page, then use the menu/category links to browse what the site makes easy to compare. Shoppers can confirm the right storefront, directions, contact options, and local visit details in one place.

If you need a quick answer before heading out, check the store page first and contact the store directly for help from staff.

## Browse Menu Categories With Confidence

Menu category labels help adults 19+ move quickly from general store research to the product areas they care about. Use them to compare the sections already shown on the site, such as flower, pre-rolls, vapes, edibles, concentrates, accessories, or other store categories.

That makes the page easier to scan and gives shoppers a cleaner path from local research to the right store page.

## Adult 19+ Visit Basics

Adults 19+ should bring valid government identification, confirm the store page before leaving, and use the menu/category links to narrow down what they want to ask about in-store.

The goal is simple: help real shoppers feel confident they are on the right store site and know where to find the next useful page.

## FAQ

### Is this guide for Indigenous Midtown Cannabis only?

Yes. This guide is written for Indigenous Midtown Cannabis and the local Toronto context connected to this website.

### How can shoppers check current menu details?

Use the store page and menu/category links before visiting, then ask staff if you need help comparing options.

### Who can use this guide?

This guide is for adults 19+ who want to understand the store page before visiting.

### What is the best next step after reading?

Open the store page, browse the available menu/category sections, and use the contact or directions options when you are ready to plan your visit.`,
    faq: "",
    internal_links_used: "[Indigenous Midtown Cannabis Toronto store page](/weed-dispensary-toronto)\\n[Indigenous Midtown Cannabis homepage](/)\\n[More Indigenous Midtown Cannabis guides](/blog)",
    relatedLinks: [
      {
            "title": "Indigenous Midtown Cannabis Toronto store page",
            "url": "https://indigenousmidtowncannabis.ca/weed-dispensary-toronto",
            "description": "Primary store-specific destination for current store details after reading the guide."
      },
      {
            "title": "Indigenous Midtown Cannabis homepage",
            "url": "https://indigenousmidtowncannabis.ca/",
            "description": "Store-scoped general navigation for adults 19+."
      },
      {
            "title": "More Indigenous Midtown Cannabis guides",
            "url": "https://indigenousmidtowncannabis.ca/blog",
            "description": "Store-scoped blog index for future approved posts."
      }
],
  },
];

export function getStaticPost(slug: string) {
  return STATIC_POSTS.find((post) => post.slug === slug);
}
