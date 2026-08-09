import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";
import menu from "./delivery-menu.json";

export const metadata: Metadata = {
  title: "Delivery Menu | Indigenous Midtown Cannabis",
  description: "Browse the Indigenous Midtown Cannabis delivery product catalog and compare flower tiers and prices.",
  alternates: { canonical: "https://www.indigenousmidtowncannabis.ca/delivery" },
};

export default function DeliveryPage() {
  const structuredData = { "@context": "https://schema.org", "@type": "CollectionPage", name: "Indigenous Midtown Cannabis Delivery Menu", url: "https://www.indigenousmidtowncannabis.ca/delivery", mainEntity: { "@type": "ItemList", numberOfItems: menu.products.length, itemListElement: menu.products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name })) } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><DeliveryContent /></>;
}
