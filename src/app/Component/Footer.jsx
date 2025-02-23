import React from 'react';
import Image from 'next/image';
import { gsap } from "gsap";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full py-14 bg-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center gap-2 justify-center">
                        <Image
                            src="/logo.png" // Path to the logo in the `public` folder
                            alt="Sourov Agro Logo"
                            width={90} // Adjust width
                            height={30} // Adjust height
                        />
                        <div className="flex flex-col items-start md:items-center">
                            <a href="#" className="md:text-3xl text-xl text-white font-extrabold flex">
                                {/* Wrap each letter in a span */}
                                {["S", "o", "u", "r", "o", "v", "A", "g", "r", "o"].map((letter, index) => (
                                    <span key={index} className="animated-word mr-1">
                                        {letter}
                                    </span>
                                ))}
                            </a>
                            <span className="text-[12px] w-full tracking-[5px] md:tracking-[9px] text-white text-center">Dairy & Poultry</span>
                        </div>
                    </div>
                    <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
                        <li><a href="#" className="text-gray-300 hover:text-gray-100">Home</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-gray-100">Products</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-gray-100">About Us</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-gray-100">Contact Us</a></li>
                    </ul>
                    <div className="flex space-x-10 justify-center items-center mb-14">
                        <a href="#" className="block text-[#d9ae4ac2] transition-all duration-500 hover:text-[#d9ae4a]">
                            <FaFacebookF className="w-6 h-6" />
                        </a>
                        <a href="#" className="block text-[#d9ae4ac2] transition-all duration-500 hover:text-[#d9ae4a]">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="block text-[#d9ae4ac2] transition-all duration-500 hover:text-[#d9ae4a]">
                            <FaTwitter className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;