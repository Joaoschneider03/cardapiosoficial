import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      q: "Como vou receber o material?",
      a: "Imediatamente após o pagamento, você recebe o link por e-mail para acessar todo o conteúdo."
    },
    {
      q: "Precisa de impressora especial?",
      a: "Não! Qualquer impressora doméstica em papel A4 comum funciona perfeitamente."
    },
    {
      q: "Para qual faixa etária é indicado?",
      a: "Os cardápios são organizados para crianças de 1 a 12 anos, com porções adaptadas para cada fase."
    },
    {
      q: "Meu filho é muito seletivo, vai funcionar?",
      a: "Sim! O material tem uma seção especial com estratégias e cardápios para crianças seletivas."
    },
    {
      q: "É seguro comprar?",
      a: "Totalmente. Você tem 7 dias de garantia e o pagamento é processado em ambiente seguro."
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-headline text-center mb-16 leading-tight">Perguntas frequentes</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white px-8 rounded-[1.5rem] border-none shadow-sm overflow-hidden">
                <AccordionTrigger className="text-base font-bold text-left hover:no-underline hover:text-primary py-6 leading-snug">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-6 leading-relaxed font-medium">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
