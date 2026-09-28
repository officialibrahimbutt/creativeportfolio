export type Capability = {
  name: string;
  purpose: string;
  icon: string;
};

export const capabilitiesIntro =
  "Everything we make exists to do one job inside an ad account: earn attention, communicate a message, or test a belief. If a deliverable doesn't do one of those three things, we don't sell it.";

export const capabilities: Capability[] = [
  {
    name: "Strategic Short-Form Video",
    purpose:
      "15–45 second ads built around one angle, one hook, one job. Cut for the feed, not for a showreel.",
    icon: "Clapperboard",
  },
  {
    name: "AI UGC-Style Creative",
    purpose:
      "Creator-style ads without the creator logistics. It should look like someone handed you their phone — and work like a direct-response ad.",
    icon: "Smartphone",
  },
  {
    name: "Product / Demo Creative",
    purpose:
      "The product doing the convincing. Macro texture, hands-on demos, use in real conditions — proof instead of adjectives.",
    icon: "Package",
  },
  {
    name: "Motion / Hypermotion",
    purpose:
      "Motion design, speed ramps and kinetic type that give static products energy and give static feeds a reason to stop.",
    icon: "Zap",
  },
  {
    name: "Static Ad Concepts",
    purpose:
      "Single-image and carousel concepts with headline-first composition — the rational counterweight to video in a testing account.",
    icon: "Image",
  },
  {
    name: "Hook Variations",
    purpose:
      "Multiple openings tested against one core video, so the first three seconds earn their keep and the learning compounds.",
    icon: "MousePointerClick",
  },
  {
    name: "Creative Angles",
    purpose:
      "The strategic idea under the ad. Problem-first, social proof, myth-breaking, comparison, feature breakdown — each one a different belief about the buyer.",
    icon: "Compass",
  },
  {
    name: "Direct-Response Copywriting",
    purpose:
      "Primary text, headlines and descriptions written to be clicked, not admired. Objections handled in the copy, not the comments.",
    icon: "PenLine",
  },
  {
    name: "Ad Scripts",
    purpose:
      "Second-by-second scripts with visual direction attached, so production never guesses and edits never drift from the idea.",
    icon: "ScrollText",
  },
  {
    name: "On-Screen Text & Captions",
    purpose:
      "Designed captions that carry the message with sound off — typeset for thumb attention, not accessibility compliance.",
    icon: "Captions",
  },
  {
    name: "Creative Direction",
    purpose:
      "References, shot lists, framing and edit taste. One point of view held across an entire batch so the work looks intentional.",
    icon: "Compass",
  },
  {
    name: "Quality Control",
    purpose:
      "Every export checked against platform specs, safe zones, caption timing and the hypothesis it was built to test.",
    icon: "BadgeCheck",
  },
];
