import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "Ana Paula",
      location: "São Paulo — SP",
      text: "Meu filho perdeu 4kg em 2 meses sem reclamar da comida. Os cardápios são tão gostosos que ele nem percebeu que estava comendo saudável. Melhor investimento que fiz!",
      initials: "AP"
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
        <h2 className="text-2xl md:text-3xl font-bold font-headline text-center mb-20 max-w-2xl mx-auto leading-tight">
          Mães que já transformaram a alimentação dos filhos
        </h2>
        
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="border-none shadow-sm bg-muted/20 rounded-[2.5rem] hover:shadow-md transition-shadow overflow-hidden">
              <CardContent className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="flex flex-col items-center md:items-start gap-4 shrink-0 md:w-48">
                  <Avatar className="w-16 h-16 border-2 border-primary/20">
                    <AvatarFallback className="bg-secondary text-primary font-bold text-xl">{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-base leading-tight">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                  <div className="flex text-yellow-400 gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                
                <div className="flex-1 flex items-center">
                  <p className="text-base md:text-lg italic text-foreground/70 leading-relaxed font-medium">
                    "{t.text}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
