import React, { useEffect, useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import LandingImg1 from "../../assets/landingImg1.png";
import LandingImg2 from "../../assets/landingImg2.png";
import RabbitThumb from "../../assets/rabbit.png";
import BlackDogThumb from "../../assets/blackDog.png";

import { Link } from "react-router-dom";

const Home1 = () => {
  return (
    <div className=" home-upper grid gap-10 grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid sm:grid-cols-2 sm:px-24 px-10 ">
      <div className="flex flex-col gap-6 justify-evenly">
        <div className="anim ovalRef sm:text-4xl text-2xl font-medium">
          Shop, connect, and care. Elevate your pet's world with us.
        </div>
        <div className="anim text-xl pr-3.5">
          Discover joy in simplicity. Shop premium pet products and effortlessly
          connect with trusted local pet sitters, ensuring your pet's happiness
          is always a priority.
        </div>
        <div className="button-wrapper anim">
          <Link to={"/services"}>
            <button
              type="button"
              className="bg-[#FF9F1C] anim hover:bg-yellow-500 font-medium rounded-lg text-xl px-4 py-2 "
            >
              Find Sitter
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-10">
          <div className="ovalRef">
            <div id="circularThumb" className="inline relative">
              <img
                className="inline side-capsule-shadow rounded-full"
                style={{
                  border: "5px solid white",
                  outline: "1px solid black",
                }}
                src={RabbitThumb}
                alt=""
              />
            </div>
            <div className="inline relative ">
              <img
                style={{
                  border: "5px solid white",
                  outline: "1px solid black",
                }}
                className="side-capsule-shadow inline rounded-full"
                src={BlackDogThumb}
                alt=""
              />
            </div>

            <div className="inline bg-yellow-300 p-2 py-4 rounded-full ">
              <AiOutlinePlus size={35} className="inline  rounded-full " />
            </div>
          </div>
          <div className="">
            We are a growing <br /> community of 500+
          </div>
        </div>
      </div>
      <div className="home-upper-right flex justify-evenly sm:gap-10 gap-12">
        <div
          style={{ width: "fit-content", height: "fit-content" }}
          className="capsule-image-wrapper1 side-capsule-shadow flex items-center overflow-hidden"
        >
          <img
            src={LandingImg1}
            alt=""
            className=""
            title="a happy pet parent"
          />
        </div>
        <div
          style={{ width: "fit-content", height: "fit-content" }}
          className="capsule-image-wrapper2 side-capsule-shadow capsule flex items-center overflow-hidden"
        >
          <img
            style={{ padding: "35% 0% 0% 0%" }}
            src={LandingImg2}
            alt=""
            className=" h-fit w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home1;
