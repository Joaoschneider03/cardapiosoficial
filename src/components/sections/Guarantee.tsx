import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8">
            <ShieldCheck className="w-16 h-16 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Garantia incondicional de 7 dias</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Se por qualquer motivo você não ficar satisfeita com o material, basta nos enviar uma mensagem em até 7 dias após a compra e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. Porque temos certeza de que esse material vai transformar a alimentação do seu filho.
          </p>
        </div>
      </div>
    </section>
  );
}
