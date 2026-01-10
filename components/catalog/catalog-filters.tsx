"use client"

import { useState } from "react"
import { ChevronDown, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Category {
  id: string
  name: string
  count: number
}

interface Brand {
  id: string
  name: string
  count: number
}

interface CatalogFiltersProps {
  categories: Category[]
  brands: Brand[]
  selectedCategory: string
  selectedBrand: string
  onCategoryChange: (category: string) => void
  onBrandChange: (brand: string) => void
}

export function CatalogFilters({
  categories,
  brands,
  selectedCategory,
  selectedBrand,
  onCategoryChange,
  onBrandChange,
}: CatalogFiltersProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [categoryOpen, setCategoryOpen] = useState(true)
  const [brandOpen, setBrandOpen] = useState(true)

  const hasActiveFilters = selectedCategory !== "all" || selectedBrand !== "all"

  const clearFilters = () => {
    onCategoryChange("all")
    onBrandChange("all")
  }

  const filterContent = (
    <div className="space-y-6">
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 font-medium"
        >
          <X className="w-4 h-4" />
          Limpiar filtros
        </button>
      )}

      {/* Categories */}
      <div className="border-b border-border pb-6">
        <button
          onClick={() => setCategoryOpen(!categoryOpen)}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="font-semibold text-foreground">Categorías</span>
          <ChevronDown
            className={cn("w-4 h-4 text-muted-foreground transition-transform", categoryOpen && "rotate-180")}
          />
        </button>
        {categoryOpen && (
          <div className="mt-4 space-y-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === "all"}
                onChange={() => onCategoryChange("all")}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Todas las categorías
              </span>
            </label>
            {categories.map((category) => (
              <label key={category.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === category.id}
                  onChange={() => onCategoryChange(category.id)}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors flex-1">
                  {category.name}
                </span>
                <span className="text-xs text-muted-foreground">({category.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brands */}
      <div>
        <button onClick={() => setBrandOpen(!brandOpen)} className="flex items-center justify-between w-full text-left">
          <span className="font-semibold text-foreground">Marcas de Vehículo</span>
          <ChevronDown
            className={cn("w-4 h-4 text-muted-foreground transition-transform", brandOpen && "rotate-180")}
          />
        </button>
        {brandOpen && (
          <div className="mt-4 space-y-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="brand"
                checked={selectedBrand === "all"}
                onChange={() => onBrandChange("all")}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Todas las marcas
              </span>
            </label>
            {brands.map((brand) => (
              <label key={brand.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="brand"
                  checked={selectedBrand === brand.id}
                  onChange={() => onBrandChange(brand.id)}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors flex-1">
                  {brand.name}
                </span>
                <span className="text-xs text-muted-foreground">({brand.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile filter toggle */}
      <Button
        variant="outline"
        className="lg:hidden w-full mb-4 justify-between bg-transparent"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <span className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filtros
          {hasActiveFilters && (
            <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">Activos</span>
          )}
        </span>
        <ChevronDown className={cn("w-4 h-4 transition-transform", isMobileOpen && "rotate-180")} />
      </Button>

      {/* Mobile filters */}
      {isMobileOpen && (
        <div className="lg:hidden bg-card border border-border rounded-lg p-4 mb-6">{filterContent}</div>
      )}

      {/* Desktop filters */}
      <div className="hidden lg:block bg-card border border-border rounded-lg p-6 sticky top-24">
        <h3 className="font-bold text-lg text-foreground mb-6 flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filtros
        </h3>
        {filterContent}
      </div>
    </>
  )
}
