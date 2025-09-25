import { useState } from "react";
import HeroSection from './components/HeroSection';
import ConsultingSection from './components/ConsultingSection';
import PlansSection from './components/PlansSection';
import BonusSection from './components/BonusSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; 

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300 text-white">
      <header className="fixed w-full bg-black bg-opacity-90 shadow-lg z-50 flex items-center justify-between px-8 py-4">
        <div className="text-2xl font-bold text-yellow-400">Nutrição & Performance</div>
        <nav className="space-x-6 hidden md:block">
          <a href="#consultoria" className="text-yellow-400 transition">Consultoria</a>
          <a href="#resultados" className="text-yellow-400 transition">Resultados</a>
          <a href="#planos" className="text-yellow-400 transition">Planos</a>
          <a href="#bonus" className="text-yellow-400 transition">Bônus</a>
          <a href="#sobre" className="text-yellow-400 transition">Quem sou eu</a>
        </nav>
        <div className="md:hidden">
          <button
            className="text-yellow-400 text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </button>
        </div>
      </header>
      {menuOpen && (
        <nav className="md:hidden fixed top-16 left-0 w-full bg-black bg-opacity-95 flex flex-col items-center py-4 z-40">
          <a href="#consultoria" className="text-yellow-400 py-2" onClick={() => setMenuOpen(false)}>Consultoria</a>
          <a href="#resultados" className="text-yellow-400 py-2" onClick={() => setMenuOpen(false)}>Resultados</a>
          <a href="#planos" className="text-yellow-400 py-2" onClick={() => setMenuOpen(false)}>Planos</a>
          <a href="#bonus" className="text-yellow-400 py-2" onClick={() => setMenuOpen(false)}>Bônus</a>
          <a href="#sobre" className="text-yellow-400 py-2" onClick={() => setMenuOpen(false)}>Quem sou eu</a>
        </nav>
      )}
      <main className="flex-1 pt-24">
        <HeroSection />
        <ConsultingSection />
        <TestimonialsSection />
        <PlansSection />
        <BonusSection />
        <AboutSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
