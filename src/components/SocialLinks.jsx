import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex flex-col gap-4 mt-6 px-4 sm:flex-row sm:justify-center sm:gap-6 md:mt-8">
      <a
        href="https://wa.me/5543996306339"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow-md hover:bg-green-600 transition min-h-[44px] text-sm md:text-base"
      >
        <FaWhatsapp /> WhatsApp
      </a>
      <a
        href="https://www.instagram.com/lyncongabrielf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-pink-500 text-white px-5 py-3 rounded-full shadow-md hover:bg-pink-600 transition min-h-[44px] text-sm md:text-base"
      >
        <FaInstagram /> Instagram
      </a>
    </div>
  );
}
