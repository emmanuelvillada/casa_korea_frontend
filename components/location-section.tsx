import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LocationSection() {
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Ubicación y Contacto</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">Visítanos en Medellín </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-2xl">
            Estamos ubicados en una zona de fácil acceso. <br />
            ¡Te esperamos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Información de contacto */}
          <div className="bg-card border border-border rounded-xl p-6 lg:p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Información de contacto</h3>

            <div className="space-y-6">
              {/* Dirección */}
              <a
                href="https://maps.google.com/?q=Calle+45+70-25+Barrio+Colombia+Medellín"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:bg-muted/50 -mx-2 px-2 py-2 rounded-lg transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Dirección</p>
                  <p className="text-muted-foreground">Bomba gallo, Calle. 65 #52A-34, La Candelaria</p>
                  <p className="text-muted-foreground">Medellín, Antioquia</p>
                </div>
              </a>

              {/* Teléfonos */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Teléfono</p>
                  <a
                    href="tel:+573001234567"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    +57 313 719 2308
                  </a>
                  <a
                    href="tel:+57042345678"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    +57 314 481 9262
                  </a>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:ventas@casakorea.com.co"
                className="flex items-start gap-4 group hover:bg-muted/50 -mx-2 px-2 py-2 rounded-lg transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">Email</p>
                  <p className="text-muted-foreground">ventas@importacionescasakorea.com</p>
                  <p className="text-muted-foreground">compras@importacionescasakorea.com</p>
                </div>
              </a>

              {/* Horario */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Horario</p>
                  <p className="text-muted-foreground">Lunes a Viernes: 8:00 AM - 9:00 PM</p>
                  <p className="text-muted-foreground">Sábados: 8:00 AM - 2:00 PM</p>
                  <p className="text-muted-foreground text-sm mt-1">Domingos y Festivos: 8:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              asChild
              className="w-full mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <a
                href="https://wa.me/573137192308"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Escríbenos por WhatsApp
              </a>
            </Button>
          </div>

          {/* Mapa de Google */}
          <div className="bg-muted rounded-xl overflow-hidden min-h-[400px] lg:min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.004587905687!2d-75.57014062744015!3d6.263124626139368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428e411965e23%3A0x44c03f01686db220!2sImportaciones%20Casa%20Korea%20S.a.s!5e0!3m2!1ses!2sco!4v1768626256359!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Casa Korea en Medellín"
            />
          </div>
        </div>

        {/* Schema.org para SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Casa Korea",
              "image": "https://casakorea.com.co/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": " Cl. 65 #52A-34, La Candelaria,",
                "addressLocality": "Medellín",
                "addressRegion": "Antioquia",
                "addressCountry": "CO"
              },
              "telephone": "+573137192308",
              "email": "ventas@casakorea.com.co",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "08:00",
                  "closes": "14:00"
                }
              ]
            })
          }}
        />
      </div>
    </section>
  )
}