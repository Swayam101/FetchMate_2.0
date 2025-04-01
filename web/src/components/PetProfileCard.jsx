import React from "react";
import { FaDotCircle } from "react-icons/fa";
import { IoPaw } from "react-icons/io5";

const PetProfileCard = ({ name, image, breed, gender, description }) => {
  return (
    <div className="w-80 flex flex-col group hover:transform hover:scale-105 transition-all duration-300">
      {/* Card Container */}
      <div className="bg-gradient-to-b from-[#FF9F1C] to-[#FFB74D] rounded-3xl p-6 relative">
        {/* Profile Image */}
        <div className="relative z-20 mb-6">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9F1C] to-[#FFB74D] rounded-full blur-md opacity-50" />
              <img 
                src={image} 
                alt={`${name}'s Profile`}
                className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-xl relative z-10 transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Pet Info */}
        <div className="space-y-4">
          {/* Name */}
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <IoPaw className="text-white text-xl" />
          </div>

          {/* Breed and Gender */}
          <div className="flex items-center justify-center gap-3 text-white/90">
            <span className="flex items-center gap-2">
              <span className="text-sm font-medium">{gender}</span>
              <FaDotCircle size={8} />
            </span>
            <span className="text-sm font-medium">{breed}</span>
          </div>

          {/* Description */}
          <div className="text-white/80 text-sm text-center line-clamp-3">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetProfileCard;
