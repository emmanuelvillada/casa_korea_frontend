"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type SortOption = "nombre_asc" | "nombre_desc" | "precio_asc" | "precio_desc" | "destacado"

interface CatalogHeaderProps {
  totalProducts: number
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedSort: SortOption
  onSortChange: (sort: SortOption) => void
}

export function CatalogHeader({
  totalProducts,
  searchQuery,
  onSearchChange,
  selectedSort,
  onSortChange,
}: CatalogHeaderProps) {
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

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            <span className="font-semibold text-foreground">{totalProducts}</span> productos
          </span>
          <Select value={selectedSort} onValueChange={(v) => onSortChange(v as SortOption)}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="destacado">Destacados primero</SelectItem>
              <SelectItem value="nombre_asc">Nombre A–Z</SelectItem>
              <SelectItem value="nombre_desc">Nombre Z–A</SelectItem>
              <SelectItem value="precio_asc">Precio: menor a mayor</SelectItem>
              <SelectItem value="precio_desc">Precio: mayor a menor</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
