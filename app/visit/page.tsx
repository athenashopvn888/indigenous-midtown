import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  STORE,
  faqPageJsonLd,
  stringifyJsonLd,
} from "../lib/storeIdentity";
import styles from "./visit.module.css";

const VISIT_FAQS = [
  {
    q: "What is the exact address for Indigenous Midtown Cannabis?",
    a: "93 Broadway Ave, Toronto, ON M4S 2A2. The door sits on Broadway Avenue, one block north of Eglinton, near Redpath Avenue in the Yonge–Eglinton Midtown grid. Phone +1 437 219 7367.",
  },
  {
    q: "How do I reach 93 Broadway Ave from Eglinton Station?",
    a: "Leave Eglinton Station toward Yonge Street. Walk north one short block to Broadway Avenue, then east toward Redpath until the civic number is 93. That last stretch is a surface walk, not a second subway ride.",
  },
  {
    q: "Which TTC stations are closest to Indigenous Midtown Cannabis?",
    a: "Eglinton Station on Line 1 (Yonge–University) is the closest. Davisville Station is the next stop south if you are already on that stretch of Yonge. Finish on Broadway Avenue rather than hunting a different Toronto corridor.",
  },
  {
    q: "Is Indigenous Midtown Cannabis a walk-in for adults 19+?",
    a: "Yes. Bring government-issued photo ID. No appointment is required. Hours on this page match the homepage hub: Open 24 Hours.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute:
      "How to Reach Indigenous Midtown Cannabis | Broadway & Yonge–Eglinton",
  },
  description:
    "Walking, TTC, driving, and parking notes for Indigenous Midtown Cannabis at 93 Broadway Ave, Midtown Toronto. Broadway / Yonge–Eglinton corridor only. Adults 19+. Open 24 Hours. Homepage keeps the map and hours hub.",
  alternates: {
    canonical: "https://www.indigenousmidtowncannabis.ca/visit",
  },
  openGraph: {
    title: "How to Reach Indigenous Midtown Cannabis on Broadway Avenue",
    description:
      "Walk, drive, or ride Line 1 to 93 Broadway Ave near Yonge–Eglinton and Redpath in Midtown Toronto. Adults 19+.",
    url: "https://www.indigenousmidtowncannabis.ca/visit",
  },
  robots: { index: true, follow: true },
};

export default function VisitPage() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(faqPageJsonLd(VISIT_FAQS)),
        }}
      />
      <Navbar />
      <article className={styles.article}>
        <p className={styles.eyebrow}>Supporting how-to-reach page · Adults 19+</p>
        <h1 className={styles.h1}>
          How to Reach Indigenous Midtown Cannabis on Broadway Avenue
        </h1>
        <p className={styles.lede}>
          This page is only for finding the Midtown storefront at{" "}
          {STORE.addressLine}. It is not a city-wide Toronto delivery guide.
          Hours, the pin, and the full name-address-phone block stay on the{" "}
          <Link href="/">homepage visit hub</Link>. Use these notes when you are
          coming along Broadway, Yonge, Eglinton, or Redpath.
        </p>

        <section className={styles.nap} aria-label="Indigenous Midtown Cannabis name, address, and phone">
          <h2>Indigenous Midtown Cannabis — name, address, phone</h2>
          <p>
            <strong>{STORE.name}</strong>
          </p>
          <p>
            {STORE.streetAddress}
            <br />
            {STORE.city}, {STORE.region} {STORE.postalCode}
            <br />
            Canada
          </p>
          <p>
            Phone:{" "}
            <a href={`tel:${STORE.phoneE164}`}>{STORE.phoneDisplay}</a>
          </p>
          <p>Hours: {STORE.hoursDetail}</p>
          <p>Corridor: {STORE.corridor}</p>
        </section>

        <h2>Find 93 on Broadway, one block north of Eglinton</h2>
        <p>
          Indigenous Midtown Cannabis faces Broadway Avenue in Midtown Toronto,
          a short east–west street running just north of Eglinton Avenue between
          Yonge Street and Mount Pleasant Road. Shoppers coming from Davisville
          Village, North Toronto, or the Yonge–Eglinton towers should think
          “Broadway at Redpath,” not a waterfront or west-end pin. The building
          number is <strong>93</strong>. If you overshoot toward Mount Pleasant
          Road, turn back west on Broadway; if you are still on Eglinton, you
          are one block too far south.
        </p>
        <p>
          Yonge and Eglinton is the junction most people hit before the last
          minute of the trip. From that corner, walk or drive north on Yonge to
          Broadway, then east. Redpath Avenue is the north–south handle that
          crosses Broadway beside the door. Night visits use the same geometry:
          Broadway is the frontage street, Eglinton is the busy avenue one block
          south, and 93 is the civic number to match on the building.
        </p>

        <h2>Walking from Yonge–Eglinton and Redpath</h2>
        <p>
          From the Yonge and Eglinton intersection, stay on the north side of
          Eglinton only long enough to reach Yonge, then take Yonge north one
          block. Broadway Avenue is the first east–west street. Turn east.
          Mid-rise residential and small retail line the block; watch for 93
          before you reach Mount Pleasant Road. From Redpath Avenue, turn onto
          Broadway and look for the same civic number — you are already on the
          correct Midtown grid.
        </p>
        <p>
          If you are coming from the office towers and indoor mall around
          Canada Square / Yonge–Eglinton Centre, you do not need a second
          transit ride. Surface the station, gain Yonge, walk north, then east
          on Broadway. The homepage map is the check that you matched 93 rather
          than a neighbouring address on Eglinton or Roehampton.
        </p>

        <h2>TTC from Eglinton Station and Davisville Station</h2>
        <p>
          <strong>Eglinton Station</strong> (Line 1 Yonge–University, plus
          Eglinton Avenue buses) is the Midtown subway anchor. Leave toward
          Yonge Street — not toward a different city — walk north to Broadway
          Avenue, then east to 93. That last stretch is a short walk. Eglinton
          Avenue buses drop you at Yonge–Eglinton; finish on Broadway, not on
          Eglinton itself.
        </p>
        <p>
          <strong>Davisville Station</strong> sits one Line 1 stop south of
          Eglinton. If you already alight there, walk north on Yonge Street
          past Eglinton Avenue to Broadway, then east. It is farther than the
          Eglinton Station walk, but it still lands you on the same Midtown
          block. Buses that run Yonge or Eglinton in this neighbourhood beat any
          downtown streetcar for this door. If a generic “dispensary near me”
          result sent you here, confirm you are aiming at Broadway Avenue in
          Midtown, not a different Toronto corridor.
        </p>

        <h2>Driving from Yonge, Eglinton, and Mount Pleasant Road</h2>
        <p>
          From Yonge Street, turn east onto Broadway Avenue and look for 93
          before Mount Pleasant Road. From Eglinton Avenue, turn north on Yonge
          or Redpath, then onto Broadway — do not keep circling the Eglinton
          frontage hoping the civic number appears there. From Mount Pleasant
          Road, turn west onto Broadway and continue toward Yonge; 93 is on that
          block, near Redpath.
        </p>
        <p>
          From the Don Valley Parkway, Eglinton Avenue west toward Yonge is the
          usual climb into Midtown, then north to Broadway. After you pass the
          Yonge–Eglinton tangle, Broadway is the quieter frontage street that
          actually holds the storefront. This page does not invent a private
          driveway or a reserved stall.
        </p>

        <h2>Parking on Broadway Avenue</h2>
        <p>
          Curb parking on Broadway Avenue is the practical option for most
          walk-in visits. Midday can be tighter around Yonge–Eglinton; evening
          and overnight curb space on Broadway is usually easier. Read posted
          signs on the block you actually stop on. Paid public lots exist around
          the Yonge–Eglinton Centre area if the curb is full — this page does
          not invent validation or a store-owned garage.
        </p>
        <p>
          If you are being dropped off, use the Broadway Avenue curb near 93
          rather than an Eglinton Avenue lay-by that does not face the door.
          After you park, the homepage map is the check that you matched the
          civic number.
        </p>

        <h2>Walk-in, ID, and what to do when you arrive</h2>
        <p>
          Indigenous Midtown Cannabis is a walk-in for adults 19+. Bring
          government-issued photo ID. Staff can show the current menu
          categories — flower, pre-rolls, edibles, vapes, concentrates,
          accessories, and listed cigarettes (including Native cigarettes as a
          product category only) — but this page does not claim stock, sale
          prices, medical benefit, or any cultural affiliation beyond the
          verified business name. If one product is the only reason for the
          trip, call {STORE.phoneDisplay} first.
        </p>
        <p>
          Hours on the door match the homepage: {STORE.hoursDetail}. After you
          know the route, go back to the{" "}
          <Link href="/">Indigenous Midtown Cannabis homepage</Link> for the
          live map pin, the hours card, and menu lanes. Delivery, when you want
          it, stays on a separate <Link href="/delivery">delivery menu</Link>{" "}
          and is not the reason this reach page exists.
        </p>

        <div className={styles.mapWrap}>
          <iframe
            className={styles.mapIframe}
            title="Map of Indigenous Midtown Cannabis at 93 Broadway Ave"
            src={STORE.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className={styles.mapNote}>
          Map preview for the Broadway Avenue pin. The homepage remains the
          visit hub if you only need NAP and hours. Google Business Profile
          Website stays the homepage root — not this /visit URL.
        </p>

        <section className={styles.faq} aria-label="Getting here — quick answers">
          <h2>Getting here — quick answers</h2>
          {VISIT_FAQS.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </section>

        <div className={styles.ctaRow}>
          <Link href="/" className={styles.primary}>
            Homepage map &amp; hours
          </Link>
          <a href={`tel:${STORE.phoneE164}`} className={styles.secondary}>
            Call {STORE.phoneDisplay}
          </a>
        </div>
      </article>
      <Footer />
    </main>
  );
}
