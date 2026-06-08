import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — Indigenous Midtown Cannabis | Toronto",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at Indigenous Midtown Cannabis.",
  alternates: {
    canonical: "https://indigenousmidtowncannabis.ca/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
