
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function WhatYouGet() {
  const items = [
    {
      title: "+100 cardápios completos (café, almoço, lanche e jantar)",
      imageId: "mockup-cardapios"
    },
    {
      title: "Cardápios organizados por faixa etária (2 a 12 anos)",
      imageId: "mockup-faixa-etaria"
    },
    {
      title: "Lista de compras semanal pronta para imprimir",
      imageId: null
    },
    {
      title: "Guia de substituições inteligentes (troca o ruim pelo saudável)",
      imageId: null
    },
    {
      title: "Cardápios especiais para festas e fins de semana",
      imageId: null
    },
    {
      title: "Dicas para crianças seletivas que recusam legumes",
      imageId: null
    },
    {
      title: "Tabela de porções por idade",
      imageId: null
    },
    {
      title: "Bônus: Planner semanal de refeições para imprimir",
      imageId: null
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-headline mb-16 max-w-2xl mx-auto leading-tight">
            Tudo que está dentro do +100 Cardápios Anti Obesidade Infantil
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {items.map((item, idx) => {
              const imageData = item.imageId ? PlaceHolderImages.find(img => img.id === item.imageId) : null;
              
              return (
                <div key={idx} className="flex flex-col gap-6 bg-white p-6 rounded-[2.5rem] border border-white shadow-sm transition-transform hover:scale-[1.02] items-center text-center group">
                  <div className="w-full aspect-[16/10] bg-secondary/50 rounded-[2rem] flex flex-col items-center justify-center border-2 border-dashed border-primary/10 group-hover:border-primary/20 transition-colors overflow-hidden relative">
                    {imageData ? (
                      <Image 
                        src={imageData.imageUrl}
                        alt={imageData.description}
                        fill
                        className="object-contain p-4"
                        data-ai-hint={imageData.imageHint}
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-30">
                        <ImageIcon className="w-10 h-10 text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-tighter px-4">Espaço para Mockup</span>
                      </div>
                    )}
                  </div>
                  <div className="px-2">
                    <span className="text-sm font-bold leading-snug text-foreground/80">{item.title}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="h-14 px-10 text-base font-bold rounded-full shadow-md group">
              <a href="#pricing">
                QUERO MEU ACESSO AGORA <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
