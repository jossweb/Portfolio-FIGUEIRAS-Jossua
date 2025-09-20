import ProjectCard from "@/app/components/project-card"
import { projects } from "../../data/projects";

export default function Project(){
    return (
        <section
          id="Projects"
          className="w-full bg-[var(--foreground)] text-[var(--background)] py-10"
        >
          <div className="w-full max-w-[2440px] mx-auto px-4">
            <h2 className="text-[42px] glitch text-center">My Projects</h2>
            <h3 className="text-[20px] pb-10 text-center">
              A collection of projects showcasing my expertise
            </h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {projects.map((p, i) => (
                <ProjectCard key={p.name} project={p} priority={i === 0} />
              ))}
            </div>
          </div>
        </section>
    )
}