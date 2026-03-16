
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
      imageId: "mockup-lista-compras"
    },
    {
      title: "Guia de substituições inteligentes (troca o ruim pelo saudável)",
      imageId: "mockup-substituicoes"
    },
    {
      title: "Cardápios especiais para festas e fins de semana",
      imageId: "mockup-festas"
    },
    {
      title: "Dicas para crianças seletivas que recusam legumes",
      imageId: "mockup-seletivas"
    },
    {
      title: "Tabela de porções por idade",
      imageId: "mockup-porcoes"
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
          <h2 className="text-2xl md:text-3xl font-bold font-headline mb-16 max-w-2xl mx-auto leading-tight text-foreground">
            Tudo que está dentro do +100 Cardápios Anti Obesidade Infantil
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {items.map((item, idx) => {
              const imageData = item.imageId ? PlaceHolderImages.find(img => img.id === item.imageId) : null;
              
              return (
                <div key={idx} className="flex flex-col bg-white rounded-[2.5rem] border border-white shadow-sm transition-all hover:shadow-md hover:scale-[1.02] overflow-hidden group">
                  <div className="w-full aspect-[4/3] bg-secondary/30 flex flex-col items-center justify-center relative overflow-hidden">
                    {imageData ? (
                      <Image 
                        src={imageData.imageUrl}
                        alt={imageData.description}
                        fill
                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={imageData.imageHint}
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-20">
                        <ImageIcon className="w-12 h-12 text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-widest px-4 text-center">Espaço para Mockup</span>
                      </div>
                    )}
                  </div>
                  <div className="p-8 text-center bg-white border-t border-secondary/10">
                    <h3 className="text-base font-bold leading-tight text-foreground/90">{item.title}</h3>
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
