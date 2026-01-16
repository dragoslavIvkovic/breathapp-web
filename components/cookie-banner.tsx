"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { Cookie, X } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Small delay to show animation
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-full duration-500">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-surface/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
          
          <div className="flex items-start gap-4 flex-1">
            <div className="p-3 rounded-full bg-primary/10 hidden sm:block">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">We value your privacy</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies. Read our{" "}
                <Link href={siteConfig.links.privacy} className="text-accent hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto min-w-[280px]">
            <Button 
              variant="outline" 
              onClick={handleReject}
              className="flex-1 border-white/10 hover:bg-white/5 text-white"
            >
              Reject All
            </Button>
            <Button 
              onClick={handleAccept}
              className="flex-1 bg-primary hover:bg-primary/90 text-background font-bold"
            >
              Accept All
            </Button>
          </div>

          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 p-2 text-white/40 hover:text-white transition-colors md:hidden"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
