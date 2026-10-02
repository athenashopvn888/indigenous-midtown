import type { Metadata } from "next";
import AuthorityLanding from "../components/AuthorityLanding";
import { AUTHORITY_PAGES } from "../lib/authorityPages";
export const metadata: Metadata = { title: { absolute: "24-Hour Dispensary at Yonge–Eglinton | Indigenous Midtown Cannabis" }, description: AUTHORITY_PAGES.hours.summary, alternates: { canonical: "https://www.indigenousmidtowncannabis.ca/24-hour-yonge-eglinton-dispensary" }, robots: { index: true, follow: true } };
export default function Page() { return <AuthorityLanding page={AUTHORITY_PAGES.hours} />; }
