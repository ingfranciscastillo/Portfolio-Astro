import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import React from "react";

// Skill Icons
import { Astro } from "./ui/svgs/astro";
import { AstroDark } from "./ui/svgs/astroDark";
import { DrizzleOrmLight } from "./ui/svgs/drizzleOrmLight";
import { DrizzleOrmDark } from "./ui/svgs/drizzleOrmDark";
import { Typescript } from "./ui/svgs/typescript";
import { Tailwindcss } from "./ui/svgs/tailwindcss";
import { Expressjs } from "./ui/svgs/expressjs";
import { ExpressjsDark } from "./ui/svgs/expressjsDark";
import { NextjsLogoLight } from "./ui/svgs/nextjsLogoLight";
import { NextjsLogoDark } from "./ui/svgs/nextjsLogoDark";
import { Hono } from "./ui/svgs/hono";
import { Nestjs } from "./ui/svgs/nestjs";
import { Nuxt } from "./ui/svgs/nuxt";
import { Shopify } from "./ui/svgs/shopify";
import { Strapi } from "./ui/svgs/strapi";
import { Mongodb } from "./ui/svgs/mongodb";
import { TursoLight } from "./ui/svgs/tursoLight";
import { TursoDark } from "./ui/svgs/tursoDark";
import { VercelWordmark } from "./ui/svgs/vercelWordmark";
import { VercelWordmarkDark } from "./ui/svgs/vercelWordmarkDark";
import { ReactLight } from "./ui/svgs/reactLight";
import { ReactDark } from "./ui/svgs/reactDark";
import { Preact } from "./ui/svgs/preact";
import { Reactrouter } from "./ui/svgs/reactrouter";
import { ClerkLight } from "./ui/svgs/clerkLight";
import { ClerkDark } from "./ui/svgs/clerkDark";
import { BetterAuthLight } from "./ui/svgs/betterAuthLight";
import { BetterAuthDark } from "./ui/svgs/betterAuthDark";
import { Upstash } from "./ui/svgs/upstash";
import { Motion } from "./ui/svgs/motion";
import { MotionDark } from "./ui/svgs/motionDark";
import { ShadcnUi } from "./ui/svgs/shadcnUi";
import { ShadcnUiDark } from "./ui/svgs/shadcnUiDark";
import { Canva } from "./ui/svgs/canva";
import { Zod } from "./ui/svgs/zod";
import { Neon } from "./ui/svgs/neon";
import { Redux } from "./ui/svgs/redux";
import { Postgresql } from "./ui/svgs/postgresql";
import { Git } from "./ui/svgs/git";
import { Docker } from "./ui/svgs/docker";
import { Prisma } from "./ui/svgs/prisma";
import { PrismaDark } from "./ui/svgs/prismaDark";
import { Svelte } from "./ui/svgs/svelte";
import { Netlify } from "./ui/svgs/netlify";
import { Redis } from "./ui/svgs/redis";
import { Figma } from "./ui/svgs/figma";
import { N8n } from "./ui/svgs/n8n";
import { Firebase } from "./ui/svgs/firebase";
import { Vitest } from "./ui/svgs/vitest";
import { Vite } from "./ui/svgs/vite";
import { SanityWordmarkLight } from "./ui/svgs/sanityWordmarkLight";
import { SanityWordmarkDark } from "./ui/svgs/sanityWordmarkDark";
import { Golang } from "./ui/svgs/golang";
import { GolangDark } from "./ui/svgs/golangDark";

// Social Icons
import { GithubLight } from "./ui/svgs/githubLight";
import { GithubDark } from "./ui/svgs/githubDark";
import { Instagram } from "./ui/svgs/instagram";
import { InstagramDark } from "./ui/svgs/instagramDark";
import { Linkedin } from "./ui/svgs/linkedin";
import { X } from "./ui/svgs/x";
import { XDark } from "./ui/svgs/xDark";
import { Threads } from "./ui/svgs/threads";
import { ThreadsDark } from "./ui/svgs/threadsDark";
import ExperienceTimeline from "./Timeline";
import { Section } from "./Section";

const skills = [
  { name: "Astro", icon: Astro, darkIcon: AstroDark, category: "frontend" },
  {
    name: "Drizzle ORM",
    icon: DrizzleOrmLight,
    darkIcon: DrizzleOrmDark,
    category: "database",
  },
  { name: "TypeScript", icon: Typescript, category: "frontend" },
  { name: "TailwindCSS", icon: Tailwindcss, category: "frontend" },
  {
    name: "Express.js",
    icon: Expressjs,
    darkIcon: ExpressjsDark,
    category: "backend",
  },
  {
    name: "Next.js",
    icon: NextjsLogoLight,
    darkIcon: NextjsLogoDark,
    category: "frontend",
  },
  { name: "Hono", icon: Hono, category: "backend" },
  { name: "NestJS", icon: Nestjs, category: "backend" },
  { name: "Nuxt", icon: Nuxt, category: "frontend" },
  { name: "Shopify", icon: Shopify, category: "cms" },
  { name: "Strapi", icon: Strapi, category: "cms" },
  { name: "MongoDB", icon: Mongodb, category: "database" },
  {
    name: "Turso",
    icon: TursoLight,
    darkIcon: TursoDark,
    category: "database",
  },
  {
    name: "Vercel",
    icon: VercelWordmark,
    darkIcon: VercelWordmarkDark,
    category: "hosting",
  },
  {
    name: "React",
    icon: ReactLight,
    darkIcon: ReactDark,
    category: "frontend",
  },
  { name: "Preact", icon: Preact, category: "frontend" },
  { name: "React Router", icon: Reactrouter, category: "frontend" },
  {
    name: "Clerk",
    icon: ClerkLight,
    darkIcon: ClerkDark,
    category: "frontend",
  },
  {
    name: "BetterAuth",
    icon: BetterAuthLight,
    darkIcon: BetterAuthDark,
    category: "frontend",
  },
  { name: "Upstash", icon: Upstash, category: "backend" },
  { name: "Motion", icon: Motion, darkIcon: MotionDark, category: "frontend" },
  {
    name: "shadcn/ui",
    icon: ShadcnUi,
    darkIcon: ShadcnUiDark,
    category: "frontend",
  },
  { name: "Canva", icon: Canva, category: "design" },
  { name: "Zod", icon: Zod, category: "tools" },
  { name: "Neon", icon: Neon, category: "database" },
  { name: "Redux", icon: Redux, category: "tools" },
  { name: "PostgreSQL", icon: Postgresql, category: "database" },
  { name: "Git", icon: Git, category: "tools" },
  { name: "Docker", icon: Docker, category: "tools" },
  { name: "Prisma", icon: Prisma, darkIcon: PrismaDark, category: "database" },
  { name: "Svelte", icon: Svelte, category: "frontend" },
  { name: "Netlify", icon: Netlify, category: "hosting" },
  { name: "Redis", icon: Redis, category: "database" },
  { name: "Figma", icon: Figma, category: "design" },
  { name: "n8n", icon: N8n, category: "tools" },
  { name: "Firebase", icon: Firebase, category: "backend" },
  {
    name: "Sanity",
    icon: SanityWordmarkLight,
    darkIcon: SanityWordmarkDark,
    category: "cms",
  },
  { name: "Vite", icon: Vite, category: "tools" },
  { name: "Vitest", icon: Vitest, category: "tools" },
  { name: "Golang", icon: Golang, darkIcon: GolangDark, category: "backend" },
];

const social = [
  {
    name: "GitHub",
    icon: GithubLight,
    darkIcon: GithubDark,
    link: "https://github.com/ingfranciscastillo/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    darkIcon: InstagramDark,
    link: "https://www.instagram.com/ingfranciscastillo/",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/franciscocastillo/",
  },
  {
    name: "X (Twitter)",
    icon: X,
    darkIcon: XDark,
    link: "https://x.com/ingfranciscas",
  },
  {
    name: "Threads",
    icon: Threads,
    darkIcon: ThreadsDark,
    link: "https://www.threads.com/@ingfranciscastillo",
  },
];

const AboutMeSection = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="mx-auto max-w-3xl">
        <p className="text-pretty break leading-8 text-lg mb-8">
          ¡Hola! Soy Francis. 👋 Desarrollador Fullstack con la mirada puesta en
          el detalle y el rendimiento. Me muevo con agilidad entre el ecosistema
          de React y la modernidad de Nuxt, lo que me permite elegir la mejor
          herramienta para cada desafío técnico.
        </p>
        <p className="text-pretty break leading-8 text-lg mb-8">
          Trabajo de forma independiente, transformando requisitos técnicos en
          experiencias digitales escalables y de alto rendimiento. Si buscas una
          mezcla de arquitectura sólida y diseño impecable, estás en el lugar
          correcto.
        </p>
        <p className="text-pretty break leading-8 text-lg mb-8">
          Mi stack técnico se basa en la velocidad y la seguridad. En el
          backend, construyo APIs ligeras y ultrarrápidas con{" "}
          <span className="text-foreground font-semibold">Hono</span> y{" "}
          <span className="text-foreground font-semibold">NestJS</span>,
          optimizando el acceso a datos mediante{" "}
          <span className="text-foreground font-semibold">Drizzle ORM</span> y{" "}
          <span className="text-foreground font-semibold">Prisma</span>. Soy un
          firme defensor de la integridad del código, por lo que utilizo{" "}
          <span className="text-foreground font-semibold">TypeScript</span> y{" "}
          <span className="text-foreground font-semibold">Zod</span> para
          garantizar aplicaciones robustas desde la base.
        </p>
        <p className="text-pretty break leading-8 text-lg mb-8">
          Más allá del código, domino el ecosistema de datos moderno con{" "}
          <span className="text-foreground font-semibold">PostgreSQL</span>,{" "}
          <span className="text-foreground font-semibold">Turso</span> y{" "}
          <span className="text-foreground font-semibold">Supabase</span>,
          aprovechando herramientas como{" "}
          <span className="text-foreground font-semibold">Redis</span> para el
          almacenamiento en caché de alto rendimiento. Todo esto lo orquesto en
          entornos locales con{" "}
          <span className="text-foreground font-semibold">Docker</span> y lo
          despliego con confianza en{" "}
          <span className="text-foreground font-semibold">Vercel</span> o{" "}
          <span className="text-foreground font-semibold">Netlify</span>,
          asegurando que cada proyecto sea escalable, accesible y esté
          optimizado para el mundo real.
        </p>
        <p className="text-pretty break leading-8 text-lg mb-8">
          Mi enfoque actual se centra en{" "}
          <span className="text-foreground font-semibold">
            democratizar la tecnología compleja
          </span>
          , desarrollando soluciones que van desde{" "}
          <span className="text-foreground font-semibold">
            tutores pedagógicos con IA
          </span>{" "}
          hasta
          <span className="text-foreground font-semibold">
            generadores automatizados de documentos legales
          </span>
          . Mi objetivo es convertir la potencia de los modelos de lenguaje en
          herramientas prácticas,{" "}
          <span className="text-foreground font-semibold">
            accesibles y seguras
          </span>
          para el mundo real.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 text-2xl font-semibold">Habilidades</h3>
          <div className="flex items-center gap-4 flex-wrap">
            <h3 className="text-xl font-semibold my-3 block w-full">
              Frontend
            </h3>
            {skills.map(
              (skill) =>
                skill.category === "frontend" && (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <span>
                        {isDarkMode && skill.darkIcon
                          ? skill.darkIcon({ className: "w-8 h-8" })
                          : skill.icon({ className: "w-8 h-8" })}
                        <span className="sr-only">{skill.name}</span>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                )
            )}
            <h3 className="text-xl font-semibold my-3 block w-full">Backend</h3>
            {skills.map(
              (skill) =>
                skill.category === "backend" && (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <span>
                        {isDarkMode && skill.darkIcon
                          ? skill.darkIcon({ className: "w-8 h-8" })
                          : skill.icon({ className: "w-8 h-8" })}
                        <span className="sr-only">{skill.name}</span>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                )
            )}
            <h3 className="text-xl font-semibold my-3 block w-full">
              Base de datos
            </h3>
            {skills.map(
              (skill) =>
                skill.category === "database" && (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <span>
                        {isDarkMode && skill.darkIcon
                          ? skill.darkIcon({ className: "w-8 h-8" })
                          : skill.icon({ className: "w-8 h-8" })}
                        <span className="sr-only">{skill.name}</span>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                )
            )}
            <h3 className="text-xl font-semibold my-3 block w-full">Cms</h3>
            {skills.map(
              (skill) =>
                skill.category === "cms" && (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <span>
                        {isDarkMode && skill.darkIcon
                          ? skill.darkIcon({ className: "w-8 h-8" })
                          : skill.icon({ className: "w-8 h-8" })}
                        <span className="sr-only">{skill.name}</span>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                )
            )}
            <h3 className="text-xl font-semibold my-3 block w-full">
              Herramientas
            </h3>
            {skills.map(
              (skill) =>
                skill.category === "tools" && (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <span>
                        {isDarkMode && skill.darkIcon
                          ? skill.darkIcon({ className: "w-8 h-8" })
                          : skill.icon({ className: "w-8 h-8" })}
                        <span className="sr-only">{skill.name}</span>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                )
            )}

            <h3 className="text-xl font-semibold my-3 block w-full">Diseño</h3>
            {skills.map(
              (skill) =>
                skill.category === "design" && (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <span>
                        {isDarkMode && skill.darkIcon
                          ? skill.darkIcon({ className: "w-8 h-8" })
                          : skill.icon({ className: "w-8 h-8" })}
                        <span className="sr-only">{skill.name}</span>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                )
            )}

            <h3 className="text-xl font-semibold my-3 block w-full">Hosting</h3>
            {skills.map(
              (skill) =>
                skill.category === "hosting" && (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <span>
                        {isDarkMode && skill.darkIcon
                          ? skill.darkIcon({ className: "w-8 h-8" })
                          : skill.icon({ className: "w-8 h-8" })}
                        <span className="sr-only">{skill.name}</span>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                )
            )}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-semibold">Redes sociales</h3>
          <div className="flex items-center gap-4 flex-wrap">
            {social.map((social) => (
              <Tooltip key={social.name}>
                <TooltipTrigger asChild>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {isDarkMode && social.darkIcon
                      ? social.darkIcon({ className: "w-8 h-8" })
                      : social.icon({ className: "w-8 h-8" })}
                    <span className="sr-only">{social.name}</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}

            <div className="mt-10">
              <ExperienceTimeline />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMeSection;
