import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconPassword,
  IconTools,
  IconContract,
  IconPdf,
  IconTestPipe,
  IconListCheck,
  IconSchool,
  IconCloudBolt,
} from "@tabler/icons-react";

const projects = [
  {
    icon: <IconPassword className="size-4" />,
    title: "Password Generator",
    description: "Genera contraseñas seguras y personalizables al instante.",
    href: "https://passswordforge.netlify.app/",
    header: (
      <img
        src="/Projects/password-generator.png"
        alt="Password Generator"
        className="flex flex-1 w-full h-full min-h-[2rem] rounded-xl object-cover"
      />
    ),
  },
  {
    icon: <IconTools className="size-4" />,
    title: "UtiliApp - Aplicación de utilidades",
    description: "Una aplicación para realizar diversas tareas útiles.",
    href: "https://utiliapp.netlify.app/",
    header: (
      <img
        src="/Projects/utiliapp.png"
        alt="UtiliApp"
        className="flex flex-1 w-full h-full min-h-[2rem] rounded-xl object-cover"
      />
    ),
  },
  {
    icon: <IconContract className="size-4" />,
    title: "Generador de Contratos",
    description:
      "Crea contratos legales personalizados de manera rápida y sencilla.",
    href: "#",
    header: (
      <img
        src="/Projects/contract-generator.png"
        alt="Generador de Contratos"
        className="flex flex-1 w-full h-full min-h-[2rem] rounded-xl object-cover"
      />
    ),
  },
  {
    icon: <IconPdf className="size-4" />,
    title: "Curriculum Print Ready",
    description: "Curriculum listo para imprimir",
    href: "https://franciscurriculum.netlify.app/",
    header: (
      <img
        src="/Projects/portfolio-print-ready.png"
        alt="Portfolio Print Ready"
        className="flex flex-1 w-full h-full min-h-[2rem] rounded-xl object-cover"
      />
    ),
  },
  {
    icon: <IconTestPipe className="size-4" />,
    title: "Ai Test Generator",
    description: "Generador de tests con inteligencia artificial",
    href: "#",
    header: (
      <img
        src="/Projects/test-generator.png"
        alt="Ai Test Generator"
        className="flex flex-1 w-full h-full min-h-[2rem] rounded-xl object-cover"
      />
    ),
  },
  {
    icon: <IconListCheck className="size-4" />,
    title: "TODO App",
    description: "Gestor de tareas para organizar tu día a día.",
    href: "https://nuxt-todo-list-app.vercel.app/",
    header: (
      <img
        src="/Projects/todo-app.png"
        alt="TODO App"
        className="flex flex-1 w-full h-full min-h-[2rem] rounded-xl object-cover"
      />
    ),
  },
  {
    icon: <IconSchool className="size-4" />,
    title: "Tutor virtual",
    description: "Un tutor virtual para ayudarte con tus estudios y dudas.",
    href: "#",
    header: (
      <img
        src="/Projects/tutor-virtual.png"
        alt="Tutor virtual"
        className="flex flex-1 w-full h-full min-h-[2rem] rounded-xl object-cover"
      />
    ),
  },
  {
    icon: <IconCloudBolt className="size-4" />,
    title: "Weather App",
    description: "Aplicación del clima para conocer el pronóstico del tiempo",
    href: "https://nuxt-weather-app-wine.vercel.app/",
    header: (
      <img
        src="/Projects/weather-app.png"
        alt="Weather App"
        className="flex flex-1 w-full h-full min-h-[2rem] rounded-xl object-cover"
      />
    ),
  },
];

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-16 md:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        <BentoGrid className="max-w-4xl mx-auto gap-y-16">
          {projects.map((project, index) => (
            <a key={index} href={project.href} target="_blank">
              <BentoGridItem
                key={index}
                title={project.title}
                description={project.description}
                header={project.header}
                icon={project.icon}
                className={index === 3 || index === 6 ? "md:col-span-2" : ""}
              />
            </a>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default ProjectsSection;
