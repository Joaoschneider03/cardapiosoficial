
"use client";

import { useState, useEffect } from "react";
import { Star, Zap, Clock } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function PremiumBonus() {
  const [timeLeft, setTimeLeft] = useState(2400); // 40 minutos em segundos
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const bonuses = [
    {
      id: "bonus-certificado",
      title: "Certificado de Boa Alimentação",
      description: "Para fazer seu filho sentir que está sendo recompensado pelo seu esforço."
    },
    {
      id: "bonus-tabela-desafios",
      title: "Tabela de Desafios Interativa",
      description: "Onde o filho vai receber estrelinhas que vão ser colocadas na tabela para marcar seus desafios cumpridos."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-8">
            <div className="flex flex-col items-center gap-4">
              {/* Card Laranja de Urgência Estilo Pílula Horizontal */}
              <div className="bg-amber-600 text-white px-8 py-4 md:py-5 rounded-full shadow-[0_15px_35px_-12px_rgba(217,119,6,0.4)] flex flex-col md:flex-row items-center gap-4 md:gap-8 border-2 border-amber-400/30 animate-in zoom-in duration-500">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 text-white font-black text-[10px] md:text-xs uppercase tracking-[0.2em] whitespace-nowrap">
                  <Zap className="w-4 h-4 fill-amber-300" /> Válido Somente Hoje
                </div>
                
                <div className="hidden md:block w-px h-6 bg-amber-400/30"></div>
                
                {isMounted && (
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 shrink-0 text-amber-200" />
                    <span className="text-xl md:text-2xl font-black tracking-tighter font-mono italic whitespace-nowrap">
                      EXPIRA EM: {formatTime(timeLeft)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-black font-headline leading-tight text-foreground uppercase italic">
              🎁 BÔNUS PREMIUM <span className="text-amber-600">DE HOJE</span>
            </h2>
            <p className="text-base text-muted-foreground font-bold italic">
              Ao garantir a Oferta Premium, você leva esses dois presentes exclusivos:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {bonuses.map((bonus, idx) => {
              const imageData = PlaceHolderImages.find(img => img.id === bonus.id);

              return (
                <div key={idx} className="relative p-[3px] overflow-hidden rounded-[3rem] group shadow-2xl transition-all hover:scale-[1.03]">
                  {/* Efeito de borda dourada INTENSA em movimento lento */}
                  <div className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0%,transparent_50%,#f59e0b_70%,#fbbf24_85%,#f59e0b_95%,transparent_100%)] pointer-events-none"></div>
                  
                  <div className="relative flex flex-col bg-white rounded-[calc(3rem-3px)] h-full overflow-hidden">
                    {/* Efeito de Brilho (Shimmer) que percorre o card */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none z-20"></div>

                    <div className="w-full aspect-video bg-amber-50 relative">
                      {imageData && (
                        <Image 
                          src={imageData.imageUrl} 
                          alt={imageData.description} 
                          fill 
                          className="object-cover"
                          data-ai-hint={imageData.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent pointer-events-none"></div>
                      <div className="absolute top-4 right-4 bg-amber-600 text-white text-[9px] font-black px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider z-10">
                        INCLUSO NA OFERTA PREMIUM
                      </div>
                    </div>
                    <div className="p-8 text-center space-y-4 bg-gradient-to-b from-white to-amber-50/30 flex-1 flex flex-col justify-center">
                      <div className="flex justify-center gap-1 text-amber-500 mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <h3 className="text-xl font-black text-amber-700 uppercase leading-tight italic">
                        {bonus.title}
                      </h3>
                      <p className="text-sm font-bold text-foreground/80 leading-relaxed italic">
                        {bonus.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
