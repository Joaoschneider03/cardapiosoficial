import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function AboutCreator() {
  const photo = PlaceHolderImages.find(img => img.id === "dra-rayane");

  return (
    <section className="py-20 bg-white border-t-2 border-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="w-64 h-64 md:w-80 md:h-80 relative shrink-0">
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-2xl flex items-center justify-center bg-secondary">
              {photo ? (
                <Image 
                  src={photo.imageUrl} 
                  alt={photo.description} 
                  fill 
                  className="object-cover"
                  data-ai-hint={photo.imageHint}
                />
              ) : (
                <span className="text-5xl font-bold text-primary">DR</span>
              )}
            </div>
          </div>
          
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Quem está por trás desse material?
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sou a Dra. Rayane, nutricionista especializada em nutrição infantil e combate à obesidade em crianças.
              </p>
              <p>
                Ao longo dos anos atendendo famílias, percebi que o maior obstáculo não era a falta de informação — era a falta de praticidade.
              </p>
              <p>
                Criei os +100 Cardápios Anti Obesidade Infantil para colocar na mão das mães exatamente o que funciona: cardápios testados, aprovados pelas crianças e simples de preparar. Sem enrolação, sem receita complicada, sem briga na mesa.
              </p>
            </div>
            <Badge variant="outline" className="text-primary border-primary px-4 py-2 text-md font-bold rounded-full">
              ✓ Nutricionista | CRN XXXXX
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
