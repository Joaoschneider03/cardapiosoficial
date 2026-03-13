import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Pricing() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Escolha o seu plano e comece hoje</h2>
          <p className="text-xl text-muted-foreground">Invista menos do que um lanche no shopping na saúde do seu filho</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Plano Essencial */}
          <Card className="border-border border-2 flex flex-col hover:scale-[1.02] transition-transform">
            <CardHeader className="text-center pb-0">
              <Badge variant="secondary" className="w-fit mx-auto mb-4">Básico</Badge>
              <CardTitle className="text-2xl font-bold">Essencial</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-6 p-8">
              <div className="text-center">
                <span className="text-4xl font-bold text-foreground">R$10,00</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> +100 cardápios completos</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Lista de compras semanal</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Guia de substituições</li>
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-0">
              <Button variant="outline" className="w-full h-14 text-lg font-bold border-primary text-primary hover:bg-primary/5 rounded-full">
                Quero o Essencial
              </Button>
            </CardFooter>
          </Card>

          {/* Plano Completo */}
          <Card className="border-primary border-4 flex flex-col relative shadow-2xl scale-105 z-10 hover:scale-[1.07] transition-transform bg-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-sm font-bold tracking-wider">
              MAIS ESCOLHIDO
            </div>
            <CardHeader className="text-center pb-0 pt-10">
              <CardTitle className="text-2xl font-bold text-primary">Completo</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-6 p-8">
              <div className="text-center space-y-1">
                <span className="text-muted-foreground line-through text-lg">R$47,00</span>
                <div className="text-5xl font-extrabold text-primary">R$19,90</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-5 h-5 text-primary" /> Tudo do Essencial +</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Cardápios para festas</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Tabela de porções por idade</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Dicas para crianças seletivas</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Bônus: Planner semanal</li>
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-0 flex flex-col gap-3">
              <Button className="w-full h-16 text-xl font-bold shadow-lg hover:shadow-primary/20 rounded-full group">
                QUERO O COMPLETO <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-center text-sm text-muted-foreground font-medium">
                Parcelado em até 12x de R$1,65
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
