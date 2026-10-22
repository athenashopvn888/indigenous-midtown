import type { Nap, ResolvedBanner, ResolvedPage } from "./types.ts";

/**
 * The only store-specific fleet file. Other stores replace this module
 * and leave the rest of app/lib/fleet and app/components/fleet as-is.
 */
export const FLEET_STORE_CODE = "IMC01";
export const FLEET_STORE_NAME = "Indigenous Midtown Cannabis";
export const FLEET_AREA = "Yonge–Eglinton Midtown";
export const FLEET_DOMAIN = "www.indigenousmidtowncannabis.ca";
export const FLEET_DOMAINS = ["www.indigenousmidtowncannabis.ca", "indigenousmidtowncannabis.ca"] as const;
export const FLEET_ORIGIN = "https://www.indigenousmidtowncannabis.ca";

/** Public blob origin. Objects live at /{storeCode}/manifest.json and /{storeCode}/articles/. */
export const FLEET_BLOB_ORIGIN = "https://dhaah0upvlpukv56.public.blob.vercel-storage.com";

export const FLEET_COLORS = {
  banner: "#140b22",
  bannerText: "#ffffff",
} as const;

/** Digits or formatted numbers. An article containing any of these is dropped. */
export const FLEET_BLOCKED_PHONES: readonly string[] = [];

export const FLEET_ARTICLES_PATH = "/articles";

/** Page and spot names for the six TV2 category cards. Spot is the card name. */
export const TV2_PAGE = "TV2";
export const TV2_CARDS = [
  "PREROLLS_ADDONS",
  "VAPES",
  "EDIBLES",
  "CONCENTRATES",
  "CIGARETTES",
  "MAGIC",
] as const;

export const TV_PAGE = "TV";
export const TV_FULLSCREEN_SPOTS = [
  "Fullscreen promo 1",
  "Fullscreen promo 2",
  "Fullscreen promo 3",
] as const;

/** Fullscreen takeover defaults: 5s on screen, once a minute, 5s first preview, 650ms slide. */
export const TV_PROMO_SHOW_SECONDS = 5;
export const TV_PROMO_EVERY_MINUTES = 1;
export const TV_PROMO_INITIAL_DELAY_MS = 5_000;
export const TV_PROMO_SLIDE_MS = 650;

export function defaultManifestUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/manifest.json`;
}

export function articlesIndexUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/index.json`;
}

export function articleBodyUrl(slug: string, storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/${encodeURIComponent(slug)}.json`;
}

export const CODED_NAP: Nap = {
  name: "Indigenous Midtown Cannabis",
  street: "93 Broadway Ave",
  city: "Toronto",
  province: "ON",
  postalCode: "M4S 2A2",
  cityLine: "Toronto, ON M4S 2A2",
  area: "Yonge–Eglinton Midtown",
  intersection: "Broadway Ave & Redpath Ave",
  areaLine: "Broadway Ave & Redpath Ave, Yonge–Eglinton Midtown",
  phoneDisplay: "+1 437 219 7367",
  phoneTel: "+14372197367",
  hours: "Open 24 Hours",
  mapsSearchUrl: "https://maps.google.com/?q=93+Broadway+Ave,+Toronto,+ON+M4S+2A2",
  mapsEmbedUrl: "https://maps.google.com/maps?q=93+Broadway+Ave,+Toronto,+ON+M4S+2A2&hl=en&z=16&output=embed",
  lat: "43.7104899",
  lng: "-79.3935826",
  schemaName: "Indigenous Midtown Cannabis Dispensary Weed Delivery",
  website: "https://www.indigenousmidtowncannabis.ca",
};

const WEED_CAPTION = "Top 3 tiers only (Exotic, Premium, AAA+): Buy 2g Get 1g FREE · Buy 3g Get 3g FREE (6g)";
const VAPE_CAPTION = "Nicotine + THC vapes";
const CIGARETTE_CAPTION = "2 PACKS $5 / $25 CARTON";
const PREMIUM_CAPTION = "BB Full Flavor + Lights 2 packs $5 · Marlboro & Belmont $10/pack";

export const CODED_BANNERS: ResolvedBanner[] = [
  {
    id: "weed",
    page: "Home",
    spot: "Top banner",
    href: "/exotic-weed",
    categoryName: "Exotic Weed",
    hidden: false,
    render: "image",
    image: "/banners/core-top-weed.webp",
    codedImage: "/banners/core-top-weed.webp",
    imageWidth: 1672,
    imageHeight: 941,
    alt: `${FLEET_STORE_NAME} Exotic, Premium and AAA+ flower tiers`,
    title: WEED_CAPTION,
    textBar: WEED_CAPTION,
    caption: WEED_CAPTION,
  },
  {
    id: "vapes",
    page: "Home",
    spot: "Promo banner 2",
    href: "/items/vapes",
    categoryName: "Nicotine Vapes",
    hidden: false,
    render: "image",
    image: "/banners/core-vapes-nicotine-thc.webp",
    codedImage: "/banners/core-vapes-nicotine-thc.webp",
    imageWidth: 1672,
    imageHeight: 941,
    alt: `${FLEET_STORE_NAME} nicotine and THC vape categories`,
    title: VAPE_CAPTION,
    textBar: VAPE_CAPTION,
    caption: VAPE_CAPTION,
  },
  {
    id: "cigarettes",
    page: "Home",
    spot: "Promo banner 3",
    href: "/items/cigarettes",
    categoryName: "Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/core-cigarette-mix-match.webp",
    codedImage: "/banners/core-cigarette-mix-match.webp",
    imageWidth: 2048,
    imageHeight: 768,
    alt: `${FLEET_STORE_NAME} 2 packs for $5 mix and match and $25 carton cigarette offer`,
    title: CIGARETTE_CAPTION,
    textBar: CIGARETTE_CAPTION,
    caption: CIGARETTE_CAPTION,
  },
  {
    id: "premium-cigarettes",
    page: "Home",
    spot: "Promo banner 4",
    href: "/items/cigarettes",
    categoryName: "Premium Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/core-premium-cigarettes.webp",
    codedImage: "/banners/core-premium-cigarettes.webp",
    imageWidth: 1672,
    imageHeight: 941,
    alt: `${FLEET_STORE_NAME} BB Full Flavor and Lights, Marlboro and Belmont cigarettes`,
    title: PREMIUM_CAPTION,
    textBar: PREMIUM_CAPTION,
    caption: PREMIUM_CAPTION,
  },
];

export const CODED_PAGES: Record<string, ResolvedPage> = {
  Home: {
    description: "Walk into Indigenous Midtown Cannabis at 93 Broadway Ave, Midtown Toronto, one block north of Eglinton near Redpath and Yonge–Eglinton. Adults 19+. Open 24 Hours. Current menu in store — no medical claims.",
    metaTitle: "",
    metaDescription: "Walk into Indigenous Midtown Cannabis at 93 Broadway Ave, Midtown Toronto, one block north of Eglinton near Redpath and Yonge–Eglinton. Adults 19+. Open 24 Hours. Current menu in store — no medical claims.",
  },
  Contact: {
    description: "Visit Indigenous Midtown Cannabis at 93 Broadway Ave, Toronto, ON M4S 2A2. Open 24 hours, 7 days a week. Walk-ins welcome.",
    metaTitle: "Contact Us — Indigenous Midtown Cannabis | 93 Broadway Ave, Toronto",
    metaDescription: "Visit Indigenous Midtown Cannabis at 93 Broadway Ave, Toronto, ON M4S 2A2. Open 24 hours, 7 days a week. Walk-ins welcome.",
  },
};
