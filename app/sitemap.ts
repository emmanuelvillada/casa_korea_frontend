import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { SanityDocument } from 'next-sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://importacionescasakorea.com'

    // Obtener todos los repuestos de Sanity
    const repuestos = await client.fetch(`*[_type == "repuesto"]{slug, _updatedAt}`)

    const repuestosUrls = repuestos.map((repuesto: SanityDocument) => ({
        url: `${baseUrl}/catalogo/${repuesto.slug.current}`,
        lastModified: new Date(repuesto._updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/catalogo`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contacto`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        ...repuestosUrls,
    ]
}