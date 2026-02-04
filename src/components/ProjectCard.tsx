import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import React from "react";
import { GithubLight } from "./ui/svgs/githubLight";
import { GithubDark } from "./ui/svgs/githubDark";

interface ProjectCardProps {
  title: string;
  description: string;
  image: ImageMetadata | string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const imageSrc = typeof image === "string" ? image : image.src;

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
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl card-gradient border border-border shadow-card hover:shadow-glow transition-all duration-500"
    >
      {/* Image container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

        {/* Overlay links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform duration-200"
              aria-label="Ver proyecto en vivo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:scale-110 transition-transform duration-200"
              aria-label="Ver código en GitHub"
            >
              {isDarkMode ? (
                <GithubDark className="size-5" />
              ) : (
                <GithubLight className="size-5" />
              )}
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-gradient transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />
    </motion.article>
  );
};

export default ProjectCard;
