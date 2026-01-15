"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { STORE_LINKS } from "@/lib/links"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Features", href: "/#features" },
    { name: "Screenshots", href: "/#screenshots" },
    { name: "Reviews", href: "/#reviews" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-surface/95 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="/icon.png" 
            alt="Daily Breath" 
            width={40} 
            height={40} 
            className="rounded-lg group-hover:scale-105 transition-transform"
          />
          <span className="text-2xl font-bold text-accent">Daily Breath</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-secondary hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a href={STORE_LINKS.appStore} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-background hover:bg-primary/90 rounded-full font-bold">
              Download Now
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-accent" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface border-t border-primary/10 p-4 md:hidden flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-secondary hover:text-primary font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a href={STORE_LINKS.appStore} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-background hover:bg-primary/90 rounded-full font-bold w-full">
              Download Now
            </Button>
          </a>
        </div>
      )}
    </nav>
  )
}
