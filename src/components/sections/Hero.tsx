"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 py-12 md:py-20 flex flex-col items-center">
        <div className="max-w-3xl text-center space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-headline leading-tight text-foreground uppercase">
            <span className="text-primary">+100 CARDÁPIOS ANTI OBESIDADE INFANTIL,</span> SEU FILHO NO PESO IDEAL SEM ABRIR MÃO DO SABOR!
          </h1>
          <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed font-medium">
            O único material imprimível com +100 cardápios práticos, gostosos e aprovados por crianças que vai transformar a alimentação do seu filho em semanas.
          </p>
          
          {/* Container VSL Mobile (Vertical) */}
          <div className="relative w-full max-w-[350px] mx-auto my-8 animate-in fade-in zoom-in-95 duration-700 shadow-2xl rounded-[2.5rem] overflow-hidden border-4 border-white bg-black aspect-[9/16]">
            {isMounted ? (
              <div dangerouslySetInnerHTML={{ __html: `
                <style>
                  wistia-player[media-id='p9v3ykae7d']:not(:defined) { 
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/p9v3ykae7d/swatch'); 
                    display: block; 
                    filter: blur(5px); 
                    padding-top:177.78%; 
                  }
                </style>
                <wistia-player media-id="p9v3ykae7d" aspect="0.5625"></wistia-player>
              ` }} />
            ) : (
              <div className="w-full h-full bg-black flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              </div>
            )}
          </div>
          
          <div className="flex flex-col items-center gap-6 pt-2">
            <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full shadow-md hover:bg-primary/90 transition-all group w-fit min-w-[200px]">
              <a href="#pricing">
                Pegar agora! <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
