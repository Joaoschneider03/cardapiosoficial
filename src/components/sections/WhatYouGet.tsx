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
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-headline mb-16 max-w-2xl mx-auto leading-tight">
            Tudo que está dentro do +100 Cardápios Anti Obesidade Infantil
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-[1.5rem] border border-white shadow-sm transition-transform hover:scale-[1.02]">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Leaf className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-semibold text-left">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="h-14 px-8 text-base font-bold rounded-full shadow-md group">
              QUERO MEU ACESSO AGORA <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
