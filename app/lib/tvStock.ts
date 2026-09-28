/**
 * IMC01 stock post-processing and TV menu loading.
 *
 * /api/tv-data is the only caller. It reads the shared Apps Script deployment
 * the same way Spirit Corner does: `?store=IMC01` returns the master catalog
 * filtered by that store's stock sheet.
 *
 * A successful live payload is cached in memory for TV_STOCK_CACHE_MS (~5 min)
 * and via fetch `next.revalidate` when the Next.js data cache honors it.
 * Failures are not cached. If the live source errors, is empty, or is a
 * partial sheet, the route serves the committed flowers.json / items.json
 * snapshot (last-known-good). Callers still send Cache-Control: no-store.
 *
 * When APPS_SCRIPT_URL is empty, the TV route falls back to the Apps Script
 * deployment this fleet already calls for store-coded stock.
 */

const DEFAULT_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx09_sDal1eMVF1r-hUck4e7oq_XBHEWhGvA79JuhZNQ6P4CdhCas0xE3FfexWQ3hq4/exec";

const TV_STORE = "IMC01";
const TV_STOCK_CACHE_MS = 300 * 1000;
const TV_STOCK_FETCH_TIMEOUT_MS = 25000;
const PARTIAL_STOCK_RATIO = 0.5;

const SALE_RE = /\bSALE\b/i;
const ON_SALE_RE = /ON\s*SALE/i;

type LooseRecord = Record<string, unknown> & {
  name?: string;
  isSale?: boolean;
  price?: string;
  price3g?: { sale: number | null } | null;
  price5g?: { sale: number | null } | null;
  price14g?: { sale: number | null } | null;
  price28g?: { sale: number | null } | null;
};

export type TvDataset = {
  source: "live" | "static-fallback";
  flowers: LooseRecord[];
  items: LooseRecord[];
  stockDate: string;
};

type TvStockOptions = {
  type?: string | null;
  staticFlowers?: unknown;
  staticItems?: unknown;
  fetchImpl?: typeof fetch;
  appsScriptUrl?: string;
  timeoutMs?: number;
  now?: number;
};

function hasSalePrice(flower: LooseRecord) {
  return !!(
    (flower.price3g && flower.price3g.sale !== null) ||
    (flower.price5g && flower.price5g.sale !== null) ||
    (flower.price14g && flower.price14g.sale !== null) ||
    (flower.price28g && flower.price28g.sale !== null)
  );
}

function cleanName(name: string) {
  return name
    .replace(/\s*\(?\s*AAA\+?\s*ON\s*SALE\s*\)?\s*$/i, "")
    .replace(/\s*\(?\s*AAA\+?\s*SALE!?\s*\)?\s*$/i, "")
    .replace(/\s*\bSALE!?\s*$/i, "")
    .replace(/\s*\bON\s*SALE\s*$/i, "")
    .trim();
}

function postprocessFlowers(flowers: LooseRecord[]) {
  for (const flower of flowers) {
    const name = String(flower.name || "");
    if (!flower.isSale) {
      if (SALE_RE.test(name) || ON_SALE_RE.test(name) || hasSalePrice(flower)) {
        flower.isSale = true;
      }
    }
    flower.name = cleanName(name);
  }
  return flowers;
}

function postprocessItems(items: LooseRecord[]) {
  for (const item of items) {
    if (typeof item.price === "string" && item.price.includes("[object")) {
      item.price = "";
    }
  }
  return items;
}

function resolveAppsScriptUrl(explicit?: string) {
  const raw = explicit != null ? String(explicit) : String(process.env.APPS_SCRIPT_URL || "");
  const trimmed = raw.trim();
  return trimmed || DEFAULT_APPS_SCRIPT_URL;
}

function stockEndpoint(baseUrl: string) {
  return `${baseUrl}?store=${TV_STORE}`;
}

function asRecords(value: unknown): LooseRecord[] {
  return Array.isArray(value) ? (value as LooseRecord[]) : [];
}

function staticDataset(staticFlowers: unknown, staticItems: unknown): TvDataset {
  return {
    source: "static-fallback",
    flowers: asRecords(staticFlowers),
    items: asRecords(staticItems),
    stockDate: "",
  };
}

function rejectLiveStock(data: unknown, staticFlowers: unknown, staticItems: unknown) {
  if (!data || typeof data !== "object") return "invalid payload";
  const record = data as { flowers?: unknown; items?: unknown };
  if (!Array.isArray(record.flowers) || !Array.isArray(record.items)) return "missing flowers or items";
  if (record.flowers.length === 0 || record.items.length === 0) return "empty flowers or items";

  const flowerBaseline = Array.isArray(staticFlowers) ? staticFlowers.length : 0;
  const itemBaseline = Array.isArray(staticItems) ? staticItems.length : 0;
  if (flowerBaseline > 0 && record.flowers.length < flowerBaseline * PARTIAL_STOCK_RATIO) {
    return `partial flowers ${record.flowers.length}/${flowerBaseline}`;
  }
  if (itemBaseline > 0 && record.items.length < itemBaseline * PARTIAL_STOCK_RATIO) {
    return `partial items ${record.items.length}/${itemBaseline}`;
  }
  return null;
}

let cached: { expiresAt: number; dataset: TvDataset } | null = null;
let inflight: Promise<TvDataset> | null = null;

export function resetTvStockCache() {
  cached = null;
  inflight = null;
}

function selectTvPayload(dataset: TvDataset, type: string | null | undefined) {
  const body = type === "items" ? dataset.items : dataset.flowers;
  return {
    body,
    headers: {
      "x-tv-data-source": dataset.source,
      "x-tv-data-as-of": dataset.stockDate,
      "x-tv-data-store": TV_STORE,
      "x-tv-data-flower-count": String(dataset.flowers.length),
      "x-tv-data-item-count": String(dataset.items.length),
      "Cache-Control": "no-store",
    },
  };
}

async function resolveDataset(options: TvStockOptions): Promise<TvDataset> {
  const fetchImpl = options.fetchImpl || fetch;
  const timeoutMs = options.timeoutMs ?? TV_STOCK_FETCH_TIMEOUT_MS;
  const endpoint = stockEndpoint(resolveAppsScriptUrl(options.appsScriptUrl));

  try {
    const res = await fetchImpl(endpoint, {
      signal: AbortSignal.timeout(timeoutMs),
      next: { revalidate: 300 },
    });

    if (!res || !res.ok) {
      const status = res ? res.status : "no response";
      console.warn(`[tv-data] Live stock HTTP ${status}; serving static snapshot`);
      return staticDataset(options.staticFlowers, options.staticItems);
    }

    let data: unknown;
    try {
      data = await res.json();
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.warn(`[tv-data] Live stock JSON invalid (${message}); serving static snapshot`);
      return staticDataset(options.staticFlowers, options.staticItems);
    }

    const reason = rejectLiveStock(data, options.staticFlowers, options.staticItems);
    if (reason) {
      console.warn(`[tv-data] Live stock rejected (${reason}); serving static snapshot`);
      return staticDataset(options.staticFlowers, options.staticItems);
    }

    const record = data as { flowers: LooseRecord[]; items: LooseRecord[]; stockDate?: unknown };
    postprocessFlowers(record.flowers);
    postprocessItems(record.items);

    const dataset: TvDataset = {
      source: "live",
      flowers: record.flowers,
      items: record.items,
      stockDate: record.stockDate == null ? "" : String(record.stockDate),
    };
    const now = options.now ?? Date.now();
    cached = { expiresAt: now + TV_STOCK_CACHE_MS, dataset };
    return dataset;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn(`[tv-data] Live stock fetch failed (${message}); serving static snapshot`);
    return staticDataset(options.staticFlowers, options.staticItems);
  }
}

export async function getTvData(options: TvStockOptions) {
  const now = options.now ?? Date.now();
  let dataset: TvDataset;
  if (cached && now < cached.expiresAt) {
    dataset = cached.dataset;
  } else {
    if (!inflight) {
      inflight = resolveDataset(options).finally(() => {
        inflight = null;
      });
    }
    dataset = await inflight;
  }

  const requested = options.type === "items" ? dataset.items : dataset.flowers;
  const staticRequested = options.type === "items" ? options.staticItems : options.staticFlowers;
  if (
    Array.isArray(requested) &&
    requested.length === 0 &&
    Array.isArray(staticRequested) &&
    staticRequested.length > 0
  ) {
    dataset = staticDataset(options.staticFlowers, options.staticItems);
  }

  return selectTvPayload(dataset, options.type);
}
