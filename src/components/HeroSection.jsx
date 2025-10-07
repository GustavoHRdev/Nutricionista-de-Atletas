import fotoNutri from "../assets/nutri-nova.png";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-8 px-4 bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300">
      <div className="w-full max-w-xs mx-auto rounded-xl overflow-hidden flex justify-center items-center">
        <img
          src={fotoNutri}
          alt="Nutricionista"
          className="w-full h-auto object-contain"
          style={{ background: "transparent" }}
        />
      </div>
      <div className="w-full flex flex-col items-center text-center animate-fadeIn">
        <h1 className="text-base font-extrabold mb-3 md:text-3xl md:mb-4 text-white">
          Já cansou de seguir dietas e não ter resultados?
        </h1>
        <p className="text-sm mb-4 text-white px-2 md:text-lg md:mb-6">
          Talvez o problema não seja você, mas sim os protocolos prontos, difíceis de seguir e totalmente desconectados da sua realidade.
        </p>
        <a
          href="#contato"
          className="w-full max-w-xs bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300 text-black px-4 py-3 rounded-lg font-bold shadow-lg transition hover:scale-105 text-center animate-pulse"
        >
          Busco resultados de verdade
        </a>
      </div>
    </section>
  );
}
