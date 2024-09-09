import React from "react";
import Nehu from "../assets/nehu.png";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const PetSitterCard = () => {
  return (
    <div
      style={{ padding: "4%" }}
      className="border-2 border-black rounded-xl "
    >
      <div className="grid grid-cols-4 gap-4 items-center">
        <img
          className=" bg-black rounded-full w-14 col-span-1"
          src={Nehu}
          alt=""
        />
        <div className="text-left col-span-2 font-bold">Nehal Patidar</div>
        <div className="flex text-2xl col-span-1 font-bold justify-self-end">
          <AiFillStar size={30} /> 4
        </div>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-1"></div>
        <div className="text-sm flex flex-col col-span-2 pl-6">
          <div className="text-gray-400">pets Sitted</div>
          <div className="font-black text-left justify-self-start">25 pets</div>
        </div>
        <div className="col-span-2">
        <Link className="" to={"/services"}> <button className="border-3 active:scale-90 border-b-10 active:bg-cyan-400 p-2 active:text-black rounded-lg border-cyan-400 text-cyan-400">Book Pet Service</button></Link>
        </div>
      </div>
    </div>
  );
};

export default PetSitterCard;
