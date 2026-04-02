import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ProductDetail } from "@/components/product/product-detail"
import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client"

import { type SanityDocument } from "next-sanity";


interface ProductPageProps {
  params: Promise<{ id: string }>
}

interface Product extends SanityDocument {
  _id: string
  nombre: string
  descripcion: string
  precio: number
  sku: string
  estado: string
  stock: number
  destacado: boolean
  aniosCompatibles: string
  marcasCompatibles: string[]
  modelosCompatibles: string[]
  slug: string
  categoria: string
  imagenes: SanityDocument[]
}


const productQuery = `
  *[_type == 'repuesto' && slug.current == $id][0] {
    _id,
    nombre,
    descripcion,
    precio,
    sku,
    estado,
    stock,
    destacado,
    aniosCompatibles,
    marcasCompatibles,
    modelosCompatibles,
    "slug": slug.current,
    "categoria": categoria->nombre,
    imagenes
  }
`

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product: Product = await client.fetch<Product>(productQuery, { id }, { next: { revalidate: 60 } });
  if (!product) {
    return notFound();
  }


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ProductDetail product={product} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}


