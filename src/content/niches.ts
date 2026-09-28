export type Niche = {
  id: string;
  label: string;
  description: string;
  image: string;
};

export const niches: Niche[] = [
  {
    id: "beauty-skincare",
    label: "Beauty & Skincare",
    description:
      "Ingredient-proof creative for buyers who have been disappointed before. Proof over promises.",
    image: "/creative/beauty-serum-ugc.jpg",
  },
  {
    id: "gym-fitness",
    label: "Gym & Fitness",
    description:
      "High-energy short-form built around identity, routine and the moment someone decides to start.",
    image: "/creative/fitness-hooks.jpg",
  },
  {
    id: "fashion-apparel",
    label: "Fashion & Apparel",
    description:
      "Drop-day energy and styling-led UGC that makes one product feel like a wardrobe.",
    image: "/creative/fashion-drop.jpg",
  },
  {
    id: "food-beverage",
    label: "Food & Beverage",
    description:
      "Texture, taste and macro detail — the formats that make people stop mid-scroll and get hungry.",
    image: "/creative/food-snack.jpg",
  },
  {
    id: "health-wellness",
    label: "Health & Wellness",
    description:
      "Problem-first narratives that mirror the customer's day before offering the fix.",
    image: "/creative/wellness-supplement.jpg",
  },
  {
    id: "automotive",
    label: "Automotive",
    description:
      "Detailing, accessories and services shown at a level of finish that implies the result.",
    image: "/creative/auto-detail.jpg",
  },
];

export const nicheLabel = (id: string) =>
  niches.find((n) => n.id === id)?.label ?? id;
