import type { Metadata, ResolvingMetadata } from "next";
import HomePageClient from "./HomePageClient";
import { CODED_BANNERS } from "./lib/fleet/config";
import { getFleetContent } from "./lib/fleetContent";
import { fetchLiveFlowers } from "./lib/liveFlowers";

const HOME_TITLE =
  "Indigenous Midtown Cannabis Dispensary near me | Weed Delivery | Yonge–Eglinton";

export async function generateMetadata(
  _: {
    params: Promise<Record<string, never>>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
  },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const previous = await parent;
  return {
    title: { absolute: HOME_TITLE },
    openGraph: {
      ...previous.openGraph,
      title: { absolute: HOME_TITLE },
    },
    twitter: {
      ...previous.twitter,
      title: { absolute: HOME_TITLE },
    },
  };
}

export const dynamic = "force-dynamic";

export default async function Page() {
  const [flowers, fleet] = await Promise.all([fetchLiveFlowers(), getFleetContent()]);
  const contentBanners = fleet.active && fleet.banners.some((banner, index) => banner !== CODED_BANNERS[index]) ? fleet.banners : undefined;
  return <HomePageClient initialFlowers={flowers} contentBanners={contentBanners} />;
}
