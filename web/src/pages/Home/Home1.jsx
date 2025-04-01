import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoPaw } from "react-icons/io5";
import LandingImg1 from "../../assets/landingImg1.png";
import LandingImg2 from "../../assets/landingImg2.png";
import RabbitThumb from "../../assets/rabbit.png";
import BlackDogThumb from "../../assets/blackDog.png";
import { Link } from "react-router-dom";

const Home1 = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF9F1C]/10 rounded-full mb-6">
              <IoPaw className="text-[#FF9F1C]" />
              <span className="text-[#FF9F1C] font-medium">Welcome to FetchMate</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Shop, connect, and care. Elevate your pet's world with us.
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover joy in simplicity. Shop premium pet products and effortlessly
              connect with trusted local pet sitters, ensuring your pet's happiness
              is always a priority.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/services">
                <button className="w-full sm:w-auto bg-[#FF9F1C] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#e68f1a] transition-colors flex items-center justify-center gap-2">
                  <IoPaw />
                  Find A Pet Sitter
                </button>
              </Link>
              <Link to="/shop">
                <button className="w-full sm:w-auto border-2 border-[#FF9F1C] text-[#FF9F1C] px-8 py-3 rounded-lg font-medium hover:bg-[#FF9F1C] hover:text-white transition-colors">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* Community Section */}
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <div className="flex -space-x-4">
                <img
                  className="w-12 h-12 rounded-full ring-2 ring-white shadow-lg"
                  src={RabbitThumb}
                  alt="Community member"
                />
                <img
                  className="w-12 h-12 rounded-full ring-2 ring-white shadow-lg"
                  src={BlackDogThumb}
                  alt="Community member"
                />
                <div className="w-12 h-12 rounded-full bg-[#FF9F1C] flex items-center justify-center ring-2 ring-white shadow-lg">
                  <AiOutlinePlus className="text-white text-xl" />
                </div>
              </div>
              <div className="text-gray-600">
                <span className="font-semibold text-gray-900">500+</span> happy pet parents
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex-1 relative">
            <div className="relative z-10">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#FF9F1C]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#2EC4B6]/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={LandingImg1}
                    alt="Happy pet parent"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={LandingImg2}
                    alt="Another happy pet parent"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
