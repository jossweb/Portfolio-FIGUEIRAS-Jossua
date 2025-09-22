import { Linkedin, Github, Instagram, Mail } from "lucide-react";

export default function Social(){
    return(
        <section id="social" className="text-center">
            <h2 className="glitch text-2xl sm:text-3xl md:text-[42px]">Connect with me</h2>
            <h3 className="text-base sm:text-lg md:text-[20px]">Find me on social media or send me a direct email</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 mt-6 md:mt-8 px-15 md:px-0">
                <a href="https://www.linkedin.com/in/jossua-figueiras-47bb9a350/" target="_BLANK" rel="noopener noreferrer" className="group w-full sm:w-auto justify-center flex flex-row items-center gap-3 border border-1 border-[var(--foreground)] px-3 py-2 sm:px-4 sm:py-2 rounded-[var(--radius)] text-base sm:text-xl transition-all duration-300 hover:scale-105 hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                    <Linkedin className="transition-transform duration-300 group-hover:rotate-6" />
                    Linkedin
                </a>
                <a href="https://github.com/jossweb" target="_BLANK" rel="noopener noreferrer" className="group w-full sm:w-auto justify-center flex flex-row items-center gap-3 border border-1 border-[var(--foreground)] px-3 py-2 sm:px-4 sm:py-2 rounded-[var(--radius)] text-base sm:text-xl transition-all duration-300 hover:scale-105 hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                    <Github className="transition-transform duration-300 group-hover:rotate-6" />
                    Github
                </a>
                <a href="https://www.instagram.com/doctor_joss/" target="_BLANK" rel="noopener noreferrer" className="group w-full sm:w-auto justify-center flex flex-row items-center gap-3 border border-1 border-[var(--foreground)] px-3 py-2 sm:px-4 sm:py-2 rounded-[var(--radius)] text-base sm:text-xl transition-all duration-300 hover:scale-105 hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                    <Instagram className="transition-transform duration-300 group-hover:rotate-6" />
                    Instagram
                </a>
                <a href="mailto:contact@jossua.dev" target="_BLANK" rel="noopener noreferrer" className="group w-full sm:w-auto justify-center flex flex-row items-center gap-3 border border-1 border-[var(--foreground)] px-3 py-2 sm:px-4 sm:py-2 rounded-[var(--radius)] text-base sm:text-xl transition-all duration-300 hover:scale-105 hover:bg-[var(--foreground)] hover:text-[var(--background)]">
                    <Mail className="transition-transform duration-300 group-hover:rotate-6" />
                    Email
                </a>
            </div>
        </section>
    )
}