/**
 * Recallable site-wide cigarette switch.
 * Default is off. Set NEXT_PUBLIC_SHOW_CIGARETTES=true and rebuild to restore.
 */
export const SHOW_CIGARETTES =
  (process.env.NEXT_PUBLIC_SHOW_CIGARETTES ?? "false").trim().toLowerCase() === "true";

export const VAPE_PAGE = "/items/vapes";

const KEPT_TOBACCO = /\b(backwoods?|cigarillos?|rolling\s+papers?)\b/i;
const GRABBA = /\bgrabba\b/i;

export function isGrabbaText(value: string): boolean {
  return GRABBA.test(value);
}

/** Backwoods, cigarillos, and rolling papers stay on the site. */
export function isKeptTobaccoText(value: string): boolean {
  return KEPT_TOBACCO.test(value) && !isGrabbaText(value);
}

export function isHiddenCigaretteItem(item: {
  name?: string;
  slug?: string;
  category?: string;
}): boolean {
  if (SHOW_CIGARETTES) return false;
  const label = `${item.name ?? ""} ${item.slug ?? ""}`;
  if (isGrabbaText(label)) return true;
  if (isKeptTobaccoText(label)) return false;
  return (item.category ?? "").toUpperCase() === "CIGARETTES";
}

export function isHiddenGuide(guide: {
  slug: string;
  lane?: string;
  name?: string;
}): boolean {
  if (SHOW_CIGARETTES) return false;
  const label = `${guide.slug} ${guide.name ?? ""}`;
  if (isGrabbaText(label)) return true;
  if (guide.slug === "backwoods" || isKeptTobaccoText(label)) return false;
  if (guide.lane === "native_cig") return true;
  return false;
}

/** Reviews, tickers, and loose copy. Kept tobacco products stay visible. */
export function mentionsHiddenCigarette(value: string): boolean {
  if (SHOW_CIGARETTES || !value) return false;
  if (isGrabbaText(value)) return true;
  if (/\b(cigarettes?|native smokes?|marlboro|belmont)\b/i.test(value)) return true;
  if (/\btobacco\b/i.test(value) && !isKeptTobaccoText(value)) return true;
  return false;
}

export function isHiddenCigaretteHref(href: string): boolean {
  if (SHOW_CIGARETTES) return false;
  return /native-cigarettes|\/items\/cigarettes|\/cigarettes(?:\/|$)|native-smokes|\/guides\/grabba|\/item\/grabba/i.test(href);
}

/** Category label for products that stay up when the cigarette shelf is hidden. */
export function publicItemCategory(category: string, name: string, slug = ""): string {
  if (SHOW_CIGARETTES) return category;
  if (category.toUpperCase() === "CIGARETTES" && isKeptTobaccoText(`${name} ${slug}`)) {
    return "Accessories";
  }
  return category;
}
