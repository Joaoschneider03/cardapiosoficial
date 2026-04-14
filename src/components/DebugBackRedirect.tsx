"use client";

import { Eye } from "lucide-react";

export function DebugBackRedirect() {
  const handlePreview = () => {
    // Dispara o evento que o BackRedirectOverlay está escutando
    window.dispatchEvent(new CustomEvent("open-back-redirect"));
  };

  return (
    <button
      onClick={handlePreview}
      className="fixed bottom-4 right-4 z-[9999] w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 group opacity-50 hover:opacity-100"
      title="Visualizar BackRedirect"
    >
      <Eye className="w-5 h-5" />
      <span className="absolute right-full mr-3 bg-red-600 text-white text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
        TESTAR BACKREDIRECT
      </span>
    </button>
  );
}
