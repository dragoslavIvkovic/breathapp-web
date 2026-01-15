import { STORE_LINKS } from './links';

export const siteConfig = {
  name: "Pulse: Guided Breathing",
  tagline: "Your Daily Breathing Companion",
  url: "https://breath-app.com",
  ogImage: "/og-image.png",
  description:
    "Take a deep breath. Pulse: Guided Breathing is your pocket-sized sanctuary for breathwork, anxiety relief, better sleep, and mental clarity. Combine ancient breathing techniques with positive affirmations in just 3 minutes a day.",
  keywords: [
    "breathing",
    "breath",
    "breathing exercises",
    "daily breathing",
    "anxiety relief",
    "sleep",
    "calm",
    "meditation",
    "stress",
    "breathwork",
    "guided breathing",
    "relaxation",
    "mindfulness",
    "nervous system",
    "somatic healing",
    "pulse breathing",
  ],
  links: {
    appStore: STORE_LINKS.appStore,
    googlePlay: STORE_LINKS.googlePlay,
    privacy: "/privacy",
    terms: "/terms",
    termsOfUse: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
    support: "mailto:support@breath-app.com",
  },
  navItems: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Screenshots", href: "#screenshots" },
    { name: "Reviews", href: "#reviews" },
  ],
  creator: "Pulse Team",
}
