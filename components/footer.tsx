import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-surface py-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Product Hunt Embed */}
        <div className="flex justify-center mb-12">
          <div className="bg-background border border-white/10 rounded-xl p-6 max-w-lg w-full shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <Image
                alt="Pulse Guided Breathing app – iOS breathing meditation application"
                src="https://ph-files.imgix.net/20df0a55-746c-4cb8-8a4c-11c10dd145d5.png?auto=format&fit=crop&w=80&h=80"
                width={64}
                height={64}
                className="rounded-lg object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white leading-tight truncate">
                  Pulse — Guided Breathing & Calm
                </h3>
                <p className="mt-1 text-sm text-white/60 leading-snug line-clamp-2">
                  Breathing exercises focused on calm and acceptance
                </p>
              </div>
            </div>
            <a
              href="https://www.producthunt.com/products/pulse-guided-breathing-calm-ios?embed=true&utm_source=embed&utm_medium=post_embed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-5 py-3 bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Check it out on Product Hunt →
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Image 
              src="/icon.png" 
              alt="Pulse Guided Breathing app logo – breathing exercises for iOS" 
              width={32} 
              height={32} 
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-white">Pulse: Guided Breathing</span>
          </div>
          <div className="flex gap-8 text-white/60 text-sm">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms
            </Link>
            <Link href="mailto:support@breath-app.com" className="hover:text-accent transition-colors">
              Support
            </Link>
          </div>
          <div className="text-white/40 text-sm">© {new Date().getFullYear()} Pulse: Guided Breathing. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
