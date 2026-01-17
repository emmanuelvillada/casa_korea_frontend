import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

const products = [
  {
    name: "Kit de Embrague Completo",
    brand: "Valeo",
    description: "Compatible con Kia Picanto, Rio y Hyundai i10",
    image: "/car-clutch-kit-automotive-parts.jpg",
  },
  {
    name: "Amortiguadores Delanteros",
    brand: "Monroe",
    description: "Para Chevrolet Spark y Sail",
    image: "/car-shock-absorbers-automotive-parts.jpg",
  },
  {
    name: "Pastillas de Freno Cerámicas",
    brand: "Brembo",
    description: "Alta durabilidad, bajo ruido. Múltiples referencias",
    image: "/ceramic-brake-pads-automotive-parts.jpg",
  },
  {
    name: "Alternador Remanufacturado",
    brand: "Bosch",
    description: "Garantía de 1 año. Toyota, Mazda, Nissan",
    image: "/car-alternator-automotive-parts.jpg",
  },
]

export function FeaturedProducts() {
  return (
    <section id="productos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Productos Destacados</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">Los más solicitados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-2xl">
            Conoce algunos de nuestros productos más populares entre nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-square bg-muted p-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{product.brand}</span>
                <h3 className="text-lg font-bold text-foreground mt-1 mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <a
                    href="https://wa.me/573137192308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Consultar
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
