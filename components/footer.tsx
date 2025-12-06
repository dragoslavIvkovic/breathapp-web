import Link from "next/link"
import { Wind } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-surface py-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-linear-to-tr from-primary to-secondary flex items-center justify-center">
              <Wind className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Breath</span>
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
          <div className="text-white/40 text-sm">© {new Date().getFullYear()} Breath App. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
