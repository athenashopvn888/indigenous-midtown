export interface ItemEffects {
  effects: { emoji: string; label: string }[];
  description: string;
  metaDescription: string;
  consume: string;
}

const menuNotes = [
  { emoji: "*", label: "Menu Listed" },
  { emoji: "+", label: "Compare Details" },
  { emoji: "i", label: "Ask Staff" },
];

export function getItemData(category: string, name: string): ItemEffects {
  const categoryLabel = category.toLowerCase().replaceAll("_", " ");
  return {
    effects: menuNotes,
    description: `${name} appears in the ${categoryLabel} category at Indigenous Midtown Cannabis. Review the current menu and package details before visiting.`,
    metaDescription: `Review ${name} menu information at Indigenous Midtown Cannabis in Toronto. Check current details before visiting.`,
    consume: "Review the package and current menu details. Ask staff if an item detail is unclear.",
  };
}
