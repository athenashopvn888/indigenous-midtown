import type { Metadata } from "next";
import AuthorityLanding from "../components/AuthorityLanding";
import { AUTHORITY_PAGES } from "../lib/authorityPages";
export const metadata: Metadata = { title: { absolute: "Nicotine Vape at Yonge–Eglinton | Indigenous Midtown Cannabis" }, description: AUTHORITY_PAGES.nicotine.summary, alternates: { canonical: "https://www.indigenousmidtowncannabis.ca/nicotine-vape-yonge-eglinton" }, robots: { index: true, follow: true } };
export default function Page() { return <AuthorityLanding page={AUTHORITY_PAGES.nicotine} />; }
