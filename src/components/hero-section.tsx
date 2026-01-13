"use client";

import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/header";
import { IconMail } from "@tabler/icons-react";
import { TypingAnimation } from "./ui/typing-animation";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="w-full">
            <div className="container mx-auto">
              <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
                <div className="flex gap-4 flex-col">
                  <h1 className="max-w-2xl tracking-tighter text-center font-regular">
                    <span className="text-5xl md:text-7xl font-bold">
                      Hola! Soy Francis Castillo.
                    </span>
                    <span className="text-2xl md:text-4xl text-foreground relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
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

                  <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                    Creo experiencias web de alto rendimiento con un enfoque en
                    la usabilidad y el detalle. Desde la arquitectura del
                    backend hasta el último píxel del frontend.
                  </p>
                </div>
                <div className="flex flex-row gap-3">
                  <Button asChild size="lg" className="gap-4" variant="default">
                    <a href="#proyectos">Ver proyectos</a>
                  </Button>
                  <Button
                    variant={"outline"}
                    asChild
                    size="lg"
                    className="gap-4"
                  >
                    <a href="#contacto">
                      Contactame!
                      <IconMail className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
