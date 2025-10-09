export default function ServicesSection() {
  return (
    <section id="servicos" className="py-8 px-4 bg-black md:py-12 lg:py-16">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center md:text-3xl md:mb-8 lg:text-4xl lg:mb-10">Serviços</h2>
      <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto md:max-w-5xl md:grid-cols-3 md:gap-8">
        <div className="bg-gradient-to-br from-red-900 via-black to-yellow-700 rounded-xl p-6 shadow-lg text-center md:p-8">
          <h3 className="text-lg font-bold mb-2 text-yellow-300 md:text-xl">Emagrecimento</h3>
          <p className="text-white text-sm leading-relaxed md:text-base">Planos alimentares personalizados para perda de peso saudável.</p>
        </div>
        <div className="bg-gradient-to-br from-red-900 via-black to-yellow-700 rounded-xl p-6 shadow-lg text-center md:p-8">
          <h3 className="text-lg font-bold mb-2 text-yellow-300 md:text-xl">Ganho de Massa</h3>
          <p className="text-white text-sm leading-relaxed md:text-base">Estratégias nutricionais para hipertrofia e performance.</p>
        </div>
        <div className="bg-gradient-to-br from-red-900 via-black to-yellow-700 rounded-xl p-6 shadow-lg text-center md:p-8">
          <h3 className="text-lg font-bold mb-2 text-yellow-300 md:text-xl">Saúde Intestinal</h3>
          <p className="text-white text-sm leading-relaxed md:text-base">Orientação para equilíbrio e bem-estar digestivo.</p>
        </div>
      </div>
    </section>
  );
}