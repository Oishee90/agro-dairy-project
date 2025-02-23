import React from 'react';
import { FaAward, FaHandsHelping, FaLeaf } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <div className="bg-black mt-20">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-[#ffeab8fc] my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Why choose us
          </span>
          <h1 className="text-center text-3xl sm:text-4xl md:text-7xl font-extrabold playfair-display text-[#d9ae4a]">
            A Difference You Can Taste
          </h1>
          <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
            Providing Premium Dairy and Poultry Products to Elevate Your Culinary Creations.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-1 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Exceptional Quality Products',
              description:
                "From rich dairy items like cheese, butter, and ghee to fresh and high-grade poultry, we ensure every product meets the highest standards of taste and freshness.",
              icon: <FaAward className="text-xl text-white" />,
            },
            {
              title: 'Trusted by Culinary Experts',
              description:
                'Our products are tailored to meet the needs of professional kitchens, delivering consistency and reliability that chefs and restaurateurs can count on.',
              icon: <FaHandsHelping className="text-xl text-white" />,
            },
            {
              title: 'Sustainable and Ethical Practices',
              description:
                'We are committed to responsible farming and production, ensuring that our practices benefit the environment, our customers, and the community.',
              icon: <FaLeaf className="text-xl text-white" />,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow"
            >
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage: 'linear-gradient(rgb(141 188 52) 0%, rgb(51 138 52) 100%)',
                  borderColor: 'rgb(139 183 70)',
                }}
              >
                {feature.icon}
              </div>
              <h3 className="mt-6 text-[#ffeab8fc]">{feature.title}</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style={{
            backgroundImage:
              'linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)',
            borderColor: 'rgba(92, 79, 240, 0.2)',
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{
            backgroundImage:
              'linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)',
            borderColor: 'rgba(92, 79, 240, 0.2)',
          }}
        ></div>
      </section>
    </div>
  );
};

export default FeaturesSection;
