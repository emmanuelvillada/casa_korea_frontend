"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface CatalogHeaderProps {
  totalProducts: number
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function CatalogHeader({ totalProducts, searchQuery, onSearchChange }: CatalogHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Catálogo de Repuestos</h1>
      <p className="text-muted-foreground mb-6">Encuentra el repuesto que necesitas entre nuestro amplio inventario</p>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar por nombre o SKU..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{totalProducts}</span> productos encontrados
        </p>
      </div>
    </div>
  )
}
