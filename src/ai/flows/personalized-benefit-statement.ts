'use server';
/**
 * @fileOverview This file provides an AI flow to generate a personalized benefit statement for 'Cardápios FitKids'
 * based on a parent's specific challenge with their child's eating habits.
 *
 * - generatePersonalizedBenefitStatement - A function that generates the personalized benefit statement.
 * - PersonalizedBenefitStatementInput - The input type for the function.
 * - PersonalizedBenefitStatementOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PersonalizedBenefitStatementInputSchema = z.object({
  challenge: z.string().describe("A specific challenge a parent faces with their child's eating habits (e.g., 'fussy eater', 'lack of cooking time')."),
});
export type PersonalizedBenefitStatementInput = z.infer<typeof PersonalizedBenefitStatementInputSchema>;

const PersonalizedBenefitStatementOutputSchema = z.object({
  benefitStatement: z.string().describe("A concise, personalized message explaining how 'Cardápios FitKids' solves the specific challenge."),
});
export type PersonalizedBenefitStatementOutput = z.infer<typeof PersonalizedBenefitStatementOutputSchema>;

export async function generatePersonalizedBenefitStatement(input: PersonalizedBenefitStatementInput): Promise<PersonalizedBenefitStatementOutput> {
  return personalizedBenefitStatementFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedBenefitStatementPrompt',
  input: { schema: PersonalizedBenefitStatementInputSchema },
  output: { schema: PersonalizedBenefitStatementOutputSchema },
  prompt: `You are a marketing assistant for 'Cardápios FitKids', a product offering '+100 Cardápios Anti Obesidade Infantil' by Dra. Rayane.
Your goal is to create compelling, personalized benefit statements.

Product Information:
- Product Name: "+100 Cardápios Anti Obesidade Infantil"
- Creator: Dra. Rayane, nutricionista especializada em nutrição infantil e combate à obesidade.
- Core Promise: Seu filho no peso ideal sem sofrimento, sem briga na mesa e sem dieta complicada. Transformar a alimentação do seu filho em semanas.
- Key Features & Benefits:
  - +100 cardápios completos (café, almoço, lanche e jantar)
  - Cardápios organizados por faixa etária (1 a 12 anos)
  - Lista de compras semanal pronta para imprimir
  - Guia de substituições inteligentes (troca o ruim pelo saudável)
  - Cardápios especiais para festas e fins de semana
  - Dicas para crianças seletivas que recusam legumes
  - Tabela de porções por idade
  - Bônus: Planner semanal de refeições para imprimir
  - Práticos, gostosos e aprovados por crianças

Given the specific challenge a parent faces with their child's eating, craft a concise (2-3 sentences), personalized message highlighting how 'Cardápios FitKids' directly addresses and solves that challenge. Focus on empathy and practical solutions, emphasizing how the product makes healthy eating easy and enjoyable for both parent and child.

Challenge: {{{challenge}}}`,
});

const personalizedBenefitStatementFlow = ai.defineFlow(
  {
    name: 'personalizedBenefitStatementFlow',
    inputSchema: PersonalizedBenefitStatementInputSchema,
    outputSchema: PersonalizedBenefitStatementOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
