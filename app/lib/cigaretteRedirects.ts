import itemsJson from "./items.json";
import {
  isHiddenCigaretteItem,
  isHiddenGuide,
  SHOW_CIGARETTES,
  VAPE_PAGE,
} from "./showCigarettes";
import { NATIVE_CIG_GUIDE_SLUGS } from "./nativeCigGuides";

type CatalogItem = { name: string; slug: string; category: string };

export { VAPE_PAGE };

const STATIC_CIGARETTE_PATHS = [
  "/cigarettes",
  "/items/cigarettes",
  "/native-cigarettes-yonge-eglinton",
  "/info/native-cigarettes-toronto",
  "/info/native-cigarettes-york",
  "/resources/native-smokes",
  "/resources/native-smokes/native-cigarettes-guide",
];

export function hiddenCigarettePaths(): string[] {
  if (SHOW_CIGARETTES) return [];
  const paths = new Set<string>(STATIC_CIGARETTE_PATHS);
  for (const slug of NATIVE_CIG_GUIDE_SLUGS) {
    if (isHiddenGuide({ slug, lane: "native_cig" })) paths.add(`/guides/${slug}`);
  }
  for (const item of itemsJson as CatalogItem[]) {
    if (isHiddenCigaretteItem(item)) paths.add(`/item/${item.slug}`);
  }
  return [...paths];
}

const HIDDEN_PATHS = new Set(hiddenCigarettePaths());

export function isHiddenCigarettePath(pathname: string): boolean {
  if (SHOW_CIGARETTES) return false;
  const path = pathname.split("?")[0].replace(/\/+$/, "") || "/";
  return HIDDEN_PATHS.has(path);
}

export function isHiddenCigaretteUrl(url: string): boolean {
  if (SHOW_CIGARETTES) return false;
  try {
    return isHiddenCigarettePath(new URL(url).pathname);
  } catch {
    return false;
  }
}
