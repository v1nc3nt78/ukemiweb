import { AboutSection } from "./about-section"
import { ContactSection } from "./contact-section"
import { HeroSection } from "./hero-section"
import { ProjectGallery } from "./project-gallery"
import { SiteFooter } from "./site-footer"
import { SiteHeader } from "./site-header"
import { StackSection } from "./stack-section"

export function PortfolioPage() {
  return (
    <main id="top">
      <SiteHeader />
      <HeroSection />
      <ProjectGallery />
      <StackSection />
      <AboutSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
