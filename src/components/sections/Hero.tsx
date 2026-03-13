import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function Hero() {
  const mockup = PlaceHolderImages.find((img) => img.id === "product-mockup");

  return (
    <header className="relative overflow-hidden bg-white pt-6">
      <nav className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">R</div>
          <span className="text-primary font-bold text-lg hidden sm:inline-block">+100 Cardápios Anti Obesidade Infantil</span>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline leading-tight text-foreground">
            +100 Cardápios Anti Obesidade Infantil, para o seu filho ficar no <span className="text-primary">peso ideal</span> sem abrir mão do sabor!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
            O único material imprimível com +100 cardápios práticos, gostosos e aprovados por crianças que vai transformar a alimentação do seu filho em semanas.
          </p>
          
          <div className="flex flex-col items-center lg:items-start gap-4">
            <Button size="lg" className="h-16 px-8 text-lg font-bold rounded-full shadow-lg hover:bg-primary/90 transition-all group w-full sm:w-auto">
              QUERO AGORA — GARANTIR O MEU <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary" /> Acesso imediato</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary" /> Material para imprimir</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary" /> Garantia de 7 dias</span>
            </div>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-[400px] aspect-[4/5] bg-secondary rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border-4 border-white">
          {mockup ? (
            <Image 
              src={mockup.imageUrl} 
              alt={mockup.description} 
              fill 
              className="object-cover"
              data-ai-hint={mockup.imageHint}
            />
          ) : (
            <div className="text-primary/40 font-bold text-2xl">[MOCKUP DO PRODUTO]</div>
          )}
        </div>
      </div>
    </header>
  );
}
