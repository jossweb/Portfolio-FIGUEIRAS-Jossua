import NavButton from "../../components/nav-button"

export default function Nav(){
    return(
        <div className="flex flex-col justify-center items-center w-full gap-5 text-[42px] glitch w-full w-full max-w-[2440px]">
            <h1>Chapters</h1>
            <nav className="w-full flex flex-row gap-5 flex-wrap justify-center">
                <NavButton label="About me" url="#about" icon="/img/nav-icons/1.svg" alt="1" imgw={25}/>
                <NavButton label="Projects" url="#Projects" icon="/img/nav-icons/2.svg" alt="2" imgw={60}/>
                <NavButton label="Contact" url="#contact" icon="/img/nav-icons/3.svg" alt="3" imgw={60}/>
                <NavButton label="Social" url="#social" icon="/img/nav-icons/4.svg" alt="3" imgw={60}/>
            </nav>
        </div>
    ); 
}