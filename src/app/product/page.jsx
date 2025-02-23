"use client";
import React, { useState, useEffect } from 'react';
import Loader from '../Component/Loader';
import "../../app/globals.css";
import Footer from "../Component/Footer";
import Navbar from '../Component/Nav';
import Products from './Products';
import CommonBanner from '../Component/CommonBanner';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader /> 
      ) : (
        <>
          <Navbar />
          <CommonBanner 
          heading="Explore Our Premium Dairy & Poultry Products" 
          subheading="Discover the Finest Selection of Quality Dairy & Poultry Products Tailored for Your Needs" 
          bannerImg="/products-hero.webp"/>
          <Products></Products>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Page;
