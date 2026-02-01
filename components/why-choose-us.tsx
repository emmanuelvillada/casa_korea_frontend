import { Users, Award, Truck, ShieldCheck } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Asesoría especializada",
    description: "Nuestro equipo te ayuda a encontrar el repuesto exacto para tu vehículo",
  },
  {
    icon: Award,
    title: "Repuestos de calidad",
    description: "Solo trabajamos con marcas reconocidas y productos de alta calidad",
  },
  {
    icon: Truck,
    title: "Envíos en Medellín",
    description: "Entregas rápidas y seguras en toda la ciudad y área metropolitana",
  },
  {
    icon: ShieldCheck,
    title: "Garantía",
    description: "Todos nuestros productos cuentan con garantía de satisfacción",
  },
]

export function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 relative overflow-hidden bg-primary">
      {/* Patrón de puntos decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.08)_1px,_transparent_0)] [background-size:40px_40px]" />


      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mt-2 mb-4">
            Tu confianza es nuestra prioridad
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-2xl">
            Más de 15 años respaldando a los conductores de Medellín con los mejores repuestos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center p-6 rounded-2xl backdrop-blur-sm bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-secondary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/30 transition-colors">
                <benefit.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-primary-foreground/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}