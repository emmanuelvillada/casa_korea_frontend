const brands = [
  { name: "Kia", logo: "KIA" },
  { name: "Hyundai", logo: "HYUNDAI" },
  { name: "Renault", logo: "RENAULT" },
  { name: "Chevrolet", logo: "CHEVROLET" },
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
              className="bg-card border border-border rounded-xl p-6 lg:p-8 flex items-center justify-center hover:border-primary hover:shadow-md transition-all duration-300 group"
            >
              <span className="text-lg lg:text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                {brand.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
