import React from "react";
import CuteCat from "../../assets/cuteCat.png";
import DogGroup from "../../assets/dogGroup.png";
import { Link } from "react-router-dom";
import { IoShieldCheckmark, IoHeart, IoPaw } from "react-icons/io5";

const Home2 = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Images */}
          <div className="flex-1 relative">
            <div className="relative z-10">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#FF9F1C]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#2EC4B6]/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={DogGroup}
                    alt="Happy dogs"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={CuteCat}
                    alt="Happy cat"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF9F1C]/10 rounded-full mb-6">
              <IoPaw className="text-[#FF9F1C]" />
              <span className="text-[#FF9F1C] font-medium">Why Choose FetchMate?</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Trusted Care for Your Beloved Pets
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FF9F1C]/10 rounded-full flex items-center justify-center">
                  <IoShieldCheckmark className="text-[#FF9F1C] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Pet Sitters</h3>
                  <p className="text-gray-600">
                    Our pet sitters undergo thorough verification and background checks to ensure your pet&apos;s safety.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FF9F1C]/10 rounded-full flex items-center justify-center">
                  <IoHeart className="text-[#FF9F1C] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Loving Care</h3>
                  <p className="text-gray-600">
                    Our sitters are passionate pet lovers who provide personalized attention and care.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FF9F1C]/10 rounded-full flex items-center justify-center">
                  <IoPaw className="text-[#FF9F1C] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe Environment</h3>
                  <p className="text-gray-600">
                    We ensure a comfortable and secure environment for your pets while you&apos;re away.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/signup">
              <button className="bg-[#FF9F1C] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#e68f1a] transition-colors flex items-center justify-center gap-2 mx-auto lg:mx-0">
                <IoPaw />
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
