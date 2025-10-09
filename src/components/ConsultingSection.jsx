import { FaRegFileAlt, FaClipboardList, FaComments } from "react-icons/fa";

export default function ConsultingSection() {
  return (
    <section id="consultoria" className="py-8 px-4 flex flex-col items-center bg-black md:py-12 lg:py-16">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center md:text-3xl md:mb-8 lg:text-4xl lg:mb-10">Como funciona sua consultoria?</h2>
      <div className="grid grid-cols-1 gap-6 w-full max-w-sm md:max-w-5xl md:grid-cols-3 md:gap-8 lg:gap-10">
        <div className="bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300 rounded-xl p-6 shadow-lg md:p-8">
          <FaRegFileAlt className="text-white text-3xl mb-3 md:text-4xl md:mb-4" />
          <h3 className="text-lg font-bold mb-2 text-yellow-300 md:text-xl">Primeiros passos</h3>
          <p className="text-white text-sm leading-relaxed md:text-base">Será enviado 3 formulários (anamnese, frequência alimentar e avaliação de fotos) contendo mais de 50 perguntas para coletar o máximo de informações possíveis sobre suas preferências alimentares, rotina, condições físicas, entre diversas outras coisas.</p>
        </div>
        <div className="bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300 rounded-xl p-6 shadow-lg md:p-8">
          <FaClipboardList className="text-white text-3xl mb-3 md:text-4xl md:mb-4" />
          <h3 className="text-lg font-bold mb-2 text-yellow-300 md:text-xl">Montagem do protocolo</h3>
          <p className="text-white text-sm leading-relaxed md:text-base">Com essas informações em mãos, inicio a montagem do seu protocolo personalizado, entregue em até 3 dias úteis, totalmente focado na sua adesão, nos resultados e adaptado à sua realidade.</p>
        </div>
        <div className="bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300 rounded-xl p-6 shadow-lg md:p-8">
          <FaComments className="text-white text-3xl mb-3 md:text-4xl md:mb-4" />
          <h3 className="text-lg font-bold mb-2 text-yellow-300 md:text-xl">E se existirem dúvidas?</h3>
          <p className="text-white text-sm leading-relaxed md:text-base">Aqui você não fica sozinho! Semanalmente recolho os seus feedbacks e faço os ajustes necessários (seja por mudanças na sua rotina ou por estratégias para acelerar seus resultados).</p>
        </div>
      </div>
    </section>
  );
}