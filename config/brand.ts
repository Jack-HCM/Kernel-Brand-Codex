export const brand = {
  name: "Kernel",
  shortName: "Kernel",
  tagline: "The AI infrastructure for enterprise CRM.",
  url: "kernel.ai",
  email: "hello@kernel.ai",
  version: "1.0",
  year: "2026",

  // ─── Colours ───────────────────────────────────────────────────────────────
  colours: {
    primary: {
      label: "Pastel Green",
      hex: "#8FA998",
      rgb: "143, 169, 152",
      usage: "Primary accent. Used for borders, highlights, and active states.",
    },
    dark: {
      label: "Dark Background",
      hex: "#2C2E33",
      usage: "Primary dark surface. Headers, dark sections, and high-contrast text.",
    },
    darkHighlight: {
      label: "Dark Highlight",
      hex: "#3C4E53",
      usage: "Secondary dark surface. Used for hover states on dark backgrounds.",
    },
    background: {
      label: "Off-White",
      hex: "#F8F8F8",
      usage: "Page background. Light, clean base for all content.",
    },
    surface: {
      label: "White",
      hex: "#FFFFFF",
      usage: "Card and content surface. Used for elevated UI elements.",
    },
    palette: [
      { label: "Dark Background",  hex: "#2C2E33", usage: "Primary dark surface" },
      { label: "Dark Highlight",   hex: "#3C4E53", usage: "Dark hover / secondary" },
      { label: "Pastel Green",     hex: "#8FA998", usage: "Primary accent / borders" },
      { label: "Tertiary Splash",  hex: "#8C9CAD", usage: "Tertiary UI accents" },
      { label: "Secondary Splash", hex: "#6B7280", usage: "Muted text / secondary" },
      { label: "Pastel Green Light",hex: "#D7E3DB", usage: "Subtle green tints" },
      { label: "Mid Grey",         hex: "#D1D5DB", usage: "Dividers / borders" },
      { label: "Pastel Grey",      hex: "#E5E7EB", usage: "Light surface borders" },
      { label: "Off White",        hex: "#F5F5F4", usage: "Alternative light bg" },
      { label: "Background",       hex: "#F8F8F8", usage: "Page background" },
      { label: "White",            hex: "#FFFFFF", usage: "Card surface" },
    ],
  },

  // ─── Typography ────────────────────────────────────────────────────────────
  typography: {
    heading: {
      family: "Clash Display Variable",
      cssFamily: "clash-display-variable",
      weights: [
        { label: "Light",   value: "300" },
        { label: "Regular", value: "400" },
        { label: "Medium",  value: "500" },
        { label: "SemiBold",value: "600" },
        { label: "Bold",    value: "700" },
      ],
      usage: "All headings (H1–H6), display text, stats, and large typographic elements. Always sentence case — never all-caps titles.",
    },
    body: {
      family: "General Sans Variable",
      cssFamily: "general-sans-variable",
      weights: [
        { label: "Light",   value: "300" },
        { label: "Regular", value: "400" },
        { label: "Medium",  value: "500" },
        { label: "SemiBold",value: "600" },
      ],
      usage: "Body copy, UI labels, captions, and all running text. Full stops in bullets and body. No full stops in headings or CTAs.",
    },
    scale: [
      { label: "Display",  size: "64px", lineHeight: "72px", weight: "500", family: "Clash Display Variable" },
      { label: "H1",       size: "48px", lineHeight: "56px", weight: "500", family: "Clash Display Variable" },
      { label: "H2",       size: "36px", lineHeight: "44px", weight: "500", family: "Clash Display Variable" },
      { label: "H3",       size: "28px", lineHeight: "36px", weight: "500", family: "Clash Display Variable" },
      { label: "H4",       size: "22px", lineHeight: "30px", weight: "500", family: "Clash Display Variable" },
      { label: "Body LG",  size: "18px", lineHeight: "28px", weight: "400", family: "General Sans Variable" },
      { label: "Body MD",  size: "16px", lineHeight: "24px", weight: "400", family: "General Sans Variable" },
      { label: "Body SM",  size: "14px", lineHeight: "20px", weight: "400", family: "General Sans Variable" },
      { label: "Label",    size: "12px", lineHeight: "16px", weight: "500", family: "General Sans Variable" },
    ],
    rules: [
      { rule: "Case",      desc: "Headings always sentence case. Never title case or all-caps." },
      { rule: "Punctuation", desc: "No full stops in headings, taglines, or CTAs. Always full stops in body and bullets." },
      { rule: "Stats",     desc: "Large numbers use Clash Display Medium. Supporting label in General Sans Regular." },
      { rule: "Pills",     desc: "Pill messaging uses General Sans Regular. Keep short and outcome-focused." },
    ],
  },

  // ─── Logo ──────────────────────────────────────────────────────────────────
  logo: {
    landscape: { black: "/logos/Kernel-Landscape-Black.svg", white: "/logos/Kernel-Landscape-White.svg" },
    portrait:  { black: "/logos/Kernel-Portrait-Black.svg",  white: "/logos/Kernel-Portrait-White.svg"  },
    motif:     { black: "/logos/Kernel-Motif-Black.svg",     white: "/logos/Kernel-Motif-White.svg"     },
    typeface:  { black: "/logos/Kernel-Typeface-Black.svg",  white: "/logos/Kernel-Typeface-White.svg"  },
    clearSpace: "Minimum clear space equal to the height of the 'K' in the wordmark on all sides.",
    minSize: "24px height for digital. 10mm height for print.",
    doList: [
      "Use on approved brand backgrounds only",
      "Use the black version on light and off-white backgrounds",
      "Use the white version on dark (#2C2E33) backgrounds",
      "Maintain clear space at all times",
    ],
    dontList: [
      "Recolour or apply effects to the logo",
      "Use the motif in isolation without brand context on first use",
      "Place on visually busy or low-contrast backgrounds",
      "Stretch, skew, or alter proportions",
    ],
  },

  // ─── Brand Personality ─────────────────────────────────────────────────────
  personality: {
    mission: "The most customer-obsessed data company in the market. We turn unstructured, messy CRM data into structured account intelligence tailored to your GTM strategy.",
    values: [
      { label: "Precision",      description: "Accurate data is the foundation of every decision we enable." },
      { label: "Trust",          description: "Enterprise-grade safeguards and transparent reasoning in everything we build." },
      { label: "Simplicity",     description: "Application over features. RevOps is the hero — we remove the complexity." },
      { label: "Customer-first", description: "Extremely driven, equally low ego. Our customers' outcomes are our outcomes." },
    ],
    tone: [
      "Confident and precise, never arrogant",
      "Outcome-focused, not feature-led",
      "Direct — say more with less",
      "Technical when needed, always accessible",
    ],
  },
} as const;

export type Brand = typeof brand;
