export type CreativeType =
  | "UGC"
  | "Hypermotion"
  | "Hook Variations"
  | "Static Ad"
  | "Product / Demo"
  | "Problem → Solution"
  | "Strategic Short-Form";

export type CreativeStatus = "spec" | "client";

export type Creative = {
  id: string;
  title: string;
  slug: string;
  niche: string;
  type: CreativeType;
  thumbnail: string;
  description: string;
  angle: string;
  hook: string;
  concept: string;
  testNotes: string;
  instagramUrl: string | null;
  status: CreativeStatus;
  featured: boolean;
};

export const creativeTypes: CreativeType[] = [
  "UGC",
  "Hypermotion",
  "Hook Variations",
  "Static Ad",
  "Product / Demo",
  "Problem → Solution",
  "Strategic Short-Form",
];

export const creatives: Creative[] = [
  {
    id: "cr-001",
    title: "The Rebuy Window",
    slug: "the-rebuy-window",
    niche: "beauty-skincare",
    type: "UGC",
    thumbnail: "/creative/beauty-serum-ugc.jpg",
    description:
      "A 25-second, selfie-shot UGC concept for a vitamin C serum, structured around the moment a customer realizes the bottle is already empty. The reorder is the proof; the ad just frames it.",
    angle: "Problem-first — the emptiness of the bottle as the proof of results, not a discount.",
    hook: "\u201CYour skin didn't build a tolerance. Your routine did.\u201D",
    concept:
      "Opens on the bathroom shelf: a clearly empty bottle. The creator narrates the three moments they noticed results — week one, week three, the comment from a friend — while reapplying from a new bottle. No before/afters, no claims that need a lawyer. The buy signal is behavioral, not cosmetic.",
    testNotes:
      "Built to test against a routine-ordering angle. Primary metric to watch: thumb-stop in the first 3 seconds against the brand's existing best UGC.",
    instagramUrl: null,
    status: "spec",
    featured: true,
  },
  {
    id: "cr-002",
    title: "Ingredient Receipts",
    slug: "ingredient-receipts",
    niche: "beauty-skincare",
    type: "Static Ad",
    thumbnail: "/creative/beauty-static.jpg",
    description:
      "A static concept that treats the ingredient list like a receipt. For the buyer who doesn't trust aesthetics, the typography does the persuading.",
    angle: "Feature breakdown — concentration and formulation stated plainly, printed like evidence.",
    hook: "10% niacinamide. Printed, not claimed.",
    concept:
      "A single feed image: the product shot reduced, the ingredient breakdown enlarged. Every claim sits next to its concentration. Designed to run as the rational counterweight to emotional UGC in the same ad set.",
    testNotes:
      "Pairs with The Rebuy Window in one test cell: emotional vs. rational entry points for the same product.",
    instagramUrl: null,
    status: "spec",
    featured: false,
  },
  {
    id: "cr-003",
    title: "The 5AM Sell",
    slug: "the-5am-sell",
    niche: "gym-fitness",
    type: "Strategic Short-Form",
    thumbnail: "/creative/fitness-hooks.jpg",
    description:
      "A 30-second narrative concept for a training brand, built around the private ritual of early training. Nobody is watching — that's the identity the ad sells.",
    angle: "Identity and social proof — selling the version of the viewer who already trains, not the one being shamed into it.",
    hook: "\u201CNobody is watching you train. That's the point.\u201D",
    concept:
      "One continuous morning: keys, empty street, first set, breath, daylight arriving. The product appears exactly once, as part of the ritual, not as the subject. Built for cold audiences who resent being sold a transformation.",
    testNotes:
      "Runs against a results-first angle. Watch completion rate at 15s — if the ritual holds attention, the identity angle earns the click.",
    instagramUrl: null,
    status: "spec",
    featured: true,
  },
  {
    id: "cr-004",
    title: "Pre-Workout Hook Pack",
    slug: "pre-workout-hook-pack",
    niche: "gym-fitness",
    type: "Hook Variations",
    thumbnail: "/creative/fitness-protein.jpg",
    description:
      "One 20-second core video for a pre-workout, five distinct openings for the first three seconds. Same body, different doors in.",
    angle: "Hook testing — isolating the first three seconds as the variable, so results stay readable.",
    hook: "Five openings, including: \u201CI crashed at 3PM every day \u2014 until I fixed the two hours before it.\u201D",
    concept:
      "The core video carries the demonstration and the close. Each hook replaces only the opening: a 3PM-crash confession, a cold-open question, a ingredient-first start, a challenge, a social-proof quote. Cheap to produce, expensive to ignore.",
    testNotes:
      "One variable per test. If a hook wins, the learning compounds into the next batch — not into a reshoot.",
    instagramUrl: null,
    status: "spec",
    featured: false,
  },
  {
    id: "cr-005",
    title: "Drop Day, Structured",
    slug: "drop-day-structured",
    niche: "fashion-apparel",
    type: "Hypermotion",
    thumbnail: "/creative/fashion-drop.jpg",
    description:
      "A fast-cut hypermotion concept for a streetwear drop. Motion design carries the urgency so the brand never has to say \u201Csale.\u201D",
    angle: "Urgency without the discount — scarcity of the object, not the price.",
    hook: "\u201CThis drops Friday. Here's what actually changed.\u201D",
    concept:
      "Product details cut to a rising tempo: stitching, hardware, fabric weight, fit on three body types. Each cut answers a buyer question a lookbook never addresses. Ends on a date, not a discount code.",
    testNotes:
      "Designed for retargeting warm traffic in the 72 hours before a drop. Watch CPM tolerance against static reminders.",
    instagramUrl: null,
    status: "spec",
    featured: true,
  },
  {
    id: "cr-006",
    title: "Three Ways, One Cap",
    slug: "three-ways-one-cap",
    niche: "fashion-apparel",
    type: "UGC",
    thumbnail: "/creative/fashion-styling.jpg",
    description:
      "A UGC styling loop for an accessories brand: one cap, three outfits the viewer already owns. Versatility framed as cost-per-wear.",
    angle: "Cost-per-wear — the product justified by the wardrobe it already lives in.",
    hook: "\u201COne cap. Three outfits you already own.\u201D",
    concept:
      "Creator-style transitions between three fits, shot in one room with natural light. No studio, no model release logistics — deliberately lo-fi so it reads as a recommendation, not a campaign.",
    testNotes:
      "Built for TikTok placement against polished campaign creative. Expect cheaper reach; measure saves and shares, not just CTR.",
    instagramUrl: null,
    status: "spec",
    featured: false,
  },
  {
    id: "cr-007",
    title: "One Snack, Three Myths",
    slug: "one-snack-three-myths",
    niche: "food-beverage",
    type: "Product / Demo",
    thumbnail: "/creative/food-snack.jpg",
    description:
      "A macro demo concept for a protein bar that dismantles three objections in fifteen seconds: taste, sugar, and satiety. The product does all the talking.",
    angle: "Myth-breaking — each objection answered by demonstration, not adjectives.",
    hook: "\u201CIt tastes like dessert. Read the label again.\u201D",
    concept:
      "Three rapid chapters, one per myth: the bite, the label, the four-hours-later shot. Macro food photography throughout because texture is the ad. Built for sound-on and sound-off viewing at once.",
    testNotes:
      "The 15s constraint is the hypothesis: if objections can't be answered in 15 seconds, the market message needs work before the media budget does.",
    instagramUrl: null,
    status: "spec",
    featured: false,
  },
  {
    id: "cr-008",
    title: "Tired Isn't Normal",
    slug: "tired-isnt-normal",
    niche: "health-wellness",
    type: "Problem → Solution",
    thumbnail: "/creative/wellness-supplement.jpg",
    description:
      "A 35-second problem-first narrative for a daily supplement. It mirrors the viewer's morning before offering anything — the fix arrives late on purpose.",
    angle: "Symptom mirroring — naming the day the viewer recognizes before naming the product.",
    hook: "\u201CYou're not lazy. Your mornings are.\u201D",
    concept:
      "Three mornings the viewer has already lived: the snooze, the second coffee, the 11AM wall. The product enters at the 20-second mark, once, as the pivot. Compliance-safe claims only — energy framing, never medical.",
    testNotes:
      "Long-hold structure. Watch hold at 20s — if viewers reach the product reveal, the mirroring is working.",
    instagramUrl: null,
    status: "spec",
    featured: true,
  },
  {
    id: "cr-009",
    title: "The 40-Minute Detail",
    slug: "the-40-minute-detail",
    niche: "automotive",
    type: "Strategic Short-Form",
    thumbnail: "/creative/auto-detail.jpg",
    description:
      "A 45-second ASMR-lean concept for a detailing studio where the process is the persuasion. Water beading, cloth contact, panel by panel — craft you can hear.",
    angle: "Demonstration as proof — the standard of work shown, never claimed.",
    hook: "\u201CThis hood hasn't been waxed. It's been corrected.\u201D",
    concept:
      "Real time, minimal cuts, location sound. The ad treats 40 minutes of labor as the product itself, ending on the finished panel rather than the phone number. Built for high-intent local audiences who compare on finish, not price.",
    testNotes:
      "Local service creative. Pair with a fast-cut offer version in the same campaign and let the ad account pick the closer.",
    instagramUrl: null,
    status: "spec",
    featured: false,
  },
];

export const getCreative = (slug: string) =>
  creatives.find((c) => c.slug === slug);

export const featuredCreatives = creatives.filter((c) => c.featured);
