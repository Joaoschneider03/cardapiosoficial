
"use client";

import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function WhatYouGet() {
  const items = [
    {
      title: "+100 cardápios completos: Refeições prontas e equilibradas para o dia todo, sem precisar pensar no que preparar.",
      imageId: "mockup-cardapios"
    },
    {
      title: "Cardápios por faixa etária (1 a 12 anos): Planos adaptados para cada idade, respeitando necessidades e desenvolvimento infantil.",
      imageId: "mockup-faixa-etaria"
    },
    {
      title: "Lista de compras semanal: Tudo organizado para você comprar rápido, economizar e evitar desperdícios.",
      imageId: "mockup-lista-compras"
    },
    {
      title: "Guia de substituições inteligentes: Troque alimentos prejudiciais por opções saudáveis sem perder o sabor.",
      imageId: "mockup-substituicoes"
    },
    {
      title: "Cardápios para festas e fins de semana: Opções saudáveis e atrativas até nos momentos mais “difíceis”.",
      imageId: "mockup-festas"
    },
    {
      title: "Dicas para crianças seletivas: Estratégias práticas para fazer seu filho aceitar legumes e novos alimentos.",
      imageId: "mockup-seletivas"
    },
    {
      title: "Tabela de porções por idade: Saiba exatamente quanto servir para evitar excessos e garantir equilíbrio.",
      imageId: "mockup-porcoes"
    },
    {
      title: "Bônus: Planner semanal imprimível: Organize toda a alimentação da semana de forma simples e visual.",
      imageId: "mockup-planner"
    }
  ];

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('pricing');
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1500;
    let start: number | null = null;

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      const easing = percentage < 0.5 
        ? 2 * percentage * percentage 
        : -1 + (4 - 2 * percentage) * percentage;

      window.scrollTo(0, startPosition + distance * easing);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  };

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
              
              const colonIndex = item.title.lastIndexOf(':');
              const titlePart = colonIndex !== -1 ? item.title.substring(0, colonIndex) : item.title;
              const descriptionPart = colonIndex !== -1 ? item.title.substring(colonIndex + 1) : "";

              return (
                <div key={idx} className="relative p-[1.5px] overflow-hidden rounded-[2.5rem] group shadow-sm transition-all hover:shadow-md hover:scale-[1.02]">
                  {/* Efeito de borda dourada minimalista em movimento */}
                  <div className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0%,transparent_70%,#fbbf24_85%,transparent_100%)] pointer-events-none opacity-40"></div>
                  
                  {/* Conteúdo do Card */}
                  <div className="relative flex flex-col bg-white rounded-[calc(2.5rem-1.5px)] h-full overflow-hidden">
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
                    <div className="p-8 text-center bg-white border-t border-secondary/10 flex-1 flex items-center justify-center">
                      <h3 className="text-[13px] leading-relaxed text-foreground/90 font-medium">
                        {colonIndex !== -1 ? (
                          <>
                            <span className="font-extrabold text-foreground">{titlePart}:</span>
                            <span className="text-muted-foreground">{descriptionPart}</span>
                          </>
                        ) : (
                          item.title
                        )}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToPricing}
              size="lg" 
              className="h-14 px-10 text-base font-bold rounded-full shadow-md group"
              suppressHydrationWarning
            >
              QUERO MEU ACESSO AGORA <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
