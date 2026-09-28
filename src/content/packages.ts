export type Package = {
  id: string;
  name: string;
  target: string;
  summary: string;
  deliverables: string[];
  footnote?: string;
  highlight?: boolean;
};

export const packages: Package[] = [
  {
    id: "starter",
    name: "Starter Creative Sprint",
    target: "For brands testing a small batch of new creative concepts.",
    summary:
      "A focused first engagement. Enough structured creative to find signal without committing to a monthly engine.",
    deliverables: [
      "3 strategic short-form video ads (product, AI UGC-style, or strategic narrative)",
      "3 static image ads (single image or carousel concepts)",
      "3 unique creative angles — e.g. problem-first, social proof, feature breakdown",
      "Multiple hook concepts and on-screen captions",
      "1 revision round per asset",
    ],
  },
  {
    id: "growth",
    name: "Growth Creative Sprint",
    target:
      "For brands ready for broader creative testing to scale potential winning angles.",
    summary:
      "A deeper batch with wider hypothesis coverage, built to give your ad account real decisions to make.",
    deliverables: [
      "7 strategic short-form video ads",
      "5 static image ads",
      "5 unique creative angles / hypotheses",
      "Hook variations and strategic direct-response copywriting",
      "Full quality control and creative direction",
      "1 revision round per asset",
    ],
    highlight: true,
  },
  {
    id: "monthly",
    name: "Monthly Creative Engine",
    target:
      "For established brands needing an ongoing pipeline of fresh ad tests.",
    summary:
      "A continuous creative program with scheduled batch deliveries and a strictly defined monthly scope.",
    deliverables: [
      "Customized monthly creative scope — for example, 10–12 video creatives plus statics",
      "Continuous Meta Ad Library tracking and competitor benchmarking",
      "Scheduled batch deliveries, weekly or bi-weekly",
    ],
    footnote:
      "The 10–12 creative example illustrates a customized scope, not an unconditional fixed promise. Every monthly engine is scoped to the brand before it starts.",
  },
];

export const customScopeItems = [
  "Strategic short-form video",
  "AI UGC-style creative",
  "Product / demo creative",
  "Motion / hypermotion",
  "Static ad concepts",
  "Hook variation packs",
  "Additional revision rounds",
];

export const customScopeIntro =
  "Not every creative program fits neatly into a package. Some clients need different quantities, different formats, standalone assets, ongoing production, or a custom creative testing structure. We scope those programs individually — tell us what you're testing and we'll tell you what it takes.";
