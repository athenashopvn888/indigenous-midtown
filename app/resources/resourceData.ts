export interface ResourceCard {
  title: string;
  href: string;
  text: string;
}

export interface ResourceSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ResourcePage {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  cards: ResourceCard[];
  sections: ResourceSection[];
}

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: "",
    title: "Indigenous Midtown Cannabis Resources",
    seoTitle:
      "Indigenous Midtown Cannabis Resources | Menu and Shopping Guides",
    description:
      "Resource guides for shopping the Indigenous Midtown Cannabis menu in Toronto, including flower, value, pre-rolls, and Native smokes where listed.",
    eyebrow: "Resource Centre",
    intro:
      "Use these Indigenous Midtown Cannabis guides to understand the menu before visiting. Start with the product category that matches your visit, then check the current menu or ask staff for details that can change.",
    cards: [
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Pick the category first, then compare the details that matter.",
      },
      {
        title: "Flower Guide",
        href: "/resources/flower-guide",
        text: "Compare Exotic, Premium, AAA+, AA, and Budget flower tiers.",
      },
      {
        title: "Value Guide",
        href: "/resources/value-guide",
        text: "A cleaner way to think about cheap weed, budget weed, and affordable weed.",
      },
      {
        title: "Pre-Roll Guide",
        href: "/resources/pre-roll-guide",
        text: "Keep pre-roll shopping separate from flower, edibles, vapes, and concentrates.",
      },
      {
        title: "Native Smokes",
        href: "/resources/native-smokes",
        text: "Brand names and carton notes for the cigarette menu where listed.",
      },
    ],
    sections: [
      {
        heading: "How To Use These Guides",
        body: "Start with the store page for location and hours, then open the category guide that matches your visit. Flower, pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarette options each have different details to check.",
        bullets: [
          "Use the store page for directions, contact options, and listed hours.",
          "Use category pages to compare the current menu category.",
          "Ask staff when a product detail needs a current answer.",
        ],
      },
      {
        heading:
          "Local Notes For Midtown Toronto / Yonge and Eglinton / Mount Pleasant",
        body: "Indigenous Midtown Cannabis serves shoppers around Midtown Toronto, Yonge and Eglinton, Mount Pleasant, Davisville, and Leaside. Use this resource centre to confirm store details, choose the right product category, and check the current menu before visiting.",
      },
    ],
  },
  {
    slug: "menu-guide",
    title: "How To Shop The Indigenous Midtown Cannabis Menu",
    seoTitle:
      "Indigenous Midtown Cannabis Menu Guide | Toronto Weed Dispensary Tips",
    description:
      "How to shop the Indigenous Midtown Cannabis menu by category, with natural tips for flower, pre-rolls, edibles, THC vapes, concentrates, and value shopping.",
    eyebrow: "Menu Guide",
    intro:
      "The fastest way through the menu is simple: choose the product type before you compare products. That keeps the page useful whether you want premium flower, cheap weed, pre-rolls, edibles, THC vapes, or concentrates.",
    cards: [
      {
        title: "Flower Guide",
        href: "/resources/flower-guide",
        text: "Compare Exotic, Premium, AAA+, AA, and Budget flower tiers.",
      },
      {
        title: "Value Guide",
        href: "/resources/value-guide",
        text: "A cleaner way to think about cheap weed, budget weed, and affordable weed.",
      },
      {
        title: "Pre-Roll Guide",
        href: "/resources/pre-roll-guide",
        text: "Keep pre-roll shopping separate from flower, edibles, vapes, and concentrates.",
      },
      {
        title: "Native Smokes",
        href: "/resources/native-smokes",
        text: "Brand names and carton notes for the cigarette menu where listed.",
      },
    ],
    sections: [
      {
        heading: "Choose The Product Category First",
        body: "If you want flower, start with flower. If you want pre-rolls, stay in pre-rolls. If the visit is about edibles, vapes, concentrates, or accessories, open that section and compare there first.",
        bullets: [
          "Flower shoppers should compare tiers.",
          "Pre-roll shoppers should compare format and package details.",
          "Edible, vape, and concentrate shoppers should read current details carefully.",
        ],
      },
      {
        heading: "Check What Is Current",
        body: "Use this guide for the shopping method, then use the current menu and staff for details that change. Product names, prices, and menu details can move, so do not let an old example make the decision.",
      },
    ],
  },
  {
    slug: "flower-guide",
    title: "Indigenous Midtown Cannabis Flower Guide",
    seoTitle:
      "Indigenous Midtown Cannabis Flower Guide | Exotic, Premium, Budget",
    description:
      "Compare exotic flower, premium flower, budget weed, cheap weed, and affordable weed at Indigenous Midtown Cannabis with current menu details.",
    eyebrow: "Flower Guide",
    intro:
      "Flower gets easier when you compare one tier at a time. Exotic flower and premium flower sit in different lanes from AAA+, AA, and Budget, so start with the lane that matches the visit.",
    cards: [
      {
        title: "Exotic Flower",
        href: "/exotic",
        text: "Start here when you want the higher shelf flower lane.",
      },
      {
        title: "Premium Flower",
        href: "/premium",
        text: "A strong lane for shoppers comparing quality and value.",
      },
      {
        title: "AAA+ Flower",
        href: "/aaa",
        text: "A clear middle lane for flower comparison.",
      },
      {
        title: "AA Flower",
        href: "/aa",
        text: "A straight value-minded flower lane.",
      },
      {
        title: "Budget Flower",
        href: "/budget",
        text: "Start here when cheap weed or affordable weed is the goal.",
      },
    ],
    sections: [
      {
        heading: "Compare Tier, Then Details",
        body: "Open the tier, then compare the current product name, format, weight, posted price, and item details. That gives you a clean decision path without turning the whole menu into noise.",
      },
      {
        heading: "Value Does Not Need To Be Complicated",
        body: "Budget weed and affordable weed are easiest to compare when you stay inside the right lane. If the details are thin or the choice feels close, ask staff before choosing.",
      },
    ],
  },
  {
    slug: "value-guide",
    title: "Indigenous Midtown Cannabis Value Guide",
    seoTitle:
      "Indigenous Midtown Cannabis Value Guide | Cheap Weed and Budget Weed",
    description:
      "A practical value guide for shoppers comparing cheap weed, budget weed, affordable weed, and menu categories at Indigenous Midtown Cannabis.",
    eyebrow: "Value Guide",
    intro:
      "Good value shopping starts with the product type, the current details, and the price that fits the visit.",
    cards: [
      {
        title: "Budget Flower",
        href: "/budget",
        text: "The first stop for cheap weed and affordable weed comparisons.",
      },
      {
        title: "AA Flower",
        href: "/aa",
        text: "A simple value lane for flower shoppers.",
      },
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Use this when you are comparing more than flower.",
      },
    ],
    sections: [
      {
        heading: "Start With The Budget Lane",
        body: "If low spend is the point, start in Budget and AA before jumping across the rest of the menu. That keeps the comparison honest and quick.",
      },
      {
        heading: "Read The Menu Notes",
        body: "Compare the product name, format, size, and posted price. If one detail is unclear, use staff for the answer instead of guessing from an old blog line.",
      },
    ],
  },
  {
    slug: "pre-roll-guide",
    title: "Indigenous Midtown Cannabis Pre-Roll Guide",
    seoTitle:
      "Indigenous Midtown Cannabis Pre-Roll Guide | Toronto Cannabis Menu Tips",
    description:
      "How to compare pre-rolls at Indigenous Midtown Cannabis without mixing them up with flower, edibles, THC vapes, and concentrates.",
    eyebrow: "Pre-Roll Guide",
    intro:
      "Pre-rolls are their own lane. Compare them like pre-rolls, not like loose flower, edibles, THC vapes, or concentrates.",
    cards: [
      {
        title: "Pre-Rolls",
        href: "/items/prerolls",
        text: "Open the current pre-roll category.",
      },
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Use this if you are still choosing between categories.",
      },
    ],
    sections: [
      {
        heading: "Compare Format First",
        body: "Check whether the listing is a single, pack, infused option, or another pre-roll format shown on the menu. Then compare the posted details and price before choosing.",
      },
      {
        heading: "Keep It Separate",
        body: "If the visit turns into flower, edibles, vapes, or concentrates, switch categories. Do not force one pre-roll decision to carry the whole menu.",
      },
    ],
  },
  {
    slug: "resource-centre-launch",
    title: "Indigenous Midtown Cannabis Resource Centre Launch",
    seoTitle: "Indigenous Midtown Cannabis Resource Centre Launch",
    description:
      "The Indigenous Midtown Cannabis resource centre gives shoppers cleaner menu guides for flower, value, pre-rolls, and store visits.",
    eyebrow: "Resource Update",
    intro:
      "The resource centre is here to make the menu easier to shop. No internal jargon, no fake certainty, just cleaner notes for real shoppers.",
    cards: [
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Pick the category first, then compare the details that matter.",
      },
      {
        title: "Flower Guide",
        href: "/resources/flower-guide",
        text: "Compare Exotic, Premium, AAA+, AA, and Budget flower tiers.",
      },
      {
        title: "Value Guide",
        href: "/resources/value-guide",
        text: "A cleaner way to think about cheap weed, budget weed, and affordable weed.",
      },
      {
        title: "Pre-Roll Guide",
        href: "/resources/pre-roll-guide",
        text: "Keep pre-roll shopping separate from flower, edibles, vapes, and concentrates.",
      },
      {
        title: "Native Smokes",
        href: "/resources/native-smokes",
        text: "Brand names and carton notes for the cigarette menu where listed.",
      },
    ],
    sections: [
      {
        heading: "What Changed",
        body: "The resources section now gives shoppers a central place for menu tips, flower comparison, value shopping, pre-roll notes, and store visit guidance.",
      },
      {
        heading: "How To Use It",
        body: "Start with the guide that matches the visit, then open the current menu or store page when you are ready to compare details.",
      },
    ],
  },
  {
    slug: "native-smokes",
    title: "Indigenous Midtown Cannabis Native Smokes Resource",
    seoTitle: "Indigenous Midtown Cannabis Native Smokes | $25 Carton Notes",
    description:
      "Indigenous Midtown Cannabis Native smokes resource with cigarette brand names shown on the menu and $25 carton notes where listed.",
    eyebrow: "Native Smokes",
    intro:
      "Indigenous Midtown Cannabis shoppers looking for Native smokes can use this page as a cleaner starting point. Brand names shown on the cigarette menu include Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, Canadian Classics Silver, * Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full. Some carton-style listings show around $25, but shoppers should check the current menu or staff before making the trip.",
    cards: [
      {
        title: "Cigarette Menu",
        href: "/items/cigarettes",
        text: "Open the current cigarette category before making the trip.",
      },
      {
        title: "Native Cigarettes Guide",
        href: "/resources/native-smokes/native-cigarettes-guide",
        text: "Brand notes and a cleaner shopping checklist.",
      },
      {
        title: "Store Page",
        href: "/weed-dispensary-toronto",
        text: "Use the store page for directions, contact options, and listed hours.",
      },
    ],
    sections: [
      {
        heading: "Brands Shoppers May See",
        body: "The cigarette menu may show brands such as Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, Canadian Classics Silver, * Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full. The exact shelf can change, so treat this as a menu guide and confirm current options before choosing.",
        bullets: [
          "Canadian Lights",
          "Canadian Full",
          "Putters",
          "Canadian Goose Full",
          "Canadian Goose Lights",
          "Canadian Menthol",
          "Canadian Classics Original",
          "Canadian Classics Silver",
          "* Rolled Gold Lights",
          "Nexus Full",
          "Nexus Lights",
          "Time Full",
        ],
      },
      {
        heading: "$25 Carton Notes",
        body: "Where the menu lists $25 carton-style Native cigarettes, this resource points shoppers to the cigarette category first. Check the current menu or ask staff for what is available today.",
      },
      {
        heading: "Keep The Visit Simple",
        body: "If you are also shopping cannabis, keep the cigarette decision separate from flower, pre-rolls, edibles, THC vapes, and concentrates. One lane at a time keeps the visit smooth.",
      },
    ],
  },
  {
    slug: "native-smokes/native-cigarettes-guide",
    title: "Indigenous Midtown Cannabis Native Cigarettes Guide",
    seoTitle:
      "Indigenous Midtown Cannabis Native Cigarettes Guide | Brands and Carton Notes",
    description:
      "A shopper-friendly Native cigarettes guide for Indigenous Midtown Cannabis, including brand names shown on the menu and $25 carton notes where listed.",
    eyebrow: "Native Cigarettes Guide",
    intro:
      "If Native cigarettes are part of the stop, start with the cigarette category and compare the current listings. Indigenous Midtown Cannabis menu brand names may include Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, Canadian Classics Silver, * Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full.",
    cards: [
      {
        title: "Cigarette Menu",
        href: "/items/cigarettes",
        text: "Open the current cigarette category before making the trip.",
      },
      {
        title: "Native Cigarettes Guide",
        href: "/resources/native-smokes/native-cigarettes-guide",
        text: "Brand notes and a cleaner shopping checklist.",
      },
      {
        title: "Store Page",
        href: "/weed-dispensary-toronto",
        text: "Use the store page for directions, contact options, and listed hours.",
      },
    ],
    sections: [
      {
        heading: "Compare The Brand Names",
        body: "Look for the brand name first, then compare the posted price and any item details. The menu may include Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, Canadian Classics Silver, * Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full.",
        bullets: [
          "Canadian Lights",
          "Canadian Full",
          "Putters",
          "Canadian Goose Full",
          "Canadian Goose Lights",
          "Canadian Menthol",
          "Canadian Classics Original",
          "Canadian Classics Silver",
          "* Rolled Gold Lights",
          "Nexus Full",
          "Nexus Lights",
          "Time Full",
        ],
      },
      {
        heading: "Ask If The Shelf Matters",
        body: "When a specific carton, full, light, or menthol option matters, ask staff before choosing. That is better than guessing from any resource page.",
      },
      {
        heading: "Use The Cigarette Category",
        body: "Open the cigarette category before the trip. It is the cleanest public path for current Native smokes information at this store.",
      },
    ],
  },
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
