
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function Hero() {
  const heroMockup = PlaceHolderImages.find(img => img.id === "hero-mockup");

  return (
    <header className="relative overflow-hidden bg-white pt-6">
      <nav className="container mx-auto px-6 flex justify-center items-center h-14">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-base">R</div>
          <span className="text-primary/80 font-bold text-xs tracking-tight uppercase">Cardápios FitKids</span>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col items-center">
        <div className="max-w-3xl text-center space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-headline leading-tight text-foreground">
            <span className="text-primary">+100 Cardápios Anti Obesidade Infantil,</span> para o seu filho ficar no peso ideal sem abrir mão do sabor!
          </h1>
          <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed font-medium">
            O único material imprimível com +100 cardápios práticos, gostosos e aprovados por crianças que vai transformar a alimentação do seu filho em semanas.
          </p>
          
          {heroMockup && (
            <div className="relative w-full max-w-2xl mx-auto aspect-[16/10] my-8 animate-in fade-in zoom-in-95 duration-700">
              <Image 
                src={heroMockup.imageUrl} 
                alt={heroMockup.description}
                fill
                className="object-contain"
                data-ai-hint={heroMockup.imageHint}
                priority
              />
            </div>
          )}
          
          <div className="flex flex-col items-center gap-6 pt-2">
            <Button size="lg" className="h-14 px-10 text-base font-bold rounded-full shadow-md hover:bg-primary/90 transition-all group w-full sm:w-auto">
              QUERO AGORA — GARANTIR O MEU <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex flex-wrap justify-center gap-6 text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2 px-3 py-1 bg-secondary/50 rounded-full"><CheckCircle2 className="w-3 h-3 text-primary" /> Acesso imediato</span>
              <span className="flex items-center gap-2 px-3 py-1 bg-secondary/50 rounded-full"><CheckCircle2 className="w-3 h-3 text-primary" /> Material para imprimir</span>
              <span className="flex items-center gap-2 px-3 py-1 bg-secondary/50 rounded-full"><CheckCircle2 className="w-3 h-3 text-primary" /> Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
