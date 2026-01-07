import Image from "next/image";

export default function About(){
    return(
        <section id="about" className="flex flex-row w-full justify-center items-center w-full mt-[200px] w-full max-w-[2440px] md:mb-10 bg-[color:var(--color-alt)] py-30 gap-40">

            <div className="flex flex-col gap-4 md:max-w-[40%] md:max-w-[800px] px-5 md:px-0">
                <h1 className="glitch text-[42px] text-white/90 ">About me</h1>
                <p className="text-[20px] mb-10 md:mb-0 text-white/70">Hi, I’m Jossua, a second-year Computer Science student at the University of Tours.
I first got into computer science through hardware, then I became interested in other areas such as web programming and algorithms.
Today, I’m particularly passionate about cryptography and artificial intelligence. I don’t practice them in a professional context yet, but rather as a way to learn new things and have fun!</p>
            </div>
                <Image
                    src="/img/setup-card.png"
                    alt="setup 2025"
                    width={500}
                    height={0}  
                    style={{ height: "auto" }}
                    className="hidden md:block"/>
        </section>
    )
}