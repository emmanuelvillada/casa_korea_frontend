import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Package } from "lucide-react"
import { urlFor } from "@/sanity/lib/image"
import { type SanityDocument } from "next-sanity";
import Link from "next/link"

interface ProductCardProps {
  product: SanityDocument
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = `Hola, estoy interesado en: ${product.nombre}${product.sku ? ` (SKU: ${product.sku})` : ''}`
  const whatsappUrl = `https://wa.me/573137192308?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="aspect-square bg-muted p-4 flex items-center justify-center overflow-hidden relative">
        <Link href={`/catalogo/${product.slug.current}`} className="absolute inset-0 z-10" />
        {product.imagenPrincipal ? (
          <Image
            src={urlFor(product.imagenPrincipal).width(400).height(400).url()}
            alt={product.nombre}
            width={400}
            height={400}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <Package className="w-16 h-16" />
          </div>
        )}

        {product.destacado && (
          <Badge className="absolute top-2 right-2 bg-primary">
            Destacado
          </Badge>
        )}

        {product.stock === 0 && (
          <Badge variant="destructive" className="absolute top-2 left-2">
            Sin stock
          </Badge>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1">
            {product.categoria && (
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                {product.categoria.nombre}
              </span>
            )}
            <h3 className="text-lg font-bold text-foreground mt-1">
              {product.nombre}
            </h3>
            {product.sku && (
              <p className="text-xs text-muted-foreground mt-1">
                SKU: {product.sku}
              </p>
            )}
          </div>
        </div>

        {product.descripcion && (
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {product.descripcion}
          </p>
        )}

        {product.marcasCompatibles && product.marcasCompatibles.length > 0 && (
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-1">Compatible con:</p>
            <div className="flex flex-wrap gap-1">
              {product.marcasCompatibles.slice(0, 3).map((marca: string, idx: number) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {marca}
                </Badge>
              ))}
              {product.marcasCompatibles.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{product.marcasCompatibles.length - 3}
                </Badge>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          {product.precio ? (
            <p className="text-2xl font-bold text-primary">
              ${product.precio.toLocaleString('es-CO')}
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              Consultar precio
            </p>
          )}

          {product.stock !== undefined && product.stock > 0 && (
            <span className="text-sm text-green-600 font-medium">
              Stock: {product.stock}
            </span>
          )}
        </div>

        <Button
          asChild
          className="w-full"
          disabled={product.stock === 0}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            {product.stock === 0 ? 'Sin stock' : 'Consultar por WhatsApp'}
          </a>
        </Button>
      </div>
    </div >
  )
}