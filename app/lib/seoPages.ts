const NATIVE_HERO_DISCLOSURE = "Brand preview only. Selection varies by store; check the current cigarette menu before visiting.";
const NATIVE_HERO_PRODUCTS = [
  { name: "BB Lights", image: "/products/1001-BB-LIGHTS-CARTONS.webp" },
  { name: "BB Full", image: "/products/1003-BB-FULL-CARTON.webp" },
  { name: "Canadian Lights", image: "/products/1005-CANADIAN-LIGHTS.webp" },
  { name: "Canadian Full", image: "/products/1006-CANADIAN-FULL.webp" },
  { name: "Canadian Classics Silver", image: "/products/1015-CANADIAN-CLASSICS-SILVER.webp" },
  { name: "Canadian Menthol", image: "/products/1013-CANADIAN-MENTHOL.webp" },
] as const;

export interface SeoPageData {
  slug: string;
  title: string;
  absoluteTitle?: boolean;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  heroPreview?: {
    eyebrow: string;
    intro: string;
    products: readonly { name: string; image: string; sourceSlug?: string }[];
    disclosure: string;
    theme?: "cigarettes" | "nicotine";
    menuHref?: string;
    primaryLabel?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    identityStrip?: string;
    featuredHeading?: string;
    featuredIntro?: string;
    warning?: string;
  };
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
        body: "Indigenous Midtown Cannabis helps adult shoppers review the menu by category. Start with the store page, then choose the section that matches the visit: flower, pre-rolls, edibles, THC vapes, concentrates, accessories, or cigarettes where listed.",
      },
      {
        heading: "Local Notes For Yonge and Eglinton / Mount Pleasant",
        body: "If you searched for a cannabis dispensary near Yonge and Eglinton, use this page to confirm the local store, product categories, and current menu details.",
      },
      {
        heading: "What To Check Before Visiting",
        body: "Confirm the current menu, directions, contact options, and listed hours. For current products, prices, or menu details, use the menu or ask staff before leaving.",
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
        a: "The site includes menu categories for flower tiers, pre-rolls, edibles, vapes, concentrates, accessories, and cigarettes where listed.",
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
    heroTagline: "Value shopping with clear menu categories",
    sections: [
      {
        heading: "Start With Budget And AA",
        body: "If affordable weed is the mission, start with the Budget and AA flower lanes before jumping around the rest of the menu.",
      },
      {
        heading: "Compare The Current Menu",
        body: "Look at product name, format, weight, posted price, and item details. Menus change, so use this page for the method and the current menu for current details.",
      },
      {
        heading: "Know When To Move Up",
        body: "If Budget or AA does not fit the visit, compare AAA+, Premium, or Exotic flower next. A clearer tier decision starts with the category and current menu details.",
      },
    ],
    faqs: [
      {
        q: "How should shoppers compare value flower?",
        a: "Start with Budget and AA, then compare current product name, format, weight, posted price, and item details.",
      },
      {
        q: "Does this page guarantee current menu details?",
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
    heroPreview: {
      eyebrow: "Indigenous Midtown Cannabis · 93 Broadway Ave, Midtown Toronto",
      intro: "Cigarette category notes for local shoppers",
      products: NATIVE_HERO_PRODUCTS,
      disclosure: NATIVE_HERO_DISCLOSURE,
    },
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
        a: "Yes. Brand names, carton notes, and menu details can change, so use the current menu or ask staff.",
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
        q: "What is the next step?",
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
        heading: "Use The Current Menu",
        body: "This page explains the shopping path. Use the current menu or ask staff to confirm product names, prices, and item details.",
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
        q: "What is the next step?",
        a: "Open the current menu or store page, then confirm directions and contact details before heading over.",
      },
    ],
  },
  {
    slug: "nicotine-vapes-toronto",
    title: "Nicotine Vapes in Toronto | Indigenous Midtown Cannabis",
    absoluteTitle: true,
    metaDescription: "Adults 19+: review six verified nicotine vape product pages from Indigenous Midtown Cannabis in Toronto, then check /items/vapes for the current category. Nicotine is addictive.",
    h1: "Nicotine Vapes at Indigenous Midtown Cannabis",
    icon: "NV",
    heroTagline: "Adults 19+ · Nicotine is addictive.",
    heroPreview: {
      eyebrow: "INDIGENOUS MIDTOWN CANNABIS • MIDTOWN TORONTO • ADULTS 19+",
      intro: "Searching for nicotine vapes near me around Yonge and Eglinton or Mount Pleasant? This adult-only Indigenous Midtown Cannabis guide features six verified VAPE PENS product pages. Compare the supported product names, then use /items/vapes for the current nicotine category. Product details can change. Nicotine is addictive.",
      products: [
        { name: "Geek Promax 5% — 30K Puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg", sourceSlug: "geek-promax-5-30k-puffs" },
        { name: "Geek Universe — 25K Puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp", sourceSlug: "geek-universe-25k-puffs" },
        { name: "NEXA PIX — 30K Puffs — Many Flavors", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/nexa_showcase_600x600.webp", sourceSlug: "nexa-pix-30k-puffs-many-flavors" },
        { name: "OVNS 10000 5% — 10K Puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg", sourceSlug: "ovns-10000-5-10k-puffs" },
        { name: "OVNS Disposable 5% — 8 mL — Many Flavors", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS500x500HQ.webp", sourceSlug: "ovns-disposable-5-8ml-many-flavors" },
        { name: "OVNS Pioneer 5% — 22K Puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS_PIONEER_5_22K_PUFFS.webp", sourceSlug: "ovns-pioneer-5-22k-puffs" },
      ],
      disclosure: "Featured cards are verified starting points, not guarantees of current stock, price or availability.",
      theme: "nicotine",
      menuHref: "/items/vapes",
      primaryLabel: "Browse Nicotine Vapes",
      secondaryLabel: "Compare the Six Featured Items",
      secondaryHref: "#featured-vapes",
      identityStrip: "Indigenous Midtown Cannabis | Midtown Toronto / Yonge and Eglinton / Mount Pleasant | Adults 19+ | Nicotine is addictive.",
      featuredHeading: "Six Verified Indigenous Midtown Vape Cards",
      featuredIntro: "This shortlist contains verified Geek, NEXA and OVNS VAPE PENS product pages. Use each card for its supported display name, then rely on /items/vapes for the current Indigenous Midtown Cannabis category listing.",
      warning: "Adults 19+. Nicotine is addictive.",
    },
    sections: [
      { heading: "Read Each Product Format Carefully", body: "One verified listing explicitly identifies an OVNS disposable. Keep that format attached only to its own product and do not relabel another featured item unless its current page verifies the same format." },
      { heading: "Puff Counts Identify Listings", body: "Several verified names include puff counts. Use those numbers to distinguish the listings, not as guarantees of duration, performance or superiority." },
      { heading: "Keep Nicotine and Cannabis Vape Routes Separate", body: "This adult-only Indigenous Midtown Cannabis guide uses VAPE PENS products under /items/vapes. THC and cannabis vape products under /items/vape-disposables are excluded." },
      { heading: "Review the Current Toronto Category", body: "Before choosing, open /items/vapes and the individual product page for current supported details. This guide does not claim prices, stock or guaranteed availability." },
    ],
    faqs: [
      { q: "Where should I check Indigenous Midtown Cannabis’s current nicotine selection?", a: "Use /items/vapes. The six featured cards are verified starting points while the current category listing controls selection information." },
      { q: "Is a disposable nicotine vape represented?", a: "Yes. The verified set includes OVNS Disposable 5% — 8 mL — Many Flavors. Check its current product page for updated details." },
      { q: "Does this page include cannabis vapes?", a: "No. It covers nicotine products from the VAPE PENS category for adults 19+. THC and cannabis vape products under /items/vape-disposables are excluded." },
    ],
  },
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((page) => page.slug === slug);
}
