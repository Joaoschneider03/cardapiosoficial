
"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export function ExitInterceptor() {
  const router = useRouter();
  const initialized = useRef(false);

  useEffect(() => {
    // Verifica se já redirecionamos nesta sessão para evitar loops infinitos
    const hasRedirected = sessionStorage.getItem("exit_redirected");
    if (hasRedirected) return;

    const setupHistory = () => {
      if (initialized.current) return;
      
      // Injeta uma entrada no histórico. Quando o usuário clica em voltar,
      // ele "volta" para a página original, mas o navegador detecta o popstate.
      window.history.pushState({ exitIntent: true }, "");
      initialized.current = true;
    };

    // Ativa a interceptação após qualquer interação do usuário (necessário para navegadores modernos)
    const handleInteraction = () => {
      setupHistory();
    };

    window.addEventListener("mousedown", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("scroll", handleInteraction);
    window.addEventListener("keydown", handleInteraction);

    const onPopState = (event: PopStateEvent) => {
      // Se o usuário clicar em voltar, redirecionamos para a página de oferta
      sessionStorage.setItem("exit_redirected", "true");
      window.location.href = "/oferta-especial";
    };

    // Detecta intenção de saída no Desktop (mouse saindo da tela para o topo)
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY < 5) {
        sessionStorage.setItem("exit_redirected", "true");
        window.location.href = "/oferta-especial";
      }
    };

    window.addEventListener("popstate", onPopState);
    document.addEventListener("mouseleave", handleMouseOut);

    return () => {
      window.removeEventListener("mousedown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("mouseleave", handleMouseOut);
    };
  }, []);

  return null;
}
