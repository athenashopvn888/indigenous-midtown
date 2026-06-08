import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "./components/AgeGate";

export const metadata: Metadata = {
  metadataBase: new URL("https://indigenousmidtowncannabis.ca"),
  title: {
    default: "Indigenous Midtown Cannabis — Premium Cannabis Dispensary, Toronto",
    template: "%s | Indigenous Midtown Cannabis",
  },
  description:
    "Shop 200+ premium cannabis strains at Indigenous Midtown Cannabis. Exotic, Premium, AAA+, AA & Budget flower from $3/g. Toronto's uplifting dispensary at 93 Broadway Ave. Open 24 Hours.",
  keywords: [
    "cannabis dispensary Toronto",
    "weed store Toronto",
    "exotic flower Toronto",
    "premium cannabis",
    "Indigenous Midtown Cannabis",
    "cheap weed Toronto",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Toronto",
    "vapes",
    "pre-rolls",
    "native cigarettes Toronto",
    "weed store Mississauga",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://indigenousmidtowncannabis.ca",
    siteName: "Indigenous Midtown Cannabis",
    title: "Indigenous Midtown Cannabis — Premium Toronto Cannabis Dispensary",
    description:
      "200+ strains from $3/g. Exotic to Budget. Toronto's uplifting dispensary at 93 Broadway Ave. Open 24 Hours.",
    images: [
      {
        url: "https://indigenousmidtowncannabis.ca/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "Indigenous Midtown Cannabis — Premium Cannabis Dispensary Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indigenous Midtown Cannabis — Toronto's Uplifting Dispensary",
    description: "200+ strains from $3/g. Open 24 Hours at 93 Broadway Ave, Toronto.",
    images: ["https://indigenousmidtowncannabis.ca/wp-content/uploads/2026/04/46Oi5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://indigenousmidtowncannabis.ca",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://indigenousmidtowncannabis.ca",
  name: "Indigenous Midtown Cannabis",
  description: "Cannabis dispensary at 93 Broadway Ave in Toronto, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 24 Hours.",
  url: "https://indigenousmidtowncannabis.ca",
  telephone: "+14378703710",
  image: "https://indigenousmidtowncannabis.ca/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "93 Broadway Ave",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M4S 2A2",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.7077,
    longitude: -79.3948,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [
    "https://maps.google.com/?q=93+Broadway+Ave,+Toronto,+ON+M4S+2A2",
    "https://maps.google.com/?q=93+Broadway+Ave,+Toronto,+ON+M4S+2A2",
  ],
  hasMap: "https://maps.google.com/?q=93+Broadway+Ave,+Toronto,+ON+M4S+2A2",
  areaServed: {
    "@type": "City",
    name: "Toronto",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "15",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.7077;-79.3948" />
        <meta name="ICBM" content="43.7077, -79.3948" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
