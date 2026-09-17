import { Metadata } from "next";
import { WeedOwnerPage } from "@/app/components/WeedOwnerPage";

export const metadata: Metadata = {
  title: {
    absolute: "Weed Info for Broadway Midtown | Indigenous Midtown Cannabis",
  },
  description:
    "Supporting weed and cannabis notes for Indigenous Midtown Cannabis at 93 Broadway Ave near Yonge–Eglinton. Adults 19+. The homepage is the visit hub.",
  alternates: {
    canonical: "https://www.indigenousmidtowncannabis.ca/",
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function Page() {
  return <WeedOwnerPage />;
}
