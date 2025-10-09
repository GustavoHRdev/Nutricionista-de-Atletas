import { FaBookOpen, FaHeartbeat } from "react-icons/fa";

export default function BonusSection() {
  return (
    <section id="bonus" className="py-8 px-4 flex flex-col items-center bg-black md:py-12 lg:py-16">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center animate-fadeIn md:text-3xl md:mb-8 lg:text-4xl lg:mb-10">Bônus Exclusivos</h2>
      <div className="grid grid-cols-1 gap-6 w-full max-w-sm md:max-w-4xl md:grid-cols-2 md:gap-8">
        <div className="bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300 rounded-xl p-6 shadow-xl text-center flex flex-col items-center animate-fadeIn md:p-8">
          <FaBookOpen className="text-4xl text-yellow-300 mb-3 drop-shadow md:text-5xl md:mb-4" />
          <h3 className="text-lg font-bold mb-2 text-yellow-300 md:text-xl">Ebook de Receitas</h3>
          <p className="text-white mb-2 text-sm leading-relaxed md:text-base">Receitas práticas e saudáveis para facilitar sua rotina alimentar.</p>
          <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold mt-2 shadow text-sm md:px-4 md:text-base">Grátis para clientes</span>
        </div>
        <div className="bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300 rounded-xl p-6 shadow-xl text-center flex flex-col items-center animate-fadeIn md:p-8">
          <FaHeartbeat className="text-4xl text-red-700 mb-3 drop-shadow md:text-5xl md:mb-4" />
          <h3 className="text-lg font-bold mb-2 text-yellow-300 md:text-xl">Relatório Nutricional</h3>
          <p className="text-white mb-2 text-sm leading-relaxed md:text-base">Orientações de refeição livre, ingestão hídrica e atividade cardiovascular.</p>
          <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold mt-2 shadow text-sm md:px-4 md:text-base">Personalizado</span>
        </div>
      </div>
    </section>
  );
}