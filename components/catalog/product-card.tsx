import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: string
  name: string
  sku: string
  category: string
  categoryName: string
  brand: string
  brandName: string
  compatibility: string[]
  image: string
  inStock: boolean
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa el repuesto: ${product.name} (SKU: ${product.sku}). ¿Está disponible?`,
  )

  return (
    <article className="bg-card border border-border rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
      <Link href={`/catalogo/${product.id}`} className="block">
        <div className="relative aspect-square bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.inStock ? (
            <Badge className="absolute top-3 left-3 bg-green-600 hover:bg-green-600 text-white">En stock</Badge>
          ) : (
            <Badge className="absolute top-3 left-3 bg-muted-foreground hover:bg-muted-foreground text-white">
              Agotado
            </Badge>
          )}
          <Badge variant="secondary" className="absolute top-3 right-3">
            {product.categoryName}
          </Badge>
        </div>
      </Link>

      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">SKU: {product.sku}</p>
        <Link href={`/catalogo/${product.id}`} className="hover:text-primary transition-colors">
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
        </Link>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-medium text-primary">{product.brandName}</span>
        </div>

        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
            <Car className="w-3 h-3" />
            Compatible con:
          </p>
          <div className="flex flex-wrap gap-1">
            {product.compatibility.slice(0, 3).map((model) => (
              <Badge key={model} variant="outline" className="text-xs font-normal">
                {model}
              </Badge>
            ))}
            {product.compatibility.length > 3 && (
              <Badge variant="outline" className="text-xs font-normal">
                +{product.compatibility.length - 3} más
              </Badge>
            )}
          </div>
        </div>

        <Button
          asChild
          className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          disabled={!product.inStock}
        >
          <a href={`https://wa.me/573001234567?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 mr-2" />
            Consultar por WhatsApp
          </a>
        </Button>
      </div>
    </article>
  )
}
