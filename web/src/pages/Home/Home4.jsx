import React from "react";

import LandingSlider from "../../components/LandingSlider";
import { Link } from "react-router-dom";

const Home4 = () => {
  return (
    <div className="side-capsule mr-28 side-capsule-shadow pt-6 sm:pb-10 ">
      <div className="text-center pb-6 text-4xl font-bold text-cyan-400">
        Our Products
      </div>
      <div className="sm:w-11/12 grid grid-cols-1 px-20">
       
        <LandingSlider />
      </div>
      <div className="flex items-center justify-center gap-10">
        <div className="button-wrapper row-span-2">
          <Link to="/shop">
          <button
            type="button"
            className="bg-[#FF9F1C] hover:bg-yellow-500 rounded-lg font-medium text-xl px-4 py-2 "
          >
            Shop Now
          </button>
          </Link>
        </div>
        <div className="button-wrapper">
          <Link to={"/cart"}>
          <button
            type="button"
            className=" hover:bg-yellow-300 text-yellow-400  border-2 border-yellow-400 rounded-lg font-medium  text-xl px-4 py-2 "
          >
            View Cart
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home4;
