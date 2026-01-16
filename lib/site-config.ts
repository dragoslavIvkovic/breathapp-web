import { STORE_LINKS } from './links';

export const siteConfig = {
  name: "Pulse: Guided Breathing",
  tagline: "Panic Relief & Nervous System Regulation",
  url: "https://breath-app.com",
  ogImage: "/og-image.png",
  description:
    "Stop panic attacks in 3 minutes with guided breathing exercises. Pulse helps you regulate your nervous system using proven techniques like 4-7-8 breathing, box breathing, and somatic breathwork. Your pocket sanctuary for anxiety relief, better sleep, and mental clarity.",
  keywords: [
    // Primary high-volume keywords
    "breathing exercises",
    "anxiety relief",
    "panic attack help",
    "panic relief",
    "stress relief",
    "sleep aid",
    "meditation app",
    "breathwork",
    "guided breathing",
    
    // Long-tail high-conversion keywords
    "somatic breathwork",
    "nervous system regulation",
    "vagus nerve exercises",
    "box breathing app",
    "4-7-8 breathing technique",
    "navy seal breathing",
    "panic button app",
    
    // Specific techniques
    "box breathing",
    "diaphragmatic breathing",
    "coherent breathing",
    "resonance breathing",
    
    // 2025 trending terms
    "polyvagal theory exercises",
    "nasal breathing benefits",
    "somatic releasing exercises",
    
    // Symptom-based keywords
    "how to stop panic attack",
    "cant sleep anxiety",
    "calm racing thoughts",
    "focus timer",
    
    // General wellness
    "mindfulness",
    "relaxation",
    "mental clarity",
    "daily breathing practice",
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
