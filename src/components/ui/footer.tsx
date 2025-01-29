import { useLanguage } from '../LanguageProvider'

const Footer = () => {
    const { translations } = useLanguage()

    return (
        <footer className="bg-neutral-900 text-white mx-auto gap-10 w-full pb-10">
            <div className="bg-black h-10 p-0 rounded-b-full"></div>
            <div className="container mx-auto flex flex-col items-center mt-10">
                <div className="flex space-x-6 mt-4">
                    <a href="#about-me" className="hover:text-gray-400 text-lg">{translations.navigation.aboutMe}</a>
                    <a href="#ai-project" className="hover:text-gray-400 text-lg">{translations.navigation.aiProject}</a>
                    <a href="#contact" className="hover:text-gray-400 text-lg">{translations.navigation.contact}</a>
                </div>
                <div className="text-sm text-gray-400 text-center pt-10">
                    &copy; {new Date().getFullYear()} {translations.footer.rights}
                    <div className="mt-2">{translations.footer.madeWith}</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;