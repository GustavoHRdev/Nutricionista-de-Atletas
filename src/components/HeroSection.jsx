import fotoNutri from '../assets/nutri-nova.jpg';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-8 px-3">
      <img
        src={fotoNutri}
        alt="Nutricionista"
        className="w-full max-w-xs rounded-xl object-cover shadow-xl mx-auto"
      />
      <div className="w-full flex flex-col items-center text-center">
        <h1 className="text-lg font-extrabold mb-3 md:text-3xl">
          Já cansou de seguir dietas e não ter resultados?
        </h1>
        <p className="text-base mb-4 text-white px-2 md:text-lg">
          Talvez o problema não seja você, mas sim os protocolos prontos, difíceis de seguir e totalmente desconectados da sua realidade.
        </p>
        <a
          href="#contato"
          className="w-full max-w-xs bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300 text-black px-4 py-3 rounded-lg font-bold shadow-lg transition hover:scale-105 text-center"
        >
          Busco resultados de verdade
        </a>
      </div>
    </section>
  );
}
