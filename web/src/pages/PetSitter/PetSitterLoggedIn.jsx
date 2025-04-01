import React, { useEffect, useState } from "react";
import useUserStore from "../../Store/userStore";
import request from "../../services/axios.service";
import PetSitterCard from "../../components/petSitter/PetSitterCard";
import PetDetailsModal from "../../components/PetDetailsModal";
import { FaInbox } from "react-icons/fa";

const PetSitterLoggedIn = () => {
  const [requests, setRequests] = useState([]);
  const token = useUserStore((state) => state.jwtToken);
  const [petModal, setPetModal] = useState(false);

  useEffect(() => {
    request({
      url: "/service",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setRequests(res.data.requests);
      })
      .catch((err) => {
        console.error("Error fetching requests:", err);
      });
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Your Pet Sitting Requests
          </h1>
          <p className="text-gray-600">
            Manage and respond to your incoming pet sitting requests
          </p>
        </div>

        {/* Requests Grid */}
        {requests.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-xl shadow-sm">
            <FaInbox className="w-16 h-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Requests Yet
            </h3>
            <p className="text-gray-600 text-center max-w-md">
              You don't have any pet sitting requests at the moment. 
              They will appear here when pet parents book your services.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requests.map(({
              _id,
              status,
              petDetails,
              petParent,
              serviceType,
              pickUpTime,
            }) => (
              <React.Fragment key={_id}>
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
                <PetDetailsModal
                  isModalOpen={petModal}
                  setIsModalOpen={setPetModal}
                  petDetails={petDetails}
                />
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PetSitterLoggedIn;
