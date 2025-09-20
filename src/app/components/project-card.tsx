import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { ProjectData } from "../types/projects";

interface ProjectCardProps {
  project: ProjectData;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const hasGithub = Boolean(project.github);
  const hasLink = Boolean(project.link);
  const btnCount = (hasGithub ? 1 : 0) + (hasLink ? 1 : 0);
  const btnRowClass =
    `flex flex-col sm:flex-row w-full gap-2 sm:gap-4 mt-auto ${btnCount === 1 ? 'sm:justify-start' : 'sm:justify-between'}`;

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] rounded-xl w-full sm:w-[48%] xl:w-[30%] max-w-[600px] overflow-hidden flex flex-col shadow-lg">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={project.imgPath}
          alt={project.name}
          fill
          className="object-cover"
          priority={priority}
        />
        {project.type && (
          <span className="absolute top-2 left-2 z-10 bg-[var(--foreground)]/90 text-[var(--background)] text-[10px] sm:text-xs font-semibold tracking-wide uppercase px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-md backdrop-blur-sm pointer-events-none">
            {project.type}
          </span>
        )}
      </div>

      <div className="p-3 sm:p-4 flex flex-col h-full">
        <h3 className="glitch text-2xl sm:text-3xl mb-2 sm:mb-3">{project.name}</h3>

        <p className="leading-relaxed flex-grow text-sm sm:text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 my-3 sm:my-4">
          {project.technos.map(t => (
            <span
              key={t}
              className="bg-[#EDDBD3] text-[var(--foreground)] rounded-3xl px-2.5 py-1 text-[10px] sm:text-xs">
              {t}
            </span>
          ))}
        </div>

        <div className={btnRowClass}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-row items-center gap-2 bg-[var(--foreground)] text-[var(--background)] px-3 py-2 sm:px-3 sm:py-2 rounded-[var(--radius)] text-sm font-semibold transition-all duration-300 hover:scale-105 hover:bg-[var(--background)] hover:text-[var(--foreground)] hover:border hover:border-[var(--foreground)] w-full sm:w-[48%] justify-center">
              <Github className="transition-transform duration-300 group-hover:rotate-6" size={18} /> Github
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-row items-center gap-2 border border-[var(--foreground)] px-3 py-2 sm:px-3 sm:py-2 rounded-[var(--radius)] text-sm font-semibold transition-all duration-300 hover:scale-105 hover:bg-[var(--foreground)] hover:text-[var(--background)] w-full sm:w-[48%] justify-center">
              <ExternalLink className="transition-transform duration-300 group-hover:rotate-6" size={18} /> Visit
            </a>
          )}
        </div>
      </div>
    </div>
  );
}