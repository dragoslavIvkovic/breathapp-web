"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const screenshots = [
  "/images/welcome-screen.webp",
  "/images/goals-screen.webp",
  "/images/home-screen.webp",
  "/images/patterns-screen.webp",
  "/images/session-start-screen.webp",
  "/images/inhale-screen.webp",
]

export function ScreenshotSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const getSlideStyle = (index: number) => {
    const diff = (index - currentIndex + screenshots.length) % screenshots.length

    if (diff === 0) {
      // Center slide
      return "z-20 scale-110 opacity-100 translate-x-0 blur-0"
    } else if (diff === 1 || diff === -3) {
      // Right slide
      return "z-10 scale-80 opacity-60 translate-x-[60%] blur-[2px]"
    } else if (diff === screenshots.length - 1 || diff === 3) {
      // Left slide
      return "z-10 scale-80 opacity-60 -translate-x-[60%] blur-[2px]"
    } else {
      // Hidden slides
      return "z-0 scale-50 opacity-0 translate-x-0 hidden"
    }
  }

  return (
    <section id="screenshots" className="py-20 overflow-hidden bg-gradient-to-b from-background to-surface/20">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">App Interface</h2>
        <p className="text-white/80">Simple, intuitive, and beautiful design.</p>
      </div>

      <div className="relative h-[600px] w-full max-w-5xl mx-auto flex items-center justify-center perspective-1000">
        {screenshots.map((src, index) => (
          <div
            key={index}
            className={cn("absolute transition-all duration-700 ease-in-out w-[280px] h-[580px]", getSlideStyle(index))}
          >
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-8 border-surface shadow-2xl bg-background">
              <Image
                src={src || "/placeholder.svg"}
                alt={`App Screenshot ${index + 1}`}
                fill
                className="object-contain"
                priority={index === currentIndex}
              />
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-20 z-30 p-3 rounded-full bg-surface/80 text-accent hover:bg-surface transition-colors backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-20 z-30 p-3 rounded-full bg-surface/80 text-accent hover:bg-surface transition-colors backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
