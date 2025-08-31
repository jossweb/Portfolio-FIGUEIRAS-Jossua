import Image from "next/image";

type NavButtonProps = {
  label: string;
  url: string;
  icon: string;
  alt: string;
  imgw: number;
};

export default function NavButton({ label, url, icon, alt, imgw}: NavButtonProps){
    return(
        <a 
          href={url} 
          className="group flex flex-col w-[200px] px-5 py-2 border border-[var(--foreground)] rounded-[var(--radius)] items-center justify-center 
                     transition-transform duration-300 hover:scale-110">
            <div className="h-[60px] flex items-center justify-center">
                <Image
                    src={icon}
                    alt={alt}
                    width={imgw}
                    height={0}  
                    style={{ height: "auto" }}
                    className="transition-transform duration-500 group-hover:rotate-[360deg]"/>
            </div>
            <h1 className="glitch text-[30px] transition-transform duration-300 group-hover:scale-110">
                {label}
            </h1>
        </a>
    )
}