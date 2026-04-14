"use client";

/**
 * Atalho sutil para testar o BackRedirectOverlay sem precisar navegar.
 * Design minimalista: apenas uma pequena esfera vermelha quase invisível.
 */
export function DebugBackRedirect() {
  const handlePreview = () => {
    // Dispara o evento que o BackRedirectOverlay está escutando para abrir o modal manualmente
    window.dispatchEvent(new CustomEvent("open-back-redirect"));
  };

  return (
    <button
      onClick={handlePreview}
      className="fixed bottom-2 right-2 z-[9999] w-2 h-2 bg-red-600 rounded-full transition-all opacity-[0.08] hover:opacity-40 cursor-pointer border-none shadow-none"
      title="Testar"
    />
  );
}
