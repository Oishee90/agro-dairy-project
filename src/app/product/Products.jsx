import React from 'react';
import ProductGrid
 from './ProductGrid';
export default function Products() {
  const products = [
    {
      name: "Cheese",
      desc: "Sample text",
      image:
        "",
    },
    {
      name: "Ghee",
      desc: "Sample text",
      image:
        "/ghee.png",
    },
    {
      name: "Butter",
      desc: "Sample text",
      image:
        "/butter.png",
    },
    {
      name: "Honey",
      desc: "Sample text",
      image:
        "/honey.png",
    },
    {
      name: "Musterd Oil",
      desc: "Sample text",
      image:
        "/Musterd-oil.png",
    },
    {
      name: "Butter",
      desc: "Sample text",
      image:
        "",
    },
  ];
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Our Products
        </h2>
        <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
        Discover Our Top-Quality Products
        </p>
        <ProductGrid products={products} />
      </div>
    </section>
  )
}
