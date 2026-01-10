"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Car, ChevronLeft, Package, Shield, Truck, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { productDetails } from "@/lib/product-details"

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

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const details = productDetails[product.id] || {
    description:
      "Repuesto de alta calidad para vehículos coreanos. Fabricado con materiales de primera calidad para garantizar durabilidad y rendimiento óptimo.",
    features: [
      "Fabricación de alta calidad",
      "Compatible con múltiples modelos",
      "Garantía del fabricante",
      "Instalación profesional recomendada",
    ],
    gallery: [product.image],
  }

  const [selectedImage, setSelectedImage] = useState(0)
  const images = details.gallery.length > 0 ? details.gallery : [product.image]

  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa el repuesto: ${product.name} (SKU: ${product.sku}). ¿Está disponible y cuál es el precio?`,
  )

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
              src={images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.inStock ? (
              <Badge className="absolute top-4 left-4 bg-green-600 hover:bg-green-600 text-white">En stock</Badge>
            ) : (
              <Badge className="absolute top-4 left-4 bg-muted-foreground hover:bg-muted-foreground text-white">
                Agotado
              </Badge>
            )}
          </div>

          {/* Thumbnail Gallery */}
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-colors flex-shrink-0 ${
                    selectedImage === index ? "border-primary" : "border-border hover:border-muted-foreground"
                  }`}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${product.name} - Vista ${index + 1}`}
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
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{product.categoryName}</Badge>
              <span className="text-sm text-muted-foreground">SKU: {product.sku}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{product.name}</h1>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-primary">{product.brandName}</span>
            </div>
          </div>

          <Separator />

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">Descripción</h2>
            <p className="text-muted-foreground leading-relaxed">{details.description}</p>
          </div>

          {/* Features */}
          {details.features && details.features.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Características</h2>
              <ul className="space-y-2">
                {details.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Separator />

          {/* Compatibility */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Car className="w-5 h-5" />
              Compatibilidad
            </h2>
            <div className="flex flex-wrap gap-2">
              {product.compatibility.map((model) => (
                <Badge key={model} variant="outline" className="text-sm py-1.5 px-3">
                  {model}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Package className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">Empaque original</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Shield className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">Garantía incluida</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Truck className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">Envíos a todo el país</span>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="pt-4">
            <Button
              asChild
              size="lg"
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg py-6"
              disabled={!product.inStock}
            >
              <a href={`https://wa.me/573001234567?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Consultar disponibilidad y precio
              </a>
            </Button>
            <p className="text-center text-sm text-muted-foreground mt-3">Respuesta inmediata por WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
  )
}
