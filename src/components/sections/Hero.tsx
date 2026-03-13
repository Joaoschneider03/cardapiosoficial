import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-white pt-6">
      <nav className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">R</div>
          <span className="text-primary font-bold text-lg hidden sm:inline-block">+100 Cardápios Anti Obesidade Infantil</span>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col items-center">
        <div className="max-w-4xl text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline leading-tight text-foreground">
            +100 Cardápios Anti Obesidade Infantil, para o seu filho ficar no <span className="text-primary">peso ideal</span> sem abrir mão do sabor!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            O único material imprimível com +100 cardápios práticos, gostosos e aprovados por crianças que vai transformar a alimentação do seu filho em semanas.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Button size="lg" className="h-16 px-10 text-lg font-bold rounded-full shadow-lg hover:bg-primary/90 transition-all group w-full sm:w-auto">
              QUERO AGORA — GARANTIR O MEU <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Acesso imediato</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Material para imprimir</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
