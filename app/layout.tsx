import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import AgeGate from "./components/AgeGate";
import {
  HOME_FAQS,
  cannabisStoreJsonLd,
  faqPageJsonLd,
  stringifyJsonLd,
} from "./lib/storeIdentity";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.indigenousmidtowncannabis.ca"),
  title: {
    default:
      "Indigenous Midtown Cannabis | Broadway Walk-In at Yonge–Eglinton",
    template: "%s | Indigenous Midtown Cannabis",
  },
  description:
    "Walk into Indigenous Midtown Cannabis at 93 Broadway Ave, Midtown Toronto, one block north of Eglinton near Redpath and Yonge–Eglinton. Adults 19+. Open 24 Hours. Current menu in store — no medical claims.",
  keywords: [
    "Indigenous Midtown Cannabis",
    "Midtown Toronto dispensary",
    "Broadway Avenue cannabis",
    "weed store Yonge and Eglinton",
    "93 Broadway Ave",
    "Redpath dispensary Midtown",
    "Davisville walk-in cannabis",
    "24 hour Midtown dispensary",
    "Broadway and Redpath weed",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.indigenousmidtowncannabis.ca",
    siteName: "Indigenous Midtown Cannabis",
    title:
      "Indigenous Midtown Cannabis | Broadway Walk-In at Yonge–Eglinton",
    description:
      "Adult 19+ walk-in at 93 Broadway Ave in Midtown Toronto, one block north of Eglinton near Redpath Avenue. Open 24 Hours.",
    images: [
      {
        url: "https://www.indigenousmidtowncannabis.ca/wp-content/uploads/2026/04/46Oi5.jpg",
        width: 1200,
        height: 630,
        alt: "Indigenous Midtown Cannabis — Broadway Avenue walk-in near Yonge–Eglinton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Indigenous Midtown Cannabis | Broadway Walk-In at Yonge–Eglinton",
    description:
      "Adult 19+ walk-in at 93 Broadway Ave in Midtown Toronto, one block north of Eglinton near Redpath Avenue. Open 24 Hours.",
    images: [
      "https://www.indigenousmidtowncannabis.ca/wp-content/uploads/2026/04/46Oi5.jpg",
    ],
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
    canonical: "https://www.indigenousmidtowncannabis.ca",
  },
  verification: {
    // google: "your-google-verification-code",
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
        <meta name="geo.placename" content="Midtown Toronto" />
        <meta name="geo.position" content="43.7104899;-79.3935826" />
        <meta name="ICBM" content="43.7104899, -79.3935826" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: stringifyJsonLd(cannabisStoreJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: stringifyJsonLd(faqPageJsonLd(HOME_FAQS)),
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HJ7BRTHFNF"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HJ7BRTHFNF');
            `,
          }}
        />
      </head>
      <body>
        <Link className="deliveryAnnouncement" href="/delivery">
          NEW DELIVERY MENU IS HERE — CLICK TO EXPLORE
        </Link>
        {children}
        <AgeGate />
      </body>
    </html>
  );
}
