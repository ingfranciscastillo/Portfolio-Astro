import ProjectCard from "./ProjectCard";
import imagenResume from "@/assets/Projects/ResumeSense.png";
import nephriteImg from "@/assets/Projects/Nephrite-website.png";
import passwordImg from "@/assets/Projects/PasswordGenerator.png";
import todoAppImg from "@/assets/Projects/TodoApp.png";
import utiliappImg from "@/assets/Projects/UtiliApp.png";
import yermoImg from "@/assets/Projects/Postapocalipsis-rpg.png";
import tutorIAImg from "@/assets/Projects/tutorAI.png";
import pactumImg from "@/assets/Projects/pactumAI.png";
import breveUrlImg from "@/assets/Projects/breveUrl.png";
import talegridImg from "@/assets/Projects/talegrid.png";

const projects = [
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
      "Elegancia y enfoque para tu entorno digital. Un ecosistema visual meticulosamente diseñado para transformar tu navegador y editor en un santuario de calma y productividad.",
    image: nephriteImg,
    tags: ["UI Design", "Product Design", "Cross-platform", "Astro"],
    liveUrl: "https://getnephrite.dev",
    githubUrl: "https://github.com/Nephrite-theme",
  },
  {
    title: "Password Forge: Generador de contraseñas",
    description:
      "Generador de contraseñas de alta seguridad con gestión de bóveda encriptada. Implementa validaciones estrictas con Zod, manejo de estado asíncrono y una arquitectura escalable.",
    image: passwordImg,
    tags: ["Next.js", "TypeScript", "Prisma", "TanStack Query", "Zod"],
    liveUrl: "https://passswordforge.netlify.app/",
    githubUrl: "https://github.com/ingfranciscastillo/password-generator",
  },
  {
    title: "Todo App: Gestión de tareas",
    description:
      "Aplicación de gestión de tareas de alto rendimiento desarrollada con la nueva estructura de Nuxt 4. Implementa una arquitectura reactiva con Pinia y componentes accesibles mediante HeadlessUI.",
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
    description:
      "RPG táctico de supervivencia post-apocalíptica con motor de comandos por consola. Implementa sistemas complejos de combate por turnos, gestión de inventario persistente y una narrativa dinámica basada en clases.",
    image: yermoImg,
    tags: ["Next.js", "Zustand", "TypeScript", "Tailwind CSS", "Game Dev"],
    liveUrl: "https://yermo-eterno.netlify.app/",
    githubUrl: "https://github.com/ingfranciscastillo/postapocalipsis-rpg",
  },
  {
    title: "Tutor IA",
    description:
      "Plataforma de aprendizaje personalizado que utiliza IA generativa para resolver dudas académicas según el nivel educativo. Implementa streaming de respuestas, persistencia de chats y exportación de materiales de estudio.",
    image: tutorIAImg,
    tags: ["Next.js 16", "AI SDK", "Groq AI", "Drizzle ORM", "Clerk", "Neon"],
    liveUrl: "https://lurnyai.netlify.app/",
    githubUrl: "https://github.com/ingfranciscastillo/tutor-virtual",
  },
  {
    title: "Pactum: Generador de contratos",
    description:
      "Generador inteligente de documentos legales que utiliza modelos de lenguaje para redactar contratos. Incluye validación de cláusulas, estructuras legales dinámicas y exportación profesional en tiempo real.",
    image: pactumImg,
    tags: ["Next.js", "Groq AI", "Tailwind CSS", "PDF-Lib", "Zod"],
    liveUrl: "https://pactum.netlify.app/",
    githubUrl: "https://github.com/ingfranciscastillo/ai-contract-generator",
  },
  {
    title: "BreveUrl: Acortador de URLs",
    description:
      "Servicio de optimización de enlaces diseñado para la velocidad. Implementa una arquitectura desacoplada con un backend de alto rendimiento en Fastify y una interfaz ligera construida con Astro y Preact.",
    image: breveUrlImg,
    tags: ["Astro", "Fastify", "Preact", "Shadcn UI", "REST API"],
    liveUrl: "https://breveurl.netlify.app/",
    githubUrl: "https://github.com/ingfranciscastillo/frontend-url-shortener",
  },
  {
    title: "TaleGrid: Creación de historias interactivas",
    description:
      "Plataforma de creación de historias interactivas donde puedes crear tus propias historias que contengan decisiones y opciones para el usuario.",
    image: talegridImg,
    tags: ["tRPC", "Nextjs", "Better Auth", "Cloudflare", "tRPC", "PostgreSQL"],
    liveUrl: "https://www.talegrid.app/",
    githubUrl: "#",
  },
];

const ProjectsGrid = () => {
  return (
    <section id="proyectos" className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-center text-4xl font-semibold lg:text-5xl">
          Proyectos
        </h1>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
