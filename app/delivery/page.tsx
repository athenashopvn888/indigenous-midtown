import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";
import menu from "./delivery-menu.json";

export const metadata: Metadata = {
  title: "Broadway Midtown Delivery Menu | Indigenous Midtown Cannabis",
  description: "Delivery catalog for Indigenous Midtown Cannabis at 93 Broadway Ave near Yonge–Eglinton. Adults 19+. Confirm availability with the store before ordering.",
  alternates: { canonical: "https://www.indigenousmidtowncannabis.ca/delivery" },
};

export default function DeliveryPage() {
  const structuredData = { "@context": "https://schema.org", "@type": "CollectionPage", name: "Indigenous Midtown Cannabis Delivery Menu", url: "https://www.indigenousmidtowncannabis.ca/delivery", mainEntity: { "@type": "ItemList", numberOfItems: menu.products.length, itemListElement: menu.products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name })) } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><DeliveryContent /></>;
}
