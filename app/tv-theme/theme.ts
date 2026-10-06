import type { CSSProperties } from "react";

export type TvTheme = {
  headerImage: string;
  backgroundImage: string;
  cornerLeft?: string;
  cornerRight?: string;
  primary: string;
  accent: string;
  glow: string;
  cardBorder: string;
  headerText: string;
  sloganLeft: string;
  sloganRight: string;
  footerLeft: string;
  footerRight: string;
};

export const TV_THEMES: Readonly<Record<string, TvTheme>> = {
  IMC01: {
    headerImage: "/tv-theme/imc01/header.webp",
    backgroundImage: "/tv-theme/imc01/background.webp",
    cornerLeft: "/tv-theme/imc01/corner-left.png",
    cornerRight: "/tv-theme/imc01/corner-right.png",
    primary: "#064E3B",
    accent: "#C58A20",
    glow: "rgba(197, 138, 32, 0.46)",
    cardBorder: "rgba(223, 181, 91, 0.84)",
    headerText: "#FFF9E8",
    sloganLeft: "",
    sloganRight: "",
    footerLeft: "INDIGENOUS MIDTOWN CANNABIS",
    footerRight: "93 BROADWAY AVE · TORONTO",
  },
};

export function getTvTheme(storeCode?: string | null): TvTheme | undefined {
  return storeCode ? TV_THEMES[storeCode] : undefined;
}

type TvThemeVariables = CSSProperties & {
  "--tv-theme-header-image": string;
  "--tv-theme-background-image": string;
  "--tv-theme-primary": string;
  "--tv-theme-accent": string;
  "--tv-theme-glow": string;
  "--tv-theme-card-border": string;
  "--tv-theme-header-text": string;
};

export function getTvThemeVariables(theme: TvTheme): TvThemeVariables {
  return {
    "--tv-theme-header-image": `url("${theme.headerImage}")`,
    "--tv-theme-background-image": `url("${theme.backgroundImage}")`,
    "--tv-theme-primary": theme.primary,
    "--tv-theme-accent": theme.accent,
    "--tv-theme-glow": theme.glow,
    "--tv-theme-card-border": theme.cardBorder,
    "--tv-theme-header-text": theme.headerText,
  };
}
