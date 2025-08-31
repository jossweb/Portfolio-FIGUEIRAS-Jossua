import Image from "next/image";
import Hero from "./sections/landing/hero"

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-[32px] row-start-2 items-start">
        <Hero/>
      </main>
    </div>
  );
}
