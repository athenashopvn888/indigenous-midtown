import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");
const owner = read("app/components/WeedOwnerPage.tsx");
const route = read("app/weed-dispensary-toronto/page.tsx");
const home = read("app/page.tsx");
const localPages = read("app/lib/seoPages.ts");
const resources = read("app/resources/resourceData.ts");
const layout = read("app/layout.tsx");
const config = read("next.config.ts");

test("protected Toronto Weed owner keeps its canonical and exact local H1", () => {
  assert.match(route, /Weed Dispensary in Midtown Toronto \| Indigenous Midtown Cannabis/);
  assert.match(route, /indigenousmidtowncannabis\.ca\/weed-dispensary-toronto\//);
  assert.match(route, /index: true/);
  assert.match(route, /follow: true/);
  assert.match(owner, /<h1>\{storeName\} — Weed Dispensary in Toronto<\/h1>/);
});

test("owner uses exact identity, NAP and neutral hours wording", () => {
  assert.match(owner, /Indigenous Midtown Cannabis/);
  assert.match(owner, /93 Broadway Ave/);
  assert.match(owner, /Toronto, ON M4S 2A2/);
  assert.match(owner, /\+1 437-219-7367/);
  assert.match(owner, /Current store hours are shown on the website before your visit/);
  assert.doesNotMatch(owner, /open 24 hours/i);
});

test("approved tier and resource routes are directly linked", () => {
  for (const href of [
    "/exotic-weed",
    "/premium-weed",
    "/aaa-weed",
    "/aa-weed",
    "/budget-weed",
    "/resources/weed-flower-guide",
  ]) assert.ok(`${owner}\n${home}`.includes(`href=\"${href}`));
  assert.doesNotMatch(owner, /available now|in stock|best price/i);
});

test("homepage bridge and neighborhood page use approved local wording", () => {
  assert.match(home, /INDIGENOUS MIDTOWN CANNABIS/);
  assert.match(home, /A Cannabis Dispensary on Broadway Avenue/);
  assert.match(home, /MIDTOWN TORONTO STORE INFORMATION/);
  assert.doesNotMatch(home, /Free evening street parking/i);
  assert.match(localPages, /title: "Weed Store in Midtown Toronto \| Broadway Avenue"/);
  assert.match(localPages, /h1: "Weed Store Information for Midtown Toronto"/);
  assert.match(resources, /title: "Midtown Toronto store information"[\s\S]*?href: "\/weed-dispensary-toronto\/"/);
});

test("schema has one exact entity, approved pin and no unsupported area owner", () => {
  assert.doesNotMatch(owner, /application\/ld\+json/);
  assert.match(layout, /"@type": "Store"/);
  assert.match(layout, /latitude: 43\.7104858/);
  assert.match(layout, /longitude: -79\.393603/);
  assert.doesNotMatch(layout, /areaServed|priceRange/);
});

test("SCC copy avoids unsupported or internal-process claims", () => {
  const surfaces = `${owner}\n${route}\n${home}\n${localPages}`;
  assert.doesNotMatch(surfaces, /indigenous-owned|community-owned|culturally owned|licensed product line|complete product line|free evening street parking|direct subway|public SEO|workflow language/i);
  assert.doesNotMatch(config, /source:\s*"\/(?:info\/toronto-weed-dispensary|info\/dispensary-near-me-toronto)"/);
});
