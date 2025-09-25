import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 mt-8">
      <a
        href="https://wa.me/5543996306339"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow-md hover:bg-green-600 transition"
      >
        <FaWhatsapp /> WhatsApp
      </a>
      <a
        href="https://www.instagram.com/lyncongabrielf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-pink-500 text-white px-5 py-3 rounded-full shadow-md hover:bg-pink-600 transition"
      >
        <FaInstagram /> Instagram
      </a>
          </div>
  );
}
