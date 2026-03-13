import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TargetAudience() {
  const points = [
    "Seu filho está acima do peso e você precisa de um caminho claro para começar",
    "Ele recusa alimentos saudáveis e as refeições viraram um momento de estresse",
    "Você tem uma rotina corrida e precisa de cardápios práticos e rápidos",
    "Você quer garantir que seu filho cresça com saúde, energia e boa autoestima"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-headline mb-12 text-primary max-w-2xl mx-auto leading-tight">
          Esse material foi feito para você se…
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {points.map((text, idx) => (
            <Card key={idx} className="border-primary/30 border-2 shadow-sm bg-secondary/50 hover:bg-secondary/70 transition-colors rounded-[2.5rem] overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center gap-4 text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-primary/10">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm md:text-base font-bold text-foreground/80 leading-relaxed">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
