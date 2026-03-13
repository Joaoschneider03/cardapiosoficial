export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white/70 py-16">
      <div className="container mx-auto px-4 text-center space-y-8">
        <h3 className="text-2xl font-bold font-headline text-white">+100 Cardápios Anti Obesidade Infantil</h3>
        
        <p className="max-w-2xl mx-auto text-sm">
          © 2025 +100 Cardápios Anti Obesidade Infantil — Todos os direitos reservados
        </p>
        
        <div className="flex justify-center gap-6 text-sm underline">
          <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
        </div>
        
        <p className="text-xs max-w-xl mx-auto opacity-50">
          Este produto é um material digital para download. Resultados podem variar de pessoa para pessoa.
        </p>
      </div>
    </footer>
  );
}
