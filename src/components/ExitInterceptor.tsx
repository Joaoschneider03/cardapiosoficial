
"use client";

import { useEffect, useRef } from "react";

/**
 * ExitInterceptor - Sistema profissional de BackRedirect
 * 
 * Funcionalidade:
 * 1. Aguarda a primeira interação do usuário (click/touch/scroll) para injetar um estado no histórico.
 * 2. Monitora o evento 'popstate' (botão voltar/gesto).
 * 3. No primeiro 'voltar', redireciona para a página de oferta.
 * 4. Usa sessionStorage para garantir execução única por sessão.
 */
export function ExitInterceptor() {
  const REDIRECT_URL = "/oferta-especial";
  const SESSION_KEY = "backredirect_executed";
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Verificação de proteção contra execução múltipla
    const hasExecuted = sessionStorage.getItem(SESSION_KEY);
    if (hasExecuted) return;

    const setupHistoryAnchor = () => {
      if (initialized.current) return;
      
      try {
        // Injetamos um estado extra no histórico. 
        // Agora o histórico é: [Página Anterior] -> [Página Atual (Estado Real)] -> [Página Atual (Estado Âncora)]
        window.history.pushState({ exitAnchor: true }, "");
        initialized.current = true;
      } catch (e) {
        console.warn("Erro ao configurar âncora de histórico:", e);
      }
    };

    // 2. Ativação após interação (essencial para Chrome/Safari modernos)
    const interactionEvents = ["mousedown", "touchstart", "scroll", "keydown"];
    const onFirstInteraction = () => {
      setupHistoryAnchor();
      interactionEvents.forEach(event => {
        window.removeEventListener(event, onFirstInteraction);
      });
    };

    interactionEvents.forEach(event => {
      window.addEventListener(event, onFirstInteraction, { passive: true });
    });

    // 3. Listener do evento PopState (Interceptação do Voltar)
    const onPopState = (event: PopStateEvent) => {
      // Se o estado 'exitAnchor' sumir, significa que o usuário tentou voltar
      if (initialized.current && (!event.state || !event.state.exitAnchor)) {
        sessionStorage.setItem(SESSION_KEY, "true");
        window.location.href = REDIRECT_URL;
      }
    };

    // 4. Fallback para Links Externos (Opcional, mas solicitado)
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor && anchor.href && !anchor.href.includes(window.location.hostname)) {
        if (!sessionStorage.getItem(SESSION_KEY)) {
          e.preventDefault();
          sessionStorage.setItem(SESSION_KEY, "true");
          window.location.href = REDIRECT_URL;
        }
      }
    };

    window.addEventListener("popstate", onPopState);
    document.addEventListener("click", handleLinkClick);

    return () => {
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("click", handleLinkClick);
      interactionEvents.forEach(event => {
        window.removeEventListener(event, onFirstInteraction);
      });
    };
  }, []);

  return null;
}
