import fotoNutri from '../assets/nutri-nova.jpg';

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-16 px-4 bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300">
      <div className="relative flex justify-center items-center w-full max-w-xs md:max-w-md mx-auto">
        <div className="absolute inset-0 rounded-xl blur-2xl opacity-60 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-700"></div>
        <img
          src={fotoNutri}
          alt="Nutricionista"
          className="relative w-full rounded-xl object-cover shadow-2xl z-10 transition duration-300 hover:scale-105"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4 text-black-400">
          Já cansou de seguir dietas e não ter resultados?
        </h1>
        <p className="text-base md:text-lg mb-6 text-white">
          Talvez o problema não seja você, mas sim os protocolos prontos, difíceis de seguir e totalmente desconectados da sua realidade.
        </p>
        <a href="#contato" className="bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300 text-black px-6 py-3 rounded-lg font-bold shadow-lg transition hover:scale-105 w-full md:w-auto">
          Busco resultados de verdade
        </a>
      </div>
    </section>
  );
}
