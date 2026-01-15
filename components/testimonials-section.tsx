import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Yoga Instructor",
    image: "/woman-portrait.png",
    quote:
      "Pulse has completely transformed my morning routine. The guided sessions are incredibly soothing and effective.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    image: "/thoughtful-man-portrait.png",
    quote:
      "As someone with high stress, seeing my cortisol levels drop on the chart keeps me motivated. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Professional Athlete",
    image: "/athlete-portrait.png",
    quote: "Focus is key in my sport. The specific exercises for concentration have given me a competitive edge.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">What Our Users Say</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Join thousands of others who have found their inner peace with Pulse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-surface/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-white/80 italic leading-relaxed">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
