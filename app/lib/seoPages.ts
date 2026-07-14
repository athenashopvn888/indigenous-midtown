export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  banner?: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "toronto-weed-dispensary",
    title: "Indigenous Midtown Cannabis Weed Dispensary in Toronto",
    metaDescription:
      "Indigenous Midtown Cannabis is a local cannabis dispensary in Toronto around Yonge and Eglinton / Mount Pleasant, with shopper resources for flower, pre-rolls, edibles, vapes, concentrates, accessories, and listed cigarettes.",
    h1: "Indigenous Midtown Cannabis Weed Dispensary in Toronto",
    icon: "*",
    heroTagline: "Menu shopping around Yonge and Eglinton / Mount Pleasant",
    sections: [
      {
        heading: "Shop Indigenous Midtown Cannabis With A Plan",
        body: "Indigenous Midtown Cannabis helps adult shoppers compare the menu without guessing. Start with the store page, then choose the category that matches the visit: flower, pre-rolls, edibles, THC vapes, concentrates, accessories, or cigarettes where listed.",
      },
      {
        heading: "Local Notes For Yonge and Eglinton / Mount Pleasant",
        body: "If you searched for a cannabis dispensary near Yonge and Eglinton, use this page to get oriented. Local terms should point shoppers to the right store and the right menu lane, not recycled city copy.",
      },
      {
        heading: "What To Check Before Visiting",
        body: "Confirm the current menu, directions, contact options, and listed hours. For current products, prices, or availability, use the menu or ask staff before leaving.",
      },
    ],
    faqs: [
      {
        q: "Is Indigenous Midtown Cannabis a local cannabis dispensary?",
        a: "Yes. Indigenous Midtown Cannabis serves adult shoppers in Toronto around Yonge and Eglinton / Mount Pleasant. Use the store page for directions, contact details, and listed hours.",
      },
      {
        q: "What should I check before visiting Indigenous Midtown Cannabis?",
        a: "Check the current menu, category pages, directions, and contact details before visiting. Product details can change.",
      },
      {
        q: "Does the site show current product categories?",
        a: "The site includes menu paths for flower tiers, pre-rolls, edibles, vapes, concentrates, accessories, and cigarettes where listed.",
      },
    ],
  },
  {
    slug: "cheap-weed-toronto",
    title: "Indigenous Midtown Cannabis Cheap Weed and Budget Weed Guide",
    metaDescription:
      "A value-minded guide for comparing cheap weed, budget weed, affordable weed, and flower tiers at Indigenous Midtown Cannabis.",
    h1: "Indigenous Midtown Cannabis Cheap Weed and Budget Weed Guide",
    icon: "*",
    heroTagline: "Value shopping without the guessing game",
    sections: [
      {
        heading: "Start With Budget And AA",
        body: "If affordable weed is the mission, start with the Budget and AA flower lanes before jumping around the rest of the menu.",
      },
      {
        heading: "Compare The Current Menu",
        body: "Look at product name, format, weight, posted price, and item notes. Menus change, so use this page for the method and the live menu for current details.",
      },
      {
        heading: "Know When To Move Up",
        body: "If Budget or AA does not fit the visit, compare AAA+, Premium, or Exotic flower next. A cleaner tier decision starts with the lane, not random scrolling.",
      },
    ],
    faqs: [
      {
        q: "How should shoppers compare value flower?",
        a: "Start with Budget and AA, then compare current product name, format, weight, posted price, and item notes.",
      },
      {
        q: "Does this page guarantee current availability?",
        a: "No. Use this page as a shopping guide and confirm the current menu before visiting.",
      },
    ],
  },
  {
    slug: "native-cigarettes-toronto",
    title: "Indigenous Midtown Cannabis Native Cigarettes Guide",
    metaDescription:
      "A shopper-friendly Native cigarettes guide for Indigenous Midtown Cannabis, with cigarette category notes where listed.",
    h1: "Indigenous Midtown Cannabis Native Cigarettes Guide",
    icon: "*",
    heroTagline: "Cigarette category notes for local shoppers",
    sections: [
      {
        heading: "Use The Cigarette Category First",
        body: "If cigarettes are part of the stop, start with the cigarette category and compare the current listings before visiting.",
      },
      {
        heading: "Confirm Current Brands",
        body: "Brand names, carton notes, and pricing can change. Treat this page as a guide and confirm current options from the menu or staff.",
      },
      {
        heading: "Keep The Visit Local",
        body: "This guide is connected to Indigenous Midtown Cannabis around Yonge and Eglinton / Mount Pleasant, so shoppers do not land on copied pages for another market.",
      },
    ],
    faqs: [
      {
        q: "Does Indigenous Midtown Cannabis list Native cigarettes?",
        a: "The site includes a cigarette category where listed. Confirm current brands and pricing before visiting.",
      },
      {
        q: "Can cigarette selection change?",
        a: "Yes. Brand names, carton notes, and availability can change, so use the current menu or staff for live details.",
      },
    ],
  },
  {
    slug: "weed-store-near-midtown-toronto-yonge-and-eglinton-mount-pleasant",
    title: "Indigenous Midtown Cannabis Weed Store Near Yonge and Eglinton",
    metaDescription:
      "Indigenous Midtown Cannabis local guide for adults searching for a weed store near Yonge and Eglinton.",
    h1: "Indigenous Midtown Cannabis Weed Store Near Yonge and Eglinton",
    icon: "*",
    heroTagline: "Local guide around Yonge and Eglinton",
    sections: [
      {
        heading: "Near Yonge and Eglinton",
        body: "Indigenous Midtown Cannabis is tied to the local Yonge and Eglinton / Mount Pleasant shopping area. Use this page when comparing nearby cannabis menu options and store details.",
      },
      {
        heading: "Avoid Stale City Pages",
        body: "The page is written for this local store identity and does not reuse unrelated city copy.",
      },
      {
        heading: "Check Before You Go",
        body: "Open the current menu, confirm directions, and use the contact details if a product or category detail matters before the visit.",
      },
    ],
    faqs: [
      {
        q: "Is this page focused on Yonge and Eglinton?",
        a: "Yes. This page is focused on Indigenous Midtown Cannabis around Yonge and Eglinton / Mount Pleasant, not unrelated city copy.",
      },
      {
        q: "What is the best next step?",
        a: "Open the current menu or store page, then confirm directions and contact details before heading over.",
      },
    ],
  },
  {
    slug: "dispensary-near-me-toronto",
    title: "Indigenous Midtown Cannabis Dispensary Near Me Guide",
    metaDescription:
      "Indigenous Midtown Cannabis guide for adults using near-me searches around Yonge and Eglinton / Mount Pleasant.",
    h1: "Indigenous Midtown Cannabis Dispensary Near Me Guide",
    icon: "*",
    heroTagline: "A near-me page tied to the actual store",
    sections: [
      {
        heading: "A Local Near-Me Result",
        body: "Near-me searches should land on a page connected to Indigenous Midtown Cannabis, Toronto, and the local Yonge and Eglinton / Mount Pleasant area.",
      },
      {
        heading: "Use The Menu For Live Details",
        body: "This page explains the shopping path. The current menu and staff remain the source for live products, prices, and availability.",
      },
      {
        heading: "Keep The Route Simple",
        body: "Confirm directions, listed hours, and product category before heading over.",
      },
    ],
    faqs: [
      {
        q: "Is this page focused on Yonge and Eglinton?",
        a: "Yes. This page is focused on Indigenous Midtown Cannabis around Yonge and Eglinton / Mount Pleasant, not unrelated city copy.",
      },
      {
        q: "What is the best next step?",
        a: "Open the current menu or store page, then confirm directions and contact details before heading over.",
      },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((page) => page.slug === slug);
}
