import { Navbar } from "./components/NavBar"
import { PrincipalSection } from "./components/PrincipalSection"
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'
import { FeaturesGrid } from './components/FeaturesGrid'
import { BenefitsSection } from './components/BenefitsSection'
import { InterestForm } from './components/InteresForm'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="py-8 md:py-12 lg:py-16">
          <PrincipalSection />
        </div>
        <div className="py-1 md:py-1 lg:py-1">
          <HeroSection />
        </div>
        <div className="pt-1 md:pt-1 lg:pt-1">
          <ServicesSection />
        </div>
        <div>
          <FeaturesGrid />
        </div>
        <div className="py-6 md:py-8 lg:py-10">
          <BenefitsSection />
        </div>
        <div className="py-6 md:py-8 lg:py-10">
          <InterestForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App

