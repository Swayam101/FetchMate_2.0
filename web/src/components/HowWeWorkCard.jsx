import React from "react";
import { IoPaw } from "react-icons/io5";

const HowWeWorkCard = ({ image, heading, serialNo, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
        <img 
          src={image} 
          alt={heading}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Number and Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FF9F1C]/10 rounded-full flex items-center justify-center">
            <span className="text-[#FF9F1C] font-bold">{serialNo}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">{heading}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HowWeWorkCard;
