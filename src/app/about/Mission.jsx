import React from 'react'

export default function Mission() {
  return (
    <div>
    <section className="bg-black text-white py-12 px-4 mt-8 md:mt-12"
    style={{
        backgroundImage: 'url("/mission-bg.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
    <h2 className="text-center text-3xl font-bold md:text-5xl">Mission And Values</h2>
    <p className="mt-4 md:mt-8 font-normal leading-relaxed tracking-wide text-black-400 text-center w-full mx-auto sm:w-[500px] md:w-[800px]">
      At SourovAgro Dairy & Poultry, our mission is to provide premium, ethically sourced dairy and poultry products that enrich lives with quality and trust. Guided by integrity and innovation, we aim to support healthy lifestyles and build lasting customer relationships.
    </p>
  </section>
  <section className="text-center py-12 px-4">
    <h2 className="text-center text-3xl font-bold md:text-5xl">Our Vision</h2>
    <p className="mt-4 md:mt-8 font-normal leading-relaxed tracking-wide text-black-400 text-center w-full mx-auto sm:w-[500px] md:w-[800px]">
     
Our vision is to be a trusted leader in the dairy and poultry industry, ensuring access to high-quality, sustainable products while fostering a healthier, happier future for our customers and communities.
    </p>
    <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
      <div className="transition transform hover:scale-110">
        <h3 className="text-xl font-bold">10+</h3>
        <p className="text-gray-700">Farms</p>
      </div>
      <div className="transition transform hover:scale-110">
        <h3 className="text-xl font-bold">6+</h3>
        <p className="text-gray-700">Years of Experience</p>
      </div>
    </div>
  </section>
</div>

  )
}
