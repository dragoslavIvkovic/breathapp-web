"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// Using placeholder images for the slider
const screenshots = [
  "/images/welcome-screen.png",
  "/images/goals-screen.png",
  "/images/welcome-screen.png", // Repeating for demo
  "/images/goals-screen.png",
  "/images/welcome-screen.png",
]

export function ScreenshotSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = 300 // Approximate card width
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-surface/50 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">App Screenshots</h2>
        <p className="text-white/70">A beautiful interface designed for serenity.</p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-surface/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-surface/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slider Track */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 px-8 md:px-32 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {screenshots.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[320px] snap-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative aspect-[9/19] rounded-[2.5rem] overflow-hidden border-8 border-surface shadow-2xl bg-background">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`App Screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
                {/* Phone Glare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
