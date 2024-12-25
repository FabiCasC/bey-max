import { PrincipalSection } from "./components/PrincipalSection";
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { BenefitsSection } from './components/BenefitsSection';
import { InterestForm } from './components/InteresForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="w-full">
      <div className="h-[550px]">
        <PrincipalSection />
      </div>
      <div className="max-h-[600px]">
        <HeroSection />
      </div>
        <ServicesSection />
      <div>
        <FeaturesGrid />
      </div>
      <div className="min-h-screen">
        <BenefitsSection />
      </div>
        <InterestForm />
      <Footer />
    </main>
  );
}

export default App;