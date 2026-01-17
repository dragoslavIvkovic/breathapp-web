import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "Free",
    period: "forever",
    features: [
      "Basic Breathing Exercises",
      "Daily Reminders",
      "Limited Session Tracking",
      "Standard Affirmations",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Monthly",
    price: "$9.99",
    period: "per month",
    features: [
      "All Breathing Techniques",
      "Unlimited Sessions",
      "Advanced Statistics",
      "Custom Timers (1-20 min)",
      "Premium Affirmations",
      "Dark Mode",
      "Streak Tracker",
    ],
    cta: "Start Your Journey",
    popular: true,
  },
  {
    name: "Yearly",
    price: "$59.99",
    period: "per year",
    features: [
      "Everything in Monthly",
      "Save 50% vs Monthly",
      "Priority Support",
      "Early Access to Features",
      "Mindful Widgets",
    ],
    cta: "Best Value",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-24 bg-surface/20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Invest in Your Peace</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Choose the plan that fits your journey. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 backdrop-blur-md border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-surface/60 border-accent shadow-2xl shadow-accent/10"
                  : "bg-surface/30 border-white/10 hover:bg-surface/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-accent">{plan.price}</span>
                  <span className="text-white/60 text-sm">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://apps.apple.com/us/app/pulse-guided-breathing/id6756025823"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-semibold transition-all text-center block ${
                  plan.popular
                    ? "bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
