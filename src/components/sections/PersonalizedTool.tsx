"use client";

import { useState } from "react";
import { generatePersonalizedBenefitStatement } from "@/ai/flows/personalized-benefit-statement";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Loader2, Wand2 } from "lucide-react";

export function PersonalizedTool() {
  const [challenge, setChallenge] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    if (!challenge.trim()) return;
    setLoading(true);
    try {
      const { benefitStatement } = await generatePersonalizedBenefitStatement({ challenge });
      setResult(benefitStatement);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <Card className="max-w-3xl mx-auto overflow-hidden border border-primary/10 shadow-lg rounded-[2.5rem]">
          <div className="bg-primary/5 p-10 text-center border-b border-primary/5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs mb-6 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Recurso exclusivo com IA
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold font-headline mb-6 leading-tight">Veja como podemos ajudar o seu caso específico</CardTitle>
            <CardDescription className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed font-medium">
              Digite abaixo o seu maior desafio na alimentação do seu filho. Nossa IA vai te dar uma recomendação personalizada.
            </CardDescription>
          </div>
          
          <CardContent className="p-10 space-y-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                placeholder="Ex: ele não come legumes..." 
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
                className="h-14 text-base rounded-full border border-primary/10 focus-visible:ring-primary px-6 font-medium"
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              />
              <Button 
                onClick={handleGenerate} 
                disabled={loading || !challenge}
                className="h-14 px-8 text-base font-bold rounded-full shrink-0 gap-2"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                GERAR SOLUÇÃO
              </Button>
            </div>

            {result && (
              <div className="bg-secondary p-10 rounded-[2rem] border border-primary/5 animate-in fade-in slide-in-from-bottom-4 shadow-sm">
                <p className="text-base text-primary font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> Nossa recomendação personalizada:
                </p>
                <p className="text-lg font-medium leading-relaxed italic text-foreground/80">
                  "{result}"
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
