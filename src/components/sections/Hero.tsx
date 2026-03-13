import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-white pt-8">
      <nav className="container mx-auto px-6 flex justify-center items-center h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">R</div>
          <span className="text-primary/80 font-bold text-sm tracking-tight">Cardápios FitKids</span>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16 md:py-32 flex flex-col items-center">
        <div className="max-w-3xl text-center space-y-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-headline leading-snug text-foreground">
            +100 Cardápios Anti Obesidade Infantil, para o seu filho ficar no <span className="text-primary">peso ideal</span> sem abrir mão do sabor!
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            O único material imprimível com +100 cardápios práticos, gostosos e aprovados por crianças que vai transformar a alimentação do seu filho em semanas.
          </p>
          
          <div className="flex flex-col items-center gap-8 pt-4">
            <Button size="lg" className="h-14 px-10 text-base font-bold rounded-full shadow-md hover:bg-primary/90 transition-all group w-full sm:w-auto">
              QUERO AGORA — GARANTIR O MEU <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex flex-wrap justify-center gap-8 text-xs text-muted-foreground font-medium">
              <span className="flex items-center gap-2 px-3 py-1 bg-secondary rounded-full"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Acesso imediato</span>
              <span className="flex items-center gap-2 px-3 py-1 bg-secondary rounded-full"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Material para imprimir</span>
              <span className="flex items-center gap-2 px-3 py-1 bg-secondary rounded-full"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
