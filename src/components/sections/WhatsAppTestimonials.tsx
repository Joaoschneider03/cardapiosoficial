
"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function WhatsAppTestimonials() {
  const images = [
    PlaceHolderImages.find((img) => img.id === "whatsapp-1"),
    PlaceHolderImages.find((img) => img.id === "whatsapp-2"),
    PlaceHolderImages.find((img) => img.id === "whatsapp-3"),
  ].filter(Boolean);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-headline leading-tight">
            O que as mães estão comentando no WhatsApp...
          </h2>
          <p className="text-sm text-muted-foreground font-medium">
            Resultados reais de quem já está aplicando os cardápios.
          </p>
        </div>

        <div className="max-w-[280px] md:max-w-xl mx-auto relative px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((img, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/2">
                  <div className="relative aspect-[9/16] w-full rounded-[2rem] overflow-hidden shadow-xl border-4 border-secondary/20 bg-secondary/10">
                    <Image
                      src={img!.imageUrl}
                      alt={img!.description}
                      fill
                      className="object-cover"
                      data-ai-hint={img!.imageHint}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 border-primary/20 text-primary hover:bg-primary/5" />
              <CarouselNext className="-right-12 border-primary/20 text-primary hover:bg-primary/5" />
            </div>
            {/* Indicadores Mobile */}
            <div className="flex md:hidden justify-center gap-2 mt-8">
               <CarouselPrevious className="relative translate-y-0 left-0 border-primary/20 text-primary" />
               <CarouselNext className="relative translate-y-0 right-0 border-primary/20 text-primary" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
