import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "forever",
    features: ["5 Basic Breathing Exercises", "Daily Reminders", "7-Day History", "Community Access"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "per month",
    features: [
      "All Breathing Exercises",
      "Unlimited History",
      "Advanced Statistics",
      "Offline Mode",
      "Custom Routines",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Lifetime",
    price: "$99.99",
    period: "one-time",
    features: [
      "Everything in Pro",
      "Lifetime Access",
      "Priority Support",
      "Early Access to New Features",
      "Exclusive Masterclasses",
    ],
    cta: "Buy Once",
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

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
