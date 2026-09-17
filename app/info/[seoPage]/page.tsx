import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { SEO_PAGES, getSeoPageBySlug } from "../../lib/seoPages";
import { TIER_CONFIG } from "../../lib/products";
import { STORE } from "../../lib/storeIdentity";
import styles from "./seo.module.css";

/* ── Generate all SEO pages ── */
export function generateStaticParams() {
  return SEO_PAGES.map((p) => ({ seoPage: p.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ seoPage: string }>;
}): Promise<Metadata> {
  const { seoPage: slug } = await params;
  const page = getSeoPageBySlug(slug);
  if (!page) return {};

  return {
    title: page.absoluteTitle ? { absolute: page.title } : page.title,
    description: page.metaDescription,
    alternates: {
      canonical: `https://www.indigenousmidtowncannabis.ca/info/${slug}`,
    },
  };
}

/* ── Page ── */
export default async function SeoLandingPage({
  params,
}: {
  params: Promise<{ seoPage: string }>;
}) {
  const { seoPage: slug } = await params;
  const page = getSeoPageBySlug(slug);
  if (!page) notFound();

  const tiers = Object.values(TIER_CONFIG);
  const heroPreview = page.heroPreview;

  return (
    <main className={styles.main}>
      <Navbar />

      {/* Banner Image */}
      {page.banner && !page.heroPreview && (
        <section className={styles.bannerSection}>
          <img
            src={page.banner}
            alt={page.h1}
            className={styles.bannerImg}
          />
        </section>
      )}

      {/* Hero */}
      {heroPreview ? (
        <section className={`${styles.productHero} ${heroPreview.theme === "nicotine" ? styles.nicotineProductHero : ""}`} data-publication-status="approved">
          <div className={styles.productHeroInner}>
            <div className={styles.productHeroCopy}>
              <span className={styles.productHeroKicker}>{heroPreview.eyebrow}</span>
              <h1>{page.h1}</h1>
              <p>{heroPreview.intro}</p>
              <div className={styles.productHeroActions}>
                <Link href={heroPreview.menuHref ?? "/items/cigarettes"} className={styles.productHeroPrimary}>{heroPreview.primaryLabel ?? "Check the cigarette menu"}</Link>
                <Link href={heroPreview.secondaryHref ?? heroPreview.menuHref ?? "/items/cigarettes"} className={styles.productHeroSecondary}>{heroPreview.secondaryLabel ?? "See the current selection"}</Link>
              </div>
              {heroPreview.identityStrip && <p className={styles.productHeroIdentity}>{heroPreview.identityStrip}</p>}
            </div>
            <div className={styles.productPreviewStage} aria-label={`${page.h1} brand preview`}>
              {heroPreview.products.map((product, index) => (
                <Link key={product.name} href={heroPreview.menuHref ?? "/items/cigarettes"} className={styles.productPreviewCard}>
                  <Image src={product.image} alt={`${product.name} brand preview`} width={800} height={800} priority={index === 0} unoptimized={product.image.startsWith("https://")} sizes="(max-width: 720px) 42vw, (max-width: 980px) 46vw, 220px" />
                  <span>{product.name}</span>
                </Link>
              ))}
              <p className={styles.productHeroDisclosure}>{heroPreview.disclosure}</p>
            </div>
          </div>
        </section>
      ) : (
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.heroIcon}>{page.icon}</span>
            <h1 className={styles.heroH1}>{page.h1}</h1>
            <p className={styles.heroTagline}>{page.heroTagline}</p>
          </div>
        </section>
      )}

      {/* Content Sections */}
      <section className={styles.content}>
        <div className={styles.container}>
          {heroPreview?.featuredHeading && heroPreview.featuredIntro && <div className={styles.featuredIntro} id="featured-vapes"><h2>{heroPreview.featuredHeading}</h2><p>{heroPreview.featuredIntro}</p></div>}
          {page.sections.map((s, i) => (
            <div key={i} className={styles.section}>
              <h2 className={styles.sectionTitle}>{s.heading}</h2>
              <p className={styles.sectionBody}>{s.body}</p>
            </div>
          ))}

          {/* Tier Grid */}
          {heroPreview?.theme !== "nicotine" && <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Cannabis Menu — Five Tiers of Quality</h2>
            <div className={styles.tierGrid}>
              {tiers.map((tier) => (
                <Link
                  key={tier.slug}
                  href={`/${tier.slug}`}
                  className={styles.tierCard}
                  style={{ "--tier-color": tier.color } as React.CSSProperties}
                >
                  <div className={styles.tierLabel} style={{ color: tier.color }}>
                    {tier.icon} {tier.name}
                  </div>
                  <div className={styles.tierPrice}>${tier.unitPrice}/g</div>
                  <p className={styles.tierDesc}>{tier.tagline}</p>
                  <span className={styles.tierLink}>Browse {tier.name} →</span>
                </Link>
              ))}
            </div>
          </div>}

          {/* Map */}
          {heroPreview?.theme !== "nicotine" && <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Find Us on Broadway Avenue</h2>
            <p className={styles.sectionBody}>
              {STORE.name} is at {STORE.addressLine}, {STORE.corridor}. Adults 19+.
              The homepage keeps the hours hub; /visit has walking, Line 1, and parking notes.
            </p>
            <div className={styles.mapWrap}>
              <iframe
                title="Map of Indigenous Midtown Cannabis at 93 Broadway Ave"
                src={STORE.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ width: "100%", height: "320px", border: 0, display: "block" }}
              />
            </div>
            <div className={styles.visitBtns}>
              <Link href="/visit" className={styles.visitBtn}>How to reach Broadway</Link>
              <Link href="/" className={styles.visitBtn}>Homepage hours &amp; map</Link>
            </div>
          </div>}

          {/* FAQ */}
          {page.faqs.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              {page.faqs.map((faq, i) => (
                <details key={i} className={styles.faqItem}>
                  <summary className={styles.faqQ}>{faq.q}</summary>
                  <p className={styles.faqA}>{faq.a}</p>
                </details>
              ))}
            </div>
          )}
          {heroPreview?.warning && <p className={styles.nicotineWarning}>{heroPreview.warning}</p>}
        </div>
      </section>

      <Footer />
    </main>
  );
}
