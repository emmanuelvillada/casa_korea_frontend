import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tu-dominio.com'), // Cambia por tu URL real
  title: {
    default: "Casa Korea | Repuestos Automotrices en Medellín",
    template: "%s | Casa Korea" // Para páginas individuales
  },
  description:
    "Venta de repuestos automotrices de calidad en Medellín. Especialistas en Kia, Hyundai, Chevrolet, Mazda, Toyota y más. Garantía, asesoría experta y envíos rápidos.",
  keywords: [
    "repuestos automotrices Medellín",
    "repuestos Kia Medellín",
    "repuestos Hyundai Medellín",
    "repuestos Chevrolet Medellín",
    "Casa Korea",
    "autopartes Medellín",
    "repuestos originales",
    "repuestos Toyota",
    "repuestos Mazda",
    "frenos",
    "amortiguadores",
    "embragues",
    "alternadores",
    "repuestos Colombia"
  ],
  authors: [{ name: "Casa Korea" }],
  creator: "Casa Korea",
  publisher: "Casa Korea",

  // Open Graph (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://importacionescasakorea.com",
    siteName: "Casa Korea",
    title: "Casa Korea | Repuestos Automotrices en Medellín",
    description: "Venta de repuestos automotrices de calidad en Medellín. Garantía, asesoría experta y envíos rápidos.",
    images: [
      {
        url: "../../public/logo.png", // Crea esta imagen 1200x630px
        width: 1200,
        height: 630,
        alt: "Casa Korea - Repuestos Automotrices Medellín",
      }
    ],
  },



  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons mejorado
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // Manifest
  manifest: "/manifest.json",

  // Verificación (cuando tengas estos servicios)
  verification: {
    google: "tu-codigo-google-search-console", // Opcional
    // yandex: "tu-codigo-yandex",
    // bing: "tu-codigo-bing",
  },

  // Información de contacto y ubicación
  alternates: {
    canonical: "https://importacionescasakorea.com",
  },

  // Información adicional
  category: "Automotriz",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CO">
      <head>
        {/* Schema.org para SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoPartsStore",
              "name": "Casa Korea",
              "description": "Venta de repuestos automotrices de calidad en Medellín",
              "url": "https://importacionescasakorea.com",
              "telephone": "+573137192308",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Tu dirección aquí", // Agrega tu dirección
                "addressLocality": "Medellín",
                "addressRegion": "Antioquia",
                "postalCode": "050001", // Tu código postal
                "addressCountry": "CO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "6.2442", // Coordenadas reales de tu negocio
                "longitude": "-75.5812"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "08:00",
                  "closes": "14:00"
                }
              ],
              "priceRange": "$$",
              "image": "https://importacionescasakorea.com/og-image.jpg",
              "sameAs": [
                "https://www.facebook.com/casakorea", // Tus redes sociales
                "https://www.instagram.com/casakorea",
                // "https://twitter.com/casakorea"
              ]
            })
          }}
        />
      </head>
      <body className={`${roboto.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}