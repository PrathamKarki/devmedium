import React from "react";

const HeroSection = () => {
    return (
        <>  
        <section className="pt-32 sm:pt-36 md:pt-40">
      <div className="hero_content w-[80%] max-w-7xl mx-auto">
        <div>
          <div className="w-full md:w-[70%] tracking-wide">
            <span className="block text-6xl sm:text-6xl md:text-6xl lg:text-7xl text-gray-900">
              Human
            </span>
            <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-7xl text-gray-900">
              stories & ideas
            </h1>
          </div>
        </div>

        <div className="mt-6">
              <p className="text-xl">A place to read, write, and deepen your understanding</p>
        </div>

        <button className="text-white bg-[#1a8917] mt-20 px-9 py-4 rounded-4xl font-semibold tracking-wide text-xl hover:bg-[#1a8910] cursor-pointer"> Start reading </button>
      </div>
    </section>


        </>
    )
}

export default HeroSection;