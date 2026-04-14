"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, AlertTriangle } from "lucide-react";

/**
 * BackRedirectOverlay - Versão de Teste/Preview
 * 
 * Removido o listener de popstate para evitar conflito com o redirecionamento real.
 * Este componente agora foca apenas na visualização manual através do atalho de debug.
 */
export function BackRedirectOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleManualOpen = () => {
      setIsOpen(true);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden';
      }
    };

    window.addEventListener("open-back-redirect", handleManualOpen);

    return () => {
      window.removeEventListener("open-back-redirect", handleManualOpen);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'auto';
      }
    };
  }, []);

  const handleStay = () => {
    window.location.href = "https://pay.kiwify.com.br/HyN7eak";
  };

  const handleLeave = () => {
    setIsOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
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
      {/* Barra de Alerta no Topo */}
      <div className="absolute top-0 left-0 right-0 bg-red-600 text-white py-3 flex items-center justify-center gap-4 z-10 shadow-md">
        <AlertTriangle className="w-5 h-5 animate-pulse shrink-0 text-yellow-300" />
        <span className="text-sm md:text-base font-black uppercase tracking-[0.15em] whitespace-nowrap">
          CONDIÇÃO ÚNICA E EXCLUSIVA
        </span>
        <AlertTriangle className="w-5 h-5 animate-pulse shrink-0 text-yellow-300" />
      </div>

      <div className="container mx-auto px-6 py-24 md:py-36 flex flex-col items-center">
        <div className="max-w-3xl w-full space-y-10 text-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-headline leading-tight text-foreground uppercase italic">
              Espere um pouco! Temos uma <span className="text-emerald-600 underline decoration-emerald-400">condição única</span> para você
            </h2>
            
            <p className="text-lg md:text-xl text-foreground max-w-lg mx-auto leading-relaxed font-bold italic">
              Não saia ainda! Aproveite todas as vantagens da <span className="text-emerald-600">OFERTA PREMIUM</span> pelo valor do plano básico: <span className="text-foreground border-b-4 border-emerald-500">apenas R$ 9,90!</span>
            </p>
          </div>

          {/* Imagem de Mockup */}
          <div className="max-w-md mx-auto py-4">
            <Image 
              src="https://i.postimg.cc/7LmjpkzM/mock.png" 
              alt="Mockup Oferta" 
              width={600} 
              height={400} 
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Card Premium Gold Estreito */}
          <div className="max-w-md mx-auto bg-gradient-to-br from-white via-amber-50/40 to-white rounded-[3rem] p-8 md:p-10 border-[3px] border-amber-200 shadow-[0_30px_70px_-15px_rgba(180,120,0,0.3)] relative overflow-hidden text-left group animate-float">
            
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-200/30 blur-[100px] rounded-full pointer-events-none"></div>
            
            <h3 className="text-xl md:text-2xl font-black mb-8 text-amber-700 uppercase tracking-tighter italic">
              TUDO DO PLANO PREMIUM:
            </h3>
            
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-base md:text-lg font-extrabold text-foreground/90">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-amber-500 shrink-0 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t-2 border-amber-100 flex flex-col items-center">
                <div className="flex flex-col items-center gap-1 mb-6">
                    <div className="relative">
                      <span className="text-5xl md:text-6xl font-black text-amber-600 drop-shadow-sm">R$ 9,90</span>
                      <div className="absolute -top-4 -right-10 rotate-12 bg-red-600 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-md animate-bounce">
                        HOJE!
                      </div>
                    </div>
                </div>
                
                <Button 
                    onClick={handleStay}
                    className="w-full h-14 md:h-16 text-lg md:text-xl font-black rounded-full shadow-[0_15px_40px_-5px_rgba(180,120,0,0.5)] hover:scale-105 transition-all bg-amber-600 hover:bg-amber-700 text-white uppercase italic tracking-wider group"
                >
                    PEGAR AGORA! <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
                
                <div className="mt-6 flex flex-col items-center gap-3">
                    <p className="text-xs font-black text-amber-700 uppercase tracking-[0.15em] flex items-center gap-2">
                       <Zap className="w-4 h-4 fill-amber-500" /> Pagamento Único!
                    </p>
                    <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5" /> Transação 100% Criptografada
                    </p>
                </div>
            </div>
          </div>

          <button 
            onClick={handleLeave}
            className="py-6 text-[11px] font-bold text-muted-foreground/50 uppercase tracking-[0.2em] hover:text-red-500 transition-colors"
          >
            Fechar Visualização
          </button>
        </div>
      </div>
    </div>
  );
}
