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
import { Wordpress } from "./ui/svgs/wordpress";
import { Vercel } from "./ui/svgs/vercel";
import { VercelDark } from "./ui/svgs/vercelDark";
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
import { MochaLight } from "./ui/svgs/mochaLight";
import { MochaDark } from "./ui/svgs/mochaDark";
import { Supabase } from "./ui/svgs/supabase";

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
  { name: "WordPress", icon: Wordpress, category: "cms" },
  {
    name: "Vercel",
    icon: Vercel,
    darkIcon: VercelDark,
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
  { name: "Mocha", icon: MochaLight, darkIcon: MochaDark, category: "tools" },
  { name: "Supabase", icon: Supabase, category: "database" },
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
    <section id="sobre-mi" className="py-16 md:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        <h2 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">
          Sobre mí
        </h2>
        <div>
          <p
            data-aos="fade-left"
            data-aos-delay="300"
            className="text-balance break leading-8 text-xl mb-8"
          >
            Hola, mi nombre es Francis. 🤗 Soy un desarrollador frontEnd
            apasionado por crear experiencias web atractivas y funcionales. Mi
            enfoque se centra en combinar diseño y tecnología para construir
            interfaces intuitivas que cumplan con las necesidades de los
            usuarios.
          </p>
          <p
            data-aos="fade-left"
            data-aos-delay="300"
            className="text-balance break leading-8 text-xl mb-8"
          >
            Trabajo de manera colaborativa con diseñadores y otros
            desarrolladores para transformar conceptos en productos finales.
            Siempre busco mejorar mis habilidades y mantenerme actualizado con
            las últimas tendencias y tecnologías del sector.
          </p>
          <p
            data-aos="fade-left"
            data-aos-delay="300"
            className="text-balance break leading-8 text-xl mb-8"
          >
            Mi objetivo es seguir desarrollando proyectos desafiantes que no
            solo cumplan con estándares técnicos, sino que también proporcionen
            una experiencia de usuario excepcional. Estoy comprometido con la
            calidad del código y la optimización del rendimiento, ayudando a las
            empresas a alcanzar sus metas digitales.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-20">
            <div className="mb-6">
              <h2
                data-aos="fade-right"
                data-aos-delay="300"
                className="text-2xl font-semibold mb-6"
              >
                Habilidades.
              </h2>
              <div
                data-aos="fade-right"
                data-aos-delay="300"
                className="flex items-center gap-4 flex-wrap"
              >
                <h3
                  data-aos="fade-right"
                  data-aos-delay="350"
                  className="text-xl font-semibold my-3 block w-full"
                >
                  Frontend
                </h3>
                {skills.map(
                  (skill) =>
                    skill.category === "frontend" && (
                      <Tooltip
                        key={skill.name}
                        data-aos="fade-right"
                        data-aos-delay="400"
                      >
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
                <h3
                  data-aos="fade-right"
                  data-aos-delay="350"
                  className="text-xl font-semibold my-3 block w-full"
                >
                  Backend
                </h3>
                {skills.map(
                  (skill) =>
                    skill.category === "backend" && (
                      <Tooltip
                        key={skill.name}
                        data-aos="fade-right"
                        data-aos-delay="400"
                      >
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
                <h3
                  data-aos="fade-right"
                  data-aos-delay="350"
                  className="text-xl font-semibold my-3 block w-full"
                >
                  Base de datos
                </h3>
                {skills.map(
                  (skill) =>
                    skill.category === "database" && (
                      <Tooltip
                        key={skill.name}
                        data-aos="fade-right"
                        data-aos-delay="400"
                      >
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
                <h3
                  data-aos="fade-right"
                  data-aos-delay="350"
                  className="text-xl font-semibold my-3 block w-full"
                >
                  Cms
                </h3>
                {skills.map(
                  (skill) =>
                    skill.category === "cms" && (
                      <Tooltip
                        key={skill.name}
                        data-aos="fade-right"
                        data-aos-delay="400"
                      >
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
                <h3
                  data-aos="fade-right"
                  data-aos-delay="350"
                  className="text-xl font-semibold my-3 block w-full"
                >
                  Herramientas
                </h3>
                {skills.map(
                  (skill) =>
                    skill.category === "tools" && (
                      <Tooltip
                        key={skill.name}
                        data-aos="fade-right"
                        data-aos-delay="400"
                      >
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
                <h3
                  data-aos="fade-right"
                  data-aos-delay="350"
                  className="text-xl font-semibold my-3 block w-full"
                >
                  Hosting
                </h3>
                {skills.map(
                  (skill) =>
                    skill.category === "hosting" && (
                      <Tooltip
                        key={skill.name}
                        data-aos="fade-right"
                        data-aos-delay="400"
                      >
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
              <h2
                data-aos="fade-right"
                data-aos-delay="300"
                className="text-2xl font-semibold mb-6"
              >
                Redes sociales.
              </h2>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
