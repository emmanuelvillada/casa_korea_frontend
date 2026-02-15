import Kia from "@/public/kia-logo.png"
import Hyundai from "@/public/hyundai-logo.png"
import Renault from "@/public/renault-logo.png"
import Chevrolet from "@/public/chevrolet-logo.png"
import Image from "next/image"

const brands = [
  { name: "Kia", logo: "KIA", image: Kia, size: 80 },
  { name: "Hyundai", logo: "HYUNDAI", image: Hyundai, size: 80 },
  { name: "Renault", logo: "RENAULT", image: Renault, size: 60 }, // más pequeño
  { name: "Chevrolet", logo: "CHEVROLET", image: Chevrolet, size: 80 },
]

export function BrandsSection() {
  return (
    <section id="marcas" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Marcas Compatibles</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">Repuestos compatibles por marca</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-2xl">
            Trabajamos con las principales marcas del mercado automotriz colombiano
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-card border border-border rounded-xl p-6 lg:p-8 flex flex-col items-center justify-center hover:border-primary hover:shadow-md transition-all duration-300 group"

            >
              <span className="text-lg lg:text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors p-4">
                {brand.logo}
              </span>
              <div className="ml-4 w-24 h-24 relative">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
