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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-16">
          Mães que já transformaram a alimentação dos filhos
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="border-none shadow-xl bg-muted/30">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-14 h-14 border-2 border-primary">
                    <AvatarFallback className="bg-secondary text-primary font-bold text-xl">{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.location}</p>
                  </div>
                </div>
                
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                
                <p className="text-lg italic text-foreground/80 leading-relaxed">
                  "{t.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
