import HomePageClient from "./HomePageClient";
import { fetchLiveFlowers } from "./lib/liveFlowers";

export const dynamic = "force-dynamic";

export default async function Page() {
  const flowers = await fetchLiveFlowers();
  return <HomePageClient initialFlowers={flowers} />;
}
