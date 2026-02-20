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
  id: string
  name: string
  sku: string
  category: string
  categoryName: string
  brand: string
  brandName: string
  compatibility: string[]
  image: string
  inStock: boolean
}


const productQuery = `
  *[_type == 'product' && slug.current == $id][0] {
    _id,
    name,
    description,
    price,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }
`
//To do: verificar por que la query no esta trayendo el producto, revisar el id que se esta pasando y el slug en sanity, revisar la estructura del producto en sanity y compararla con la interfaz Product. Agregar console.log para debuggear el producto traido por la query.

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product: Product = await client.fetch<Product>(productQuery, { id: id });
  console.log("Fetched product:", product);
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


