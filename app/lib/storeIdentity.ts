/** Canonical NAP, hours, and local SEO identity for Indigenous Midtown Cannabis (IMC01). */
export const STORE = {
  name: "Indigenous Midtown Cannabis",
  domainHost: "www.indigenousmidtowncannabis.ca",
  url: "https://www.indigenousmidtowncannabis.ca",
  streetAddress: "93 Broadway Ave",
  city: "Toronto",
  region: "ON",
  postalCode: "M4S 2A2",
  country: "CA",
  addressLine: "93 Broadway Ave, Toronto, ON M4S 2A2",
  phoneDisplay: "+1 437 219 7367",
  phoneE164: "+14372197367",
  hoursLabel: "Open 24 Hours",
  hoursDetail: "Open 24 Hours, 7 days a week",
  corridor: "Broadway / Yonge–Eglinton Midtown",
  intersection: "Broadway Ave & Redpath Ave",
  latitude: 43.7104899,
  longitude: -79.3935826,
  image:
    "https://www.indigenousmidtowncannabis.ca/wp-content/uploads/2026/04/46Oi5.jpg",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=93+Broadway+Ave,+Toronto,+ON+M4S+2A2&hl=en&z=16&output=embed",
  mapLinkUrl: "https://maps.google.com/?q=93+Broadway+Ave,+Toronto,+ON+M4S+2A2",
  gbpWebsitePolicy: "https://www.indigenousmidtowncannabis.ca/",
} as const;

/** OpeningHoursSpecification 00:00–23:59 matches the live www site and 17 Sep 2026 FMD snapshot (Open 24 Hours). GBP Website is not edited from this site PR — it stays the homepage root. */
export const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

/** Visible homepage FAQs — also emitted as FAQPage JSON-LD. Location and hours only; no invented cultural or medical claims. */
export const HOME_FAQS: { q: string; a: string }[] = [
  {
    q: "Where is Indigenous Midtown Cannabis on Broadway Avenue?",
    a: "Indigenous Midtown Cannabis is at 93 Broadway Ave, Toronto, ON M4S 2A2, one block north of Eglinton Avenue near Redpath Avenue in the Yonge–Eglinton Midtown grid. Call +1 437 219 7367 if you need the civic number before you walk in.",
  },
  {
    q: "Is Indigenous Midtown Cannabis open 24 hours in Midtown?",
    a: "Yes. The Broadway walk-in is listed open 24 hours, seven days a week. Adults 19+ can come in without an appointment. Confirm the homepage hours block if your timing is unusual.",
  },
  {
    q: "How do I walk from Eglinton Station to 93 Broadway Ave?",
    a: "Eglinton Station on Line 1 is the closest subway. Come up to Yonge Street, walk north one short block to Broadway Avenue, then head east toward Redpath until you match 93. The /visit page has driving, parking, and last-block notes for this corridor only.",
  },
  {
    q: "Do I need ID to shop at Indigenous Midtown Cannabis?",
    a: "Yes. This is an adult 19+ walk-in. Bring government-issued photo ID. Staff check ID at the door. This page does not make medical claims.",
  },
  {
    q: "Where can I park near Broadway and Redpath?",
    a: "Street parking on Broadway Avenue is the usual option, and evening curb space is often easier than the Yonge–Eglinton midday rush. Read the signs on the block you actually stop on. Use /visit for approach notes; the homepage map is the pin.",
  },
  {
    q: "What can I browse at the Broadway Midtown walk-in?",
    a: "Adults 19+ can compare flower tiers, pre-rolls, edibles, vapes, concentrates, accessories, and listed cigarettes — including Native cigarettes as a merchandise category only — on the current in-store menu. Names, packages, and posted prices change. Ask staff before you travel for one specific item.",
  },
];

export function cannabisStoreJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CannabisStore",
    "@id": `${STORE.url}/#cannabis-store`,
    name: STORE.name,
    url: STORE.url,
    image: STORE.image,
    telephone: STORE.phoneE164,
    description:
      "Indigenous Midtown Cannabis is an adult 19+ walk-in cannabis store at 93 Broadway Ave in Midtown Toronto, one block north of Eglinton Avenue near Redpath Avenue and the Yonge–Eglinton corridor. Open 24 Hours.",
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Debit",
    address: {
      "@type": "PostalAddress",
      streetAddress: STORE.streetAddress,
      addressLocality: STORE.city,
      addressRegion: STORE.region,
      postalCode: STORE.postalCode,
      addressCountry: STORE.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: STORE.latitude,
      longitude: STORE.longitude,
    },
    hasMap: STORE.mapLinkUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...DAYS_OF_WEEK],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      { "@type": "Place", name: "Midtown Toronto" },
      { "@type": "Place", name: "Yonge–Eglinton" },
      { "@type": "Place", name: "Broadway Avenue" },
      { "@type": "Place", name: "Davisville" },
    ],
  };
}

export function faqPageJsonLd(faqs: { q: string; a: string }[] = HOME_FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function stringifyJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
