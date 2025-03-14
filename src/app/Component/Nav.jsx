"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { CiMenuFries, CiCircleRemove } from "react-icons/ci";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // GSAP color transition animation
    gsap.to(".animated-word", {
      color: "#FB9300", // Target color
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
          "bg-black/40",
          "backdrop-blur-md",
          "border-b",
          "border-gray-200",
          "shadow-sm",


        );
        navbar.classList.remove("bg-transparent");
      } else {
        navbar.classList.remove(
          "bg-black/40",
          "backdrop-blur-md",
          "border-b",
          "border-gray-200",
          "shadow-sm",

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

  useEffect(() => {
    // Toggle overflow on the HTML element
    const html = document.documentElement;
    if (isOpen) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
    }
    // Cleanup on unmount
    return () => {
      html.style.overflow = "";
    };
  }, [isOpen]);

  return (

    <nav id="navbar" className="top-0 left-0 right-0 z-10 mt-0 fixed bg-transparent dark:bg-gray-800 transition duration-300">
      <div className="container mx-auto md:px-6 mx-auto md:flex md:justify-between items-center">
        <div className="flex px-2 items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
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

          {/* Mobile menu button */}
          <div className="flex md:hidden px-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#83B844] dark:text-gray-200 hover:text-green-300 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <CiCircleRemove className="w-8 h-8 font-bold text-green-400" />
              ) : (
                <CiMenuFries className="w-6 h-8 font-bold text-green-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed md:absolute bg-[#1d1e20fc] md:bg-transparent md:inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out text-white  md:mt-0 md:p-0 md:top-0 md:relative md:justify-end md:bg-transparent md:w-full md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? "translate-x-0 opacity-100 fixed md:min-h-0 min-h-screen backdrop-blur-md bg-[#1d1e20fc]  " : "opacity-0 -translate-x-full "
            }`}      >
          <div className="mt-[3rem] md:mt-0 flex flex-col justify-center gap-10 md:gap-0 items-center px-2 py-2 md:py-0 roboto text-xl font-light  md:text-base md:font-medium md:flex-row md:mx-6">
            <Link
              href="/"
              className="font-light md:font-normal transition-colors duration-300 transform dark:text-gray-200 hover:text-green-400 md:mx-4 md:my-0"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="font-light md:font-normal transition-colors duration-300 transform dark:text-gray-200 hover:text-green-400  md:mx-4 md:my-0"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="font-light md:font-normal transition-colors duration-300 transform dark:text-gray-200 hover:text-green-400 md:mx-4 md:my-0"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="font-light md:font-normal transition-colors duration-300 transform dark:text-gray-200 hover:text-green-400 md:mx-4 md:my-0"
            >
              Contact US
            </Link>
          </div>
        </div>
      </div>
    </nav>



  );
};

export default Navbar;