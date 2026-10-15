import test from "node:test";
import assert from "node:assert/strict";
import { validCanadianMobile } from "../app/delivery/phone-validation.ts";

test("Web Chat accepts formatted Canadian mobile numbers", () => {
  assert.equal(validCanadianMobile("647 555 0123"), true);
  assert.equal(validCanadianMobile("+1 (437) 555-0123"), true);
});

test("Web Chat rejects incomplete and invalid Canadian numbers before confirmation", () => {
  assert.equal(validCanadianMobile("123456789"), false);
  assert.equal(validCanadianMobile("123 555 0123"), false);
  assert.equal(validCanadianMobile("647 155 0123"), false);
});
