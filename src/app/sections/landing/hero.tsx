import { Linkedin, Github } from "lucide-react";

export default function Hero(){
    return(
        <header className="flex flex-col h-screen w-full justify-center px-[20px] w-full max-w-[2440px] aspect-[16/9]">
          <h1 className="font-semibold text-[100px] md:text-[200px] leading-none tracking-tighter">Hi, I’m Jossua</h1>
          <h2 className="glitch font-normal text-[30px] md:text-[42px] pl-3">Computer sciences student</h2>
          <div className="flex flex-row pt-[20px] gap-5 ml-3 mb-20">
            <a className="group flex flex-row items-center gap-3 bg-[var(--foreground)] text-[var(--background)] px-2 py-1 rounded-[var(--radius)] text-xl transition-all duration-300 hover:scale-105 hover:bg-[var(--background)] hover:text-[var(--foreground)] hover:border hover:border-1 hover:border-[var(--foreground)]">
              <Github className="transition-transform duration-300 group-hover:rotate-6" />
              Github
            </a>

            <a className="group flex flex-row items-center gap-3 border border-1 border-[var(--foreground)] px-2 py-1 rounded-[var(--radius)] text-xl transition-all duration-300 hover:scale-105 hover:bg-[var(--foreground)] hover:text-[var(--background)]">
              <Linkedin className="transition-transform duration-300 group-hover:rotate-6" />
              Linkedin
            </a>
          </div>
        </header>
    )
}