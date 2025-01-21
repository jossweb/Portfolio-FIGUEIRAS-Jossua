const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-white mx-auto gap-10 w-full pb-10">
            <div className="bg-black h-10 p-0 rounded-b-full"></div>
            <div className="container mx-auto flex flex-col items-center mt-10">
                <div className="flex space-x-6 mt-4">
                    <a href="/about" className="hover:text-gray-400 text-lg">About Me</a>
                    <a href="/projects" className="hover:text-gray-400 text-lg">Projects</a>
                    <a href="/contact" className="hover:text-gray-400 text-lg">Contact</a>
                </div>
                <div className="text-sm text-gray-400 text-center pt-10">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;