import { useRef, useEffect } from "react";
// Importe todos os prints adicionados em src/assets
import print1 from "../assets/print1.jpg";
import print2 from "../assets/print2.jpg";
import print3 from "../assets/print3.jpg";
import print4 from "../assets/print4.jpg";
import print5 from "../assets/print5.jpg";
import print6 from "../assets/print6.jpg";

const prints = [
  print1,
  print2,
  print3,
  print4,
  print5,
  print6,
];

export default function TestimonialsSection() {
  const scrollRef = useRef(null);
  let touchStartX = 0;

  // Animação automática do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 220; // ajuste conforme o tamanho do card
        // Loop infinito
        if (
          scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 2500); // velocidade do carrossel
    return () => clearInterval(interval);
  }, []);

  // Touch para deslizar
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (scrollRef.current) {
      const touchX = e.touches[0].clientX;
      const delta = touchStartX - touchX;
      scrollRef.current.scrollLeft += delta;
      touchStartX = touchX;
    }
  };

  return (
    <div className="bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300 text-white">
      <section
        id="resultados"
        className="py-4 px-3 flex flex-col items-center"
      >
        <h2 className="text-lg font-bold mb-4 md:text-2xl text-yellow-400">Depoimentos</h2>
        <div
          className="relative w-full max-w-lg overflow-x-auto scrollbar-hide"
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          style={{ scrollSnapType: "x mandatory" }}
        >
          <div className="flex gap-6">
            {prints.concat(prints).map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex justify-center items-center bg-black rounded-xl p-4 shadow-lg"
                style={{ scrollSnapAlign: "center" }}
              >
                <img
                  src={img}
                  alt={`Depoimento ${idx + 1}`}
                  className="w-56 h-auto rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm text-yellow-200 text-center">
          Arraste para o lado para ler mais depoimentos
        </p>
      </section>
    </div>
  );
}




