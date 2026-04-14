
"use client";

import { useEffect, useRef } from "react";

/**
 * Componente avançado para interceptar a primeira tentativa de saída (botão voltar)
 * do usuário e redirecionar para a oferta especial.
 */
export function ExitInterceptor() {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Verifica se já redirecionamos nesta sessão para evitar loops infinitos
    const hasRedirected = sessionStorage.getItem("exit_redirected");
    if (hasRedirected) return;

    const setupHistoryTrap = () => {
      if (initialized.current) return;
      
      try {
        // Criamos uma entrada extra no histórico para servir como "âncora"
        // Quando o usuário tentar voltar, ele sairá desta âncora e voltará para a URL original
        // o que disparará o evento popstate.
        window.history.pushState({ trap: true }, "");
        initialized.current = true;
      } catch (e) {
        console.warn("Falha ao preparar interceptor de histórico", e);
      }
    };

    // Navegadores modernos bloqueiam pushState sem interação prévia.
    // Ativamos a armadilha no primeiro toque, clique ou scroll.
    const handleInteraction = () => {
      setupHistoryTrap();
    };

    const interactionEvents = ["mousedown", "touchstart", "scroll", "keydown"];
    interactionEvents.forEach(event => {
      window.addEventListener(event, handleInteraction, { passive: true, once: true });
    });

    const onPopState = (event: PopStateEvent) => {
      // Se o usuário clicou em voltar, o estado 'trap' que injetamos desaparece.
      // Isso indica que ele tentou sair da página atual.
      if (!event.state || !event.state.trap) {
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
