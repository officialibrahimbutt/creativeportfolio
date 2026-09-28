export const site = {
  name: "TechGrowth Creative",
  shortName: "TechGrowth",
  parent: "TechGrowth Digital",
  tagline: "Performance creative studio",
  description:
    "TechGrowth Creative is a performance creative studio building research-backed ad creative for Meta and TikTok. Angles, hooks, scripts and finished ads — every asset ships with a hypothesis.",
  url: "https://techgrowthdigital.com",
  contact: {
    whatsappUrl: "https://wa.me/923200034282",
    whatsappDisplay: "+92 320 003 4282",
    email: "creative@techgrowthdigital.com",
  },
  cta: {
    primary: "Start a Creative Conversation",
    primaryShort: "Start a Conversation",
    secondary: "View the Creative Vault",
  },
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Packages", href: "/packages" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Studio",
    items: [
      { label: "Work", href: "/work" },
      { label: "Capabilities", href: "/capabilities" },
      { label: "Packages", href: "/packages" },
      { label: "Process", href: "/process" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export const platforms = ["Meta", "TikTok", "Both"] as const;
export const platformOptions: { value: string; label: string }[] = [
  { value: "Meta", label: "Meta" },
  { value: "TikTok", label: "TikTok" },
  { value: "Both", label: "Both" },
];
