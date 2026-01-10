import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { BrandsSection } from "@/components/brands-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { FeaturedProducts } from "@/components/featured-products"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

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
