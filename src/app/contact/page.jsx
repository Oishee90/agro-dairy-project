"use client";
import React, { useState, useEffect } from 'react';
import Loader from '../Component/Loader';
import "../../app/globals.css";
import Footer from "../Component/Footer";
import Navbar from '../Component/Nav';
import CommonBanner from '../Component/CommonBanner';
import Contact from '../Component/Main/Contact';

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
          heading="Who We Are: Our Journey and Vision" 
          subheading="Dedicated to Delivering Excellence, Innovation, and Trust in Every Step We Take" 
          bannerImg="/contact-hero.webp"/>
          <Contact></Contact>
          <Footer />
        </>
      )} 
    </div>
  );
};

export default Page;
