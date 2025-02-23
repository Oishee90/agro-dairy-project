"use client"
import { useState, useEffect } from "react";
import Banner from "./Component/Banner";
import Loader from "./Component/Loader";
import Nav from "./Component/Nav";
import "../app/globals.css";
import WHO from "./Component/Main/WHO";
import BestProduct from "./Component/Main/BestProduct";
import FeaturesSection from "./Component/Main/FeaturesSection";
import Footer from "./Component/Footer";
import Contact from "./Component/Main/Contact";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="">
        
      {isLoading ? (
        <Loader /> 
      ) : (
        <>
         <Nav />
        <Banner />
        <WHO></WHO> 
        <BestProduct></BestProduct>
        <FeaturesSection></FeaturesSection>
        <Contact></Contact>
        <Footer></Footer>
        </>
      )}
    </div>
  );
}
