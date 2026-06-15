import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CatalogContent } from "@/components/catalog/catalog-content"
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";

const REPUESTOS_QUERY = `*[_type == "repuesto"] {
  _id,
  nombre,
  slug,
  sku,
  descripcion,
  precio,
  stock,
  "imagenPrincipal": imagenes[0],
  marcasCompatibles,
  modelosCompatibles,
  estado,
  destacado,
  categoria->{
    _id,
    nombre,
    slug
  }
} | order(nombre asc)`;

const CATEGORIAS_QUERY = `*[_type == "categoria"] {
  _id,
  nombre,
  slug
} | order(nombre asc)`;

const options = { next: { revalidate: 60 } }; // Revalida cada minuto

export const metadata = {
  title: "Catálogo de Repuestos | Casa Korea",
  description:
    "Explora nuestro catálogo completo de repuestos automotrices coreanos. Filtros, frenos, suspensión y más.",
}

export default async function CatalogoPage() {
  const [repuestos, categorias] = await Promise.all([
    client.fetch<SanityDocument[]>(REPUESTOS_QUERY, {}, options),
    client.fetch<SanityDocument[]>(CATEGORIAS_QUERY, {}, options),
  ]);

  // Extraer marcas únicas de todos los repuestos
  const todasLasMarcas = repuestos.flatMap((r: SanityDocument) => r.marcasCompatibles || []);
  const marcasUnicas = Array.from(new Set(todasLasMarcas)).sort();
  return (
    <main className="min-h-screen">
      <Header />
      <Suspense>
        <CatalogContent repuestos={repuestos} categorias={categorias} marcas={marcasUnicas} />
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
