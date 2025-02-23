"use client";
import React, { useState, useEffect } from 'react';
import Loader from '../Component/Loader';
import "../../app/globals.css";
import WHO from '../Component/Main/WHO';
import Mission from './Mission';
import Footer from "../Component/Footer";
import Navbar from '../Component/Nav';
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
          heading="Who We Are: Our Journey and Vision" 
          subheading="Dedicated to Delivering Excellence, Innovation, and Trust in Every Step We Take" 
          bannerImg="/about-us.webp"/>
          <WHO></WHO>
          <Mission></Mission>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Page;
