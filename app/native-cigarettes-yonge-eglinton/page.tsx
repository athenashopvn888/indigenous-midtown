import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AuthorityLanding from "../components/AuthorityLanding";
import { AUTHORITY_PAGES } from "../lib/authorityPages";
import { getCigaretteSnapshot, toPublicCigaretteState } from "../lib/cigaretteFeed";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: { absolute: "Native Cigarettes at Yonge–Eglinton | Indigenous Midtown Cannabis" }, description: AUTHORITY_PAGES.cigarettes.summary, alternates: { canonical: "https://www.indigenousmidtowncannabis.ca/native-cigarettes-yonge-eglinton" }, robots: { index: true, follow: true } };
export default async function Page() {
  if (!toPublicCigaretteState(await getCigaretteSnapshot()).web) notFound();
  return <AuthorityLanding page={AUTHORITY_PAGES.cigarettes} />;
}
