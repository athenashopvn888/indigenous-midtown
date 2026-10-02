import type { Metadata } from "next";
import AuthorityLanding from "../components/AuthorityLanding";
import { AUTHORITY_PAGES } from "../lib/authorityPages";
export const metadata: Metadata = { title: { absolute: "Native Cigarettes at Yonge–Eglinton | Indigenous Midtown Cannabis" }, description: AUTHORITY_PAGES.cigarettes.summary, alternates: { canonical: "https://www.indigenousmidtowncannabis.ca/native-cigarettes-yonge-eglinton" }, robots: { index: true, follow: true } };
export default function Page() { return <AuthorityLanding page={AUTHORITY_PAGES.cigarettes} />; }
