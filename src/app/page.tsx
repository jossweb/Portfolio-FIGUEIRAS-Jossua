import Hero from "./sections/landing/hero"
import Nav from "./sections/landing/nav"
import About from "./sections/landing/about"
import Project from "./sections/landing/projects";
import Contactme from "./sections/landing/contact-me"
import Social from "./sections/landing/social"
import Footer from "./sections/landing/footer"

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center overflow-hidden">
      <main className="w-full flex flex-col items-center">
        <Hero/>
        <Nav/>
        <About/>
        <Project/>
        <Contactme/>
        <Social/>
        <Footer/>
      </main>
    </div>
  );
}
