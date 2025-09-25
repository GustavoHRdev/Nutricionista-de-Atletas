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
  return (
    <div className="bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300 min-h-screen text-white">
      <section id="resultados" className="py-4 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-center">Depoimentos</h2>
        <div className="relative w-full max-w-4xl overflow-hidden">
          <div className="flex animate-marquee gap-8">
            {prints.concat(prints).map((img, idx) => (
              <div key={idx} className="flex-shrink-0 flex justify-center items-center bg-black rounded-xl p-4 shadow-lg">
                <img src={img} alt={`Depoimento ${idx + 1}`} className="w-64 h-auto rounded-lg object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Adicione no seu index.css:
// @keyframes marquee {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// }
// .animate-marquee {
//   animation: marquee 30s linear infinite;
// }