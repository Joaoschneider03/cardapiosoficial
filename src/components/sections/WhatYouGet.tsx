import { Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatYouGet() {
  const items = [
    "+100 cardápios completos (café, almoço, lanche e jantar)",
    "Cardápios organizados por faixa etária (2 a 12 anos)",
    "Lista de compras semanal pronta para imprimir",
    "Guia de substituições inteligentes (troca o ruim pelo saudável)",
    "Cardápios especiais para festas e fins de semana",
    "Dicas para crianças seletivas que recusam legumes",
    "Tabela de porções por idade",
    "Bônus: Planner semanal de refeições para imprimir"
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
            Tudo que está dentro do +100 Cardápios Anti Obesidade Infantil
          </h2>
          
          <div className="grid md:grid-cols-2 gap-y-6 gap-x-12 mb-12">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/50 p-4 rounded-xl border border-white/50 backdrop-blur-sm">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="h-16 px-10 text-xl font-bold rounded-full shadow-lg group">
              QUERO MEU ACESSO AGORA <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
