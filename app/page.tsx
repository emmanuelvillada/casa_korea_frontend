import { Header } from "@/casa_korea/components/header"
import { HeroSection } from "@/casa_korea/components/hero-section"
import { CategoriesSection } from "@/casa_korea/components/categories-section"
import { BrandsSection } from "@/casa_korea/components/brands-section"
import { WhyChooseUs } from "@/casa_korea/components/why-choose-us"
import { FeaturedProducts } from "@/casa_korea/components/featured-products"
import { TestimonialsSection } from "@/casa_korea/components/testimonials-section"
import { LocationSection } from "@/casa_korea/components/location-section"
import { Footer } from "@/casa_korea/components/footer"
import { WhatsAppButton } from "@/casa_korea/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <BrandsSection />
      <WhyChooseUs />
      <FeaturedProducts />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
