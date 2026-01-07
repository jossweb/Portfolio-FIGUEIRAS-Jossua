export default function Footer(){
    return(
        <footer className="w-full mt-10 sm:mt-20 py-6 sm:py-8 flex flex-col items-center">
            <div className="w-2/3 sm:w-[40%] h-px bg-[var(--foreground)]" />
            <p className="mt-3 text-sm sm:text-base md:text-lg text-[var(--foreground)]">
                © {new Date().getFullYear()} FIGUEIRAS Jossua — All rights reserved.
            </p>
        </footer>
    )
}