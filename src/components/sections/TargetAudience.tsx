import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TargetAudience() {
  const points = [
    "Seu filho está acima do peso e você não sabe por onde começar",
    "Você tenta oferecer comida saudável mas ele recusa tudo",
    "Você não tem tempo para cozinhar receitas complicadas",
    "Quer tirar os ultraprocessados da rotina sem drama",
    "Já tentou dietas e não funcionou porque a família não aderiu",
    "Quer ver seu filho com mais energia, saúde e autoestima"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 text-primary">
          Esse material foi feito para você se…
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((text, idx) => (
            <Card key={idx} className="border-secondary border-2 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-lg font-medium text-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
