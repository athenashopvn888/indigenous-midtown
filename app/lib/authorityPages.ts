export type AuthorityPage = {
  path: string;
  eyebrow: string;
  h1: string;
  summary: string;
  body: string[];
  menuHref: string;
  menuLabel: string;
  faqs: { q: string; a: string }[];
};

export const AUTHORITY_PAGES = {
  geo: {
    path: "/weed-dispensary-yonge-eglinton",
    eyebrow: "Midtown Toronto walk-in · Broadway at Yonge–Eglinton",
    h1: "Weed Dispensary at Yonge–Eglinton",
    summary: "Plan a walk-in visit to Indigenous Midtown Cannabis at 93 Broadway Avenue, one block north of Eglinton near Redpath Avenue.",
    body: [
      "Indigenous Midtown Cannabis is at 93 Broadway Ave in Midtown Toronto. From Yonge Street, turn east on Broadway Avenue and continue toward Redpath Avenue. The shop sits within the Yonge–Eglinton grid, close to the Broadway residential towers and a short walk north of Eglinton Avenue.",
      "Start with the current menu before leaving. Flower is arranged across Exotic, Premium, AAA+, AA and Budget tiers, while pre-rolls, edibles, concentrates, THC vapes, nicotine vapes, cigarettes and accessories each keep their own category. That separation makes it easier to compare the right shelf for this location.",
      "Eglinton Station is the closest Line 1 stop. Drivers should follow the posted curb and parking signs on the block where they stop, because restrictions can change by side and time. The visit page collects the subway, walking, driving and last-block notes for 93 Broadway Ave.",
    ],
    menuHref: "/exotic-weed",
    menuLabel: "Browse flower tiers",
    faqs: [
      { q: "Where is Indigenous Midtown Cannabis?", a: "The store is at 93 Broadway Ave, Toronto, ON M4S 2A2, east of Yonge Street near Redpath Avenue." },
      { q: "Which subway station is closest?", a: "Eglinton Station on Line 1 is the closest subway stop; use the visit page for the walking route." },
    ],
  },
  hours: {
    path: "/24-hour-yonge-eglinton-dispensary",
    eyebrow: "Open 24 hours · Broadway Avenue",
    h1: "Open 24 Hours at Yonge–Eglinton",
    summary: "Indigenous Midtown Cannabis lists 24-hour walk-in hours at 93 Broadway Ave in Midtown Toronto.",
    body: [
      "The Broadway Avenue storefront is listed open 24 hours a day, seven days a week. The round-the-clock schedule can suit an early start, a late return through Midtown, or a visit outside ordinary retail hours without moving shoppers to a different address.",
      "Bring government-issued photo ID showing you are 19 or older, including for overnight visits. If one particular item determines the trip, open the current category page first and confirm at the counter because menu listings can change during the day.",
      "Eglinton Station serves the corridor, and Broadway Avenue connects Yonge Street with Redpath Avenue. Overnight drivers should still read the posted curb signs where they park. The same store phone, entrance and civic address apply at every hour.",
    ],
    menuHref: "/visit",
    menuLabel: "Plan a 24-hour visit",
    faqs: [
      { q: "Is Indigenous Midtown Cannabis open 24 hours?", a: "Yes. Its live Google Business Profile lists the 93 Broadway Ave storefront as open 24 hours." },
      { q: "Do overnight shoppers need ID?", a: "Yes. Adults 19+ need government-issued photo ID whenever they visit." },
    ],
  },
  cigarettes: {
    path: "/native-cigarettes-yonge-eglinton",
    eyebrow: "Adult cigarette shelf · Broadway Avenue",
    h1: "Native Cigarettes at Yonge–Eglinton",
    summary: "Open the live cigarette category for current pack and carton listings at Indigenous Midtown Cannabis before visiting Broadway Avenue.",
    body: [
      "The cigarette menu is an adult merchandise shelf separate from cannabis flower and vapes. Use the live category to compare the product names and formats currently displayed for the Broadway Avenue store rather than relying on an older search result or banner alone.",
      "Pack, carton and brand listings can rotate. Read the complete listing before travelling, and ask staff when one exact item matters. The category link is the shortest route from this corridor page to the current cigarette board.",
      "Native cigarettes is used here strictly as a product-category phrase. It does not make a cultural, heritage, health or reduced-risk claim. Adults 19+ must bring government-issued photo ID for an in-store purchase.",
    ],
    menuHref: "/items/cigarettes",
    menuLabel: "Check cigarette category",
    faqs: [
      { q: "Where can I see current cigarette listings?", a: "Open the live cigarette category before visiting because pack and carton listings can change." },
      { q: "What identification is required?", a: "Adults 19+ need government-issued photo ID at the store." },
    ],
  },
  nicotine: {
    path: "/nicotine-vape-yonge-eglinton",
    eyebrow: "Nicotine vape shelf · Broadway Avenue",
    h1: "Nicotine Vapes at Yonge–Eglinton",
    summary: "Browse the current nicotine vape category for Indigenous Midtown Cannabis near Broadway Avenue and Redpath Avenue.",
    body: [
      "Nicotine vape devices and pods are kept in a distinct category from THC Vape and other cannabis products. Begin on the nicotine page, then compare the full product name and format shown for the Broadway Avenue store before making the trip.",
      "Device, pod and flavour listings may rotate. The current category is the practical source for the displayed shelf, while this page keeps the Midtown route and adult-purchase information in one place. Cannabis vape shoppers should use the separate THC Vape category.",
      "Nicotine is addictive. This page does not make health, cessation or performance claims. Adults 19+ need government-issued photo ID for a purchase at 93 Broadway Ave.",
    ],
    menuHref: "/items/vapes",
    menuLabel: "Browse nicotine vapes",
    faqs: [
      { q: "Are THC vapes included here?", a: "No. Nicotine vapes use a separate category from cannabis and THC Vape products." },
      { q: "How can I check current nicotine products?", a: "Check the Broadway Avenue nicotine vape category shortly before your visit because the displayed shelf can change." },
    ],
  },
} satisfies Record<string, AuthorityPage>;
