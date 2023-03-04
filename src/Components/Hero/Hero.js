import React from "react";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={hero} className="w-2/5 rounded-lg shadow-2xl mr-10" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Fashion Changing Always!</h1>
            <p className="py-6">The New Way To Display Product by Colorlib.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
