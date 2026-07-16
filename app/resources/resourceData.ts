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
      "Planning a Midtown stop should not mean opening every menu tab. This library organizes Indigenous Midtown Cannabis by the decisions shoppers actually make: what category they want, which flower tier fits, and which details need a fresh menu check.",
    cards: [
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Build a short list before heading through Midtown Toronto.",
      },
      {
        title: "Flower Guide",
        href: "/resources/flower-guide",
        text: "See how the five flower shelves are arranged before browsing strains.",
      },
      {
        title: "Value Guide",
        href: "/resources/value-guide",
        text: "Focus a price-minded visit without bouncing between every category.",
      },
      {
        title: "Pre-Roll Guide",
        href: "/resources/pre-roll-guide",
        text: "Read singles, packs, and other listed formats as their own menu lane.",
      },
      {
        title: "Native Smokes",
        href: "/resources/native-smokes",
        text: "Use the cigarette category as the source for current brand and carton listings.",
      },
    ],
    sections: [
      {
        heading: "Plan The Midtown Stop In Two Steps",
        body: "Choose the guide that matches the reason for the visit, then move to the live menu category. The guide supplies context; the menu supplies the latest names, formats, and posted prices.",
        bullets: [
          "Use the Toronto store page when the trip details matter.",
          "Keep flower-tier research separate from format-based categories.",
          "Confirm any time-sensitive item detail on the current menu.",
        ],
      },
      {
        heading:
          "Local Notes For Midtown Toronto / Yonge and Eglinton / Mount Pleasant",
        body: "Shoppers searching around Midtown Toronto, Yonge and Eglinton, Mount Pleasant, Davisville, or Leaside can use the same simple route through the site: confirm the store details, narrow the category, and finish on the current menu.",
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
      "Treat the Indigenous Midtown menu like a set of separate shelves. Decide whether this is a flower, pre-roll, edible, vape, concentrate, accessory, or cigarette visit first; the useful comparisons become much shorter after that.",
    cards: [
      {
        title: "Flower Guide",
        href: "/resources/flower-guide",
        text: "Move from shelf level to the current flower listings.",
      },
      {
        title: "Value Guide",
        href: "/resources/value-guide",
        text: "Keep a value-first browse centred on the lower flower tiers.",
      },
      {
        title: "Pre-Roll Guide",
        href: "/resources/pre-roll-guide",
        text: "Compare the format shown in the pre-roll category before anything else.",
      },
      {
        title: "Native Smokes",
        href: "/resources/native-smokes",
        text: "Review the current cigarette list without mixing it into cannabis categories.",
      },
    ],
    sections: [
      {
        heading: "Turn A Long Menu Into A Short List",
        body: "Open only the category that answers the purpose of the visit. A flower shopper can begin with tiers, while someone looking for pre-rolls or another format should compare within that dedicated section.",
        bullets: [
          "Flower: choose a shelf level before reading individual listings.",
          "Pre-rolls: note whether the menu shows a single or multipack.",
          "Other formats: use the category page for its own listed details.",
        ],
      },
      {
        heading: "Finish With The Current Listing",
        body: "A guide can explain how the Midtown menu is organized, but it cannot freeze the shelf. Recheck the item page and posted price when the final choice depends on a specific listing.",
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
      "Indigenous Midtown divides flower browsing into Exotic, Premium, AAA+, AA, and Budget pages. Pick the shelf level first, then compare the listings inside it instead of judging the whole flower menu at once.",
    cards: [
      {
        title: "Exotic Flower",
        href: "/exotic",
        text: "Open the top flower shelf and review its current names.",
      },
      {
        title: "Premium Flower",
        href: "/premium",
        text: "Browse a premium shelf without crossing into every tier.",
      },
      {
        title: "AAA+ Flower",
        href: "/aaa",
        text: "Use the AAA+ page as its own Midtown menu shelf.",
      },
      {
        title: "AA Flower",
        href: "/aa",
        text: "Review AA listings when the browse is value-led.",
      },
      {
        title: "Budget Flower",
        href: "/budget",
        text: "Go directly to the lowest listed flower tier for a budget-first visit.",
      },
    ],
    sections: [
      {
        heading: "Use The Shelf Labels As Filters",
        body: "The tier pages are navigation tools, not promises about a particular strain. Once inside a shelf, read the current name, size, format, price, and any item-specific notes shown there.",
      },
      {
        heading: "Compare Like With Like",
        body: "A useful flower comparison stays within one shelf until there is a reason to move. That makes a Midtown visit easier to plan and keeps lower-tier choices from being measured against a different shopping goal.",
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
      "For a price-led Indigenous Midtown visit, begin with the Budget or AA flower page and work upward only if the current listings do not fit the plan.",
    cards: [
      {
        title: "Budget Flower",
        href: "/budget",
        text: "See the store's lowest flower shelf before expanding the search.",
      },
      {
        title: "AA Flower",
        href: "/aa",
        text: "Compare the next flower shelf without leaving the value path.",
      },
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Return here when the visit is not strictly about flower.",
      },
    ],
    sections: [
      {
        heading: "Set The Boundary Before Browsing",
        body: "Choose the product type and the amount you intend to spend before opening item pages. For flower, the Budget and AA shelves provide a focused starting point on the Indigenous Midtown menu.",
      },
      {
        heading: "Use Posted Details, Not Assumptions",
        body: "Read the current size, format, and price together. When a listing does not provide enough context for a choice, confirm it directly rather than relying on an older resource example.",
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
      "The Indigenous Midtown pre-roll page is most useful when you read format before strain name. A single, multipack, or infused listing answers a different kind of stop, so establish that first.",
    cards: [
      {
        title: "Pre-Rolls",
        href: "/items/prerolls",
        text: "Check today's listed formats and package information.",
      },
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Step back when a pre-roll is not yet the settled category.",
      },
    ],
    sections: [
      {
        heading: "Read The Package Before The Name",
        body: "Start by identifying the format presented on each current listing. After that, compare the count, other displayed details, and posted price among options that serve the same purpose.",
      },
      {
        heading: "Know When To Change Sections",
        body: "Loose flower and pre-rolls are not interchangeable menu views. If the Midtown shopping plan changes to edibles, vapes, concentrates, or flower, move to that category and restart the comparison there.",
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
      "Indigenous Midtown's Resource Centre brings the site's planning guides into one Midtown-focused starting point, from flower shelves and value browsing to pre-roll and cigarette categories.",
    cards: [
      {
        title: "Menu Guide",
        href: "/resources/menu-guide",
        text: "Learn the shortest route from a shopping goal to a menu page.",
      },
      {
        title: "Flower Guide",
        href: "/resources/flower-guide",
        text: "Understand the five shelf links used by this store.",
      },
      {
        title: "Value Guide",
        href: "/resources/value-guide",
        text: "Start a price-led flower browse in the right section.",
      },
      {
        title: "Pre-Roll Guide",
        href: "/resources/pre-roll-guide",
        text: "Read current pre-roll formats without category crossover.",
      },
      {
        title: "Native Smokes",
        href: "/resources/native-smokes",
        text: "Find the separate Native smokes and cigarette navigation path.",
      },
    ],
    sections: [
      {
        heading: "One Starting Point For Midtown Shoppers",
        body: "Instead of hunting through unrelated pages, visitors can choose a planning guide here and continue to the relevant live category. The store page remains the place for trip details.",
      },
      {
        heading: "Guide First, Current Menu Last",
        body: "Use a resource page to narrow the decision, then finish on the Indigenous Midtown menu. That division keeps evergreen guidance separate from information that changes on the shelf.",
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
      "Native smokes sit in a separate cigarette category on the Indigenous Midtown site. Use that page to review the current brand names and carton-style listings; this guide explains the route without treating an older list as today's shelf.",
    cards: [
      {
        title: "Cigarette Menu",
        href: "/items/cigarettes",
        text: "Check the Midtown store's latest cigarette listings directly.",
      },
      {
        title: "Native Cigarettes Guide",
        href: "/resources/native-smokes/native-cigarettes-guide",
        text: "Use a brand-first checklist for the cigarette section.",
      },
      {
        title: "Store Page",
        href: "/weed-dispensary-toronto",
        text: "Keep location and visit planning on the Toronto store page.",
      },
    ],
    sections: [
      {
        heading: "Read The Cigarette List By Brand",
        body: "Names previously presented in this store's cigarette category include Canadian Lights, Canadian Full, Putters, Canadian Goose, Canadian Menthol, Canadian Classics, Rolled Gold, Nexus, and Time. Full, light, silver, or menthol labels matter, so read the complete current listing.",
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
        heading: "Treat Carton Prices As Current-Menu Information",
        body: "Some Indigenous Midtown listings have shown $25 carton notes. That is a reason to open the current cigarette category, not a promise that every brand or format carries that price today.",
      },
      {
        heading: "Separate The Two Menu Paths",
        body: "Complete the cigarette check in its own category. If the same Midtown stop also involves cannabis, return to the main menu and choose the relevant cannabis section independently.",
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
      "A brand-first scan is the quickest way through Indigenous Midtown's cigarette category. Find the family name, check whether the listing says full, light, silver, or menthol, and then read the current carton and price details.",
    cards: [
      {
        title: "Cigarette Menu",
        href: "/items/cigarettes",
        text: "Use the live category for the final brand and format check.",
      },
      {
        title: "Native Cigarettes Guide",
        href: "/resources/native-smokes/native-cigarettes-guide",
        text: "Return to the Native smokes overview for broader context.",
      },
      {
        title: "Store Page",
        href: "/weed-dispensary-toronto",
        text: "Plan the Midtown visit separately from product research.",
      },
    ],
    sections: [
      {
        heading: "Scan Family Name, Then Variant",
        body: "The site's cigarette list has included Canadian, Putters, Canadian Goose, Canadian Classics, Rolled Gold, Nexus, and Time labels. Similar family names can lead to different full, light, silver, or menthol listings, so compare the whole line rather than one word.",
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
        heading: "Confirm A Specific Variant",
        body: "If the stop depends on one precise label, use the current listing and contact the store when clarification is needed. Resource copy should not be used as a live inventory record.",
      },
      {
        heading: "End On The Current Category",
        body: "The cigarette page is the last step because it carries the store's present public listings. This guide is only the reading method for navigating them.",
      },
    ],
  },
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
