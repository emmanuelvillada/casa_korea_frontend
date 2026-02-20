"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Car, ChevronLeft, Package, Shield, Truck, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { type SanityDocument } from "next-sanity"

interface Product extends SanityDocument {
  _id: string
  nombre: string
  descripcion: string
  precio: number
  sku: string
  estado: string
  stock: number
  destacado: boolean
  aniosCompatibles: string | number
  slug: string
  categoria: string
  imagenes: string[]
}

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const gallery =
    (product.imagenes ?? []).length > 0 ? product.imagenes : ["/placeholder.svg"]

  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa el repuesto: ${product.nombre} (SKU: ${product.sku}). ¿Está disponible y cuál es el precio?`,
  )

  const estadoBadgeColor: Record<string, string> = {
    nuevo: "bg-green-600 hover:bg-green-600",
    remanufacturado: "bg-blue-600 hover:bg-blue-600",
    usado: "bg-yellow-600 hover:bg-yellow-600",
  }

  const estadoColor = estadoBadgeColor[product.estado?.toLowerCase()] ?? "bg-gray-500 hover:bg-gray-500"

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <Link
          href="/catalogo"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Volver al catálogo
        </Link>
      </nav>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square bg-muted rounded-lg overflow-hidden border border-border">
            <Image
              src={gallery[selectedImage] || "/placeholder.svg"}
              alt={product.nombre}
              fill
              className="object-cover"
            />
            {product.stock > 0 ? (
              <Badge className="absolute top-4 left-4 bg-green-600 hover:bg-green-600 text-white">
                En stock
              </Badge>
            ) : (
              <Badge className="absolute top-4 left-4 bg-muted-foreground hover:bg-muted-foreground text-white">
                Agotado
              </Badge>
            )}
          </div>

          {/* Thumbnail Gallery */}
          {gallery.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {gallery.map((img, index) => (
                <button
                  type="button"
                  title={`Vista ${index + 1}`}
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-colors shrink-0 ${selectedImage === index
                    ? "border-primary"
                    : "border-border hover:border-muted-foreground"
                    }`}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${product.nombre} - Vista ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              {product.categoria && (
                <Badge variant="secondary">{product.categoria}</Badge>
              )}
              {product.estado && (
                <Badge className={`${estadoColor} text-white capitalize`}>
                  {product.estado}
                </Badge>
              )}
              <span className="text-sm text-muted-foreground">SKU: {product.sku}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              {product.nombre}
            </h1>
            {product.precio && (
              <p className="text-2xl font-bold text-primary">
                ${product.precio.toLocaleString("es-CO")}
              </p>
            )}
          </div>

          <Separator />

          {/* Description */}
          {product.descripcion && (
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Descripción</h2>
              <p className="text-muted-foreground leading-relaxed">{product.descripcion}</p>
            </div>
          )}

          <Separator />

          {/* Compatibility */}
          {product.aniosCompatibles && (
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Car className="w-5 h-5" />
                Años compatibles
              </h2>
              <div className="flex flex-wrap gap-2">
                {String(product.aniosCompatibles)
                  .split(",")
                  .map((año) => (
                    <Badge key={año.trim()} variant="outline" className="text-sm py-1.5 px-3">
                      {año.trim()}
                    </Badge>
                  ))}
              </div>
            </div>
          )}

          <Separator />

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Package className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-foreground">Empaque original</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Shield className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-foreground">Garantía incluida</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Truck className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-foreground">Envíos a todo el país</span>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg py-6"
              disabled={product.stock === 0}
            >
              <a
                href={`https://wa.me/573001234567?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Consultar disponibilidad y precio
              </a>
            </Button>
            <p className="text-center text-sm text-muted-foreground mt-3">
              Respuesta inmediata por WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}