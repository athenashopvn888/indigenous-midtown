import assert from "node:assert/strict";
import test from "node:test";
import { getTvData, resetTvStockCache } from "../app/lib/tvStock.ts";

const staticFlowers = [{ sku: "sf", name: "Static flower" }];
const staticItems = [{ sku: "si", name: "Static item" }];
const live = {
  flowers: [{ sku: "f1", name: "Live flower" }, { sku: "f2", name: "Live flower 2" }],
  items: [{ sku: "i1", name: "Live item" }, { sku: "i2", name: "Live item 2" }],
  stockDate: "2026-10-08T12:00:00.000Z",
};

function response(status: number, body: unknown) {
  return {
    ok: status >= 200 && status < 300,
    status,
    async json() { return body; },
  } as Response;
}

test("good stock is live, uncached upstream, and keeps the five-minute memory cache", async () => {
  resetTvStockCache();
  const calls: RequestInit[] = [];
  const fetchImpl = async (_url: string | URL | Request, init?: RequestInit) => {
    calls.push(init || {});
    return response(200, live);
  };
  const result = await getTvData({ type: "flowers", staticFlowers, staticItems, fetchImpl, now: 1_000 });
  assert.equal(result.headers["x-tv-data-source"], "live");
  assert.equal(result.headers["x-tv-data-as-of"], live.stockDate);
  assert.equal(calls[0].cache, "no-store");
  await getTvData({ type: "items", staticFlowers, staticItems, fetchImpl, now: 300_000 });
  assert.equal(calls.length, 1);
});

test("HTML 200, 429, and thrown failures serve last-good with its date and a reason header", async () => {
  const failures: Array<{ label: string; fetchImpl: typeof fetch; reason: string }> = [
    {
      label: "HTML 200",
      fetchImpl: async () => ({ ...response(200, null), async json() { throw new SyntaxError("Unexpected token '<'"); } }) as Response,
      reason: "Unexpected token '<'",
    },
    { label: "429", fetchImpl: async () => response(429, null), reason: "HTTP 429" },
    { label: "throw", fetchImpl: async () => { throw new Error("socket reset"); }, reason: "socket reset" },
  ];

  for (const failure of failures) {
    resetTvStockCache();
    const goodFetch = async () => response(200, live);
    await getTvData({ type: "flowers", staticFlowers, staticItems, fetchImpl: goodFetch, now: 1_000 });
    const result = await getTvData({ type: "items", staticFlowers, staticItems, fetchImpl: failure.fetchImpl, now: 302_000 });
    assert.equal(result.headers["x-tv-data-source"], "last-good", failure.label);
    assert.equal(result.headers["x-tv-data-as-of"], live.stockDate, failure.label);
    assert.equal(result.headers["x-tv-data-fallback-reason"], failure.reason, failure.label);

    let cooldownCalls = 0;
    await getTvData({
      type: "flowers",
      staticFlowers,
      staticItems,
      fetchImpl: async () => { cooldownCalls += 1; throw new Error("cooldown was bypassed"); },
      now: 361_000,
    });
    assert.equal(cooldownCalls, 0, failure.label);
  }
});

test("without last-good, failures return the static snapshot with HTTP 200 and expose the failure", async () => {
  resetTvStockCache();
  const result = await getTvData({
    type: "flowers",
    staticFlowers,
    staticItems,
    fetchImpl: async () => response(429, null),
    now: 1_000,
  });
  assert.equal(result.status, 200);
  assert.equal(result.headers["x-tv-data-source"], "static-fallback");
  assert.equal(result.headers["x-tv-data-fallback-reason"], "HTTP 429");
  assert.equal(result.body, staticFlowers);
});
