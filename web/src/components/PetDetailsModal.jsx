import React from "react";
import ReactModal from "react-modal";
import PetProfileCard from './PetProfileCard';
import { IoMdClose } from "react-icons/io";

const PetDetailsModal = ({ petDetails, isModalOpen, setIsModalOpen }) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel="Pet Details"
      className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4"
      style={{
        content: {
          maxWidth: "500px",
          width: "100%",
          margin: "auto",
          padding: "0",
          border: "none",
          background: "transparent",
        },
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#FF9F1C] p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Pet Details</h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <IoMdClose size={28} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <PetProfileCard 
            single={true} 
            description={petDetails.description} 
            name={petDetails.name} 
            breed={petDetails.breed} 
            gender={petDetails.gender} 
            image={petDetails.imageUrl} 
          />
        </div>
      </div>
    </ReactModal>
  );
};

export default PetDetailsModal;
