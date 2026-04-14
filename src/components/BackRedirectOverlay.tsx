"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Star } from "lucide-react";

export function BackRedirectOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const initialized = useRef(false);

  const setupHistory = useCallback(() => {
    if (initialized.current) return;
    initialized.current = true;
    window.history.pushState({ backRedirect: true }, "");
  }, []);

  useEffect(() => {
    setupHistory();

    const handleInteraction = () => {
      setupHistory();
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };

    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("click", handleInteraction, { passive: true });

    const onPopState = (event: PopStateEvent) => {
      setIsOpen(true);
    };

    const handleManualOpen = () => setIsOpen(true);
    window.addEventListener("open-back-redirect", handleManualOpen);

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("open-back-redirect", handleManualOpen);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
  }, [setupHistory]);

  const handleStay = () => {
    // Redireciona para o link do básico (9,90) mas entregando o valor do premium
    window.location.href = "https://pay.kiwify.com.br/HyN7eak";
  };

  const handleLeave = () => {
    setIsOpen(false);
    window.history.back();
  };

  if (!isOpen) return null;

  const benefits = [
    "+100 Cardápios Anti Obesidade Infantil",
    "Cardápios para festas e fins de semana",
    "Tabela de porções por idade",
    "Dicas para crianças seletivas",
    "Bônus: Planner semanal de refeições",
    "Acesso a todas as novas atualizações",
    "Dinâmicas alimentares premium exclusivas"
  ];

  return (
    <div className="fixed inset-0 z-[999999] bg-white overflow-y-auto animate-in fade-in duration-300">
      <div className="min-h-screen flex flex-col items-center py-12 px-6">
        <div className="max-w-3xl w-full space-y-10 text-center">
          
          <div className="space-y-6">
            <Badge className="bg-red-600 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-tighter animate-pulse">
              CONDIÇÃO ÚNICA E EXCLUSIVA
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-black font-headline text-foreground leading-tight uppercase italic">
              Espere um pouco! Temos uma <span className="text-primary underline">condição única</span> para você
            </h2>
            
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Não saia ainda! Aproveite todas as vantagens da <span className="text-primary">OFERTA PREMIUM</span> pelo valor do plano básico: <span className="text-foreground border-b-2 border-primary">apenas R$ 9,90!</span>
            </p>
          </div>

          <div className="bg-secondary/50 rounded-[3rem] p-8 md:p-12 border-2 border-primary/20 shadow-xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Star className="w-32 h-32 text-primary" fill="currentColor" />
            </div>
            
            <h3 className="text-xl font-black mb-8 flex items-center gap-3 text-primary uppercase tracking-tight">
              <Zap className="w-6 h-6 fill-primary" /> O que você vai levar agora:
            </h3>
            
            <ul className="grid md:grid-cols-1 gap-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-base font-bold text-foreground/80">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-primary/10 flex flex-col items-center">
                <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-muted-foreground line-through text-xl font-bold italic">R$ 47,00</span>
                    <span className="text-5xl font-black text-primary">R$ 9,90</span>
                </div>
                
                <Button 
                    onClick={handleStay}
                    className="w-full md:w-auto md:min-w-[400px] h-20 text-xl font-black rounded-full shadow-2xl hover:scale-105 transition-all bg-primary animate-bounce mt-4"
                    suppressHydrationWarning
                >
                    QUERO O DESCONTO AGORA <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
                
                <p className="mt-4 text-[11px] font-black text-muted-foreground/60 uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Pagamento 100% Seguro e Único
                </p>
            </div>
          </div>

          <button 
            onClick={handleLeave}
            className="py-4 text-xs font-black text-muted-foreground/40 uppercase tracking-[0.2em] hover:text-red-500 transition-colors"
          >
            Não, prefiro sair e perder meu desconto premium
          </button>
        </div>
      </div>
    </div>
  );
}
