import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Query corregido para repuestos
const REPUESTOS_QUERY = `*[
  _type == "repuesto"
  && defined(slug.current)
] | order(_createdAt desc)[0...4]{
  _id, 
  nombre, 
  slug,
  descripcion,
  precio,
  "imagenPrincipal": imagenes[0],
  marcasCompatibles,
  categoria->{
    nombre
  }
}`;

const options = { next: { revalidate: 30 } };

export async function FeaturedProducts() {
  const repuestos = await client.fetch<SanityDocument[]>(REPUESTOS_QUERY, {}, options);

  return (
    <section id="productos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Productos Destacados</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">Los más solicitados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-2xl">
            Conoce algunos de nuestros productos más populares entre nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {repuestos.length === 0 ? (
            // Fallback mientras no tengas productos en Sanity
            <p className="col-span-full text-center text-muted-foreground">
              No hay productos disponibles. Agrega algunos desde el panel de Sanity.
            </p>
          ) : (
            repuestos.map((repuesto: SanityDocument) => (
              <div
                key={repuesto._id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-square bg-muted p-4 flex items-center justify-center overflow-hidden">
                  {repuesto.imagenPrincipal ? (
                    <Image
                      src={urlFor(repuesto.imagenPrincipal).width(400).height(400).url()}
                      alt={repuesto.nombre}
                      width={400}
                      height={400}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      Sin imagen
                    </div>
                  )}
                </div>
                <div className="p-5">
                  {repuesto.marcasCompatibles && repuesto.marcasCompatibles[0] && (
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                      {repuesto.marcasCompatibles[0]}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-foreground mt-1 mb-2">
                    {repuesto.nombre}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {repuesto.descripcion || "Sin descripción"}
                  </p>
                  {repuesto.precio && (
                    <p className="text-xl font-bold text-primary mb-3">
                      ${repuesto.precio.toLocaleString('es-CO')}
                    </p>
                  )}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <a
                      href={`https://wa.me/573137192308?text=Hola, estoy interesado en: ${encodeURIComponent(repuesto.nombre)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Consultar
                    </a>
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section >
  )
}