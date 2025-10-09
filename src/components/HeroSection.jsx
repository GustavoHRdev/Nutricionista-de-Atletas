import fotoNutri from "../assets/nutri-nova.png";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-6 px-4 bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300 md:gap-6 md:py-8 lg:py-12">
      <div className="w-full max-w-xs mx-auto rounded-xl overflow-hidden flex justify-center items-center md:max-w-sm lg:max-w-md">
        <img
          src={fotoNutri}
          alt="Nutricionista"
          className="w-full h-auto object-contain"
          style={{ background: "transparent" }}
        />
      </div>
      <div className="w-full flex flex-col items-center text-center animate-fadeIn">
        <h1 className="text-xl font-extrabold mb-3 text-white leading-tight md:text-3xl md:mb-4 lg:text-4xl lg:mb-6">
          Já cansou de seguir dietas e não ter resultados?
        </h1>
        <p className="text-base mb-6 text-white px-2 leading-relaxed md:text-lg md:mb-8 lg:text-xl lg:px-4 lg:max-w-3xl">
          Talvez o problema não seja você, mas sim os protocolos prontos, difíceis de seguir e totalmente desconectados da sua realidade.
        </p>
        <a
          href="#contato"
          className="w-full max-w-xs bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300 text-black px-6 py-4 rounded-lg font-bold shadow-lg transition hover:scale-105 text-center animate-pulse text-lg md:max-w-sm lg:text-xl lg:px-8 lg:py-5"
        >
          Busco resultados de verdade
        </a>
      </div>
    </section>
  );
}
