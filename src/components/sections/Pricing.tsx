import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold font-headline leading-tight">Escolha a opção que mais te agrada! 👇👇</h2>
          <p className="text-base text-muted-foreground font-medium">Invista menos do que um lanche na saúde do seu filho</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto items-stretch">
          {/* Oferta Econômica */}
          <Card className="border-border border bg-white flex flex-col hover:shadow-md transition-shadow rounded-[2.5rem]">
            <CardHeader className="text-center pb-0 pt-10">
              <Badge variant="secondary" className="w-fit mx-auto mb-4 bg-muted text-muted-foreground">Básico</Badge>
              <CardTitle className="text-xl font-bold">Oferta Econômica</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-8 p-10">
              <div className="text-center">
                <span className="text-3xl font-bold text-foreground">R$9,90</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-bold text-primary">
                  <CheckCircle2 className="w-4 h-4" /> +100 Cardápios Anti Obesidade Infantil
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-foreground/70"><CheckCircle2 className="w-4 h-4 text-primary/50" /> Cardápios para festas</li>
                <li className="flex items-center gap-3 text-sm font-medium text-foreground/70"><CheckCircle2 className="w-4 h-4 text-primary/50" /> Tabela de porções</li>
                <li className="flex items-center gap-3 text-sm font-medium text-foreground/70"><CheckCircle2 className="w-4 h-4 text-primary/50" /> Dicas crianças seletivas</li>
                <li className="flex items-center gap-3 text-sm font-medium text-foreground/70"><CheckCircle2 className="w-4 h-4 text-primary/50" /> Bônus: Planner semanal</li>
              </ul>
            </CardContent>
            <CardFooter className="p-10 pt-0 flex flex-col items-center">
              <Button asChild className="w-full h-14 text-base font-bold shadow-md rounded-full group bg-primary hover:bg-primary/90 text-primary-foreground" suppressHydrationWarning>
                <a href="https://compraonlinesegurada.org.ua/c/973489252d" suppressHydrationWarning>
                  PEGAR AGORA! <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="mt-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Pagamento único!</p>
            </CardFooter>
          </Card>

          {/* Oferta Premium */}
          <Card className="border-primary border-2 flex flex-col relative shadow-xl z-10 bg-white rounded-[2.5rem] hover:scale-[1.02] transition-transform">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
              Recomendado
            </div>
            
            <CardHeader className="text-center pb-0 pt-12">
              <CardTitle className="text-xl font-bold text-primary">Oferta Premium</CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 space-y-8 p-10">
              <div className="text-center space-y-1">
                <span className="text-muted-foreground line-through text-base">R$47,00</span>
                <div className="text-4xl font-extrabold text-primary">R$19,90</div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-bold text-primary">
                  <CheckCircle2 className="w-4 h-4" /> +100 Cardápios Anti Obesidade Infantil
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-foreground/70"><CheckCircle2 className="w-4 h-4 text-primary/50" /> Cardápios para festas</li>
                <li className="flex items-center gap-3 text-sm font-medium text-foreground/70"><CheckCircle2 className="w-4 h-4 text-primary/50" /> Tabela de porções</li>
                <li className="flex items-center gap-3 text-sm font-medium text-foreground/70"><CheckCircle2 className="w-4 h-4 text-primary/50" /> Dicas crianças seletivas</li>
                <li className="flex items-center gap-3 text-sm font-medium text-foreground/70"><CheckCircle2 className="w-4 h-4 text-primary/50" /> Bônus: Planner semanal</li>
                <li className="flex items-center gap-3 text-sm font-bold text-primary">
                  <CheckCircle2 className="w-4 h-4" /> Acesso a novas atualizações
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-primary">
                  <CheckCircle2 className="w-4 h-4" /> Dinâmicas alimentares premium
                </li>
              </ul>
            </CardContent>
            
            <CardFooter className="p-10 pt-0 flex flex-col items-center">
              <Button asChild className="w-full h-14 text-base font-bold shadow-md rounded-full group bg-primary hover:bg-primary/90 text-primary-foreground" suppressHydrationWarning>
                <a href="https://compraonlinesegurada.org.ua/c/65ef092d91" suppressHydrationWarning>
                  PEGAR AGORA! <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="mt-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Pagamento único!</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
