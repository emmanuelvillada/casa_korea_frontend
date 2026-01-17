import { Cog, Gauge, Disc3, Zap, Settings2, Car } from "lucide-react"

const categories = [
  {
    icon: Cog,
    name: "Motor",
    description: "Piezas de motor, empaques, correas y más",
  },
  {
    icon: Gauge,
    name: "Suspensión",
    description: "Amortiguadores, rótulas, terminales",
  },
  {
    icon: Disc3,
    name: "Frenos",
    description: "Pastillas, discos, mordazas y líquidos",
  },
  {
    icon: Zap,
    name: "Eléctrico",
    description: "Alternadores, baterías, sensores",
  },
  {
    icon: Settings2,
    name: "Transmisión",
    description: "Cajas, embragues, homocinéticas",
  },
  {
    icon: Car,
    name: "Carrocería",
    description: "Farolas, espejos, bumpers, guardafangos",
  },
]

export function CategoriesSection() {
  return (
    <section id="categorias" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Nuestras Categorías</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">Todo lo que tu vehículo necesita</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-2xl">
            Amplio inventario de repuestos organizados por categoría para facilitar tu búsqueda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#contacto"
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <category.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{category.name}</h3>
              <p className="text-muted-foreground">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
