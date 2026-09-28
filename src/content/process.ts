export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Brand Research",
    description:
      "We study your brand, your competitors' ad libraries, and your buyers before anything gets made. Reviews, objections, the language customers already use — the ad is written from that material, not from a template.",
  },
  {
    number: "02",
    title: "Hypothesis Design",
    description:
      "Each creative starts as a written idea: the angle, the audience belief it tests, and why it might work. If we can't say what a video is testing, it doesn't go into production.",
  },
  {
    number: "03",
    title: "Hook & Scripting",
    description:
      "The first three seconds get written first. Then the script, the copy, the on-screen text — every line built to carry the same angle from thumb-stop to click.",
  },
  {
    number: "04",
    title: "Direction & Storyboard",
    description:
      "Shot lists, references, framing, structure. The plan exists before production starts, so the edit serves the idea instead of rescuing it.",
  },
  {
    number: "05",
    title: "Production & Editing",
    description:
      "AI-assisted production under human creative direction. Assembly, motion, captions, sound design — cut for the feed and checked against platform specs.",
  },
  {
    number: "06",
    title: "Finished Strategic Ad",
    description:
      "Delivered with its angle and hypothesis attached, ready for your ad account. The asset is the output; the reasoning is the deliverable.",
  },
];

export const missionStatements = [
  "Research before production.",
  "Angles before assets.",
  "Testing before taste.",
];

export const principles = [
  {
    title: "Every creative has a job",
    body: "No asset leaves the studio without a written reason to exist — an angle it tests and a belief it challenges. That's what separates creative from content.",
  },
  {
    title: "Human direction, AI leverage",
    body: "The tools compress production time and multiply variations. They don't decide what the market needs to hear. Research, angles and messaging stay human.",
  },
  {
    title: "Built for the account, not the portfolio",
    body: "We optimize creative for what an ad account can learn from. A batch that produces one clear learning is worth more than a batch that all looks identical.",
  },
];
