import Link from "next/link"
import { Facebook, Instagram, MessageCircle } from "lucide-react"
import Image from "next/image"
import logo from "@/public/logo.png"

export function Footer() {
  const quickLinks = [
    { href: "#categorias", label: "Categorías" },
    { href: "#marcas", label: "Marcas" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#productos", label: "Productos" },
    { href: "#contacto", label: "Contacto" },
  ]

  const categories = ["Motor", "Suspensión", "Frenos", "Eléctrico", "Transmisión", "Carrocería"]

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-primary/80 overflow-hidden text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary-foreground  flex items-center justify-center">
                <Image
                  src={logo}
                  alt="Logo de Casa Korea"
                  width={120}
                  height={120}
                  className="object-contain rounded-lg"
                />
              </div>

            </div>
            <p className="text-primary-foreground/70 mb-6">
              Tu aliado en repuestos automotrices en Medellín. Calidad, garantía y experiencia.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/573137192308"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Categorías</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href="#categorias"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>Bomba gallo, Cl. 65 #52A-34, La Candelaria</li>
              <li>Medellín, Antioquia</li>
              <li>+57 313 719 2308</li>
              <li>ventas@importacioonescasakorea.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Casa Korea. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
