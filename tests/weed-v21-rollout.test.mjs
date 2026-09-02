import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");
const products = read("app/lib/products.ts");
const tierSeo = read("app/lib/tierSeoContent.ts");
const navbar = read("app/components/Navbar.tsx");
const footer = read("app/components/Footer.tsx");
const home = read("app/page.tsx");
const resources = read("app/resources/resourceData.ts");
const config = read("next.config.ts");

const tiers = [
  ["Exotic Weed", "exotic-weed"],
  ["Premium Weed", "premium-weed"],
  ["AAA+ Weed", "aaa-weed"],
  ["AA Weed", "aa-weed"],
  ["Budget Weed", "budget-weed"],
];

test("all tier owners use Tier Name + Weed and tier-first canonical slugs", () => {
  for (const [name, slug] of tiers) {
    assert.ok(products.includes(`name: "${name}"`));
    assert.ok(products.includes(`slug: "${slug}"`));
    assert.ok(navbar.includes(`href: "/${slug}", label: "${name}"`));
    assert.ok(footer.includes(`href="/${slug}">${name}`));
  }
  assert.doesNotMatch(`${products}\n${tierSeo}\n${navbar}\n${footer}\n${home}`, /Weed (?:Exotic|Premium|AAA\+?|AA|Budget)/);
});

test("legacy tier and governed resource routes redirect in one hop", () => {
  for (const [legacy, destination] of [
    ["exotic", "exotic-weed"],
    ["premium", "premium-weed"],
    ["aaa", "aaa-weed"],
    ["aa", "aa-weed"],
    ["budget", "budget-weed"],
    ["resources/flower-guide", "resources/weed-flower-guide"],
    ["resources/value-guide", "resources/weed-value-guide"],
  ]) {
    assert.ok(config.includes(`source: "/${legacy}", destination: "/${destination}", permanent: true`));
  }
});

test("supporting resource owners use Weed-bearing slugs and approved copy", () => {
  assert.match(resources, /slug: "weed-flower-guide"/);
  assert.match(resources, /seoTitle: "Weed & Cannabis Flower Guide Toronto"/);
  assert.match(resources, /Indigenous Midtown Cannabis brings together five Weed flower collections/);
  assert.match(resources, /slug: "weed-value-guide"/);
  assert.match(resources, /seoTitle: "Weed Value Guide Toronto"/);
  assert.match(resources, /without relying on fixed prices, promotions or availability claims that can change/);
  assert.doesNotMatch(resources, /href: "\/(?:exotic|premium|aaa|aa|budget)"/);
  assert.doesNotMatch(resources, /href: "\/resources\/(?:flower-guide|value-guide)"/);
});

test("nicotine and THC vape labels remain separated on their existing routes", () => {
  assert.match(products, /"VAPE PENS": \{[\s\S]*?name: "Nicotine Vape", slug: "vapes"/);
  assert.match(products, /Nicotine products are for adults 19\+ and contain nicotine, which is addictive/);
  assert.match(products, /"VAPE DISPOSABLE": \{[\s\S]*?name: "THC Vape", slug: "vape-disposables"/);
  assert.match(navbar, /href: "\/items\/vapes", label: "Nicotine Vape"/);
  assert.match(footer, /href="\/items\/vape-disposables">THC Vape/);
});

test("delivery is excluded from the governed migration", () => {
  assert.doesNotMatch(config, /source: "\/delivery"/);
  assert.doesNotMatch(`${products}\n${resources}\n${navbar}\n${footer}\n${home}`, /weed-delivery/i);
});
