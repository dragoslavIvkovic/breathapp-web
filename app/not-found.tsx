import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: true }, // noindex prevents 404s from polluting index
}

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-accent mb-4">404</h1>
      <h2 className="text-2xl text-white mb-8">Page Not Found</h2>
      <p className="text-white/70 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold transition-all"
      >
        Back to Home
      </Link>
    </div>
  )
}
