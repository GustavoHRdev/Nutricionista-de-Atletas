export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 px-4 flex flex-col items-center bg-black">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Quem sou eu</h2>
      <div className="bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300 rounded-xl p-8 shadow-lg w-full max-w-2xl text-center">
        <p className="text-white text-lg">Sou um nutricionista comprometido com resultados reais, oferecendo protocolos personalizados e acompanhamento próximo para garantir sua evolução. Minha missão é transformar sua rotina alimentar de forma prática, eficiente e totalmente adaptada à sua realidade.</p>
      </div>
    </section>
  );
}