"use client"

import { useState, useMemo } from "react"
import { CatalogFilters } from "./catalog-filters"
import { ProductCard } from "./product-card"
import { CatalogHeader } from "./catalog-header"
import { products, categories, brands } from "@/casa_korea/lib/catalog-data"

export function CatalogContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedBrand, setSelectedBrand] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesBrand && matchesSearch
    })
  }, [selectedCategory, selectedBrand, searchQuery])

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
                  <ProductCard key={product.id} product={product} />
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
