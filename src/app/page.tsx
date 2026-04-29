
import { Hero } from "@/components/sections/Hero";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { Testimonials } from "@/components/sections/Testimonials";
import { AboutCreator } from "@/components/sections/AboutCreator";
import { Pricing } from "@/components/sections/Pricing";
import { PremiumBonus } from "@/components/sections/PremiumBonus";
import { Guarantee } from "@/components/sections/Guarantee";
import { WhatsAppTestimonials } from "@/components/sections/WhatsAppTestimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { ExitInterceptor } from "@/components/ExitInterceptor";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TargetAudience />
      <WhatYouGet />
      <Testimonials />
      <AboutCreator />
      <Pricing />
      <PremiumBonus />
      <Guarantee />
      <WhatsAppTestimonials />
      <FAQSection />
      <Footer />
      
      {/* Componente invisível que intercepta o botão de voltar e redireciona para /oferta-especial */}
      <ExitInterceptor />
    </main>
  );
}
