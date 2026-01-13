import ProjectCard from "./ProjectCard";
import imagenResume from '@/assets/Projects/ResumeSense.png';
import nephriteImg from "@/assets/Projects/Nephrite-website.png"
import passwordImg from "@/assets/Projects/PasswordGenerator.png"
import todoAppImg from "@/assets/Projects/TodoApp.png"
import utiliappImg from "@/assets/Projects/UtiliApp.png"

const projects = [
{
  title: "ResumeSense AI",
  description: "Plataforma de optimización de CVs que utiliza IA para analizar la compatibilidad con vacantes específicas, ofreciendo feedback detallado y sugerencias de mejora.",
  image: imagenResume,
  tags: ["React Router", "Puter.js", "Tailwind CSS", "PDFLib"],
  liveUrl: "https://resumesense.vercel.app/",
  githubUrl: "https://github.com/ingfranciscastillo/ai-resume-analyzer",
},
  {
  title: "Nephrite: The Emerald Standard",
  description: "Elegancia y enfoque para tu entorno digital. Un ecosistema visual meticulosamente diseñado para transformar tu navegador y editor en un santuario de calma y productividad.",
  image: nephriteImg, 
  tags: ["UI Design", "Product Design", "Cross-platform", "Astro"],
  liveUrl: "https://getnephrite.dev",
  githubUrl: "https://github.com/Nephrite-theme", 
},
  {
  title: "Password Forge",
  description: "Generador de contraseñas de alta seguridad con gestión de bóveda encriptada. Implementa validaciones estrictas con Zod, manejo de estado asíncrono y una arquitectura escalable.",
  image: passwordImg,
  tags: ["Next.js", "TypeScript", "Prisma", "TanStack Query", "Zod"],
  liveUrl: "https://passswordforge.netlify.app/",
  githubUrl: "https://github.com/ingfranciscastillo/password-generator",
},
{
  title: "FocusFlow Task Manager",
  description: "Aplicación de gestión de tareas de alto rendimiento desarrollada con la nueva estructura de Nuxt 4. Implementa una arquitectura reactiva con Pinia y componentes accesibles mediante HeadlessUI.",
  image: todoAppImg, 
  tags: ["Nuxt 4", "Vue 3", "Pinia", "TypeScript", "Tailwind"],
  liveUrl: "https://nuxt-todo-list-app.vercel.app/", 
  githubUrl: "https://github.com/ingfranciscastillo/nuxt-todo-list-app",
},
{
  title: "UtiliApp: All-in-One Toolkit",
  description: "Suite modular de productividad que integra micro-servicios mediante el consumo de APIs externas. Incluye herramientas de finanzas, salud y edición de medios, gestionadas con una arquitectura de estado centralizada.",
  image: utiliappImg,
  tags: ["Nuxt 4", "NuxtUI", "Vue Query", "External APIs"],
  liveUrl: "#", 
  githubUrl: "#",
}
];

const ProjectsGrid = () => {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
