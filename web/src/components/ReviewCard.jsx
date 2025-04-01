import React from "react";
import { IoStar } from "react-icons/io5";

// import ReviewImg from "../assets/reviewImg.png";

const ReviewCard = ({
  image,
  parentImage,
  sitterName,
  serviceName,
  review,
  petParent,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      {/* Header with Sitter Info */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-[#FF9F1C]/10 rounded-full blur-md opacity-50" />
          <img
            src={image}
            alt="pet sitter"
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg relative z-10"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">{sitterName}</h3>
          <p className="text-sm text-[#FF9F1C] font-medium">{serviceName}</p>
        </div>
      </div>

      {/* Review Content */}
      <div className="mb-6">
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, index) => (
            <IoStar key={index} className="text-[#FF9F1C] text-lg" />
          ))}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {review}
        </p>
      </div>

      {/* Pet Parent Info */}
      <div className="flex items-center gap-3 pt-4 border-t">
        <img
          src={parentImage}
          alt="pet parent"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-gray-900">{petParent}</p>
          <p className="text-xs text-gray-500">Pet Parent</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
