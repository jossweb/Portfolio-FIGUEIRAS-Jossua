import Hero from "./sections/landing/hero"
import Nav from "./sections/landing/nav"
import About from "./sections/landing/about"
import Project from "./sections/landing/projects";
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
        category: project.type || "Projet",
        content: (
          <div className="p-4 bg-[#F5F5F7] dark:bg-neutral-800 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                {project.name}
              </span>{" "}
              {project.description}
            </p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:underline">
                Visiter le site
              </a>
            )}
          </div>
        ),
      }}
      index={index}
    />
  ));
  return (
    <div className="w-full min-h-screen flex justify-center items-center overflow-hidden">
      <main className="w-full flex flex-col items-center">
        <Hero/>
        <Nav/>
        <About/>
        <div className="w-full h-full py-20">
           <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-10">Mes Projets</h2>
        <Carousel items={cards} />
        </div>
        <Contactme/>
        <Social/>
        <Footer/>
      </main>
    </div>
  );
}
