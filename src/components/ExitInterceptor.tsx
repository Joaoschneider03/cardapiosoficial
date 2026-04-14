
"use client";

import { useEffect, useRef } from "react";

/**
 * Componente que intercepta a primeira tentativa de "voltar" do usuário
 * através da manipulação avançada do histórico do navegador.
 */
export function ExitInterceptor() {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Verifica se já redirecionamos nesta sessão para evitar loops
    const hasRedirected = sessionStorage.getItem("exit_redirected");
    if (hasRedirected) return;

    const setupHistoryTrap = () => {
      if (initialized.current) return;
      
      try {
        // Criamos uma camada de histórico para interceptar o botão voltar
        // Estado atual: [Página Real Anterior] -> [Oferta (Injetado)] -> [Home (Atual)]
        window.history.pushState({ trap: true }, "");
        window.history.pushState({ main: true }, "");
        initialized.current = true;
      } catch (e) {
        console.warn("Falha ao preparar armadilha de histórico", e);
      }
    };

    // Navegadores exigem interação para permitir pushState funcional
    const handleInteraction = () => {
      setupHistoryTrap();
    };

    const interactionEvents = ["mousedown", "touchstart", "scroll", "keydown"];
    interactionEvents.forEach(event => {
      window.addEventListener(event, handleInteraction, { passive: true });
    });

    const onPopState = (event: PopStateEvent) => {
      // Se o usuário clicou em voltar, ele saiu do estado 'main'
      // Se ele não estiver mais no estado 'main', é uma tentativa de saída
      if (!event.state || !event.state.main) {
        sessionStorage.setItem("exit_redirected", "true");
        window.location.href = "/oferta-especial";
      }
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      interactionEvents.forEach(event => {
        window.removeEventListener(event, handleInteraction);
      });
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  return null;
}
