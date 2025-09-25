function Footer() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300">
      <footer className="bg-black py-4 text-center text-yellow-400">
        <p>&copy; {new Date().getFullYear()} NutriSite. Todos os direitos reservados.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/5543996306339"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-md font-bold transition"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/lyncongabrielf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#f58529] via-[#dd2a7b] via-40% via-[#8134af] via-70% to-[#515bd4] text-white px-5 py-3 rounded-full shadow-md font-bold hover:opacity-90 transition"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;