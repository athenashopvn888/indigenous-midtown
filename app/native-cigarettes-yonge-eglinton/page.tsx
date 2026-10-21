import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AuthorityLanding from "../components/AuthorityLanding";
import { AUTHORITY_PAGES } from "../lib/authorityPages";
import { SHOW_CIGARETTES } from "../lib/showCigarettes";
export const metadata: Metadata = { title: { absolute: "Native Cigarettes at Yonge–Eglinton | Indigenous Midtown Cannabis" }, description: AUTHORITY_PAGES.cigarettes.summary, alternates: { canonical: "https://www.indigenousmidtowncannabis.ca/native-cigarettes-yonge-eglinton" }, robots: { index: true, follow: true } };
export default function Page() { if (!SHOW_CIGARETTES) notFound(); return <AuthorityLanding page={AUTHORITY_PAGES.cigarettes} />; }
