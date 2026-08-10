import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const chat = await readFile(new URL("../app/delivery/IndigenousMidtownWebChat.tsx", import.meta.url), "utf8");
const delivery = await readFile(new URL("../app/delivery/DeliveryContent.tsx", import.meta.url), "utf8");

for (const expected of [
  'storeId: "IM"',
  'sod-web-chat:IM',
  'smsConsent',
  'workflowVersion: "READY_V1"',
  'required type="checkbox"',
  'I agree to receive one READY delivery-link text for this order. Message and data rates may apply.',
  '/api/web-chat/session',
  '/api/web-chat/messages',
  '/api/web-chat/id-review',
  'NEW_CUSTOMER',
  'RETURNING_CUSTOMER',
  '/api/web-chat/phone',
  'phoneConfirmation: replacementPhoneConfirmation',
  'phoneVersion: conversation.phoneVersion',
  'START ANOTHER ORDER',
  '/api/web-chat/order-cycle',
  '/api/web-chat/ready-consent',
  'readyConsentRequired',
  'readyConsentVersion',
  'CONFIRM READY TEXT CONSENT',
  'requestId: crypto.randomUUID()',
  'securely retained for future identity and address verification',
]) assert.ok(chat.includes(expected), `Missing Web Chat contract: ${expected}`);

for (const forbidden of ['Reply YES', 'confirm this mobile number for my Web Chat']) {
  assert.ok(!chat.includes(forbidden), `Obsolete consent copy remains: ${forbidden}`);
}

assert.ok(delivery.includes("<IndigenousMidtownWebChat />"), "Delivery page must render Indigenous Midtown Cannabis Web Chat");
assert.ok(!chat.includes('storeId: "PC"') && !chat.includes("sod-web-chat:PC"), "Reference store identity must not remain");
console.log("Indigenous Midtown Cannabis consent Web Chat contract passed.");
