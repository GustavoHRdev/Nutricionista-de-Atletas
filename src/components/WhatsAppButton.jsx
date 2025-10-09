import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappNumber = "5543996306339";
  const message = "Olá! Quero saber mais sobre seus planos de consultoria e como começar meu acompanhamento. Obrigado(a)!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition md:bottom-6 md:right-6 md:p-4 animate-pulse hover:animate-none"
      title="Fale pelo WhatsApp - Mensagem automática incluída"
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
    </a>
  );
}