import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-surface py-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Image 
              src="/icon.png" 
              alt="Daily Breath" 
              width={32} 
              height={32} 
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-white">Daily Breath</span>
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
          <div className="text-white/40 text-sm">© {new Date().getFullYear()} Daily Breath. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
