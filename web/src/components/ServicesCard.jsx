import React, { useState } from "react";
import BookServiceModal from "./BookServiceModal";
import useUserStore from "../Store/userStore";
import { toast } from "react-toastify";
import { IoPaw } from "react-icons/io5";

const ServicesCard = ({ name, image, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  return (
    <div className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <div className="flex items-center gap-2 mb-3">
          <IoPaw className="text-[#FF9F1C] text-xl" />
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 flex-grow">
          {description}
        </p>

        {/* Button */}
        <button
          onClick={() => {
            if (isLoggedIn) return setIsModalOpen(true);
            return toast.error("Log In To Perform This Action", {
              toastId: "book-service-modal",
            });
          }}
          className="w-full bg-[#FF9F1C] text-white py-3 rounded-lg font-medium hover:bg-[#e68f1a] transition-colors flex items-center justify-center gap-2"
        >
          Book Service
        </button>
      </div>

      <BookServiceModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default ServicesCard;
