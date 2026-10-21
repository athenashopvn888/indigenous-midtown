import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./resources.module.css";
import type { ResourcePage } from "./resourceData";
import { isHiddenCigaretteHref } from "../lib/showCigarettes";

type ResourceViewProps = {
  page: ResourcePage;
};

export default function ResourceView({ page }: ResourceViewProps) {
  const cards = page.cards.filter((card) => !isHiddenCigaretteHref(card.href));
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className={styles.intro}>{page.intro}</p>
        </div>
      </section>

      {cards.length > 0 && (
        <section className={styles.cardsSection}>
          <div className={styles.grid}>
            {cards.map((card) => (
              <Link key={card.href} href={card.href} className={styles.card}>
                <span>{card.title}</span>
                <p>{card.text}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className={styles.body}>
        {page.sections.map((section) => (
          <article key={section.heading} className={styles.section}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
            {section.bullets && (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
