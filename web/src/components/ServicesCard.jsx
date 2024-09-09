import React, { useState } from "react";
import ServicesThumb from "../assets/servicesThumb.png";
import BookServiceModal from "./BookServiceModal";


const ServicesCard = ({ name, image, description }) => {
  const [isModalOpen,setIsModalOpen]=useState(false)
  return (
    <div className="flex flex-col bg-white w-80 rounded-lg px-4 h-96 justify-evenly box-shadow-3d">
      <div className="flex items-center justify-around">
        <img src={image} alt="" className="rounded-full" />
        <div className="text-base font-bold">{name}</div>
      </div>
      <div className="word-wrap px-4 text-justify text-sm text-gray-400 ">
        {description}
      </div>
      <div className="flex justify-center ">
        <button onClick={()=>setIsModalOpen(true)} className="bg-yellow-500 p-2 rounded-md font-bold">
          Book Service
        </button>
        <BookServiceModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      </div>
    </div>
  );
};

export default ServicesCard;
