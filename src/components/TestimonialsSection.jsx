import { useRef, useEffect, useCallback } from "react";
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
  const animationRef = useRef(null);

  // Animação suave e contínua - somente automática
  const animateCarousel = useCallback(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollSpeed = 0.5; // pixels por frame - velocidade suave
      
      container.scrollLeft += scrollSpeed;
      
      // Loop infinito suave - reset quando chegar no meio (onde as imagens se repetem)
      const maxScroll = container.scrollWidth / 2;
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
      }
    }
    
    animationRef.current = requestAnimationFrame(animateCarousel);
  }, []);

  // Iniciar animação
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animateCarousel);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animateCarousel]);

  return (
    <div className="bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300 text-white">
      <section
        id="resultados"
        className="py-6 px-4 flex flex-col items-center md:py-8 lg:py-10"
      >
        <h2 className="text-xl font-bold mb-6 text-yellow-400 md:text-2xl md:mb-8 lg:text-3xl">Depoimentos</h2>
        <div
          className="relative w-full max-w-sm overflow-hidden md:max-w-2xl lg:max-w-4xl auto-carousel"
          ref={scrollRef}
        >
          <div className="flex gap-4 md:gap-6 carousel-track" style={{ width: "200%" }}>
            {/* Primeira cópia das imagens */}
            {prints.map((img, idx) => (
              <div
                key={`first-${idx}`}
                className="flex-shrink-0 flex justify-center items-center bg-black rounded-xl p-3 shadow-lg md:p-4 carousel-item"
                style={{ scrollSnapAlign: "center" }}
              >
                <img
                  src={img}
                  alt={`Depoimento ${idx + 1}`}
                  className="w-48 h-auto rounded-lg object-cover md:w-56 lg:w-64 select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
            {/* Segunda cópia para loop infinito suave */}
            {prints.map((img, idx) => (
              <div
                key={`second-${idx}`}
                className="flex-shrink-0 flex justify-center items-center bg-black rounded-xl p-3 shadow-lg md:p-4 carousel-item"
                style={{ scrollSnapAlign: "center" }}
              >
                <img
                  src={img}
                  alt={`Depoimento ${idx + 1}`}
                  className="w-48 h-auto rounded-lg object-cover md:w-56 lg:w-64 select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <p className="text-sm text-yellow-200 text-center md:text-base lg:mt-2">
            Depoimentos reais dos nossos clientes
          </p>
        </div>
      </section>
    </div>
  );
}




