import { Hero } from "@/components/sections/Hero";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { Testimonials } from "@/components/sections/Testimonials";
import { AboutCreator } from "@/components/sections/AboutCreator";
import { Pricing } from "@/components/sections/Pricing";
import { Guarantee } from "@/components/sections/Guarantee";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { PersonalizedTool } from "@/components/sections/PersonalizedTool";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TargetAudience />
      <WhatYouGet />
      <Testimonials />
      <PersonalizedTool />
      <AboutCreator />
      <Pricing />
      <Guarantee />
      <FAQSection />
      <Footer />
    </main>
  );
}
