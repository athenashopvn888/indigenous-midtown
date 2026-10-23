import type { CigaretteWording } from "../lib/cigDecision.ts";
import { isRealCigaretteItem } from "../lib/cigMarkers.ts";

/** Title the cigarette slot uses while the feed flag is off. */
export const CIGARETTE_OFF_TITLE = "BACKWOODS";

type ShelfItem = { category?: string; name?: string; slug?: string };

/**
 * Daytime quiet hides nicotine on every board. A live cigarette board is the
 * exception, so the 8:00-9:00 overlap still lists cartons while tvOn is true.
 */
export function filterDaytimeShelf<T extends ShelfItem>(
  items: T[],
  daytime: boolean,
  showCigaretteBoard: boolean,
  isNicotine: (item: T) => boolean,
): T[] {
  if (!daytime || showCigaretteBoard) return items;
  return items.filter((item) => !isNicotine(item));
}

export function presentTvCigaretteCard<T extends ShelfItem>(
  items: T[],
  show: boolean,
  wording: Pick<CigaretteWording, "tv2BoardTitle">,
) {
  const visible = show ? items : items.filter((item) => !isRealCigaretteItem(item));
  return {
    title: show ? wording.tv2BoardTitle : CIGARETTE_OFF_TITLE,
    items: visible,
    categoryOff: !show,
    showOffer: show,
    omit: !show && visible.length === 0,
  };
}
