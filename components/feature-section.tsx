import { CheckCircle2 } from "lucide-react"

export function FeatureSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Dashboard Mockup */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-20" />
            <div className="relative bg-surface border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-white font-semibold text-lg">Weekly Progress</h3>
                <span className="text-primary text-sm font-medium">+12% vs last week</span>
              </div>

              {/* Chart Mockup */}
              <div className="flex items-end justify-between h-48 gap-4 mb-8">
                {[40, 65, 45, 80, 55, 70, 60].map((height, i) => (
                  <div key={i} className="w-full bg-surface/50 rounded-t-lg relative group">
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/50 to-primary rounded-t-lg transition-all duration-500 group-hover:to-accent"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                  <div className="text-white/60 text-sm mb-1">Total Minutes</div>
                  <div className="text-2xl font-bold text-white">342</div>
                </div>
                <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                  <div className="text-white/60 text-sm mb-1">Sessions</div>
                  <div className="text-2xl font-bold text-white">14</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Monitor Your Progress <br />
              <span className="text-accent">Anytime, Anywhere</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Track your mindfulness journey with detailed insights. Understand your patterns, celebrate your streaks,
              and see the tangible impact of daily breathing exercises on your well-being.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Detailed session analytics and history",
                "Mood tracking before and after sessions",
                "Personalized recommendations based on data",
                "Exportable health reports",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 transform hover:-translate-y-1">
              Start Tracking Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
