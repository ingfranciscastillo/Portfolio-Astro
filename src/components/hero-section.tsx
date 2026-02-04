"use client";

import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/header";
import { IconMail } from "@tabler/icons-react";
import { TypingAnimation } from "./ui/typing-animation";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <section className="py-20 lg:py-40">
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            <h1 className="max-w-3xl tracking-tighter">
              <span className="text-5xl font-bold md:text-7xl">
                Hola! Soy Francis Castillo.
              </span>

              <span className="relative mt-4 flex w-full justify-center overflow-hidden text-2xl md:pb-4 md:pt-1 md:text-4xl">
                <TypingAnimation
                  words={[
                    "Desarrollador Full Stack",
                    "Experto en React y Node.js",
                    "Transformo ideas en realidad",
                  ]}
                  loop
                />
              </span>
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed tracking-tight text-muted-foreground md:text-lg">
              Creo experiencias web de alto rendimiento con un enfoque en la
              usabilidad y el detalle. Desde la arquitectura del backend hasta
              el último píxel del frontend.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="gap-4">
                <a href="#proyectos">Ver proyectos</a>
              </Button>
              <Button variant="outline" asChild size="lg" className="gap-4">
                <a href="#contacto">
                  Contáctame <IconMail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
