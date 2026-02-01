"use client"

import { useState, useMemo } from "react"
import { CatalogFilters } from "./catalog-filters"
import { ProductCard } from "./product-card"
import { CatalogHeader } from "./catalog-header"
import { SanityDocument } from "next-sanity"

interface CatalogContentProps {
  repuestos: SanityDocument[]
  categorias: SanityDocument[]
  marcas: string[]
}

export function CatalogContent({ repuestos, categorias, marcas }: CatalogContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedBrand, setSelectedBrand] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Preparar categorías para el filtro
  const categories = [
    { id: "all", name: "Todas las categorías", count: repuestos.length },
    ...categorias.map((cat) => ({
      id: cat._id,
      name: cat.nombre,
      count: repuestos.filter((product) => product.categoria?._id === cat._id).length,
    })),
  ]

  // Preparar marcas para el filtro
  const brands = [
    { id: "all", name: "Todas las marcas", count: marcas.length },
    ...marcas.map((marca) => ({
      id: marca,
      name: marca,
      count: repuestos.filter((product) => product.marcasCompatibles?.includes(marca)).length,
    })),
  ]

  const filteredProducts = useMemo(() => {
    return repuestos.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" ||
        product.categoria?._id === selectedCategory

      const matchesBrand =
        selectedBrand === "all" ||
        product.marcasCompatibles?.includes(selectedBrand)

      const matchesSearch =
        searchQuery === "" ||
        product.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.descripcion?.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesBrand && matchesSearch
    })
  }, [repuestos, selectedCategory, selectedBrand, searchQuery])

  return (
    <section className="py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <CatalogHeader
          totalProducts={filteredProducts.length}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 shrink-0">
            <CatalogFilters
              categories={categories}
              brands={brands}
              selectedCategory={selectedCategory}
              selectedBrand={selectedBrand}
              onCategoryChange={setSelectedCategory}
              onBrandChange={setSelectedBrand}
            />
          </aside>

          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-muted/50 rounded-lg">
                <p className="text-muted-foreground text-lg">
                  No se encontraron productos con los filtros seleccionados.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all")
                    setSelectedBrand("all")
                    setSearchQuery("")
                  }}
                  className="mt-4 text-primary hover:underline font-medium"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}