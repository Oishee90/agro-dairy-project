import React from 'react';
import Image from 'next/image';

export default function ProductGrid({products}) {
  return (
    <div className="mx-auto grid max-w-5xl justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
        {products.map((product,index)=>(
            <div
            key={index}
            className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full md:items-start">
            <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="mb-4 inline-block h-56 w-full object-cover lg:h-72"
            />
            <p className='font-bold'>{product.name}</p>
            <p className="text-sm text-gray-500">{product.desc}</p>
            </div>
        ))}
    </div>
  )
}
