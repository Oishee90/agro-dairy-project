"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { MdOutgoingMail } from "react-icons/md";

const Banner = () => {
  useEffect(() => {
    // GSAP Animation for the banner
    gsap.to(".banner-content", {
      opacity: 1, // Ensure content is visible right away
      duration: 1,
      delay: 0.2, // Small delay to allow image to load
      ease: "power2.out"
    });

    // GSAP Animation for SVG Path
    gsap.to(".curved-path", {
      duration: 1,
      repeat: -2,
      ease: "power1.inOut",
      yoyo: true,
      attr: {
        d: "M0,180 C 200,220, 400,230, 600,210 C 800,180, 1000,240, 1200,210 C 1400,160, 1600,190, 1600,190 L 1600,320 L 0,320 Z",
      },
    });
  }, []);

  useEffect(() => {
    // GSAP Animation for burger layers (Bottom to Top)
    const timeline = gsap.timeline();
    timeline.fromTo(
      ".content",
      { x: -300, opacity: 0 }, // Start off-screen to the left
      { x: 0, opacity: 1, duration: 1,delay:0.5, ease: "power2.out" } // Animate to visible position
    );
  
  
    timeline.to(".burger-container", { y: 20, repeat: -1, yoyo: true, duration: 1 }); // Floating effect
  }, []);

  useEffect(() => {
    // GSAP Animation for the Cheese Slice
    gsap.fromTo(
      ".cheese-slice",
      { y: -200, opacity: 0 }, // Start above the view with 0 opacity
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 2,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".slash-2",
      { scale: 0, opacity: 0 }, // Start with no size and hidden
      {
        scale: 1, // Zoom to full size
        opacity: 1, // Make it visible
        duration: 1,
        delay: 2.1, // Delay to make it appear after the cheese slice animation
        ease: "power2.out",
      }
    );
  
    // GSAP Animation for the Slash (Zoom Effect)
    gsap.fromTo(
      ".slash",
      { y: -200, opacity: 0 }, // Start above the view with 0 opacity
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div
      className="relative bg-cover bg-center h-[650px] md:h-[600px] "
      style={{
        backgroundImage: "url('/home-hero-banner.webp')", // Replace 'your-image-path.jpg' with the actual image path
      }}
    >
      {/* Banner Section with Yellow Background */}
      <div className="h-[600px] px-2  md:h-[600px] flex flex-col-reverse md:flex-row justify-between items-center lg:items-start">
        {/* Content Section */}
        <div className="content w-full text-center md:text-left md:w-1/2 px-6 mt-36 mb-5 banner-content opacity-0">
          <h1 className="text-[1.5rem] leading-[135%] mt-4 playfair-display w-full md:text-[3rem] font-bold text-[#d9ae4a] dark:text-gray-100 lg:mt-8">
            Delivering Premium<br />
          
              Dairy to Restaurants
          
          </h1>
          <p className="text-base roboto md:mt-6 mt-4 text-[#e5e7eb9e] dark:text-gray-300">
            Supplying premium cheese, butter, and ghee that demand quality and flavor.
          </p>

          {/* Button */}
          <div className="mt-6 mb-2 md:mt-8 cursor-pointer">
            <button className="relative px-2 py-2 border-2  text-lg border-r-4 border-b-4 border-[#d9ae4a] border-b-white border-r-white rounded-lg bg-none text-white overflow-hidden group transform transition-all duration-500 ease-out hover:translate-x-4 hover:translate-y-2">
              <span className="relative z-10 flex items-center gap-1">
                <div className="">
                  <MdOutgoingMail  className="text-inherit font-medium w-[24px] h-[18px]" />
                </div>
               Contact Us
              </span>
              {/* Color fill from bottom-left corner */}
              <span className="absolute inset-0 bg-[#d9ae4a] transform scale-x-0 scale-y-0 origin-bottom-left group-hover:scale-x-100 group-hover:scale-y-100 transition-transform duration-500 ease-out"></span>
            </button>
          </div>
        </div>

        {/* Burger Animation Section */}
        <div className="burger-container relative w-[250px] h-[100px] md:w-[500px] md:h-[500px] lg:ml-7 flex justify-center">
          {/* Cheese Slice */}
          <Image
            src="/cheeseSlice.png"
            alt="Cheese Slice"
            className="cheese-slice absolute top-[90px] md:top-[120px] z-20"
            layout="intrinsic"
            width={330}
            height={50}
            priority
          />
          <Image
            src="/splash-1.png"
            alt="Splash"
            className="slash absolute top-[90px] z-10"
            layout="intrinsic"
            width={450}
            height={50}
            priority
          />
          <Image
            src="/splash2.png"
            alt="Splash"
            className="slash-2 absolute top-[70px] "
            layout="intrinsic"
            width={480}
            height={50}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
