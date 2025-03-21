import Image from "next/image";
import React, { useState, useEffect } from "react";

const WHO = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Active image index

    const images = [
        { src: "worker.jpg", alt: "Image 1" },
        { src: "Paultry.jpg", alt: "Image 2" },
        { src: "dairyProduct.webp", alt: "Image 3" },
        { src: "cow.jpg", alt: "Image 4" },
    ];

    // Auto rotate logic
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 700); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [images.length]);

    return (
        <div className="bg-white h-full w-full relative ">
            {/* Symbol */}
            <Image
                src="/cowSymbol.png"
                alt="Decorative Line"
                width={100}
                height={50}
                className="bg-white absolute top-[-2.75rem] left-1/2 transform -translate-x-1/2 p-0 m-0 rounded-full"
            />

            {/* Content */}
            <div className="container mx-auto bg-white h-full w-full flex md:flex-row flex-col items-center justify-center pt-20 md:pb-20">
                {/* Text Section */}
                <div className="mt-4 w-full md:w-1/2 px-4 md:px-6">
                    <h1 className="text-left text-3xl font-bold md:text-5xl">
                        Who We Are
                    </h1>
                    <p className="mt-4 md:mt-8 text-[#000000a3] text-base md:text-xl roboto text-justify">
                    At Sourav Agro Dairy and Poultry, we specialize in crafting premium dairy products like cheese, butter, and ghee, tailored to meet the unique needs of restaurants. With a commitment to quality and excellence, we ensure every product is made from the finest ingredients, delivering unmatched taste and consistency. Our mission is to empower culinary professionals with products they can trust, backed by ethical practices and a passion for perfection.
                    </p>
                </div>

                {/* Image Section*/}
                <div className="w-full md:w-1/2 flex items-center justify-around relative  ">
                    <div className="hidden md:relative md:flex md:items-center md:justify-center md:w-[200px] md:w-[300px] md:h-[300px] md:mt-20">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute w-1/2 h-32 md:w-52 md:h-32 rounded-lg overflow-hidden cursor-pointer transition-opacity duration-500 ${
                                    activeIndex === index ? "opacity-100 scale-110" : "opacity-50"
                                }`}
                                style={{
                                    transform: `rotate(${index * 90}deg) translate(150px) rotate(-${index * 90}deg)`,
                                }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    layout="fill"
                                    objectFit="cover"
                                
                                />
                            </div>
                        ))}
                    </div>
                    {/* Image Section mobile*/}
                <div className="md:hidden px-4 relative grid grid-cols-2 gap-8 justify-center items-center mt-12">
                    {images.map((image, index) => (
                         <div key={index} className="w-full h-64">
                            <img
                                    src={image.src}
                                    alt={image.alt}
                                     className="w-full h-full object-cover"
                                
                                />
                         </div>
                    ))
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default WHO;
