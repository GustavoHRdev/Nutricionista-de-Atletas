export default function PlansSection() {
  const whatsapp = "5543996306339";
  const plans = [
    {
      title: "Mensal",
      price: "R$130",
      description: "💬 “Se você quer começar a mudar sua rotina alimentar sem se prender a longo prazo.”",
      details: [
        "✔ 1 mês de acompanhamento nutricional",
        "✔ Atendimento direto via WhatsApp",
        "✔ Sugestão de cardio personalizada",
        "✔ Lista de substituição de alimentos",
        "✔ Orientação sobre suplementos/manipulados (se necessário)",
        "✔ Feedbacks semanais",
        "✔ E-book de receitas",
        "👉 Perfeito para quem deseja dar o primeiro passo.",
        "💳 Pagamento via PIX, cartão de crédito ou boleto",
      ],
      highlight: false,
      message: "Olá, vim pela página da consultoria e tenho interesse no Plano Mensal de Dieta.",
    },
    {
      title: "Bimestral",
      price: "R$250",
      description: "💬 “Porque transformar seu corpo e sua saúde leva mais de 30 dias.”",
      details: [
        "✔ 2 meses de acompanhamento nutricional",
        "✔ Atendimento direto via WhatsApp",
        "✔ Sugestão de cardio personalizada",
        "✔ Lista de substituição de alimentos",
        "✔ Orientação sobre suplementos/manipulados (se necessário)",
        "✔ Feedbacks semanais",
        "✔ E-book de receitas",
        "👉 Economize R$10 em relação ao mensal (R$125/mês).",
        "👉 Ideal para quem quer consistência e já busca resultados mais visíveis.",
        "💳 Pagamento via PIX, cartão de crédito ou boleto",
      ],
      highlight: false,
      message: "Olá, vim pela página da consultoria e tenho interesse no Plano Bimestral de Dieta.",
    },
    {
      title: "Trimestral",
      price: "R$360",
      description: "💬 “Resultados reais e sustentáveis não aparecem em apenas algumas semanas.”",
      details: [
        "✔ 3 meses de acompanhamento nutricional",
        "✔ Atendimento direto via WhatsApp",
        "✔ Sugestão de cardio personalizada",
        "✔ Lista de substituição de alimentos",
        "✔ Orientação sobre suplementos/manipulados (se necessário)",
        "✔ Feedbacks semanais",
        "✔ E-book de receitas",
        "⭐ Melhor custo-benefício!",
        "👉 Economize R$30 em relação ao mensal (R$120/mês).",
        "👉 Perfeito para quem está realmente comprometido em transformar sua saúde e alcançar resultados sólidos.",
        "💳 Pagamento via PIX, cartão de crédito ou boleto",
      ],
      highlight: true,
      message: "Olá, vim pela página da consultoria e tenho interesse no Plano Trimestral de Dieta.",
    },
  ];

  return (
    <section id="planos" className="py-8 px-3">
      <h2 className="text-lg font-bold mb-6 md:text-2xl text-white text-center">Conheça os Planos</h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center justify-center">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="w-full max-w-sm bg-black bg-opacity-80 rounded-2xl shadow-lg p-8 flex flex-col items-center border-4 border-yellow-400 scale-105 relative"
          >
            {plan.highlight && (
              <div className="mt-3 bg-orange-500 text-white px-6 py-2 rounded-full font-extrabold shadow-xl flex items-center gap-2 text-lg md:text-2xl border-2 border-yellow-700">
                🔥 <span className="animate-neon-glow">Recomendado</span>
              </div>
            )}
            <h3 className="text-2xl font-bold text-yellow-300 mb-2 mt-4">{plan.title}</h3>
            <div className="text-4xl font-extrabold text-white mb-2">{plan.price}</div>
            <div className="text-base text-orange-300 mb-4 text-center">{plan.description}</div>
            <ul className="text-white text-left mb-4 space-y-2">
              {plan.details.map((item, i) => (
                <li key={i} className={item.includes("custo-benefício") ? "font-bold text-yellow-400" : ""}>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(plan.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full font-bold shadow transition animate-pulse"
            >
              Adquirir Plano
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}