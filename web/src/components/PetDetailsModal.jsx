import React from "react";
import ReactModal from "react-modal";
import PetProfileCard from './PetProfileCard'

const PetDetailsModal = ({petDetails,isModalOpen,setIsModalOpen}) => {
  return (
    <ReactModal
      style={{
        content: {
          height: "90%",
          width: "30%",
          left: "35%",
          top: "10%",
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          
        },
      }}
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel="Register Your Pet"
      
    >
      <div className="text-center text-xl font-bold">Pet Details</div>
<PetProfileCard single={true} description={petDetails.description} name={petDetails.name} breed={petDetails.breed} gender={petDetails.gender} image={petDetails.imageUrl} />
    </ReactModal>
  );
};

export default PetDetailsModal;
