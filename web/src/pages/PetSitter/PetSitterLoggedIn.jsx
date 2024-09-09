import React, { useEffect, useState } from "react";
import ServicesCard from "../../components/ServicesCard";
import useUserStore from "../../Store/userStore";
import axios from "../../utils/axiosConfig";
import PetSitterCard from "../../components/petSitter/PetSitterCard";
import PetDetailsModal from "../../components/PetDetailsModal";

const PetSitterLoggedIn = () => {
  const [requests, setRequests] = useState([]);
  const token = useUserStore((state) => state.jwtToken);
  const [petModal,setPetModal]=useState(false)
  useEffect(() => {
    axios({
      url: "/service",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setRequests(res.data.requests);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mb-20 services-gradient">
      <div className="text-center text-[#FF9F1C] font-bold text-2xl pt-10 pb-12">
        Your Pet Sitting Requests!
      </div>
      {!requests.length?<div>No Pet Sitting Request Currently!</div>:""}
      <div className="flex flex-col items-center gap-y-14 w-full">
        <div className="flex gap-x-16">
          {requests.map(({ _id,status,petDetails, petParent,serviceType,pickUpTime
 }) => (
            <>
            <PetSitterCard
              email={petParent.email}
              phone={petParent.mobile}
              name={petParent.name}
              image={petParent.profileUrl}
              address={petParent.address}
              serviceType={serviceType}
              setPetModal={setPetModal}
              reqId={_id}
              initialStatus={status}
              pickUpTime={pickUpTime}
            />
            <PetDetailsModal isModalOpen={petModal} setIsModalOpen={setPetModal} petDetails={petDetails}/></>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default PetSitterLoggedIn;
