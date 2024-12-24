import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'
import { FeaturesGrid } from './components/FeaturesGrid'
import { BenefitsSection } from './components/BenefitsSection'
import { InteractiveDemo } from './components/InteractiveDemo'
import { InterestForm } from './components/InterestedForm'
import { Footer } from './components/Footer'

function App() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <FeaturesGrid />
      <BenefitsSection />
      <InteractiveDemo />
      <InterestForm />
      <Footer />
    </main>
  )
}

export default App
