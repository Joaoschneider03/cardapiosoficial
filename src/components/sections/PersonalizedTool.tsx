"use client";

import { useState } from "react";
import { generatePersonalizedBenefitStatement } from "@/ai/flows/personalized-benefit-statement";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto overflow-hidden border-2 border-primary/20 shadow-2xl rounded-3xl">
          <div className="bg-primary/5 p-8 text-center border-b border-primary/10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
              <Sparkles className="w-4 h-4" /> RECURSO EXCLUSIVO COM IA
            </div>
            <CardTitle className="text-3xl font-bold font-headline mb-4">Veja como podemos ajudar o seu caso específico</CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              Digite abaixo o seu maior desafio na alimentação do seu filho (ex: "ele só come macarrão", "não tenho tempo de cozinhar", "recusa legumes").
            </CardDescription>
          </div>
          
          <CardContent className="p-8 space-y-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                placeholder="Qual o seu maior desafio hoje?" 
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
                className="h-14 text-lg rounded-xl border-2 focus-visible:ring-primary"
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              />
              <Button 
                onClick={handleGenerate} 
                disabled={loading || !challenge}
                className="h-14 px-8 text-lg font-bold rounded-xl shrink-0 gap-2"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Wand2 className="w-5 h-5" />}
                GERAR SOLUÇÃO
              </Button>
            </div>

            {result && (
              <div className="bg-secondary/50 p-8 rounded-2xl border-2 border-primary/10 animate-in fade-in slide-in-from-bottom-4">
                <p className="text-xl text-primary font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6" /> Nossa recomendação personalizada:
                </p>
                <p className="text-2xl font-medium leading-relaxed italic text-foreground/90">
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
