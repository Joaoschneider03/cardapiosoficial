
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
  - +100 cardápios completos: Refeições prontas e equilibradas para o dia todo, sem precisar pensar no que preparar.
  - Cardápios por faixa etária (1 a 12 anos): Planos adaptados para cada idade, respeitando necessidades e desenvolvimento infantil.
  - Lista de compras semanal: Tudo organizado para você comprar rápido, economizar e evitar desperdícios.
  - Guia de substituições inteligentes: Troque alimentos prejudiciais por opções saudáveis sem perder o sabor.
  - Cardápios para festas e fins de semana: Opções saudáveis e atrativas até nos momentos mais “diffíceis”.
  - Dicas para crianças seletivas: Estratégias práticas para fazer seu filho aceitar legumes e novos alimentos.
  - Tabela de porções por idade: Saiba exatamente quanto servir para evitar excessos e garantir equilíbrio.
  - Bônus: Planner semanal imprimível: Organize toda a alimentação da semana de forma simples e visual.
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
