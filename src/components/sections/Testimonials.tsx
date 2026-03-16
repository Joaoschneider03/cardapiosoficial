import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function Testimonials() {
  const testimonials = [
    {
      name: "Ana Paula",
      location: "São Paulo — SP",
      text: "Meu filho perdeu 4kg em 2 meses sem reclamar da comida. Os cardápios são tão gostosos que ele nem percebeu que estava comendo saudável. Melhor investimento que fiz!",
      initials: "AP",
      imageId: "testimonial-ana-paula"
    },
    {
      name: "Carla Mendes",
      location: "Belo Horizonte — MG",
      text: "Finalmente um material que funciona na prática. Imprimi, coloquei na geladeira e agora a semana toda está planejada. Minha filha já pediu para repetir vários pratos!",
      initials: "CM"
    },
    {
      name: "Fernanda Souza",
      location: "Curitiba — PR",
      text: "O pediatra ficou surpreso com a melhora em 6 semanas. A tabela de porções por idade mudou tudo pra mim. Recomendo para toda mãe!",
      initials: "FS"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-2xl md:text-4xl font-extrabold font-headline leading-tight text-foreground">
            Mães que já transformaram a alimentação dos filhos
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-medium">
            Veja os resultados reais de famílias que recuperaram a saúde e o prazer de comer bem.
          </p>
        </div>
        
        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => {
            const imageData = t.imageId ? PlaceHolderImages.find(img => img.id === t.imageId) : null;

            return (
              <Card key={idx} className="border border-secondary shadow-sm bg-white rounded-[3rem] hover:shadow-md transition-shadow overflow-hidden">
                <CardContent className="p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
                  <div className="flex flex-col items-center md:items-start gap-4 shrink-0">
                    <div className="w-40 h-52 md:w-48 md:h-64 relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl bg-secondary flex items-center justify-center rotate-2 hover:rotate-0 transition-transform duration-300">
                      {imageData ? (
                        <Image 
                          src={imageData.imageUrl} 
                          alt={imageData.description} 
                          fill 
                          className="object-cover"
                          data-ai-hint={imageData.imageHint}
                        />
                      ) : (
                        <span className="text-primary font-bold text-5xl opacity-30">{t.initials}</span>
                      )}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-lg leading-tight">{t.name}</h4>
                      <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">{t.location}</p>
                      <div className="flex text-yellow-400 gap-0.5 justify-center md:justify-start pt-1">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex items-center">
                    <div className="relative">
                      <span className="text-primary/10 text-8xl absolute -top-12 -left-6 font-serif pointer-events-none italic select-none">“</span>
                      <p className="text-base md:text-xl italic text-foreground/80 leading-relaxed font-medium relative z-10">
                        {t.text}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}