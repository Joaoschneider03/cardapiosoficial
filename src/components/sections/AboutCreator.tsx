import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function AboutCreator() {
  const photo = PlaceHolderImages.find(img => img.id === "dra-rayane");

  return (
    <section className="py-24 bg-white border-t border-secondary/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-4xl mx-auto">
          <div className="w-56 h-56 md:w-64 md:h-64 relative shrink-0">
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -rotate-6"></div>
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-2 border-primary/10 shadow-sm flex items-center justify-center bg-secondary rotate-3 transition-transform hover:rotate-0">
              {photo ? (
                <Image 
                  src={photo.imageUrl} 
                  alt={photo.description} 
                  fill 
                  className="object-cover"
                  data-ai-hint={photo.imageHint}
                />
              ) : (
                <span className="text-4xl font-bold text-primary">DR</span>
              )}
            </div>
          </div>
          
          <div className="space-y-8 text-center lg:text-left flex-1">
            <h2 className="text-2xl md:text-3xl font-bold font-headline leading-tight">
              Quem está por trás desse material?
            </h2>
            <div className="space-y-5 text-base text-muted-foreground leading-relaxed font-medium">
              <p>
                Sou a Dra. Rayane, nutricionista especializada em nutrição infantil e combate à obesidade em crianças.
              </p>
              <p>
                Ao longo dos anos atendendo famílias, percebi que o maior obstáculo não era a falta de informação — era a falta de praticidade.
              </p>
              <p>
                Criei este material para colocar na mão das mães exatamente o que funciona: cardápios testados, aprovados pelas crianças e simples de preparar.
              </p>
            </div>
            <div className="pt-2">
              <Badge variant="outline" className="text-primary border-primary/20 px-5 py-2 text-xs font-bold rounded-full bg-primary/5">
                ✓ Nutricionista Especializada
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
