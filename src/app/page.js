"use client"
import { useState, useEffect } from "react";
import Banner from "./Component/Banner";
import Loader from "./Component/Loader";
import Nav from "./Component/Nav";
import "../app/globals.css";
import WHO from "./Component/Main/WHO";
import BestProduct from "./Component/Main/BestProduct";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // লোডিং বন্ধ করুন
    }, 2000);

    return () => clearTimeout(timer); // টায়মার ক্লিনআপ
  }, []);

  return (
    <div className="">
        
      {isLoading ? (
        <Loader /> // লোডিং কম্পোনেন্ট দেখান
      ) : (
        <>
         <Nav />
        <Banner />
        <WHO></WHO> 
        <BestProduct></BestProduct>
        </>
      )}
    </div>
  );
}
