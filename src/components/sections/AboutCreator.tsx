import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function AboutCreator() {
  const photo = PlaceHolderImages.find(img => img.id === "dra-rayane");

  return (
    <section className="py-24 bg-white border-t border-secondary/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Espaço para imagem: Quadrado e Estático */}
          <div className="w-64 h-64 md:w-72 md:h-72 relative shrink-0 rounded-2xl overflow-hidden shadow-md border border-primary/10 bg-secondary">
            {photo ? (
              <Image 
                src={photo.imageUrl} 
                alt={photo.description} 
                fill 
                className="object-cover"
                data-ai-hint={photo.imageHint}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl font-bold text-primary opacity-20">DR</span>
              </div>
            )}
          </div>
          
          <div className="space-y-8 text-center md:text-left flex-1 py-2">
            <h2 className="text-2xl md:text-4xl font-bold font-headline leading-tight text-foreground">
              Quem está por trás desse material?
            </h2>
            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
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
              <Badge variant="outline" className="text-primary border-primary/20 px-6 py-2.5 text-sm font-bold rounded-full bg-primary/5">
                ✓ Nutricionista Especializada
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
