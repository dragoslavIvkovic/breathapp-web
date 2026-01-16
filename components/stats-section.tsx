import { Users, Star, MessageCircle, Download } from "lucide-react"

const stats = [
  {
    label: "Total Downloads",
    value: "170k",
    icon: Download,
  },
  {
    label: "Active Users",
    value: "40k",
    icon: Users,
  },
  {
    label: "App Rating",
    value: "4.9",
    icon: Star,
  },
  {
    label: "Positive Reviews",
    value: "10k",
    icon: MessageCircle,
  },
]

export function StatsSection() {
  return (
    <section id="about" className="py-20 bg-surface/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-white/10" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success in Numbers</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Join thousands of users who have found their inner peace and improved their daily lives through conscious
            breathing.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-surface border border-white/10 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
