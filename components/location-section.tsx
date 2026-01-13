import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/casa_korea/components/ui/button"

export function LocationSection() {
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Ubicación y Contacto</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">Visítanos en Medellín</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos ubicados en una zona de fácil acceso. ¡Te esperamos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Información de contacto</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Dirección</p>
                  <p className="text-muted-foreground">Calle 45 #70-25, Barrio Colombia</p>
                  <p className="text-muted-foreground">Medellín, Antioquia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Teléfono</p>
                  <p className="text-muted-foreground">+57 300 123 4567</p>
                  <p className="text-muted-foreground">+57 (4) 234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">ventas@casakorea.com.co</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Horario</p>
                  <p className="text-muted-foreground">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Sábados: 8:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              asChild
              className="w-full mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Escríbenos por WhatsApp
              </a>
            </Button>
          </div>

          <div className="bg-muted rounded-xl overflow-hidden min-h-[400px] flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-4" />
              <p className="text-muted-foreground">Mapa de Google Maps</p>
              <p className="text-sm text-muted-foreground mt-2">Calle 45 #70-25, Barrio Colombia, Medellín</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
