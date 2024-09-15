import React from "react";

import LandingSlider from "../../components/LandingSlider";
import { Link } from "react-router-dom";

const Home4 = () => {
  return (
    <div
      className={`sm:rounded-tr-[500px] sm:rounded-br-[500px] h-auto side-capsule-shadow py-8 sm:mx-0 rounded-3xl sm:mb-0 mb-8`}
    >
      <div className="text-center pb-6 sm:text-4xl text-2xl font-bold text-cyan-400">
        Our Products
      </div>
      <LandingSlider />
      <div className="flex items-center justify-center mt-8 gap-10">
        <Link to="/shop">
          <button
            type="button"
            className="bg-[#FF9F1C] hover:bg-yellow-500 rounded-lg font-medium sm:text-xl text-lg px-2 py-1  sm:px-4 sm:py-2 "
          >
            Shop Now
          </button>
        </Link>

        <Link to={"/cart"}>
          <button
            type="button"
            className=" hover:bg-yellow-300 text-yellow-400  border-2 border-yellow-400 rounded-lg font-medium  sm:text-xl text-lg px-2 py-1  sm:px-4 sm:py-2 "
          >
            View Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home4;
