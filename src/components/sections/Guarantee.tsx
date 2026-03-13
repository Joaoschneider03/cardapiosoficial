import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 bg-secondary rounded-[2rem] flex items-center justify-center mx-auto mb-4 rotate-3">
            <ShieldCheck className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-headline leading-tight">Garantia incondicional de 7 dias</h2>
          <p className="text-base text-muted-foreground leading-relaxed font-medium">
            Se por qualquer motivo você não ficar satisfeita com o material, basta nos enviar uma mensagem em até 7 dias após a compra e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. Temos certeza da transformação que este material trará.
          </p>
        </div>
      </div>
    </section>
  );
}
