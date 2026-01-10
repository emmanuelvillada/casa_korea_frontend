import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CatalogContent } from "@/components/catalog/catalog-content"

export const metadata = {
  title: "Catálogo de Repuestos | Casa Korea",
  description:
    "Explora nuestro catálogo completo de repuestos automotrices coreanos. Filtros, frenos, suspensión y más.",
}

export default function CatalogoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CatalogContent />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
