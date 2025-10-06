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
    <div className="bg-gradient-to-br from-red-700 via-orange-400 to-yellow-300 text-white">
      <section
  id="resultados"
  className="py-1 px-3 flex flex-col items-center mb-8" // <--- aqui adicionamos margin-bottom
>
  <h2 className="text-lg font-bold mb-4 md:text-2xl text-yellow-400">Depoimentos</h2>
  <div className="relative w-full max-w-md overflow-hidden">
    <div className="flex animate-marquee gap-4">
      {prints.concat(prints).map((img, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 flex justify-center items-center bg-black rounded-xl p-2 shadow-lg"
        >
          <img
            src={img}
            alt={`Depoimento ${idx + 1}`}
            className="w-32 h-auto rounded-lg object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}

