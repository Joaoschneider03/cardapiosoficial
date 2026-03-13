import { Hero } from "@/components/sections/Hero";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { Testimonials } from "@/components/sections/Testimonials";
import { AboutCreator } from "@/components/sections/AboutCreator";
import { Pricing } from "@/components/sections/Pricing";
import { Guarantee } from "@/components/sections/Guarantee";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TargetAudience />
      <WhatYouGet />
      <Testimonials />
      <AboutCreator />
      <Pricing />
      <Guarantee />
      <FAQSection />
      <Footer />
    </main>
  );
}
