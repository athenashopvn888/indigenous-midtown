import HomePageClient from "./HomePageClient";
import { fetchLiveProducts } from "./lib/products";

export const dynamic = "force-dynamic";

export default async function Page() {
  const liveProducts = await fetchLiveProducts();
  const flowers = liveProducts.isLive ? liveProducts.flowers : [];
  return <HomePageClient initialFlowers={flowers} />;
}
