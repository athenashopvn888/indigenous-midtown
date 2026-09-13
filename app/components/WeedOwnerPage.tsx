import Link from "next/link";
import PreferredSourceButton from "./PreferredSourceButton";
import styles from "./WeedOwnerPage.module.css";

const storeName = "Indigenous Midtown Cannabis";
const discovery = [
  ["Exotic Weed", "Explore the established Exotic Weed collection.", "/exotic-weed"],
  ["Premium Weed", "Explore the established Premium Weed collection.", "/premium-weed"],
  ["AAA+ Weed", "Explore the established AAA+ Weed collection.", "/aaa-weed"],
  ["AA Weed", "Explore the established AA Weed collection.", "/aa-weed"],
  ["Budget Weed", "Explore the established Budget Weed collection.", "/budget-weed"],
] as const;
const faqs = [
  ["Where is Indigenous Midtown Cannabis?", "Indigenous Midtown Cannabis is located at 93 Broadway Ave, Toronto, ON M4S 2A2."],
  ["Which Weed tier pages can adults 19+ explore?", "The established flower tiers are Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed."],
  ["Where can I find local store information?", "Use the Midtown Toronto store information on this page and the nearby Broadway Avenue guide."],
  ["Who is this page for?", "This page is for adults 19+ looking for local store information and established Weed flower resources."],
] as const;

export function WeedOwnerPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>MIDTOWN TORONTO STORE INFORMATION · ADULTS 19+</p>
        <h1>{storeName} — Weed Dispensary in Toronto</h1>
        <p>Indigenous Midtown Cannabis is located at 93 Broadway Ave in Toronto. This page brings together current local store information for adults 19+ and links to the established Weed flower tiers and educational resources on this website.</p>
        <div className={styles.actions}><Link href="/resources/weed-flower-guide" className={styles.primary}>Explore the Weed &amp; Flower Guide</Link><Link href="/info/weed-store-near-midtown-toronto-yonge-and-eglinton-mount-pleasant" className={styles.secondary}>Midtown Toronto location guide</Link></div>
      </header>

      <section className={styles.section}>
        <h2>Midtown Toronto Store Information</h2>
        <p>Find the store at 93 Broadway Ave in Midtown Toronto. Current store hours are shown on the website before your visit.</p>
        <address className={styles.address}><strong>{storeName}</strong><br />93 Broadway Ave<br />Toronto, ON M4S 2A2<br /><a href="tel:+14372197367">+1 437-219-7367</a></address>
      </section>

      <section className={styles.section}>
        <h2>Explore the established Weed flower tiers</h2>
        <div className={styles.cards}>{discovery.map(([title, description, href]) => <Link href={href} className={styles.card} key={href}><h3>{title}</h3><p>{description}</p><span>Explore →</span></Link>)}</div>
        <p className={styles.note}>These links do not confirm current stock, product availability, prices, deals or promotions.</p>
      </section>

      <section className={styles.section}>
        <h2>Midtown Toronto location context</h2>
        <p>The Broadway Avenue store information is organized for adults looking around Midtown Toronto, Yonge and Eglinton, Mount Pleasant and Davisville. Continue to the location guide for a focused local overview.</p>
      </section>

      <section className={styles.section}>
        <h2>Learn before choosing a category</h2>
        <p>The <Link href="/resources/weed-flower-guide">Weed &amp; Flower Guide</Link> explains how the established flower tiers are organized. Use the current menu for current names, formats and posted details.</p>
      </section>

      <section className={styles.section} id="faq"><h2>Frequently Asked Questions</h2><div className={styles.faqs}>{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></section>
      <PreferredSourceButton />
    </main>
  );
}
