import ProjectCard from "@/app/components/project-card"


export default function Project(){
    return(
        <div className="w-full bg-[var(--foreground)] text-[var(--background)] flex justify-center items-center py-5">
        <section
            id="Projects"
            className="w-full max-w-[2440px] bg-[var(--foreground)] p-4">
            <h2 className="text-[42px] glitch pb-10">My Projects</h2>
            <div className="flex flex-wrap flex-row gap-10 justify-center">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </section>
        </div>
    )
}