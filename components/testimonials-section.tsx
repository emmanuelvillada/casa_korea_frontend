import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Martínez",
    role: "Propietario de taller mecánico",
    content:
      "Llevo 5 años comprando en Casa Korea. Siempre encuentro lo que necesito y los precios son muy competitivos. La asesoría que brindan es excelente.",
    rating: 5,
  },
  {
    name: "María González",
    role: "Cliente particular",
    content:
      "Me ayudaron a encontrar el repuesto exacto para mi Kia Sportage cuando nadie más lo tenía. El envío fue súper rápido y el producto de excelente calidad.",
    rating: 5,
  },
  {
    name: "Andrés Restrepo",
    role: "Conductor de taxi",
    content:
      "Como taxista, necesito repuestos de confianza. En Casa Korea siempre me atienden bien y tienen garantía en todo. Los recomiendo 100%.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-secondary font-semibold text-lg uppercase tracking-wider">Testimonios</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-2xl">
            La satisfacción de nuestros clientes es nuestro mayor orgullo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-card border border-border rounded-xl p-6 lg:p-8 relative">
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.content}</p>
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
