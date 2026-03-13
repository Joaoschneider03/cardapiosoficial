import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 py-12 md:py-20 flex flex-col items-center">
        <div className="max-w-3xl text-center space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-headline leading-tight text-foreground">
            <span className="text-primary">+100 Cardápios Anti Obesidade Infantil,</span> para o seu filho ficar no peso ideal sem abrir mão do sabor!
          </h1>
          <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed font-medium">
            O único material imprimível com +100 cardápios práticos, gostosos e aprovados por crianças que vai transformar a alimentação do seu filho em semanas.
          </p>
          
          <div className="relative w-full max-w-2xl mx-auto aspect-[16/10] my-8 animate-in fade-in zoom-in-95 duration-700">
            <Image 
              src="https://i.postimg.cc/C1M5QdfY/mockup-pagina.png" 
              alt="Mockup principal dos cardápios FitKids"
              fill
              className="object-contain"
              data-ai-hint="kids nutrition"
              priority
            />
          </div>
          
          <div className="flex flex-col items-center gap-6 pt-2">
            <Button asChild size="lg" className="h-14 px-8 text-base font-bold rounded-full shadow-md hover:bg-primary/90 transition-all group w-fit min-w-[200px]">
              <a href="#pricing">
                Pegar agora! <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
