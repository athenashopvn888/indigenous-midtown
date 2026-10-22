import HomePageClient from "./HomePageClient";
import { CODED_BANNERS } from "./lib/fleet/config";
import { getFleetContent } from "./lib/fleetContent";
import { fetchLiveFlowers } from "./lib/liveFlowers";

export const dynamic = "force-dynamic";

export default async function Page() {
  const [flowers, fleet] = await Promise.all([fetchLiveFlowers(), getFleetContent()]);
  const contentBanners = fleet.active && fleet.banners.some((banner, index) => banner !== CODED_BANNERS[index]) ? fleet.banners : undefined;
  return <HomePageClient initialFlowers={flowers} contentBanners={contentBanners} />;
}
