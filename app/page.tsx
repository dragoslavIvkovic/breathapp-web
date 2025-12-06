
import { PhoneMockup } from "@/components/phone-mockup"
import { StatsSection } from "@/components/stats-section"
import { ProgressChart } from "@/components/progress-chart" // Importing new component
import { PricingSection } from "@/components/pricing-section"
import { ScreenshotSlider } from "@/components/screenshot-slider"
import { TestimonialsSection } from "@/components/testimonials-section" // Importing new component
import { Wind, Sparkles, Apple, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-accent selection:text-white overflow-x-hidden">


      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-white/90">#1 Health & Fitness App</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
                Find Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Inner Peace
                </span>
              </h1>

              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Master the art of breathwork with our guided exercises. Reduce stress, improve sleep, and increase focus
                in just 5 minutes a day.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button className="w-full sm:w-auto px-8 py-6 bg-primary hover:bg-primary/90 text-background font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 text-lg">
                  <Apple className="w-6 h-6" />
                  App Store
                </Button>
                <Button className="w-full sm:w-auto px-8 py-6 bg-surface/50 hover:bg-surface text-white font-semibold rounded-full border border-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2 text-lg">
                  <PlayCircle className="w-6 h-6" />
                  Google Play
                </Button>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-white/50">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-surface border-2 border-background flex items-center justify-center text-xs font-bold text-white"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm">10k+ Happy Users</span>
                </div>
              </div>
            </div>

            <div className="flex-1 relative w-full max-w-[300px] lg:max-w-md mx-auto">
              <div className="relative z-10 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                <PhoneMockup image="/images/welcome-screen.png" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <ProgressChart />

      <ScreenshotSlider />

      <TestimonialsSection />

      <PricingSection />

      {/* CTA Section */}
      <section id="download" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-surface/50" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to breathe better?</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Download Breath today and start your journey towards a calmer, more focused mind.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="px-8 py-6 bg-accent hover:bg-accent/90 text-white font-bold rounded-full transition-all shadow-lg shadow-accent/25 min-w-[200px] text-lg">
              App Store
            </Button>
            <Button className="px-8 py-6 bg-transparent border-2 border-white/20 hover:bg-white/10 text-white font-bold rounded-full transition-all min-w-[200px] text-lg">
              Google Play
            </Button>
          </div>
        </div>
      </section>


    </main>
  )
}
