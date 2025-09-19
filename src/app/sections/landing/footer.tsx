export default function Footer(){
    return(
        <footer className="w-full mt-20 py-8 flex flex-col items-center">
            <div className="w-[40%] h-px bg-[var(--foreground)]" />
            <p className="mt-3 text-xl text-[var(--foreground)]">
                © {new Date().getFullYear()} FIGUEIRAS Jossua — Tous droits réservés.
            </p>
        </footer>
    )
}