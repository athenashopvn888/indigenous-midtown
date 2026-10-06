import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

import { getTvTheme, TV_THEMES } from "../app/tv-theme/theme.ts";
import {
  CIGARETTE_OFFER_CYCLE_MS,
  CIGARETTE_OFFER_VISIBLE_MS,
  CIGARETTE_PROMOS,
  getCigaretteOfferPromo,
} from "../app/tv2/tv2Promos.ts";

test("IMC01 theme assets and data entry are complete", async () => {
  assert.equal(getTvTheme("IMC01"), TV_THEMES.IMC01);
  for (const file of ["header.webp", "background.webp", "corner-left.png", "corner-right.png"]) {
    const info = await stat(`public/tv-theme/imc01/${file}`);
    assert.ok(info.size > 0 && info.size < 500 * 1024, `${file} must be below 500 KB`);
  }
});

test("cigarette promos alternate for five seconds every thirty seconds", () => {
  assert.equal(CIGARETTE_OFFER_CYCLE_MS, 30_000);
  assert.equal(CIGARETTE_OFFER_VISIBLE_MS, 5_000);
  assert.equal(getCigaretteOfferPromo(0)?.src, CIGARETTE_PROMOS[0].src);
  assert.equal(getCigaretteOfferPromo(5_000), undefined);
  assert.equal(getCigaretteOfferPromo(30_000)?.src, CIGARETTE_PROMOS[1].src);
});

test("TV boards keep the QR, feed-gated carton flash, full images and no ticker deal", async () => {
  const [tv, tvLayout, tv2, tv2Layout, tvCss, tv2Css, ribbon, qr, qrCss] = await Promise.all([
    readFile("app/tv/page.tsx", "utf8"),
    readFile("app/tv/layout.tsx", "utf8"),
    readFile("app/tv2/page.tsx", "utf8"),
    readFile("app/tv2/layout.tsx", "utf8"),
    readFile("app/tv/tv.module.css", "utf8"),
    readFile("app/tv2/tv2.module.css", "utf8"),
    readFile("app/components/HiringRibbon.tsx", "utf8"),
    readFile("app/TvReviewQr.tsx", "utf8"),
    readFile("app/TvReviewQr.module.css", "utf8"),
  ]);
  assert.match(tv, /getTvTheme/);
  assert.match(tv2, /promoImage === "CIG_2_FOR_5"/);
  assert.match(tv2, /getCigaretteOfferPromo/);
  assert.match(tvCss, /\.budImg[\s\S]*?object-fit: contain/);
  assert.match(tv2Css, /\.budImg[\s\S]*?object-fit: contain/);
  assert.doesNotMatch(tv, /CIGARETTE_FLASH_MESSAGE/);
  assert.doesNotMatch(tv2, /CIGARETTE_FLASH_MESSAGE/);
  assert.doesNotMatch(ribbon, /CIGARETTE_FLASH_MESSAGE/);
  assert.match(qr, /SCAN FOR REVIEW/);
  assert.match(tv, /<TvReviewQr storeName="Indigenous Midtown Cannabis" \/>/);
  assert.doesNotMatch(tvLayout, /TvReviewQr/);
  assert.doesNotMatch(tv2Layout, /TvReviewQr/);
  assert.doesNotMatch(tv, /reviewQrSafeArea|availableW/);
  assert.doesNotMatch(tv2, /reviewQrSafeArea|availableW/);
  assert.match(tvCss, /\.addonsList[\s\S]*?overflow:auto/);
  assert.match(qrCss, /reviewQrChase 2s linear infinite/);
  assert.doesNotMatch(qrCss, /position:\s*fixed/);
});
