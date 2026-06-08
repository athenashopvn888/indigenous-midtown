import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — Indigenous Midtown Cannabis | Toronto",
  description: "Get notified when Indigenous Midtown Cannabis launches same-day weed delivery across Toronto and surrounding areas.",
  alternates: {
    canonical: "https://indigenousmidtowncannabis.ca/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
