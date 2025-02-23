"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { MdOutgoingMail } from "react-icons/md";

const CommonBanner = ({heading,subheading,bannerImg}) => {
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
  return (
    <div
      className="relative bg-cover bg-center h-[500px] md:h-[800px] "
      style={{
        backgroundImage: `url('${bannerImg}')`, // Replace 'your-image-path.jpg' with the actual image path
      }}
    >
      {/* Banner Section with Yellow Background */}
      <div className="container mx-auto h-[400px] px-2 pt-0 md:pt-10 md:h-[800px] flex flex-col justify-between items-center">
        {/* Content Section */}
        <div className="content w-full text-center md:w-1/2 px-6 mt-36 mb-5 banner-content opacity-0">
          <h1 className="text-3xl leading-[135%] mt-4 playfair-display w-full md:text-[3rem] lg:text-[4rem] font-bold text-[#d9ae4a] dark:text-gray-100 lg:mt-8" 
          dangerouslySetInnerHTML={{__html:heading}}
          />
          <p className="text-[14px] leading-[20px] md:text-[1.1rem] md:leading-[135%] md:mt-6 mt-4 text-[#ffeab8fc] dark:text-gray-300"
          dangerouslySetInnerHTML={{__html:subheading}}
          />
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
