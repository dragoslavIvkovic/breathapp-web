import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { siteConfig } from "@/lib/site-config"

import { CookieBanner } from "@/components/cookie-banner"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  generator: "Next.js",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Breathing exercises for panic relief, anxiety, and better sleep`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@pulsebreathing",
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent",
  },
  category: "Health & Fitness",
}

// Structured Data: MobileApplication Schema
const mobileAppSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: siteConfig.name,
  operatingSystem: ["iOS", "ANDROID"],
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Breathing & Meditation",
  description: siteConfig.description,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "2500",
    bestRating: "5",
    worstRating: "1",
  },
  author: {
    "@type": "Organization",
    name: siteConfig.creator,
  },
  featureList: [
    "4-7-8 Breathing Technique for Sleep",
    "Box Breathing (Navy SEAL Breathing)",
    "Somatic Breathwork Exercises",
    "Panic Attack Relief Mode",
    "Guided Breathing Sessions",
    "Nervous System Regulation",
    "Daily Breathing Reminders",
    "Progress Tracking",
  ],
}

// Structured Data: FAQPage Schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is 4-7-8 breathing and how does it help with sleep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 4-7-8 breathing technique involves inhaling for 4 seconds, holding for 7 seconds, and exhaling for 8 seconds. This pattern activates your parasympathetic nervous system, reducing heart rate and promoting relaxation. It's particularly effective for falling asleep faster and reducing anxiety before bed.",
      },
    },
    {
      "@type": "Question",
      name: "How can breathing exercises stop a panic attack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "During a panic attack, your body's fight-or-flight response is activated. Controlled breathing exercises like box breathing help activate the vagus nerve, which triggers the relaxation response. By slowing your breath, you signal to your brain that you're safe, reducing panic symptoms within minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What is box breathing (Navy SEAL breathing)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Box breathing, also known as Navy SEAL breathing or tactical breathing, involves breathing in 4 equal parts: inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, and hold for 4 seconds. This technique is used by Navy SEALs and first responders to stay calm under extreme pressure.",
      },
    },
    {
      "@type": "Question",
      name: "What is somatic breathwork and how does it regulate the nervous system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Somatic breathwork combines conscious breathing with body awareness to release stored tension and trauma. It works with polyvagal theory to help regulate your autonomic nervous system, moving you from a stressed state (sympathetic) to a calm, connected state (ventral vagal).",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(mobileAppSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <CookieBanner />
        <Footer />
      </body>
    </html>
  )
}

