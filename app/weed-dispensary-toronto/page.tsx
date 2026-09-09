import { Metadata } from "next";
import { WeedOwnerPage } from "@/app/components/WeedOwnerPage";

export const metadata: Metadata = {
  title: { absolute: "Weed Dispensary in Midtown Toronto | Indigenous Midtown Cannabis" },
  description:
    "Visit Indigenous Midtown Cannabis at 93 Broadway Ave in Toronto. Find store information and explore established Weed flower tiers and cannabis resources for adults 19+.",
  alternates: {
    canonical: "https://www.indigenousmidtowncannabis.ca/weed-dispensary-toronto/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <WeedOwnerPage />;
}
