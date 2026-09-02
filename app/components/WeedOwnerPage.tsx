import Link from "next/link";
import PreferredSourceButton from "./PreferredSourceButton";
import styles from "./WeedOwnerPage.module.css";

const storeName = "Indigenous Midtown Cannabis";
const discovery = [
  ["Weed & Flower Guide", "Learn more about cannabis flower.", "/resources/weed-flower-guide"],
  ["Menu Guide", "Compare broader cannabis choices.", "/resources/menu-guide"],
  ["Weed Value Guide", "Explore value-oriented shopping concepts without current-price claims.", "/resources/weed-value-guide"],
  ["Pre-Roll Guide", "Focus specifically on the pre-roll format.", "/resources/pre-roll-guide"],
  ["Resources", "Explore more cannabis information.", "/resources"],
] as const;
const faqs = [
  ["Where is Indigenous Midtown Cannabis?", "Indigenous Midtown Cannabis is located at 93 Broadway Ave, Toronto, ON M4S 2A2."],
  ["Is Indigenous Midtown Cannabis open 24 hours?", "Yes. It is open 24 hours a day, seven days a week."],
  ["What cannabis information can adults 19+ explore?", "Adults 19+ can explore flower information, cannabis-format guidance, value-oriented shopping information and pre-roll guidance."],
  ["What is the difference between weed and cannabis?", "Weed is common everyday terminology for cannabis. Cannabis is the broader term."],
  ["What do bud and flower mean?", "Bud is an informal word for cannabis flower. Flower is the category term."],
  ["Does the business name establish cultural ownership or affiliation?", "The verified public business name is Indigenous Midtown Cannabis. No additional ownership, cultural or affiliation claim is made here."],
  ["How can I ask about one specific item?", "Call +1 437-219-7367."],
  ["Do I need to be 19+?", "Yes."],
] as const;

export function WeedOwnerPage() {
  const schema = { "@context": "https://schema.org", "@type": "Store", name: storeName, url: "https://www.indigenousmidtowncannabis.ca/weed-dispensary-toronto/", telephone: "+14372197367", address: { "@type": "PostalAddress", streetAddress: "93 Broadway Ave", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M4S 2A2", addressCountry: "CA" }, openingHours: "Mo-Su 00:00-24:00" };
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Open 24 Hours · Adults 19+</p>
        <h1>{storeName} — Weed Dispensary in Toronto</h1>
        <p>Weed, Cannabis, flower and shopping information for adults visiting 93 Broadway Ave.</p>
        <div className={styles.actions}><Link href="/resources/weed-flower-guide" className={styles.primary}>Explore the Weed &amp; Flower Guide</Link><a href="tel:+14372197367" className={styles.secondary}>Call +1 437-219-7367</a></div>
      </header>

      <section className={styles.section}>
        <h2>Weed and Cannabis at Indigenous Midtown Cannabis</h2>
        <p>{storeName} is located at 93 Broadway Ave in Toronto and is open 24 hours a day, seven days a week.</p>
        <p>Adults 19+ can begin with flower information, compare cannabis formats, explore value-oriented shopping concepts or focus on pre-rolls.</p>
        <p>The business name is used exactly as verified. No additional cultural identity, ownership or affiliation claim is made.</p>
        <p>For a specific item, call <a href="tel:+14372197367">+1 437-219-7367</a> before making a special trip.</p>
      </section>

      <section className={styles.section}>
        <h2>Find Your Weed at Indigenous Midtown Cannabis</h2>
        <div className={styles.cards}>{discovery.map(([title, description, href]) => <Link href={href} className={styles.card} key={href}><h3>{title}</h3><p>{description}</p><span>Explore →</span></Link>)}</div>
        <p className={styles.note}>These links do not confirm current stock, product availability, prices, deals or promotions.</p>
      </section>

      <section className={styles.section}>
        <h2>Weed, Cannabis, Bud and Flower — Simple Shopping Language</h2>
        <div className={styles.terms}>
          <div><h3>Weed</h3><p>Common everyday language for cannabis.</p></div>
          <div><h3>Cannabis</h3><p>The broader term covering flower and other cannabis formats.</p></div>
          <div><h3>Bud</h3><p>A casual word commonly used for cannabis flower.</p></div>
          <div><h3>Flower</h3><p>The category term for dried cannabis flower.</p></div>
        </div>
        <p>Shoppers can use whichever term feels natural; choosing the format they want is the more useful decision.</p>
      </section>

      <section className={styles.section}>
        <h2>Indigenous Midtown Cannabis — Open 24 Hours</h2>
        <address className={styles.address}><strong>{storeName}</strong><br />93 Broadway Ave<br />Toronto, ON M4S 2A2<br /><a href="tel:+14372197367">+1 437-219-7367</a><br />Open 24 Hours · 7 Days a Week</address>
        <p>Adults 19+. Call ahead if one particular product determines your visit.</p>
      </section>

      <section className={styles.section} id="faq"><h2>Frequently Asked Questions</h2><div className={styles.faqs}>{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></section>
      <PreferredSourceButton />
    </main>
  );
}
