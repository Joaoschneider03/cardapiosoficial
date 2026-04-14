
"use client";

import { useEffect, useRef } from "react";

/**
 * ExitInterceptor - Sistema de BackRedirect Profissional
 * 
 * Este componente utiliza a técnica de ancoragem de histórico (History Anchoring).
 * 1. Aguarda a primeira interação do usuário (essencial para Safari e Chrome modernos).
 * 2. Injeta estados no histórico para criar uma "armadilha" de navegação.
 * 3. Intercepta o evento 'popstate' para redirecionar o usuário na primeira tentativa de saída.
 * 4. Usa sessionStorage para garantir que a ação ocorra apenas uma vez por sessão.
 */
export function ExitInterceptor() {
  const REDIRECT_URL = "/oferta-especial";
  const SESSION_KEY = "backredirect_done";
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Proteção: não executa se já tiver sido disparado nesta sessão
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const setupHistoryTrap = () => {
      if (initialized.current) return;
      
      try {
        // Estado 1: A "Âncora" (Onde o usuário cairá ao clicar em voltar)
        window.history.pushState({ isAnchor: true }, "");
        // Estado 2: A "Página Real" (Onde o usuário está navegando agora)
        window.history.pushState({ isCurrent: true }, "");
        
        initialized.current = true;
      } catch (e) {
        console.warn("Erro ao configurar histórico:", e);
      }
    };

    // Eventos de interação que ativam o sistema (Gesto do Usuário)
    const interactionEvents = ["click", "touchstart", "scroll", "mousedown", "keydown"];
    
    const onFirstInteraction = () => {
      setupHistoryTrap();
      interactionEvents.forEach(event => {
        window.removeEventListener(event, onFirstInteraction);
      });
    };

    interactionEvents.forEach(event => {
      window.addEventListener(event, onFirstInteraction, { passive: true });
    });

    // Listener de PopState (Detecção do botão Voltar)
    const handlePopState = (event: PopStateEvent) => {
      // Se o usuário tentar voltar e cair na nossa âncora
      if (initialized.current && event.state?.isAnchor) {
        sessionStorage.setItem(SESSION_KEY, "true");
        // Redirecionamento forçado usando replace para evitar loops de histórico
        window.location.replace(REDIRECT_URL);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      interactionEvents.forEach(event => {
        window.removeEventListener(event, onFirstInteraction);
      });
    };
  }, []);

  return null;
}
