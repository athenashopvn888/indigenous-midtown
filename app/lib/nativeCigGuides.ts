/** Native-cigarette guide slugs. Backwoods stays public when the switch is off. */
export const NATIVE_CIG_GUIDE_SLUGS = [
  "canadian-classics",
  "nexus-cigarettes",
  "canadian-goose",
  "putters",
  "time-cigarettes",
  "rolled-gold",
  "canadian-cigarettes",
  "backwoods",
  "grabba",
  "playfares",
  "bb-cigarettes",
  "dks-cigarettes",
  "belmont-king-size",
] as const;

export const KEPT_GUIDE_SLUGS = new Set<string>(["backwoods"]);
