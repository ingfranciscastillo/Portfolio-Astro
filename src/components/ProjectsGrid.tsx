import ProjectCard from "./ProjectCard";
import { Section } from "./Section";

import imagenResume from "@/assets/Projects/ResumeSense.webp";
import nephriteImg from "@/assets/Projects/Nephrite-website.webp";
import passwordImg from "@/assets/Projects/PasswordGenerator.webp";
import todoAppImg from "@/assets/Projects/TodoApp.webp";
import utiliappImg from "@/assets/Projects/UtiliApp.webp";
import yermoImg from "@/assets/Projects/Postapocalipsis-rpg.webp";
import tutorIAImg from "@/assets/Projects/tutorAI.webp";
import pactumImg from "@/assets/Projects/pactumAI.webp";
import breveUrlImg from "@/assets/Projects/breveUrl.webp";
import talegridImg from "@/assets/Projects/talegrid.webp";

interface Project {
  title: string;
  description: string;
  image: ImageMetadata;
  tags: Array<string>;
  liveUrl: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "ResumeSense: AI para CVs",
    description:
      "Plataforma de optimización de CVs que utiliza IA para analizar la compatibilidad con vacantes específicas, ofreciendo feedback detallado y sugerencias de mejora.",
    image: imagenResume,
    tags: ["React Router", "Puter.js", "Tailwind CSS", "PDFLib"],
    liveUrl: "https://resumesense.vercel.app/",
    githubUrl: "https://github.com/ingfranciscastillo/ai-resume-analyzer",
  },
  {
    title: "Nephrite: The Emerald Standard",
    description:
      "Un ecosistema visual meticulosamente diseñado para transformar tu navegador y editor en un santuario de calma y productividad.",
    image: nephriteImg,
    tags: ["UI Design", "Product Design", "Cross-platform", "Astro"],
    liveUrl: "https://getnephrite.dev",
    githubUrl: "https://github.com/Nephrite-theme",
  },
  {
    title: "Password Forge: Generador de contraseñas",
    description:
      "Generador de contraseñas de alta seguridad con gestión de bóveda encriptada.",
    image: passwordImg,
    tags: ["Next.js", "TypeScript", "Prisma", "TanStack Query", "Zod"],
    liveUrl: "https://passswordforge.netlify.app/",
    githubUrl: "https://github.com/ingfranciscastillo/password-generator",
  },
  {
    title: "Todo App: Gestión de tareas",
    description:
      "Aplicación de gestión de tareas de alto rendimiento desarrollada con la nueva estructura de Nuxt 4.",
    image: todoAppImg,
    tags: ["Nuxt 4", "Vue 3", "Pinia", "TypeScript", "Tailwind"],
    liveUrl: "https://nuxt-todo-list-app.vercel.app/",
    githubUrl: "https://github.com/ingfranciscastillo/nuxt-todo-list-app",
  },
  {
    title: "UtiliApp: All-in-One Toolkit",
    description:
      "Suite modular de productividad que integra micro-servicios mediante el consumo de APIs externas. Incluye herramientas de finanzas, salud y edición de medios, gestionadas con una arquitectura de estado centralizada.",
    image: utiliappImg,
    tags: ["Nuxt 4", "NuxtUI", "Vue Query", "External APIs"],
    liveUrl: "https://utiliapp.netlify.app/",
    githubUrl: "https://github.com/ingfranciscastillo/nuxt-microapps",
  },
  {
    title: "El Yermo Eterno: RPG Post-apocalíptico",
    description: "RPG táctico de supervivencia post-apocalíptica.",
    image: yermoImg,
    tags: ["Next.js", "Zustand", "TypeScript", "Tailwind CSS", "Game Dev"],
    liveUrl: "https://yermo-eterno.netlify.app/",
    githubUrl: "https://github.com/ingfranciscastillo/postapocalipsis-rpg",
  },
  {
    title: "Tutor IA: tutores IA personalizados",
    description:
      "Plataforma de aprendizaje que utiliza IA generativa para resolver dudas académicas según el nivel educativo.",
    image: tutorIAImg,
    tags: ["Next.js 16", "AI SDK", "Groq AI", "Drizzle ORM", "Clerk", "Neon"],
    liveUrl: "https://lurnyai.netlify.app/",
    githubUrl: "https://github.com/ingfranciscastillo/tutor-virtual",
  },
  {
    title: "Pactum: Generador de contratos",
    description:
      "Generador inteligente de documentos legales que utiliza IA para redactar contratos.",
    image: pactumImg,
    tags: ["Next.js", "Groq AI", "Tailwind CSS", "PDF-Lib", "Zod"],
    liveUrl: "https://pactum.netlify.app/",
    githubUrl: "https://github.com/ingfranciscastillo/ai-contract-generator",
  },
  {
    title: "BreveUrl: Acortador de URLs",
    description: "Servicio de optimización de enlaces.",
    image: breveUrlImg,
    tags: ["Astro", "Fastify", "Preact", "Shadcn UI", "REST API"],
    liveUrl: "https://breveurl.netlify.app/",
    githubUrl: "https://github.com/ingfranciscastillo/fullstack-url-shortener",
  },
  {
    title: "TaleGrid: Creación de historias interactivas",
    description:
      "Plataforma de creación de historias interactivas donde puedes crear tus propias historias que contengan decisiones y opciones para el usuario.",
    image: talegridImg,
    tags: ["tRPC", "Nextjs", "Better Auth", "Cloudflare", "tRPC", "PostgreSQL"],
    liveUrl: "https://www.talegrid.app/",
  },
];

const ProjectsGrid = () => {
  return (
    <Section id="proyectos" title="Proyectos">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsGrid;
