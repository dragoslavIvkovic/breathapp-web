import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Breath - Find Your Inner Peace | #1 Breathing & Meditation App",
  description:
    "Master the art of breathwork with Breath. The #1 Apple mobile app for relaxing breath, focus meditation, and stress reduction. Download now for a calmer mind.",
  keywords: [
    "breathing app",
    "meditation",
    "focus",
    "relaxation",
    "apple mobile app",
    "breathwork",
    "health",
    "fitness",
    "anxiety relief",
    "sleep aid",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Breath - Find Your Inner Peace",
    description: "The #1 App for Breathing Exercises, Meditation, and Relaxation.",
    url: "https://breath-app.com",
    siteName: "Breath App",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Breath App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breath - Find Your Inner Peace",
    description: "The #1 App for Breathing Exercises, Meditation, and Relaxation.",
    images: ["/og-image.png"],
  },
  appleWebApp: {
    capable: true,
    title: "Breath",
    statusBarStyle: "black-translucent",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
