
"use client";

import { useEffect, useRef } from "react";

/**
 * Componente que intercepta a primeira tentativa de "voltar" do usuário
 * e redireciona para a página de oferta especial.
 */
export function ExitInterceptor() {
  const initialized = useRef(false);

  useEffect(() => {
    // Verifica se já redirecionamos nesta sessão para evitar loops ou redirecionamentos múltiplos
    const hasRedirected = sessionStorage.getItem("exit_redirected");
    if (hasRedirected) return;

    const setupHistory = () => {
      if (initialized.current) return;
      
      // Injeta uma entrada extra no histórico.
      // O usuário "permanece" na página principal, mas agora existe um estado anterior (o real)
      // e o estado atual injetado.
      try {
        window.history.pushState({ exitIntent: true }, "");
        initialized.current = true;
      } catch (e) {
        console.warn("Falha ao manipular histórico", e);
      }
    };

    // Navegadores modernos exigem uma interação do usuário para permitir manipulação do histórico
    const handleInteraction = () => {
      setupHistory();
    };

    window.addEventListener("mousedown", handleInteraction, { passive: true });
    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("scroll", handleInteraction, { passive: true });
    window.addEventListener("keydown", handleInteraction, { passive: true });

    // O evento popstate é disparado quando o usuário clica no botão "voltar" do navegador ou celular
    const onPopState = (event: PopStateEvent) => {
      // Marcamos que o redirecionamento ocorreu para não interceptar novamente
      sessionStorage.setItem("exit_redirected", "true");
      
      // Redireciona para a página de retenção
      window.location.href = "/oferta-especial";
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("mousedown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  return null;
}
