import { Astro } from "./icons/AstroIcon";
import { DrizzleORM } from "./icons/DrizzleIcon";
import { TypeScript } from "./icons/TypeScriptIcon";
import { TailwindCSS } from "./icons/TailwindIcon";
import { Expressjs } from "./icons/ExpressIcon";
import { Nextjs } from "./icons/NextIcon";
import { Hono } from "./icons/HonoIcon";
import { NestJS } from "./icons/NestIcon";
import { Nuxt } from "./icons/NuxtIcon";
import { Shopify } from "./icons/ShopifyIcon";
import { Strapi } from "./icons/StrapiIcon";
import { WordPress } from "./icons/WordpressIcon";
import { Turso } from "./icons/TursoIcon";
import { MongoDB } from "./icons/MongoIcon";
import { Canva } from "./icons/CanvaIcon";
import { Fastify } from "./icons/FastifyIcon";
import { Netlify } from "./icons/NetlifyIcon";
import { ReactQuery } from "./icons/ReactQueryIcon";
import { Vercel } from "./icons/VercelIcon";
import { BetterAuth } from "./icons/BetterAuthIcon";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { GitHub } from "./social/GithubIcon";
import { LinkedIn } from "./social/LinkedInIcon";
import { XformerlyTwitter } from "./social/xIcon";
import { Instagram } from "./social/InstagramIcon";

const skills = [
  { name: "Astro", icon: Astro },
  {
    name: "Drizzle ORM",
    icon: DrizzleORM,
  },
  { name: "TypeScript", icon: TypeScript },
  { name: "TailwindCSS", icon: TailwindCSS },
  { name: "Expressjs", icon: Expressjs },
  { name: "Nextjs", icon: Nextjs },
  { name: "Hono", icon: Hono },
  { name: "NestJS", icon: NestJS },
  { name: "Nuxt", icon: Nuxt },
  { name: "Shopify", icon: Shopify },
  { name: "Strapi", icon: Strapi },
  { name: "WordPress", icon: WordPress },
  { name: "Turso", icon: Turso },
  { name: "MongoDB", icon: MongoDB },
  { name: "Canva", icon: Canva },
  { name: "Fastify", icon: Fastify },
  { name: "Netlify", icon: Netlify },
  { name: "React Query", icon: ReactQuery },
  { name: "Vercel", icon: Vercel },
  { name: "BetterAuth", icon: BetterAuth },
];

const social = [
  {
    name: "GitHub",
    icon: GitHub,
    link: "https://github.com/ingfranciscastillo/",
  },
  {
    name: "LinkedIn",
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/ingfranciscastillo/",
  },
  {
    name: "Twitter",
    icon: XformerlyTwitter,
    link: "https://x.com/ingfranciscas",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/ingfranciscastillo/",
  },
];

const AboutMeSection = () => {
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
            data-aos-delay="400"
            className="text-balance break leading-8 text-xl mb-8"
          >
            Trabajo de manera colaborativa con diseñadores y otros
            desarrolladores para transformar conceptos en productos finales.
            Siempre busco mejorar mis habilidades y mantenerme actualizado con
            las últimas tendencias y tecnologías del sector.
          </p>
          <p
            data-aos="fade-left"
            data-aos-delay="500"
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
                {skills.map((skill) => (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <span>
                        {skill.icon({ className: "w-8 h-8" })}
                        <span className="sr-only">{skill.name}</span>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
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
                        {social.icon({ className: "w-8 h-8" })}
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
