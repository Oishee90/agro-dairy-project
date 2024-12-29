import Image from "next/image";
import React, { useState, useEffect } from "react";

const WHO = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Active image index

    const images = [
        { src: "/worker.jpg", alt: "Image 1" },
        { src: "/cow.jpg", alt: "Image 2" },
    
        { src: "/dairyProduct.webp", alt: "Image 3" },
        { src: "/Paultry.jpg", alt: "Image 4" },
    ];

    // Auto rotate logic
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 500); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [images.length]);

    return (
        <div className="bg-white h-full w-full relative">
            {/* Symbol */}
            <Image
                src="/cowSymbol.png"
                alt="Decorative Line"
                width={100}
                height={50}
                className="bg-white absolute top-[-2.75rem] left-1/2 transform -translate-x-1/2 p-0 m-0 rounded-full"
            />

            {/* Content */}
            <div className="bg-white h-full w-full flex items-start justify-center py-20">
                {/* Text Section */}
                <div className="w-1/2 px-10">
                    <h1 className="md:text-6xl text-3xl font-extrabold text-black">
                        Who We Are
                    </h1>
                    <p className="mt-5 text-black text-lg">
                    At Sourav Agro Dairy and Poultry, we specialize in crafting premium dairy products like cheese, butter, and ghee, tailored to meet the unique needs of restaurants. With a commitment to quality and excellence, we ensure every product is made from the finest ingredients, delivering unmatched taste and consistency. Our mission is to empower culinary professionals with products they can trust, backed by ethical practices and a passion for perfection.
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-1/2 flex items-center justify-around relative  ">
                    <div className="relative flex items-center justify-center w-[300px] h-[300px] mt-20">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute w-24 h-32 md:w-52 md:h-32 rounded-lg overflow-hidden cursor-pointer transition-opacity duration-500 ${
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
                </div>
            </div>
        </div>
    );
};

export default WHO;
