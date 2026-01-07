import Hero from "./sections/landing/hero"
import Nav from "./sections/landing/nav"
import About from "./sections/landing/about"
import Contactme from "./sections/landing/contact-me"
import Social from "./sections/landing/social"
import Footer from "./sections/landing/footer"
import { Carousel, Card } from "./components/apple-cards-carousel"
import { projects } from "./data/projects"

export default function Home() {
    const cards = projects.map((project, index) => (
    <Card
      key={project.name}
      card={{
        src: project.imgPath,
        title: project.name,
        category: project.type || "Project",
        content: (
          <div className="p-4 rounded-3xl mb-4">
            <p className="text-white/70 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-white/90">
                {project.name}
              </span>{" "}
              {project.description}
            </p>
            {project.link && (
              <div className="flex flex-row gap-5">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-black/90 text-xl hover:bg-transparent px-2 py-1 bg-white/70 rounded transition-all duration-500">Visit the website</a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" className="mt-4 inline-block text-black/90 text-xl hover:bg-transparent px-2 py-1 bg-white/70 rounded transition-all duration-500">Check on GitHub</a>
                )}
              </div>
            )}
          </div>
        ),
      }}
      index={index}
    />
  ));
  return (
    <div className="w-full min-h-screen overflow-hidden">
      <main className="w-full flex flex-col items-center">
        <Hero/>
        <Nav/>
        <About/>
        <div className="flex flex-col w-full px-[20px] w-full ">
           <h2 className="max-w-7xl pl-4 mx-auto text-[45px] mt-10 glitch text-[color:var(--color-alt)]">My Projects</h2>
        <Carousel items={cards} />
        </div>
        <Contactme/>
        <Social/>
        <Footer/>
      </main>
    </div>
  );
}
