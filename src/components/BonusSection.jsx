import { FaBookOpen, FaHeartbeat } from "react-icons/fa";

export default function BonusSection() {
  return (
    <section id="bonus" className="py-16 px-4 flex flex-col items-center bg-black">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center animate-fadeIn">Bônus Exclusivos</h2>
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300 rounded-xl p-8 shadow-xl text-center flex flex-col items-center animate-fadeIn">
          <FaBookOpen className="text-5xl text-yellow-300 mb-4 drop-shadow" />
          <h3 className="text-xl font-bold mb-2 text-yellow-300">Ebook de Receitas</h3>
          <p className="text-white mb-2">Receitas práticas e saudáveis para facilitar sua rotina alimentar.</p>
          <span className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full font-semibold mt-2 shadow">Grátis para clientes</span>
        </div>
        <div className="bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300 rounded-xl p-8 shadow-xl text-center flex flex-col items-center animate-fadeIn">
          <FaHeartbeat className="text-5xl text-red-400 mb-4 drop-shadow" />
          <h3 className="text-xl font-bold mb-2 text-yellow-300">Relatório Nutricional</h3>
          <p className="text-white mb-2">Orientações de refeição livre, ingestão hídrica e atividade cardiovascular.</p>
          <span className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full font-semibold mt-2 shadow">Personalizado</span>
        </div>
      </div>
    </section>
  );
}