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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-headline mb-16 text-primary max-w-2xl mx-auto leading-tight">
          Esse material foi feito para você se…
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((text, idx) => (
            <Card key={idx} className="border-secondary/50 border shadow-none bg-secondary/20 hover:bg-secondary/40 transition-colors rounded-[2rem]">
              <CardContent className="p-8 flex flex-col items-center gap-4 text-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                </div>
                <p className="text-base font-medium text-foreground/80 leading-relaxed">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
