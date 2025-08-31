import Hero from "./sections/landing/hero"
import Nav from "./sections/landing/nav"

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-[32px] row-start-2 items-start">
        <Hero/>
        <Nav/>
      </main>
    </div>
  );
}
