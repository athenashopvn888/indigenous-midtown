import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (path) => fs.readFileSync(path, "utf8");
const guides = JSON.parse(read("app/lib/guideCopy.json"));
const items = JSON.parse(read("app/lib/items.json"));
const slugSource = read("app/lib/nativeCigGuides.ts");
const arrayBody = slugSource.slice(slugSource.indexOf("NATIVE_CIG_GUIDE_SLUGS = ["), slugSource.indexOf("] as const"));
const slugs = [...arrayBody.matchAll(/"([a-z0-9-]+)"/g)].map((match) => match[1]);

const kept = (value) => /\b(backwoods?|cigarillos?|rolling\s+papers?)\b/i.test(value) && !/\bgrabba\b/i.test(value);

test("native cigarette guide index matches the guide pack", () => {
  const fromPack = guides.filter((guide) => guide.lane === "native_cig").map((guide) => guide.slug).sort();
  assert.deepEqual([...slugs].sort(), fromPack);
  assert.match(slugSource, /KEPT_GUIDE_SLUGS = new Set<string>\(\["backwoods"\]\)/);
});

test("redirect sources name cigarettes and grabba and leave backwoods out of the matcher logic", () => {
  const redirects = read("app/lib/cigaretteRedirects.ts");
  const middleware = read("proxy.ts");
  const config = read("next.config.ts");
  for (const path of ["/items/cigarettes", "/native-cigarettes-yonge-eglinton", "/info/native-cigarettes-toronto", "/resources/native-smokes"]) {
    assert.match(redirects, new RegExp(path.replaceAll("/", "\\/")));
  }
  assert.match(redirects, /\/guides\/\$\{slug\}/);
  assert.ok(slugs.includes("grabba"));
  assert.ok(slugs.includes("backwoods"));
  assert.match(middleware, /NextResponse\.redirect\(url, 302\)/);
  assert.match(config, /statusCode: 302/);
  assert.match(config, /hiddenCigarettePaths\(\)/);
  const backwoods = items.filter((item) => kept(`${item.name} ${item.slug}`));
  assert.ok(backwoods.length >= 2);
  assert.equal(guides.some((guide) => guide.slug === "backwoods"), true);
  assert.equal(guides.some((guide) => guide.slug === "grabba" && guide.lane === "native_cig"), true);
});
