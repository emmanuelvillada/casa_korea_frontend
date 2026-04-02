"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import logo from "@/public/logo.png"

const WHATSAPP_URL = "https://wa.me/573137192308"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/#categorias", label: "Categorías" },
    { href: "/#marcas", label: "Marcas" },
    { href: "/catalogo", label: "Catálogo" },
    { href: "/#nosotros", label: "Nosotros" },
    { href: "/#contacto", label: "Contacto" },
  ]

  const isActive = (href: string) => {
    if (href === "/catalogo") return pathname.startsWith("/catalogo")
    return false
  }

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Image
              src={logo}
              alt="Logo de Casa Korea"
              width={120}
              height={120}
              className="object-contain"
            />
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium transition-colors relative pb-0.5",
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200",
                  isActive(link.href)
                    ? "text-primary after:w-full"
                    : "text-muted-foreground hover:text-primary after:w-0 hover:after:w-full"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Acciones desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              +57 313 719 2308
            </a>
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Cotiza por WhatsApp
              </a>
            </Button>
          </div>

          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú móvil */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="flex flex-col gap-1 py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium py-2.5 px-2 rounded-md transition-colors",
                  isActive(link.href)
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full mt-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Cotiza por WhatsApp
              </a>
            </Button>
          </nav>
        </div>

      </div>
    </header>
  )
}
