export default function AboutSection() {
  return (
    <section id="sobre" className="py-8 px-4 flex flex-col items-center bg-black md:py-12 lg:py-16">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center md:text-3xl md:mb-8 lg:text-4xl lg:mb-10">Quem sou eu</h2>
      <div className="bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300 rounded-xl p-6 shadow-lg w-full max-w-sm text-center md:max-w-2xl md:p-8 lg:max-w-3xl">
        <p className="text-white text-base leading-relaxed md:text-lg lg:text-xl">Sou um nutricionista comprometido com resultados reais, oferecendo protocolos personalizados e acompanhamento próximo para garantir sua evolução. Minha missão é transformar sua rotina alimentar de forma prática, eficiente e totalmente adaptada à sua realidade.</p>
      </div>
    </section>
  );
}