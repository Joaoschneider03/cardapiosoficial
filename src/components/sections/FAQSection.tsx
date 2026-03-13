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
      a: "Imediatamente após o pagamento, você recebe o link por e-mail para baixar o PDF e imprimir em casa."
    },
    {
      q: "Precisa de impressora especial?",
      a: "Não! Qualquer impressora doméstica em papel A4 comum funciona perfeitamente."
    },
    {
      q: "Para qual faixa etária é indicado?",
      a: "Os cardápios são organizados para crianças de 2 a 12 anos, com porções adaptadas para cada fase."
    },
    {
      q: "Meu filho é muito seletivo, vai funcionar?",
      a: "Sim! O material tem uma seção especial com estratégias e cardápios para crianças seletivas que recusam legumes e verduras."
    },
    {
      q: "É seguro comprar?",
      a: "Totalmente. Você tem 7 dias de garantia e o pagamento é processado em ambiente seguro."
    },
    {
      q: "Posso imprimir quantas vezes quiser?",
      a: "Sim! Após baixar o PDF, você pode imprimir quantas cópias precisar."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Perguntas frequentes</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white px-6 rounded-2xl border-none shadow-sm">
                <AccordionTrigger className="text-lg font-bold text-left hover:no-underline hover:text-primary py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground pb-6">
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
