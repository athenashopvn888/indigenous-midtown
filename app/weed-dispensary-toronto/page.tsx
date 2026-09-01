import { Metadata } from "next";
import { WeedOwnerPage } from "@/app/components/WeedOwnerPage";

export const metadata: Metadata = {
  title: { absolute: "Weed Dispensary in Toronto | Indigenous Midtown Cannabis" },
  description:
    "Indigenous Midtown Cannabis is open 24 hours at 93 Broadway Ave in Toronto. Adults 19+ can explore cannabis, flower and shopping guides.",
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
