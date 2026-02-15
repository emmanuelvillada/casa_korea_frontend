"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

// Importa tus imágenes
import heroImage1 from "@/public/car-alternator-automotive-parts.jpg"
import heroImage2 from "@/public/car-clutch-kit-automotive-parts.jpg"
import heroImage3 from "@/public/car-side-mirror-right-automotive.jpg"



const heroImages = [
  { src: heroImage1, alt: "Repuestos automotrices" },
  { src: heroImage2, alt: "Taller especializado" },
  { src: heroImage3, alt: "Calidad garantizada" },
]

export function HeroSection() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <section className="relative bg-primary overflow-hidden">


      <div className="container mx-auto px-4 py-14 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
              Más de 15 años de experiencia
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
              Repuestos automotrices especializados en Medellín
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
              Calidad, garantía y asesoría especializada en repuestos para tu vehículo. Trabajamos con las mejores marcas
              del mercado para ofrecerte lo mejor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8"
              >
                <a
                  href="https://wa.me/573137192308?text=Hola,%20quiero%20información%20sobre%20repuestos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Cotiza por WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 bg-transparent"
              >
                <a href="#productos" className="flex items-center gap-2">
                  Ver catálogo
                  <ChevronRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Carrusel de imágenes */}
          <div className="relative">
            <Carousel
              plugins={[plugin.current]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {heroImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-white/90 hover:bg-white" />
              <CarouselNext className="right-4 bg-white/90 hover:bg-white" />
            </Carousel>
          </div>
        </div>
      </div>
    </section >
  )
}