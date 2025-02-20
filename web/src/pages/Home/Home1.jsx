import React from "react";

import { AiOutlinePlus } from "react-icons/ai";
import LandingImg1 from "../../assets/landingImg1.png";
import LandingImg2 from "../../assets/landingImg2.png";
import RabbitThumb from "../../assets/rabbit.png";
import BlackDogThumb from "../../assets/blackDog.png";

import { Link } from "react-router-dom";

const Home1 = () => {
  return (
    <div className="flex justify-around sm:flex-row flex-col gap-8 sm:gap-0 sm:px-16 px-6 ">
      <div className="flex flex-col gap-8 sm:gap-6 justify-evenly basis-2/4">
        <div className="ovalRef sm:text-4xl text-2xl font-medium">
          Shop, connect, and care. Elevate your pet's world with us.
        </div>
        <div className="text-sm sm:text-xl pr-3.5">
          Discover joy in simplicity. Shop premium pet products and effortlessly
          connect with trusted local pet sitters, ensuring your pet's happiness
          is always a priority.
        </div>
        <div>
          <Link to={"/services"}>
            <button
              type="button"
              className="bg-[#FF9F1C] anim hover:bg-yellow-500 font-medium rounded-lg text-xl px-4 py-2 "
            >
              Find A Pet Sitter
            </button>
          </Link>
        </div>
        <div className="flex gap-20 sm:gap-10 items-center">
          <div className="flex -space-x-4">
            <img
              className="inline-block size-12 rounded-full ring-2 ring-white"
              src={RabbitThumb}
              alt=""
            />
            <img
              className="inline-block size-12 rounded-full ring-2 ring-white"
              src={BlackDogThumb}
              alt=""
            />
            <div className="inline-block bg-yellow-300 px-2 py-2 rounded-full border-3 border-white ring-white">
              <AiOutlinePlus className="ring-white" size={35} />
            </div>
          </div>
          <div className="sm:text-xl">We are a growing community of 500+</div>
        </div>
      </div>
      <div className="flex sm:gap-10 gap-12 basis-2/4 sm:justify-around">
        <div
          style={{ width: "fit-content", height: "fit-content" }}
          className="capsule-image-wrapper1 side-capsule-shadow flex items-center"
        >
          <img
            src={LandingImg1}
            alt="a happy pet parent"
            className=""
            title="a happy pet parent"
          />
        </div>
        <div
          style={{ width: "fit-content", height: "fit-content" }}
          className="capsule-image-wrapper2 side-capsule-shadow capsule flex items-center"
        >
          <img
            style={{ padding: "35% 0% 0% 0%" }}
            src={LandingImg2}
            alt="another happy pet parent"
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home1;
