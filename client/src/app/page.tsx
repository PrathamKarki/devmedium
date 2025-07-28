'use client'
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";


const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#f7f4ed] flex flex-col">
      <Navbar/>
      <main className="flex-grow">
           <HeroSection />
      </main>
      <Footer/>
    </div>
  )
}

export default HomePage;