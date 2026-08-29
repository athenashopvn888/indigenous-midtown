import Script from "next/script";
import styles from "./GBPLandingPage.module.css";

const preferredSourceAttribute = {
  "google-add-preferred-source-btn": "",
};

export default function PreferredSourceButton() {
  return (
    <section className={`${styles.section} ${styles.preferredSources}`} aria-labelledby="google-preferred-sources-heading">
      <Script async src="https://news.google.com/swg/js/v1/publisher.js" strategy="afterInteractive" />
      <h2 id="google-preferred-sources-heading" className={styles.h2}>Choose Indigenous Midtown Cannabis as a Preferred Source on Google</h2>
      <p className={styles.infoText}>
        If you find Indigenous Midtown Cannabis guides and local information useful, you can add indigenousmidtowncannabis.ca as a Preferred Source on Google. Preferred Sources is a Google personalization feature that lets you choose sources you want to see more often in supported Google experiences. It is not a Google endorsement, verification badge, ranking guarantee, or general ranking boost.
      </p>
      <div className={styles.preferredSourcesControl} {...preferredSourceAttribute} />
      <a
        className={styles.preferredSourcesFallback}
        href="https://www.google.com/preferences/source?q=indigenousmidtowncannabis.ca"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Google Preferred Sources for indigenousmidtowncannabis.ca
      </a>
    </section>
  );
}
