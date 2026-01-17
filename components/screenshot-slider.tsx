"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const screenshots = [
  { src: "/images/welcome-screen.webp", alt: "Pulse breathing app welcome screen – iOS guided breathing meditation" },
  { src: "/images/goals-screen.webp", alt: "Pulse app goal selection – customize your breathing practice on iOS" },
  { src: "/images/home-screen.webp", alt: "Pulse breathing app home screen – daily breathing exercises dashboard" },
  { src: "/images/patterns-screen.webp", alt: "Pulse app breathing patterns – 4-7-8 box breathing techniques for iOS" },
  { src: "/images/session-start-screen.webp", alt: "Pulse app session start – begin guided breathing exercise" },
  { src: "/images/inhale-screen.webp", alt: "Pulse app inhale animation – visual breathing guide for anxiety relief" },
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
    <section id="screenshots" className="py-20 overflow-hidden bg-background">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">App Interface</h2>
        <p className="text-white/80">Simple, intuitive, and beautiful design.</p>
      </div>

      <div className="relative h-[600px] w-full max-w-5xl mx-auto flex items-center justify-center perspective-1000">
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            className={cn("absolute transition-all duration-700 ease-in-out w-[280px] h-[580px]", getSlideStyle(index))}
          >
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-8 border-surface shadow-2xl bg-background">
              <Image
                src={screenshot.src || "/placeholder.svg"}
                alt={screenshot.alt}
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
