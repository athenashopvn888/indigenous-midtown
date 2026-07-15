interface StrainEffects {
  effects: { emoji: string; label: string }[];
  description: string;
  metaDescription: string;
}

const MENU_NOTES = [
  { emoji: "*", label: "Menu Listed" },
  { emoji: "+", label: "Compare Tier" },
  { emoji: "i", label: "Ask Staff" },
];

const TIER_DESCRIPTIONS: Record<string, string> = {
  EXOTIC: "Exotic flower",
  PREMIUM: "Premium flower",
  "AAA+": "AAA+ flower",
  AA: "AA flower",
  BUDGET: "Budget flower",
};

export function getStrainData(
  name: string,
  type: "indica" | "sativa" | "hybrid",
  tier: string,
  thc: string
): StrainEffects {
  const typeLabel =
    type === "indica" ? "Indica" : type === "sativa" ? "Sativa" : "Hybrid";
  const tierDesc = TIER_DESCRIPTIONS[tier] || tier;
  void thc;
  const description = `${name} is listed as ${tierDesc} in the ${typeLabel} lane at Indigenous Midtown Cannabis. Compare the current product page, menu details, weight, and posted price before choosing.`;

  const metaDescription = `${name} at Indigenous Midtown Cannabis in Toronto. Compare the current ${tierDesc} listing, current details, and staff guidance before visiting.`;

  return { effects: MENU_NOTES, description, metaDescription };
}
