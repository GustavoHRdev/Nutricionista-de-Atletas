export default function ServicesSection() {
  return (
    <section id="servicos" className="py-16 px-4 bg-black">
      <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-center">Serviços</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-red-900 via-black to-yellow-700 rounded-xl p-8 shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2 text-yellow-300">Emagrecimento</h3>
          <p className="text-white">Planos alimentares personalizados para perda de peso saudável.</p>
        </div>
        <div className="bg-gradient-to-br from-red-900 via-black to-yellow-700 rounded-xl p-8 shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2 text-yellow-300">Ganho de Massa</h3>
          <p className="text-white">Estratégias nutricionais para hipertrofia e performance.</p>
        </div>
        <div className="bg-gradient-to-br from-red-900 via-black to-yellow-700 rounded-xl p-8 shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2 text-yellow-300">Saúde Intestinal</h3>
          <p className="text-white">Orientação para equilíbrio e bem-estar digestivo.</p>
        </div>
      </div>
    </section>
  );
}