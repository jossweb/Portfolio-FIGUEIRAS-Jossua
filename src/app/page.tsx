import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center sm:items-start bg-[#000] min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <section className="h-screen w-full flex items-center justify-center bg-cover bg-center bg-[url('../../public/img/welcome-bg.webp')]">
        <h1 className="text-6xl font-bold text-white max-w-[70%] text-center">Welcome to the portfolio of FIGUEIRAS Jossua</h1>
      </section>
      <section className="bg-white h-screen opacity-80 rounded-xl w-full flex items-center justify-center">
      </section>
    </main>
  );
}