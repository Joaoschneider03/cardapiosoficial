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
        
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="border-none shadow-sm bg-muted/20 rounded-[2rem] hover:shadow-md transition-shadow">
              <CardContent className="p-10 space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-secondary text-primary font-bold text-base">{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-base">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </div>
                
                <div className="flex text-yellow-400 gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                
                <p className="text-base italic text-foreground/70 leading-relaxed">
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
