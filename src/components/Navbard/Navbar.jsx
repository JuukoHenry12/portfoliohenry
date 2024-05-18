import React from 'react'
import { Link } from 'react-scroll';
const Navbar = () => {
    return (
        <nav class="bg-gray-800 p-4">
            <div class="container mx-auto flex justify-between items-center">
                <div>
                    <a href="#" class="text-white text-lg font-semibold">
                        <h2 className='text-3xl'>Software Engineer</h2>
                    </a>
                </div>
                <div class="hidden md:block">
                    <ul class="flex space-x-4">
                        <li><a href="#" class="text-white hover:text-gray-300">Home</a></li>
                        <li>
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                className="text-white hover:text-gray-300 cursor-pointer"
                            >
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="project"
                                smooth={true}
                                duration={500}
                                className="text-white hover:text-gray-300 cursor-pointer"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="progamme"
                                smooth={true}
                                duration={500}
                                className="text-white hover:text-gray-300 cursor-pointer"
                            >
                                Programming Skills
                            </Link>
                        </li>
                        <li><a href="document.pdf" download="document.pdf" class="text-white hover:text-gray-300">Resume</a></li>
                        <li><a href="#" class="text-white hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>
                <div class="md:hidden">
                    <button class="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>

    )
}

export default Navbar