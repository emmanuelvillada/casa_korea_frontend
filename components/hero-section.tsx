import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-card rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
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
                href="https://wa.me/573001234567"
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
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
