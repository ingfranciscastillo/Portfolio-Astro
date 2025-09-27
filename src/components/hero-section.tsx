"use client";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "@/components/header";
import { IconMail } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Frontend", "Diseñador UI/UX", "Backend"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="w-full">
            <div className="container mx-auto">
              <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
                <div className="flex gap-4 flex-col">
                  <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                    <span className="text-spektr-cyan-50">
                      Hola! Soy Francis Castillo.
                    </span>
                    <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                      &nbsp;
                      {titles.map((title, index) => (
                        <motion.span
                          key={index}
                          className="absolute font-semibold"
                          initial={{ opacity: 0, y: "-100" }}
                          transition={{ type: "spring", stiffness: 50 }}
                          animate={
                            titleNumber === index
                              ? {
                                  y: 0,
                                  opacity: 1,
                                }
                              : {
                                  y: titleNumber > index ? -150 : 150,
                                  opacity: 0,
                                }
                          }
                        >
                          {title}
                        </motion.span>
                      ))}
                    </span>
                  </h1>

                  <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                    Transformo ideas en experiencias digitales. Desarrollo
                    interfaces modernas, funcionales y optimizadas para cautivar
                    a tus usuarios. ¡Hagamos realidad tu próximo proyecto web!
                  </p>
                </div>
                <div className="flex flex-row gap-3">
                  <Button asChild size="lg" className="gap-4" variant="outline">
                    <a href="#proyectos">Ver proyectos</a>
                  </Button>
                  <Button asChild size="lg" className="gap-4">
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
