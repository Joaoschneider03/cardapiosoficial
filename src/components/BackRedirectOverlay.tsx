"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, ShieldCheck, Gift } from "lucide-react";

export function BackRedirectOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const initialized = useRef(false);

  // Função para injetar o estado extra no histórico.
  // Muitos navegadores exigem uma interação prévia do usuário (clique/toque) 
  // para permitir que o popstate funcione de forma confiável para bloqueio.
  const setupHistory = useCallback(() => {
    if (initialized.current) return;
    initialized.current = true;
    
    // Adiciona um estado extra no histórico. 
    // O histórico fica: [Site Anterior] -> [Nossa Página (Estado 0)] -> [Nossa Página (Estado 1)]
    window.history.pushState({ backRedirect: true }, "");
  }, []);

  useEffect(() => {
    // Tenta inicializar o histórico imediatamente
    setupHistory();

    // Como fallback para garantir ativação em mobile/browsers restritos,
    // reinicializa no primeiro toque ou clique do usuário na página.
    const handleInteraction = () => {
      setupHistory();
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };

    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("click", handleInteraction, { passive: true });

    const onPopState = (event: PopStateEvent) => {
      // O evento dispara quando o usuário tenta "voltar" do Estado 1 para o Estado 0.
      // Interceptamos aqui exibindo o overlay.
      setIsOpen(true);
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
  }, [setupHistory]);

  const handleStay = () => {
    setIsOpen(false);
    // Redireciona para o checkout com a oferta de retenção
    window.location.href = "https://pay.kiwify.com.br/GTyJjUV";
  };

  const handleLeave = () => {
    setIsOpen(false);
    // Como o popstate já nos moveu para o "Estado 0", 
    // chamar back() novamente levará o usuário para fora do site.
    window.history.back();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <Card className="w-full max-w-xl bg-white rounded-[3rem] overflow-hidden shadow-2xl border-none animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
        <div className="bg-primary/10 p-8 md:p-12 text-center relative">
          <Badge className="mb-6 bg-red-500 hover:bg-red-600 text-white border-none px-4 py-1.5 rounded-full animate-bounce">
            ESPERA! NÃO VÁ EMBORA...
          </Badge>
          <h2 className="text-2xl md:text-4xl font-black font-headline text-foreground leading-tight mb-4">
            VOCÊ ACABA DE GANHAR UM <span className="text-primary underline decoration-primary/30">BÔNUS EXCLUSIVO!</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-medium max-w-sm mx-auto">
            Não perca a chance de transformar a saúde do seu filho hoje mesmo.
          </p>
          
          <div className="absolute top-6 right-8 opacity-20 hidden md:block">
            <Gift className="w-12 h-12 text-primary" />
          </div>
        </div>

        <CardContent className="p-8 md:p-12 space-y-8">
          <div className="bg-secondary rounded-[2rem] p-6 border border-primary/5 flex items-center gap-5">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Oferta de Retenção</p>
              <h3 className="text-lg font-bold leading-tight">Libere o Acesso Premium pelo preço do Básico!</h3>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              onClick={handleStay}
              className="w-full h-16 text-lg font-black rounded-full shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 bg-primary"
            >
              SIM! QUERO MEU DESCONTO <ArrowRight className="w-5 h-5" />
            </Button>
            
            <button 
              onClick={handleLeave}
              className="w-full py-2 text-xs font-bold text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors"
            >
              Não, quero sair e perder essa oportunidade
            </button>
          </div>

          <div className="pt-4 border-t border-secondary flex items-center justify-center gap-2 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> Compra 100% Segura e Garantida
          </div>
        </CardContent>
      </Card>
    </div>
  );
}