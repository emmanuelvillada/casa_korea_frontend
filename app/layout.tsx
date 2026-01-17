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
  title: "Casa Korea | Repuestos Automotrices en Medellín",
  description:
    "Repuestos automotrices especializados en Medellín. Calidad, garantía y experiencia en partes para Kia, Hyundai, Chevrolet, Mazda, Toyota y más.",
  generator: "Next.js",
  keywords: ["repuestos", "automotrices", "Medellín", "Casa Korea", "Kia", "Hyundai", "Chevrolet"],
  icons: {
    icon: [
      {
        url: "../public/logo.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "../public/logo.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "../public/logo.jpeg",
        type: "image/svg+xml",
      },
    ],
    apple: "../public/logo.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${roboto.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
