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
      <header className="fixed w-full bg-black bg-opacity-90 shadow-lg z-50 flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <div className="text-lg font-bold text-yellow-400 md:text-2xl">Nutrição & Performance</div>
        <nav className="space-x-6 hidden md:block">
          <a href="#consultoria" className="text-yellow-400 transition hover:text-orange-400">Consultoria</a>
          <a href="#resultados" className="text-yellow-400 transition hover:text-orange-400">Resultados</a>
          <a href="#planos" className="text-yellow-400 transition hover:text-orange-400">Planos</a>
          <a href="#bonus" className="text-yellow-400 transition hover:text-orange-400">Bônus</a>
          <a href="#sobre" className="text-yellow-400 transition hover:text-orange-400">Quem sou eu</a>
        </nav>
        <div className="md:hidden">
          <button
            className="text-yellow-400 text-2xl p-2 rounded-lg bg-black bg-opacity-80 hover:bg-yellow-400 hover:text-black transition md:text-3xl md:p-3"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            &#9776;
          </button>
        </div>
      </header>
      {menuOpen && (
        <nav className="md:hidden fixed top-16 left-0 w-full bg-black bg-opacity-95 flex flex-col items-center py-4 z-40">
          <a href="#consultoria" className="text-yellow-400 py-3 text-lg hover:text-orange-400 transition" onClick={() => setMenuOpen(false)}>Consultoria</a>
          <a href="#resultados" className="text-yellow-400 py-3 text-lg hover:text-orange-400 transition" onClick={() => setMenuOpen(false)}>Resultados</a>
          <a href="#planos" className="text-yellow-400 py-3 text-lg hover:text-orange-400 transition" onClick={() => setMenuOpen(false)}>Planos</a>
          <a href="#bonus" className="text-yellow-400 py-3 text-lg hover:text-orange-400 transition" onClick={() => setMenuOpen(false)}>Bônus</a>
          <a href="#sobre" className="text-yellow-400 py-3 text-lg hover:text-orange-400 transition" onClick={() => setMenuOpen(false)}>Quem sou eu</a>
        </nav>
      )}
      <main className="flex-1 pt-16 md:pt-24">
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
