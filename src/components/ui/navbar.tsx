import Link from "next/link";
import { useState } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav className="absolute left-0 w-full text-[22px] flex justify-between items-center p-4 z-50">
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center space-x-[70px] pt-3">
            <Link href="#about-me" className="text-black">
            About Me
            </Link>
            <Link href="#ai-project" className="text-black">
            My Projects
            </Link>
            <Link href="#contact" className="text-black">
            Contact
            </Link>
        </div>
        <div className="flex-1 flex justify-end pt-5">
            <div className="relative">
            <button 
                className="text-black p-2" 
                onClick={() => setIsOpen(!isOpen)}
            >
                EN
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-14 rounded-md shadow-lg">
                <Link href="/fr" className="block px-4 py-2 text-black">
                    FR
                </Link>
                </div>
            )}
            </div>
        </div>
        </nav>
    )
}
