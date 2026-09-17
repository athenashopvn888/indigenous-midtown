import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");

const layout = read("app/layout.tsx");
const identity = read("app/lib/storeIdentity.ts");
const visit = read("app/visit/page.tsx");
const home = read("app/page.tsx");
const city = read("app/weed-dispensary-toronto/page.tsx");
const delivery = read("app/delivery/DeliveryContent.tsx");
const footer = read("app/components/Footer.tsx");
const sitemap = read("app/sitemap.ts");
const publicCopy = [
  identity,
  visit,
  home,
  city,
  layout,
  footer,
  read("app/components/WeedOwnerPage.tsx"),
].join("\n");

test("CannabisStore JSON-LD uses www NAP and FMD phone", () => {
  assert.match(identity, /@type": "CannabisStore"/);
  assert.match(identity, /phoneE164: "\+14372197367"/);
  assert.match(identity, /93 Broadway Ave/);
  assert.match(identity, /opens: "00:00"/);
  assert.match(identity, /closes: "23:59"/);
  assert.match(layout, /cannabisStoreJsonLd/);
  assert.match(layout, /faqPageJsonLd/);
  assert.doesNotMatch(identity, /7Clmh\.jpg/);
});

test("FAQPage JSON-LD mirrors visible homepage FAQs", () => {
  assert.match(identity, /@type": "FAQPage"/);
  assert.match(identity, /Where is Indigenous Midtown Cannabis on Broadway Avenue\?/);
  assert.match(home, /HOME_FAQS/);
});

test("/visit is a unique Broadway Midtown reach page with NAP, transit, parking", () => {
  assert.match(visit, /How to Reach Indigenous Midtown Cannabis on Broadway Avenue/);
  assert.match(visit, /93 Broadway Ave/);
  assert.match(visit, /Eglinton Station/);
  assert.match(visit, /Davisville Station/);
  assert.match(visit, /Redpath/);
  assert.match(visit, /Street parking on Broadway Avenue/);
  assert.match(visit, /\+1 437 219 7367/);
  assert.match(visit, /homepage visit hub/);
  assert.match(visit, /Google Business Profile\s+Website stays the homepage root/);
  assert.match(sitemap, /\$\{BASE\}\/visit/);
});

test("city Toronto weed-dispensary URL is noindexed and omitted from sitemap", () => {
  assert.match(city, /index: false/);
  assert.match(city, /canonical: "https:\/\/www\.indigenousmidtowncannabis\.ca\/"/);
  assert.doesNotMatch(sitemap, /weed-dispensary-toronto/);
  assert.doesNotMatch(footer, /weed-dispensary-toronto/);
});

test("citation phone (437) 870-3710 is suppressed in favor of FMD line", () => {
  assert.doesNotMatch(delivery, /870-3710/);
  assert.match(delivery, /\+1 437 219 7367/);
  assert.match(delivery, /Broadway Midtown Delivery Menu/);
});

test("public copy does not invent Indigenous, Nation, reserve, or healing claims", () => {
  assert.doesNotMatch(publicCopy, /indigenous-owned|First Nation|reserve dispensary|healing|traditional medicine|land-based/i);
  assert.doesNotMatch(publicCopy, /Pleasant Cannabis|EarthRoot|First Nation Smoke|Fort York|Athena|our other locations|sister store/i);
});

test("GBP Website policy remains homepage root in store identity", () => {
  assert.match(identity, /gbpWebsitePolicy: "https:\/\/www\.indigenousmidtowncannabis\.ca\/"/);
});
