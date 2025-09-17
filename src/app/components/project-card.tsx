import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] rounded w-[20%] overflow-hidden flex flex-col">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/img/flanerie.png"
          alt="setup 2025"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="p-4">
        <h3 className="glitch text-3xl mb-4">Titre</h3>
        <p className="text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <div className="flex flex-row gap-3 my-5">
          <span className="bg-[#EDDBD3] text-[var(--foreground)] rounded-3xl px-2 py-1">Symfony</span>
          <span className="bg-[#EDDBD3] text-[var(--foreground)] rounded-3xl px-2 py-1">Tailwind css</span>
          <span className="bg-[#EDDBD3] text-[var(--foreground)] rounded-3xl px-2 py-1">Mysql</span>
          <span className="bg-[#EDDBD3] text-[var(--foreground)] rounded-3xl px-2 py-1">Doctrine</span>
        </div>
        <div className="flex flex-row">
          <button className="bg-[var(--foreground)] text-[var(--background)] px-2 py-1 rounded-3xl">Access to website</button>
        </div>
      </div>
    </div>
  );
}