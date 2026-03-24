export function Footer() {
  return (
    <footer className="bg-foreground text-white/60 py-20">
      <div className="container mx-auto px-6 text-center space-y-10">
        <div className="space-y-2">
          <h3 className="text-xl font-bold font-headline text-white">Cardápios FitKids</h3>
          <p className="text-xs font-medium uppercase tracking-widest opacity-50">+100 Cardápios Anti Obesidade Infantil</p>
        </div>
        
        <p className="max-w-2xl mx-auto text-xs font-medium">
          © 2025 Todos os direitos reservados
        </p>
        
        <p className="text-[10px] max-w-lg mx-auto opacity-30 leading-relaxed italic">
          Este produto é um material digital para download. Os resultados dependem da aplicação do método e podem variar de pessoa para pessoa.
        </p>
      </div>
    </footer>
  );
}
