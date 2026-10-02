import type { Metadata } from "next";
import AuthorityLanding from "../components/AuthorityLanding";
import { AUTHORITY_PAGES } from "../lib/authorityPages";
export const metadata: Metadata = { title: { absolute: "Weed Dispensary at Yonge–Eglinton | Indigenous Midtown Cannabis" }, description: AUTHORITY_PAGES.geo.summary, alternates: { canonical: "https://www.indigenousmidtowncannabis.ca/weed-dispensary-yonge-eglinton" }, robots: { index: true, follow: true } };
export default function Page() { return <AuthorityLanding page={AUTHORITY_PAGES.geo} />; }
