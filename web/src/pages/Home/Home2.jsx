import React from "react";
import CuteCat from "../../assets/cuteCat.png";
import DogGroup from "../../assets/dogGroup.png";
import { Link } from "react-router-dom";

const Home2 = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row px-6 sm:px-24 mt-16 sm:mt-0">
      <div className=" hidden sm:flex flex-col w-full items-center justify-center">
        <img
          className="self-start h-auto w-1/2"
          style={{ borderRadius: "20%/50%" }}
          src={DogGroup}
          alt=""
        />
        <img
          className="self-end h-auto w-1/2"
          style={{ borderRadius: "20%/50%" }}
          src={CuteCat}
          alt=""
        />
      </div>

      <div className="sm:px-20 mx-6 px-8 sm:mx-0 border-2 border-[#2ec4b536] rounded-[50%/20%] sm:rounded-[50%] bg-[#cbf3f061] flex gap-4 sm:gap-6 flex-col items-center justify-center sm:max-w-[400px] sm:h-[400px] py-10 sm:p-12 ">
        <h4 className="text-center text-md font-semibold mt-6">
          Why choose Fetchmate?
        </h4>
        <p>
          we have trusted and verified pet sitters, who take care of your pets
          need when you asre away from them. we ensure to provide a comfortable
          and safe environment for your pets
        </p>
        <Link className="focus:outline-none bg-[#2ec4b58f]  font-medium rounded-lg text-xl sm:px-4 sm:py-2 py-1 px-2 mb-4 dark:focus:ring-yellow-900">
          Get Started
        </Link>
        {/* <div className="sm:text-xl text-base font-medium w-fit">
          Why Choose Fetchmate ?
        </div>
        <div className="flex items-center justify-center  text-center">
          we have trusted and verified pet sitters, who take care of your pets
          need when you asre away from them. we ensure to provide a comfortable
          and safe environment for your pets
        </div>
        <Link
          className="focus:outline-none bg-[#2EC4B6]  font-medium rounded-lg text-xl sm:px-4 sm:py-2 py-1 px-2 mb-4 dark:focus:ring-yellow-900"
          to={"/signup"}
        >
          Get Started
        </Link> */}
      </div>
    </div>
  );
};

export default Home2;
