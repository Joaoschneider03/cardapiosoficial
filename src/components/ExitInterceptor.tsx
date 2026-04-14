
"use client";

import { useEffect, useRef } from "react";

/**
 * ExitInterceptor - Sistema de BackRedirect de Alta Compatibilidade
 * 
 * Implementa a técnica de History Anchoring blindada.
 * - Ativação apenas após interação real (previne bloqueios Safari/Chrome).
 * - Uso de sessionStorage para garantir execução ÚNICA por sessão.
 * - Redirecionamento instantâneo no evento popstate.
 */
export function ExitInterceptor() {
  const REDIRECT_URL = "/oferta-especial";
  const SESSION_KEY = "backredirect_triggered";
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Se já disparou nesta sessão, não arma a armadilha novamente
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const setupHistoryTrap = () => {
      if (initialized.current) return;
      
      try {
        // Criamos dois estados: a Âncora e o Estado Atual
        // Quando o usuário clica em voltar, ele sai do Estado Atual e cai na Âncora
        window.history.pushState({ isAnchor: true }, "");
        window.history.pushState({ isCurrent: true }, "");
        
        initialized.current = true;
      } catch (e) {
        console.warn("History push failed:", e);
      }
    };

    // Eventos de interação que 'desbloqueiam' a permissão de manipular histórico
    const interactionEvents = ["click", "touchstart", "scroll", "mousedown"];
    
    const onUserInteraction = () => {
      setupHistoryTrap();
      // Remove os listeners após a primeira interação para economizar performance
      interactionEvents.forEach(event => {
        window.removeEventListener(event, onUserInteraction);
      });
    };

    interactionEvents.forEach(event => {
      window.addEventListener(event, onUserInteraction, { passive: true });
    });

    const handlePopState = (event: PopStateEvent) => {
      // Se o estado que restou no histórico for a nossa âncora, redirecionamos
      if (initialized.current && event.state?.isAnchor) {
        sessionStorage.setItem(SESSION_KEY, "true");
        // replace() é usado para não criar loops de histórico infinitos
        window.location.replace(REDIRECT_URL);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      interactionEvents.forEach(event => {
        window.removeEventListener(event, onUserInteraction);
      });
    };
  }, []);

  return null;
}
