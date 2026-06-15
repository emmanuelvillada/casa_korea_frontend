"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { X } from "lucide-react"
import { CatalogFilters } from "./catalog-filters"
import { ProductCard } from "./product-card"
import { CatalogHeader } from "./catalog-header"
import { SanityDocument } from "next-sanity"

type SortOption = "nombre_asc" | "nombre_desc" | "precio_asc" | "precio_desc" | "destacado"

interface CatalogContentProps {
  repuestos: SanityDocument[]
  categorias: SanityDocument[]
  marcas: string[]
}

export function CatalogContent({ repuestos, categorias, marcas }: CatalogContentProps) {
  const searchParams = useSearchParams()
  const initialBrand = searchParams.get("marca") ?? "all"

  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrand)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSort, setSelectedSort] = useState<SortOption>("destacado")

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
    const filtered = repuestos.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.categoria?._id === selectedCategory
      const matchesBrand =
        selectedBrand === "all" || product.marcasCompatibles?.includes(selectedBrand)
      const matchesSearch =
        searchQuery === "" ||
        product.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.descripcion?.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesBrand && matchesSearch
    })

    return [...filtered].sort((a, b) => {
      switch (selectedSort) {
        case "nombre_asc":
          return a.nombre.localeCompare(b.nombre, "es")
        case "nombre_desc":
          return b.nombre.localeCompare(a.nombre, "es")
        case "precio_asc":
          return (a.precio ?? 0) - (b.precio ?? 0)
        case "precio_desc":
          return (b.precio ?? 0) - (a.precio ?? 0)
        case "destacado":
          return (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0)
        default:
          return 0
      }
    })
  }, [repuestos, selectedCategory, selectedBrand, searchQuery, selectedSort])

  // Chips de filtros activos
  const activeFilters = [
    ...(selectedCategory !== "all"
      ? [{ key: "category", label: categories.find((c) => c.id === selectedCategory)?.name ?? selectedCategory, onRemove: () => setSelectedCategory("all") }]
      : []),
    ...(selectedBrand !== "all"
      ? [{ key: "brand", label: selectedBrand, onRemove: () => setSelectedBrand("all") }]
      : []),
    ...(searchQuery !== ""
      ? [{ key: "search", label: `"${searchQuery}"`, onRemove: () => setSearchQuery("") }]
      : []),
  ]

  const clearAll = () => {
    setSelectedCategory("all")
    setSelectedBrand("all")
    setSearchQuery("")
  }

  return (
    <section className="py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <CatalogHeader
          totalProducts={filteredProducts.length}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedSort={selectedSort}
          onSortChange={setSelectedSort}
        />

        {/* Chips de filtros activos */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm text-muted-foreground">Filtrando por:</span>
            {activeFilters.map((filter) => (
              <button
                type="button"
                key={filter.key}
                onClick={filter.onRemove}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {filter.label}
                <X className="w-3.5 h-3.5" />
              </button>
            ))}
            {activeFilters.length > 1 && (
              <button
                type="button"
                onClick={clearAll}
                className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
              >
                Limpiar todo
              </button>
            )}
          </div>
        )}

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
                  type="button"
                  onClick={clearAll}
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