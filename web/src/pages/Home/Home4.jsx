import React from "react";
import LandingSlider from "../../components/LandingSlider";
import { Link } from "react-router-dom";
import { IoPaw, IoCart } from "react-icons/io5";

const Home4 = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF9F1C]/10 rounded-full mb-6">
            <IoPaw className="text-[#FF9F1C]" />
            <span className="text-[#FF9F1C] font-medium">Our Products</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shop Premium Pet Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of high-quality pet products that your furry friends will love.
          </p>
        </div>

        {/* Products Slider */}
        <div className="mb-12">
          <LandingSlider />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/shop">
            <button className="w-full sm:w-auto bg-[#FF9F1C] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#e68f1a] transition-colors flex items-center justify-center gap-2">
              <IoPaw />
              Shop Now
            </button>
          </Link>

          <Link to="/cart">
            <button className="w-full sm:w-auto border-2 border-[#FF9F1C] text-[#FF9F1C] px-8 py-3 rounded-lg font-medium hover:bg-[#FF9F1C] hover:text-white transition-colors flex items-center justify-center gap-2">
              <IoCart />
              View Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home4;
