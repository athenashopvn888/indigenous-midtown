import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Column 1 — Store Description */}
          <div className={styles.col}>
            <div className={styles.brand}>INDIGENOUS MIDTOWN CANNABIS</div>
            <p className={styles.desc}>
              Your Local Cannabis Dispensary At 93 Broadway Ave, Toronto. Visit
              Indigenous Midtown Cannabis For Premium Flower, Edibles, Vapes
              &amp; More. Open 24 Hours.
            </p>
            <div className={styles.buttons}>
              <a href="tel:+14378703710" className={styles.btnPrimary}>
                Call Now
              </a>
            </div>
          </div>

          {/* Column 2 — Contact Info */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>93 Broadway Ave</span>
              <span>Toronto, ON M4S 2A2</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span>
                <a href="tel:+14378703710" style={{ color: "inherit" }}>
                  (437) 870-3710
                </a>
              </span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>Open 24 Hours</span>
            </div>
          </div>

          {/* Column 3 — Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic">Exotic Flower</Link>
              <Link href="/premium">Premium Flower</Link>
              <Link href="/aaa">AAA+ Flower</Link>
              <Link href="/aa">AA Flower</Link>
              <Link href="/budget">Budget Flower</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Vape Pens</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/delivery">Delivery (Coming Soon)</Link>
              <Link href="/info/toronto-weed-dispensary">
                Yonge and Eglinton Dispensary
              </Link>
              <Link href="/info/cheap-weed-toronto">
                Cheap Weed Yonge and Eglinton
              </Link>
              <Link href="/info/native-cigarettes-toronto">
                Native Cigarettes Yonge and Eglinton
              </Link>
              <Link href="/info/weed-store-near-midtown-toronto-yonge-and-eglinton-mount-pleasant">
                Weed Store Near Yonge and Eglinton
              </Link>
              <Link href="/weed-dispensary-toronto/">
                Indigenous Midtown Cannabis Weed Dispensary in Toronto
              </Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Indigenous Midtown Cannabis. Must be
            19+ to enter. Please review posted store and menu information.
          </p>
        </div>
      </div>
    </footer>
  );
}
