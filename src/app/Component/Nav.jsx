"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // GSAP color transition animation
    gsap.to(".animated-word", {
      color: "#166534", // Target color
      stagger: 0.2, // Delay between each letter
      duration: 1.5, // Duration of the color change
      repeat: -1, // Infinite loop
      yoyo: true, // Reverse the animation
      ease: "power1.inOut", // Smooth transition
    }); 
 
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (!navbar) return; // Check if the navbar exists

      if (window.scrollY > 50) {
        navbar.classList.add(
          "bg-white/30",
          "backdrop-blur-md",
          "border-b",
          "border-gray-200",
          "shadow-sm"
        );
        navbar.classList.remove("bg-transparent");
      } else {
        navbar.classList.remove(
          "bg-white/30",
          "backdrop-blur-md",
          "border-b",
          "border-gray-200",
          "shadow-sm"
        );
        navbar.classList.add("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    
  return (
 
        <nav id="navbar" className=" top-0 left-0 right-0 z-10 fixed bg-transparent dark:bg-gray-800  transition duration-300">
          <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-0">
        {/* Logo */}
        <Image
          src="/logo.png" // Path to the logo in the `public` folder
          alt="Sourov Agro Logo"
          width={90} // Adjust width
          height={40} // Adjust height
        
        />
           <div className="flex flex-col items-start"> 
            <a href="#" className=" pacifico-regular   md:text-3xl text-2xl text-black font-extrabold flex">
           
            {/* Wrap each letter in a span */}
            {["S","o","u","r","o","v","A","g","r","o"].map((letter, index) => (
              <span key={index} className="animated-word mr-1">
                {letter}
              </span>
            ))}
          
          </a>
          <span className="text-sm font-medium justify-center text-center">Dairy farm</span></div>
          </div>
              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
    
            {/* Mobile Menu */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
                isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col text-xl font-medium md:flex-row md:mx-6">
                <a
                  href="#"
                  className="my-2 text-[#3f3f3f] transition-colors duration-300 transform dark:text-gray-200 hover:text-black dark:hover:text-green-400 md:mx-4 md:my-0"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="my-2 text-xl  text-[#3f3f3f]   transition-colors duration-300 transform dark:text-gray-200 hover:text-black dark:hover:text-green-400 md:mx-4 md:my-0"
                >
                 Products
                </a>
                <a
                  href="#"
                  className="my-2 text-[#3f3f3f]   transition-colors duration-300 transform dark:text-gray-200 hover:text-black dark:hover:text-green-400 md:mx-4 md:my-0"
                >
                 About us
                </a>
                <a
                  href="#"
                  className="my-2 text-[#3f3f3f]  transition-colors duration-300 transform dark:text-gray-200 hover:text-black dark:hover:text-green-400 md:mx-4 md:my-0"
                >
                 Contact us
                </a>
              </div>
    
           
            </div>
          </div>
        </nav>
  
    
  );
};

export default Navbar;