import Link from "next/link";
import { useState } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav className="absolute top-0 left-0 w-full bg-white bg-opacity-25 flex justify-between items-center p-4 z-50">
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center space-x-8">
            <Link href="#about-me" className="text-black">
            About Me
            </Link>
            <Link href="#my-projects" className="text-black">
            My Projects
            </Link>
            <Link href="#contact" className="text-black">
            Contact
            </Link>
        </div>
        <div className="flex-1 flex justify-end">
            <div className="relative">
            <button 
                className="text-black p-2" 
                onClick={() => setIsOpen(!isOpen)}
            >
                EN
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-white rounded-md shadow-lg">
                <Link href="/fr" className="block px-4 py-2 text-black hover:bg-gray-200">
                    FR
                </Link>
                </div>
            )}
            </div>
        </div>
        </nav>
    )
}
