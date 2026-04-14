
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Star, AlertTriangle, Sparkles } from "lucide-react";

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
    <div className="fixed inset-0 z-[999999] bg-white overflow-y-auto animate-in fade-in duration-300 font-body">
      {/* Barra de Alerta no Topo (Estática mas Absolute para rolar) */}
      <div className="absolute top-0 left-0 right-0 bg-red-600 text-white py-4 flex items-center justify-center gap-4 z-10 shadow-lg">
        <AlertTriangle className="w-5 h-5 animate-pulse shrink-0 text-yellow-300" />
        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] whitespace-nowrap">
          CONDIÇÃO ÚNICA E EXCLUSIVA
        </span>
        <AlertTriangle className="w-5 h-5 animate-pulse shrink-0 text-yellow-300" />
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col items-center">
        <div className="max-w-2xl w-full space-y-12 text-center">
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-headline leading-tight text-foreground uppercase italic">
              Espere um pouco! Temos uma <span className="text-amber-600 underline decoration-amber-300">condição única</span> para você
            </h2>
            
            <p className="text-lg md:text-xl text-foreground max-w-lg mx-auto leading-relaxed font-bold italic">
              Não saia ainda! Aproveite todas as vantagens da <span className="text-amber-600">OFERTA PREMIUM</span> pelo valor do plano básico: <span className="text-foreground border-b-4 border-amber-400">apenas R$ 9,90!</span>
            </p>
          </div>

          {/* Card Premium Gold Estreito */}
          <div className="max-w-lg mx-auto bg-gradient-to-br from-white via-amber-50/30 to-white rounded-[3rem] p-10 md:p-14 border-[3px] border-amber-200 shadow-[0_20px_60px_-15px_rgba(180,120,0,0.2)] relative overflow-hidden text-left group">
            
            {/* Efeito de Brilho/Luz */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-200/20 blur-[100px] rounded-full pointer-events-none group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-300/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Star className="w-32 h-32 text-amber-500" fill="currentColor" />
            </div>
            
            <h3 className="text-2xl font-black mb-10 flex items-center gap-3 text-amber-700 uppercase tracking-tighter italic">
              <Sparkles className="w-7 h-7 fill-amber-500 text-amber-500 animate-spin-slow" /> 
              UPGRADE GOLD ATIVADO:
            </h3>
            
            <ul className="space-y-6">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4 text-base md:text-lg font-extrabold text-foreground/90">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-14 pt-10 border-t-2 border-amber-100 flex flex-col items-center">
                <div className="flex flex-col items-center gap-1 mb-8">
                    <span className="text-muted-foreground line-through text-xl font-bold italic opacity-60">R$ 47,00</span>
                    <div className="relative">
                      <span className="text-5xl md:text-6xl font-black text-amber-600 drop-shadow-sm">R$ 9,90</span>
                      <div className="absolute -top-4 -right-8 rotate-12 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md animate-bounce">
                        HOJE!
                      </div>
                    </div>
                </div>
                
                <Button 
                    onClick={handleStay}
                    className="w-full h-16 md:h-20 text-lg md:text-xl font-black rounded-full shadow-[0_10px_30px_-5px_rgba(180,120,0,0.4)] hover:scale-105 transition-all bg-amber-600 hover:bg-amber-700 text-white uppercase italic tracking-wider group"
                >
                    GARANTIR MEU UPGRADE GOLD <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
                
                <div className="mt-8 flex flex-col items-center gap-3">
                    <p className="text-xs font-black text-amber-700 uppercase tracking-[0.15em] flex items-center gap-2">
                       <Zap className="w-4 h-4 fill-amber-500" /> Pagamento Único!
                    </p>
                    <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Transação 100% Criptografada
                    </p>
                </div>
            </div>
          </div>

          <button 
            onClick={handleLeave}
            className="py-6 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[0.2em] hover:text-red-500 transition-colors"
          >
            Não, prefiro perder meu desconto e sair agora
          </button>
        </div>
      </div>
    </div>
  );
}
