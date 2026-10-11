import { headers } from "next/headers";
import type { FlowerProduct } from "./products";

export async function fetchLiveFlowers(): Promise<FlowerProduct[]> {
  try {
    const requestHeaders = await headers();
    const host = (requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "")
      .split(",")[0]
      .trim();
    if (!host) return [];

    const protocol = (
      requestHeaders.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https")
    )
      .split(",")[0]
      .trim();
    const response = await fetch(`${protocol}://${host}/api/tv-data?type=flowers`, {
      cache: "no-store",
    });
    if (!response.ok) return [];

    const data: unknown = await response.json();
    return Array.isArray(data) ? (data as FlowerProduct[]) : [];
  } catch {
    return [];
  }
}
