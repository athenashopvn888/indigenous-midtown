import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  CIG_WORDING_FALLBACK,
  decideCigaretteGuide,
  decideCigaretteSurface,
  readCigaretteTvHeader,
  reconcileSurfaceItems,
  resolveCigWording,
  resolveSurfaceFlag,
} from "../app/lib/cigDecision.ts";
import { filterDaytimeShelf, presentTvCigaretteCard } from "../app/tv2/cigaretteBoard.ts";

const carton = { category: "CIGARETTES", name: "BB FULL CARTON", slug: "bb-full-carton", sku: "carton" };
const grabba = { category: "CIGARETTES", name: "GRABBA", slug: "grabba", sku: "grabba" };
const backwoods = { category: "CIGARETTES", name: "BACKWOODS ASSORTED FLAVORS $20-$25", slug: "backwoods-assorted-flavors-20-25", sku: "bw" };
const paper = { category: "CIGARETTES", name: "RAW PAPER KING SIZE", slug: "raw-paper-king-size", sku: "paper" };
const pouch = { category: "CIGARETTES", name: "NICOTINE POUCHES , VELO, PABLO, KILLA", slug: "nicotine-pouches-velo-pablo-killa", sku: "pouch" };
const zyn = { category: "CIGARETTES", name: "ZYN NICOTINE POUCHES", slug: "zyn-nicotine-pouches", sku: "zyn" };
const wrap = { category: "CIGARETTES", name: "HEMP WRAP", slug: "hemp-wrap", sku: "wrap" };
const cigarillo = { category: "CIGARETTES", name: "CIGARILLO PACK", slug: "cigarillo-pack", sku: "cigarillo" };
const vape = { category: "VAPE PENS", name: "Mango Ice", slug: "mango-ice", sku: "vape" };

const wording = {
  bannerText: "FEED BANNER",
  promoBrands: "FEED BRANDS",
  tv2BoardTitle: "FEED BOARD",
  wrapsTitle: "🍂 WRAPS & POUCHES",
  tickerLine1: "FEED TICKER",
  priceTwoPack: "$5",
  priceCarton: "$25",
  priceBelmont: "$10",
  priceBB2Pack: "$5",
};

function cig(extra: Record<string, unknown> = {}) {
  return { on: false, tvOn: false, webOn: false, webFollowsTv: true, wording, ...extra };
}

const read = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("website follows webOn and TV follows tvOn, with on as the fallback", () => {
  const items = [carton, backwoods];
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: false }), items, surface: "web" }).show, true);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: true, tvOn: false }), items, surface: "tv" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: false, tvOn: true }), items, surface: "web" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: false, tvOn: true }), items, surface: "tv" }).show, true);
  assert.equal(resolveSurfaceFlag({ on: true }, "web"), true);
  assert.equal(resolveSurfaceFlag({ on: true }, "tv"), true);
  assert.equal(resolveSurfaceFlag(cig({ on: true, webOn: false }), "web"), false);
  assert.equal(resolveSurfaceFlag(cig({ on: false, tvOn: true, webFollowsTv: true }), "tv"), true);
  assert.equal(resolveSurfaceFlag(cig({ on: true, webOn: false, webFollowsTv: true }), "web"), false);
});

test("only an explicit false flag, no real items, or the env override hides cigarettes", () => {
  const items = [carton, grabba, backwoods];
  const missing = decideCigaretteSurface({ cig: null, items, surface: "web" });
  assert.equal(missing.reason, "missing");
  assert.equal(missing.show, true);
  assert.equal(decideCigaretteSurface({ cig: cig(), items, surface: "tv" }).show, false);
  assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items: [backwoods, pouch], surface: "web" }).reason, "no-items");
  const errored = decideCigaretteSurface({ cig: cig({ on: true, webOn: false, tvOn: false }), items, surface: "web", errored: true });
  assert.equal(errored.reason, "error");
  assert.equal(errored.show, true);
  assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items, surface: "tv", envRaw: "false" }).reason, "env");
  assert.equal(decideCigaretteSurface({ cig: cig({ on: true, webOn: true, tvOn: true }), items, surface: "web", envRaw: "true" }).show, true);
});

test("wording uses the feed and falls back to the current copy field by field", () => {
  assert.equal(resolveCigWording({ bannerText: "  FEED BANNER  ", wrapsTitle: "" }).bannerText, "FEED BANNER");
  assert.equal(resolveCigWording({ bannerText: "  FEED BANNER  " }).wrapsTitle, CIG_WORDING_FALLBACK.wrapsTitle);
  assert.equal(resolveCigWording(undefined).tickerLine1, CIG_WORDING_FALLBACK.tickerLine1);
  assert.equal(decideCigaretteSurface({ cig: cig({ webOn: false }), items: [backwoods], surface: "web" }).wording.wrapsTitle, "🍂 WRAPS & POUCHES");
  assert.equal(decideCigaretteSurface({ cig: null, items: [], surface: "tv" }).wording.bannerText, CIG_WORDING_FALLBACK.bannerText);
});

test("null flags with real cigarettes stay open and an explicit false still hides", () => {
  const open = decideCigaretteSurface({ cig: { on: null, webOn: null, tvOn: null, wording }, items: [carton], surface: "web" });
  assert.equal(open.show, true);
  assert.equal(open.reason, "on");
  assert.equal(decideCigaretteSurface({ cig: { on: false }, items: [carton], surface: "tv" }).reason, "off");
  assert.equal(decideCigaretteGuide({ cig: { master: null, on: null }, items: [carton] }).show, true);
});

test("guide pages follow the master switch and a feed error stays open", () => {
  const items = [carton];
  assert.equal(decideCigaretteGuide({ cig: cig({ on: false, master: false, webOn: true }), items }).show, false);
  assert.equal(decideCigaretteGuide({ cig: cig({ on: true, master: true, webOn: false }), items }).show, true);
  assert.equal(decideCigaretteGuide({ cig: null, items, errored: true }).show, true);
  assert.equal(decideCigaretteGuide({ cig: cig({ on: true, master: true }), items, envRaw: "off" }).reason, "env");
});

test("tvOn shows the cigarette card and items while web stays hidden", () => {
  const items = [vape, carton, grabba, backwoods, paper, pouch, zyn, wrap, cigarillo];
  const feed = cig({ webOn: false, tvOn: true, on: true });
  assert.equal(decideCigaretteSurface({ cig: feed, items, surface: "tv" }).show, true);
  assert.equal(decideCigaretteSurface({ cig: feed, items, surface: "web" }).show, false);

  const shown = presentTvCigaretteCard(items, true, wording);
  assert.equal(shown.title, "FEED BOARD");
  assert.equal(shown.categoryOff, false);
  assert.equal(shown.showOffer, true);
  assert.equal(shown.omit, false);
  assert.ok(shown.items.some((item) => item.slug === carton.slug));

  const hidden = presentTvCigaretteCard(items, false, wording);
  assert.equal(hidden.title, "BACKWOODS");
  assert.equal(hidden.categoryOff, true);
  assert.equal(hidden.showOffer, false);
  assert.equal(hidden.omit, false);
  assert.deepEqual(hidden.items.map((item) => item.slug), [vape.slug, backwoods.slug, paper.slug, pouch.slug, zyn.slug, wrap.slug, cigarillo.slug]);

  const stripped = reconcileSurfaceItems(items, items, false);
  assert.deepEqual(stripped.map((item) => item.slug), [vape.slug, backwoods.slug, paper.slug, pouch.slug, zyn.slug, wrap.slug, cigarillo.slug]);
  const restored = reconcileSurfaceItems([vape, backwoods], [carton, backwoods], true);
  assert.deepEqual(restored.map((item) => item.slug), [vape.slug, backwoods.slug, carton.slug]);
});

test("a false tv flag with no kept items omits the card, and daytime quiet keeps a live board", () => {
  const off = presentTvCigaretteCard([carton, grabba], false, wording);
  assert.equal(off.omit, true);
  assert.deepEqual(off.items, []);

  const daytimeOff = filterDaytimeShelf([carton, backwoods], true, false, (item) => item.category === "CIGARETTES");
  assert.deepEqual(daytimeOff, []);
  const daytimeOn = filterDaytimeShelf([carton, backwoods], true, true, (item) => item.category === "CIGARETTES");
  assert.equal(daytimeOn.length, 2);
});

test("the tv header round-trips the feed flag", () => {
  const headers = new Headers({ "x-tv-data-cig-tv": "1", "x-tv-data-cig-wording": encodeURIComponent(JSON.stringify(wording)) });
  const on = readCigaretteTvHeader(headers);
  assert.equal(on.show, true);
  assert.equal(on.wording.tv2BoardTitle, "FEED BOARD");
  assert.equal(readCigaretteTvHeader(new Headers({ "x-tv-data-cig-tv": "0" })).show, false);
});

test("tv boards follow the feed flag and website surfaces keep the static gate", () => {
  const tv2 = read("app/tv2/page.tsx");
  const tv = read("app/tv/page.tsx");
  const route = read("app/api/tv-data/route.ts");
  const decision = read("app/lib/cigDecision.ts");
  assert.match(tv2, /readCigaretteTvHeader/);
  assert.match(tv2, /presentTvCigaretteCard/);
  assert.doesNotMatch(tv2, /SHOW_CIGARETTES/);
  assert.match(tv, /readCigaretteTvHeader/);
  assert.match(route, /snapshotHeaders/);
  assert.match(route, /reconcileSurfaceItems/);
  assert.doesNotMatch(route, /isHiddenCigaretteItem/);
  assert.doesNotMatch(decision, /SHOW_CIGARETTES/);
  for (const path of ["app/components/Navbar.tsx", "app/sitemap.ts", "app/items/[category]/page.tsx", "app/faq/page.tsx"]) {
    assert.match(read(path), /SHOW_CIGARETTES/);
  }
});
